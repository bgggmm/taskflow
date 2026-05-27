"use client";

import { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { motion } from "framer-motion";
import { Mail, Building, User, Send, CheckCircle2 } from "lucide-react";

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    <section id="contacto" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-sky-500/10 to-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            ¿Listo para mejorar tu flujo?
          </h2>
          <p className="text-xl text-zinc-400">Déjanos tus datos y te contactaremos</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'name' ? 'text-sky-400' : 'text-zinc-500'}`} size={20} />
              <input
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full bg-zinc-800/50 backdrop-blur-sm border rounded-2xl px-12 py-4 focus:outline-none transition-all duration-300 ${focusedField === 'name' ? 'border-sky-500 shadow-lg shadow-sky-500/20' : 'border-zinc-700 hover:border-zinc-600'}`}
              />
              <div className={`absolute inset-0 bg-linear-to-r from-sky-500/10 to-purple-500/10 rounded-2xl opacity-0 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : ''}`} />
            </div>

            <div className="relative group">
              <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'email' ? 'text-sky-400' : 'text-zinc-500'}`} size={20} />
              <input
                type="email"
                placeholder="Email corporativo"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full bg-zinc-800/50 backdrop-blur-sm border rounded-2xl px-12 py-4 focus:outline-none transition-all duration-300 ${focusedField === 'email' ? 'border-sky-500 shadow-lg shadow-sky-500/20' : 'border-zinc-700 hover:border-zinc-600'}`}
              />
              <div className={`absolute inset-0 bg-linear-to-r from-sky-500/10 to-purple-500/10 rounded-2xl opacity-0 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : ''}`} />
            </div>
          </div>

          <div className="relative group">
            <Building className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'company' ? 'text-sky-400' : 'text-zinc-500'}`} size={20} />
            <input
              type="text"
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              onFocus={() => setFocusedField('company')}
              onBlur={() => setFocusedField(null)}
              className={`w-full bg-zinc-800/50 backdrop-blur-sm border rounded-2xl px-12 py-4 focus:outline-none transition-all duration-300 ${focusedField === 'company' ? 'border-sky-500 shadow-lg shadow-sky-500/20' : 'border-zinc-700 hover:border-zinc-600'}`}
            />
            <div className={`absolute inset-0 bg-linear-to-r from-sky-500/10 to-purple-500/10 rounded-2xl opacity-0 transition-opacity duration-300 ${focusedField === 'company' ? 'opacity-100' : ''}`} />
          </div>

          <div className="relative group">
            <textarea
              placeholder="Cuéntanos brevemente qué estás buscando..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              className={`w-full bg-zinc-800/50 backdrop-blur-sm border rounded-2xl px-6 py-4 focus:outline-none transition-all duration-300 resize-none ${focusedField === 'message' ? 'border-sky-500 shadow-lg shadow-sky-500/20' : 'border-zinc-700 hover:border-zinc-600'}`}
            />
            <div className={`absolute inset-0 bg-linear-to-r from-sky-500/10 to-purple-500/10 rounded-2xl opacity-0 transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : ''}`} />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="group relative w-full py-5 bg-linear-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-3">
              {loading ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
            </span>
          </motion.button>
        </motion.form>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center justify-center gap-3 text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/30 rounded-2xl py-4 px-6 backdrop-blur-sm"
          >
            <CheckCircle2 size={24} />
            ¡Gracias! Te contactaremos pronto.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-red-400 text-center bg-red-500/10 border border-red-500/30 rounded-2xl py-4 px-6 backdrop-blur-sm"
          >
            {error}
          </motion.div>
        )}
      </div>
    </section>
  );
}