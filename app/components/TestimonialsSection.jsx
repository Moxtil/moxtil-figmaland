"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "This app transformed my workflow!",
    name: "Alex Johnson",
  },
  {
    text: "A must-have for freelancers.",
    name: "Sara Ali",
  },
  {
    text: "Super intuitive and fast.",
    name: "Omar Khaled",
  },
];
export default function TestimonialsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="border-2 border-purple-600 p-6 rounded-xl shadow-sm shadow-purple-600 text-center"
          variants={cardVariants}
        >
          <p className="text-white mb-4">“{t.text}”</p>
          <div className="flex justify-center text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-sm text-gray-400">— {t.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
