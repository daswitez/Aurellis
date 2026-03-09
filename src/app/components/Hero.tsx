import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-title-mask",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
          transformOrigin: "left",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center px-8 md:px-16 lg:px-24 py-32 overflow-hidden bg-background">
      {/* Refined texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        <div className="space-y-16 w-full">
          {/* Premium badge */}
          <div className="hero-element flex justify-center opacity-0">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/30 bg-card/50 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Sistema comercial inteligente</span>
            </div>
          </div>

          <div className="hero-element space-y-8 text-center opacity-0">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground font-serif leading-[0.95] tracking-tight">
              Construye tu
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">máquina comercial</span>
                <span
                  className="hero-title-mask absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-0"
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sistema de automatización comercial B2B para firmas exigentes. 
              Identificación silenciosa de oportunidades mientras tú te enfocas en tu *deep work*.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-element flex flex-col sm:flex-row gap-5 justify-center items-center opacity-0">
            <Button size="lg" className="text-lg group">
              Comenzar ahora
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Ver demo privada
            </Button>
          </div>

          <div className="hero-element pt-8 pb-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-muted-foreground opacity-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent/80" />
              <span>Prospección curada sin código</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent/80" />
              <span>Contacto B2B hiper-personalizado con IA</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent/80" />
              <span>Gestión de pipeline silenciosa</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}