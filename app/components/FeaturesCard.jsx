"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineFontSize } from "react-icons/ai";
import { MdOutlineDraw } from "react-icons/md";
import { LuHandHelping } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";

const featuresInfo = [
  {
    id: 1,
    img: AiOutlineFontSize,
    tag: "Text.exe",
    title: "Variable OpenType Engines",
    subtitle:
      "Dynamically alter weight metrics and font axes over interactive code blocks smoothly.",
  },
  {
    id: 2,
    img: MdOutlineDraw,
    tag: "Vector.sys",
    title: "Live Data-Driven Vectors",
    subtitle:
      "Inject real-time production APIs straight into your canvas UI node trees flawlessly.",
  },
  {
    id: 3,
    img: LuHandHelping,
    tag: "Action.sh",
    title: "Rapid Prototyping Pipeline",
    subtitle:
      "Convert raw layout iterations into optimized frontend frameworks instantly.",
  },
  {
    id: 4,
    img: FaRegLightbulb,
    tag: "Smart.ai",
    title: "Intelligent Layout Systems",
    subtitle:
      "Automate complex flexbox spacing routines based on responsive viewport inputs.",
  },
];

export default function FeaturesCard() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs  uppercase tracking-widest font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
          Engine Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-6">
          Built for Elite Digital Production.
        </h2>
      </div>

      {/* Feature Cards Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {featuresInfo.map((it, i) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative col-span-1 p-6 rounded-[20px] bg-gradient-to-b from-white/[0.04] to-transparent 
                       border border-white/10 backdrop-blur-xl flex flex-col justify-between overflow-hidden
                       hover:border-purple-500/40 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] transition-all duration-300"
          >
            {/* Hover Spotlight Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Figma Element Bounding Box Blueprints (Visible on Hover) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Top Row: 3D Micro Control Panel Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-purple-300 relative shadow-inner
                              group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors duration-300">
                <it.img size={22} className="transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 bg-black/30 px-2 py-0.5 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {it.tag}
              </span>
            </div>

            {/* Typography Section */}
            <div className="space-y-3 mt-auto">
              <h3 className="text-[17px] font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                {it.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-normal">
                {it.subtitle}
              </p>
            </div>

            {/* Base Coordinate Bar Deco */}
            <div className="mt-6 pt-3 border-t border-white/[0.03] flex justify-between text-[9px] font-mono text-slate-600 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
              <span>X: {it.id * 40}px</span>
              <span>W: Auto</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}