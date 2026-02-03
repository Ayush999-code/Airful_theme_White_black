import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Recruitment Operations", href: "/services/recruitment-operations" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Cookies Policy", href: "/cookies-policy" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/airful/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/airful_io", icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/airful.io", icon: Instagram },
  { name: "Email", href: "mailto:hello@airful.io", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:[grid-template-columns:1.4fr_1fr_1fr_1fr]">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src="/logoairful.png"
                  alt="Airful Logo"
                  width={60}
                  height={50}
                  className="w-[60px] h-[50px]"
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <p className="mt-4 text-sm text-zinc-400 max-w-xs">
                Breathing greater connectivity & vitality into your business through powerful technology solutions.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Airful. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
