"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StatisticCard = ({ label, baseValue, growthStep, unit, index }) => {
  const [displayValue, setDisplayValue] = useState(baseValue);
  const countRef = useRef(baseValue);

  // Elite Telemetry Engine: Simulates persistent, authentic streaming updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Create a logical positive increment step to simulate organic traffic streams
      const increment = Math.floor(Math.random() * growthStep) + 1;
      countRef.current += increment;
      setDisplayValue(countRef.current);
    }, 3000 + index * 400); // Staggering intervals prevents synchronized layout flashing

    return () => clearInterval(interval);
  }, [growthStep, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group relative flex-1 min-w-[260px] p-6 rounded-[24px] bg-[#090d23]/40 border border-white/10 
                 backdrop-blur-xl flex flex-col justify-between overflow-hidden transition-all duration-300
                 hover:border-purple-500/30 hover:shadow-[0_30px_60px_-15px_rgba(168,85,247,0.12)]"
    >
      {/* Absolute Node Matrix Underlays */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-4 mb-6">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
          {label}
        </span>
        <div className="flex items-center gap-1.5 bg-black/20 border border-white/5 px-2 py-0.5 rounded text-[8px] font-mono text-slate-400">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          STREAMING
        </div>
      </div>

      {/* Numerical Core Section with Odometer Flipping Logic */}
      <div className="flex items-baseline gap-1 my-2 min-h-[52px]">
        {unit && unit === "$" && (
          <span className="text-2xl md:text-3xl font-extrabold text-slate-500 mr-0.5 select-none">$</span>
        )}
        
        <AnimatePresence mode="popLayout">
          <motion.span
            key={displayValue}
            initial={{ opacity: 0, y: 15, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(2px)" }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent font-sans"
          >
            {displayValue.toLocaleString()}
          </motion.span>
        </AnimatePresence>

        {unit && unit !== "$" && (
          <span className="text-lg font-mono font-bold text-purple-400 ml-1">{unit}</span>
        )}
      </div>

      {/* Simulated Live Analytics Mini Sparkline Decoration */}
      <div className="w-full h-5 mt-6 relative flex items-end gap-[3px] opacity-20 group-hover:opacity-60 transition-opacity duration-500">
        <div className="h-[20%] w-full bg-cyan-400 rounded-sm group-hover:h-[40%] transition-all duration-300" />
        <div className="h-[50%] w-full bg-cyan-400 rounded-sm group-hover:h-[80%] transition-all duration-300 delay-75" />
        <div className="h-[35%] w-full bg-cyan-400 rounded-sm group-hover:h-[60%] transition-all duration-300" />
        <div className="h-[70%] w-full bg-purple-400 rounded-sm group-hover:h-[95%] transition-all duration-300 delay-100" />
        <div className="h-[90%] w-full bg-purple-500 rounded-sm group-hover:h-[40%] transition-all duration-300" />
      </div>

      {/* Radial Gradient Blur Background Element */}
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/5 blur-3xl rounded-full group-hover:bg-purple-500/10 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export const StatCard = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 relative">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 w-full">
        <StatisticCard label="Global Systems Nodes" baseValue={3842} growthStep={4} index={0} />
        <AutomatedActiveCounter index={1} />
        <StatisticCard label="Aggregated Micro-Revenue" baseValue={84210} growthStep={125} unit="$" index={2} />
      </div>
    </section>
  );
};

// Specialized Mid-Card component to display unique custom units smoothly
const AutomatedActiveCounter = ({ index }) => {
  const [val, setVal] = useState(94.6);
  useEffect(() => {
    const int = setInterval(() => {
      const shift = parseFloat((Math.random() * 0.4 - 0.18).toFixed(2));
      setVal((p) => {
        const target = parseFloat((p + shift).toFixed(2));
        return target > 100 ? 99.9 : target < 85 ? 94.2 : target;
      });
    }, 2800);
    return () => clearInterval(int);
  }, []);

  return (
    <StatisticCard 
      label="Engine Efficiency Metrics" 
      baseValue={val} 
      growthStep={0} 
      unit="GHz" 
      index={index} 
    />
  );
};