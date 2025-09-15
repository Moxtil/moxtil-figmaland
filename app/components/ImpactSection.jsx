"use client";
import React from "react";
import { FaUsers, FaStar, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import TextHeader from "./TextHeader";

export default function ImpactSection() {
  const cards = [
    {
      icon: <FaUsers className="text-purple-600 text-5xl" />,
      value: "10K+",
      title: "Active Users",
      desc: "Thousands rely on our platform daily to simplify workflow and increase productivity.",
    },
    {
      icon: <FaStar className="text-purple-600 text-5xl" />,
      value: "4.9/5",
      title: "Average Rating",
      desc: "Rated highly for usability, flexibility, and outstanding support.",
    },
    {
      icon: <FaGlobeAmericas className="text-purple-600 text-5xl" />,
      value: "100+",
      title: "Countries Reached",
      desc: "Our reach extends to over 100 countries, helping teams collaborate worldwide.",
    },
  ];

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
    <section className="py-14">
      <TextHeader
        title="Our Impact"
        subtitle="Trusted and growing rapidly around the world"
      />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="border border-purple-600 shadow-sm rounded-xl p-6 shadow-purple-600"
            variants={cardVariants}
          >
            <div className="flex flex-row-reverse items-center justify-between gap-2">
              {card.icon}
              <h3 className="text-4xl font-bold bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
                {card.value}
              </h3>
            </div>
            <p className="text-lg font-semibold mt-1 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              {card.title}
            </p>
            <p className="text-sm text-gray-500 mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
