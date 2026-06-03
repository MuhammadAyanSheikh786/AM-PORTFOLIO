"use client";

import { motion } from "framer-motion";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80",
    label: "React",
    color: "from-cyan-500/20 to-blue-600/20",
    left: { md: 5, lg: 8 },
    top: { md: 8, lg: 10 },
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80",
    label: "Node.js",
    color: "from-green-500/20 to-emerald-600/20",
    left: { md: 55, lg: 55 },
    top: { md: 5, lg: 5 },
  },
  {
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&q=80",
    label: "TypeScript",
    color: "from-blue-500/20 to-indigo-600/20",
    left: { md: 75, lg: 78 },
    top: { md: 35, lg: 35 },
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&q=80",
    label: "AI",
    color: "from-purple-500/20 to-pink-600/20",
    left: { md: 3, lg: 5 },
    top: { md: 55, lg: 60 },
  },
  {
    img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=200&q=80",
    label: "Design",
    color: "from-orange-500/20 to-red-600/20",
    left: { md: 72, lg: 72 },
    top: { md: 65, lg: 68 },
  },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-5 hidden md:block">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          className="absolute w-36 lg:w-44"
          style={{
            left: `${card.left.md}%`,
            top: `${card.top.md}%`,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <div className={`relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-gradient-to-br ${card.color} p-3 shadow-2xl`}>
            <img
              src={card.img}
              alt={card.label}
              className="w-full h-16 lg:h-20 object-cover rounded-lg opacity-80"
            />
            <p className="text-white text-xs font-medium mt-2 text-center">{card.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
