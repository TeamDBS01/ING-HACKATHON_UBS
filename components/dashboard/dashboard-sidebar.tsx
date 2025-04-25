"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  CreditCard,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  MessageSquare,
  Home,
  ChevronLeft,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Accounts",
    href: "/dashboard/accounts",
    icon: CreditCard,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: BarChart3,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile sidebar trigger */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg md:hidden"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile sidebar overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-all duration-300 md:static",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
              O
            </div>
            {!isCollapsed && <span className="text-lg font-bold">UBI</span>}
          </Link>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsCollapsed(!isCollapsed)}>
            <ChevronLeft className={cn("h-5 w-5 transition-transform", isCollapsed && "rotate-180")} />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileOpen(false)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-4">
          <nav className="grid gap-1 px-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                  pathname === link.href && "bg-muted",
                  isCollapsed && "justify-center px-0",
                )}
              >
                <link.icon className="h-5 w-5" />
                {!isCollapsed && <span>{link.title}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <Users className="h-4 w-4" />
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <div className="text-sm font-medium truncate">John Doe</div>
                <div className="text-xs text-muted-foreground truncate">john.doe@example.com</div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
