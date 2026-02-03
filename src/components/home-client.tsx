"use client";

import { CaseStudyCard, CaseStudies } from "@/components/sections/case-studies";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Outcomes } from "@/components/sections/outcomes";
import { Testimonials } from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import { usePathname } from "next/navigation";

interface HomeClientProps {
  caseStudies: CaseStudyCard[];
}

export function HomeClient({ caseStudies }: HomeClientProps) {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      <Hero />
      <Services />
      <Process />
      <CaseStudies caseStudies={caseStudies} />
      <Outcomes />
      <Testimonials />
      <CTA />
    </div>
  );
}
