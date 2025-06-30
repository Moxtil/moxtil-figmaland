"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
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
  const path = usePathname();

  return (
    <header className={`bg-transparent absolute w-full max-w-full z-50`}>
      <div className=" mx-auto px-6 py-4 flex justify-between items-center w-full">
        <Link href={"/"} className={`text-2xl font-bold cursor-pointer`}>
          <Image src={logo} alt="Moxtil Figma-Land" width={150} height={90} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#999]  font-semibold text-[15px] transition tracking-widest ${
                path === link.href
                  ? "text-[#999] border-b-2 border-[#999]"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <SocialMediaButtons />
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center gap-6 md:hidden">
          <button
            className=" text-gray-700"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <CiMenuBurger color="#ffffff" size={28} />
            ) : (
              <CiMenuFries color="#ffffff" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-64 bg-[#222] border-r-2 text-white border-white shadow-lg z-40 flex flex-col items-start p-6 md:hidden"
          >
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`mb-4 text-lg hover:text-gray-400 transition tracking-widest ${
                  path == link.href
                    ? "text-gray-400 border-b-2 border-white"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div>
              <SocialMediaButtons />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
