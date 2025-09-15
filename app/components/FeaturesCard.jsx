"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineFontSize } from "react-icons/ai";
import { MdOutlineDraw } from "react-icons/md";
import { LuHandHelping } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";

const featuresInfo = [
  {
    id: 1,
    img: AiOutlineFontSize,
    title: "OpenType features Variable fonts",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 2,
    img: MdOutlineDraw,
    title: "Design with real data",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 3,
    img: LuHandHelping,
    title: "Fastest way to take action",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 4,
    img: FaRegLightbulb,
    title: "Innovative solutions",
    subtitle:
      "Unlock new possibilities with creative features that simplify your workflow.",
  },
];

export default function FeaturesCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center my-6 p-3">
      {featuresInfo.map((it, i) => (
        <motion.div
          key={it.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.2, // delay per card
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="col-span-1 flex flex-col items-center gap-2"
        >
          <it.img size={50} color="oklch(49.6% 0.265 301.924)" />
          <h2 className="text-[16px] font-semibold text-center bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            {it.title}
          </h2>
          <p className="text-[#888] text-[14px]">{it.subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}
