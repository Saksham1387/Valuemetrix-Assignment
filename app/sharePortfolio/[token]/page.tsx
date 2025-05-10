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
}

export default function SharedPortfolioPage() {
  const params = useParams()
  const token = params.token as string

  const [portfolio, setPortfolio] = useState<TransformedPortfolio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const transformPortfolio = (data: Portfolio): TransformedPortfolio => {
    // Calculate total value from holdings and cash
    const holdingsValue = data.holdings.reduce((acc, holding) => {
      // In a real app, you would fetch current prices from an API
      // For now, we'll use mock prices
      const mockPrices: Record<string, number> = {
        AAPL: 175.05,
        MSFT: 370.05,
        GOOGL: 1400.25,
        AMZN: 175.05,
        NVDA: 412.5,
        JNJ: 170.0,
        PG: 150.0,
        KO: 55.0,
        VZ: 40.0,
        XOM: 90.0,
        SPY: 450.0,
        "BRK.B": 350.0,
      }
      const price = mockPrices[holding.ticker] || 100 // Default price if not found
      return acc + holding.quantity * price
    }, 0)

    const totalValue = holdingsValue + data.cash

    // Calculate sectors (mock data for now)
    const sectors = [
      { name: "Technology", value: holdingsValue * 0.6, percentage: 60 },
      { name: "Cash", value: data.cash, percentage: (data.cash / totalValue) * 100 },
    ]

    // Calculate risk metrics (mock data for now)
    const risk = {
      score: 45,
      volatility: "Medium",
      sharpeRatio: 1.0,
      beta: 0.85,
      drawdown: -10.5,
    }

    return {
      ...data,
      totalValue,
      sectors,
      risk,
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
        setPortfolio(transformPortfolio(data))
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

  console.log(portfolio)
  console.log(error)
  if (error || !portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Portfolio Not Foufdsfdsnd</h2>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${portfolio.totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Updated just now</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolio.holdings.length}</div>
              <p className="text-xs text-muted-foreground">Across {portfolio.sectors.length - 1} sectors</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolio.risk.score}/100</div>
              <p className="text-xs text-muted-foreground">{portfolio.risk.volatility} volatility</p>
            </CardContent>
          </Card>
        </div>

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
            {/* <PortfolioBreakdown portfolio={portfolio} /> */}
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