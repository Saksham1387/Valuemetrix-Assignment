"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TransformedPortfolio } from "@/app/portfolio/[id]/page"

interface RiskAnalysisProps {
  portfolio: TransformedPortfolio;
}

export function RiskAnalysis({ portfolio }: RiskAnalysisProps) {
  const riskMetrics = [
    {
      name: "Volatility",
      value: portfolio.risk.volatility === "High" ? 75 : portfolio.risk.volatility === "Medium" ? 50 : 25,
    },
    { name: "Sharpe Ratio", value: portfolio.risk.sharpeRatio * 25 },
    { name: "Beta", value: portfolio.risk.beta * 25 },
    { name: "Max Drawdown", value: Math.abs(portfolio.risk.drawdown) * 2 },
  ]

  const riskColor =
    portfolio.risk.score >= 70 ? "text-negative" : portfolio.risk.score >= 40 ? "text-amber-500" : "text-positive"

  const riskDescription =
    portfolio.risk.score >= 70
      ? "High risk portfolio with potential for significant volatility"
      : portfolio.risk.score >= 40
        ? "Moderate risk with balanced return potential"
        : "Conservative portfolio focused on capital preservation"

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Risk Score</CardTitle>
          <CardDescription>Overall risk assessment of your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-muted-foreground/20"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className={riskColor}
                strokeWidth="10"
                strokeDasharray={`${portfolio.risk.score * 2.51} 251`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className={`text-4xl font-bold ${riskColor}`}>{portfolio.risk.score}</span>
              <span className="text-sm text-muted-foreground">out of 100</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">{riskDescription}</p>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Risk Metrics</CardTitle>
          <CardDescription>Key risk indicators for your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Volatility</span>
              <span className="text-sm text-muted-foreground">{portfolio.risk.volatility}</span>
            </div>
            <Progress value={riskMetrics[0].value} className="h-2 bg-zinc-800" indicatorClassName="bg-purple-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Sharpe Ratio</span>
              <span className="text-sm text-muted-foreground">{portfolio.risk.sharpeRatio.toFixed(2)}</span>
            </div>
            <Progress value={riskMetrics[1].value} className="h-2 bg-zinc-800" indicatorClassName="bg-purple-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Beta</span>
              <span className="text-sm text-muted-foreground">{portfolio.risk.beta.toFixed(2)}</span>
            </div>
            <Progress value={riskMetrics[2].value} className="h-2 bg-zinc-800" indicatorClassName="bg-purple-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Max Drawdown</span>
              <span className="text-sm text-muted-foreground">{portfolio.risk.drawdown.toFixed(1)}%</span>
            </div>
            <Progress value={riskMetrics[3].value} className="h-2 bg-zinc-800" indicatorClassName="bg-purple-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Risk Comparison</CardTitle>
          <CardDescription>How your portfolio compares to common benchmarks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: "Your Portfolio", value: portfolio.risk.score },
                  { name: "S&P 500", value: 50 },
                  { name: "Bonds", value: 20 },
                  { name: "Crypto", value: 90 },
                  { name: "Real Estate", value: 40 },
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis label={{ value: "Risk Score", angle: -90, position: "insideLeft" }} stroke="#888" />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
