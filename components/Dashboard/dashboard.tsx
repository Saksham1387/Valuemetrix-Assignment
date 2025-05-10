"use client";
import { useState, useEffect } from "react";
import {
  PlusCircle,
  LayoutGrid,
  List,
  RefreshCw,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PortfolioForm } from "@/components/Portfoilio/portfolio-form";
import { DashboardNav } from "./dashboard-nav";
import { getPortfolios } from "@/app/actions/portfolio";
import { Portfolio } from "@/lib/types/portfolio";
import { SummaryCards } from "./summary-cards";
import { useRouter } from "next/navigation";

interface DashboardPageProps {
  initialPortfolios: Portfolio[];
}

export const DashboardPage = ({ initialPortfolios }: DashboardPageProps) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(
    initialPortfolios.length > 0 ? initialPortfolios[0] : null
  );
  const [stockPrices, setStockPrices] = useState<Record<string, any>>({});
  const router = useRouter();
  const [viewMode, setViewMode] = useState("grid");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const emptyPortfolio: Portfolio = {
    id: "",
    name: "",
    description: "",
    holdings: [],
    cash: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "",
    visibility: "PRIVATE",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
  };

  const fetchStockPrices = async (symbols: string[]) => {
    try {
      const response = await fetch("/api/stocks", {
        method: "POST",
        body: JSON.stringify({ symbols }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch stock prices");
      }

      const data = await response.json();
      const prices: Record<string, any> = {};

      data.quotes.forEach((quote: any) => {
        if (!quote.error) {
          prices[quote.symbol] = {
            price: quote.price,
            change: quote.change,
            changePercent: quote.changePercent,
            timestamp: quote.timestamp,
            high: quote.high,
            low: quote.low,
            open: quote.open,
            previousClose: quote.previousClose,
            companyName: quote.companyName || quote.symbol,
            sector: quote.sector || "Unknown",
            currency: quote.currency || "USD",
          };
        }
      });

      return prices;
    } catch (error) {
      console.error("Error fetching stock prices:", error);
      return {};
    }
  };

  useEffect(() => {
    const fetchPrices = async () => {
      if (selectedPortfolio) {
        const symbols = [...new Set(selectedPortfolio.holdings.map((h) => h.ticker))];
        const prices = await fetchStockPrices(symbols);
        setStockPrices(prices);
      }
    };
    fetchPrices();
  }, [selectedPortfolio]);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      const updatedPortfolios = await getPortfolios();
      setPortfolios(updatedPortfolios);
      const currentPortfolio = updatedPortfolios.find(
        (p) => p.id === selectedPortfolio?.id
      );
      setSelectedPortfolio(currentPortfolio || updatedPortfolios[0] || null);

      if (currentPortfolio) {
        const symbols = [...new Set(currentPortfolio.holdings.map((h) => h.ticker))];
        const prices = await fetchStockPrices(symbols);
        setStockPrices(prices);
      }

      toast.success("Portfolios refreshed successfully");
    } catch (error) {
      console.error("Error refreshing portfolios:", error);
      toast.error("Failed to refresh portfolios");
    } finally {
      setIsRefreshing(false);
    }
  };

  const calculateTotalValue = (portfolio: Portfolio) => {
    const holdingsValue = portfolio.holdings.reduce((sum, holding) => {
      const price = stockPrices[holding.ticker]?.price || 0;
      return sum + holding.quantity * price;
    }, 0);
    return holdingsValue + portfolio.cash;
  };

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
                  <DialogDescription>
                    Add your portfolio details and holdings below.
                  </DialogDescription>
                </DialogHeader>
                <PortfolioForm setShowCreateDialog={setShowCreateDialog} />
              </DialogContent>
            </Dialog>
          </div>

          {portfolios.length === 0 ? (
            <Card className="border-zinc-800 bg-zinc-900">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-zinc-800 p-4 mb-4">
                  <PlusCircle className="h-8 w-8 text-zinc-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Portfolios Yet</h3>
                <p className="text-zinc-400 mb-6 max-w-md">
                  Create your first portfolio to start tracking your investments and monitor your performance.
                </p>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setShowCreateDialog(true)}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Your First Portfolio
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[240px] justify-between"
                      >
                        {selectedPortfolio?.name || "Select a Portfolio"}
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[240px]">
                      {portfolios.map((portfolio) => (
                        <DropdownMenuItem
                          key={portfolio.id}
                          onClick={() => {
                            setSelectedPortfolio(portfolio);
                          }}
                        >
                          {portfolio.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      router.push(`/portfolio/${selectedPortfolio?.id}`);
                    }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                  >
                    <RefreshCw
                      className={`mr-2 h-4 w-4 ${
                        isRefreshing ? "animate-spin" : ""
                      }`}
                    />
                    Refresh
                  </Button>
                </div>
              </div>

              <SummaryCards selectedPortfolio={selectedPortfolio || emptyPortfolio} />

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">
                    {selectedPortfolio?.holdings?.length || 0} Positions
                  </h3>
                 
                </div>

                <div className="flex items-center gap-2">
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
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedPortfolio?.holdings.map((holding) => {
                    const stockData = stockPrices[holding.ticker];
                    const value = holding.quantity * (stockData?.price || 0);
                    const priceChangeColor = stockData ? (stockData.changePercent >= 0 ? "text-green-500" : "text-red-500") : "";

                    return (
                      <Card key={holding.id} className="border-zinc-800 bg-zinc-900">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle>{holding.ticker}</CardTitle>
                              <CardDescription>{stockData?.companyName || holding.ticker}</CardDescription>
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800">
                              {holding.ticker.charAt(0)}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">
                                Quantity:
                              </span>
                              <span className="font-medium">{holding.quantity}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">
                                Price:
                              </span>
                              <span className="font-medium">
                                ${stockData?.price?.toLocaleString() || "N/A"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">
                                Value:
                              </span>
                              <span className="font-medium">
                                ${value.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">
                                Day Change:
                              </span>
                              <span className={`font-medium ${priceChangeColor}`}>
                                {stockData ? `${stockData.changePercent >= 0 ? "+" : ""}${stockData.changePercent.toFixed(2)}%` : "N/A"}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}

                  <Card className="border-zinc-800 bg-zinc-900">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Cash</CardTitle>
                          <CardDescription>USD</CardDescription>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800">
                          $
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            Value:
                          </span>
                          <span className="font-medium">
                            ${selectedPortfolio?.cash.toLocaleString() || 0}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            Allocation:
                          </span>
                          <span className="font-medium">
                            {(
                              ((selectedPortfolio?.cash || 0) /
                                calculateTotalValue(
                                  selectedPortfolio || emptyPortfolio
                                )) *
                              100
                            ).toFixed(1)}
                            %
                          </span>
                        </div>
                      </div>
                    </CardContent>
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
                          <th className="text-right p-4">Price</th>
                          <th className="text-right p-4">Value</th>
                          <th className="text-right p-4">Day Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedPortfolio?.holdings.map((holding, index) => {
                          const stockData = stockPrices[holding.ticker];
                          const value = holding.quantity * (stockData?.price || 0);
                          const priceChangeColor = stockData ? (stockData.changePercent >= 0 ? "text-green-500" : "text-red-500") : "";

                          return (
                            <tr
                              key={holding.id}
                              className="border-b border-zinc-800 hover:bg-zinc-800/50"
                            >
                              <td className="p-4">{index + 1}</td>
                              <td className="p-4 font-medium">{holding.ticker}</td>
                              <td className="p-4">{stockData?.companyName || holding.ticker}</td>
                              <td className="p-4 text-right">{holding.quantity}</td>
                              <td className="p-4 text-right">
                                ${stockData?.price?.toLocaleString() || "N/A"}
                              </td>
                              <td className="p-4 text-right">
                                ${value.toLocaleString()}
                              </td>
                              <td className={`p-4 text-right ${priceChangeColor}`}>
                                {stockData ? `${stockData.changePercent >= 0 ? "+" : ""}${stockData.changePercent.toFixed(2)}%` : "N/A"}
                              </td>
                            </tr>
                          );
                        })}
                        <tr className="hover:bg-zinc-800/50">
                          <td className="p-4">
                            {selectedPortfolio?.holdings?.length  ? selectedPortfolio?.holdings?.length + 1 : 0}
                          </td>
                          <td className="p-4 font-medium">CASH</td>
                          <td className="p-4">USD</td>
                          <td className="p-4 text-right">-</td>
                          <td className="p-4 text-right">-</td>
                          <td className="p-4 text-right">
                            ${selectedPortfolio?.cash.toLocaleString() || 0}
                          </td>
                          <td className="p-4 text-right">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Portfolio</DialogTitle>
            <DialogDescription>
              Anyone with this link can view your portfolio without logging in.
            </DialogDescription>
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
  );
};
