import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

const features = [
  "Scraping inteligente de múltiples fuentes digitales",
  "Extracción de datos comerciales estructurados",
  "Análisis de señales de oportunidad en tiempo real",
  "Segmentación automática por nicho y criterios",
  "Base de datos curada y actualizada",
  "Automatización del ciclo completo de contacto",
  "Pipeline visual con etapas personalizables",
  "Métricas refinadas de rendimiento comercial"
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Izquierda (Texto y Botón)
      gsap.fromTo(
        ".feat-left",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".feat-left",
            start: "top 85%",
          }
        }
      );

      // Derecha (Lista de features)
      gsap.fromTo(
        ".feat-item",
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".feat-right",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-8 md:px-16 lg:px-24 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="feat-left space-y-8 opacity-0">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-foreground font-serif tracking-tight">
                Herramientas de operación comercial
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Todo lo necesario para gestionar tu desarrollo comercial de manera
                profesional, organizada y sistemática.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" className="text-[16px]">
                Explorar plataforma
              </Button>
            </div>
          </div>

          <div className="feat-right space-y-3">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="feat-item opacity-0 flex items-start gap-4 p-5 rounded-[16px] bg-card border border-border/40 hover:border-accent/40 transition-colors duration-500"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span className="text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
