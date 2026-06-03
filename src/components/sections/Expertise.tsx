"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Happy Clients Worldwide" },
  { value: "92%", label: "Client Retention Rate" },
];

const skills = [
  { name: "Web Development", pct: 96 },
  { name: "UI/UX Design", pct: 94 },
  { name: "AI Integration", pct: 92 },
];

export default function Expertise() {
  return (
    <section className="relative py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Mastering the art of <span className="text-gradient">creative excellence</span>
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            With years of industry experience, our team delivers exceptional solutions that blend innovative design with strategic thinking to help your brand stand out.
          </p>

          <div className="flex flex-wrap gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Progress bars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-cyan-400">{s.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-dark-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
