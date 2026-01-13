'use client'

import { useState, useMemo, useRef, Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NavigationBar } from '@/components/landing/NavigationBar'
import { InputForm } from '@/components/calculator/InputForm'
import { LivePreview } from '@/components/calculator/LivePreview'
import { ResultsTabs } from '@/components/calculator/ResultsTabs'
import { useDebounce } from '@/hooks/useDebounce'
import { calculateAccessibility } from '@/lib/calculations'
import type { UniversityProfile } from '@/types'

function CalculatorContent() {
  const searchParams = useSearchParams()
  const resultsRef = useRef<HTMLDivElement>(null)
  const [showFullResults, setShowFullResults] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  // Initialize profile from URL params or defaults
  const [profile, setProfile] = useState<UniversityProfile>(() => ({
    name: searchParams.get('school') || 'Arizona State University',
    enrollment: parseInt(searchParams.get('enrollment') || '75000'),
    videoHours: parseInt(searchParams.get('hours') || '3200'),
    contentTypes: ['lectures', 'events', 'admissions', 'athletics'],
    currentState: 'auto',
    targetCompliance: 'title2',
    region: 'southwest',
  }))

  // Debounce profile changes for smoother updates
  const debouncedProfile = useDebounce(profile, 300)

  // Calculate results
  const results = useMemo(
    () => calculateAccessibility(debouncedProfile),
    [debouncedProfile]
  )

  const handleGenerate = () => {
    setShowFullResults(true)
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleStepComplete = (step: number) => {
    if (step >= currentStep) {
      setCurrentStep(step + 1)
    }
  }

  return (
    <main className="animated-gradient-bg min-h-screen">
      {/* Calculator has a light background, so use dark nav text for legibility */}
      <NavigationBar variant="light" />

      {/* Hero */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">{profile.name}</span>,
            <br />
            let's calculate your impact
          </motion.h1>
          <motion.p
            className="text-foreground-muted max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Adjust the inputs below to see your personalized accessibility roadmap
          </motion.p>
        </div>
      </section>

      {/* Two-Column Layout - Swapped */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8">
            {/* Live Preview - Now on LEFT */}
            <LivePreview results={results} />

            {/* Input Form - Now on RIGHT */}
            <InputForm
              profile={profile}
              onChange={setProfile}
              onGenerate={handleGenerate}
              currentStep={currentStep}
              onStepComplete={handleStepComplete}
            />
          </div>
        </div>
      </section>

      {/* Full Results */}
      {showFullResults && (
        <section ref={resultsRef} className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <ResultsTabs results={results} schoolName={profile.name} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-8 lg:p-12 text-center border border-border-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Move Forward?</h2>

            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
              <motion.button
                className="flex flex-col items-center gap-2 p-6 bg-background-secondary rounded-2xl hover:bg-background-tertiary transition-all border border-border-light hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-3xl">📄</span>
                <span className="font-medium">Download PDF Report</span>
              </motion.button>

              <motion.button
                className="flex flex-col items-center gap-2 p-6 bg-accent/5 rounded-2xl hover:bg-accent/10 transition-all border border-accent/20 hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-3xl">📅</span>
                <span className="font-medium">Talk to Expert</span>
                <span className="text-xs text-foreground-muted">(15-min call)</span>
              </motion.button>
            </div>

            <p className="text-foreground-muted text-sm">
              Or explore more tools:{' '}
              <a href="#" className="text-accent hover:underline">
                Live Captioning Calculator
              </a>{' '}
              •{' '}
              <a href="#" className="text-accent hover:underline">
                Caption Quality Demo
              </a>{' '}
              •{' '}
              <a href="#" className="text-accent hover:underline">
                ROI Calculator
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default function CalculatorPage() {
  return (
    <Suspense
      fallback={
        <div className="animated-gradient-bg min-h-screen flex items-center justify-center">
          <div className="text-foreground-muted">Loading calculator...</div>
        </div>
      }
    >
      <CalculatorContent />
    </Suspense>
  )
}
