"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbStrip } from "@/components/layout/breadcrumb-strip";
import { getBlogPostBySlug } from "@/data/blog-posts";
import { getServiceBySlug } from "@/data/services";
import { getJobBySlug } from "@/data/jobs";
import { caseStudiesData } from "@/data/case-studies";

const staticBreadcrumbs: Record<string, string[]> = {
  "/about": ["Home", "About"],
  "/blog": ["Home", "Blog"],
  "/careers": ["Home", "Careers"],
  "/case-studies": ["Home", "Case Studies"],
  "/contact": ["Home", "Contact"],
  "/cookies-policy": ["Home", "Cookies Policy"],
  "/privacy-policy": ["Home", "Privacy Policy"],
  "/services": ["Home", "Services"],
  "/testimonials": ["Home", "Testimonials"],
  "/terms-and-conditions": ["Home", "Terms and Conditions"],
};

export function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  if (staticBreadcrumbs[pathname]) {
    return <BreadcrumbStrip items={staticBreadcrumbs[pathname]} />;
  }

  if (pathname.startsWith("/blog/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const post = slug ? getBlogPostBySlug(slug) : null;
    const title = post?.title ?? "Blog";
    return <BreadcrumbStrip items={["Home", "Blog", title]} />;
  }

  if (pathname.startsWith("/services/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const service = slug ? getServiceBySlug(slug) : null;
    const title = service?.title ?? "Services";
    return <BreadcrumbStrip items={["Home", "Services", title]} />;
  }

  if (pathname.startsWith("/careers/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const job = slug ? getJobBySlug(slug) : null;
    const title = job?.title ?? "Careers";
    return <BreadcrumbStrip items={["Home", "Careers", title]} />;
  }

  if (pathname.startsWith("/case-studies/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const caseStudy = slug ? caseStudiesData[slug] : null;
    const title = caseStudy?.title ?? "Case Studies";
    return <BreadcrumbStrip items={["Home", "Case Studies", title]} />;
  }

  return null;
}
