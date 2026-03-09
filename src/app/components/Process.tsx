import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

const steps = [
  {
    number: "01",
    title: "Identificación",
    description: "El sistema recopila información de empresas, profesionales y oportunidades desde fuentes digitales públicas según tu nicho de mercado.",
    detail: "Scraping inteligente de múltiples fuentes en paralelo"
  },
  {
    number: "02",
    title: "Procesamiento",
    description: "Los datos extraídos se estructuran, limpian y enriquecen con información comercial relevante: sector, tecnologías, señales de interés.",
    detail: "Análisis y clasificación automática con ML"
  },
  {
    number: "03",
    title: "Organización",
    description: "Cada prospecto se almacena en una base curada con segmentación inteligente, priorización y estado en el ciclo comercial.",
    detail: "Base de datos actualizada en tiempo real"
  },
  {
    number: "04",
    title: "Ejecución",
    description: "Automatización del contacto inicial, seguimiento programado y gestión del pipeline hasta la incorporación del cliente.",
    detail: "Workflows personalizados y adaptativos"
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".proc-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".proc-header",
            start: "top 85%",
          }
        }
      );

      // Steps
      gsap.fromTo(
        ".proc-step",
        { opacity: 0, x: -32 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".proc-list",
            start: "top 80%",
          }
        }
      );

      // CTA
      gsap.fromTo(
        ".proc-cta",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".proc-cta",
            start: "top 90%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative px-8 md:px-16 lg:px-24 py-40 bg-foreground overflow-hidden">
      {/* Refined texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--background) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="proc-header opacity-0 space-y-8 mb-32 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 border border-accent/20">
            <span className="text-xs uppercase tracking-wider text-accent/80">El sistema en acción</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-background tracking-tight">
            De información pública
            <br />
            a cliente incorporado
          </h2>
          <p className="text-xl text-muted-foreground/80 leading-relaxed">
            Un flujo refinado que opera de manera continua, transformando datos dispersos
            en oportunidades comerciales estructuradas y listas para convertir.
          </p>
        </div>

        <div className="proc-list space-y-0">
          {steps.map((step) => (
            <div key={step.number} className="proc-step opacity-0 group relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start py-16 border-b border-border/20 last:border-0 hover:border-accent/30 transition-colors duration-700">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="text-7xl font-serif text-accent/30 group-hover:text-accent transition-colors duration-700">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-10 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-4xl text-background group-hover:text-accent/90 transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-3xl">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm text-accent">{step.detail}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="proc-cta opacity-0 mt-24 text-center">
          <Button size="lg" className="bg-background text-foreground hover:bg-card hover:text-foreground">
            Ver el sistema en detalle
          </Button>
        </div>
      </div>
    </section>
  );
}