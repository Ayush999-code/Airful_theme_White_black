"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden lux-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b1e1d] to-black" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#227774]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#227774]/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ready for <span className="gradient-text">Transformation</span>?
            </h2>

            <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10">
              Join the innovative businesses and entrepreneurs who've discovered
              the power of technology with heart. Let's build something
              remarkable together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Contact CTA */}
              <Button
                variant="primary"
                size="lg"
                className="group inline-flex items-center gap-2"
                onClick={() => router.push("/contact")}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Email CTA */}
              <Button
                variant="outline"
                size="lg"
                className="group inline-flex items-center gap-2"
                onClick={() => (window.location.href = "mailto:hello@airful.io")}
              >
                <Mail className="w-4 h-4" />
                hello@airful.io
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

