"use client";

import { motion } from "framer-motion";
import {
  HiCode, HiCube, HiShoppingCart, HiGlobe, HiCog, HiLightningBolt,
} from "react-icons/hi";

const services = [
  { icon: HiCode, title: "MERN Stack Development", desc: "Full-stack web apps with MongoDB, Express, React, Node.js — built for scale and performance." },
  { icon: HiCube, title: "Graphics Designing", desc: "Brand identity, UI/UX, and visual design that captivates your audience and communicates your vision." },
  { icon: HiShoppingCart, title: "Ecommerce Development", desc: "Custom Shopify stores and WooCommerce solutions with seamless checkout experiences." },
  { icon: HiGlobe, title: "WordPress Development", desc: "Scalable WordPress solutions from blogs to enterprise websites with custom functionality." },
  { icon: HiCog, title: "AI Bot Integration", desc: "Smart chatbots, AI agents, and intelligent automation for your business processes." },
  { icon: HiLightningBolt, title: "Digital Marketing", desc: "SEO, social media strategy, and paid campaigns that drive real, measurable growth." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Innovative solutions tailored <span className="text-gradient">to your needs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-7 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <a href="#contact" className="inline-block mt-4 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                  Learn More &rarr;
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
