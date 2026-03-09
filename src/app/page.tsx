"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { ValueProps } from "./components/ValueProps";
import { Process } from "./components/Process";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Audience } from "./components/Audience";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <ValueProps />
        <Process />
        <Testimonials />
        <Features />
        <Audience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
