import { BarChart3, TrendingUp, Users, CalendarCheck, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";

export default function PlatformDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl text-white font-serif tracking-tight mb-2">Resumen Ejecutivo</h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
             <span>Ciclo Activo: Q3 - Sector Diseño & Branding</span>
             <span className="w-1 h-1 bg-white/20 rounded-full" />
             <span className="text-emerald-400">Salud de Campaña: Excelente</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
            Descargar Reporte
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent/20 transition-colors shadow-[0_0_15px_rgba(181,164,125,0.1)]">
            Nueva Campaña
          </button>
        </div>
      </div>

      {/* Primary Conversion Funnel (Top Level Metrics) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FunnelMetric 
          label="Total Prospectados" 
          value="4,291" 
          subtext="Contactos alcanzados" 
          trend="+12%" 
          trendUp={true} 
        />
        <div className="hidden md:flex items-center justify-center -mx-4 z-10">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <FunnelMetric 
          label="Tasa de Apertura" 
          value="68.4%" 
          subtext="Promedio industria: 21%" 
          trend="+5.2%" 
          trendUp={true} 
        />
        <div className="hidden md:flex items-center justify-center -mx-4 z-10">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <FunnelMetric 
          label="Tasa de Respuesta" 
          value="24.1%" 
          subtext="Prospectos interesados" 
          trend="+3.1%" 
          trendUp={true} 
          highlight={true}
        />
        <div className="hidden md:flex items-center justify-center -mx-4 z-10">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <FunnelMetric 
          label="Reuniones Agendadas" 
          value="48" 
          subtext="Para los próximos 14 días" 
          trend="-2" 
          trendUp={false} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Area: Conversion Over Time */}
        <div className="lg:col-span-2 bg-[#111110]/50 backdrop-blur-xl rounded-3xl border border-white/5 p-8 relative overflow-hidden flex flex-col">
           <div className="flex justify-between items-start mb-8">
             <div>
               <h3 className="text-lg font-serif text-white mb-1">Crecimiento de Pipeline</h3>
               <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Leads Calificados vs Tiempo</p>
             </div>
             <div className="flex gap-2">
               <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">30D</span>
               <span className="px-3 py-1 rounded bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent">90D</span>
               <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">YTD</span>
             </div>
           </div>
           
           {/* Abstract visualization representing a chart */}
           <div className="flex-1 relative min-h-[250px] w-full flex items-end justify-between px-4">
              {/* Background grid lines */}
              <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between pointer-events-none opacity-20">
                 <div className="border-t border-white/10 w-full" />
                 <div className="border-t border-white/10 w-full" />
                 <div className="border-t border-white/10 w-full" />
                 <div className="border-t border-white/10 w-full" />
              </div>
              
              {/* Fake Bar Chart */}
              {[40, 55, 45, 70, 65, 85, 95, 80, 110, 100, 130, 145].map((h, i) => (
                <div key={i} className="relative group w-[5%] mx-1">
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-accent/20 to-accent/60 rounded-t-sm transition-all duration-500 group-hover:from-accent/40 group-hover:to-accent"
                    style={{ height: `${h}%` }}
                  />
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0A0A09] border border-white/10 text-white font-mono text-[10px] px-2 py-1 rounded transition-opacity whitespace-nowrap z-10">
                    Semana {i+1}: {Math.floor(h * 1.5)} leads
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Quick Actions & Status */}
        <div className="space-y-6">
           {/* Action Center Widget */}
           <div className="bg-accent/5 rounded-3xl border border-accent/10 p-6 relative overflow-hidden group hover:bg-accent/10 transition-colors cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-accent/20 transition-colors" />
             
             <div className="flex items-center justify-between mb-4 relative z-10">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                   <Users className="w-5 h-5 text-accent" />
                 </div>
                 <div>
                   <h3 className="text-white font-serif text-lg">Centro de Acción</h3>
                   <div className="flex items-center gap-2 mt-1">
                     <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                     <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest">Pendiente</span>
                   </div>
                 </div>
               </div>
             </div>
             
             <p className="text-3xl font-serif text-white mb-2 relative z-10">12</p>
             <p className="text-sm text-white/50 mb-6 relative z-10">Borradores generados por IA esperando tu revisión.</p>
             
             <button className="w-full py-2.5 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors relative z-10">
               Revisar ahora
             </button>
           </div>
           
           {/* Upcoming Meetings Widget */}
           <div className="bg-[#111110]/50 backdrop-blur-xl rounded-3xl border border-white/5 p-6 h-full cursor-pointer hover:border-white/10 transition-colors">
             <div className="flex items-center gap-3 mb-6">
               <CalendarCheck className="w-5 h-5 text-white/40" />
               <h3 className="text-white font-serif text-lg">Próximas Reuniones</h3>
             </div>
             
             <div className="space-y-4">
                <MeetingItem time="10:00 AM" name="Alejandro V." company="Fintech Solutions" />
                <MeetingItem time="02:30 PM" name="Sarah M." company="Creative Agency" />
                <MeetingItem time="Mañana" name="Director of Marketing" company="Enterprise Corp" />
             </div>
             
             <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-white/40 uppercase tracking-widest text-center">
               Sincronizado con Google Calendar
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}

// Sub-components

function FunnelMetric({ label, value, subtext, trend, trendUp, highlight = false }: any) {
  return (
    <div className={`p-6 rounded-2xl border ${highlight ? 'bg-accent/5 border-accent/20' : 'bg-[#111110]/50 border-white/5'} flex flex-col justify-center relative overflow-hidden`}>
      {highlight && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-[30px] rounded-full pointer-events-none" />
      )}
      <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${highlight ? 'text-accent' : 'text-white/40'}`}>
        {label}
      </p>
      <div className="flex items-end gap-3 mb-1">
        <h3 className="text-4xl lg:text-5xl font-serif text-white">{value}</h3>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className={`flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded ${trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trend}
        </div>
        <p className="text-[10px] text-white/30 truncate">{subtext}</p>
      </div>
    </div>
  );
}

function MeetingItem({ time, name, company }: any) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-16 text-right shrink-0">
        <span className="font-mono text-[10px] text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-wider">{time}</span>
      </div>
      <div className="w-1 h-8 bg-white/10 rounded-full group-hover:bg-accent/50 transition-colors" />
      <div>
        <p className="text-sm text-white/90">{name}</p>
        <p className="font-mono text-[9px] text-white/40">{company}</p>
      </div>
    </div>
  );
}
