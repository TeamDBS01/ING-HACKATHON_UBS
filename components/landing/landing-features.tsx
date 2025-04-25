"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, BarChart3, Users, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LandingFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI Assistance",
      description: "Intelligent recommendations and insights powered by advanced AI algorithms.",
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Experience",
      description: "Seamless communication across all channels for consistent customer experience.",
    },
    {
      icon: BarChart3,
      title: "CRM Intelligence",
      description: "Data-driven insights to understand customer behavior and preferences.",
    },
    {
      icon: Users,
      title: "Customer 360° View",
      description: "Complete customer profile with history, preferences, and interactions.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-grade security with regulatory compliance built-in.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick setup and integration with existing banking systems.",
    },
  ]

  return (
    <section id="features" className="py-20 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          UBI CRM combines cutting-edge technology with banking expertise to deliver a comprehensive solution for
          modern financial institutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Feature benefit {item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
