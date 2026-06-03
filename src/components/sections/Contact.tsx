"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { HiMail, HiMap, HiPhone } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm tracking-[0.2em] uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let&apos;s Build Something <span className="text-gradient">Amazing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-dark-700 border border-dark-600 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-dark-700 border border-dark-600 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-dark-700 border border-dark-600 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
            </div>
            <MagneticButton type="submit" className="w-full">
              {sent ? "Message Sent!" : "Send Message"}
            </MagneticButton>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: HiMail, label: "Email", value: "contact@amdevstudio.com" },
              { icon: HiPhone, label: "Phone", value: "+92 3122767819" },
              { icon: HiMap, label: "Location", value: "Karachi, Pakistan" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <Icon className="text-xl text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
