"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-sky-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">T</div>
          <span className="font-semibold text-2xl">TaskFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="hover:text-sky-600 transition-colors">Características</a>
          <a href="#precios" className="hover:text-sky-600 transition-colors">Precios</a>
          <a href="#testimonios" className="hover:text-sky-600 transition-colors">Testimonios</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#contacto" className="hidden md:block px-6 py-2.5 rounded-2xl bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-medium hover:scale-105 transition">
            Empezar gratis
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}