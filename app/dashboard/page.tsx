import { UserDashboardOverview } from "@/components/dashboard/user-dashboard-overview"
import { UserDashboardProducts } from "@/components/dashboard/user-dashboard-products"
import { UserDashboardTransactions } from "@/components/dashboard/user-dashboard-transactions"
import { UserDashboardSupport } from "@/components/dashboard/user-dashboard-support"
import axios from "axios"
import { useAuth } from "@/context/authContext"
import { supabase } from "@/lib/supabaseClient"

export default async function DashboardPage() {

      const customer = await axios.get(`http://localhost:3000/api/auth/1001`);
      
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
