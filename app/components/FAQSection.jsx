"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    q: "How do I securely initialize and sign up?",
    a: "Simply deploy our gateway node by clicking the 'Try for free' CTA terminal. Fill out the core credentials configuration frame, and your secure, isolated database ecosystem will instantiate automatically in under two minutes.",
  },
  {
    q: "Can I terminate or cancel my runtime instance anytime?",
    a: "Absolutely. Our platform is completely commitment-free. You can decouple your subscription stream, snapshot your cloud asset nodes, and cancel your pipeline configurations instantly directly from your workspace panel settings.",
  },
  {
    q: "What metrics govern your technical customer support loops?",
    a: "We maintain automated, 24/7/365 active terminal support down to Tier-3 infrastructure engineers via integrated workspace chat matrix channels and lower-latency secure email routing networks.",
  },
];

// Isolated interactive child node card for precision state management
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { type: "spring", stiffness: 100, damping: 18 } 
        }
      }}
      className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden select-none
        ${isOpen 
          ? "bg-purple-500/[0.03] border-purple-500/40 shadow-[0_20px_40px_-15px_rgba(168,85,247,0.08)]" 
          : "bg-white/[0.01] border-white/5 hover:bg-white/[0.02] hover:border-white/10"
        }`}
    >
      {/* Clickable Header Strip trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center cursor-pointer gap-4 text-left"
      >
        <h3 className={`text-base md:text-lg font-bold tracking-wide transition-colors duration-300
          ${isOpen ? "text-purple-400" : "text-white"}`}
        >
          {faq.q}
        </h3>
        
        {/* Hardware accelerated rotating vector icon indicator */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`p-1.5 rounded-xl border transition-colors duration-300
            ${isOpen 
              ? "bg-purple-500/10 border-purple-500/30 text-purple-400" 
              : "bg-slate-900 border-white/5 text-slate-400"
            }`}
        >
          <HiChevronDown size={18} />
        </motion.div>
      </div>

      {/* Dynamic layout height tracking interpolation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { height: { duration: 0.35, ease: "easeOut" }, opacity: { duration: 0.25, delay: 0.05 } }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: { duration: 0.3, ease: "easeIn" }, opacity: { duration: 0.15 } }
            }}
          >
            <div className="px-6 pb-6 pt-1 text-sm text-slate-400 leading-relaxed max-w-4xl border-t border-white/[0.03] mt-[-4px]">
              <p className="pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Background Glow Ambience Filters */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Header Matrix Info */}
      <div className="text-center mb-16 space-y-3">
        <span className="text-xs uppercase tracking-widest font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20 inline-block">
          Support Index
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Frequently Answered Telemetry
        </h2>
      </div>

      {/* Container wrapper running coordinated entrance streams */}
      <motion.div
        className="space-y-4 relative z-10"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </motion.div>
    </section>
  );
}