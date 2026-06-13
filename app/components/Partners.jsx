"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaDropbox,
  FaGoogle,
  FaMicrosoft,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

const partnersData = [
  { id: 1, icon: FaAmazon, color: "group-hover:text-[#FF9900]" },
  { id: 2, icon: FaDropbox, color: "group-hover:text-[#007EE5]" },
  { id: 3, icon: FaGoogle, color: "group-hover:text-[#4285F4]" },
  { id: 4, icon: FaMicrosoft, color: "group-hover:text-[#F65314]" },
  { id: 5, icon: FaGlobe, color: "group-hover:text-[#6366F1]" },
  { id: 6, icon: FaYoutube, color: "group-hover:text-[#FF0000]" },
];

export default function Partners() {
  // We duplicate the array to ensure the seamless infinite marquee transition doesn't snap
  const duplicatedPartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="w-full py-16 bg-transparent relative overflow-hidden flex flex-col items-center justify-center gap-10">
      
      {/* Subtle background text branding */}
      <div className="text-center space-y-2 opacity-60">
        <p className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">
          Integration Hub Systems
        </p>
      </div>

      {/* Masked Marquee Wrapper for smooth side-fade edges */}
      <div className="w-full relative max-w-7xl [mask-image:_linear-gradient(to_right,transparent_0%,_black_15%,_black_85%,transparent_100%)] overflow-hidden py-4">
        
        <motion.div
          className="flex gap-16 w-max items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            ease: "linear",
            duration: 32,
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((pt, i) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={`${pt.id}-${i}`}
                className="group relative px-8 py-5 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-xl 
                           flex items-center justify-center cursor-pointer transition-all duration-300 min-w-[140px]
                           hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-1"
              >
                {/* Figma Bounding Selector Corners (Visible on Hover) */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-l border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Monochrome Base transitioning seamlessly to customized brand colors */}
                <IconComponent
                  size={36}
                  className={`text-slate-600 transition-all duration-300 filter grayscale contrast-200 group-hover:grayscale-0 group-hover:scale-105 ${pt.color}`}
                />

                {/* Coordinate Grid Marker Detail */}
                <span className="absolute bottom-1 right-2 text-[6px] font-mono text-slate-700 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  ID:0{pt.id}
                </span>
              </div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}