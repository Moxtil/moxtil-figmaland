"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationComp() {
  return (
    <div data-aos="fade-up">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Top-Tier Designs Crafted Exclusively in Figma",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
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
        style={{
          fontSize: "3em",
          fontWeight: "bold",
          display: "inline-block",
          color: "#7C3AED",
        }}
        repeat={Infinity}
      />
    </div>
  );
}
