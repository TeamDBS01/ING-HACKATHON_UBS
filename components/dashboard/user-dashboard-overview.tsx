import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, CreditCard, DollarSign, Users } from "lucide-react"

export function UserDashboardOverview() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's an overview of your accounts.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Last updated:</span>
          <span className="font-medium">{new Date().toLocaleString()}</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[75%] bg-blue-600 rounded-full" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 checking, 1 savings, 1 investment</p>
            <div className="mt-4 grid grid-cols-4 gap-1">
              <div className="h-2 rounded-full bg-blue-600" />
              <div className="h-2 rounded-full bg-blue-400" />
              <div className="h-2 rounded-full bg-blue-300" />
              <div className="h-2 rounded-full bg-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Points</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-xs text-muted-foreground">+180 points this month</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[65%] rounded-full bg-blue-600" />
              </div>
              <span className="text-xs font-medium">65%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
          <CardDescription>Your spending and saving patterns over the last 30 days</CardDescription>
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
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">$12,234</span> spent this month
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUpRight className="h-4 w-4" />
              <span>12% increase</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
