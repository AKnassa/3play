"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  modalTitle: string;
  modalDescription: string;
  learnMoreLink?: string;
}

const steps: Step[] = [
  {
    id: "input",
    label: "",
    title: "Predict your costs with AI precision",
    subtitle: "Our calculator uses predictive modeling to estimate your accessibility investment based on real university data. See AI-generated cost forecasts, optimization recommendations, and scenario modeling—without the guesswork of traditional quoting.",
    description: "Enter enrollment size, video hours, and compliance goals. Takes 2 minutes.",
    modalTitle: "Tell us about your campus.",
    modalDescription: "We need just a few details to calculate your accessibility investment: student enrollment, annual video content hours, current captioning coverage, and your compliance timeline goals. No account required—your data stays private.",
    learnMoreLink: "#",
  },
  {
    id: "explore",
    label: "",
    title: "Find the optimal balance for your institution",
    subtitle: "Compare basic, standard, and comprehensive compliance approaches with real-time cost modeling. Understand exactly where to invest for maximum accessibility reach while staying within budget constraints.",
    description: "See costs, impact, and compliance timelines update in real-time as you adjust inputs.",
    modalTitle: "See your options clearly.",
    modalDescription: "Adjust sliders and toggles to explore different scenarios. Watch as costs, student impact numbers, and compliance timelines update instantly. Compare in-house vs. outsourced approaches, and find the right balance for your budget.",
    learnMoreLink: "#",
  },
  {
    id: "download",
    label: "",
    title: "Map your route to full accessibility compliance",
    subtitle: "See your timeline to meet ADA Title II, WCAG 2.1, and institutional requirements. Understand current risk levels, key milestones, and resource needs—with clear visibility into every compliance phase.",
    description: "Get your personalized PDF report instantly, or book a consultation if you'd like expert guidance.",
    modalTitle: "Take action on your terms.",
    modalDescription: "Download a comprehensive PDF report with your personalized accessibility roadmap, cost breakdown, and implementation timeline. Want to discuss with an expert? Schedule a free consultation directly from the calculator—no pressure, just guidance.",
    learnMoreLink: "#",
  },
];

export function HowItWorksSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const activeStep = steps.find((s) => s.id === activeModal);

  return (
    <section className="py-24 bg-[#F5F5F7]" id="how-it-works">
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
            Transform your approach to captioning at scale.
          </h2>
          <p className="text-xl text-foreground-500 max-w-2xl mx-auto">
            Strike the perfect balance of automation and human review to get the highest quality captions exactly where you need them, without overspending.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(step.id)}
              className="cursor-pointer"
            >
              <div className="group bg-white rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden">
                {/* Label */}
                <span className="text-sm font-medium text-foreground-500 mb-2">
                  {step.label}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="text-foreground-500 text-base mb-6 flex-grow">
                  {step.subtitle}
                </p>

                {/* Expand Button */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && activeStep && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground-700 transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Label */}
                <span className="text-sm font-medium text-foreground-500 mb-2 block">
                  {activeStep.label}
                </span>

                {/* Modal Title */}
                <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight pr-8">
                  {activeStep.modalTitle}
                </h3>

                {/* Modal Description */}
                <p className="text-foreground-600 text-base leading-relaxed mb-6">
                  {activeStep.modalDescription}
                </p>

                {/* Learn More Link */}
                {activeStep.learnMoreLink && (
                  <a
                    href={activeStep.learnMoreLink}
                    className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
