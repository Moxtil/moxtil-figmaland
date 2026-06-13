"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import HeroScene from "./Canvas/HeroScene";
import Button from "./Button";
import { FaArrowDown } from "react-icons/fa"; // Kept to match your existing import signature

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-12 ">
     
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full pt-16 lg:pt-24">
        
        {/* Left Side Copy Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex self-center lg:self-start items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-medium text-white/80"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Next-Gen Figma to Interactive Code
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            We Turn Your{" "}
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Figma Visions
            </span>
            Into High-End Reality.
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-300/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Bridging pixel-perfect canvas layouts with immersive frontend execution. We build lightning-fast web assets backed by production ready motion.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <button className="cursor-pointer px-6 py-3 rounded-full backdrop-blur-xl bg-white/[0.04] border border-white/10 text-white text-sm hover:bg-white/[0.08] transition-all">
              Explore Showreel
            </button>
            <button className="cursor-pointer px-6 py-3 rounded-full backdrop-blur-xl bg-white/[0.04] border border-white/10 text-white text-sm hover:bg-white/[0.08] transition-all">
              Ship Your Concept
            </button>
          </div>
        </div>

        {/* RIGHT SIDE UNIFIED INTERACTIVE 3D WRAPPER

        */}
        <div className="order-1 lg:order-2 lg:col-span-7 h-[350px] sm:h-[450px] lg:h-[650px] w-full relative cursor-grab active:cursor-grabbing">
          <Canvas 
            camera={{ position: [0, 0, 4.2], fov: 45 }}
            eventSource={typeof window !== "undefined" ? document.getElementById("root") : undefined}
          >
            <HeroScene />
          </Canvas>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500">
        <FaArrowDown size={16} />
      </div>
    </section>
  );
}