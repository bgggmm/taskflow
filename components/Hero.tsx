"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-sky-950">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(at_40%_20%,rgba(14,165,233,0.25),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-8 text-white">
            ✨ Nueva: IA para estimación inteligente de tareas
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white mb-6">
            Fluye mejor.<br />
            <span className="bg-linear-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Produce más.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-lg">
            La herramienta moderna que tu equipo necesita para organizar tareas, 
            colaborar en tiempo real y alcanzar objetivos más rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#precios" 
              className="px-8 py-4 bg-white text-zinc-900 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all group text-lg"
            >
              Comenzar gratis
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            
            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-2xl font-medium flex items-center gap-3 transition-all">
              <Play size={22} /> Ver demo (1:42)
            </button>
          </div>

          <p className="text-sm text-zinc-400 mt-6">Sin tarjeta • Cancela cuando quieras</p>
        </motion.div>

        {/* Imagen mejorada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="https://picsum.photos/id/1015/800/620" 
              alt="Dashboard TaskFlow"
              width={800}
              height={620}
              className="rounded-3xl"
              priority
            />
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/60 text-sm flex flex-col items-center"
        >
          Desliza para explorar
          <div className="w-5 h-8 border-2 border-white/40 rounded-full mt-2 flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}