import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingTrustBadges } from "@/components/landing/landing-trust-badges"
import { LandingCTA } from "@/components/landing/landing-cta"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <LandingHero />
        <LandingTrustBadges />
        <LandingFeatures />
        <LandingCTA />
      </main>
      <LandingFooter />
    </div>
  )
}
