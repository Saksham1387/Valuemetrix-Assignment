"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Download, Share2, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { PortfolioBreakdown } from "@/components/portfolio-breakdown"
import { SectorAnalysis } from "@/components/sector-analysis"
import { RiskAnalysis } from "@/components/risk-analysis"
import { AIInsights } from "@/components/ai-insights"

export default function PortfolioPage() {
  const params = useParams()
  const portfolioId = params.id

  const [portfolio, setPortfolio] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [shareLink, setShareLink] = useState("")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo purposes, we'll simulate a portfolio
    setTimeout(() => {
      if (portfolioId === "1") {
        setPortfolio({
          id: "1",
          name: "Tech Growth Portfolio",
          description: "High-growth technology stocks",
          holdings: [
            {
              ticker: "AAPL",
              name: "Apple Inc.",
              quantity: 10,
              price: 175.05,
              value: 1750.5,
              weight: 17.0,
              sector: "Technology",
            },
            {
              ticker: "MSFT",
              name: "Microsoft Corp.",
              quantity: 5,
              price: 370.05,
              value: 1850.25,
              weight: 18.0,
              sector: "Technology",
            },
            {
              ticker: "GOOGL",
              name: "Alphabet Inc.",
              quantity: 3,
              price: 1400.25,
              value: 4200.75,
              weight: 40.8,
              sector: "Technology",
            },
            {
              ticker: "AMZN",
              name: "Amazon.com Inc.",
              quantity: 2,
              price: 175.05,
              value: 350.1,
              weight: 3.4,
              sector: "Consumer Cyclical",
            },
            {
              ticker: "NVDA",
              name: "NVIDIA Corp.",
              quantity: 4,
              price: 412.5,
              value: 1650.0,
              weight: 16.0,
              sector: "Technology",
            },
          ],
          cash: 2500,
          totalValue: 10301.5,
          createdAt: "2023-05-15T10:30:00Z",
          sectors: [
            { name: "Technology", value: 9451.5, percentage: 91.7 },
            { name: "Consumer Cyclical", value: 350.1, percentage: 3.4 },
            { name: "Cash", value: 2500, percentage: 4.9 },
          ],
          risk: {
            score: 78,
            volatility: "High",
            sharpeRatio: 1.2,
            beta: 1.35,
            drawdown: -15.2,
          },
        })
      } else if (portfolioId === "2") {
        setPortfolio({
          id: "2",
          name: "Dividend Income",
          description: "Stable dividend-paying stocks",
          holdings: [
            {
              ticker: "JNJ",
              name: "Johnson & Johnson",
              quantity: 8,
              price: 170.0,
              value: 1360.0,
              weight: 23.6,
              sector: "Healthcare",
            },
            {
              ticker: "PG",
              name: "Procter & Gamble",
              quantity: 12,
              price: 150.0,
              value: 1800.0,
              weight: 31.3,
              sector: "Consumer Defensive",
            },
            {
              ticker: "KO",
              name: "Coca-Cola Company",
              quantity: 20,
              price: 55.0,
              value: 1100.0,
              weight: 19.1,
              sector: "Consumer Defensive",
            },
            {
              ticker: "VZ",
              name: "Verizon Communications",
              quantity: 15,
              price: 40.0,
              value: 600.0,
              weight: 10.4,
              sector: "Communication Services",
            },
            {
              ticker: "XOM",
              name: "Exxon Mobil Corp.",
              quantity: 10,
              price: 90.0,
              value: 900.0,
              weight: 15.6,
              sector: "Energy",
            },
          ],
          cash: 1500,
          totalValue: 5760.0,
          createdAt: "2023-06-20T14:45:00Z",
          sectors: [
            { name: "Healthcare", value: 1360.0, percentage: 23.6 },
            { name: "Consumer Defensive", value: 2900.0, percentage: 50.4 },
            { name: "Communication Services", value: 600.0, percentage: 10.4 },
            { name: "Energy", value: 900.0, percentage: 15.6 },
            { name: "Cash", value: 1500, percentage: 26.0 },
          ],
          risk: {
            score: 32,
            volatility: "Low",
            sharpeRatio: 0.8,
            beta: 0.65,
            drawdown: -8.5,
          },
        })
      } else {
        // Default portfolio for demo
        setPortfolio({
          id: portfolioId,
          name: "Sample Portfolio",
          description: "A balanced portfolio for demonstration",
          holdings: [
            {
              ticker: "SPY",
              name: "SPDR S&P 500 ETF",
              quantity: 10,
              price: 450.0,
              value: 4500.0,
              weight: 45.0,
              sector: "ETF",
            },
            {
              ticker: "AAPL",
              name: "Apple Inc.",
              quantity: 5,
              price: 175.05,
              value: 875.25,
              weight: 8.8,
              sector: "Technology",
            },
            {
              ticker: "JNJ",
              name: "Johnson & Johnson",
              quantity: 4,
              price: 170.0,
              value: 680.0,
              weight: 6.8,
              sector: "Healthcare",
            },
            {
              ticker: "BRK.B",
              name: "Berkshire Hathaway",
              quantity: 3,
              price: 350.0,
              value: 1050.0,
              weight: 10.5,
              sector: "Financial Services",
            },
            {
              ticker: "AMZN",
              name: "Amazon.com Inc.",
              quantity: 2,
              price: 175.05,
              value: 350.1,
              weight: 3.5,
              sector: "Consumer Cyclical",
            },
          ],
          cash: 2544.65,
          totalValue: 10000.0,
          createdAt: "2023-07-10T09:15:00Z",
          sectors: [
            { name: "ETF", value: 4500.0, percentage: 45.0 },
            { name: "Technology", value: 875.25, percentage: 8.8 },
            { name: "Healthcare", value: 680.0, percentage: 6.8 },
            { name: "Financial Services", value: 1050.0, percentage: 10.5 },
            { name: "Consumer Cyclical", value: 350.1, percentage: 3.5 },
            { name: "Cash", value: 2544.65, percentage: 25.4 },
          ],
          risk: {
            score: 45,
            volatility: "Medium",
            sharpeRatio: 1.0,
            beta: 0.85,
            drawdown: -10.5,
          },
        })
      }
      setLoading(false)
    }, 500)
  }, [portfolioId])

  const handleShare = () => {
    // Generate a shareable link
    const shareableLink = `${window.location.origin}/portfolio/${portfolioId}?share=true`
    setShareLink(shareableLink)
    setShowShareDialog(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
  }

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

  if (!portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Portfolio Not Found</h2>
          <p className="mt-2 text-muted-foreground">
            The portfolio you're looking for doesn't exist or you don't have access.
          </p>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MainNav />

      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{portfolio.name}</h1>
              <p className="text-muted-foreground">{portfolio.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
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

        <Tabs defaultValue="breakdown" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4 h-9 p-1 bg-zinc-900">
            <TabsTrigger value="breakdown" className="rounded-sm">
              Breakdown
            </TabsTrigger>
            <TabsTrigger value="sectors" className="rounded-sm">
              Sectors
            </TabsTrigger>
            <TabsTrigger value="risk" className="rounded-sm">
              Risk
            </TabsTrigger>
            <TabsTrigger value="insights" className="rounded-sm">
              AI Insights
            </TabsTrigger>
          </TabsList>
          <TabsContent value="breakdown" className="mt-6">
            <PortfolioBreakdown portfolio={portfolio} />
          </TabsContent>
          <TabsContent value="sectors" className="mt-6">
            <SectorAnalysis portfolio={portfolio} />
          </TabsContent>
          <TabsContent value="risk" className="mt-6">
            <RiskAnalysis portfolio={portfolio} />
          </TabsContent>
          <TabsContent value="insights" className="mt-6">
            <AIInsights portfolio={portfolio} />
          </TabsContent>
        </Tabs>

        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Portfolio</DialogTitle>
              <DialogDescription>Anyone with this link can view your portfolio without logging in.</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <Input value={shareLink} readOnly className="bg-zinc-900" />
              <Button onClick={copyToClipboard} className="bg-purple-600 hover:bg-purple-700">
                Copy
              </Button>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowShareDialog(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
