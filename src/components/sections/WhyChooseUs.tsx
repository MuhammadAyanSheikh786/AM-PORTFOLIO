"use client";

import { motion } from "framer-motion";
import { HiColorSwatch, HiServer, HiLightningBolt, HiEye } from "react-icons/hi";

const features = [
  { icon: HiColorSwatch, title: "Tailored Designs That Highlight Your Brand", desc: "Every pixel crafted to reflect your unique identity." },
  { icon: HiServer, title: "Conversion-Optimized Sites Built for Scale", desc: "High-performance architecture that grows with your business." },
  { icon: HiLightningBolt, title: "Lightning-Fast Delivery Without Cutting Corners", desc: "We respect deadlines without sacrificing quality." },
  { icon: HiEye, title: "Clear, Goal-Oriented Design Backed by Insights", desc: "Data-driven decisions that deliver measurable results." },
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "05+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Features */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Where design meets <span className="text-gradient">creativity</span>
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            We transform your offerings into stunning digital experiences that connect, engage, and sell — all while staying true to your brand&apos;s identity.
          </p>

          <div className="space-y-5 mt-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="text-lg text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base">{f.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500/30 transition-colors">
              Contact Us
            </a>
            <a href="#portfolio" className="px-5 py-2.5 rounded-xl border border-gray-600/40 text-gray-300 text-sm font-medium hover:border-gray-400/60 transition-colors">
              Explore our Projects
            </a>
          </div>
        </motion.div>

        {/* Right: Stats + Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-gradient">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-dark-600">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
              alt="Our creative team collaborating"
              className="w-full h-72 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
