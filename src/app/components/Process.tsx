"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ShieldAlert, FileCheck, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "El Radar",
    subtitle: "Prospección Curada",
    description: "Analizamos perfiles públicos de forma silenciosa, descartando el ruido técnico. La IA retiene solo el 1% de prospectos que encajan perfectamente con el nivel estricto de tu firma.",
  },
  {
    number: "02",
    title: "El Arte del Mensaje",
    subtitle: "Personalización Inteligente",
    description: "Generación de borradores únicos para cada Prospecto basados en su contexto reciente. El sistema se detiene y exige tu Aprobación Humana antes del primer contacto.",
  },
  {
    number: "03",
    title: "Control Absoluto",
    subtitle: "Dashboard Operativo",
    description: "La prospección funciona de fondo. Tu tablero abstracto y silencioso traslada los estados de los prospectos predictivamente conforme muestran interés en tu portafolio.",
  },
  {
    number: "04",
    title: "El Toque Final",
    subtitle: "Transición Post-Venta",
    description: "La relación no termina en el 'Sí'. Con un solo clic desde la interfaz, se autogenera y envía el contrato formal y los documentos de bienvenida con estética impecable.",
  }
];

const VisualRadar = () => (
  <div className="w-full bg-[#111110]/80 backdrop-blur-2xl border border-background/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col h-[320px] md:h-[380px]">
    <div className="flex items-center justify-between border-b border-background/10 pb-4 mb-4 md:mb-6">
      <div className="flex items-center gap-3">
         <Search className="w-4 h-4 text-accent" />
         <span className="font-mono text-[10px] md:text-xs text-background/50 uppercase tracking-widest">Motor OSINT Activo</span>
      </div>
      <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
    </div>
    <div className="flex-1 overflow-hidden relative">
      <div className="absolute bottom-0 w-full space-y-3 md:space-y-4 font-mono text-[10px] sm:text-xs">
        <p className="text-background/20 uppercase">Analizando batch 4992 (LinkedIn, Crunchbase)...</p>
        <p className="text-background/30 px-2 border-l border-red-500/20">[WARN] Descartado - Empresa con presupuesto insuficiente</p>
        <p className="text-background/30 px-2 border-l border-red-500/20">[WARN] Descartado - Nivel de jerarquía irrelevante</p>
        <p className="text-emerald-500/90 bg-emerald-500/10 px-3 py-2 border border-emerald-500/20 rounded shadow-[inset_0_0_10px_rgba(16,185,129,0.05)] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
          + [MATCH] "Director de Arte" - Firma Diseño Boutique (Score: 99/100)
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111110] to-transparent z-10" />
    </div>
  </div>
);

const VisualApproval = () => (
  <div className="w-full bg-[#111110]/80 backdrop-blur-2xl border border-background/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
     <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 opacity-20 pointer-events-none">
       <div className="h-2.5 md:h-3.5 w-3/4 bg-background rounded" />
       <div className="h-2.5 md:h-3.5 w-full bg-background rounded" />
       <div className="h-2.5 md:h-3.5 w-5/6 bg-background rounded" />
     </div>
     
     <div className="bg-foreground border border-red-900/40 rounded-xl p-5 md:p-6 shadow-[0_0_40px_rgba(153,27,27,0.15)] relative z-20">
       <div className="flex items-center gap-3 mb-4 md:mb-5">
         <ShieldAlert className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
         <span className="font-mono text-[9px] md:text-xs text-red-400 font-medium tracking-wide">APROBACIÓN REQUERIDA</span>
       </div>
       <p className="text-[11px] md:text-[13px] text-background/80 font-mono mb-5 md:mb-6 leading-relaxed">
         El borrador personalizado ha sido generado combinando su reciente hito de marca y nuestro portafolio creativo.<br/><br className="hidden sm:block" />
         ¿Autorizas formalmente el envío del contacto?
       </p>
       <div className="flex gap-3 md:gap-4">
         <button className="flex-1 bg-background/5 hover:bg-background/10 border border-background/10 transition-colors py-2 md:py-2.5 rounded-lg font-mono text-[9px] md:text-[10px] uppercase text-background/80">
           Editar
         </button>
         <button className="flex-1 bg-red-900/30 hover:bg-red-900/50 border border-red-500/40 transition-colors py-2 md:py-2.5 rounded-lg font-mono text-[9px] md:text-[10px] uppercase text-red-200 shadow-[inset_0_0_15px_rgba(248,113,113,0.15)]">
           Aprobar Envío
         </button>
       </div>
     </div>
  </div>
);

const VisualDashboard = () => (
   <div className="w-full bg-foreground/60 backdrop-blur-3xl border border-background/10 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-4 md:gap-5">
      <div className="p-4 md:p-5 rounded-2xl border border-accent/40 bg-accent/10 flex items-center justify-between shadow-[0_0_20px_rgba(181,164,125,0.05)] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
         <div className="pl-3 min-w-0 flex-1 pr-2">
           <p className="text-[13px] md:text-base text-background font-medium mb-1 truncate">Agencia de Branding X</p>
           <p className="font-mono text-[9px] md:text-[10px] text-background/50 truncate">Founding Partner</p>
         </div>
         <div className="px-3 md:px-4 py-1.5 rounded-full border border-accent/40 bg-accent/20 shrink-0">
           <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-wider text-accent drop-shadow-sm">Reunión Activa</span>
         </div>
      </div>
      
      <div className="p-4 md:p-5 rounded-2xl border border-background/10 bg-background/5 flex items-center justify-between opacity-60">
         <div className="pl-3 min-w-0 flex-1 pr-2">
           <p className="text-[13px] md:text-base text-background font-medium mb-1 truncate">Boutique Tech Studio</p>
           <p className="font-mono text-[9px] md:text-[10px] text-background/50 truncate">CTO</p>
         </div>
         <div className="px-3 md:px-4 py-1.5 rounded-full border border-background/20 shrink-0">
           <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-wider text-background/60">Propuesta Enviada</span>
         </div>
      </div>

      <div className="p-4 md:p-5 rounded-2xl border border-background/10 bg-background/5 flex items-center justify-between opacity-30">
         <div className="pl-3 min-w-0 flex-1 pr-2">
           <p className="text-[13px] md:text-base text-background font-medium mb-1 truncate">Consultora Creativa M</p>
           <p className="font-mono text-[9px] md:text-[10px] text-background/50 truncate">Dirección</p>
         </div>
         <div className="px-3 md:px-4 py-1.5 rounded-full border border-background/20 shrink-0">
           <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-wider text-background/60">Seguimiento</span>
         </div>
      </div>
   </div>
);

const VisualPostSale = () => (
   <div className="w-full bg-[#111110]/95 backdrop-blur-2xl border border-accent/30 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(181,164,125,0.08)] text-center flex flex-col items-center justify-center h-[320px] md:h-[380px]">
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center mb-6 md:mb-8 shadow-[inset_0_0_30px_rgba(181,164,125,0.2)]">
        <FileCheck className="w-8 h-8 md:w-10 md:h-10 text-accent/90" />
      </div>
      <h4 className="text-2xl md:text-3xl font-serif text-background mb-3">Acuerdo Formal</h4>
      <p className="text-xs md:text-sm text-background/60 mb-8 md:mb-10 max-w-xs font-light leading-relaxed">
        Propuesta aceptada, cliente listo para arrancar. Cierra la operación con elegancia formal en un solo paso.
      </p>
      
      <button className="flex items-center gap-2 md:gap-3 bg-accent/15 hover:bg-accent/25 border border-accent/50 transition-all duration-500 py-3 md:py-3.5 px-6 md:px-8 rounded-xl group relative overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(181,164,125,0.1)] hover:shadow-[0_0_30px_rgba(181,164,125,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-[1000ms] ease-in-out" />
        <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent drop-shadow-sm group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500" />
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-accent font-medium">Generar Documentos</span>
      </button>
   </div>
);

const processVisuals = [
  <VisualRadar key="v0" />,
  <VisualApproval key="v1" />,
  <VisualDashboard key="v2" />,
  <VisualPostSale key="v3" />
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // We only initialize GSAP on desktop sizes and if the container exists
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const stepEls = gsap.utils.toArray<HTMLElement>('.cycle-step');
      const visualEls = gsap.utils.toArray<HTMLElement>('.desktop-visual');
      
      // Desktop setup: Sticky visuals driven by scroll position
      mm.add("(min-width: 1024px)", () => {
        // Initialization
        gsap.set(visualEls, { autoAlpha: 0, scale: 0.95, y: 15 });
        if (visualEls[0]) {
          gsap.set(visualEls[0], { autoAlpha: 1, scale: 1, y: 0 });
        }

        stepEls.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) {
                visualEls.forEach((v, j) => {
                  if (i === j) {
                    gsap.to(v, { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out", overwrite: true });
                  } else {
                    gsap.to(v, { autoAlpha: 0, scale: 0.95, y: -15, duration: 0.6, ease: "power3.out", overwrite: true });
                  }
                });
              }
            }
          });
          
          // Animate text entry on scroll
          const content = step.querySelector('.step-content');
          if (content) {
            gsap.fromTo(content, 
              { autoAlpha: 0.2, x: -15 },
              { 
                autoAlpha: 1, x: 0, duration: 0.6, ease: "power2.out",
                scrollTrigger: {
                  trigger: step,
                  start: "top 70%",
                  end: "bottom center",
                  toggleActions: "play reverse play reverse"
                }
              }
            );
          }
        });
      });

      // Mobile setup: Simple fade in for blocks including inline visual
      mm.add("(max-width: 1023px)", () => {
        stepEls.forEach((step) => {
          const content = step.querySelectorAll('.step-content, .mobile-visual');
          content.forEach(el => {
             gsap.fromTo(el, 
               { autoAlpha: 0, y: 20 },
               { 
                 autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out",
                 scrollTrigger: {
                   trigger: step,
                   start: "top 85%",
                 }
               }
             );
          });
        });
      });
      
    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#0A0A09] text-background overflow-clip">
      {/* Tech Grid Background overlay (Darker theme for contrast) */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, var(--background) 1px, transparent 1px), linear-gradient(to bottom, var(--background) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-start relative">
          
          {/* Left Side: Scrolling Content (Mobile Inline) */}
          <div className="w-full lg:w-5/12 py-20 sm:py-32 lg:py-48 relative z-20">
            <div className="mb-16 sm:mb-24 lg:mb-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/5 backdrop-blur-md border border-background/10 shadow-sm mb-6 md:mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Operativa Integral</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] tracking-tight">
                El Ciclo Aurellis
              </h2>
              <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-background/60 max-w-md leading-relaxed font-light">
                Desde la identificación del cliente ideal hasta el onboarding y firma formal. Un sistema inquebrantable de inicio a fin.
              </p>
            </div>

            <div className="flex flex-col gap-20 lg:gap-0">
              {steps.map((step, i) => (
                <div key={i} className="cycle-step lg:min-h-[70vh] flex flex-col justify-center">
                  <div className="step-content">
                    <span className="font-mono text-5xl md:text-7xl font-light text-background/5 mb-4 sm:mb-6 block drop-shadow-sm select-none">
                      {step.number}
                    </span>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-2 sm:mb-3">
                      {step.subtitle}
                    </h3>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl text-background font-serif mb-4 sm:mb-6 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-background/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Mobile Inline Visual - hidden on desktop */}
                  <div className="mobile-visual opacity-0 lg:hidden mt-10 sm:mt-12 w-full relative">
                    {/* Backglow Ambient */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
                    {processVisuals[i]}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Spacer to allow scrolling past final step on desktop */}
            <div className="hidden lg:block h-[30vh]" />
          </div>

          {/* Right Side: Sticky Visuals (Hidden on Mobile) */}
          <div className="hidden lg:flex w-full lg:w-7/12 sticky top-0 h-screen items-center justify-center p-12 pointer-events-none">
            <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">
              
              {/* Backglow Ambient */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 blur-[120px] rounded-full" />

              {processVisuals.map((visual, i) => (
                <div key={i} className="desktop-visual absolute inset-0 flex items-center justify-center">
                  {visual}
                </div>
              ))}

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}