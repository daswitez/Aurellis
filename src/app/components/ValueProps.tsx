import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Clock, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";

const valueProps = [
  {
    icon: Clock,
    title: "El Motor Silencioso",
    description: "La prospección funciona de fondo. Crea sin interrupciones y asiste a reuniones ya agendadas.",
    highlight: "Deep Work"
  },
  {
    icon: Target,
    title: "Prestigio Comercial",
    description: "Prospección curada que protege tu marca personal. Acercamiento B2B hiper-personalizado con fricción humana.",
    highlight: "Cero Spam"
  },
  {
    icon: Zap,
    title: "Transición Post-Venta",
    description: "Una experiencia de onboarding impecable. Acuerdos y documentos con la estética de una firma premium.",
    highlight: "Estandarización"
  },
  {
    icon: TrendingUp,
    title: "Infraestructura Escalable",
    description: "Un sistema que sostiene tu ritmo. Pasa de un modelo dependiente del esfuerzo manual a un pipeline predecible.",
    highlight: "Control Absoluto"
  }
];

export function ValueProps() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".vp-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vp-header",
            start: "top 85%",
          }
        }
      );

      // Value Cards
      gsap.fromTo(
        ".vp-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vp-grid",
            start: "top 80%",
          }
        }
      );

      // Bottom section
      gsap.fromTo(
        ".vp-bottom",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vp-bottom",
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative px-8 md:px-16 lg:px-24 py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="vp-header opacity-0 text-center space-y-8 mb-32 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/40">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Valor medible</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-foreground tracking-tight">
            Resultados que justifican
            <br />
            cada minuto de tu inversión
          </h2>
        </div>

        <div className="vp-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div key={prop.title} className="vp-card opacity-0 group relative">
                <div className="relative p-8 rounded-[20px] bg-gradient-to-br from-card to-background border border-border/40 hover:border-accent/40 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 h-full">
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-accent" strokeWidth={1} />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-3xl font-serif text-accent">
                        {prop.highlight}
                      </div>
                      <h3 className="text-xl text-foreground font-medium">
                        {prop.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional proof points */}
        <div className="vp-bottom opacity-0 mt-32 p-12 rounded-[24px] bg-foreground text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-3xl md:text-4xl font-serif text-background">
              No eres un vendedor, eres un creador de valor
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deja de pensar en la prospección como una carga manual que interfiere con tu talento. 
              Aurellis organiza tu adquisición de clientes con elegancia técnica, mientras tú 
              te enfocas en entregar resultados extraordinarios.
            </p>
            <div className="pt-6">
              <Button size="lg" variant="default" className="bg-background text-foreground hover:bg-card">
                Explorar el flujo comercial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
