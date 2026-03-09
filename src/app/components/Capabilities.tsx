import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Workflow, Mail, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Descubrimiento continuo",
    description: "Recolección inteligente de prospectos desde fuentes digitales públicas, directorios profesionales y plataformas de tu nicho de mercado.",
    metric: "500+ leads/mes"
  },
  {
    icon: Workflow,
    title: "Extracción estructurada",
    description: "Análisis y procesamiento de información comercial visible: empresas, sectores, tecnologías, señales de oportunidad y datos de contacto.",
    metric: "92% precisión"
  },
  {
    icon: Mail,
    title: "Automatización completa",
    description: "Gestión del ciclo comercial desde el primer contacto hasta la incorporación del cliente, sin intervención manual constante.",
    metric: "3.2x conversión"
  },
  {
    icon: BarChart3,
    title: "Organización refinada",
    description: "Base de datos curada, segmentación precisa y seguimiento de oportunidades comerciales en cada etapa del proceso.",
    metric: "Dashboard en vivo"
  }
];

export function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".cap-header",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cap-header",
            start: "top 85%",
          }
        }
      );

      // Cards animation
      gsap.fromTo(
        ".cap-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cap-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative px-8 md:px-16 lg:px-24 py-40 bg-card overflow-hidden">
      {/* Decorative element (mute-gold glow) */}
      {/* Removed tech glows for a premium look */}
      
      <div className="relative max-w-7xl mx-auto">
        <div className="cap-header space-y-8 mb-32 max-w-3xl opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/40">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Capacidades principales</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-foreground tracking-tight">
            Tu equipo comercial
            <br />
            que nunca duerme
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cada módulo del sistema trabaja en sincronía para construir y nutrir
            tu pipeline mientras tú te dedicas a cerrar tratos.
          </p>
        </div>

        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="cap-card opacity-0 group relative p-10 lg:p-12 rounded-[20px] border border-border/40 bg-background/50 hover:bg-card hover:border-accent/30 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 rounded-[20px] shadow-sm bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 pointer-events-none" />
                
                <div className="relative space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border/40 flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-lg transition-all duration-700">
                      <Icon className="w-8 h-8 text-foreground" strokeWidth={1} />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-card border border-accent/20 text-xs text-accent font-medium">
                      {capability.metric}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl text-foreground tracking-tight">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}