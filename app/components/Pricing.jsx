"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 20,
      features: [
        { text: "10 users", enabled: true },
        { text: "2GB of storage", enabled: true },
        { text: "Email support", enabled: true },
        { text: "Help center access", enabled: false },
        { text: "Phone support", enabled: false },
        { text: "Community access", enabled: false },
      ],
    },
    {
      name: "Pro",
      price: 30,
      features: [
        { text: "20 users", enabled: true },
        { text: "5GB of storage", enabled: true },
        { text: "Email support", enabled: true },
        { text: "Help center access", enabled: true },
        { text: "Phone support", enabled: false },
        { text: "Community access", enabled: false },
      ],
    },
    {
      name: "Enterprise",
      price: 100,
      features: [
        { text: "50 users", enabled: true },
        { text: "20GB of storage", enabled: true },
        { text: "Email support", enabled: true },
        { text: "Help center access", enabled: true },
        { text: "Phone support", enabled: true },
        { text: "Community access", enabled: true },
      ],
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

  return (
    <main>
      <section className="p-4">
        <motion.div
          className="grid grid-cols-1 gap-4 my-2 sm:items-stretch md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="divide-y divide-purple-600 rounded-2xl border border-purple-600 shadow-xs"
            >
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-[#fff]">
                  {plan.name}
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-[#777]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-[#fff] sm:text-4xl">
                    {plan.price}$
                  </strong>
                  <span className="text-sm font-medium text-[#777]">
                    /month
                  </span>
                </p>

                <Link
                  className="transition-all mt-4 block rounded-sm border border-purple-600 bg-purple-600 px-12 py-3 text-center text-sm  text-[#ffffff] hover:bg-transparent hover:text-purple-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Get Started
                </Link>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-[#fff] sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  {plan.features.map((f, i) => (
                    <li className="flex items-center gap-1" key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`size-5 shadow-sm ${
                          f.enabled ? "text-indigo-700" : "text-red-700"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={
                            f.enabled
                              ? "M4.5 12.75l6 6 9-13.5"
                              : "M6 18L18 6M6 6l12 12"
                          }
                        />
                      </svg>
                      <span className="text-[#777]">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
