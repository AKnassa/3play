'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { CalculationResult } from '@/types'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { tabContent } from '@/lib/animations'

interface ResultsTabsProps {
  results: CalculationResult
  schoolName: string
  onTabChange?: (tabId: TabId) => void
}

export type TabId = 'cost' | 'impact' | 'compliance' | 'compare' | 'action'

const tabs: { id: TabId; label: string }[] = [
  { id: 'cost', label: 'Cost' },
  { id: 'impact', label: 'Impact' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'compare', label: 'Compare' },
  { id: 'action', label: 'Action' },
]

export function ResultsTabs({ results, schoolName, onTabChange }: ResultsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('cost')

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden border border-border-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="p-6 lg:p-8 border-b border-foreground/10">
        <h2 className="text-2xl font-bold mb-2">Your Complete Accessibility Report</h2>
        <p className="text-foreground-muted">{schoolName}</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-foreground/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-accent'
                : 'text-foreground-secondary hover:text-foreground'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                layoutId="activeTab"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'cost' && (
            <motion.div key="cost" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <CostTab results={results} />
            </motion.div>
          )}
          {activeTab === 'impact' && (
            <motion.div key="impact" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <ImpactTab results={results} />
            </motion.div>
          )}
          {activeTab === 'compliance' && (
            <motion.div key="compliance" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <ComplianceTab results={results} />
            </motion.div>
          )}
          {activeTab === 'compare' && (
            <motion.div key="compare" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <CompareTab results={results} />
            </motion.div>
          )}
          {activeTab === 'action' && (
            <motion.div key="action" variants={tabContent} initial="hidden" animate="visible" exit="exit">
              <ActionTab results={results} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function CostTab({ results }: { results: CalculationResult }) {
  const maxAmount = Math.max(...results.costs.breakdown.map((b) => b.amount))

  return (
    <div>
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-4xl font-bold gradient-text">
          {formatCurrency(results.costs.total)}
        </span>
        <span className="text-foreground-muted">Annual Investment</span>
      </div>

      {/* Stacked Bar Chart */}
      <div className="mb-8">
        <div className="h-12 rounded-xl overflow-hidden flex">
          {results.costs.breakdown.map((item, i) => (
            <motion.div
              key={item.category}
              className={`h-full flex items-center justify-center text-sm font-medium text-white ${
                i === 0
                  ? 'bg-accent'
                  : i === 1
                    ? 'bg-accent-secondary'
                    : 'bg-success'
              }`}
              style={{ width: `${(item.amount / results.costs.total) * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${(item.amount / results.costs.total) * 100}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              {item.amount > results.costs.total * 0.15 && formatCurrency(item.amount)}
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          {results.costs.breakdown.map((item, i) => (
            <div key={item.category} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded ${
                  i === 0 ? 'bg-accent' : i === 1 ? 'bg-accent-secondary' : 'bg-success'
                }`}
              />
              <span className="text-sm text-foreground-muted">{item.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-background-secondary rounded-xl border border-border-light">
          <div className="text-sm text-foreground-muted mb-1">Cost Per Student</div>
          <div className="text-2xl font-bold">{formatCurrency(results.costs.perStudent)}/year</div>
        </div>
        <div className="p-4 bg-background/30 rounded-xl">
          <div className="text-sm text-foreground-muted mb-1">vs. Non-Compliance Penalty</div>
          <div className="text-2xl font-bold text-danger">
            {formatCurrency(results.compliance.penalties.potential)}
          </div>
          <div className="text-xs text-foreground-muted">per violation</div>
        </div>
      </div>
    </div>
  )
}

function ImpactTab({ results }: { results: CalculationResult }) {
  const maxCount = Math.max(...results.impact.byCategory.map((c) => c.count))

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Students Who Benefit</h3>

      {/* Bubble Chart (simplified) */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {results.impact.byCategory.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="flex flex-col items-center p-4 bg-background-secondary rounded-xl border border-border-light"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <motion.div
              className="rounded-full bg-gradient-to-br from-accent/10 to-accent-secondary/10 border-2 border-accent/20 flex items-center justify-center mb-3"
              style={{
                width: Math.max(60, (cat.count / maxCount) * 100),
                height: Math.max(60, (cat.count / maxCount) * 100),
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <span className="text-sm font-bold">{cat.percentage}%</span>
            </motion.div>
            <div className="text-center">
              <div className="font-medium">{formatNumber(cat.count)}</div>
              <div className="text-xs text-foreground-muted">{cat.name}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-gradient-to-r from-accent/5 to-accent-secondary/5 rounded-xl border border-border-light text-center">
        <div className="text-3xl font-bold mb-2">
          {formatNumber(results.impact.studentsReached)} students
        </div>
        <div className="text-foreground-muted">
          ({results.impact.percentageReached}% of campus)
        </div>
      </div>
    </div>
  )
}

function ComplianceTab({ results }: { results: CalculationResult }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Your Path to Full Compliance</h3>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-foreground/10" />

        <div className="space-y-6">
          {results.compliance.timeline.map((phase, i) => (
            <motion.div
              key={phase.phase}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold relative z-10 ${
                  i === results.compliance.timeline.length - 1
                    ? 'bg-success text-white'
                    : i === 0
                      ? 'bg-warning text-white'
                      : 'bg-accent text-white'
                }`}
              >
                {phase.score}%
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{phase.phase}</span>
                  <span className="text-sm text-foreground-muted">({phase.duration})</span>
                </div>
                <div className="text-foreground-muted">{phase.milestone}</div>
                <div className="mt-2 h-2 bg-background-secondary rounded-full overflow-hidden border border-border-light">
                  <motion.div
                    className={`h-full rounded-full ${
                      i === results.compliance.timeline.length - 1
                        ? 'bg-success'
                        : 'bg-accent'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${phase.score}%` }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompareTab({ results }: { results: CalculationResult }) {
  const maxScore = 100

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">How You Stack Up</h3>
      <p className="text-foreground-muted mb-6">
        You rank <span className="text-primary font-bold">#{results.comparison.yourRank}</span> out of{' '}
        {results.comparison.totalPeers} similar universities
      </p>

      {/* Bar Chart */}
      <div className="space-y-3">
        {results.comparison.peerSchools.slice(0, 6).map((school, i) => (
          <motion.div
            key={school.name}
            className={`flex items-center gap-4 p-3 rounded-xl ${
              school.isYou ? 'bg-accent/5 border border-accent/20' : 'border border-transparent'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-32 truncate text-sm">
              {school.isYou ? '→ ' : ''}
              {school.name}
              {school.isYou ? ' (YOU)' : ''}
            </div>
            <div className="flex-1 h-6 bg-background-secondary rounded-full overflow-hidden border border-border-light">
              <motion.div
                className={`h-full rounded-full ${
                  school.isYou
                    ? 'bg-gradient-to-r from-accent to-accent-secondary'
                    : 'bg-foreground-secondary/30'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${school.score}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            </div>
            <div className="w-12 text-right font-medium">{school.score}%</div>
          </motion.div>
        ))}
      </div>

      {/* Averages */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="p-4 bg-background-secondary rounded-xl border border-border-light text-center">
          <div className="text-sm text-foreground-muted mb-1">Regional Average</div>
          <div className="text-2xl font-bold">{results.comparison.regionalAverage}%</div>
        </div>
        <div className="p-4 bg-background/30 rounded-xl text-center">
          <div className="text-sm text-foreground-muted mb-1">National Average</div>
          <div className="text-2xl font-bold">{results.comparison.nationalAverage}%</div>
        </div>
      </div>
    </div>
  )
}

function ActionTab({ results }: { results: CalculationResult }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Next Steps</h3>

      <div className="space-y-4">
        {results.actionPlan.map((action, i) => (
          <motion.div
            key={action.priority}
            className="p-4 bg-background-secondary rounded-xl border-l-4 border-accent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs text-accent font-medium">
                  Priority {action.priority}
                </span>
                <h4 className="font-semibold">{action.title}</h4>
              </div>
              <span className="text-sm font-medium">
                {action.cost === 0 ? 'Included' : formatCurrency(action.cost)}
              </span>
            </div>
            <p className="text-sm text-foreground-muted mb-2">{action.description}</p>
            <div className="flex items-center gap-2 text-xs text-foreground-muted">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {action.timeline}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="w-full mt-6 p-4 border-2 border-dashed border-foreground/20 rounded-xl text-foreground-muted hover:border-primary hover:text-primary transition-colors"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        📄 Download Detailed Roadmap (PDF)
      </motion.button>
    </div>
  )
}
