"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">
            T
          </div>
          <span className="font-semibold text-2xl tracking-tight">TaskFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#features" className="hover:text-sky-400 transition">Características</a>
          <a href="#precios" className="hover:text-sky-400 transition">Precios</a>
          <a href="#testimonios" className="hover:text-sky-400 transition">Testimonios</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-xl hover:bg-white/10 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="#precios"
            className="px-6 py-2.5 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition"
          >
            Empezar gratis
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}