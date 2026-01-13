"use client";

import { motion } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
  preview: React.ReactNode;
}

export function BenefitsSection() {
  return (
    <section className="py-24 bg-[#F5F5F7]" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What You'll Discover
          </h2>
          <p className="text-xl text-foreground-500 max-w-3xl mx-auto">
            Complete accessibility planning insights, powered by AI and personalized for your institution.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {/* Card 1: AI-Powered Budget Forecast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              AI-Powered Budget Forecast
            </h3>
            <p className="text-foreground-500 leading-relaxed mb-8">
              Machine learning models predict your investment based on real university data—not generic quotes. See costs personalized to your enrollment, video hours, and goals.
            </p>

            {/* Preview: Cost Categories */}
            <div>
              <p className="text-xs font-semibold text-foreground-400 tracking-wider mb-4">
                WHAT'S INCLUDED
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-foreground-600">Base Captioning</span>
                  <span className="text-sm text-foreground-400">Per video hour</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-foreground-600">Live Events</span>
                  <span className="text-sm text-foreground-400">Real-time coverage</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground-600">Premium Content</span>
                  <span className="text-sm text-foreground-400">Priority turnaround</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Students You'll Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Students You'll Impact
            </h3>
            <p className="text-foreground-500 leading-relaxed mb-8">
              Understand exactly who benefits: deaf/HoH students, ESL learners, those with learning disabilities, and situational users—with precise enrollment breakdowns.
            </p>

            {/* Preview: Impact Grid */}
            <div>
              <p className="text-xs font-semibold text-foreground-400 tracking-wider mb-4">
                IMPACT CATEGORIES
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-foreground">9%</div>
                  <div className="text-sm text-foreground-500">Deaf/HoH</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">45%</div>
                  <div className="text-sm text-foreground-500">ESL Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">15%</div>
                  <div className="text-sm text-foreground-500">Learning Disabilities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">31%</div>
                  <div className="text-sm text-foreground-500">Situational</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Compliance Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Your Compliance Roadmap
            </h3>
            <p className="text-foreground-500 leading-relaxed mb-8">
              Visualize your timeline to full ADA Title II and WCAG 2.1 compliance. See quarterly milestones, risk levels, and resource needs from current state to 100%.
            </p>

            {/* Preview: Timeline */}
            <div>
              <p className="text-xs font-semibold text-foreground-400 tracking-wider mb-4">
                COMPLIANCE PROGRESS
              </p>
              <div className="flex justify-between items-end">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">15%</div>
                  <div className="text-sm text-foreground-500">Now</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">45%</div>
                  <div className="text-sm text-foreground-500">Q2</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">78%</div>
                  <div className="text-sm text-foreground-500">Q3</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-foreground-500">Q4</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Peer Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              How You Compare to Peers
            </h3>
            <p className="text-foreground-500 leading-relaxed mb-8">
              Compare your accessibility maturity to similar universities. Identify gaps and set realistic goals based on regional and national benchmarks.
            </p>

            {/* Preview: Benchmark */}
            <div>
              <p className="text-xs font-semibold text-foreground-400 tracking-wider mb-4">
                PEER BENCHMARK
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground-600">Your Score</span>
                  <span className="font-bold text-foreground">52%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-600">Regional Avg</span>
                  <span className="font-bold text-foreground">67%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-600">National Avg</span>
                  <span className="font-bold text-foreground">71%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
