"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery & Planning", desc: "We start by understanding your goals, audience, and vision through in-depth consultation." },
  { num: "02", title: "Creative Design", desc: "Our team develops concepts that align with your brand's identity and strategic objectives." },
  { num: "03", title: "Development & Refinement", desc: "We transform concepts into polished deliverables with attention to every detail." },
  { num: "04", title: "Launch & Support", desc: "We ensure a smooth delivery and provide ongoing support to maximize impact." },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Working Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Our seamless process for <span className="text-gradient">exceptional results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gradient">{s.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-3 z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400/30">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">No commitment required. Let&apos;s discuss your vision.</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
