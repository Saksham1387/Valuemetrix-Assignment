import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Share Your Portfolio Insights
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                Create and share your investment portfolio with AI-powered
                insights, sector analysis, and risk assessment.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="gap-1.5">
                  Create Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
