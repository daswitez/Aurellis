import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Building2, Globe2 } from "lucide-react";

const profiles = [
  {
    icon: Users,
    title: "Freelancers",
    description: "Profesionales independientes que buscan automatizar su prospección y organizar su cartera de clientes de manera refinada."
  },
  {
    icon: Building2,
    title: "Pequeñas agencias",
    description: "Equipos reducidos que necesitan operar con herramientas de nivel profesional sin departamento comercial completo."
  },
  {
    icon: Globe2,
    title: "Emprendedores",
    description: "Fundadores que quieren construir un sistema comercial escalable desde el inicio sin depender de procesos manuales."
  }
];

export function Audience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aud-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".aud-header",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(
        ".aud-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".aud-grid",
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
        <div className="aud-header opacity-0 text-center space-y-6 mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-foreground tracking-tight">
            Para profesionales con criterio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Diseñado para quienes trabajan de forma independiente y quieren
            herramientas que reflejen su nivel de exigencia.
          </p>
        </div>

        <div className="aud-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.title}
                className="aud-card opacity-0 space-y-6 p-8 lg:p-10 rounded-[20px] bg-card border border-border/40 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-background border border-border/40 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-foreground" strokeWidth={1} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl text-foreground font-medium">
                    {profile.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
