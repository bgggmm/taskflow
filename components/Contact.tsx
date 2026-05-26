"use client";

import { useState } from "react";
import { createClient } from '@supabase/supabase-js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Crear cliente SUPABASE dentro del componente (importante para Vercel)
  const getSupabase = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Faltan variables de Supabase");
    }

    return createClient(supabaseUrl, supabaseAnonKey);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = getSupabase();

      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([formData]);

      if (supabaseError) {
        console.error(supabaseError);
        setError("Error al enviar el formulario. Inténtalo de nuevo.");
      } else {
        setSuccess(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setSuccess(false), 6000);
      }
    } catch (err) {
      setError("Error de configuración. Verifica las variables de entorno.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">¿Listo para mejorar tu flujo?</h2>
          <p className="text-xl text-zinc-400">Déjanos tus datos y te contactaremos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-600"
            />
            <input
              type="email"
              placeholder="Email corporativo"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-600"
            />
          </div>

          <input
            type="text"
            placeholder="Empresa"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-600"
          />

          <textarea
            placeholder="Cuéntanos brevemente qué estás buscando..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-600 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-white text-zinc-900 font-semibold rounded-2xl hover:bg-zinc-200 transition disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        {success && (
          <p className="text-emerald-400 text-center mt-6 font-medium">
            ¡Gracias! Te contactaremos pronto.
          </p>
        )}

        {error && (
          <p className="text-red-400 text-center mt-6">{error}</p>
        )}
      </div>
    </section>
  );
}