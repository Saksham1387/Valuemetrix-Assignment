import { RegisterForm } from "@/components/Auth/register-form"
import { AuthOptions } from "next-auth"
import { authOptions } from "@/lib/auth/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function RegisterPage() {
  const session = await getServerSession(authOptions as AuthOptions)
  if (session?.user) {
    redirect("/dashboard")
  }   
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <RegisterForm />
    </div>
  )
}
