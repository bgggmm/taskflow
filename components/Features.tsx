"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, BarChart3, Zap, Shield, Clock } from "lucide-react";
import TiltCard from "./TiltCard";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Gestión Inteligente",
    desc: "Organiza tareas con drag & drop, subtareas y prioridades automáticas.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Colaboración en Tiempo Real",
    desc: "Comenta, menciona y trabaja junto a tu equipo como nunca.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Reportes Avanzados",
    desc: "Visualiza productividad, carga de trabajo y progreso de proyectos.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automatizaciones",
    desc: "Reglas inteligentes que hacen el trabajo por ti.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seguridad Empresarial",
    desc: "SOC2, encriptación y permisos granulares.",
    gradient: "from-red-500 to-rose-500"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Integraciones",
    desc: "Slack, Google Calendar, GitHub, Notion y más.",
    gradient: "from-cyan-500 to-sky-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-zinc-900 relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-linear-to-br from-sky-100 to-transparent dark:from-sky-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Todo lo que necesitas
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Diseñado para equipos modernos que quieren resultados reales.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <TiltCard key={i} intensity={15}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm hover:border-transparent transition-all duration-300 overflow-hidden h-full"
              >
              {/* Animated gradient border on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`absolute inset-0 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl group-hover:blur-2xl`} style={{ opacity: 0 }} />

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-linear-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-${feature.gradient.split('-')[1]}-500/25`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-zinc-900 group-hover:to-zinc-600 dark:group-hover:from-white dark:group-hover:to-zinc-400 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {feature.desc}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}