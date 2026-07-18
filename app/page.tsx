import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustedCompanies } from '@/components/trusted-companies'
import { FeaturesGrid } from '@/components/features-grid'
import { HowItWorks } from '@/components/how-it-works'
import { AIAnalysis } from '@/components/ai-analysis'
import { DashboardPreview } from '@/components/dashboard-preview'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <FeaturesGrid />
      <HowItWorks />
      <AIAnalysis />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
