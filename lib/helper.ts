import { Holding, TransformedPortfolio } from "@/app/portfolio/[id]/page";
import { Portfolio } from "./types/portfolio";

const calculateRiskScore = (
  holdings: Holding[],
  stockPrices: Record<string, any>
): number => {
  const totalValue = holdings.reduce((acc, holding) => {
    const price = stockPrices[holding.ticker]?.price || 0;
    return acc + holding.quantity * price;
  }, 0);

  const weightedVolatility = holdings.reduce((acc, holding) => {
    const stockData = stockPrices[holding.ticker];
    if (!stockData) return acc;

    const value = holding.quantity * stockData.price;
    const weight = value / totalValue;

    const volatility = Math.abs(stockData.changePercent);
    return acc + volatility * weight;
  }, 0);

  return Math.min(Math.round(weightedVolatility * 2), 100);
};

const calculateVolatility = (
  holdings: Holding[],
  stockPrices: Record<string, any>
): string => {
  const riskScore = calculateRiskScore(holdings, stockPrices);
  if (riskScore < 30) return "Low";
  if (riskScore < 70) return "Medium";
  return "High";
};

const calculateSharpeRatio = (
  holdings: Holding[],
  stockPrices: Record<string, any>
): number => {
  const totalValue = holdings.reduce((acc, holding) => {
    const price = stockPrices[holding.ticker]?.price || 0;
    return acc + holding.quantity * price;
  }, 0);

  const weightedReturn = holdings.reduce((acc, holding) => {
    const stockData = stockPrices[holding.ticker];
    if (!stockData) return acc;

    const value = holding.quantity * stockData.price;
    const weight = value / totalValue;
    return acc + stockData.changePercent * weight;
  }, 0);

  const riskFreeRate = 0.02;
  return (
    (weightedReturn - riskFreeRate) /
    (calculateRiskScore(holdings, stockPrices) / 100)
  );
};

const calculateBeta = (
  holdings: Holding[],
  stockPrices: Record<string, any>
): number => {
  const totalValue = holdings.reduce((acc, holding) => {
    const price = stockPrices[holding.ticker]?.price || 0;
    return acc + holding.quantity * price;
  }, 0);

  const weightedBeta = holdings.reduce((acc, holding) => {
    const stockData = stockPrices[holding.ticker];
    if (!stockData) return acc;

    const value = holding.quantity * stockData.price;
    const weight = value / totalValue;

    const beta = stockData.changePercent / 100;
    return acc + beta * weight;
  }, 0);

  return weightedBeta;
};

const calculateDrawdown = (
  holdings: Holding[],
  stockPrices: Record<string, any>
): number => {
  const totalValue = holdings.reduce((acc, holding) => {
    const price = stockPrices[holding.ticker]?.price || 0;
    return acc + holding.quantity * price;
  }, 0);

  const previousValue = holdings.reduce((acc, holding) => {
    const stockData = stockPrices[holding.ticker];
    if (!stockData) return acc;
    return acc + holding.quantity * stockData.previousClose;
  }, 0);

  return ((totalValue - previousValue) / previousValue) * 100;
};

export const transformPortfolio = (
  data: Portfolio,
  stockPrices: Record<string, any>
): TransformedPortfolio => {
  const holdingsValue = data.holdings.reduce((acc, holding) => {
    const price = stockPrices[holding.ticker]?.price || 0;
    return acc + holding.quantity * price;
  }, 0);

  const totalValue = holdingsValue + data.cash;

  const sectorValues: Record<string, number> = {};
  data.holdings.forEach((holding) => {
    const stockData = stockPrices[holding.ticker];
    if (stockData) {
      const sector = stockData.sector || "Unknown";
      const value = holding.quantity * stockData.price;
      sectorValues[sector] = (sectorValues[sector] || 0) + value;
    }
  });

  sectorValues["Cash"] = data.cash;

  const sectors = Object.entries(sectorValues).map(([name, value]) => ({
    name,
    value,
    percentage: (value / totalValue) * 100,
  }));

  const risk = {
    score: calculateRiskScore(data.holdings, stockPrices),
    volatility: calculateVolatility(data.holdings, stockPrices),
    sharpeRatio: calculateSharpeRatio(data.holdings, stockPrices),
    beta: calculateBeta(data.holdings, stockPrices),
    drawdown: calculateDrawdown(data.holdings, stockPrices),
  };

  return {
    ...data,
    totalValue,
    sectors,
    risk,
    stockPrices,
  };
};

export const getPrompt = (portfolio: TransformedPortfolio) => {
  return `Analyze this portfolio object and return structured insights as JSON:
        
        Portfolio Data:
        {
          "cash": ${portfolio.cash},
          "totalValue": ${portfolio.totalValue},
          "description": "${portfolio.description}",
          "createdAt": "${portfolio.createdAt}",
          "updatedAt": "${portfolio.updatedAt}",
          "name": "${portfolio.name}",
          "risk": {
            "score": ${portfolio.risk.score},
            "volatility": "${portfolio.risk.volatility}",
            "sharpeRatio": ${portfolio.risk.sharpeRatio},
            "beta": ${portfolio.risk.beta},
            "drawdown": ${portfolio.risk.drawdown}
          },
          "sectors": [
            ${portfolio.sectors.map((sector) => `{ "sector": "${sector.name}", "weight": ${sector.percentage} }`).join(",")}
          ]
        }
      
        Return JSON with portfolio insights, as per the defined schema.
        `;
};
