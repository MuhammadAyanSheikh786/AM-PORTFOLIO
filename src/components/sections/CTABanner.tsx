"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-dark-900 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-cyan-400/70 mb-4 border border-cyan-400/20 rounded-full px-4 py-1.5">
            Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let&apos;s make something extraordinary together
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            We&apos;re here to help you take your online presence to the next level.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
