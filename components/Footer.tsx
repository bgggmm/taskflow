export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 text-white mb-4">
            <div className="w-8 h-8 bg-sky-600 rounded-2xl flex items-center justify-center font-bold">T</div>
            <span className="font-bold text-2xl">TaskFlow</span>
          </div>
          <p>Productividad con propósito.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Producto</h4>
          <ul className="space-y-2">
            <li>Características</li>
            <li>Precios</li>
            <li>Integraciones</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Compañía</h4>
          <ul className="space-y-2">
            <li>Sobre nosotros</li>
            <li>Blog</li>
            <li>Carreras</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>Privacidad</li>
            <li>Términos</li>
            <li>Seguridad</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-16 text-sm">
        © 2026 TaskFlow. Todos los derechos reservados.
      </div>
    </footer>
  );
}