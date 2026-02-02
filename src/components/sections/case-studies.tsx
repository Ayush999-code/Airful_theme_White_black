"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { isConfigured } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";

type CaseStudyCard = {
  title: string;
  href: string;
  thumbnail?: string;
  _id?: string;
};

// Fallback static data - uses slugs matching Sanity format
const staticCaseStudies: CaseStudyCard[] = [
  {
    title: "Alistair Langer",
    href: "/case-studies/alistair-langer",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    title: "GitStart",
    href: "/case-studies/gitstart",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    title: "Le Roma Gardenia",
    href: "/case-studies/le-roma-gardenia",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  },
  {
    title: "Tempest House",
    href: "/case-studies/tempest-house",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
];

type SanityCaseStudy = {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  shortDescription?: string;
  serviceCategory?: string;
  technologiesUsed?: string[];
};

const sanityQuery = `*[_type == "caseStudy"] | order(_createdAt desc)[0...4] {
  _id,
  title,
  slug,
  thumbnail
}`;

export function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyCard[]>(staticCaseStudies);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaseStudies() {
      if (!isConfigured()) {
        setLoading(false);
        return;
      }

      try {
        const data = await client.fetch<SanityCaseStudy[]>(sanityQuery);
        if (data && data.length > 0) {
          // Map Sanity data to UI format
          const mappedData = data
            .map((study) => {
              const slugCurrent = study.slug?.current;
              if (!slugCurrent) return null;
              return {
                title: study.title,
                href: `/case-studies/${slugCurrent}`,
                thumbnail: study.thumbnail ? urlFor(study.thumbnail).width(800).height(600).fit("crop").url() : undefined,
                _id: study._id,
              };
            })
            .filter(Boolean) as CaseStudyCard[];
          setCaseStudies(mappedData);
        }
      } catch (error) {
        console.error("Failed to fetch case studies from Sanity:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudies();
  }, []);

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
          {caseStudies.map((study, index) => (
            <Link
              key={study._id ?? (study.href + index)}
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
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#8fe6df] transition-colors">
                  {study.title}
                </h3>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#8fe6df] group-hover:text-[#b6f1ec] transition-colors">
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
