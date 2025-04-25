"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function LandingHero() {
  return (
    <section className="py-20 md:py-28 container">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transform Your Banking Experience with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">UBI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            The all-in-one platform that revolutionizes customer relationships in banking. Seamless omnichannel
            experience with AI-powered intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-background/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
                <div className="h-6 flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-[70%]"></div>
                  <div className="h-4 bg-muted rounded w-[85%]"></div>
                  <div className="h-4 bg-muted rounded w-[60%]"></div>
                  <div className="h-20 bg-muted/50 rounded mt-6"></div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-blue-100 dark:bg-blue-900/40 rounded"></div>
                    <div className="h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded"></div>
                    <div className="h-16 bg-blue-100 dark:bg-blue-900/40 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
