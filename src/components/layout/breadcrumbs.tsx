"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbStrip } from "@/components/layout/breadcrumb-strip";
import { getBlogPostBySlug } from "@/data/blog-posts";
import { getServiceBySlug } from "@/data/services";
import { getJobBySlug } from "@/data/jobs";
import { caseStudiesData } from "@/data/case-studies";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const staticBreadcrumbs: Record<string, BreadcrumbItem[]> = {
  "/about": [{ label: "Home", href: "/" }, { label: "About" }],
  "/blog": [{ label: "Home", href: "/" }, { label: "Blog" }],
  "/careers": [{ label: "Home", href: "/" }, { label: "Careers" }],
  "/case-studies": [{ label: "Home", href: "/" }, { label: "Case Studies" }],
  "/contact": [{ label: "Home", href: "/" }, { label: "Contact" }],
  "/cookies-policy": [{ label: "Home", href: "/" }, { label: "Cookies Policy" }],
  "/privacy-policy": [{ label: "Home", href: "/" }, { label: "Privacy Policy" }],
  "/services": [{ label: "Home", href: "/" }, { label: "Services" }],
  "/testimonials": [{ label: "Home", href: "/" }, { label: "Testimonials" }],
  "/terms-and-conditions": [{ label: "Home", href: "/" }, { label: "Terms and Conditions" }],
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
    return <BreadcrumbStrip items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: title }]} />;
  }

  if (pathname.startsWith("/services/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const service = slug ? getServiceBySlug(slug) : null;
    const title = service?.title ?? "Services";
    return <BreadcrumbStrip items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: title }]} />;
  }

  if (pathname.startsWith("/careers/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const job = slug ? getJobBySlug(slug) : null;
    const title = job?.title ?? "Careers";
    return <BreadcrumbStrip items={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: title }]} />;
  }

  if (pathname.startsWith("/case-studies/")) {
    const slug = pathname.split("/").filter(Boolean)[1];
    const caseStudy = slug ? caseStudiesData[slug] : null;
    const title = caseStudy?.title ?? "Case Studies";
    return <BreadcrumbStrip items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: title }]} />;
  }

  return null;
}
