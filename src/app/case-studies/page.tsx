"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Alistair Langer",
    subtitle: "From Email Migration to Full-Spectrum Business Partnership",
    description:
      "Transforming a portfolio entrepreneur's fragmented systems into a cohesive operational ecosystem through email migration, documentation systems, CRM implementation, and ongoing podcast and website management.",
    href: "/case-studies/alistair-langer",
    tags: ["CRM", "Integration", "Automation"],
    results: ["Streamlined email ecosystem", "Custom Attio CRM", "Ongoing support"],
  },
  {
    title: "Tempest House",
    subtitle: "Strategic Growth Partnership",
    description:
      "Transforming Tempest House through comprehensive marketing strategies, operational support, and talent acquisition services that led to increased client satisfaction, revenue growth, and a lasting strategic partnership.",
    href: "/case-studies/tempest-house",
    tags: ["Marketing", "Growth", "Strategy"],
    results: ["Revenue growth", "Client satisfaction", "Strategic partnership"],
  },
  {
    title: "GitStart",
    subtitle: "Scaling a Y Combinator-Backed Developer Platform",
    description:
      "Transforming GitStart's growth on two critical fronts: scaling customer acquisition through targeted outreach campaigns and expanding their global developer community through sophisticated recruitment operations.",
    href: "/case-studies/gitstart",
    tags: ["SaaS", "Growth", "Community"],
    results: ["Increased demo bookings", "Global expansion", "Community growth"],
  },
  {
    title: "Le Roma Gardenia",
    subtitle: "From Vision to Luxury Destination",
    description:
      "Transforming a single property into a renowned hospitality brand across South India with comprehensive branding, web development, and custom operational systems.",
    href: "/case-studies/le-roma-gardenia",
    tags: ["Branding", "Web Development", "Hospitality"],
    results: ["Luxury brand identity", "Custom booking system", "Wedding market pivot"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="glow" className="mb-6">
              Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transformation in{" "}
              <span className="gradient-text">Action</span>
            </h1>
            <p className="text-xl text-zinc-400">
              See how our tailored approach creates remarkable results for
              businesses like yours. Each partnership tells a story of challenges
              overcome and possibilities realized.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={study.href}
                  className="group block h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-zinc-500 bg-zinc-800/50 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-sm text-zinc-500 mb-4">{study.subtitle}</p>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                      Key Results
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((result) => (
                        <span
                          key={result}
                          className="px-3 py-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    Read Full Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
