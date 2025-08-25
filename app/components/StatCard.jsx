"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// A stat card that simulates live data changes
const StatisticCard = ({ label, min, max, unit }) => {
  const [value, setValue] = useState(min);

  useEffect(() => {
    const interval = setInterval(() => {
      // Smooth fluctuation within min/max
      setValue(Math.floor(min + Math.random() * (max - min)));
    }, 2500); // updates every 2.5s

    return () => clearInterval(interval);
  }, [min, max]);

  return (
    <motion.div
      className="relative w-full h-44
                 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center border border-purple-700"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Animated number */}
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-wide text-cyan-300 drop-shadow-lg"
        >
          {value.toLocaleString()}
          {unit && <span className="text-2xl text-cyan-400">{unit}</span>}
        </motion.div>
      </AnimatePresence>

      {/* Label */}
      <p className="mt-3 text-lg font-medium text-gray-300 tracking-wide uppercase">
        {label}
      </p>

      {/* Decorative glowing effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-700/20 to-purple-500/20 blur-2xl rounded-2xl -z-10"></div>
    </motion.div>
  );
};

export const StatCard = () => {
  return (
    <div className="flex items-center justify-center gap-10 p-10 md:flex-nowrap flex-wrap">
      <StatisticCard label="Active Users" min={1200} max={4200} />
      <StatisticCard label="Orders Today" min={150} max={950} />
      <StatisticCard label="Revenue" min={10000} max={75000} unit="$" />
    </div>
  );
};
