'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInRight, staggerContainer, fadeUp } from '@/lib/animations'

const features = [
  'Personalized to your campus',
  'Interactive cost modeling',
  'Compliance timeline visualization',
  'Peer university benchmarking',
]

export function SolutionPreview() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-l-full" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeUp}
            >
              Get Answers in Minutes,{' '}
              <span className="gradient-text">Not Weeks</span>
            </motion.h2>

            <motion.ul className="space-y-4 mb-8" variants={staggerContainer}>
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3"
                  variants={fadeUp}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary font-semibold transition-colors"
              >
                See It In Action
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Browser mockup */}
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              {/* Browser chrome */}
              <div className="bg-background-secondary px-4 py-3 flex items-center gap-2 border-b border-border-light">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-danger/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="bg-background-tertiary rounded-md px-3 py-1 text-xs text-foreground-secondary border border-border-light">
                    3play.com/calculator
                  </div>
                </div>
              </div>

              {/* Calculator preview */}
              <div className="p-6 bg-background-tertiary">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-foreground/10 rounded w-3/4" />
                    <div className="h-10 bg-foreground/5 rounded" />
                    <div className="h-4 bg-foreground/10 rounded w-1/2" />
                    <div className="h-3 bg-primary/30 rounded-full" />
                  </div>
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 rounded-full border-8 border-primary/30 relative"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <div className="absolute inset-2 rounded-full border-4 border-secondary/30 border-t-secondary" />
                    </motion.div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-foreground/5 rounded-lg flex items-center justify-center"
                    >
                      <div className="text-2xl font-bold text-foreground/20">
                        ${i * 30}K
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💰 $91,200/year
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              👥 24,750 students
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
