"use client";

import NextLink from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { NavigationBar } from "./NavigationBar";

const trustFactors = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Trusted by 500+ universities",
    description: "Supporting accessibility for millions of students worldwide"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "WCAG 2.1 Compliant",
    description: "All services meet the highest accessibility standards"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Get help from accessibility specialists any time"
  },
];

export function HeroSection() {
  return (
    <>
      {/* Hero Section with Dark Gold Background */}
      <section className="relative bg-[#3A341C]">
        {/* Navigation Bar */}
        <NavigationBar />
        
        {/* Hero Content */}
        <div className="min-h-screen flex flex-col">
          {/* Main Content - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
            <motion.p
              className="text-white/70 text-sm tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ACCESSIBILITY PLANNING TOOL

            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFEB69] leading-tight mb-6 max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Predicted Caption Accuracy: A Cost-Efficient Captioning Workflow
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The captioning quality you need; the price that fits your budget.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                as={NextLink}
                href="/calculator"
                radius="full"
                size="lg"
                className="bg-[#FFEB69] text-[#3A341C] font-bold px-8 hover:bg-[#fff176]"
              >
                Calculate Your Impact
              </Button>
              <Button
                as={NextLink}
                href="https://www.3playmedia.com/plans-pricing/"
                variant="light"
                radius="full"
                size="lg"
                className="text-white font-medium underline underline-offset-4 hover:text-white/80"
                target="_blank"
              >
                Contact sales
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="relative w-full px-6 md:px-12 lg:px-24 pb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-6xl mx-auto">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/hero/hero.png"
                  alt="Student learning with accessibility technology"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Factors Section - Still in dark gold background */}
        <div className="pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustFactors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {factor.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
