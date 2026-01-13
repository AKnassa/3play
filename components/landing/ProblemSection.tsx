'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const problems = [
  {
    icon: '📋',
    title: 'Complex Regulations',
    description: 'Title II, ADA, WCAG 2.1—navigating compliance is overwhelming',
  },
  {
    icon: '💰',
    title: 'Unclear Costs',
    description: 'Hidden budget impacts make planning nearly impossible',
  },
  {
    icon: '⏰',
    title: '3-Week Process',
    description: 'Just to get a quote from traditional vendors',
  },
]

export function ProblemSection() {
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
            The Challenge Higher Ed Faces
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Universities struggle with accessibility compliance—not because they
            don't care, but because the process is broken.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="glass rounded-3xl p-8 text-center hover:shadow-xl transition-all"
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {problem.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-foreground-muted">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
