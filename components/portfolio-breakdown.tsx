"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PortfolioBreakdown({ portfolio }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredHoldings = portfolio.holdings.filter(
    (holding) =>
      holding.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      holding.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Portfolio Breakdown</CardTitle>
          <CardDescription>View and analyze your portfolio holdings</CardDescription>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search holdings..."
              className="pl-8 bg-zinc-800 border-zinc-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800">
                <TableHead>Ticker</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead className="text-right">Weight</TableHead>
                <TableHead>Sector</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHoldings.map((holding) => (
                <TableRow key={holding.ticker} className="border-zinc-800">
                  <TableCell className="font-medium">{holding.ticker}</TableCell>
                  <TableCell>{holding.name}</TableCell>
                  <TableCell className="text-right">{holding.quantity}</TableCell>
                  <TableCell className="text-right">${holding.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${holding.value.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{holding.weight.toFixed(1)}%</TableCell>
                  <TableCell>{holding.sector}</TableCell>
                </TableRow>
              ))}
              <TableRow className="border-zinc-800">
                <TableCell className="font-medium">CASH</TableCell>
                <TableCell>Cash Position</TableCell>
                <TableCell className="text-right">-</TableCell>
                <TableCell className="text-right">-</TableCell>
                <TableCell className="text-right">${portfolio.cash.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  {((portfolio.cash / portfolio.totalValue) * 100).toFixed(1)}%
                </TableCell>
                <TableCell>Cash</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
