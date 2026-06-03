"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({ children,   className = "", onClick, type = "button" }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.3, y: y * 0.3, scale: 1.05, duration: 0.3, ease: "power2.out" });
  };

  const reset = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`relative overflow-hidden rounded-full px-8 py-3 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-medium transition-colors hover:bg-cyan-500/20 hover:border-cyan-400/60 ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
