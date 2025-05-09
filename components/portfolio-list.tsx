"use client"

import Link from "next/link"
import { Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PortfolioList({ portfolios, onShare }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {portfolios.map((portfolio) => (
        <Card key={portfolio.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle>{portfolio.name}</CardTitle>
            <CardDescription>{portfolio.description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Value:</span>
                <span className="font-medium">${portfolio.totalValue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Holdings:</span>
                <span className="font-medium">{portfolio.holdings.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Cash:</span>
                <span className="font-medium">${portfolio.cash.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/portfolio/${portfolio.id}`}>View Details</Link>
            </Button>
            <Button variant="outline" size="sm" onClick={() => onShare(portfolio.id)}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
