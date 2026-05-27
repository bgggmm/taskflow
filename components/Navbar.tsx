"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 bg-linear-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-sky-500/30">
            T
          </div>
          <span className="font-semibold text-2xl tracking-tight">TaskFlow</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#features" className="relative group">
            Características
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full" />
          </a>
          <a href="#testimonios" className="relative group">
            Testimonios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full" />
          </a>
          <a href="#precios" className="relative group">
            Precios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-xl hover:bg-white/10 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#precios"
            className="px-6 py-2.5 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition shadow-lg shadow-white/20"
          >
            Empezar gratis
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block py-2 hover:text-sky-400 transition">Características</a>
            <a href="#testimonios" className="block py-2 hover:text-sky-400 transition">Testimonios</a>
            <a href="#precios" className="block py-2 hover:text-sky-400 transition">Precios</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}