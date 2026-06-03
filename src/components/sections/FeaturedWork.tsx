"use client";

import { motion } from "framer-motion";

const works = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Web Development",
    title: "Full-Stack Dashboard",
    large: true,
  },
  {
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    category: "UI/UX Design",
    title: "E-Commerce Redesign",
    large: false,
  },
  {
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    category: "AI Integration",
    title: "Smart Chatbot Platform",
    large: false,
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Featured Work</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden border border-dark-600 ${w.large ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className={`${w.large ? "aspect-[2/1] md:aspect-auto md:h-full" : "aspect-[4/3]"} relative`}>
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs tracking-widest uppercase text-cyan-400/70">{w.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">{w.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
