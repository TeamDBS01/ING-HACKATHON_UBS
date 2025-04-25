"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, Minimize, Maximize } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function DashboardChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message. Our team will get back to you shortly.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chatbot trigger button */}
      {!isOpen && (
        <Button
          className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      )}

      {/* Chatbot window */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 transition-all duration-300 shadow-lg",
            isMinimized ? "bottom-4 right-4 h-12 w-64 rounded-full" : "bottom-4 right-4 h-[500px] w-[350px] rounded-lg",
          )}
        >
          {isMinimized ? (
            <div className="bg-primary text-primary-foreground h-full rounded-full flex items-center justify-between px-4">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span className="font-medium">UBI Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsMinimized(false)}
                >
                  <Maximize className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full border rounded-lg bg-background">
              <div className="flex items-center justify-between px-4 h-12 border-b bg-primary text-primary-foreground">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  <span className="font-medium">UBI Assistant</span>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
                    onClick={() => setIsMinimized(true)}
                  >
                    <Minimize className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn("flex items-start gap-2 max-w-[80%]", msg.sender === "user" ? "ml-auto" : "")}
                    >
                      {msg.sender === "bot" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="Bot" />
                          <AvatarFallback>OA</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "rounded-lg p-3",
                          msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      {msg.sender === "user" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex items-center gap-2"
                >
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
