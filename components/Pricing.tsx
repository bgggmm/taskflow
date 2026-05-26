"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "mes",
    description: "Perfecto para freelancers",
    features: ["Hasta 5 proyectos", "2 miembros", "Almacenamiento básico", "Soporte comunitario"],
    cta: "Empezar gratis",
    popular: false
  },
  {
    name: "Pro",
    price: "19",
    period: "mes",
    description: "Para equipos en crecimiento",
    features: ["Proyectos ilimitados", "Miembros ilimitados", "Reportes avanzados", "Automatizaciones", "Prioridad en soporte"],
    cta: "Probar 14 días gratis",
    popular: true
  },
  {
    name: "Enterprise",
    price: "49",
    period: "mes",
    description: "Para grandes organizaciones",
    features: ["Todo de Pro", "SSO", "Soporte dedicado", "On-premise opcional", "Contratos anuales"],
    cta: "Contactar ventas",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Planes simples y transparentes</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">Elige el que mejor se adapte a tu equipo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 border ${plan.popular ? 'border-sky-600 scale-105' : 'border-zinc-200 dark:border-zinc-800'} bg-white dark:bg-zinc-900 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-sm px-4 py-1 rounded-full">MÁS POPULAR</div>
              )}

              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-zinc-500 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-6xl font-bold">${plan.price}</span>
                <span className="text-zinc-500">/{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="text-emerald-500" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-semibold ${plan.popular ? 'bg-sky-600 text-white' : 'border border-zinc-300 dark:border-zinc-700'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}