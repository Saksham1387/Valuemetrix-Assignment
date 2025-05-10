"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RiskAnalysis } from "@/components/Portfoilio/risk-analysis"
import { AIInsights } from "@/components/ai-insights"
import { DashboardNav } from "@/components/Dashboard/dashboard-nav"
import { getPortfolioByShareToken } from "@/app/actions/portfolio"
import type { Portfolio as PortfolioType } from "@/lib/types/portfolio"
import { transformPortfolio } from "@/lib/helper"
import { PortfolioBreakdown } from "@/components/Portfoilio/portfolio-breakdown"
import { PortfolioSummaryCard } from "@/components/Portfoilio/portfolio-summary-card"
import { RefreshCw } from "lucide-react"

interface Holding {
  id: string
  ticker: string
  quantity: number
  portfolioId: string
  createdAt: Date
  updatedAt: Date
}

interface Portfolio extends PortfolioType {
  holdings: Holding[]
}

interface TransformedPortfolio extends Portfolio {
  totalValue: number
  sectors: Array<{
    name: string
    value: number
    percentage: number
  }>
  risk: {
    score: number
    volatility: string
    sharpeRatio: number
    beta: number
    drawdown: number
  }
  stockPrices: Record<
    string,
    {
      price: number
      change: number
      changePercent: number
      timestamp: string
      high: number
      low: number
      open: number
      previousClose: number
      companyName: string
      sector: string
      currency: string
    }
  >
}

export default function SharedPortfolioPage() {
  const params = useParams()
  const token = params.token as string

  const [portfolio, setPortfolio] = useState<TransformedPortfolio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshingPrices, setRefreshingPrices] = useState(false)

  const fetchStockPrices = async (symbols: string[]) => {
    try {
      const response = await fetch("/api/stocks", {
        method: "POST",
        body: JSON.stringify({ symbols }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch stock prices")
      }

      const data = await response.json()
      const prices: Record<string, any> = {}

      data.quotes.forEach((quote: any) => {
        if (!quote.error) {
          prices[quote.symbol] = {
            price: quote.price,
            change: quote.change,
            changePercent: quote.changePercent,
            timestamp: quote.timestamp,
            high: quote.high,
            low: quote.low,
            open: quote.open,
            previousClose: quote.previousClose,
            companyName: quote.companyName || quote.symbol,
            sector: quote.sector || "Unknown",
            currency: quote.currency || "USD",
          }
        }
      })

      return prices
    } catch (error) {
      console.error("Error fetching stock prices:", error)
      return {}
    }
  }

  const handleRefresh = async () => {
    if (!portfolio) return

    setRefreshingPrices(true)
    try {
      const symbols = [...new Set(portfolio.holdings.map((h) => h.ticker))]
      const stockPrices = await fetchStockPrices(symbols)
      const updatedPortfolio = transformPortfolio(portfolio, stockPrices)
      setPortfolio(updatedPortfolio)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to refresh prices")
    } finally {
      setRefreshingPrices(false)
    }
  }

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { portfolio: data } = await getPortfolioByShareToken(token)
        if (!data) {
          setError("Portfolio not found")
          return
        }
        const symbols = [...new Set(data.holdings.map((h) => h.ticker))]
        const stockPrices = await fetchStockPrices(symbols)
        const transformedData = transformPortfolio(data, stockPrices)
        setPortfolio(transformedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch portfolio")
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [token])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading portfolio data...</p>
        </div>
      </div>
    )
  }

  if (error || !portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Portfolio Not Found</h2>
          <p className="mt-2 text-muted-foreground">
            {error || "The portfolio you're looking for doesn't exist or the share link has expired."}
          </p>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardNav />

      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">{portfolio.name}</h1>
              <p className="text-muted-foreground">{portfolio.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshingPrices}
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${
                  refreshingPrices ? "animate-spin" : ""
                }`}
              />
              {refreshingPrices ? "Refreshing..." : "Refresh"}
            </Button>
          </div>
        </div>

        <PortfolioSummaryCard portfolio={portfolio} />

        <Tabs defaultValue="breakdown" className="w-full p-2">
          <TabsList className="grid w-full max-w-md grid-cols-3 h-9 bg-zinc-900">
            <TabsTrigger value="breakdown" className="rounded-sm">
              Breakdown
            </TabsTrigger>
            <TabsTrigger value="risk" className="rounded-sm">
              Risk
            </TabsTrigger>
            <TabsTrigger value="insights" className="rounded-sm">
              AI Insights
            </TabsTrigger>
          </TabsList>
          <TabsContent value="breakdown" className="mt-6">
            {portfolio && <PortfolioBreakdown portfolio={portfolio} />}
          </TabsContent>
          <TabsContent value="risk" className="mt-6">
            <RiskAnalysis portfolio={portfolio} />
          </TabsContent>
          <TabsContent value="insights" className="mt-6">
            <AIInsights portfolio={portfolio} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}