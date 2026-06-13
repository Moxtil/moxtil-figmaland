"use client";
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import MailboxCanvas from "./Canvas/MailboxCanvas";

export default function NewsletterSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission handler logic here
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background Ambience Underlay Filters */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: 3D Micro-Interactive Viewport Canvas (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-5 h-[320px] sm:h-[400px] w-full relative cursor-grab active:cursor-grabbing z-10"
        >
          <Canvas camera={{ position: [0, 0, 3.8], fov: 40 }}>
            <MailboxCanvas />
          </Canvas>
        </motion.div>

        {/* RIGHT COLUMN: Asymmetric Context Form Core Layout (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center space-y-6"
        >
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20 inline-block">
              Communication Node
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Lightning Fast <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                Prototyping Pipeline.
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get weekly workflow summaries and open-source engine upgrades shipped directly to your deployment feed interface.
            </p>
          </div>

          {/* Upgraded Glassmorphic Submission Input Terminal */}
          <div className="w-full max-w-md mx-auto lg:mx-0 pt-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 block">
              Subscribe to the dispatch channel
            </p>
            
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3 w-full p-2 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">
              <input
                type="email"
                required
                placeholder="developer@domain.com"
                className="flex-1 bg-slate-950/40 border border-white/5 py-3 px-4 rounded-xl text-white text-sm outline-none font-mono placeholder:text-slate-600 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium text-sm py-3 px-6 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 active:scale-[0.98]"
              >
                Join Pipeline
              </button>
            </form>
            
            <span className="text-[10px] font-mono text-slate-600 mt-2 block tracking-wide">
              * Available exclusively across the Figmaland engine ecosystem.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}