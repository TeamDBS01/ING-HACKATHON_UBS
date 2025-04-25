import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertCircle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export function AdminDashboardTickets() {
  const tickets = [
    {
      id: "TKT-1234",
      title: "Account access issue",
      status: "open",
      priority: "high",
      created: "2 hours ago",
      customer: "John Doe",
    },
    {
      id: "TKT-1235",
      title: "Payment not processed",
      status: "in-progress",
      priority: "medium",
      created: "5 hours ago",
      customer: "Jane Smith",
    },
    {
      id: "TKT-1236",
      title: "Update contact information",
      status: "resolved",
      priority: "low",
      created: "1 day ago",
      customer: "Robert Johnson",
    },
    {
      id: "TKT-1237",
      title: "Mobile app login failure",
      status: "open",
      priority: "high",
      created: "3 hours ago",
      customer: "Emily Davis",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900"
          >
            Open
          </Badge>
        )
      case "in-progress":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900"
          >
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900"
          >
            Resolved
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Tickets</CardTitle>
          <CardDescription>Latest support tickets and their status</CardDescription>
        </div>
        <Link
          href="/admin/tickets"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 flex items-center"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  {getStatusIcon(ticket.status)}
                </div>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {ticket.title}
                    <span className="text-xs text-muted-foreground">{ticket.id}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {ticket.customer} • {ticket.created}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                {getStatusBadge(ticket.status)}
                <Badge variant="secondary" className="text-xs">
                  {ticket.priority}
                </Badge>
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
