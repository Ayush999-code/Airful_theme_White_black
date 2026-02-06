"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md border-b border-zinc-800/50" />
      <Container className="relative">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logoairful.png"
              alt="Airful Logo"
              width={60}
              height={50}
              className="w-[60px] h-[50px]"
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-[15px] text-[#f8fbff] hover:text-white transition-colors rounded-lg hover:bg-zinc-900/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Book a Meeting
              </Button>
            </Link>
          </div>

          {/* Mobile Header Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden overflow-hidden">
            <div className="py-4 space-y-1 border-t border-zinc-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[15px] text-[#f8fbff] hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <Button variant="outline" size="md" className="w-full">
                  Log In
                </Button>
                <Link href="/contact" className="block">
                  <Button variant="primary" size="md" className="w-full">
                    Book a Meeting
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
