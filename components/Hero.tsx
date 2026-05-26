"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(14,165,233,0.15),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-400 rounded-full text-sm mb-6">
            ✨ Nueva: IA para estimación de tareas
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Fluye mejor.<br />
            <span className="bg-linear-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Produce más.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-md">
            La herramienta moderna que tu equipo necesita para organizar tareas, colaborar y alcanzar objetivos más rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#precios" className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-semibold flex items-center justify-center gap-3 group">
              Comenzar gratis
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            
            <button className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 rounded-2xl font-medium flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Play className="text-sky-600" /> Ver demo (1:42)
            </button>
          </div>

          <p className="text-sm text-zinc-500 mt-6">Sin tarjeta • Cancela cuando quieras</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-zinc-900 rounded-3xl p-2 shadow-2xl overflow-hidden">
            <Image 
              src="https://picsum.photos/id/1015/800/620" 
              alt="Dashboard de TaskFlow"
              width={800}
              height={620}
              className="rounded-2xl shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}