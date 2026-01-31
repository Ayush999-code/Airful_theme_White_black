"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbStrip } from "@/components/layout/breadcrumb-strip";

export function BreadcrumbWrapper() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }
  
  // Parse pathname to build breadcrumb items
  const segments = pathname.split("/").filter(Boolean);
  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { label, href };
  });
  
  // Add Home as first item
  items.unshift({ label: "Home", href: "/" });
  
  return <BreadcrumbStrip items={items} />;
}

