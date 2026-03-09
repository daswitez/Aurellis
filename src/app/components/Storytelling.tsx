"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, TrendingDown, MailX, CheckCircle2, Zap, Users, ArrowRight } from "lucide-react";

export function Storytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // ── INITIAL STATES ──────────────────────────────────────
      gsap.set(".sc-s1", { autoAlpha: 0, y: 30 });
      gsap.set(".sc-s2", { autoAlpha: 0 });
      gsap.set(".sc-card", { autoAlpha: 0, y: 50 });
      gsap.set(".sc-s3", { autoAlpha: 0 });
      gsap.set(".sc-counter", { innerText: "0" });
      gsap.set(".sc-s4", { autoAlpha: 0 });
      gsap.set(".sc-s4-heading", { autoAlpha: 0, y: 20 });
      gsap.set(".sc-pipeline-row", { autoAlpha: 0, x: -20 });
      gsap.set(".sc-metric", { autoAlpha: 0, y: 15 });
      gsap.set(".sc-footer-line", { autoAlpha: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=700%",
          scrub: 1.4,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".sc-s1", { autoAlpha: 1, y: 0, duration: 2.5, ease: "power2.out" })
        .to({}, { duration: 5 })
        .to(".sc-s1", { autoAlpha: 0, y: -20, duration: 2 })

      .to(".sc-s2", { autoAlpha: 1, duration: 1 })
      .to(".sc-card-1", { autoAlpha: 1, y: 0, duration: 2, ease: "power3.out" }, "-=0.5")
      .to(".sc-card-2", { autoAlpha: 1, y: 0, duration: 2, ease: "power3.out" }, "-=1")
      .to(".sc-card-3", { autoAlpha: 1, y: 0, duration: 2, ease: "power3.out" }, "-=1")
      .to({}, { duration: 7 })
      .to(".sc-s2", { autoAlpha: 0, y: -25, duration: 2.5 })

      .to(".sc-s3", { autoAlpha: 1, duration: 1.5 }, "-=1")
      .to(".sc-counter", {
        innerText: 15,
        duration: 5,
        snap: { innerText: 1 },
        ease: "power1.inOut",
      })
      .to({}, { duration: 5 })
      .to(".sc-s3", { autoAlpha: 0, y: -20, duration: 2 })

      .to(section, { backgroundColor: "#1E1E1A", duration: 3.5 }, "-=1.5")
      .to(".sc-s4", { autoAlpha: 1, duration: 1 }, "-=2.5")
      .to(".sc-s4-heading", { autoAlpha: 1, y: 0, duration: 2.5, ease: "power2.out" }, "-=2")
      .to(".sc-pipeline-row", {
        autoAlpha: 1,
        x: 0,
        stagger: 1.5,
        duration: 2,
        ease: "power2.out",
      }, "-=1")
      .to(".sc-metric", {
        autoAlpha: 1,
        y: 0,
        stagger: 1,
        duration: 1.5,
      }, "-=4")
      .to(".sc-footer-line", { autoAlpha: 1, y: 0, duration: 1.5 }, "-=1")
      .to({}, { duration: 8 });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background border-t border-border/30"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-16 min-h-screen flex items-center justify-center">

        {/* ── SCENE 1: The Honest Confession ── */}
        <div className="sc-s1 absolute inset-0 flex flex-col items-center justify-center text-center px-5 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 md:mb-10">
            Un patrón que conocemos bien
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight max-w-3xl">
            Cuanto mejor eres en tu trabajo,<br />
            <span className="italic text-muted-foreground">menos tiempo tienes para conseguir clientes.</span>
          </h2>
          <p className="mt-6 md:mt-10 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            El ciclo de prospectar, entregar y volver a prospectar no es sostenible.
            Sin un sistema, tu crecimiento está limitado por tu energía.
          </p>
        </div>

        {/* ── SCENE 2: Pain Point Cards ── */}
        <div className="sc-s2 absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-10 md:mb-14">
            Por qué la prospección manual falla siempre
          </span>

          {/* Mobile: vertical compact list. Desktop: 3-col */}
          <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-5 max-w-5xl">

            {/* Card 1 */}
            <div className="sc-card sc-card-1 flex md:flex-col items-center md:items-start gap-4 md:gap-0 p-5 md:p-8 rounded-[18px] border border-border bg-card shadow-md text-left">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 md:mb-6">
                <Clock className="w-5 h-5 md:w-7 md:h-7 text-red-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-3">Tiempo robado</p>
                <h3 className="text-2xl md:text-4xl font-serif font-semibold text-foreground leading-none">15 h <span className="text-sm md:text-base font-normal text-muted-foreground">/ semana</span></h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-4">
                  Investigar nombres, rastrear emails, actualizar hojas de cálculo. Trabajo de bajo valor que bloquea tu trabajo profundo.
                </p>
                <p className="md:hidden text-xs text-muted-foreground mt-1 leading-relaxed">
                  Investigar, rastrear contactos y actualizar CRMs a mano.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="sc-card sc-card-2 flex md:flex-col items-center md:items-start gap-4 md:gap-0 p-5 md:p-8 rounded-[18px] border border-border bg-card shadow-md text-left">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 md:mb-6">
                <TrendingDown className="w-5 h-5 md:w-7 md:h-7 text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-3">Respuesta real</p>
                <h3 className="text-2xl md:text-4xl font-serif font-semibold text-foreground leading-none">&lt; 2% <span className="text-sm md:text-base font-normal text-muted-foreground">en frío</span></h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-4">
                  Sin personalización real, tu mensaje se confunde con ruido. El mercado está saturado de correos genéricos.
                </p>
                <p className="md:hidden text-xs text-muted-foreground mt-1 leading-relaxed">
                  El correo frío sin contexto rara vez obtiene respuesta.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="sc-card sc-card-3 flex md:flex-col items-center md:items-start gap-4 md:gap-0 p-5 md:p-8 rounded-[18px] border border-border bg-card shadow-md text-left">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 md:mb-6">
                <MailX className="w-5 h-5 md:w-7 md:h-7 text-zinc-500" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5 md:mb-3">Riesgo de reputación</p>
                <h3 className="text-2xl md:text-4xl font-serif font-semibold text-foreground leading-none">Daño <span className="text-sm md:text-base font-normal text-muted-foreground">de marca</span></h3>
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-4">
                  Un envío masivo sin curaduría puede marcar tu dominio como spam y destruir años de autoridad construida.
                </p>
                <p className="md:hidden text-xs text-muted-foreground mt-1 leading-relaxed">
                  Envíos masivos sin curaduría dañan tu dominio y reputación.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── SCENE 3: Stat Counter ── */}
        <div className="sc-s3 absolute inset-0 flex flex-col items-center justify-center text-center px-5 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8 md:mb-12">
            El costo oculto de no tener un sistema
          </span>
          <div className="flex items-end justify-center gap-3 md:gap-5">
            <span className="sc-counter font-serif text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] leading-none text-foreground tabular-nums select-none">0</span>
            <div className="flex flex-col items-start pb-4 md:pb-6">
              <span className="text-3xl md:text-5xl font-serif text-muted-foreground leading-tight">horas</span>
              <span className="text-sm md:text-base text-muted-foreground/50 mt-1 md:mt-2">perdidas / semana</span>
            </div>
          </div>
          <p className="mt-5 md:mt-6 text-lg md:text-3xl font-serif italic text-muted-foreground/80 max-w-xl px-2">
            Son 780 horas al año buscando clientes en lugar de servirlos.
          </p>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground/50 max-w-sm md:max-w-md px-2">
            ¿A qué tarifa cobras? Multiplica eso. <span className="italic">Ese es el costo real de no automatizar.</span>
          </p>
        </div>

        {/* ── SCENE 4: Solution (dark) ── */}
        <div className="sc-s4 absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 pointer-events-none overflow-y-auto">
          
          {/* Heading */}
          <div className="sc-s4-heading text-center mb-6 md:mb-14 pt-6 md:pt-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B5A47D]/50 block mb-4 md:mb-8">
              La respuesta de Aurellis
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-[#F6F3EE] leading-[1.1] tracking-tight max-w-3xl mx-auto">
              Tu pipeline comercial, operando.<br />
              <span className="text-[#F6F3EE]/40 font-light italic text-lg sm:text-xl md:text-3xl mt-2 block">
                Mientras tú entregas resultados extraordinarios.
              </span>
            </h2>
          </div>

          {/* Desktop: 5-col grid / Mobile: stacked with metrics as 2-col pills */}
          <div className="w-full max-w-5xl flex flex-col lg:grid lg:grid-cols-5 gap-4 md:gap-6 items-start">

            {/* Pipeline Rows */}
            <div className="lg:col-span-3 space-y-2 md:space-y-3 w-full">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F6F3EE]/30 mb-3 md:mb-5">Pipeline activo en vivo</p>

              {[
                { persona: "Director de Arte", firm: "Estudio de Diseño Boutique", badge: "Reunión agendada", active: true, time: "Hoy, 14:30" },
                { persona: "Filmmaker", firm: "Productora Audiovisual", badge: "Propuesta enviada", active: false, time: "Ayer, 09:15" },
                { persona: "Coach Ejecutivo", firm: "Práctica Independiente", badge: "En seguimiento", active: false, time: "Hace 2 días" },
                { persona: "Arquitecto de Software", firm: "Consultoría Boutique", badge: "Primer contacto", active: false, time: "Hace 3 días" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="sc-pipeline-row flex items-center gap-3 p-3 md:p-4 rounded-[12px] bg-[#161613] border border-[#F6F3EE]/6"
                >
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center shrink-0 ${row.active ? "bg-[#B5A47D]/20" : "bg-[#F6F3EE]/4"}`}>
                    <div className={`w-2 h-2 rounded-full ${row.active ? "bg-[#B5A47D] animate-pulse" : "bg-[#F6F3EE]/15"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs md:text-sm font-medium truncate ${row.active ? "text-[#F6F3EE]/80" : "text-[#F6F3EE]/35"}`}>
                      {row.persona}
                    </p>
                    <p className={`text-[10px] md:text-xs mt-0.5 truncate ${row.active ? "text-[#F6F3EE]/40" : "text-[#F6F3EE]/20"}`}>
                      {row.firm}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full border whitespace-nowrap ${row.active ? "text-[#B5A47D] bg-[#B5A47D]/10 border-[#B5A47D]/25" : "text-[#F6F3EE]/25 bg-[#F6F3EE]/4 border-[#F6F3EE]/8"}`}>
                      {row.badge}
                    </span>
                    <span className="hidden sm:block text-[9px] text-[#F6F3EE]/20">{row.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="lg:col-span-2 w-full">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F6F3EE]/30 mb-3 md:mb-5">Resultados del sistema</p>

              {/* Mobile: 2-col compact grid. Desktop: stacked */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 lg:gap-4">
                {[
                  { icon: Zap, label: "Horas recuperadas / semana", value: "15h" },
                  { icon: Users, label: "Prospectos curados / mes", value: "120+" },
                  { icon: ArrowRight, label: "Tasa conv. personalizada", value: "4.8×" },
                  { icon: CheckCircle2, label: "Aprobación humana siempre", value: "100%" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="sc-metric flex items-center gap-3 p-3 md:p-4 rounded-[12px] bg-[#161613] border border-[#F6F3EE]/6">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center shrink-0 bg-[#B5A47D]/15">
                      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#B5A47D]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] md:text-[10px] text-[#F6F3EE]/30 uppercase tracking-widest leading-tight">{label}</p>
                      <p className="text-base md:text-xl font-serif font-semibold mt-0.5 text-[#B5A47D]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sc-footer-line mt-4 flex items-center gap-2 pt-3 border-t border-[#F6F3EE]/8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B5A47D] animate-pulse shrink-0" />
                <p className="text-[10px] text-[#F6F3EE]/30">Sistema activo · sin intervención manual constante</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
