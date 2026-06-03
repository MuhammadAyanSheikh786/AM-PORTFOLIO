"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const categories = ["all", "top-notch", "standard"];

const portfolioStats = [
  { value: "50+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "05+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
];

export default function Portfolio() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Showcasing our creative journey <span className="text-gradient">and award-winning work</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing exceptional design solutions and creative excellence, delivered with precision and attention to detail for our valued clients worldwide.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {portfolioStats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl py-4 px-3 text-center">
              <p className="text-2xl font-bold text-gradient">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects yet. Add your first project from the admin panel.</p>
          </div>
        ) : (
          <>
            {/* Filter tabs */}
            <div className="flex justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                      : "bg-dark-700 text-gray-400 border border-dark-600 hover:border-cyan-400/20"
                  }`}
                >
                  {cat === "all" ? "All" : cat === "top-notch" ? "Featured" : "Standard"}
                </button>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mb-8">
              Showing {filtered.length} of {projects.length} projects
            </p>

            {/* Project grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id ?? i} project={project} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
