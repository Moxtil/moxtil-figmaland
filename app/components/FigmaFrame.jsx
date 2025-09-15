"use client";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const FigmaFrame = () => {
  return (
    <section className="relative py-16 ">
      <motion.div
        className="max-w-5xl mx-auto p-8 flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <LiteYouTubeEmbed
            id="Cx2dkpBxst8"
            title="YouTube video"
            poster="maxresdefault"
            noCookie={true}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center mt-8 max-w-3xl mx-auto text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Watch Our Figma Process
        </h2>
        <p className="text-lg text-gray-300">
          Seamlessly prototype and design like a pro. See our workflow in
          action, optimized for speed and creativity.
        </p>
      </motion.div>
    </section>
  );
};
