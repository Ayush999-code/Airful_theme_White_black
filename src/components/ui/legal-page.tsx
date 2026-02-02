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
      {/* White Box - Contains ALL page content */}
      <div className="py-12 md:py-16">
        <Container>
          <div
            className="mx-auto bg-white shadow-xl"
            style={{
              backgroundColor: "#ffffff",
              maxWidth: "1100px",
              width: "100%",
              padding: "48px",
              borderRadius: "16px",
            }}
          >
            {/* Header Content - Inside white box with black text */}
            <div className="mb-8">
              <Badge className="bg-zinc-100 text-black mb-4">Legal</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                {title}
              </h1>
              <p className="text-sm text-black">Last Updated: {lastUpdated}</p>
            </div>

            {/* Policy Body Content - Force pure black text */}
            <div className="prose prose-zinc max-w-none text-black prose-headings:text-black prose-p:text-black prose-li:text-black prose-strong:text-black prose-a:text-black">
              {children}
            </div>
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

