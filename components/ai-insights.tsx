"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Lightbulb, RefreshCw, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function AIInsights({ portfolio }) {
  const [loading, setLoading] = useState(true)
  const [insights, setInsights] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  useEffect(() => {
    // Simulate loading AI insights
    const timer = setTimeout(() => {
      generateInsights()
    }, 1500)

    return () => clearTimeout(timer)
  }, [portfolio])

  const generateInsights = () => {
    setLoading(true)

    // In a real app, this would call an API to generate insights
    // For demo purposes, we'll simulate different insights based on the portfolio
    setTimeout(() => {
      if (portfolio.id === "1") {
        // Tech Growth Portfolio
        setInsights({
          summary:
            "Your tech-heavy portfolio shows strong growth potential but carries significant concentration risk. Consider diversifying into other sectors to reduce volatility.",
          strengths: [
            "Strong exposure to leading tech companies with solid fundamentals",
            "Companies with high growth rates and innovation potential",
            "Good positioning for AI and cloud computing trends",
          ],
          weaknesses: [
            "High concentration in technology sector (91.7%)",
            "Limited diversification across industries",
            "Higher than average volatility",
          ],
          opportunities: [
            "Consider adding some value stocks to balance growth focus",
            "Explore international tech companies for geographic diversification",
            "Add 5-10% allocation to defensive sectors as a hedge",
          ],
          marketTrends: [
            { trend: "AI and Machine Learning", impact: "Positive", tickers: ["NVDA", "MSFT", "GOOGL"] },
            { trend: "Rising Interest Rates", impact: "Negative", tickers: ["AAPL", "MSFT", "AMZN"] },
            { trend: "Cloud Computing Growth", impact: "Positive", tickers: ["MSFT", "AMZN", "GOOGL"] },
          ],
        })
      } else if (portfolio.id === "2") {
        // Dividend Income
        setInsights({
          summary:
            "Your dividend-focused portfolio provides stable income with lower volatility. The defensive positioning is good for capital preservation but may underperform in strong bull markets.",
          strengths: [
            "Strong dividend yield from established companies",
            "Good sector diversification across defensive industries",
            "Lower volatility than market averages",
          ],
          weaknesses: [
            "Limited growth potential compared to broader market",
            "Potential dividend cuts during economic downturns",
            "Sensitivity to interest rate changes",
          ],
          opportunities: [
            "Consider dividend growth stocks to complement current holdings",
            "Explore international dividend payers for geographic diversification",
            "Add small allocation to growth sectors for upside potential",
          ],
          marketTrends: [
            { trend: "Rising Interest Rates", impact: "Mixed", tickers: ["VZ", "PG", "JNJ"] },
            { trend: "Inflation Concerns", impact: "Positive", tickers: ["XOM", "JNJ"] },
            { trend: "Economic Slowdown", impact: "Positive", tickers: ["PG", "KO", "JNJ"] },
          ],
        })
      } else {
        // Default/Sample Portfolio
        setInsights({
          summary:
            "Your balanced portfolio has good diversification across sectors with a mix of growth and value stocks. The ETF allocation provides broad market exposure while individual stocks allow for targeted sector bets.",
          strengths: [
            "Well-diversified across multiple sectors",
            "Balanced risk profile with moderate volatility",
            "Mix of growth and value investments",
          ],
          weaknesses: [
            "Large cash position (25.4%) may drag returns in bull markets",
            "Limited international exposure",
            "Some sector concentrations could be optimized",
          ],
          opportunities: [
            "Consider deploying some cash into the market or fixed income",
            "Add international exposure for geographic diversification",
            "Explore thematic ETFs for targeted sector exposure",
          ],
          marketTrends: [
            { trend: "Economic Recovery", impact: "Positive", tickers: ["SPY", "BRK.B"] },
            { trend: "Supply Chain Issues", impact: "Mixed", tickers: ["AAPL", "AMZN"] },
            { trend: "Healthcare Innovation", impact: "Positive", tickers: ["JNJ"] },
          ],
        })
      }

      setLastUpdated(new Date())
      setLoading(false)
    }, 1500)
  }

  const handleRefresh = () => {
    generateInsights()
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle>AI Portfolio Analysis</CardTitle>
            <CardDescription>Generating intelligent insights based on your portfolio...</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-zinc-800" />
              <Skeleton className="h-4 w-full bg-zinc-800" />
              <Skeleton className="h-4 w-[90%] bg-zinc-800" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Skeleton className="h-5 w-[70%] bg-zinc-800" />
                <Skeleton className="h-4 w-full bg-zinc-800" />
                <Skeleton className="h-4 w-full bg-zinc-800" />
                <Skeleton className="h-4 w-[80%] bg-zinc-800" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-[70%] bg-zinc-800" />
                <Skeleton className="h-4 w-full bg-zinc-800" />
                <Skeleton className="h-4 w-full bg-zinc-800" />
                <Skeleton className="h-4 w-[80%] bg-zinc-800" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Portfolio Analysis</CardTitle>
              <CardDescription>Intelligent insights based on your portfolio composition</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={handleRefresh}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4 p-4 bg-zinc-800/50 rounded-lg">
            <Lightbulb className="h-6 w-6 text-amber-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Summary</h3>
              <p className="text-sm text-muted-foreground mt-1">{insights.summary}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-800/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {insights.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-positive mt-0.5 shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-800/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Weaknesses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {insights.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <TrendingDown className="h-4 w-4 text-negative mt-0.5 shrink-0" />
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-zinc-800 bg-zinc-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {insights.opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <ArrowUpRight className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                    <span>{opportunity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Market Trends Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.marketTrends.map((trend, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        trend.impact === "Positive"
                          ? "bg-green-900/30 text-green-400"
                          : trend.impact === "Negative"
                            ? "bg-red-900/30 text-red-400"
                            : "bg-amber-900/30 text-amber-400"
                      }`}
                    >
                      {trend.impact}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{trend.trend}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Affected holdings: {trend.tickers.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Last updated: {lastUpdated ? lastUpdated.toLocaleString() : "Never"} · AI-generated insights are for
          informational purposes only
        </CardFooter>
      </Card>
    </div>
  )
}
