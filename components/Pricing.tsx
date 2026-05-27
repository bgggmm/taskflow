"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "mes",
    description: "Perfecto para freelancers",
    features: ["Hasta 5 proyectos", "2 miembros", "Almacenamiento básico", "Soporte comunitario"],
    cta: "Empezar gratis",
    popular: false,
    gradient: "from-zinc-500 to-zinc-700"
  },
  {
    name: "Pro",
    price: "19",
    period: "mes",
    description: "Para equipos en crecimiento",
    features: ["Proyectos ilimitados", "Miembros ilimitados", "Reportes avanzados", "Automatizaciones", "Prioridad en soporte"],
    cta: "Probar 14 días gratis",
    popular: true,
    gradient: "from-sky-500 to-blue-600"
  },
  {
    name: "Enterprise",
    price: "49",
    period: "mes",
    description: "Para grandes organizaciones",
    features: ["Todo de Pro", "SSO", "Soporte dedicado", "On-premise opcional", "Contratos anuales"],
    cta: "Contactar ventas",
    popular: false,
    gradient: "from-purple-500 to-pink-600"
  }
];

export default function Pricing() {
  return (
    <section id="precios" className="py-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 bg-linear-to-br from-sky-100/50 to-purple-100/50 dark:from-sky-900/10 dark:to-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
            Planes simples y transparentes
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">Elige el que mejor se adapte a tu equipo</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className="relative pt-4">
              {/* Badge fuera del card para no ser cortado por overflow-hidden */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-linear-to-r from-sky-500 to-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-lg shadow-sky-500/50 whitespace-nowrap"
                >
                  MÁS POPULAR
                </motion.div>
              )}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl p-10 bg-white dark:bg-zinc-900 ${plan.popular ? 'scale-105 shadow-2xl shadow-sky-500/20' : 'shadow-xl'} overflow-hidden h-full flex flex-col min-h-[450px]`}
            >

              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-linear-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-linear-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-linear-to-br ${plan.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-zinc-500 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-6xl font-bold bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-500">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className={`w-6 h-6 rounded-full bg-linear-to-br ${plan.gradient} flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="group-hover/item:translate-x-1 transition-transform">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden ${plan.popular ? 'bg-linear-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40' : 'border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500'}`}
                >
                  {plan.popular && (
                    <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  )}
                  <span className="relative z-10">{plan.cta}</span>
                </motion.button>
              </div>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}