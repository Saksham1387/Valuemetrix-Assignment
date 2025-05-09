"use client";
import Link from "next/link";
import {
  Home,
  MessageSquare,
  LineChart,
  BarChart3,
  Newspaper,
  FileText,
  Search,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";

export function DashboardNav() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-10">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LineChart className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex space-x-1">
          {/* <Button variant="ghost" size="sm" className="h-9" asChild>
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button> */}

          {/* <Button variant="ghost" size="sm" className="h-9" asChild>
            <Link href="/chat">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat with Voyager
            </Link>
          </Button> */}

          {/* <Button variant="ghost" size="sm" className="h-9" asChild>
            <Link href="/portfolio">
              <LineChart className="mr-2 h-4 w-4" />
              Portfolio
            </Link>
          </Button> */}

          {/* <Button variant="ghost" size="sm" className="h-9" asChild>
            <Link href="/explore">
              <BarChart3 className="mr-2 h-4 w-4" />
              Explore Portfolios
            </Link>
          </Button> */}
        </div>

        <div className="ml-auto flex items-center space-x-2">
          <div className="relative w-60">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md bg-secondary pl-8 md:w-[200px] lg:w-[240px]"
            />
          </div>

          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image || "/placeholder.svg"} alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
