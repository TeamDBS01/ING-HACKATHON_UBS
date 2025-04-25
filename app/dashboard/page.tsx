import { UserDashboardOverview } from "@/components/dashboard/user-dashboard-overview"
import { UserDashboardProducts } from "@/components/dashboard/user-dashboard-products"
import { UserDashboardTransactions } from "@/components/dashboard/user-dashboard-transactions"
import { UserDashboardSupport } from "@/components/dashboard/user-dashboard-support"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <UserDashboardOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserDashboardProducts />
        <UserDashboardTransactions />
      </div>
      <UserDashboardSupport />
    </div>
  )
}
