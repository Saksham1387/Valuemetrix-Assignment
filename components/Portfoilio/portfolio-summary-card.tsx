
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransformedPortfolio } from "@/app/portfolio/[id]/page";

interface PortfolioSummaryCardProps {
  portfolio: TransformedPortfolio;
}

export const PortfolioSummaryCard = ({ portfolio }: PortfolioSummaryCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <Card className="border-zinc-800 bg-zinc-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Total Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          ${portfolio.totalValue.toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground">Updated just now</p>
      </CardContent>
    </Card>
    <Card className="border-zinc-800 bg-zinc-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {portfolio.holdings.length}
        </div>
        <p className="text-xs text-muted-foreground">
          Across {portfolio.sectors.length - 1} sectors
        </p>
      </CardContent>
    </Card>
    <Card className="border-zinc-800 bg-zinc-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {portfolio.risk.score}/100
        </div>
        <p className="text-xs text-muted-foreground">
          {portfolio.risk.volatility} volatility
        </p>
      </CardContent>
    </Card>
  </div>
  )
};
