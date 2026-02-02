import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  metadata?: {
    title: string;
    description: string;
  };
}

export function LegalPage({ title, lastUpdated, children, metadata }: LegalPageProps) {
  return (
    <>
      {/* Banner - Dark background, NO text (just spacing/background) */}
      <div className="h-48 md:h-64 bg-zinc-950" />

      {/* White Box - Contains ALL text content */}
      <div className="relative -mt-32 md:-mt-40 pb-16 md:pb-24">
        <Container>
          <div
            className="mx-auto bg-white shadow-xl"
            style={{
              maxWidth: "1100px",
              width: "100%",
              padding: "48px 48px 32px",
              borderRadius: "16px",
            }}
          >
            {/* Badge */}
            <Badge className="bg-zinc-100 text-zinc-700 mb-4">Legal</Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
              {title}
            </h1>

            {/* Last Updated */}
            <p className="text-sm text-zinc-500 mb-8">Last Updated: {lastUpdated}</p>

            {/* Divider */}
            <div className="border-t border-zinc-200 mb-8" />

            {/* Content */}
            <div className="prose prose-zinc max-w-none">{children}</div>
          </div>
        </Container>
      </div>
    </>
  );
}

export function generateMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title: `${title} | Airful`,
    description: description,
  };
}

