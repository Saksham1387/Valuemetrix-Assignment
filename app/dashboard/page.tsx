import { DashboardPage } from "@/components/Dashboard/dashboard";
import { authOptions } from "@/lib/auth/auth";
import { AuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getPortfolios } from "@/app/actions/portfolio";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/components/Dashboard/dashboard-skeleton";

export default async function Page() {
  const session = await getServerSession(authOptions as AuthOptions)
  if (!session?.user) {
    redirect("/auth/login")
  }

  const portfolios = await getPortfolios()

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardPage initialPortfolios={portfolios} />
    </Suspense>
  )
}
