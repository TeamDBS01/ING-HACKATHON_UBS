import { LoginForm } from "@/components/auth/login-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" description="Enter your credentials to access your account">
      <LoginForm />
    </AuthLayout>
  )
}
