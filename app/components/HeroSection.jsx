"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Snowfall from "react-snowfall";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 hero">
      <Snowfall color="#eee" />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full blur-[180px] bg-[oklch(55.8%_0.288_302.321)] opacity-20" />
      </div>

      {/* Content */}
      <div className="max-w-[850px] mx-auto text-center flex flex-col items-center gap-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-[0_0_25px_rgba(124,58,237,0.25)]"
        >
          Premium Designs Crafted for Modern Brands
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/85 max-w-[700px] leading-relaxed"
        >
          We create stunning design experiences that elevate your identity,
          engage your audience, and bring your vision to life with modern,
          clean, high-impact visuals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <Button title="Start Your Project" />
          <motion.a
            href="#portfolio"
            className="my-2 cursor-pointer bg-gradient-to-br border-2 border-purple-500  
                 text-white font-medium text-[17px] py-2 px-8 rounded shadow-md 
                 transition-all duration-300 ease-in-out active:translate-y-1"
          >
            View Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
