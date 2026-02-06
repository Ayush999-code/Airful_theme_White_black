"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type CaseStudyCard = {
  title: string;
  href: string;
  thumbnail?: string;
  _id?: string;
};

interface CaseStudiesProps {
  caseStudies: CaseStudyCard[];
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
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

        {/* Case Studies Grid - 4 cards in one row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study._id ?? study.href}
              href={study.href}
              className="group block h-full rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 lux-card overflow-hidden"
            >
              {/* Image */}
              {study.thumbnail && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={study.thumbnail}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#227774] transition-colors">
                  {study.title}
                </h3>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#227774] group-hover:text-[#227774]/80 transition-colors">
                  Read Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
