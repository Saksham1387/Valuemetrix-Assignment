import { NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const FINNHUB_BASE_URL = "https://finnhub.io/api/v1";

interface CacheEntry {
  data: any;
  timestamp: number;
}

const cache: Record<string, CacheEntry> = {};
const CACHE_TTL = 5 * 60 * 1000; 
const MAX_CACHE_SIZE = 1000;

function cleanupCache() {
  const now = Date.now();
  const entries = Object.entries(cache);
  
  entries.forEach(([key, entry]) => {
    if (now - entry.timestamp > CACHE_TTL) {
      delete cache[key];
    }
  });

  if (Object.keys(cache).length > MAX_CACHE_SIZE) {
    const sortedEntries = entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
    const entriesToRemove = sortedEntries.slice(0, Object.keys(cache).length - MAX_CACHE_SIZE);
    entriesToRemove.forEach(([key]) => delete cache[key]);
  }
}

function getFromCache(symbol: string): any | null {
  try {
    const entry = cache[symbol];
    if (!entry) {
      console.log(`Cache miss for ${symbol}`);
      return null;
    }

    const now = Date.now();
    if (now - entry.timestamp > CACHE_TTL) {
      console.log(`Cache expired for ${symbol}`);
      delete cache[symbol];
      return null;
    }

    console.log(`Cache hit for ${symbol}`);
    return entry.data;
  } catch (error) {
    console.error(`Error accessing cache for ${symbol}:`, error);
    return null;
  }
}

function setCache(symbol: string, data: any) {
  try {
    cleanupCache();
    
    cache[symbol] = {
      data,
      timestamp: Date.now(),
    };
    console.log(`Cache updated for ${symbol}`);
  } catch (error) {
    console.error(`Error setting cache for ${symbol}:`, error);
  }
}

export async function POST(request: Request) {
  try {
    const { symbols } = await request.json();

    if (!symbols || !Array.isArray(symbols) || symbols.length === 0) {
      return NextResponse.json(
        { error: "Invalid symbols array" },
        { status: 400 }
      );
    }

    if (!FINNHUB_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const quotes = await Promise.all(
      symbols.map(async (symbol) => {
        try {
          const cachedData = getFromCache(symbol);
          if (cachedData) {
            console.log(`Cache hit for ${symbol}`);
            return cachedData;
          }

          console.log(`Cache miss for ${symbol}`);
          const quoteResponse = await fetch(
            `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
          );

          if (!quoteResponse.ok) {
            console.error(
              `Error fetching quote for ${symbol}:`,
              await quoteResponse.text()
            );
            return { symbol, error: "Failed to fetch quote data" };
          }

          const quoteData = await quoteResponse.json();

          const profileResponse = await fetch(
            `${FINNHUB_BASE_URL}/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`
          );

          const profileData = profileResponse.ok
            ? await profileResponse.json()
            : {};

          const stockData = {
            symbol,
            price: quoteData.c,
            change: quoteData.d,
            changePercent: quoteData.dp,
            high: quoteData.h,
            low: quoteData.l,
            open: quoteData.o,
            previousClose: quoteData.pc,
            timestamp: new Date().toISOString(),
            companyName: profileData.name || symbol,
            sector: profileData.finnhubIndustry,
            currency: profileData.currency || "USD",
          };

          setCache(symbol, stockData);

          return stockData;
        } catch (error) {
          console.error(`Error processing ${symbol}:`, error);
          return { symbol, error: "Failed to process data" };
        }
      })
    );

    return NextResponse.json({ quotes });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return NextResponse.json(
      { error: "Failed to fetch stock data" },
      { status: 500 }
    );
  }
}
