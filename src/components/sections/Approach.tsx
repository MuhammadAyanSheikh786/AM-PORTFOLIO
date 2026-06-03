"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Practical Creative Direction",
    desc: "We focus on creating purposeful visuals — from layouts to interfaces — that support business growth and customer trust.",
  },
  {
    num: "02",
    title: "Smart Tech Integration",
    desc: "From responsive sites to AI-powered tools, we utilize modern technology to ensure speed, reliability, and top-notch user experience.",
  },
  {
    num: "03",
    title: "Client-Centric Collaboration",
    desc: "We partner with businesses as their extended digital team — communicating transparently, iterating quickly, and delivering with consistency.",
  },
];

const teamAvatars = [
  "https://i.pravatar.cc/100?img=21",
  "https://i.pravatar.cc/100?img=22",
  "https://i.pravatar.cc/100?img=23",
];

export default function Approach() {
  return (
    <section className="relative py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Strategic <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8"
            >
              <span className="text-5xl font-bold text-white/10">{s.num}</span>
              <h3 className="text-xl font-semibold text-white mt-4 mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Avatars + Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12 pt-8 border-t border-dark-700"
        >
          <div className="flex -space-x-3">
            {teamAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Team member ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-dark-900 object-cover"
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium">Trusted by industry leaders</p>
        </motion.div>
      </div>
    </section>
  );
}
