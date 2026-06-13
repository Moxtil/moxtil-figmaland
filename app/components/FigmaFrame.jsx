"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlay, HiOutlineX } from "react-icons/hi";

export const FigmaFrame = ({ videoId = "Cx2dkpBxst8" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Section Description Asset (4 Cols) */}
        <motion.div
          className="lg:col-span-4 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            Media.canvas
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Explore the <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Production Loop
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            See exactly how we bridge raw canvas vectors with fluid production code pipelines. Click the preview node workspace to access our interactive showreel.
          </p>
          <div className="pt-2 flex justify-center lg:justify-start gap-8 text-[11px] font-mono text-slate-500">
            <div>FRAME RATE: <span className="text-slate-300 font-bold">60FPS</span></div>
            <div>CODE INTEGRITY: <span className="text-slate-300 font-bold">100%</span></div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Figma Presentation Workspace (8 Cols) */}
        <motion.div
          className="lg:col-span-8 w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Simulated Mac/Figma Application Frame Wrapper */}
          <div className="relative w-full rounded-[24px] bg-slate-900/40 backdrop-blur-3xl border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] p-3">
            
            {/* Window Upper Header System */}
            <div className="flex items-center justify-between px-3 pb-3 border-b border-white/[0.04] mb-3 text-[10px] font-mono tracking-wide text-slate-500">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/40" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <span className="w-2 h-2 rounded-full bg-green-500/40" />
              </div>
              <div className="bg-black/30 px-4 py-0.5 rounded border border-white/5 text-slate-400">
                Showreel_Component_V2
              </div>
              <div>Scale: <span className="text-cyan-400">100%</span></div>
            </div>

            {/* Video Interactive Core Card Area */}
            <motion.div
              className="relative w-full aspect-video rounded-[16px] overflow-hidden cursor-pointer group shadow-2xl"
              whileHover={{ scale: 1.015 }}
              onClick={() => setIsOpen(true)}
            >
              {/* High-Resolution Dynamic Poster Filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10 mix-blend-multiply" />
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Figma Production Framework Showcase"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 filter contrast-[1.05] brightness-[0.85]"
              />

              {/* Advanced Glowing UI Radar Selection Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative flex items-center justify-center">
                  {/* Expanding Pulsing Background Rings */}
                  <div className="absolute w-24 h-24 rounded-full bg-purple-500/20 animate-ping" style={{ animationDuration: "2s" }} />
                  <div className="absolute w-32 h-32 rounded-full bg-cyan-500/10 animate-ping" style={{ animationDuration: "3s" }} />
                  
                  {/* Central Core Icon Button Trigger */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white
                               shadow-[0_0_50px_rgba(168,85,247,0.4)] group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiOutlinePlay size={28} className="ml-0.5" />
                  </motion.div>
                </div>
              </div>

              {/* Bounding Selector Layout Corner Node Deco */}
              <div className="absolute top-3 left-3 w-2 h-2 border-l-2 border-t-2 border-cyan-400 z-20" />
              <div className="absolute top-3 right-3 w-2 h-2 border-r-2 border-t-2 border-cyan-400 z-20" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-l-2 border-b-2 border-cyan-400 z-20" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-r-2 border-b-2 border-cyan-400 z-20" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modern Low-Latency Modal Pipeline */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`}
                title="Figma Production Framework Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Sophisticated UI Close Button Trigger */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-red-500/80 hover:border-red-400 transition-all duration-300 cursor-pointer"
                aria-label="Close presentation loop player"
              >
                <HiOutlineX size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};