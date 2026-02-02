"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Alistair Langer",
    subtitle: "From Email Migration to Full-Spectrum Business Partnership",
    description:
      "Transforming a portfolio entrepreneur's fragmented systems into a cohesive operational ecosystem through email migration, documentation systems, CRM implementation, and ongoing podcast and website management.",
    href: "/case-studies/alistair-langer",
    tags: ["CRM", "Integration", "Automation"],
  },
  {
    title: "GitStart",
    subtitle: "Scaling a Y Combinator-Backed Developer Platform",
    description:
      "Transforming GitStart's growth on two critical fronts: scaling customer acquisition through targeted outreach campaigns and expanding their global developer community.",
    href: "/case-studies/gitstart",
    tags: ["SaaS", "Growth", "Community"],
  },
  {
    title: "Le Roma Gardenia",
    subtitle: "From Vision to Luxury Destination",
    description:
      "Transforming a single property into a renowned hospitality brand across South India with comprehensive branding, web development, and custom operational systems.",
    href: "/case-studies/le-roma-gardenia",
    tags: ["Branding", "Web Development", "Hospitality"],
  },
];

export function CaseStudies() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden lux-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b1e1d] to-black" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <Badge variant="outline" className="mb-4">
              Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Transformation in <span className="gradient-text">Action</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-lg max-w-xl">
              See how our tailored approach creates remarkable results for businesses like yours.
            </p>
          </div>
          <Link href="/case-studies">
            <Button variant="outline" className="group">
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group block h-full p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 lux-card"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium text-zinc-500 bg-zinc-800/50 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#8fe6df] transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-4">{study.subtitle}</p>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {study.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-[#8fe6df] group-hover:text-[#b6f1ec] transition-colors">
                Read Case Study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
