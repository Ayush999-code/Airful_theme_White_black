import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Cookies Policy | Airful",
  description:
    "Learn how Airful uses cookies and similar tracking technologies on our website. Understand the types of cookies we use and how to manage your cookie preferences.",
};

export default function CookiesPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <Badge variant="outline" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cookies Policy
          </h1>
          <p className="text-zinc-400">Last Updated: May 1, 2025</p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
            <p>
              This Cookies Policy explains how Airful uses cookies.
            </p>

            <h2>1. What Are Cookies?</h2>

            <h2>2. Types of Cookies We Use</h2>
            <ul>
              <li>Essential Cookies</li>
              <li>Analytics Cookies</li>
              <li>Preference Cookies</li>
              <li>Marketing Cookies</li>
            </ul>

            <h2>3. How We Use Cookies</h2>
            <ul>
              <li>Website functionality</li>
              <li>Analytics</li>
              <li>Preferences</li>
              <li>Marketing</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>Users can control cookies via browser settings.</p>

            <h2>5. Third-Party Cookies</h2>
            <p>Third-party tools like Google Analytics may be used.</p>

            <h2>6. Changes to This Policy</h2>

            <h2>7. Contact Us</h2>
            <p>📧 hello@airful.io</p>
          </div>
        </Container>
      </section>
    </>
  );
}

