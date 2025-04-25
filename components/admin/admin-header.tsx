"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Search, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function AdminHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4">
        {isSearchOpen ? (
          <div className="flex-1 md:max-w-sm">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers, tickets..."
                className="w-full bg-background pl-8 md:w-[300px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        ) : (
          <Button variant="outline" size="icon" className="h-8 w-8 md:hidden" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        )}
        <div className="hidden md:flex md:flex-1 md:items-center md:gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search customers, tickets..."
              className="w-full bg-background pl-8 md:w-[300px]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant="outline" size="icon" className="h-8 w-8 relative">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center"
          >
            8
          </Badge>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/auth/login">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
