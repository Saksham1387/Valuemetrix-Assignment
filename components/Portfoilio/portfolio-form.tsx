"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createPortfolio, type CreatePortfolioInput } from "@/app/actions/portfolio"
import { useRouter } from "next/navigation"

export function PortfolioForm({ setShowCreateDialog }: { setShowCreateDialog: (show: boolean) => void }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cash: "0",
    holdings: [{ ticker: "", name: "", quantity: "", price: "", value: 0 }],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleHoldingChange = (index: number, field: string, value: string) => {
    const updatedHoldings = [...formData.holdings]
    updatedHoldings[index] = {
      ...updatedHoldings[index],
      [field]: value,
    }

    // Calculate value if we have both quantity and price
    if (field === "quantity" || field === "price") {
      const quantity =
        field === "quantity" ? Number.parseFloat(value) || 0 : Number.parseFloat(updatedHoldings[index].quantity) || 0
      const price =
        field === "price" ? Number.parseFloat(value) || 0 : Number.parseFloat(updatedHoldings[index].price) || 0
      updatedHoldings[index].value = quantity * price
    }

    setFormData({
      ...formData,
      holdings: updatedHoldings,
    })
  }

  const addHolding = () => {
    setFormData({
      ...formData,
      holdings: [...formData.holdings, { ticker: "", name: "", quantity: "", price: "", value: 0 }],
    })
  }

  const removeHolding = (index: number) => {
    const updatedHoldings = [...formData.holdings]
    updatedHoldings.splice(index, 1)
    setFormData({
      ...formData,
      holdings: updatedHoldings,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const portfolioData: CreatePortfolioInput = {
      name: formData.name,
      description: formData.description || undefined,
      cash: Number.parseFloat(formData.cash) || 0,
      holdings: formData.holdings.map(holding => ({
        ticker: holding.ticker,
        quantity: Number.parseFloat(holding.quantity) || 0
      }))
    }

    const result = await createPortfolio(portfolioData)
    
    if (result.success) {
      setShowCreateDialog(false)
      toast("Portfolio created successfully")
    } else {
      setShowCreateDialog(false)
      toast.error("Failed to create portfolio")
      console.error("Failed to create portfolio:", result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Portfolio Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="My Investment Portfolio"
            className="bg-zinc-800 border-zinc-700"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="A brief description of your portfolio"
            className="bg-zinc-800 border-zinc-700"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cash">Cash Position ($)</Label>
          <Input
            id="cash"
            name="cash"
            type="number"
            min="0"
            step="0.01"
            value={formData.cash}
            onChange={handleChange}
            placeholder="0.00"
            className="bg-zinc-800 border-zinc-700"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Holdings</Label>
            <Button type="button" variant="outline" size="sm" onClick={addHolding}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Holding
            </Button>
          </div>

          {formData.holdings.map((holding, index) => (
            <div key={index} className="grid gap-4 p-4 border rounded-lg border-zinc-800 bg-zinc-800/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor={`ticker-${index}`}>Ticker Symbol</Label>
                  <Input
                    id={`ticker-${index}`}
                    value={holding.ticker}
                    onChange={(e) => handleHoldingChange(index, "ticker", e.target.value)}
                    placeholder="AAPL"
                    className="bg-zinc-800 border-zinc-700"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`name-${index}`}>Company Name</Label>
                  <Input
                    id={`name-${index}`}
                    value={holding.name}
                    onChange={(e) => handleHoldingChange(index, "name", e.target.value)}
                    placeholder="Apple Inc."
                    className="bg-zinc-800 border-zinc-700"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor={`quantity-${index}`}>Quantity</Label>
                  <Input
                    id={`quantity-${index}`}
                    type="number"
                    min="0"
                    step="0.01"
                    value={holding.quantity}
                    onChange={(e) => handleHoldingChange(index, "quantity", e.target.value)}
                    placeholder="10"
                    className="bg-zinc-800 border-zinc-700"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`price-${index}`}>Price Per Share ($)</Label>
                  <Input
                    id={`price-${index}`}
                    type="number"
                    min="0"
                    step="0.01"
                    value={holding.price}
                    onChange={(e) => handleHoldingChange(index, "price", e.target.value)}
                    placeholder="150.00"
                    className="bg-zinc-800 border-zinc-700"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">Value: </span>
                  <span className="text-sm">${holding.value.toFixed(2)}</span>
                </div>
                {formData.holdings.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeHolding(index)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
          Create Portfolio
        </Button>
      </div>
    </form>
  )
}
