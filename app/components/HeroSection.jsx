"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import TypeAnimationComp from "./TypeAnimationComp";

export default function HeroSection() {
  return (
    <section className="lg:grid lg:h-screen lg:place-content-center py-5 main">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center justify-evenly min-h-[450px] px-4">
          <div className="h-[110px] flex items-center justify-center p-2">
            <TypeAnimationComp />
          </div>

          <motion.div
            className="flex items-center justify-center gap-6 flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-prose">
              Most calendars are designed for teams.{" "}
              <br className="hidden sm:block" />
              Slate is designed for freelancers.
            </p>

            <div className="mt-8">
              <Button title="Try For Free" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
