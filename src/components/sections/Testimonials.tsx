"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Ahmed R.",
    role: "CEO, Alpine Karakoram",
    text: "Their attention to detail and commitment to excellence has transformed our digital presence. The projects delivered exceeded our expectations in both aesthetics and functionality.",
  },
  {
    name: "Fatima K.",
    role: "Founder, Zayphire",
    text: "The 3D product experience they built for our fragrance store elevated our brand significantly. Highly recommended for any business looking to stand out.",
  },
  {
    name: "Usman M.",
    role: "Director, KB Eng Solutions",
    text: "Professional, timely, and technically brilliant. Our corporate website now leads the industry in our region thanks to their expertise.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="relative py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Testimonial */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <div className="flex justify-start gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <HiStar key={i} className="text-cyan-400 text-lg" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-cyan-400/70 text-sm">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-cyan-400 w-8" : "bg-dark-600 hover:bg-cyan-400/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to start your project?
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-md">
              Let&apos;s collaborate to bring your vision to life with our expertise in design and development.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
