"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mac from "../assets/mac.svg";
import Button from "./Button";

export default function OrganizeSection() {
  return (
    <section className="p-6 py-10 overflow-hidden flex items-center gap-4 justify-between flex-col-reverse md:flex-row">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-8 md:p-12 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-5xl font-bold text-white mb-4">
            Fastest way to organize
          </h2>
          <p className="text-[#777] md:mt-4 block">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
          <div className="mt-4 md:mt-8">
            <Button title="Try For Free" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center animate-pulse"
      >
        <Image
          width={300}
          height={200}
          src={mac.src}
          alt="mac"
          className="w-full max-h-[400px] object-contain sm:max-h-[500px] drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}
