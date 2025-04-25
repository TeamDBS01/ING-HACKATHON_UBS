import { AdminDashboardOverview } from "@/components/admin/admin-dashboard-overview"
import { AdminDashboardCustomers } from "@/components/admin/admin-dashboard-customers"
import { AdminDashboardTickets } from "@/components/admin/admin-dashboard-tickets"
import { AdminDashboardSegments } from "@/components/admin/admin-dashboard-segments"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <AdminDashboardOverview />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminDashboardCustomers />
        <AdminDashboardTickets />
      </div>
      <AdminDashboardSegments />
    </div>
  )
}
