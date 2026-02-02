"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const trustedLogos = [
  "GitStart",
  "Tempest House",
  "ICSS",
  "Le Roma",
  "Bandhu",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lux-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 hero-grid" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6">
            <Badge variant="glow" className="mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Digital Transformation Partners
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-white">
              Technology
            </span>
            <br />
            <span className="gradient-text">
              for growth
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl sm:text-2xl text-zinc-400 max-w-2xl">
            Realize your vision with powerful technology solutions grounded in solid business
            wisdom. We breathe connectivity and vitality into your digital ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Schedule a Discovery Meeting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View Our Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <p className="text-sm text-zinc-500 mb-6">
              Trusted by innovative businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Company logos placeholder - you can replace with actual logos */}
              {trustedLogos.map((company) => (
                <div
                  key={company}
                  className="text-zinc-500 font-semibold text-sm tracking-wider"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

