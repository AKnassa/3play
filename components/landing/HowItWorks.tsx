'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, drawPath } from '@/lib/animations'

const steps = [
  {
    number: 1,
    title: 'Tell us about your campus',
    description: 'Enrollment, video hours, content types',
  },
  {
    number: 2,
    title: 'See your impact in real time',
    description: 'Costs, students reached, compliance score',
  },
  {
    number: 3,
    title: 'Review & export report',
    description: 'Actionable roadmap for your team',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Steps to Clarity
          </h2>
          <p className="text-foreground-muted">
            From confusion to confidence in under 5 minutes
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-border via-accent/30 to-border"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="text-center"
                variants={fadeUp}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileInView={{
                    boxShadow: [
                      '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
                      '0 10px 40px -5px rgba(0, 0, 0, 0.2)',
                      '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    },
                  }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground-muted">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
