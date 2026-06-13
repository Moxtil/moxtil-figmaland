"use client";
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import WarpCanvas from "./Canvas/WarpCanvas";
import { HiArrowRight } from "react-icons/hi2";

export default function CTASection() {
  return (
    <section id="cta" className="w-full py-28 relative overflow-hidden ">
      
      {/* =========================================================
          BACKGROUND LAYER: REAL-TIME 3D HYPER-SPEED WARP ENGINE
         ========================================================= */}
      <div className="absolute inset-0 z-0 opacity-40 [mask-image:_radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
          <WarpCanvas />
        </Canvas>
      </div>

      {/* Cyber Glow Backdrop Radial Filters */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      {/* =========================================================
          FOREGROUND LAYER: GLASSMORPHIC COMMAND DECK TERMINAL CARD
         ========================================================= */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="group relative w-full p-10 md:p-16 rounded-[32px] bg-slate-950/60 border border-white/10 backdrop-blur-2xl 
                     text-center space-y-8 shadow-[0_50px_100px_-20px_rgba(168,85,247,0.15)] overflow-hidden"
        >
          {/* Vector Selector Target Nodes (Figma Style) */}
          <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Upper Micro Badge Subtitle */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 uppercase inline-block">
              Deployment Node Gateway
            </span>
            
            {/* Shimmering Linear Gradient Headline */}
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Ready to level up <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                your global workflow?
              </span>
            </h2>
            
            {/* Clean Monochromatic Subtitle Summary */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto pt-2">
              Instantiate your secure runtime dashboard environments for free and discover the pure processing power of smart workspace optimization loops.
            </p>
          </div>

          {/* Interactive Core High-Conversion Button Trigger */}
          <div className="pt-4 flex flex-col items-center justify-center space-y-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative cursor-pointer px-10 py-4 font-semibold text-sm text-white rounded-xl 
                         bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-xl shadow-purple-500/20 
                         transition-all duration-300 overflow-hidden flex items-center gap-3"
            >
              {/* Shimmer Light Gloss Button overlay sweep effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] translate-x-[-150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out" />
              
              <span>Initialize Pipeline Now</span>
              <HiArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
            
            {/* System Status Footnote Tag */}
            <span className="text-[9px] font-mono text-slate-600 block tracking-wide uppercase">
              No credit card signature required • Sandbox layer ready
            </span>
          </div>

          {/* Subtle Outer Boundary Coordinate Decorator */}
          <span className="absolute bottom-2 left-4 text-[6px] font-mono text-slate-800 tracking-widest select-none">
            SYS_GATE_REF://FIGMALAND_FINAL
          </span>
        </motion.div>
      </div>
    </section>
  );
}