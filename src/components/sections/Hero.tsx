"use client";

import { motion } from "framer-motion";
import Scene3D from "@/components/three/Scene3D";

const avatars = [
  { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80", name: "Alex", top: "8%", left: "10%" },
  { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80", name: "Sam", top: "50%", left: "5%" },
  { img: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=100&q=80", name: "Jamie", top: "5%", left: "65%" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/30 to-dark-900" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 pb-16">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-cyan-400/70 mb-4 border border-cyan-400/20 rounded-full px-4 py-1.5">
            AM DEV STUDIO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Premium Digital <br />
            <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-5 max-w-lg leading-relaxed">
            We transform your brand into immersive digital experiences that captivate audiences and drive measurable business growth.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-xl border border-gray-600/40 text-gray-300 font-medium hover:border-gray-400/60 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600/40 text-gray-300 font-medium hover:border-gray-400/60 transition-colors"
            >
              About Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image + Floating Avatars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-dark-600 aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1589736795364-bf0a6eaf9f0?q=80&w=800&auto=format&fit=crop)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />

            {/* Floating avatar cards */}
            {avatars.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                className="absolute flex items-center gap-2 bg-dark-800/90 backdrop-blur-md border border-dark-600 rounded-full px-3 py-1.5 shadow-lg"
                style={{ top: a.top, left: a.left }}
              >
                <img src={a.img} alt={a.name} className="w-7 h-7 rounded-full object-cover" />
                <span className="text-xs text-white font-medium">{a.name}</span>
              </motion.div>
            ))}

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-4 left-4 right-4 bg-dark-800/80 backdrop-blur-md border border-dark-600 rounded-xl px-4 py-3"
            >
              <p className="text-white font-semibold text-sm">500+ happy clients</p>
              <p className="text-gray-500 text-xs">Trusted worldwide</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
