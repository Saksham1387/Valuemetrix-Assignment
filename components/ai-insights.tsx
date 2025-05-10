"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Lightbulb, RefreshCw, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { TransformedPortfolio } from "@/app/portfolio/[id]/page"
import axios from "axios"
interface AIInsightsProps {
  portfolio: TransformedPortfolio;
}

interface SectorExposure {
  sector: string;
  exposurePercentage: number;
}

interface MarketTrendsImpact {
  technologyUpside: string;
  consumerSentiment: string;
  interestRateSensitivity: string;
}

interface DiversificationAnalysis {
  cashPercentage: number;
  holdingsPercentage: number;
  isWellDiversified: boolean;
  commentary: string;
}

interface PortfolioSummary {
  name: string;
  totalValue: number;
  cash: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface AIInsightsResponse {
  portfolioSummary: PortfolioSummary;
  diversificationAnalysis: DiversificationAnalysis;
  sectorWiseExposure: SectorExposure[];
  aiGeneratedInvestmentThesis: string;
  strengths: string[];
  weaknesses: string[];
  marketTrendsImpact: MarketTrendsImpact;
}

export function AIInsights({ portfolio }: AIInsightsProps) {
  console.log(portfolio)
  const [loading, setLoading] = useState(true)
  const [insights, setInsights] = useState<AIInsightsResponse | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    generateInsights()
  }, [portfolio])

  const generateInsights = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/insights', portfolio)

      

      const data = response.data
      setInsights(data)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching insights:', error)
    } finally {
      setLoading(false)
    }
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

  if (!insights) {
    return null
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
              <h3 className="font-medium">Investment Thesis</h3>
              <p className="text-sm text-muted-foreground mt-1">{insights.aiGeneratedInvestmentThesis}</p>
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
              <CardTitle className="text-base">Market Trends Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="px-2 py-1 rounded text-xs font-medium bg-green-900/30 text-green-400">
                    Technology
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Technology Sector</h4>
                    <p className="text-xs text-muted-foreground mt-1">{insights.marketTrendsImpact.technologyUpside}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="px-2 py-1 rounded text-xs font-medium bg-amber-900/30 text-amber-400">
                    Consumer
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Consumer Sentiment</h4>
                    <p className="text-xs text-muted-foreground mt-1">{insights.marketTrendsImpact.consumerSentiment}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="px-2 py-1 rounded text-xs font-medium bg-blue-900/30 text-blue-400">
                    Interest Rates
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Interest Rate Sensitivity</h4>
                    <p className="text-xs text-muted-foreground mt-1">{insights.marketTrendsImpact.interestRateSensitivity}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-800/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Diversification Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cash</span>
                  <span className="text-sm font-medium">{insights.diversificationAnalysis.cashPercentage}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Holdings</span>
                  <span className="text-sm font-medium">{insights.diversificationAnalysis.holdingsPercentage}%</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">{insights.diversificationAnalysis.commentary}</p>
                </div>
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
