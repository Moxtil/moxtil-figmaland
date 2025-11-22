import {
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ModernSocialMedia() {
  const icons = [
    { icon: <FaGithub />, href: "https://github.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  return (
    <div className="hidden md:flex items-center gap-4">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-purple-500 hover:text-white transition-all"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
