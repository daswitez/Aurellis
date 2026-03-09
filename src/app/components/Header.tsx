import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-in slide-in-from-top-4 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-xl border-b border-border/30 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="px-8 md:px-16 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-serif text-foreground tracking-tight transition-transform duration-300 group-hover:scale-105">
                Aurellis
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-foreground">
            <a href="#" className="relative group py-2">
              <span className="transition-colors group-hover:text-accent">Características</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative group py-2">
              <span className="transition-colors group-hover:text-accent">Sistema</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative group py-2">
              <span className="transition-colors group-hover:text-accent">Casillas</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-5">
            <button className="hidden sm:block text-foreground hover:text-accent transition-colors font-medium">
              Acceder
            </button>
            <Button size="default">
              Comenzar ahora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}