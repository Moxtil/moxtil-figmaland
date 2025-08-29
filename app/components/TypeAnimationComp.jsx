"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationComp() {
  return (
    <div data-aos="fade-up" className="overflow-x-hidden">
      <TypeAnimation
        sequence={[
          "Top-Tier Designs Crafted Exclusively in Figma",
          1000,
          "Elite UI Designs — 100% Figma-Based",
          1000,
          "Premium Figma-Only Designs for Your Brand",
          1000,
          "Creative Masterpieces Designed in Figma Only",
          1000,
          "Figma-Powered Designs at Their Best",
          1000,
          "Modern Design, Figma at its Core",
          1000,
          "All-In-Figma Designs That Speak Excellence",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="text-3xl lg:text-4xl overflow-hidden"
        style={{
          fontWeight: "bold",
          display: "inline-block",
          // color: "#7C3AED",
          color: "oklch(55.8% 0.288 302.321)",
        }}
        repeat={Infinity}
      />
    </div>
  );
}
