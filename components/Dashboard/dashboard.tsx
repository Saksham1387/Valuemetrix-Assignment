"use client"

import { useState } from "react"
import { PlusCircle, Share2, Download, LayoutGrid, List, RefreshCw, ChevronDown, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PortfolioForm } from "@/components/portfolio-form"
import { DashboardNav } from "./dashboard-nav"

export const DashboardPage = () => {
  const [portfolios, setPortfolios] = useState([
    {
      id: "1",
      name: "Tech Growth Portfolio",
      description: "High-growth technology stocks",
      holdings: [
        { ticker: "AAPL", name: "Apple Inc.", quantity: 10, value: 1750.5 },
        { ticker: "MSFT", name: "Microsoft Corp.", quantity: 5, value: 1850.25 },
        { ticker: "GOOGL", name: "Alphabet Inc.", quantity: 3, value: 4200.75 },
      ],
      cash: 2500,
      totalValue: 10301.5,
      createdAt: "2023-05-15T10:30:00Z",
    },
    {
      id: "2",
      name: "Dividend Income",
      description: "Stable dividend-paying stocks",
      holdings: [
        { ticker: "JNJ", name: "Johnson & Johnson", quantity: 8, value: 1360.0 },
        { ticker: "PG", name: "Procter & Gamble", quantity: 12, value: 1800.0 },
        { ticker: "KO", name: "Coca-Cola Company", quantity: 20, value: 1100.0 },
      ],
      cash: 1500,
      totalValue: 5760.0,
      createdAt: "2023-06-20T14:45:00Z",
    },
  ])

  const [showShareDialog, setShowShareDialog] = useState(false)
  const [shareLink, setShareLink] = useState("")
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0])
  const [viewMode, setViewMode] = useState("grid")
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardNav />

      <div className="container py-6">


        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Portfolio
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Portfolio</DialogTitle>
                  <DialogDescription>Add your portfolio details and holdings below.</DialogDescription>
                </DialogHeader>
                <PortfolioForm setShowCreateDialog={setShowCreateDialog}/>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-[240px] justify-between">
                    {selectedPortfolio.name}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[240px]">
                  {portfolios.map((portfolio) => (
                    <DropdownMenuItem key={portfolio.id} onClick={() => setSelectedPortfolio(portfolio)}>
                      {portfolio.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="icon">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => handleShare(selectedPortfolio.id)}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>

              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>

              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${selectedPortfolio.totalValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Updated just now</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-positive">+$1,245.30</div>
                <p className="text-xs text-positive">+12.4%</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Est. Dividend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$320.45</div>
                <p className="text-xs text-muted-foreground">3.1% Yield</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{selectedPortfolio.holdings.length} Positions</h3>
              <p className="text-sm text-muted-foreground">
                Day Return: <span className="text-positive">+$145.20 (1.4%)</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Allocation
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>By Value</DropdownMenuItem>
                  <DropdownMenuItem>By Sector</DropdownMenuItem>
                  <DropdownMenuItem>Alphabetical</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tabs defaultValue="today" className="w-[200px]">
                <TabsList className="grid w-full grid-cols-2 h-9 p-1 bg-zinc-900">
                  <TabsTrigger value="today" className="rounded-sm">
                    Today
                  </TabsTrigger>
                  <TabsTrigger value="total" className="rounded-sm">
                    Total
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className="rounded-none"
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className="rounded-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedPortfolio.holdings.map((holding, index) => (
                <Card key={index} className="border-zinc-800 bg-zinc-900">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{holding.ticker}</CardTitle>
                        <CardDescription>{holding.name}</CardDescription>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800">
                        {holding.ticker.charAt(0)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Quantity:</span>
                        <span className="font-medium">{holding.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Value:</span>
                        <span className="font-medium">${holding.value.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Day Change:</span>
                        <span className="font-medium text-positive">+1.2%</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              <Card className="border-zinc-800 bg-zinc-900">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Cash</CardTitle>
                      <CardDescription>USD</CardDescription>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800">$</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Value:</span>
                      <span className="font-medium">${selectedPortfolio.cash.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Allocation:</span>
                      <span className="font-medium">
                        {((selectedPortfolio.cash / selectedPortfolio.totalValue) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Cash
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left p-4">#</th>
                      <th className="text-left p-4">Ticker</th>
                      <th className="text-left p-4">Name</th>
                      <th className="text-right p-4">Quantity</th>
                      <th className="text-right p-4">Value</th>
                      <th className="text-right p-4">Day Change</th>
                      <th className="text-right p-4">Total Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPortfolio.holdings.map((holding, index) => (
                      <tr key={index} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                        <td className="p-4">{index + 1}</td>
                        <td className="p-4 font-medium">{holding.ticker}</td>
                        <td className="p-4">{holding.name}</td>
                        <td className="p-4 text-right">{holding.quantity}</td>
                        <td className="p-4 text-right">${holding.value.toLocaleString()}</td>
                        <td className="p-4 text-right text-positive">+1.2%</td>
                        <td className="p-4 text-right text-positive">+12.4%</td>
                      </tr>
                    ))}
                    <tr className="hover:bg-zinc-800/50">
                      <td className="p-4">{selectedPortfolio.holdings.length + 1}</td>
                      <td className="p-4 font-medium">CASH</td>
                      <td className="p-4">USD</td>
                      <td className="p-4 text-right">-</td>
                      <td className="p-4 text-right">${selectedPortfolio.cash.toLocaleString()}</td>
                      <td className="p-4 text-right">-</td>
                      <td className="p-4 text-right">-</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Portfolio</DialogTitle>
            <DialogDescription>Anyone with this link can view your portfolio without logging in.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Input value={shareLink} readOnly className="bg-zinc-900" />
            <Button onClick={copyToClipboard}>Copy</Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowShareDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
