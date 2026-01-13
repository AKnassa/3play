"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Instant Cost Clarity",
    description: "See your accessibility investment breakdown in under 5 minutes—no sales calls required.",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
  {
    id: 2,
    title: "Compliance Timeline",
    description: "Get a clear roadmap to Title II and WCAG compliance with realistic milestones.",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-100",
  },
  {
    id: 3,
    title: "Student Impact Analysis",
    description: "Understand exactly how many students benefit from your accessibility investment.",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
  },
  {
    id: 4,
    title: "Budget Optimization",
    description: "Discover where to allocate resources for maximum accessibility impact.",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
  },
  {
    id: 5,
    title: "Data-Driven Decisions",
    description: "Make informed choices backed by industry benchmarks and your actual data.",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
  },
];

export function HighlightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate transform for centering active slide
  const getTranslateX = () => {
    return `calc(-${activeIndex} * (60vw + 1rem))`;
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="highlights">
      {/* Header */}
      <div className="w-full px-[20vw] flex items-start justify-between mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get the highlights.
        </motion.h2>
        <motion.a
          href="#"
          className="flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Watch the demo
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="10,8 16,12 10,16" fill="currentColor" />
          </svg>
        </motion.a>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{
            paddingLeft: "20vw",
            paddingRight: "20vw",
            transform: `translateX(${getTranslateX()})`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 rounded-3xl ${slide.bgColor} p-8 md:p-12 flex flex-col justify-end select-none transition-all duration-300 cursor-pointer ${
                index === activeIndex ? "opacity-100 scale-100" : "opacity-60 scale-[0.98]"
              }`}
              style={{
                width: "60vw",
                aspectRatio: "16 / 9",
              }}
            >
              <div className="max-w-lg">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed mb-4">
                  {slide.description}
                </p>
                <h3 className="text-base font-medium text-foreground-500">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Progress Indicators */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-2 bg-gray-800"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
