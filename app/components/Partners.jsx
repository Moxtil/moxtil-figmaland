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

export default function Partners() {
  const icons = [
    { id: 1, icon: FaAmazon, color: "#FF9900" },
    { id: 2, icon: FaDropbox, color: "#007EE5" },
    { id: 3, icon: FaGoogle, color: "#4285F4" },
    { id: 4, icon: FaMicrosoft, color: "#F65314" },
    { id: 5, icon: FaGlobe, color: "#6B7280" }, // مثال Webflow/Generic
    { id: 6, icon: FaYoutube, color: "#FF0000" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-center gap-12 my-8">
      {icons.map((ic, i) => {
        const IconComponent = ic.icon;
        return (
          <motion.div
            key={ic.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center cursor-pointer text-4xl hover:scale-110 transition-transform duration-300"
          >
            <IconComponent size={45} style={{ color: ic.color }} />
          </motion.div>
        );
      })}
    </div>
  );
}
