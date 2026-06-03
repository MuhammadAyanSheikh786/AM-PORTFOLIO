"use client";

import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "Node.js", "MongoDB", "TypeScript",
  "Three.js", "GSAP", "Framer Motion", "TailwindCSS", "Express",
  "PostgreSQL", "Prisma", "Shopify", "WordPress", "AI/ML",
  "Python", "GraphQL", "Docker", "Redis", "Firebase",
];

export default function TechMarquee() {
  return (
    <section className="relative py-16 bg-dark-800 overflow-hidden border-y border-dark-700/50">
      <div className="relative flex">
        <motion.div
          className="flex gap-16 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center gap-3 shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400/60" />
              <span className="text-gray-400 text-sm md:text-base font-medium whitespace-nowrap tracking-wide">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
