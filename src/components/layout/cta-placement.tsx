"use client";

import { usePathname } from "next/navigation";
import CTA from "@/components/sections/cta";

export function CtaPlacement() {
  const pathname = usePathname();

  if (pathname === "/about") {
    return <CTA />;
  }

  return null;
}
