import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Portfolio } from "@/lib/types/portfolio";

export const SummaryCards = ({
  selectedPortfolio,
}: {
  selectedPortfolio: Portfolio;
}) => {
  const calculateTotalValue = (portfolio: Portfolio) => {
    const holdingsValue = portfolio.holdings.reduce((sum, holding) => {
      const price = 100;
      return sum + holding.quantity * price;
    }, 0);
    return holdingsValue + portfolio.cash;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${calculateTotalValue(selectedPortfolio).toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">Updated just now</p>
        </CardContent>
      </Card>
    </div>
  );
};
