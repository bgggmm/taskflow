"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}