'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground-muted text-center md:text-left">
              Built by{' '}
              <span className="text-foreground font-medium">Akshit Nassa</span>
              <br />
              for 3Play Media Growth Team
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a
              href="https://github.com/akshitnassa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/akshitnassa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://akshitnassa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>© 2026 3Play Impact</p>
          <Link href="/why" className="hover:text-foreground transition-colors">
            Why I Built This
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}
