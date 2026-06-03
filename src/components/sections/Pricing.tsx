"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="relative py-24 bg-dark-800">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Pricing Plan</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Flexible plans tailored <span className="text-gradient">to your needs</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            We offer customized solutions tailored to your specific needs. Please contact us for detailed pricing information and to discuss how we can best serve your requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
            >
              Message Us
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600/40 text-gray-300 font-medium hover:border-gray-400/60 transition-colors"
            >
              Request a Quote
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            All plans include our premium customer support and satisfaction guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
