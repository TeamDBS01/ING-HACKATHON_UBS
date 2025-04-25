"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  Home,
  ChevronLeft,
  Menu,
  UserCog,
  Ticket,
  PieChart,
  Bell,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
    badge: "New",
  },
  {
    title: "Tickets",
    href: "/admin/tickets",
    icon: Ticket,
    badge: "5",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Segments",
    href: "/admin/segments",
    icon: PieChart,
  },
  {
    title: "Communications",
    href: "/admin/communications",
    icon: MessageSquare,
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: UserCog,
  },
  {
    title: "Security",
    href: "/admin/security",
    icon: Shield,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/admin/help",
    icon: HelpCircle,
  },
]

export function AdminSidebar() {
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
          <Link href="/admin" className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
              O
            </div>
            {!isCollapsed && <span className="text-lg font-bold">UBI Admin</span>}
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
                  "group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                  pathname === link.href && "bg-muted",
                  isCollapsed && "justify-center px-0",
                )}
              >
                <link.icon className="h-5 w-5" />
                {!isCollapsed && <span>{link.title}</span>}
                {!isCollapsed && link.badge && (
                  <Badge
                    variant="outline"
                    className="ml-auto bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    {link.badge}
                  </Badge>
                )}
                {isCollapsed && link.badge && (
                  <Badge
                    variant="outline"
                    className="absolute -right-1 -top-1 h-4 min-w-4 rounded-full p-0 text-[10px] flex items-center justify-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    {link.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <div className="text-sm font-medium truncate">Admin User</div>
                <div className="text-xs text-muted-foreground truncate">admin@UBI.com</div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
