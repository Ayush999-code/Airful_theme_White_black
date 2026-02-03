import { getCaseStudies } from "@/lib/case-studies-data";
import { CaseStudies } from "@/components/sections/case-studies";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Outcomes } from "@/components/sections/outcomes";
import { Testimonials } from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import { HomeClient } from "@/components/home-client";

export default async function Home() {
  // Fetch case studies data on the server
  const caseStudies = await getCaseStudies();

  return (
    <HomeClient caseStudies={caseStudies} />
  );
}
