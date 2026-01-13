"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const comparisons = [
  {
    oldWay: { label: "3-week sales cycle", icon: "⏰" },
    newWay: { label: "5-minute insight", icon: "⚡" },
  },
  {
    oldWay: { label: "Generic quotes", icon: "📋" },
    newWay: { label: "Your actual data", icon: "📊" },
  },
  {
    oldWay: { label: "All-or-nothing costs", icon: "💸" },
    newWay: { label: "Optimized spend", icon: "💰" },
  },
  {
    oldWay: { label: "Compliance uncertainty", icon: "❓" },
    newWay: { label: "Clear roadmap", icon: "🗺️" },
  },
];

export function ProblemComparison() {
  return (
    <section className="py-24 bg-foreground-50" id="problem">
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
            The Accessibility Budget Dilemma
          </h2>
          <p className="text-xl text-foreground-500 max-w-2xl mx-auto">
            Universities spend weeks getting quotes. There's a better way.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              shadow="sm"
              className="bg-danger-50/50 border-danger-200 h-full"
            >
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">❌</span>
                  <h3 className="text-2xl font-bold text-danger-600">The Old Way</h3>
                </div>
                <ul className="space-y-4">
                  {comparisons.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/60 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="text-2xl">{item.oldWay.icon}</span>
                      <span className="text-foreground-600 font-medium">
                        {item.oldWay.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          {/* New Way Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              shadow="md"
              className="bg-success-50/50 border-success-200 h-full ring-2 ring-success-200"
            >
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">✅</span>
                  <h3 className="text-2xl font-bold text-success-600">The New Way</h3>
                </div>
                <ul className="space-y-4">
                  {comparisons.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/80 rounded-xl shadow-sm"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="text-2xl">{item.newWay.icon}</span>
                      <span className="text-foreground font-medium">
                        {item.newWay.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <div className="text-4xl font-bold text-primary-600">3 weeks</div>
            <div className="text-foreground-500 text-sm mt-1">→ 5 minutes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">$0</div>
            <div className="text-foreground-500 text-sm mt-1">Cost to try</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">100%</div>
            <div className="text-foreground-500 text-sm mt-1">Your data, your control</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
