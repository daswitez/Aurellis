"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radar, Inbox, LayoutDashboard, FileText, Settings, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Radar, label: "Ver Ejecutivo", href: "/platform" },
  { icon: Inbox, label: "Centro de Acción", href: "/platform/action-center" },
  { icon: LayoutDashboard, label: "Pipeline", href: "/platform/pipeline" },
  { icon: FileText, label: "Documentos", href: "/platform/documents" },
];

const bottomNavItems = [
  { icon: Settings, label: "Ajustes de IA", href: "/platform/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className={`relative h-screen bg-[#0A0A09] border-r border-white/5 flex flex-col transition-all duration-300 z-50 ${isExpanded ? 'w-64' : 'w-20'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center gap-3 w-full">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(181,164,125,0.1)]">
            <span className="font-serif text-accent text-lg leading-none pt-0.5">A</span>
          </div>
          <span className={`font-serif text-xl tracking-tight text-white transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
            Aurellis
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive 
                  ? 'bg-white/5 text-accent' 
                  : 'text-white/40 hover:text-white/90 hover:bg-white/[0.02]'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r-full" />
              )}
              <item.icon className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <span className={`font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-white/5">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive 
                  ? 'bg-white/5 text-accent' 
                  : 'text-white/40 hover:text-white/90 hover:bg-white/[0.02]'
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0 transition-transform group-hover:rotate-45" strokeWidth={1.5} />
              <span className={`font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
        
        {/* User Profile Mini */}
        <div className="mt-4 flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-white/10 shrink-0 border border-white/10" />
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
            <p className="text-sm text-white/90 font-medium whitespace-nowrap">D. Suarez</p>
            <p className="text-[10px] text-accent font-mono uppercase tracking-widest whitespace-nowrap">Partner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
