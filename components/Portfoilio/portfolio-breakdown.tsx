"use client"
import { useState } from "react"
import { TrendingUp, TrendingDown, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface StockPrice {
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

interface Holding {
  id: string
  ticker: string
  quantity: number
  portfolioId: string
  createdAt: Date
  updatedAt: Date
}

interface Portfolio {
  holdings: Holding[]
  cash: number
  totalValue: number
  stockPrices: Record<string, StockPrice>
}

export function PortfolioBreakdown({ portfolio }: { portfolio: Portfolio }) {
  const [searchTerm, setSearchTerm] = useState("")
  console.log(portfolio)
  const filteredHoldings = portfolio.holdings.filter(
    (holding) =>
      holding.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      portfolio.stockPrices[holding.ticker]?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const calculateHoldingValue = (holding: Holding) => {
    const price = portfolio.stockPrices[holding.ticker]?.price || 0
    return holding.quantity * price
  }

  const calculateHoldingWeight = (holding: Holding) => {
    const value = calculateHoldingValue(holding)
    return (value / portfolio.totalValue) * 100
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 100)
  }

  const getPriceChangeColor = (change: number) => {
    return change >= 0 ? "text-green-500" : "text-red-500"
  }

  return (
    <div className="space-y-6">
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Portfolio Breakdown</CardTitle>
          <CardDescription>View and analyze your portfolio holdings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800">
                <TableHead>Ticker</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead className="text-right">Weight</TableHead>
                <TableHead className="text-right">Day Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHoldings.map((holding) => {
                const stockData = portfolio.stockPrices[holding.ticker]
                const value = calculateHoldingValue(holding)
                const weight = calculateHoldingWeight(holding)
                const priceChangeColor = stockData ? getPriceChangeColor(stockData.changePercent) : ""

                return (
                  <TableRow key={holding.ticker} className="border-zinc-800">
                    <TableCell className="font-medium">{holding.ticker}</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="flex items-center gap-1">
                            {stockData?.companyName || holding.ticker}
                            <Info className="h-3 w-3 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="space-y-1 text-xs">
                              <p>Open: {stockData ? formatCurrency(stockData.open) : "N/A"}</p>
                              <p>High: {stockData ? formatCurrency(stockData.high) : "N/A"}</p>
                              <p>Low: {stockData ? formatCurrency(stockData.low) : "N/A"}</p>
                              <p>Prev Close: {stockData ? formatCurrency(stockData.previousClose) : "N/A"}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>{stockData?.sector }</TableCell>
                    <TableCell className="text-right">{holding.quantity}</TableCell>
                    <TableCell className="text-right">
                      {stockData ? formatCurrency(stockData.price) : "N/A"}
                    </TableCell>
                    <TableCell className="text-right">{formatCurrency(value)}</TableCell>
                    <TableCell className="text-right">{formatPercentage(weight)}</TableCell>
                    <TableCell className="text-right">
                      {stockData ? (
                        <div className={`flex items-center justify-end gap-1 ${priceChangeColor}`}>
                          {stockData.changePercent >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          {formatPercentage(stockData.changePercent)}
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
              <TableRow className="border-zinc-800 font-medium">
                <TableCell>Cash</TableCell>
                <TableCell>Cash Position</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="text-right">-</TableCell>
                <TableCell className="text-right">-</TableCell>
                <TableCell className="text-right">{formatCurrency(portfolio.cash)}</TableCell>
                <TableCell className="text-right">
                  {formatPercentage((portfolio.cash / portfolio.totalValue) * 100)}
                </TableCell>
                <TableCell className="text-right">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
