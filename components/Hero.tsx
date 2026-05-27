"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Generate particle data once on mount using lazy initialization
  const [particles] = useState<Array<{
    left: number;
    top: number;
    scale: number;
    duration: number;
    yEnd: number;
  }>>(() =>
    Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 10 + 10,
      yEnd: Math.random() * -100 - 50,
    }))
  );

  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-linear-to-br from-zinc-950 via-zinc-900 to-sky-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(14,165,233,0.25),transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(at_70%_80%,rgba(59,130,246,0.2),transparent_70%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_50%,rgba(147,51,234,0.15),transparent_60%)] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-400/30 rounded-full"
            initial={{
              x: particle.left + '%',
              y: particle.top + '%',
              scale: particle.scale,
            }}
            animate={{
              y: [null, particle.yEnd + '%'],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: particle.left + '%',
              top: particle.top + '%',
            }}
          />
        ))}
      </div>

      {/* Glow effect behind the image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-150 h-150 bg-sky-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-0 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1, opacity }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-6 text-white hover:bg-white/15 transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Nueva: IA para estimación de tareas
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] text-white mb-6">
            <TextReveal delay={0.2}>Fluye mejor.</TextReveal><br />
            <span className="bg-linear-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              <TextReveal delay={0.4}>Produce más.</TextReveal>
            </span>
          </h1>

          <p className="text-xl text-zinc-300 mb-10 max-w-lg">
            <TextReveal delay={0.6}>
              La herramienta moderna que tu equipo necesita para organizar tareas,
              colaborar y alcanzar objetivos más rápido.
            </TextReveal>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton
              href="#precios"
              className="px-9 py-4 bg-white text-zinc-950 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg shadow-xl shadow-white/10"
            >
              Comenzar gratis
              <ArrowRight />
            </MagneticButton>

            <MagneticButton
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-2xl font-medium flex items-center gap-3 transition-all hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20"
            >
              <Play size={22} />
              Ver demo
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{ y: y2 }}
          className="relative"
        >
          <div className="relative rounded-[2.75rem] overflow-hidden shadow-2xl shadow-sky-500/20 border border-white/10 group">
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="https://picsum.photos/id/1015/820/620"
              alt="TaskFlow Dashboard"
              width={820}
              height={620}
              className="w-full group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Floating cards around the image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Tarea completada</p>
                <p className="text-zinc-400 text-xs">Hace 2 minutos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Productividad +47%</p>
                <p className="text-zinc-400 text-xs">Esta semana</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}