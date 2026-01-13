'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { NavigationBar } from '@/components/landing/NavigationBar'
import TextType from '@/components/TextType'

export default function WhyPage() {
  return (
    <main className="animated-gradient-bg min-h-screen">
      {/* Shared nav bar, with Why pill hidden on this page */}
      <NavigationBar variant="light" showWhyLink={false} />

      {/* Title */}
      <section className="px-6 pt-16 pb-8">
        <div className="max-w-2xl mx-auto">
          <TextType
            text="Why I Built This"
            as="h1"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            loop={false}
            className="text-4xl md:text-5xl font-bold text-center text-foreground block"
          />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-foreground-muted space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              
Something you said during our call stuck with me. When I asked about your projects and you described the PCA calculator, this idea of helping universities see their numbers without waiting weeks for sales, I couldn't stop thinking about it. The problem felt immediately solvable. So I spent a few hours over 
the weekend vibe coding this quick prototype to explore what "interactive and engaging" could look like. I know there's plenty of refinement needed, this is a rough mockup but I wanted to show what's possible when you use modern frameworks to rapidly prototype and set up the information architecture. The foundation is here, and iterating from this point would be fast.
            </p>

           
            <div>
              <p className="font-medium text-foreground mb-2">Built with</p>
              <p>
                Next.js, Tailwind, Framer Motion, Vercel, Cursor AI.
              </p>
            </div>

            <div className="pt-6 space-y-2">
              <p>
                Thanks for the clear explanation in our conversation.
              </p>
              <p className="text-foreground font-medium">— Akshit Nassa (AK)</p>
              <a 
                href="mailto:akshit.nassa@email.com" 
                className="text-accent hover:underline"
              >
                akshit@nassa.work
              </a>
              <div>
                <a
                  href="https://github.com/akshitnassa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-foreground transition-colors"
                >
                  View Code →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
