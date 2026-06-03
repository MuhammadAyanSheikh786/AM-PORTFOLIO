"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, ProjectData } from "@/data/projects";

const TOP_NOTCH = projects.filter((p) => p.category === "top-notch");

const chunked = (arr: ProjectData[], size: number) => {
  const result: ProjectData[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const SLIDES = chunked(TOP_NOTCH, 3);

export default function MovingGrid3x3() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalSlides = SLIDES.length;

  const goNext = useCallback(() => {
    if (totalSlides === 0) return;
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (totalSlides > 0) {
      intervalRef.current = setInterval(goNext, 5000);
    }
  }, [goNext, totalSlides]);

  useEffect(() => {
    resetTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetTimer]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || totalSlides === 0) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        goNext();
        resetTimer();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [goNext, resetTimer, totalSlides]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  if (totalSlides === 0) return null;

  return (
    <section ref={sectionRef} className="relative w-full py-24 overflow-hidden bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          <span className="text-gradient">Top Notch</span> Work
        </motion.h2>
        <p className="text-center text-gray-400 mt-3 text-lg">
          Our premier projects that define excellence
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4" style={{ minHeight: 420 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {SLIDES[current].map((project, i) => (
              <ProjectGridCard key={project.id ?? i} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer(); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-cyan-400 w-8" : "bg-dark-600 hover:bg-cyan-400/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectGridCard({ project }: { project: ProjectData }) {
  const imageSrc = project.imageKitUrl || project.imageUrl || "";

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass-card rounded-2xl overflow-hidden block"
    >
      <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 relative overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
        {!imageSrc && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-full text-6xl font-bold text-gradient opacity-20 group-hover:opacity-40 transition-opacity"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
