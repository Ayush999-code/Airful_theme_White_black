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
      {/* Header Section - Dark background with black text */}
      <header className="py-12 md:py-16 bg-zinc-950">
        <Container>
          <div className="max-w-4xl mx-auto text-zinc-900">
            <Badge className="bg-zinc-100 text-zinc-700 mb-4">Legal</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {title}
            </h1>
            <p className="text-sm">Last Updated: {lastUpdated}</p>
          </div>
        </Container>
      </header>

      {/* White Box - Contains ONLY policy content */}
      <div className="py-12 md:py-16">
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

