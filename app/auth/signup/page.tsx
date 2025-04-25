import { SignupForm } from "@/components/auth/signup-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignupPage() {
  return (
    <AuthLayout title="Create an account" description="Enter your details to create a new account">
      <SignupForm />
    </AuthLayout>
  )
}
