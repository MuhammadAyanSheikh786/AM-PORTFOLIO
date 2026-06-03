"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: "🚀" },
  { value: "30+", label: "Happy Clients", icon: "😊" },
  { value: "5+", label: "Years Experience", icon: "⚡" },
  { value: "15+", label: "Tech Stacks", icon: "🛠" },
];

export default function StatsBanner() {
  return (
    <section className="relative py-16 bg-dark-900 border-y border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: i * 0.1 + 0.2 }}
                className="text-3xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="text-3xl md:text-4xl font-bold text-gradient"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
