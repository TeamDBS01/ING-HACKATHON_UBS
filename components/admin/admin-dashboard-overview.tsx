import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, Ticket, PieChart, MessageSquare } from "lucide-react"

export function AdminDashboardOverview() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin! Here's an overview of your CRM system.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Last updated:</span>
          <span className="font-medium">{new Date().toLocaleString()}</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+15%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">243</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500 font-medium">+12%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Segments</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+3</span>
              <span className="ml-1">new segments</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interactions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,678</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+24%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Performance</CardTitle>
          <CardDescription>Key metrics and performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <div className="flex h-full items-end gap-2">
              {Array.from({ length: 12 }).map((_, i) => {
                const height = Math.floor(Math.random() * 100)
                return (
                  <div key={i} className="flex-1 flex flex-col gap-1.5">
                    <div className="w-full bg-blue-600 rounded-t" style={{ height: `${height}%` }} />
                    <div className="text-xs text-muted-foreground text-center">{i + 1}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Response Time</div>
              <div className="text-sm font-medium">1.2s avg</div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[85%]" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Uptime</div>
              <div className="text-sm font-medium">99.9%</div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[99.9%]" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">API Usage</div>
              <div className="text-sm font-medium">76%</div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full w-[76%]" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Error Rate</div>
              <div className="text-sm font-medium">0.05%</div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[5%]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
