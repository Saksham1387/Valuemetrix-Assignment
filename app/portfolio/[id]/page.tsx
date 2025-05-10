"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Share2,
  RefreshCw,
  Globe,
  Lock,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiskAnalysis } from "@/components/Portfoilio/risk-analysis";
import { AIInsights } from "@/components/ai-insights";
import { PortfolioBreakdown } from "@/components/Portfoilio/portfolio-breakdown";
import { DashboardNav } from "@/components/Dashboard/dashboard-nav";
import {
  getPortfolio,
  updatePortfolioVisibility,
  generateShareToken,
  revokeShareToken,
  getPortfolioShares,
} from "@/app/actions/portfolio";
import type { Portfolio as PortfolioType } from "@/lib/types/portfolio";
import { transformPortfolio } from "@/lib/helper";
import { ActiveShareCard } from "@/components/Portfoilio/active-share-card";
import { PortfolioSummaryCard } from "@/components/Portfoilio/portfolio-summary-card";

export interface Holding {
  id: string;
  ticker: string;
  quantity: number;
  portfolioId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Portfolio extends PortfolioType {
  holdings: Holding[];
}

export interface TransformedPortfolio extends Portfolio {
  totalValue: number;
  sectors: Array<{
    name: string;
    value: number;
    percentage: number;
  }>;
  risk: {
    score: number;
    volatility: string;
    sharpeRatio: number;
    beta: number;
    drawdown: number;
  };
  stockPrices: Record<
    string,
    {
      price: number;
      change: number;
      changePercent: number;
      timestamp: string;
      high: number;
      low: number;
      open: number;
      previousClose: number;
      companyName: string;
      sector: string;
      currency: string;
    }
  >;
}

export default function PortfolioPage() {
  const params = useParams();
  const portfolioId = params.id as string;

  const [portfolio, setPortfolio] = useState<TransformedPortfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [updatingVisibility, setUpdatingVisibility] = useState(false);
  const [generatingShareLink, setGeneratingShareLink] = useState(false);
  const [activeShares, setActiveShares] = useState<
    Array<{
      id: string;
      token: string;
      viewCount: number;
      createdAt: Date;
    }>
  >([]);
  const [revokingShare, setRevokingShare] = useState<string | null>(null);
  const [refreshingPrices, setRefreshingPrices] = useState(false);

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

  const handleRefresh = async () => {
    if (!portfolio) return;

    setRefreshingPrices(true);
    try {
      const symbols = [...new Set(portfolio.holdings.map((h) => h.ticker))];
      const stockPrices = await fetchStockPrices(symbols);
      const updatedPortfolio = transformPortfolio(portfolio, stockPrices);
      setPortfolio(updatedPortfolio);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to refresh prices");
    } finally {
      setRefreshingPrices(false);
    }
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolio(portfolioId);
        if (!data) {
          setError("Portfolio not found");
          return;
        }
        const symbols = [...new Set(data.holdings.map((h) => h.ticker))];
        const stockPrices = await fetchStockPrices(symbols);
        const transformedData = transformPortfolio(data, stockPrices);
        setPortfolio(transformedData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch portfolio"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  const handleShare = async () => {
    if (!portfolio) return;
    setShowShareDialog(true);

    await fetchActiveShares();
  };

  const handleGenerateNewLink = async () => {
    if (!portfolio) return;

    setGeneratingShareLink(true);
    try {
      const { token } = await generateShareToken({
        portfolioId: portfolio.id,
      });
      const shareableLink = `${window.location.origin}/sharePortfolio/${token}`;
      setShareLink(shareableLink);

      await fetchActiveShares();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate share link"
      );
    } finally {
      setGeneratingShareLink(false);
    }
  };

  const handleVisibilityChange = async (
    visibility: "PRIVATE" | "PUBLIC" | "SMART_SHARED"
  ) => {
    if (!portfolio) return;

    setUpdatingVisibility(true);
    try {
      const updatedPortfolio = await updatePortfolioVisibility({
        id: portfolio.id,
        visibility,
      });

      setPortfolio(
        transformPortfolio(
          {
            ...portfolio,
            visibility: updatedPortfolio.visibility,
          },
          {}
        )
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update visibility"
      );
    } finally {
      setUpdatingVisibility(false);
    }
  };

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case "PRIVATE":
        return <Lock className="h-4 w-4" />;
      case "PUBLIC":
        return <Globe className="h-4 w-4" />;
      case "SMART_SHARED":
        return <LinkIcon className="h-4 w-4" />;
      default:
        return <Lock className="h-4 w-4" />;
    }
  };

  const getVisibilityLabel = (visibility: string) => {
    switch (visibility) {
      case "PRIVATE":
        return "Private";
      case "PUBLIC":
        return "Public";
      case "SMART_SHARED":
        return "Smart Shared";
      default:
        return "Private";
    }
  };

  const fetchActiveShares = async () => {
    try {
      const { shares } = await getPortfolioShares(portfolioId);
      setActiveShares(shares);
    } catch (err) {
      console.error("Failed to fetch active shares:", err);
    }
  };

  const handleRevokeShare = async (token: string) => {
    if (!portfolio) return;

    setRevokingShare(token);
    try {
      await revokeShareToken({ token });
      setActiveShares((prev) => prev.filter((share) => share.token !== token));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to revoke share link"
      );
    } finally {
      setRevokingShare(null);
    }
  };

  useEffect(() => {
    if (portfolio) {
      fetchActiveShares();
    }
  }, [portfolio]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Loading portfolio data...
          </p>
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Portfolio Not Found</h2>
          <p className="mt-2 text-muted-foreground">
            {error ||
              "The portfolio you're looking for doesn't exist or you don't have access."}
          </p>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardNav />

      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{portfolio.name}</h1>
              <p className="text-muted-foreground">{portfolio.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" disabled={updatingVisibility}>
                  {portfolio && getVisibilityIcon(portfolio.visibility)}
                  <span className="ml-2">
                    {portfolio && getVisibilityLabel(portfolio.visibility)}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange("PRIVATE")}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Private
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange("PUBLIC")}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Public
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange("SMART_SHARED")}
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Smart Shared
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {portfolio?.visibility === "SMART_SHARED" && (
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            )}
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshingPrices}
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${
                  refreshingPrices ? "animate-spin" : ""
                }`}
              />
              {refreshingPrices ? "Refreshing..." : "Refresh"}
            </Button>
          </div>
        </div>

        <PortfolioSummaryCard portfolio={portfolio} />

        <Tabs defaultValue="breakdown" className="w-full p-2">
          <TabsList className="grid w-full max-w-md grid-cols-3 h-9 bg-zinc-900 rounded-lg">
            <TabsTrigger value="breakdown" className="rounded-lg data-[state=active]:bg-zinc-800 data-[state=active]:z-10 data-[state=active]:text-white">
              Breakdown
            </TabsTrigger>
            <TabsTrigger value="risk" className="rounded-lg data-[state=active]:bg-zinc-800 data-[state=active]:z-10 data-[state=active]:text-white">
              Risk
            </TabsTrigger>
            <TabsTrigger value="insights" className="rounded-lg data-[state=active]:bg-zinc-800 data-[state=active]:z-10 data-[state=active]:text-white">
              AI Insights
            </TabsTrigger>
          </TabsList>
          <TabsContent value="breakdown" className="mt-6">
            {portfolio && <PortfolioBreakdown portfolio={portfolio} />}
          </TabsContent>
          <TabsContent value="risk" className="mt-6">
            <RiskAnalysis portfolio={portfolio} />
          </TabsContent>
          <TabsContent value="insights" className="mt-6">
            <AIInsights portfolio={portfolio} />
          </TabsContent>
        </Tabs>

        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Share Portfolio</DialogTitle>
              <DialogDescription>
                Anyone with these links can view your portfolio without logging
                in. Links will remain active until you revoke access.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-between gap-2">
              <Button
                onClick={handleGenerateNewLink}
                disabled={generatingShareLink}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {generatingShareLink ? "Generating..." : "Generate New Link"}
              </Button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Active Share Links</h3>
              {activeShares.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No active share links. Click "Generate New Link" to create
                  one.
                </p>
              ) : (
                <ActiveShareCard
                  activeShares={activeShares}
                  handleRevokeShare={handleRevokeShare}
                  revokingShare={revokingShare}
                />
              )}
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowShareDialog(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
