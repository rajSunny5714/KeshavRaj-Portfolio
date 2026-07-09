import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useTheme } from "../context/Theme/ThemeContext";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Education", to: "education" },
  { name: "Achievements", to: "work" },
  { name: "About", to: "about" },
  { name: "Contact Me", to: "connect" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navbarBg =
    theme === "dark"
      ? "bg-black border-b border-blue-900/40"
      : "bg-white border-b border-blue-100";

  const linkVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg transition-all duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">

        {/* ================= Logo ================= */}

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="home"
            smooth={true}
            duration={700}
            offset={-80}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
              K
            </div>

            <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>
        </motion.div>

        {/* ================= Desktop Menu ================= */}

        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={item.to}
                smooth={true}
                spy={true}
                duration={700}
                offset={-80}
                activeClass={
                  theme === "dark"
                    ? "bg-blue-950 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }
                className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-blue-400 hover:bg-blue-950/40"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* ================= Right Buttons ================= */}

        <div className="flex items-center gap-3">

          {/* Theme */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggle}
            className={`p-2.5 rounded-lg ${
              theme === "dark"
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                >
                  <BsSun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                >
                  <BsMoon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Icon */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              theme === "dark"
                ? "bg-blue-900 text-white"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
            {/* ================= Mobile Menu ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t ${
              theme === "dark"
                ? "border-blue-900/40 bg-black/95"
                : "border-blue-100 bg-white/95"
            }`}
          >
            <ul className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    spy={true}
                    duration={700}
                    offset={-80}
                    activeClass={
                      theme === "dark"
                        ? "bg-blue-950 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }
                    onClick={() => setIsOpen(false)}
                    className={`block cursor-pointer px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-blue-400 hover:bg-blue-950/40"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}