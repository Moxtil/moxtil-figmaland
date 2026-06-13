"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Integrating this runtime canvas completely transformed our team's workspace pipelines. The performance optimization parameters are incredible.",
    name: "Alex Johnson",
    role: "Lead Interface Architect",
    initials: "AJ",
  },
  {
    text: "A critical core asset for modern deployment workflows. The asynchronous 3D rendering speeds make complex dashboards load instantly.",
    name: "Sara Ali",
    role: "Senior Full-Stack Engineer",
    initials: "SA",
  },
  {
    text: "The state interpolation logic is completely plug-and-play. It handles high refresh rates beautifully without any layout shifts or performance jitters.",
    name: "Omar Khaled",
    role: "Infrastructure DevOps Tech",
    initials: "OK",
  },
];

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 18 } 
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
      {/* Background Lighting Ambience Mask */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" />

      {/* Main Grid Wrapper */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-[24px] bg-slate-950/40 border border-white/5 backdrop-blur-xl 
                       flex flex-col justify-between transition-all duration-300
                       hover:border-cyan-500/20 hover:shadow-[0_30px_60px_-15px_rgba(34,211,238,0.06)]"
          >
            {/* Vector Node Anchors (Figma Style) */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Premium Geometric Star Rating Row */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <div 
                    key={index} 
                    className="p-1 rounded-md bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 shadow-sm"
                  >
                    <FaStar size={11} />
                  </div>
                ))}
              </div>

              {/* Core Feedback Review Content */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal mb-8">
                “{t.text}”
              </p>
            </div>

            {/* User Profile Footer Badge */}
            <div className="flex items-center gap-3.5 border-t border-white/[0.04] pt-5 mt-auto">
              {/* Sleek Textured Monogram Avatar */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 
                              flex items-center justify-center text-xs font-mono font-bold text-purple-300 uppercase tracking-wider shadow-inner">
                {t.initials}
              </div>
              
              <div className="space-y-0.5 text-left">
                <p className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                  {t.name}
                </p>
                <p className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider">
                  {t.role}
                </p>
              </div>
            </div>

            {/* Cryptographic Node Index Identifier */}
            <span className="absolute bottom-2 right-3 text-[7px] font-mono text-slate-700 select-none opacity-40">
              VERIFIED_NODE://0{i + 1}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}