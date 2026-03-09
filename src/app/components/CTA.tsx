import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-box",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cta-box",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-8 md:px-16 lg:px-24 py-40 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="cta-box opacity-0 relative overflow-hidden rounded-[40px] bg-gradient-to-br from-foreground to-black p-16 md:p-20 lg:p-32">
          {/* Refined texture overlay */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, var(--background) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Decorative elements */}
          {/* Removed glows for a more premium, structured look */}

          {/* Accent border */}
          <div className="absolute inset-0 rounded-[40px] border border-accent/10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-accent/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-accent/90">Acceso inmediato</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-background font-serif leading-[1.1] tracking-tight">
                Empieza a construir tu
                máquina comercial hoy
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
                Únete a firmas boutique y profesionales independientes que recuperaron su *deep work* y escalaron sus oportunidades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-card">
                Crear mi cuenta ahora
              </Button>
              
              <Button size="lg" variant="outline" className="text-background border-border/50 hover:bg-background/10 hover:text-background">
                Agendar demo ejecutiva
              </Button>
            </div>

            <div className="pt-12 space-y-6">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto" />
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground/80">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Configuración en 5 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sin compromiso de permanencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Soporte técnico premium</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/60 pt-4">
                Más de 500 profesionales ya optimizaron su desarrollo comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}