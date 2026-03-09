"use client";

import { useState } from "react";
import { 
  Building, MapPin, Linkedin, Sparkles, Send, Trash2, 
  ChevronRight, ChevronLeft, Target, ShieldCheck, X,
  Search, Filter, ArrowUpDown, Clock, Edit3
} from "lucide-react";

// Expanded Mock Data
const draftQueue = [
  {
    id: "DRF-042",
    date: "Hace 10 min",
    priority: "Alta",
    prospect: {
      name: "Elena Suárez",
      role: "CEO",
      company: "Studio M",
      location: "Madrid, Spain",
      linkedin: "linkedin.com/in/elenasuarez",
    },
    intelligence: {
      icpMatch: 98,
      recentNews: "Ganaron el premio Red Dot 2025 ayer.",
      painPoint: "Escalabilidad de su equipo de diseño tras cerrar ronda Seed.",
      angle: "Felicitar por el premio + ofrecer automatización para su nueva carga de trabajo."
    },
    draft: {
      subject: "Felicidades por el Red Dot, Elena / Ideas para la nueva fase de Studio M",
      body: "Hola Elena,\n\nVi que Studio M acaba de llevarse el Red Dot Award. ¡Qué locura de logro! El trabajo que hicieron para la campaña de RebrandX es increíble.\n\nNoté que acaban de levantar su ronda Seed. Asumo que escalar la producción de diseño sin perder la calidad artesanal que los hizo ganar premios debe ser el reto principal ahora mismo.\n\nEn Aurellis ayudamos a estudios como el suyo a automatizar la gestión de clientes y aprobaciones para que ustedes se enfoquen 100% en crear.\n\n¿Te parece una locura que hablemos 10 minutos la próxima semana para mostrarte cómo funcionaría para tu equipo?\n\nUn saludo,\n\nDavid",
      confidence: "Alta (94%)"
    }
  },
  {
    id: "DRF-043",
    date: "Hace 1 hora",
    priority: "Media",
    prospect: {
      name: "Carlos Rivera",
      role: "Head of Design",
      company: "TechFlow UI",
      location: "CDMX, México",
      linkedin: "linkedin.com/in/carlosrivera",
    },
    intelligence: {
      icpMatch: 85,
      recentNews: "Anunció en LinkedIn que están buscando un nuevo sistema de gestión de proyectos.",
      painPoint: "Proyectos atrasados por cuellos de botella en aprobaciones de clientes.",
      angle: "Mencionar su post + ofrecer nuestro flujo de aprobación de leads automático."
    },
    draft: {
      subject: "Sobre tu post de ayer sobre cuellos de botella de diseño",
      body: "Carlos,\n\nVi tu comentario de ayer sobre cómo las aprobaciones de los clientes de TechFlow UI están retrasando los sprints.\n\nConstruimos Aurellis precisamente para resolver el ida y vuelta con clientes corporativos. \n\nNo te quitaré mucho tiempo ahora mismo, pero me encantaría enviarte un video de 2 mins mostrando cómo recortamos a la mitad el tiempo de feedback.\n\n¿Te mando el enlace?",
      confidence: "Media (82%)"
    }
  },
  {
    id: "DRF-044",
    date: "Hace 2 horas",
    priority: "Alta",
    prospect: {
      name: "Andrea Gómez",
      role: "Marketing Director",
      company: "Innovate Bank",
      location: "Bogotá, Colombia",
      linkedin: "linkedin.com/in/andreagomez",
    },
    intelligence: {
      icpMatch: 95,
      recentNews: "Lanzamiento de nueva división de tarjetas de crédito para GenZ.",
      painPoint: "Necesitan captar un volumen masivo de leads jóvenes con mensajes personalizados.",
      angle: "Ofrecer el motor IA de prospección para escalar sus campañas de la tarjeta GenZ."
    },
    draft: {
      subject: "Campaña tarjeta GenZ - Motor de personalización",
      body: "Andrea, enhorabuena por el lanzamiento de la nueva vertical para GenZ de Innovate Bank.\n\nHe estado analizando el mercado y la clave será contactarlos con mensajes que no suenen a corporativo tradicional.\n\nEn Aurellis tenemos un motor de IA que puede generar miles de correos ultra personalizados basándose en perfiles de redes sociales.\n\nMe gustaría mostrarte cómo otras fintecs lo están usando. ¿Cuándo tienes un espacio breve para conectarnos?",
      confidence: "Alta (90%)"
    }
  }
];

export default function ActionCenter() {
  const [selectedDraftId, setSelectedDraftId] = useState<string | null>(null);

  // Detail View State
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState("");
  const [actionStatus, setActionStatus] = useState<"idle" | "approved" | "discarded">("idle");

  const handleSelectDraft = (id: string) => {
    const draft = draftQueue.find(d => d.id === id);
    if (draft) {
      setEditedBody(draft.draft.body);
      setIsEditing(false);
      setSelectedDraftId(id);
    }
  };

  const currentItem = draftQueue.find(d => d.id === selectedDraftId);
  const currentIndex = draftQueue.findIndex(d => d.id === selectedDraftId);

  const handleApprove = () => {
    setActionStatus("approved");
    setTimeout(() => {
      setActionStatus("idle");
      // Go to next item or back to list
      if (currentIndex < draftQueue.length - 1) {
        handleSelectDraft(draftQueue[currentIndex + 1].id);
      } else {
        setSelectedDraftId(null);
      }
    }, 1500);
  };

  const handleDiscard = () => {
    setActionStatus("discarded");
    setTimeout(() => {
      setActionStatus("idle");
      if (currentIndex < draftQueue.length - 1) {
        handleSelectDraft(draftQueue[currentIndex + 1].id);
      } else {
        setSelectedDraftId(null);
      }
    }, 1500);
  };

  // -------------------------
  // Render List View (Master)
  // -------------------------
  if (!selectedDraftId) {
    return (
      <div className="h-full flex flex-col pt-2 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl text-white font-serif tracking-tight mb-2 flex items-center gap-3">
              Centro de Acción 
              <span className="bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[10px] px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" /> {draftQueue.length} Pendientes
              </span>
            </h1>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
              Revisa y aprueba los borradores hiper-personalizados por la IA.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
             {/* Search */}
             <div className="relative">
               <Search className="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2" />
               <input 
                 type="text" 
                 placeholder="Buscar lead o empresa..."
                 className="bg-[#111110]/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 font-mono text-xs text-white outline-none focus:border-accent/40 w-64 transition-colors"
               />
             </div>
             {/* Filter Button */}
             <button className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 transition-colors">
                <Filter className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* List Header */}
        <div className="hidden lg:grid grid-cols-12 gap-6 px-6 py-3 border-y border-white/5 bg-[#111110]/30 font-mono text-[9px] uppercase tracking-widest text-white/40 mb-4 sticky top-0 z-10 backdrop-blur-md">
           <div className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-white transition-colors">Prospecto <ArrowUpDown className="w-3 h-3" /></div>
           <div className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-white transition-colors">Empresa / Cargo</div>
           <div className="col-span-4 flex items-center gap-1">Estrategia IA</div>
           <div className="col-span-1 flex items-center gap-1 cursor-pointer hover:text-white transition-colors justify-center">Match <ArrowUpDown className="w-3 h-3" /></div>
           <div className="col-span-1 text-center">Rev</div>
        </div>
        <div className="lg:hidden flex items-center px-6 py-3 border-y border-white/5 bg-[#111110]/30 font-mono text-[9px] uppercase tracking-widest text-white/40 mb-4 sticky top-0 z-10 backdrop-blur-md">
           <div className="w-full text-left">Prospecto y Estrategia</div>
        </div>

        {/* List Items */}
        <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pb-12">
          {draftQueue.map((draft) => (
            <div 
              key={draft.id}
              onClick={() => handleSelectDraft(draft.id)}
              className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 px-6 py-5 rounded-2xl border border-white/5 bg-[#111110]/50 backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer group relative overflow-hidden"
            >
               {/* Priority Left Border Indicator */}
               {draft.priority === 'Alta' ? (
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/80 shadow-[0_0_10px_rgba(181,164,125,0.5)]" />
               ) : (
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10" />
               )}

               {/* Prospect Info */}
               <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-start pl-2 lg:pl-0 min-w-0">
                  <div className="flex flex-col min-w-0 pr-4">
                    <p className="text-white font-medium text-sm truncate">{draft.prospect.name}</p>
                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mt-1 truncate flex items-center gap-1">
                       <Clock className="w-2.5 h-2.5" /> ID: {draft.id}
                    </p>
                  </div>
                  {/* Mobile Match Score */}
                  <div className="lg:hidden flex items-center shrink-0">
                     <div className={`px-2 py-1 rounded border font-mono text-[10px] flex items-center gap-1 ${draft.intelligence.icpMatch > 90 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                      <Target className="w-3 h-3" /> {draft.intelligence.icpMatch}%
                     </div>
                  </div>
               </div>

               {/* Company/Role Info */}
               <div className="lg:col-span-3 flex flex-col justify-center min-w-0 pl-2 lg:pl-0">
                  <p className="text-white/80 font-serif text-sm truncate flex items-center gap-1.5"><Building className="w-3 h-3 text-white/30 shrink-0"/> <span className="truncate">{draft.prospect.company}</span></p>
                  <p className="font-mono text-[10px] text-accent mt-1 uppercase tracking-widest truncate">{draft.prospect.role}</p>
               </div>

               {/* Angle Preview */}
               <div className="lg:col-span-4 flex flex-col justify-center min-w-0 pl-2 lg:pl-0">
                  <p className="text-white/90 text-xs truncate font-medium flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-accent/50 shrink-0"/> <span className="truncate">{draft.draft.subject}</span></p>
                  <p className="text-white/40 text-[10px] truncate mt-1 font-sans">{draft.intelligence.angle}</p>
               </div>

               {/* Metrics (Desktop only) */}
               <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
                  <div className={`px-2 py-1 rounded inline-flex border font-mono text-[10px] items-center gap-1 ${draft.intelligence.icpMatch > 90 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                    <Target className="w-3 h-3" /> {draft.intelligence.icpMatch}%
                  </div>
               </div>

               {/* Action Button (Desktop only) */}
               <div className="hidden lg:flex lg:col-span-1 items-center justify-end px-2">
                 <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-all shrink-0">
                   <ChevronRight className="w-4 h-4" />
                 </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------
  // Render Detail View
  // -------------------------
  
  if (!currentItem) return null;

  return (
    <div className="h-full flex flex-col pt-2 pb-6 animate-in slide-in-from-right-8 duration-500">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedDraftId(null)}
            className="p-2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all mr-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl text-white font-serif tracking-tight flex items-center gap-3">
              Revisión Ejecutiva <span className="text-white/20">/</span> {currentItem.id}
            </h1>
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
              Lead: {currentItem.prospect.name} — {draftQueue.length} leads en la cola
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center gap-2 bg-[#111110] border border-white/10 rounded-lg p-1">
          <button 
            disabled={currentIndex === 0}
            onClick={() => handleSelectDraft(draftQueue[currentIndex - 1]?.id)}
            className="p-2 text-white/30 hover:text-white/80 hover:bg-white/5 rounded transition-colors disabled:opacity-20"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-white/50 px-2">{currentIndex + 1} / {draftQueue.length}</span>
          <button 
            disabled={currentIndex === draftQueue.length - 1}
            onClick={() => handleSelectDraft(draftQueue[currentIndex + 1]?.id)}
            className="p-2 text-white/30 hover:text-white/80 hover:bg-white/5 rounded transition-colors disabled:opacity-20"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {actionStatus !== "idle" ? (
        <div className="flex-1 flex flex-col items-center justify-center bg-[#111110]/50 backdrop-blur-xl rounded-2xl border border-white/5 animate-in zoom-in-95 duration-300">
           <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-2xl ${actionStatus === 'approved' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
              {actionStatus === 'approved' ? <Send className="w-8 h-8 ml-1" /> : <Trash2 className="w-8 h-8" />}
           </div>
           <p className="text-3xl font-serif text-white">
             {actionStatus === 'approved' ? 'Aprobado y Enviado' : 'Borrador Descartado'}
           </p>
           <p className="font-mono text-xs text-white/40 mt-4 uppercase tracking-widest flex items-center gap-2">
             <div className="w-3 h-3 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
             Cargando siguiente prospecto...
           </p>
        </div>
      ) : (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
          
          {/* Left Column: Context & Intelligence (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2 pb-4">
            
            {/* Lead Profile Card */}
            <div className="bg-[#111110]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden">
               <div className="flex items-start justify-between mb-4">
                 <div className="flex flex-col">
                   <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">ID Prospecto</span>
                   <span className="font-mono text-xs text-white/80 bg-white/5 border border-white/10 px-2 py-1 rounded">{currentItem.id}</span>
                 </div>
                 <div className="flex flex-col items-end gap-2">
                   <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] px-2 py-1 rounded flex items-center gap-1 uppercase tracking-widest">
                      <Target className="w-3 h-3" /> Match: {currentItem.intelligence.icpMatch}%
                   </div>
                   {currentItem.priority === 'Alta' && (
                     <div className="bg-accent/10 border border-accent/20 text-accent font-mono text-[9px] px-2 py-1 rounded flex items-center gap-1 uppercase tracking-widest shadow-[0_0_10px_rgba(181,164,125,0.2)]">
                        Prioridad Top
                     </div>
                   )}
                 </div>
               </div>
               
               <h2 className="text-2xl font-serif text-white mb-1">{currentItem.prospect.name}</h2>
               <p className="font-mono text-xs text-accent uppercase tracking-widest mb-6">{currentItem.prospect.role} @ {currentItem.prospect.company}</p>
               
               <div className="space-y-3 pt-4 border-t border-white/5">
                 <div className="flex items-center gap-3 text-sm text-white/60">
                   <Building className="w-4 h-4 shrink-0 text-white/40" /> <span className="truncate hover:text-white transition-colors cursor-pointer">{currentItem.prospect.company}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-white/60">
                   <MapPin className="w-4 h-4 shrink-0 text-white/40" /> <span className="truncate">{currentItem.prospect.location}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-white/60">
                   <Linkedin className="w-4 h-4 shrink-0 text-blue-400/80" /> 
                   <a href="#" className="truncate hover:text-white transition-colors hover:underline">Perfil de LinkedIn ↗</a>
                 </div>
               </div>
            </div>

            {/* AI Reasoning Context */}
            <div className="bg-accent/[0.03] rounded-2xl border border-accent/10 p-6 flex-1 shadow-lg relative overflow-hidden flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full pointer-events-none" />
               
               <div className="flex items-center justify-between mb-6 border-b border-accent/10 pb-4">
                 <div className="flex items-center gap-2">
                   <Sparkles className="w-4 h-4 text-accent" />
                   <h3 className="font-serif text-white text-lg">Estrategia IA</h3>
                 </div>
                 <span className="font-mono text-[9px] uppercase text-white/30 border border-white/10 px-2 py-0.5 rounded">Razón de Contacto</span>
               </div>
               
               <div className="space-y-6 flex-1 relative z-10">
                 <div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-accent/80 mb-2">Evento Detonante (Trigger)</p>
                   <div className="flex items-start gap-2">
                     <div className="w-1 h-full bg-white/10 shrink-0 rounded" />
                     <p className="text-sm text-white/80 leading-relaxed font-sans mt-[-2px]">
                       {currentItem.intelligence.recentNews}
                     </p>
                   </div>
                 </div>
                 <div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-accent/80 mb-2">Hipótesis de Dolor</p>
                   <div className="flex items-start gap-2">
                     <div className="w-1 h-full bg-white/10 shrink-0 rounded" />
                     <p className="text-sm text-white/80 leading-relaxed font-sans mt-[-2px]">
                       {currentItem.intelligence.painPoint}
                     </p>
                   </div>
                 </div>
                 <div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-accent/80 mb-2">Ángulo de Acercamiento</p>
                   <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                     <p className="text-sm text-white/90 leading-relaxed font-serif">
                       "{currentItem.intelligence.angle}"
                     </p>
                   </div>
                 </div>
               </div>
               
               <div className="mt-6 pt-4 flex items-center justify-between text-xs font-mono text-accent/60">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Fuentes verificadas</span>
                  <span>Confianza IA: {currentItem.draft.confidence}</span>
               </div>
            </div>

          </div>

          {/* Right Column: Email Editor & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full overflow-hidden">
            
            {/* Editor Container */}
            <div className="bg-[#111110]/95 backdrop-blur-xl rounded-t-3xl border border-white/5 flex-1 flex flex-col overflow-hidden shadow-2xl relative">
              
              {/* Fake Email Client Header */}
              <div className="bg-white/5 border-b border-white/5 p-5 shrink-0">
                 <div className="flex items-center gap-4 mb-3 text-sm">
                   <span className="font-mono text-xs text-white/30 uppercase w-12 text-right">Para:</span>
                   <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/90 font-mono text-xs flex items-center gap-2">
                     {currentItem.prospect.name} <span className="text-white/30">({currentItem.prospect.company})</span> <X className="w-3 h-3 text-white/40 cursor-pointer hover:text-white ml-2" />
                   </div>
                 </div>
                 <div className="flex items-start gap-4 text-sm mt-4">
                   <span className="font-mono text-xs text-white/30 uppercase w-12 text-right pt-1">Asunto:</span>
                   <div className="flex-1">
                     {isEditing ? (
                       <input 
                         type="text" 
                         defaultValue={currentItem.draft.subject}
                         className="w-full bg-[#0A0A09] border border-white/10 rounded outline-none px-3 py-2 text-white/90 font-sans focus:border-accent/50"
                       />
                     ) : (
                       <span className="text-white/90 font-medium text-lg leading-snug block">{currentItem.draft.subject}</span>
                     )}
                   </div>
                 </div>
              </div>

              {/* Editor Body */}
              <div className="flex-1 p-6 lg:p-10 overflow-y-auto custom-scrollbar relative group">
                {isEditing ? (
                  <textarea 
                    value={editedBody}
                    onChange={(e) => setEditedBody(e.target.value)}
                    className="w-full h-full bg-[#0A0A09]/50 p-4 rounded-xl border border-white/10 resize-none outline-none text-white/80 font-sans leading-relaxed text-base focus:border-accent/40"
                    autoFocus
                  />
                ) : (
                  <div className="text-white/80 font-sans leading-relaxed text-[15px] lg:text-[17px] whitespace-pre-wrap max-w-2xl">
                    {editedBody}
                  </div>
                )}
                
                {/* Float Actions */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {!isEditing && (
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="p-3.5 bg-[#111110] border border-white/10 rounded-xl text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-xl flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest"
                      title="Editar manualmente"
                    >
                      <Edit3 className="w-4 h-4" /> Editar
                    </button>
                  )}
                  {isEditing && (
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="p-3.5 bg-accent/20 border border-accent/30 rounded-xl text-accent hover:border-accent hover:bg-accent/30 transition-all shadow-xl flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest"
                    >
                      Guardar
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Action Bar (Sticky Focus) */}
            <div className="bg-[#0A0A09] border border-white/10 border-t-0 rounded-b-3xl p-5 shrink-0 flex items-center justify-between gap-4 z-20">
              <button 
                onClick={handleDiscard}
                className="px-6 py-4 rounded-xl text-white/50 font-mono text-xs uppercase tracking-widest hover:text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Descartar</span>
              </button>
              
              <div className="flex items-center gap-4">
                <button 
                  className="px-6 py-4 rounded-xl border border-white/10 text-white/60 font-mono text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Reescribir IA
                </button>
                <button 
                  onClick={handleApprove}
                  className="px-10 py-4 rounded-xl bg-accent text-[#0A0A09] font-mono text-base font-bold uppercase tracking-widest hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(181,164,125,0.3)] hover:shadow-[0_0_30px_rgba(181,164,125,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  Confirmar <Send className="w-5 h-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}
