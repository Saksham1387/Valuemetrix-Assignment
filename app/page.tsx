import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/Landing/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">PortfolioShare</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="">Sign up</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
      </div>
    </div>
  );
}
