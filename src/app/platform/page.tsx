import { BarChart3, TrendingUp, Users, CalendarCheck, ArrowUpRight, ArrowDownRight, Activity, Target, Zap, Clock, ShieldCheck, MailOpen, MessageSquare } from "lucide-react";

export default function PlatformDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl text-white font-serif tracking-tight mb-2">Resumen Ejecutivo</h1>
          <div className="flex flex-wrap items-center gap-3">
             <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Activo: Q3 - Sector Tech & Design</span>
             <span className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
             <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-emerald-400 font-mono text-[10px] uppercase tracking-widest">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
               Motor Operando
             </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/50 font-mono text-[10px] uppercase tracking-widest hover:bg-white/10 hover:text-white transition-colors">
            Generar Reporte
          </button>
          <button className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] uppercase tracking-widest hover:bg-accent/20 transition-colors shadow-[0_0_15px_rgba(181,164,125,0.1)] flex items-center gap-2">
            <Zap className="w-3 h-3" /> Nueva Campaña
          </button>
        </div>
      </div>

      {/* Primary Metrics Layer (Denser) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CompactMetricCard 
          icon={Target}
          label="Prospectos en Radar" 
          value="4,291" 
          trend="+12%" 
          trendUp={true}
          sparklineData={[30, 40, 35, 50, 49, 60, 70, 91]}
        />
        <CompactMetricCard 
          icon={MailOpen}
          label="Tasa de Aperura" 
          value="68.4%" 
          trend="+5.2%" 
          trendUp={true}
          sparklineData={[40, 45, 42, 55, 60, 58, 65, 68]}
        />
        <CompactMetricCard 
          icon={MessageSquare}
          label="En Conversación" 
          value="183" 
          trend="+18" 
          trendUp={true}
          sparklineData={[10, 15, 20, 25, 40, 60, 120, 183]}
          highlight
        />
        <CompactMetricCard 
          icon={CalendarCheck}
          label="Reuniones QA" 
          value="48" 
          trend="-2" 
          trendUp={false}
          sparklineData={[50, 52, 48, 55, 60, 50, 45, 48]}
        />
      </div>

      {/* Middle Layer: Pipeline Health & Action Center */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Pipeline Distribution (Replaces empty space from chart) */}
        <div className="lg:col-span-2 bg-[#111110]/80 backdrop-blur-xl rounded-3xl border border-white/5 p-6 flex flex-col">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-serif text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent" /> Salud del Pipeline
             </h3>
             <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Vista 30 días</span>
           </div>
           
           <div className="flex-1 flex flex-col justify-center space-y-6">
              <PipelineStage stage="Generación (Radar IA)" count="4,291" percentage={100} color="bg-white/10" />
              <PipelineStage stage="Contactados (Outreach)" count="1,204" percentage={28} color="bg-accent/40" />
              <PipelineStage stage="Interesados (Cálidos)" count="290" percentage={6.7} color="bg-accent/70" />
              <PipelineStage stage="Reunión Agendada (Meetings)" count="48" percentage={1.1} color="bg-accent" highlight />
           </div>
        </div>

        {/* Action Center Widget (Enhanced) */}
        <div className="bg-accent/5 rounded-3xl border border-accent/10 p-6 relative overflow-hidden group hover:bg-accent/10 transition-colors cursor-pointer flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-accent/20 transition-colors" />
          
          <div className="flex items-center justify-between mb-2 relative z-10">
              <h3 className="text-white font-serif text-lg">Centro de Acción</h3>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded font-mono text-[9px] text-red-400 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" /> Pendiente
              </div>
          </div>
          
          <div className="my-auto relative z-10 py-4">
            <p className="text-5xl font-serif text-white mb-1">12</p>
            <p className="text-sm text-white/50 leading-snug">Borradores hiper-personalizados esperando tu aprobación ejecutiva.</p>
          </div>
          
          <div className="space-y-2 mt-auto relative z-10">
             <div className="flex items-center justify-between text-xs font-mono text-white/40 border-t border-white/5 pt-3">
                <span>Tiempo est. de revsión:</span>
                <span className="text-white">~4 mins</span>
             </div>
            <button className="w-full mt-2 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
              Comenzar Revisión →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Layer: Insights & Meetings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         
         {/* Live Intelligence Feed (Miniature, compact) */}
         <div className="bg-[#111110]/50 backdrop-blur-xl rounded-2xl border border-white/5 p-6 h-[250px] flex flex-col">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
               <h3 className="text-base font-serif text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white/40" /> Inteligencia Reciente
               </h3>
               <span className="font-mono text-[9px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">Live</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
               <MiniLog time="Hace 2m" msg="Patrón de interés detectado en 'VPs de Diseño SaaS'." type="insight" />
               <MiniLog time="Hace 15m" msg="Borrador #402 ajustado según reciente ronda B de cliente." />
               <MiniLog time="Hace 1h" msg="Reunión con 'Studio M' re-confirmada vía email parser." type="success" />
               <MiniLog time="Hace 3h" msg="Nueva campaña de warm-up iniciada para buzón secundario." />
               <MiniLog time="Hace 5h" msg="Lead 'Carlos R.' promovido a Tier 1 por recurrencia de señales." type="insight" />
            </div>
         </div>

         {/* Upcoming Meetings (Compact grid style) */}
         <div className="bg-[#111110]/50 backdrop-blur-xl rounded-2xl border border-white/5 p-6 h-[250px] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5 shrink-0">
               <h3 className="text-base font-serif text-white flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-white/40" /> Próximos Compromisos
               </h3>
               <span className="font-mono text-[9px] text-white/40 uppercase">G-Calendar Sync</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
               <MeetingCard time="Hoy, 10:00 AM" name="Alejandro Vargas" company="Fintech Solutions" t="D" />
               <MeetingCard time="Hoy, 02:30 PM" name="Sarah Miller" company="Creative Agency" t="D" active />
               <MeetingCard time="Mañana, 09:15" name="Marcos T." company="Enterprise Corp" t="P" />
               <MeetingCard time="Mañana, 16:00" name="Elena Suárez" company="Studio M" t="D" />
            </div>
         </div>

      </div>

    </div>
  );
}

// ---- Sub-components ---- //

function CompactMetricCard({ icon: Icon, label, value, trend, trendUp, sparklineData, highlight = false }: any) {
  // Simple SVG sparkline generator
  const max = Math.max(...sparklineData);
  const min = Math.min(...sparklineData);
  const range = max - min || 1;
  const points = sparklineData.map((val: number, i: number) => {
    const x = (i / (sparklineData.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className={`p-5 rounded-2xl border ${highlight ? 'bg-accent/5 border-accent/20' : 'bg-[#111110]/50 border-white/5'} relative overflow-hidden group`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
           <Icon className={`w-4 h-4 ${highlight ? 'text-accent' : 'text-white/40'}`} />
           <p className={`font-mono text-[9px] uppercase tracking-widest ${highlight ? 'text-accent' : 'text-white/40'}`}>{label}</p>
        </div>
        <div className={`flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded ${trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          {trendUp ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
          {trend}
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-serif text-white">{value}</h3>
        <div className="w-16 h-8 relative opacity-50 group-hover:opacity-100 transition-opacity">
           <svg viewBox="0 0 100 100" className="w-full h-full preserve-aspect-ratio-none">
             <polyline 
               points={points} 
               fill="none" 
               stroke={highlight ? "#B5A47D" : "#ffffff"} 
               strokeWidth="4" 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               className="opacity-60"
             />
             <polygon 
               points={`0,100 ${points} 100,100`} 
               fill={`url(#grad-${label.replace(/\s/g, '')})`} 
             />
             <defs>
               <linearGradient id={`grad-${label.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor={highlight ? "#B5A47D" : "#ffffff"} stopOpacity="0.15" />
                 <stop offset="100%" stopColor={highlight ? "#B5A47D" : "#ffffff"} stopOpacity="0" />
               </linearGradient>
             </defs>
           </svg>
        </div>
      </div>
    </div>
  );
}

function PipelineStage({ stage, count, percentage, color, highlight = false }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
         <span className={`font-mono uppercase tracking-wider ${highlight ? 'text-accent font-medium' : 'text-white/60'}`}>{stage}</span>
         <span className="font-mono text-white flex gap-2">
            <span className="text-white/40">{percentage}%</span>
            <span>{count}</span>
         </span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
         <div className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function MiniLog({ time, msg, type = "normal" }: any) {
  let badgeColor = "bg-white/5 text-white/40";
  if (type === "insight") badgeColor = "bg-accent/10 text-accent";
  if (type === "success") badgeColor = "bg-emerald-500/10 text-emerald-400";

  return (
    <div className="flex gap-3 text-xs leading-relaxed items-start group">
      <div className={`shrink-0 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded mt-0.5 ${badgeColor}`}>
        {time}
      </div>
      <p className="text-white/60 font-mono text-[10.5px] group-hover:text-white/90 transition-colors">
        {msg}
      </p>
    </div>
  );
}

function MeetingCard({ time, name, company, t, active = false }: any) {
  return (
    <div className={`p-3 rounded-xl border flex flex-col justify-between ${active ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5'}`}>
      <div className="flex justify-between items-start mb-2">
         <span className="font-mono text-[9px] text-white/50 uppercase">{time}</span>
         <span className={`w-5 h-5 rounded-full flex items-center justify-center font-serif text-[10px] ${t === 'D' ? 'bg-accent/20 text-accent' : 'bg-blue-500/20 text-blue-400'}`}>
           {t}
         </span>
      </div>
      <div>
         <p className="text-sm text-white">{name}</p>
         <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider truncate">{company}</p>
      </div>
    </div>
  );
}
