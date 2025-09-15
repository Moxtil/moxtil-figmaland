"use client";

import { motion } from "framer-motion";
import TextHeader from "./TextHeader";

const faqs = [
  {
    q: "How do I sign up?",
    a: "Just click the 'Try for free' button and fill the form.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription whenever you want.",
  },
  {
    q: "Do you offer support?",
    a: "Absolutely, 24/7 support via chat and email.",
  },
];

export default function FAQSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // يظهر كل عنصر بعد الآخر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 mx-auto px-4">
      <TextHeader title="Frequently Asked Questions" />

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {faqs.map((faq, i) => (
          <motion.details
            key={i}
            className="group border-2 border-purple-600 rounded-lg p-4 shadow cursor-pointer transition-all"
            variants={itemVariants}
          >
            <summary className="font-semibold text-lg text-purple-600 flex justify-between items-center">
              {faq.q}
              <span className="transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <p className="mt-2 text-gray-400">{faq.a}</p>
          </motion.details>
        ))}
      </motion.div>
    </section>
  );
}
