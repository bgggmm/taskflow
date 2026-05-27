"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Méndez",
    role: "CEO @ NovaStart",
    content: "TaskFlow transformó completamente cómo gestionamos nuestros proyectos. +47% de productividad en 3 meses.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Carlos Rivera",
    role: "Head of Product @ ScaleUp",
    content: "La mejor herramienta de tareas que hemos probado. La integración con Slack es impecable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Valentina Soto",
    role: "Operations Manager @ GreenTech",
    content: "Finalmente una herramienta que mi equipo realmente ama usar.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-zinc-100 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-linear-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
            Lo que dice nuestra comunidad
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Spotlight effect on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`absolute inset-0 bg-linear-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} style={{ opacity: 0 }} />

              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-linear-to-br ${t.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Quote icon */}
                <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${t.gradient} p-3 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Quote className="text-white" size={24} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700 group-hover:ring-transparent transition-all">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-zinc-900 group-hover:to-zinc-600 dark:group-hover:from-white dark:group-hover:to-zinc-400 group-hover:bg-clip-text transition-all">
                      {t.name}
                    </p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  {t.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}