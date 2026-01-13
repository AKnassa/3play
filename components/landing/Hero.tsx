'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp, staggerContainer, pulse } from '@/lib/animations'

const universities = ['Harvard', 'MIT', 'Stanford', 'UCLA', 'ASU']

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-foreground/[0.015] rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            3Play Impact
          </Link>
          <Link
            href="/why"
            className="text-foreground-muted hover:text-foreground transition-colors"
          >
            Why I Built This
          </Link>
        </div>
      </motion.nav>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          variants={fadeUp}
        >
          Understand Your University's{' '}
          <span className="gradient-text">Accessibility Investment</span>
          <br />
          in Under 5 Minutes
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10"
          variants={fadeUp}
        >
          Know exactly what compliance costs, who benefits, and your
          timeline—without talking to sales.
        </motion.p>

        <motion.div variants={fadeUp}>
          <motion.div variants={pulse} animate="animate">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-accent-secondary transition-all shadow-lg hover:shadow-xl"
            >
              Calculate Your Impact
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

        <motion.div className="mt-16" variants={fadeUp}>
          <p className="text-foreground-muted text-sm mb-4">
            Trusted by 200+ universities
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {universities.map((uni, i) => (
              <motion.span
                key={uni}
                className="text-lg font-medium text-foreground-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                {uni}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-foreground-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
