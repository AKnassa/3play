"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in touch
            </h2>
            <p className="text-xl text-foreground-500 mb-8 max-w-md">
              Have questions about enterprise solutions or custom integrations? Our team is here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email us</div>
                  <div className="text-foreground-500">hello@3playmedia.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Call us</div>
                  <div className="text-foreground-500">+1 (617) 764-5189</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-foreground-50 p-8 md:p-10 rounded-3xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="First Name" 
                  placeholder="Jane" 
                  variant="flat" 
                  classNames={{
                    input: "bg-white",
                    inputWrapper: "bg-white shadow-sm hover:bg-white focus-within:bg-white"
                  }}
                />
                <Input 
                  label="Last Name" 
                  placeholder="Doe" 
                  variant="flat" 
                  classNames={{
                    input: "bg-white",
                    inputWrapper: "bg-white shadow-sm hover:bg-white focus-within:bg-white"
                  }}
                />
              </div>
              <Input 
                label="Email" 
                placeholder="jane@university.edu" 
                variant="flat" 
                type="email"
                classNames={{
                  input: "bg-white",
                  inputWrapper: "bg-white shadow-sm hover:bg-white focus-within:bg-white"
                }}
              />
              <Textarea 
                label="Message" 
                placeholder="How can we help?" 
                variant="flat" 
                minRows={4}
                classNames={{
                  input: "bg-white",
                  inputWrapper: "bg-white shadow-sm hover:bg-white focus-within:bg-white"
                }}
              />
              <Button 
                color="primary" 
                size="lg" 
                className="w-full font-semibold"
                radius="lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
