import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AdminDashboardCustomers() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "active",
      type: "Premium",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "active",
      type: "Standard",
      lastActive: "5 minutes ago",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      status: "inactive",
      type: "Premium",
      lastActive: "3 days ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      status: "active",
      type: "Standard",
      lastActive: "1 hour ago",
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Customers</CardTitle>
          <CardDescription>Latest customer activity and status</CardDescription>
        </div>
        <Link
          href="/admin/customers"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 flex items-center"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt={customer.name} />
                  <AvatarFallback>
                    {customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{customer.name}</div>
                  <div className="text-sm text-muted-foreground">{customer.email}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge
                  variant={customer.status === "active" ? "outline" : "secondary"}
                  className={
                    customer.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900"
                      : ""
                  }
                >
                  {customer.status}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {customer.type} • {customer.lastActive}
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            Load More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
