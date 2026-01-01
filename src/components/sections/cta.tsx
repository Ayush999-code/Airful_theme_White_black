"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden lux-section"
      data-lux-reveal
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b1e1d] to-black" />

      {/* Gradient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#227774]/15 rounded-full blur-3xl"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#227774]/10 rounded-full blur-3xl"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm lux-surface"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#227774]/10 via-transparent to-[#0b1e1d]/20" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              data-lux-parallax="8"
            >
              Ready for{" "}
              <span className="gradient-text">Transformation</span>?
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10" data-lux-parallax="5">
              Join the innovative businesses and entrepreneurs who've discovered
              the power of technology with heart. Let's build something
              remarkable together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="mailto:hello@airful.io">
                <Button variant="outline" size="lg" className="group">
                  <Mail className="w-4 h-4" />
                  hello@airful.io
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
