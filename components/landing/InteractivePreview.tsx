"use client";

import NextLink from "next/link";
import { Button, Slider } from "@heroui/react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export function InteractivePreview() {
  const [enrollment, setEnrollment] = useState(25000);
  const [videoHours, setVideoHours] = useState(2000);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Calculate live values
  const calculations = useMemo(() => {
    const costPerHour = enrollment > 30000 ? 24 : enrollment > 15000 ? 28 : 35;
    const annualCost = videoHours * costPerHour;
    const studentsImpacted = Math.round(enrollment * 0.33);
    const impactPercent = Math.round((studentsImpacted / enrollment) * 100);
    const riskScore = videoHours > 3000 ? "High" : videoHours > 1500 ? "Medium" : "Low";
    
    return {
      annualCost,
      studentsImpacted,
      impactPercent,
      riskScore,
      perStudent: (annualCost / enrollment).toFixed(2),
    };
  }, [enrollment, videoHours]);

  const handleSliderChange = (setter: (val: number) => void) => (val: number | number[]) => {
    if (!hasInteracted) setHasInteracted(true);
    setter(val as number);
  };

  return (
    <section className="py-24 bg-white" id="demo">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See Your Numbers in Real-Time
          </h2>
          <p className="text-xl text-foreground-500 max-w-2xl mx-auto">
            Adjust the sliders below and watch your personalized estimates update instantly.
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Sliders */}
            <div className="space-y-10">
              {/* Enrollment Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-foreground font-semibold text-lg">
                    Student Enrollment
                  </label>
                  <motion.span 
                    key={enrollment}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-foreground font-bold text-xl"
                  >
                    {enrollment.toLocaleString()}
                  </motion.span>
                </div>
                <Slider
                  size="lg"
                  step={1000}
                  minValue={5000}
                  maxValue={75000}
                  value={enrollment}
                  onChange={handleSliderChange(setEnrollment)}
                  aria-label="Student Enrollment"
                  classNames={{
                    track: "bg-gray-200 h-2",
                    filler: "bg-gray-400",
                    thumb: "bg-white border-2 border-gray-400 w-6 h-6 shadow-md",
                  }}
                />
                <div className="flex justify-between text-sm text-foreground-400 mt-3">
                  <span>5,000</span>
                  <span>75,000</span>
                </div>
              </div>

              {/* Video Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-foreground font-semibold text-lg">
                    Video Content Hours
                  </label>
                  <motion.span 
                    key={videoHours}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-foreground font-bold text-xl"
                  >
                    {videoHours.toLocaleString()} hrs
                  </motion.span>
                </div>
                <Slider
                  size="lg"
                  step={100}
                  minValue={100}
                  maxValue={10000}
                  value={videoHours}
                  onChange={handleSliderChange(setVideoHours)}
                  aria-label="Video Content Hours"
                  classNames={{
                    track: "bg-gray-200 h-2",
                    filler: "bg-gray-400",
                    thumb: "bg-white border-2 border-gray-400 w-6 h-6 shadow-md",
                  }}
                />
                <div className="flex justify-between text-sm text-foreground-400 mt-3">
                  <span>100 hrs</span>
                  <span>10,000 hrs</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                animate={{
                  scale: hasInteracted ? [1, 1.02, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  as={NextLink}
                  href="/calculator"
                  color={hasInteracted ? "primary" : "default"}
                  variant={hasInteracted ? "solid" : "bordered"}
                  size="lg"
                  radius="full"
                  className={`w-full font-semibold transition-all duration-300 ${
                    hasInteracted 
                      ? "bg-[#3A341C] text-[#FFEB69] shadow-none" 
                      : "text-foreground-600"
                  }`}
                  endContent={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  }
                >
                  Get Your Full Report
                </Button>
              </motion.div>
            </div>

            {/* Right: Live Preview Cards */}
            <div className="space-y-4">
              {/* Cost Card */}
              <motion.div
                key={`cost-${calculations.annualCost}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="bg-[#F5F5F7] rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground-500 text-sm font-medium">Estimated Annual Cost</p>
                    <motion.p 
                      key={calculations.annualCost}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-bold text-foreground mt-1"
                    >
                      ${calculations.annualCost.toLocaleString()}
                    </motion.p>
                    <p className="text-foreground-400 text-sm mt-1">
                      ${calculations.perStudent}/student
                    </p>
                  </div>
           
                </div>
              </motion.div>

              {/* Impact Card */}
              <motion.div
                key={`impact-${calculations.studentsImpacted}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="bg-[#F5F5F7] rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground-500 text-sm font-medium">Students Impacted</p>
                    <motion.p 
                      key={calculations.studentsImpacted}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-bold text-foreground mt-1"
                    >
                      {calculations.studentsImpacted.toLocaleString()}
                    </motion.p>
                    <p className="text-foreground-400 text-sm mt-1">
                      {calculations.impactPercent}% of enrollment
                    </p>
                  </div>
                
                </div>
              </motion.div>

              {/* Risk Card */}
              <div className="bg-[#F5F5F7] rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground-500 text-sm font-medium">Compliance Risk</p>
                    <motion.p 
                      key={calculations.riskScore}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-bold text-foreground mt-1"
                    >
                      {calculations.riskScore}
                    </motion.p>
                    <p className="text-foreground-400 text-sm mt-1">
                      Based on content volume
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
