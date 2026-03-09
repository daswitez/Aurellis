import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    quote: "En tres meses recuperé 15 horas semanales. El sistema identificó prospectos que jamás hubiera encontrado manualmente.",
    author: "Elena Martínez",
    role: "Consultora estratégica",
    metric: "+240% en pipeline"
  },
  {
    quote: "La calidad de los leads es superior a cualquier lista comprada. El sistema entiende mi nicho mejor que yo.",
    author: "Roberto Silva",
    role: "Director de agencia boutique",
    metric: "32 clientes nuevos"
  },
  {
    quote: "Pasé de perseguir clientes a seleccionarlos. La automatización me devolvió el control de mi tiempo.",
    author: "Ana Ortega",
    role: "Diseñadora freelance",
    metric: "€47k adicionales"
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".test-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".test-header",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(
        ".test-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".test-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative px-8 md:px-16 lg:px-24 py-40 bg-gradient-to-b from-background to-card overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="test-header opacity-0 text-center space-y-8 mb-32 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border/40">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Casos reales</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-foreground tracking-tight">
            Profesionales que transformaron
            <br />
            su desarrollo comercial
          </h2>
        </div>

        <div className="test-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="test-card opacity-0 group relative">
              <div className="relative p-10 rounded-[20px] bg-background border border-border/40 hover:border-accent/30 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 h-full flex flex-col">
                {/* Quote marks */}
                <div className="text-6xl font-serif text-accent/20 leading-none mb-6">"</div>
                
                <div className="flex-1 space-y-8">
                  <p className="text-lg text-foreground leading-relaxed">
                    {testimonial.quote}
                  </p>
                  
                  <div className="pt-6 border-t border-border/30 space-y-4">
                    <div>
                      <div className="font-medium text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="inline-flex px-3 py-1.5 rounded-full bg-accent/10 text-xs font-medium text-accent">
                      {testimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
