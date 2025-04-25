import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Phone, Mail, Clock } from "lucide-react"

export function UserDashboardSupport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support & Help</CardTitle>
        <CardDescription>Get assistance with your banking needs</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chat">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="pt-4">
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Live Chat Support</h3>
                <p className="text-sm text-muted-foreground mt-1">Connect with our support team instantly</p>
              </div>
              <Button className="w-full">Start Chat</Button>
              <p className="text-xs text-muted-foreground">Available 24/7 for Premium customers</p>
            </div>
          </TabsContent>
          <TabsContent value="tickets" className="pt-4">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Card Issue #1234</h4>
                    <p className="text-sm text-muted-foreground mt-1">Reported on June 12, 2023</p>
                  </div>
                  <div className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 text-xs font-medium">
                    In Progress
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    Last updated: 2 hours ago
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Create New Ticket
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="contact" className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Phone Support</div>
                    <div className="text-sm text-muted-foreground">+1 (800) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-muted-foreground">support@UBI.com</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">Support Hours</h4>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
