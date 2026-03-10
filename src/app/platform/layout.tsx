import { ReactNode } from "react";
import { Sidebar } from "./components/Sidebar";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-[#0A0A09] min-h-screen overflow-hidden text-[#F6F3EE] selection:bg-accent/30 selection:text-white">
      {/* Ambient background glow for the whole platform */}
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* 
        Tech Grid overlay inside the platform 
        Extremely subtle to suggest the OSINT engine 
      */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Sidebar />
      
      <main className="flex-1 relative z-10 overflow-y-auto h-screen custom-scrollbar">
        {/* Top Spacer / Command Menu Trigger Hint could go here */}
        <div className="h-20 flex items-center justify-end px-12 border-b border-white/5 sticky top-0 bg-[#0A0A09]/80 backdrop-blur-xl z-40">
           <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-lg bg-white/5 text-white/30 cursor-text hover:bg-white/10 transition-colors">
              <span className="text-sm">Buscar o comandar...</span>
              <div className="flex items-center gap-1 font-mono text-[10px]">
                <kbd className="px-1.5 py-0.5 rounded border border-white/20 bg-white/5">⌘</kbd>
                <kbd className="px-1.5 py-0.5 rounded border border-white/20 bg-white/5">K</kbd>
              </div>
           </div>
        </div>

        <div className="p-8 lg:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Basic Command Menu setup for later */}
    </div>
  );
}
