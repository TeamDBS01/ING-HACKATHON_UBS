import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowDownLeft, ShoppingCart, CreditCard, Coffee } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function UserDashboardTransactions() {
  const transactions = [
    {
      id: 1,
      description: "Grocery Store",
      amount: "-$156.24",
      date: "Today, 10:30 AM",
      type: "expense",
      icon: ShoppingCart,
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: "+$2,450.00",
      date: "Yesterday, 12:15 PM",
      type: "income",
      icon: ArrowDownLeft,
    },
    {
      id: 3,
      description: "Coffee Shop",
      amount: "-$5.75",
      date: "Yesterday, 8:20 AM",
      type: "expense",
      icon: Coffee,
    },
    {
      id: 4,
      description: "Online Purchase",
      amount: "-$89.99",
      date: "Jun 12, 2023",
      type: "expense",
      icon: CreditCard,
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest account activity</CardDescription>
        </div>
        <Link
          href="/dashboard/transactions"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 flex items-center"
        >
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <transaction.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-xs text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
              <div className={cn("font-medium", transaction.type === "income" ? "text-green-600" : "text-red-600")}>
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
