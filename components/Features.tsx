"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, BarChart3, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Gestión Inteligente",
    desc: "Organiza tareas con drag & drop, subtareas y prioridades automáticas."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Colaboración en Tiempo Real",
    desc: "Comenta, menciona y trabaja junto a tu equipo como nunca."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Reportes Avanzados",
    desc: "Visualiza productividad, carga de trabajo y progreso de proyectos."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automatizaciones",
    desc: "Reglas inteligentes que hacen el trabajo por ti."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seguridad Empresarial",
    desc: "SOC2, encriptación y permisos granulares."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Integraciones",
    desc: "Slack, Google Calendar, GitHub, Notion y más."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Todo lo que necesitas</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Diseñado para equipos modernos que quieren resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 transition-all group"
            >
              <div className="text-sky-600 mb-6 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}