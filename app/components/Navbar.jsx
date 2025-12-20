"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import logo from "../assets/logo.svg";
import SocialMediaButtons from "./SocialMediaButtons";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image src={logo} alt="Moxtil Figma-Land" width={140} height={60} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-medium text-sm hover:text-purple-500 transition-all tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social media desktop */}
        <div className="hidden md:flex">
          <SocialMediaButtons />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? "" : <HiOutlineMenu size={28} />}
        </button>
      </div>

     {/* Mobile menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-10 z-40"
    >
      {/* ✅ Close button inside mobile menu */}
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
        className="absolute top-6 right-6 text-white"
      >
        <HiOutlineX size={32} />
      </button>

      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl font-semibold hover:text-purple-500 transition"
        >
          {link.name}
        </Link>
      ))}

      <div className="flex gap-6">
        <SocialMediaButtons />
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
