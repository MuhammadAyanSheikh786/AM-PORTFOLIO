"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does AM DEV STUDIO offer?",
    a: "We provide end-to-end digital solutions including MERN/PERN stack development, AI bot integration, graphics design, Shopify & WordPress development, digital marketing, and custom web applications tailored to your business needs.",
  },
  {
    q: "What is the typical project timeline?",
    a: "Timelines vary by scope. A standard portfolio site takes 1-2 weeks, while complex web applications or e-commerce platforms can range from 3-6 weeks. We provide a detailed timeline after our initial consultation.",
  },
  {
    q: "Do you offer revisions during the project?",
    a: "Yes, all our packages include revision rounds. We take a collaborative approach, iterating based on your feedback at every key stage — from wireframes to final deployment.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via our contact form. We'll schedule a free consultation to understand your goals, then provide a detailed proposal and timeline. No commitment required to start the conversation.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients worldwide. Our team is remote-friendly and equipped to collaborate across time zones using modern communication and project management tools.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-dark-800">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Helpful Information</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-medium text-sm md:text-base pr-4">{faq.q}</span>
                <motion.svg
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  className="text-cyan-400 shrink-0"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
