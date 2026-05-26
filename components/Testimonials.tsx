"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Laura Méndez",
    role: "CEO @ NovaStart",
    content: "TaskFlow transformó completamente cómo gestionamos nuestros proyectos. +47% de productividad en 3 meses.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Rivera",
    role: "Head of Product @ ScaleUp",
    content: "La mejor herramienta de tareas que hemos probado. La integración con Slack es impecable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Valentina Soto",
    role: "Operations Manager @ GreenTech",
    content: "Finalmente una herramienta que mi equipo realmente ama usar.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-zinc-100 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Lo que dice nuestra comunidad</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={t.avatar} 
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">{t.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}