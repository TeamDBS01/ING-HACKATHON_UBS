import type React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="flex flex-col justify-between p-8 w-full">
          <div>
            <Link href="/" className="text-2xl font-bold">
              UBI
            </Link>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Transform Your Banking Experience</h1>
            <p className="text-lg opacity-90">
              The all-in-one platform that revolutionizes customer relationships in banking.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-80">Financial Institutions</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold mb-1">10M+</div>
                <div className="text-sm opacity-80">End Users</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold mb-1">99.9%</div>
                <div className="text-sm opacity-80">Uptime</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>
          </div>
          <div className="text-sm opacity-80">© {new Date().getFullYear()} UBI CRM. All rights reserved.</div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex items-center justify-between p-4 md:p-6">
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              UBI
            </span>
          </Link>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
