"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              UBI
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/demo">Request Demo</Link>
          </Button>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-[400px]" : "max-h-0",
        )}
      >
        <div className="container py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4 text-sm">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="outline" asChild className="w-full">
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
            <Button variant="secondary" asChild className="w-full">
              <Link href="/demo" onClick={() => setIsMenuOpen(false)}>
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
