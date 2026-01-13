'use client'

import { motion } from 'framer-motion'
import type { CalculationResult } from '@/types'
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'

interface LivePreviewProps {
  results: CalculationResult
}

export function LivePreview({ results }: LivePreviewProps) {
  const percentage = results.impact.percentageReached

  return (
    <motion.div
      className="lg:sticky lg:top-24 glass rounded-3xl p-6 lg:p-8 border border-border-light h-fit"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-6">Your Impact at a Glance</h2>

      {/* Donut Chart */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-foreground/10"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.51} 251`}
              initial={{ strokeDasharray: '0 251' }}
              animate={{ strokeDasharray: `${percentage * 2.51} 251` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3A341C" />
                <stop offset="100%" stopColor="#FFEB69" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-3xl font-bold"
              key={results.impact.studentsReached}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {formatNumber(results.impact.studentsReached)}
            </motion.span>
            <span className="text-sm text-foreground-muted">
              ({formatPercentage(percentage)})
            </span>
            <span className="text-xs text-foreground-muted mt-1">
              Students Reached
            </span>
          </div>
        </div>
      </div>

      {/* Risk Meter */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-foreground-muted">Compliance Risk</span>
          <motion.span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              results.compliance.riskLevel === 'high'
                ? 'bg-danger/20 text-danger'
                : results.compliance.riskLevel === 'medium'
                  ? 'bg-warning/20 text-warning'
                  : 'bg-success/20 text-success'
            }`}
            key={results.compliance.riskLevel}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {results.compliance.riskLevel.toUpperCase()}
          </motion.span>
        </div>
        <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${
              results.compliance.riskLevel === 'high'
                ? 'bg-danger'
                : results.compliance.riskLevel === 'medium'
                  ? 'bg-warning'
                  : 'bg-success'
            }`}
            initial={{ width: '0%' }}
            animate={{
              width: `${
                results.compliance.riskLevel === 'high'
                  ? 85
                  : results.compliance.riskLevel === 'medium'
                    ? 50
                    : 20
              }%`,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-4">
        <motion.div
          className="flex items-center justify-between p-4 bg-background-secondary rounded-xl border border-border-light"
          key={`cost-${results.costs.total}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">💰</span>
            <span className="text-foreground-muted">Annual Investment</span>
          </div>
          <span className="text-xl font-bold">
            {formatCurrency(results.costs.total)}
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-between p-4 bg-background-secondary rounded-xl border border-border-light"
          key={`impact-${results.impact.studentsReached}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">👥</span>
            <span className="text-foreground-muted">Students Impacted</span>
          </div>
          <span className="text-xl font-bold">
            {formatNumber(results.impact.studentsReached)}
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-between p-4 bg-background-secondary rounded-xl border border-border-light"
          key={`increase-${results.impact.accessibilityScore.increase}`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <span className="text-foreground-muted">Accessibility Increase</span>
          </div>
          <span className="text-xl font-bold text-success">
            +{results.impact.accessibilityScore.increase}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}
