"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import content from "../assets/AAA.svg";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden gap-8 sm:grid sm:grid-cols-2 sm:items-center p-4">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          width={300}
          height={200}
          src={content.src}
          alt="service"
          className="w-full max-h-[350px] object-contain sm:rounded-ss-[30px] md:rounded-ss-[60px] drop-shadow-lg drop-shadow-purple-600"
        />
      </motion.div>

      {/* Text and Form */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center justify-center gap-3 p-2 m-5"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-bold"
        >
          At your fingertips
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-semibold text-4xl text-center"
        >
          Lightning fast prototyping
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="font-bold">Subscribe to our Newsletter</p>
          <p className="text-[#777]">Available exclusively on Figmaland</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-2 p-3 w-full sm:w-auto justify-center"
        >
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#eee] py-2 px-4 rounded-md text-black outline-0 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="cursor-pointer bg-purple-600 py-2 px-4 rounded-md text-white shadow-sm hover:bg-purple-700 transition-all"
          >
            Subscribe
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
