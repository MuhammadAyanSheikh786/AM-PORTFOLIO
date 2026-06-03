"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "05+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image collage */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-dark-600">
                <img
                  src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=500&q=80"
                  alt="Creative team collaborating"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-dark-600">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=500&q=80"
                  alt="Project showcase"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-2xl overflow-hidden border border-dark-600">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Powerful Websites, <span className="text-gradient">Seamless Experiences</span>
          </h2>
          <p className="text-gray-400 mt-5 leading-relaxed">
            At AM DEV STUDIO, we specialize in building high-performance web applications, stunning UI/UX designs, and AI-powered solutions. 
            Our expertise lies in blending creative design with strategic functionality to help businesses showcase their offerings effectively and drive growth.
          </p>

          <div className="flex flex-wrap gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl border border-gray-600/40 text-gray-300 font-medium hover:border-gray-400/60 transition-colors"
            >
              Our Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
