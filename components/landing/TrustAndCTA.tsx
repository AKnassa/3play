"use client";

import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";

export function TrustAndCTA() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to See Your Numbers?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
              Get your personalized accessibility impact report in 5 minutes.
            </p>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                as={Link}
                href="/calculator"
                size="lg"
                radius="full"
                className="bg-white text-primary-700 font-semibold px-10 text-lg shadow-xl shadow-black/20 hover:shadow-2xl hover:bg-white/90 transition-all"
                endContent={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
              >
                Calculate Your Impact
              </Button>
            </motion.div>

            {/* Secondary action */}
            <motion.p
              className="text-white/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Questions?{" "}
              <Link href="#" className="text-white/80 underline hover:text-white transition-colors">
                Chat with our team
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
