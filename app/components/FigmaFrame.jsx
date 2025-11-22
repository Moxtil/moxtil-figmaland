"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FigmaFrame = ({ videoId = "Cx2dkpBxst8" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-16 flex flex-col items-center justify-center">
      {/* Video Card */}
      <motion.div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
        whileHover={{ scale: 1.03 }}
        onClick={() => setIsOpen(true)}
      >
        {/* Poster */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Figma Workflow Poster"
          className="w-full h-full object-cover"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <motion.div
            className="w-24 h-24 rounded-full bg-purple-500/80 flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <svg
              className="w-10 h-10 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 84 84"
            >
              <path d="M30 24l24 18-24 18V24z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`}
                title="Figma Workflow Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer absolute top-4 right-4 text-white text-3xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Description */}
      <motion.div
        className="text-center mt-8 max-w-3xl text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Watch Our Figma Process
        </h2>
        <p className="text-lg text-gray-300">
          Explore our design workflow in a premium interactive player. Click to
          watch and immerse yourself in our fast, modern prototyping process.
        </p>
      </motion.div>
    </section>
  );
};
