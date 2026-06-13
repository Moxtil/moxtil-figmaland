"use client";
import React from "react";
import { FaUsers, FaStar, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import WorldCanvas from "./Canvas/WorldCanvas";

export default function ImpactSection() {
  const cards = [
    {
      icon: <FaUsers size={20} />,
      value: "10K+",
      title: "Active Runtime Node Users",
      desc: "Thousands of developers deploy core interface architectures inside our workspace environments daily.",
    },
    {
      icon: <FaStar size={20} />,
      value: "4.9/5",
      title: "Average Pipeline Rating",
      desc: "Consistently audited for lightning-fast usability metrics, custom flexibility benchmarks, and support uptime.",
    },
    {
      icon: <FaGlobeAmericas size={20} />,
      value: "100+",
      title: "Sovereign Countries Reached",
      desc: "Extending localized, lower-latency data loops across international border frames seamlessly.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 100, damping: 18 } 
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Grid Architecture System split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: 3D Data Particle Sphere (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[350px] sm:h-[450px] w-full relative order-last lg:order-first cursor-grab active:cursor-grabbing"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-30 rounded-full blur-3xl pointer-events-none" />
          <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
            <WorldCanvas />
          </Canvas>
        </motion.div>

        {/* RIGHT COLUMN: Metric Streams Core Console Layout (7 Columns) */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 inline-block">
              Scale Log
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Structural Impact <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Around the Globe.
              </span>
            </h2>
          </div>

          <motion.div
            className="space-y-4 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ x: 6 }}
                className="group relative p-5 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl 
                           flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300
                           hover:bg-white/[0.03] hover:border-cyan-500/20"
              >
                {/* Micro corner details */}
                <div className="absolute top-0 left-0 w-1 h-1 border-l border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-1 h-1 border-r border-b border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4">
                  {/* Glowing Node Icon wrapper */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-cyan-400 shadow-inner
                                  group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-300">
                    {card.icon}
                  </div>
                  <div className="space-y-1 max-w-md">
                    <h4 className="text-sm font-bold tracking-wide text-slate-400 font-mono uppercase group-hover:text-white transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Heavy Bold Metric Figure */}
                <div className="text-right sm:pl-4">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                    {card.value}
                  </span>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}