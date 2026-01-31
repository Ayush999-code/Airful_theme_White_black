"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Target, Users, Zap } from "lucide-react";
import { MentalHealthHero } from "@/components/sections/mental-health-hero";


const values = [
  {
    icon: Heart,
    title: "Technology with Heart",
    description:
      "We believe technology should serve the human spirit of your business, not complicate it.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We're obsessed with delivering measurable results that matter: streamlined operations, enhanced experiences, and sustainable growth.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "Your success isn't just a metric for us—it's the fundamental reason we exist. We grow when you grow.",
  },
  {
    icon: Zap,
    title: "Innovation Forward",
    description:
      "We stay at the cutting edge of technology to bring you solutions that don't just solve today's problems but prepare you for tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Mental Health Hero Section */}
      <MentalHealthHero />

      {/* Marquee Strip */}
      <section className="relative overflow-hidden border-y border-zinc-900/80 bg-black">
        <div className="marquee py-4">
          <div className="marquee-track">
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-white">
              Transformation
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8fe6df]">
              Leadership
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-white">
              Consulting
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8fe6df]">
              Systems
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-white">
              Innovation
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8fe6df]">
              Marketing
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-white">
              Transformation
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8fe6df]">
              Leadership
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-white">
              Consulting
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8fe6df]">
              Systems
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-white">
              Innovation
            </span>
            <span className="mx-6 text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8fe6df]">
              Marketing
            </span>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-24 relative">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="glow" className="mb-4">
              Our Mission & Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Build systems that create clarity, confidence, and momentum
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              We align strategy, operations, and execution so every team knows
              what matters, what moves, and what scales.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-xl mx-auto lg:mx-0"
            >
              <div className="space-y-6">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#8fe6df]/10 border border-[#8fe6df]/25 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-[#8fe6df]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-zinc-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-[#8fe6df]/15 via-transparent to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-[#0b1e1d] via-black to-black p-10 shadow-[0_30px_90px_rgba(2,6,23,0.6)]">
                <p className="text-2xl font-semibold text-white leading-relaxed mb-8">
                  "To create magic, one needs four things: purity of intent,
                  level of awareness, focus of will, and quality of character."
                </p>
                <p className="text-sm font-semibold text-[#8fe6df]">
                  Jiddu Krishnamurti
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Philosophy / Approach Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4">
                Our Approach
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Strategic thinking with operational rigor
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We diagnose root causes, design systems that fit your reality,
                and build execution loops that keep teams aligned and accountable.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                The result is a digital foundation that turns complexity into
                clarity—so your leadership can move faster with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-[#0b1e1d] via-black to-black p-8">
                <div className="grid gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
                    <p className="text-white font-semibold mb-2">How we think</p>
                    <p className="text-sm text-zinc-300">
                      Systems-first, outcome-driven. Every decision ties to
                      measurable business impact.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
                    <p className="text-white font-semibold mb-2">How we work</p>
                    <p className="text-sm text-zinc-300">
                      Collaborative, transparent, and fast—without sacrificing
                      quality or precision.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
                    <p className="text-white font-semibold mb-2">Why it matters</p>
                    <p className="text-sm text-zinc-300">
                      Teams move as one. Customers feel the difference. Growth
                      becomes repeatable.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Leadership
            </Badge>
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 overflow-hidden">
              <img
                src="/ak.jpg"
                alt="Avishek Kedia"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Avishek Kedia</h2>
            <p className="text-zinc-500 mb-6">Founder & CEO</p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              As your partner and advisor, we commit to cutting through the digital
              noise to implement solutions that address your unique challenges with
              precision and care. Your success isn&apos;t just a metric for us—it&apos;s the
              fundamental reason we exist.
            </p>
          </div>
        </Container>
      </section>

    </>
  );
}

