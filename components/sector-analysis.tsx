"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const COLORS = ["#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#ec4899", "#14b8a6"]

export function SectorAnalysis({ portfolio }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2 border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Sector Allocation</CardTitle>
          <CardDescription>Breakdown of your portfolio by sector</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolio.sectors}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                >
                  {portfolio.sectors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Value"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Sector Details</CardTitle>
          <CardDescription>Detailed breakdown of sector allocations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800">
                <TableHead>Sector</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead className="text-right">Allocation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolio.sectors.map((sector) => (
                <TableRow key={sector.name} className="border-zinc-800">
                  <TableCell className="font-medium">{sector.name}</TableCell>
                  <TableCell className="text-right">${sector.value.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{sector.percentage.toFixed(1)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
