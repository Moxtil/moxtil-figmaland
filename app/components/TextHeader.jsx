"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TextHeader({ title, subtitle }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 drop-shadow-lg">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 rounded-full shadow-md"></div>
    </motion.div>
  );
}
