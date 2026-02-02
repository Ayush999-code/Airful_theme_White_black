"use client";

import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Outcomes } from "@/components/sections/outcomes";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <Outcomes />
      <Testimonials />
      <CTA />
    </div>
  );
}
