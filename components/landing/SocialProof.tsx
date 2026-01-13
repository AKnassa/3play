'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { staggerContainer, fadeUp } from '@/lib/animations'

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
}: {
  value: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 200, suffix: '+', label: 'Universities' },
  { value: 4.2, prefix: '$', suffix: 'M', label: 'Budget Planned' },
  { value: 15000, suffix: '+', label: 'Reports Generated' },
]

const testimonial = {
  quote:
    'This tool saved us weeks of research and gave our leadership team the clarity they needed to move forward.',
  author: 'Dr. Sarah Chen',
  title: 'Dean of Digital Learning, ASU',
}

export function SocialProof() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Universities Trust Our Insights
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="glass rounded-3xl p-8 text-center"
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 flex justify-center">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-foreground-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative border border-border-light">
            <div className="absolute top-6 left-8 text-6xl text-accent/10">
              "
            </div>
            <blockquote className="text-xl md:text-2xl text-center mb-6 relative z-10">
              {testimonial.quote}
            </blockquote>
            <div className="text-center">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-foreground-muted text-sm">
                {testimonial.title}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
