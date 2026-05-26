"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-sky-950">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(14,165,233,0.25),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-0 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-6 text-white">
            ✨ Nueva: IA para estimación de tareas
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] text-white mb-6">
            Fluye mejor.<br />
            <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Produce más.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-lg">
            La herramienta moderna que tu equipo necesita para organizar tareas, 
            colaborar y alcanzar objetivos más rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#precios" 
              className="px-9 py-4 bg-white text-zinc-950 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all text-lg shadow-xl"
            >
              Comenzar gratis
              <ArrowRight />
            </a>
            
            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-2xl font-medium flex items-center gap-3 transition-all">
              <Play size={22} /> Ver demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2.75rem] overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="https://picsum.photos/id/1015/820/620" 
              alt="TaskFlow Dashboard"
              width={820}
              height={620}
              className="w-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}