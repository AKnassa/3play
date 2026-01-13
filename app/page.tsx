import { NavigationBar } from '@/components/landing/NavigationBar'
import { HeroSection } from '@/components/landing/HeroSection'
import { HighlightsCarousel } from '@/components/landing/HighlightsCarousel'
import { InteractivePreview } from '@/components/landing/InteractivePreview'
import { HowItWorksSection } from '@/components/landing/HowItWorksSection'
import { BenefitsSection } from '@/components/landing/BenefitsSection'
import { SocialProofSection } from '@/components/landing/SocialProofSection'
import { ContactSection } from '@/components/landing/ContactSection'
import { FooterSection } from '@/components/landing/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <HighlightsCarousel />
      <HowItWorksSection />
      <InteractivePreview />
      
      <BenefitsSection />
      <SocialProofSection />
      
      <FooterSection />
    </main>
  )
}
