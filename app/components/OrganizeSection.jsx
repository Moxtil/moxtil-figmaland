"use client";
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import OrganizeCanvas from "./Canvas/OrganizeCanvas";
import Button from "./Button";

export default function OrganizeSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px rounded-full pointer-events-none" />

      {/* Grid Layout System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: Production Messaging Copy (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-5 text-center lg:text-left space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Workspace.config
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            The Fastest Way <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              to Organize.
            </span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Traditional tools are built for complex corporate teams. Our ecosystem is custom-engineered for independent freelancers shipping premium code pipelines.
          </p>
          
          <div className="pt-4 flex justify-center lg:justify-start">
            <Button title="Try For Free" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Real-time 3D Canvas Space (7 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-7 h-[400px] sm:h-[500px] w-full relative cursor-grab active:cursor-grabbing"
        >
          {/* Active Canvas Context Mount */}
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <OrganizeCanvas />
          </Canvas>
        </motion.div>

      </div>
    </section>
  );
}