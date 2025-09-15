"use client";

import { motion } from "framer-motion";

const Button = ({ title }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
      className="my-2 cursor-pointer bg-gradient-to-br from-pink-700 via-purple-700 to-purple-800 
                 text-white font-medium text-[17px] py-2 px-8 rounded shadow-md 
                 transition-all duration-300 ease-in-out active:translate-y-1"
    >
      {title}
    </motion.button>
  );
};

export default Button;
