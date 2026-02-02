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
      {/* Banner Section - Dark background, minimal content */}
      <header className="py-12 md:py-16 bg-black">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-zinc-400">Last Updated: {lastUpdated}</p>
          </div>
        </Container>
      </header>

      {/* Content Section - White box with dark text */}
      <section className="py-12 md:py-16 bg-zinc-100">
        <Container>
          <div
            className="mx-auto bg-white rounded-2xl shadow-sm"
            style={{
              maxWidth: "1100px",
              width: "100%",
              padding: "48px",
            }}
          >
            <div className="prose prose-zinc max-w-none">{children}</div>
          </div>
        </Container>
      </section>
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

