"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-100dvh flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-sky-950 pt-16">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(14,165,233,0.3),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-8 md:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-8 text-white">
            ✨ Nueva: IA para estimación de tareas
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] text-white mb-6">
            Fluye mejor.<br />
            <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Produce más.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-lg">
            La herramienta de productividad que tu equipo va a amar usar. 
            Organiza, colabora y entrega resultados más rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#precios" 
              className="px-9 py-4 bg-white text-zinc-950 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all text-lg shadow-xl"
            >
              Comenzar gratis
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-2xl font-medium flex items-center gap-3 transition-all"
            >
              <Play size={22} /> Ver demo
            </button>
          </div>

          <p className="text-sm text-zinc-400 mt-6">Sin tarjeta • 14 días gratis • Cancela cuando quieras</p>
        </motion.div>

        {/* Imagen del dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="https://picsum.photos/id/1015/820/620" 
              alt="TaskFlow Dashboard"
              width={820}
              height={620}
              className="rounded-[2.5rem]"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40" />
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/60"
      >
        <span className="text-sm mb-2">Desliza para descubrir</span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1 h-2 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}