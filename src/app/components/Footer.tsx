export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card">
      <div className="px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 pb-16">
            {/* Brand */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-foreground">
                  Aurellis
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Sistema comercial automatizado que transforma prospección manual
                  en operación continua e inteligente.
                </p>
              </div>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/40">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs text-muted-foreground">Sistema activo</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="md:col-span-2 space-y-5">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Producto
              </h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Características
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Integraciones
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Precios
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Comandos
                </a>
              </nav>
            </div>

            {/* Resources */}
            <div className="md:col-span-2 space-y-5">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Recursos
              </h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Documentación
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Línea Gráfica
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Casos de Firma
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Soporte Boutique
                </a>
              </nav>
            </div>

            {/* Company */}
            <div className="md:col-span-3 space-y-5">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Compañía
              </h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Acerca de
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Contacto
                </a>
                <a href="mailto:hello@aurellis.com" className="text-foreground hover:text-accent transition-colors">
                  hello@aurellis.com
                </a>
              </nav>
            </div>
          </div>

          <div
            className="pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground"
          >
            <p>© 2026 Aurellis. Operación Comercial Suprema.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}