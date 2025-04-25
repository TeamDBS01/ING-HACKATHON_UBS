import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, GraduationCap, CreditCard } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export function AdminDashboardSegments() {
  const segments = [
    {
      id: 1,
      name: "High Net Worth",
      icon: CreditCard,
      count: 1245,
      growth: "+12%",
      color: "bg-blue-600",
      progress: 85,
    },
    {
      id: 2,
      name: "Salaried Professionals",
      icon: Briefcase,
      count: 5678,
      growth: "+8%",
      color: "bg-cyan-600",
      progress: 65,
    },
    {
      id: 3,
      name: "Students",
      icon: GraduationCap,
      count: 3421,
      growth: "+15%",
      color: "bg-indigo-600",
      progress: 45,
    },
    {
      id: 4,
      name: "Senior Citizens",
      icon: Users,
      count: 2001,
      growth: "+5%",
      color: "bg-purple-600",
      progress: 30,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Customer Segments</CardTitle>
          <CardDescription>Overview of customer segments and their performance</CardDescription>
        </div>
        <Link
          href="/admin/segments"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 flex items-center"
        >
          Manage segments
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((segment) => (
            <Card key={segment.id} className="border-none shadow-none">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-8 w-8 rounded-full ${segment.color} flex items-center justify-center text-white`}
                    >
                      <segment.icon className="h-4 w-4" />
                    </div>
                    <div className="font-medium">{segment.name}</div>
                  </div>
                  <Badge variant="outline">{segment.growth}</Badge>
                </div>
                <div className="text-2xl font-bold mb-2">{segment.count.toLocaleString()}</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Engagement</span>
                    <span>{segment.progress}%</span>
                  </div>
                  <Progress value={segment.progress} className="h-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button>Create New Segment</Button>
        </div>
      </CardContent>
    </Card>
  )
}
