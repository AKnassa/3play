'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from 'react'
import type { UniversityProfile, ContentType, AccessibilityState, ComplianceLevel, Region } from '@/types'

interface InputFormProps {
  profile: UniversityProfile
  onChange: (profile: UniversityProfile) => void
  onGenerate: () => void
  currentStep?: number
  onStepComplete?: (step: number) => void
}

const contentTypeOptions: { value: ContentType; label: string }[] = [
  { value: 'lectures', label: 'Lectures & Classes' },
  { value: 'events', label: 'Campus Events' },
  { value: 'admissions', label: 'Admissions & Marketing' },
  { value: 'research', label: 'Research Presentations' },
  { value: 'student-orgs', label: 'Student Organizations' },
  { value: 'athletics', label: 'Athletics' },
]

const regionOptions: { value: Region; label: string }[] = [
  { value: 'northeast', label: 'Northeast' },
  { value: 'southeast', label: 'Southeast' },
  { value: 'midwest', label: 'Midwest' },
  { value: 'southwest', label: 'Southwest' },
  { value: 'west', label: 'West' },
]

const accessibilityStateOptions: { value: AccessibilityState; label: string; description: string }[] = [
  { value: 'none', label: 'No captioning program', description: 'Starting from scratch' },
  { value: 'auto', label: 'Auto-captions only', description: 'YouTube/Zoom generated' },
  { value: 'partial', label: 'Some professional captioning', description: 'High-priority content only' },
  { value: 'comprehensive', label: 'Comprehensive program', description: 'Most content covered' },
]

const complianceOptions: { value: ComplianceLevel; label: string; description: string }[] = [
  { value: 'basic', label: 'Basic', description: 'High-priority content' },
  { value: 'title2', label: 'Title II Compliant', description: 'Required for federal funding' },
  { value: 'gold-standard', label: 'Gold Standard', description: 'All content accessible' },
]

// Custom gradient slider styles
const sliderStyles = `
  .gradient-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #3A341C, #FFEB69);
    outline: none;
    opacity: 1;
  }
  
  .gradient-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #3A341C;
    cursor: pointer;
    border: 3px solid #FFEB69;
    box-shadow: 0 2px 6px rgba(58, 52, 28, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .gradient-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(58, 52, 28, 0.5);
  }
  
  .gradient-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #3A341C;
    cursor: pointer;
    border: 3px solid #FFEB69;
    box-shadow: 0 2px 6px rgba(58, 52, 28, 0.4);
  }
`

export function InputForm({ profile, onChange, onGenerate, currentStep = 1, onStepComplete }: InputFormProps) {
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)
  const step4Ref = useRef<HTMLDivElement>(null)

  const updateProfile = (updates: Partial<UniversityProfile>) => {
    onChange({ ...profile, ...updates })
  }

  const toggleContentType = (type: ContentType) => {
    const newTypes = profile.contentTypes.includes(type)
      ? profile.contentTypes.filter((t) => t !== type)
      : [...profile.contentTypes, type]
    updateProfile({ contentTypes: newTypes })
  }

  // Auto-scroll to next step
  useEffect(() => {
    if (currentStep === 2 && step2Ref.current) {
      step2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (currentStep === 3 && step3Ref.current) {
      step3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (currentStep === 4 && step4Ref.current) {
      step4Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [currentStep])

  const isStepVisible = (step: number) => currentStep >= step
  const isStepComplete = (step: number) => currentStep > step

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <style>{sliderStyles}</style>

      {/* Step 1: Basic Information */}
      <motion.div 
        className={`glass rounded-2xl p-6 border transition-all duration-300 ${
          isStepComplete(1) ? 'border-[#3A341C]/30 bg-[#3A341C]/5' : 'border-border-light'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
              isStepComplete(1) ? 'bg-[#3A341C] text-[#FFEB69]' : 'bg-[#3A341C]/10 text-[#3A341C]'
            }`}>
              {isStepComplete(1) ? '✓' : '1'}
            </span>
            Basic Information
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-foreground-muted mb-2">
              University Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => {
                updateProfile({ name: e.target.value })
                if (e.target.value.length > 2) onStepComplete?.(1)
              }}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A341C]/20 focus:border-[#3A341C] transition-all"
              placeholder="Arizona State University"
            />
          </div>

          <div>
            <label className="block text-sm text-foreground-muted mb-2">
              Student Enrollment
            </label>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={profile.enrollment}
              onChange={(e) => {
                updateProfile({ enrollment: parseInt(e.target.value) })
                onStepComplete?.(1)
              }}
              className="gradient-slider"
            />
            <div className="flex justify-between text-sm text-foreground-muted mt-2">
              <span>5,000</span>
              <span className="text-[#3A341C] font-semibold bg-[#FFEB69]/20 px-3 py-1 rounded-full">
                {profile.enrollment.toLocaleString()} students
              </span>
              <span>100,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-foreground-muted mb-2">Region</label>
            <select
              value={profile.region}
              onChange={(e) => {
                updateProfile({ region: e.target.value as Region })
                onStepComplete?.(1)
              }}
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A341C]/20 focus:border-[#3A341C] transition-all"
            >
              {regionOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Step 2: Video Content */}
      <AnimatePresence>
        {isStepVisible(2) && (
          <motion.div 
            ref={step2Ref}
            className={`glass rounded-2xl p-6 border transition-all duration-300 ${
              isStepComplete(2) ? 'border-[#3A341C]/30 bg-[#3A341C]/5' : 'border-border-light'
            }`}
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                  isStepComplete(2) ? 'bg-[#3A341C] text-[#FFEB69]' : 'bg-[#3A341C]/10 text-[#3A341C]'
                }`}>
                  {isStepComplete(2) ? '✓' : '2'}
                </span>
                Video Content
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-foreground-muted mb-2">
                  Hours per Semester
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={profile.videoHours}
                  onChange={(e) => {
                    updateProfile({ videoHours: parseInt(e.target.value) })
                    onStepComplete?.(2)
                  }}
                  className="gradient-slider"
                />
                <div className="flex justify-between text-sm text-foreground-muted mt-2">
                  <span>100</span>
                  <span className="text-[#3A341C] font-semibold bg-[#FFEB69]/20 px-3 py-1 rounded-full">
                    {profile.videoHours.toLocaleString()} hours
                  </span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground-muted mb-3">
                  Content Types
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {contentTypeOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                        profile.contentTypes.includes(opt.value)
                          ? 'bg-[#3A341C]/10 border-[#3A341C]/40 shadow-sm'
                          : 'bg-background border-border hover:border-[#3A341C]/20 hover:shadow-sm'
                      }`}
                      onClick={() => onStepComplete?.(2)}
                    >
                      <input
                        type="checkbox"
                        checked={profile.contentTypes.includes(opt.value)}
                        onChange={() => toggleContentType(opt.value)}
                        className="accent-[#3A341C]"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Current Status */}
      <AnimatePresence>
        {isStepVisible(3) && (
          <motion.div 
            ref={step3Ref}
            className={`glass rounded-2xl p-6 border transition-all duration-300 ${
              isStepComplete(3) ? 'border-[#3A341C]/30 bg-[#3A341C]/5' : 'border-border-light'
            }`}
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                  isStepComplete(3) ? 'bg-[#3A341C] text-[#FFEB69]' : 'bg-[#3A341C]/10 text-[#3A341C]'
                }`}>
                  {isStepComplete(3) ? '✓' : '3'}
                </span>
                Current Accessibility
              </h2>
            </div>

            <div className="space-y-2">
              {accessibilityStateOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    profile.currentState === opt.value
                      ? 'bg-[#3A341C]/10 border-[#3A341C]/40 shadow-sm'
                      : 'bg-background border-border hover:border-[#3A341C]/20 hover:shadow-sm'
                  }`}
                  onClick={() => onStepComplete?.(3)}
                >
                  <input
                    type="radio"
                    name="currentState"
                    value={opt.value}
                    checked={profile.currentState === opt.value}
                    onChange={(e) =>
                      updateProfile({ currentState: e.target.value as AccessibilityState })
                    }
                    className="accent-[#3A341C] mt-1"
                  />
                  <div>
                    <div className="font-medium">{opt.label}</div>
                    <div className="text-xs text-foreground-muted">{opt.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 4: Target Compliance */}
      <AnimatePresence>
        {isStepVisible(4) && (
          <motion.div 
            ref={step4Ref}
            className="glass rounded-2xl p-6 border border-border-light"
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold bg-[#3A341C]/10 text-[#3A341C]">
                  4
                </span>
                Target Compliance
              </h2>
            </div>

            <div className="space-y-2 mb-6">
              {complianceOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    profile.targetCompliance === opt.value
                      ? 'bg-[#3A341C]/10 border-[#3A341C]/40 shadow-sm'
                      : 'bg-background border-border hover:border-[#3A341C]/20 hover:shadow-sm'
                  }`}
                >
                  <input
                    type="radio"
                    name="targetCompliance"
                    value={opt.value}
                    checked={profile.targetCompliance === opt.value}
                    onChange={(e) =>
                      updateProfile({ targetCompliance: e.target.value as ComplianceLevel })
                    }
                    className="accent-[#3A341C] mt-1"
                  />
                  <div>
                    <div className="font-medium">{opt.label}</div>
                    <div className="text-xs text-foreground-muted">{opt.description}</div>
                  </div>
                </label>
              ))}
            </div>

            {/* Generate Button */}
            <motion.button
              onClick={onGenerate}
              className="w-full bg-[#3A341C] text-[#FFEB69] font-semibold py-4 rounded-full hover:bg-[#2A2619] transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Generate Full Report
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator when not all steps visible */}
      {currentStep < 4 && (
        <motion.div 
          className="text-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-foreground-muted">
            Complete the fields above to continue
          </p>
          <div className="flex justify-center gap-2 mt-3">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full transition-all ${
                  step <= currentStep ? 'bg-[#3A341C]' : 'bg-[#3A341C]/20'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
