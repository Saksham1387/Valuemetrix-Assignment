import { LoginForm } from "@/components/Auth/login-form"

export default async function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
     <LoginForm/>
    </div>
  )
}
