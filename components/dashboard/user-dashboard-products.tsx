import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Wallet, LineChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export function UserDashboardProducts() {
  const products = [
    {
      id: 1,
      name: "Checking Account",
      number: "****4567",
      balance: "$12,345.67",
      type: "checking",
      icon: CreditCard,
    },
    {
      id: 2,
      name: "Savings Account",
      number: "****7890",
      balance: "$23,456.78",
      type: "savings",
      icon: Wallet,
    },
    {
      id: 3,
      name: "Investment Account",
      number: "****1234",
      balance: "$9,876.54",
      type: "investment",
      icon: LineChart,
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Products</CardTitle>
          <CardDescription>Manage your accounts and services</CardDescription>
        </div>
        <Link
          href="/dashboard/accounts"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 flex items-center"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <product.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-muted-foreground">{product.number}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="font-bold">{product.balance}</div>
                <Badge variant="outline" className="capitalize">
                  {product.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
