"use client"

import { motion } from "framer-motion"
import { Shield, Award, CheckCircle, Building, Landmark } from "lucide-react"

export function LandingTrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: "Bank-Grade Security",
    },
    {
      icon: Award,
      text: "Award-Winning Platform",
    },
    {
      icon: CheckCircle,
      text: "Compliance Certified",
    },
    {
      icon: Building,
      text: "Trusted by 500+ Banks",
    },
    {
      icon: Landmark,
      text: "Financial Regulation Compliant",
    },
  ]

  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Trusted by Leading Financial Institutions</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <badge.icon className="h-8 w-8 mb-2 text-blue-600" />
              <span className="text-sm font-medium text-center">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
