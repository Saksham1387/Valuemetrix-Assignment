import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

interface MarketIndex {
  name: string
  value: string
  change: string
  changePercent: string
  isPositive: boolean
}

export function MarketSummary() {
  const indices: MarketIndex[] = [
    {
      name: "S&P 500",
      value: "5669.21",
      change: "+5.27",
      changePercent: "0.09%",
      isPositive: true,
    },
    {
      name: "Dow Jones Industrial Average",
      value: "41331.93",
      change: "-36.52",
      changePercent: "-0.09%",
      isPositive: false,
    },
    {
      name: "NASDAQ Composite",
      value: "17946.34",
      change: "+18.20",
      changePercent: "0.10%",
      isPositive: true,
    },
    {
      name: "NYSE Composite",
      value: "19339.78",
      change: "+25.58",
      changePercent: "0.13%",
      isPositive: true,
    },
  ]

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold">Market Summary</h2>
        <p className="text-muted-foreground">An overview of market trends and your portfolio</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indices.map((index) => (
          <Card key={index.name} className="overflow-hidden border-zinc-800 bg-zinc-900">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{index.name}</p>
                  <p className="text-2xl font-bold">{index.value}</p>
                  <div className="flex items-center">
                    {index.isPositive ? (
                      <TrendingUp className="mr-1 h-3 w-3 text-positive" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3 text-negative" />
                    )}
                    <span className={index.isPositive ? "text-positive" : "text-negative"}>
                      {index.isPositive ? index.changePercent : index.changePercent} {index.change}
                    </span>
                  </div>
                </div>
                {index.isPositive ? (
                  <TrendingUp className="h-8 w-8 text-positive" />
                ) : (
                  <TrendingDown className="h-8 w-8 text-negative" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
