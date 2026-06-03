"use client";

import { motion } from "framer-motion";

const items = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80",
    title: "Web Development",
    desc: "High-performance apps",
  },
  {
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&q=80",
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces",
  },
  {
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&q=80",
    title: "AI Integration",
    desc: "Smart automation",
  },
];

export default function FloatingShowcase() {
  return (
    <section className="relative py-24 bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What We <span className="text-gradient">Build</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-dark-600 group-hover:border-cyan-400/30 transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative floating badges */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-5 w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-xl flex items-center justify-center"
      >
        <span className="text-3xl">⚡</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-xl flex items-center justify-center"
      >
        <span className="text-3xl">🎨</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 backdrop-blur-xl flex items-center justify-center"
      >
        <span className="text-2xl">🚀</span>
      </motion.div>
    </section>
  );
}
