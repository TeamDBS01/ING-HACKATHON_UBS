"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function LandingCTA() {
  return (
    <section className="py-20 container">
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Banking Experience?</h2>
        <p className="text-xl opacity-90 max-w-[800px] mx-auto mb-8">
          Join thousands of financial institutions already using UBI CRM to deliver exceptional customer experiences
          and drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/signup">Get Started</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
            asChild
          >
            <Link href="/demo">Schedule a Demo</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
