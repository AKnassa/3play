"use client";

import { Card, CardBody, Avatar, Button, Link } from "@heroui/react";
import { motion } from "framer-motion";

const testimonial = {
  quote: "This calculator helped us build a business case for our Board. We went from endless budget debates to approval in one meeting. The personalized data made all the difference.",
  author: "Brian Smith",
  role: "IT Manager, University of Florida",
  avatar: "/avatars/brian.jpg",
  logo: "/logos/uf.svg",
};

const stats = [
  { value: "200+", label: "Universities" },
  { value: "$4.2M", label: "Planned via Calculator" },
 
  { value: "92%", label: "Report Completion" },
];

export function SocialProofSection() {
  return (
    <section className="py-24 bg-white">
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
            Universities Using This Data to Decide
          </h2>
          <p className="text-xl text-foreground-500 max-w-2xl mx-auto">
            Join hundreds of institutions making informed accessibility investments.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card shadow="lg" className="bg-gradient-to-br from-primary-50 to-secondary-50 border-none">
            <CardBody className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Quote */}
                <div className="flex-1">
                  <svg
                    className="w-12 h-12 text-primary-200 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={testimonial.avatar}
                      name={testimonial.author}
                      size="lg"
                      className="ring-2 ring-white"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-foreground-500 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logo */}
                <div className="w-32 h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src="/social/uoF.webp"
                    alt="University of Florida Logo"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-foreground-500 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            as={Link}
            href="#"
            variant="light"
            color="primary"
            className="font-semibold"
            endContent={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Read Full Case Study
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
