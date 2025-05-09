import { DashboardPage } from "@/components/Dashboard/dashboard";
import { authOptions } from "@/lib/auth/auth";
import { AuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions as AuthOptions)
  if (!session?.user) {
    redirect("/auth/login")
  }
  return (
    <DashboardPage />
  )
}
