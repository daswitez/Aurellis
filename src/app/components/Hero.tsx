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
      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        <div className="space-y-16 w-full">
          {/* Premium Tech badge */}
          <div className="hero-element flex justify-center opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/30 bg-card/40 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(181,164,125,0.8)]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sistema comercial inteligente</span>
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

          <div className="hero-element pt-8 pb-16 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-xs font-mono text-muted-foreground opacity-0">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span className="tracking-wide">Prospección curada sin código</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span className="tracking-wide">Contacto hiper-personalizado</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span className="tracking-wide">Gestión de pipeline silenciosa</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}