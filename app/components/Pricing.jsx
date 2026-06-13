"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheck, HiX } from "react-icons/hi";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 20,
      description: "Ideal for solo engineers prototyping standalone system builds.",
      popular: false,
      features: [
        { text: "10 active engine users", enabled: true },
        { text: "2GB cloud asset node storage", enabled: true },
        { text: "Standard email routing logs", enabled: true },
        { text: "24/7 terminal help center", enabled: false },
        { text: "Dedicated phone uplink", enabled: false },
        { text: "Private community repo access", enabled: false },
      ],
    },
    {
      name: "Pro Production",
      price: 30,
      description: "Engineered for active teams scaling live software pipelines.",
      popular: true, // Triggers custom neon glow layout borders
      features: [
        { text: "20 active engine users", enabled: true },
        { text: "5GB cloud asset node storage", enabled: true },
        { text: "Standard email routing logs", enabled: true },
        { text: "24/7 terminal help center", enabled: true },
        { text: "Dedicated phone uplink", enabled: false },
        { text: "Private community repo access", enabled: false },
      ],
    },
    {
      name: "Enterprise Core",
      price: 100,
      description: "Custom infrastructure clusters built for tech agencies.",
      popular: false,
      features: [
        { text: "50 active engine users", enabled: true },
        { text: "20GB cloud asset node storage", enabled: true },
        { text: "Standard email routing logs", enabled: true },
        { text: "24/7 terminal help center", enabled: true },
        { text: "Dedicated phone uplink", enabled: true },
        { text: "Private community repo access", enabled: true },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 }
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Background Ambience Filter Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Title Header Layout System */}
      <div className="text-center mb-20 space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
          Transparent Rates
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Flexible Architecture. Clear Costs.
        </h2>
      </div>

      {/* Pricing Matrix Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className={`group relative rounded-[28px] bg-slate-950/40 border backdrop-blur-2xl p-8 flex flex-col justify-between transition-all duration-300
              ${plan.popular 
                ? "border-purple-500/50 shadow-[0_30px_60px_-15px_rgba(168,85,247,0.2)] bg-gradient-to-b from-purple-500/[0.03] to-transparent" 
                : "border-white/10 hover:border-white/20"
              }`}
          >
            {/* Visual Vector Node Anchors (Figma Style) */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity" />

            {/* Popular Tier Badge Overlay */}
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/80 border border-cyan-400/40 shadow-md">
                RECOMMENDED NODE
              </span>
            )}

            {/* Upper Frame Section */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white tracking-wide">{plan.name}</h3>
                <span className="text-xs font-mono text-slate-600">0{index + 1}</span>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[40px]">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8 border-b border-white/[0.04] pb-6">
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight">${plan.price}</span>
                <span className="text-xs font-mono text-slate-500">/month</span>
              </div>

              {/* Feature Matrix Loops */}
              <div className="space-y-4">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                  Included Allocations:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li className="flex items-center gap-3 text-sm" key={i}>
                      {f.enabled ? (
                        <div className="p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          <HiCheck size={14} />
                        </div>
                      ) : (
                        <div className="p-0.5 rounded-full bg-slate-900 border border-white/5 text-slate-600">
                          <HiX size={14} />
                        </div>
                      )}
                      <span className={f.enabled ? "text-slate-300" : "text-slate-600 line-through decoration-slate-800"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Downstream Call to Action Trigger */}
            <div className="mt-8 pt-4">
              <Link
                href="#"
                className={`block w-full py-3.5 text-center text-sm font-semibold rounded-xl tracking-wide transition-all duration-300 active:scale-[0.98]
                  ${plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
              >
                Deploy Build
              </Link>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}