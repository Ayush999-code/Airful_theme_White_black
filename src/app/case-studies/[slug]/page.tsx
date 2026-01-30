import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { PortableText } from "@portabletext/react";
import CTA from "@/components/sections/cta";
import type { Metadata } from "next";
import type { PortableTextBlock } from "@portabletext/types";

export const dynamic = "force-dynamic";

const sanity = client.withConfig({
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: process.env.SANITY_API_TOKEN ? "previewDrafts" : "published",
});

const query = `*[_type=="caseStudy" && slug.current == $slug][0]{
  title,
  shortDescription,
  serviceCategory,
  challenges,
  solution,
  results,
  technologiesUsed,
  keyResults,
  seoTitle,
  seoDescription
}`;

const metadataQuery = `*[_type=="caseStudy" && slug.current == $slug][0]{
  seoTitle,
  seoDescription,
  title,
  shortDescription
}`;

type CaseStudy = {
  title: string;
  shortDescription?: string;
  serviceCategory?: string;
  challenges?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  results?: PortableTextBlock[];
  technologiesUsed?: string[];
  keyResults?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

type CaseStudyMeta = {
  seoTitle?: string;
  seoDescription?: string;
  title?: string;
  shortDescription?: string;
};

const normalizeSlug = (input: string | string[] | undefined) => {
  if (!input) return "";
  const raw = Array.isArray(input) ? input[0] : input;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  if (!slug) return {};

  const data = await sanity.fetch<CaseStudyMeta | null>(metadataQuery, { slug });
  if (!data) return {};

  return {
    title: data.seoTitle || data.title,
    description: data.seoDescription || data.shortDescription,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  if (!slug) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Case study not found
      </div>
    );
  }

  const data = await sanity.fetch<CaseStudy | null>(query, { slug });

  if (!data) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Case study not found
      </div>
    );
  }

  return (
    <>
    

      <section className="pt-[80px] pb-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            {/* LEFT */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {data.title}
              </h1>
              {data.shortDescription ? (
                <p className="text-lg text-zinc-400 mb-8">
                  {data.shortDescription}
                </p>
              ) : null}
              <div className="h-px w-full bg-zinc-800 mb-10" />

              {data.challenges && data.challenges.length > 0 ? (
                <section className="mb-14">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Challenges
                  </h2>
                  <div className="prose prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-3 prose-ul:mt-4 prose-li:my-2 prose-li:leading-7">
                    <PortableText value={data.challenges} />
                  </div>
                </section>
              ) : null}

              {data.solution && data.solution.length > 0 ? (
                <section className="mb-14">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Solution
                  </h2>
                  <div className="prose prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-3 prose-ul:mt-4 prose-li:my-2 prose-li:leading-7">
                    <PortableText value={data.solution} />
                  </div>
                </section>
              ) : null}

              {data.results && data.results.length > 0 ? (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Results
                  </h2>
                  <div className="prose prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-3 prose-ul:mt-4 prose-li:my-2 prose-li:leading-7">
                    <PortableText value={data.results} />
                  </div>
                </section>
              ) : null}
            </div>

            {/* RIGHT */}
            <aside className="lg:sticky lg:top-28 h-fit space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="text-sm text-zinc-400 mb-2.5">Service Category:</p>
                <p className="text-white font-semibold">
                  {data.serviceCategory || "—"}
                </p>
                <div className="my-6 h-px w-full bg-zinc-800" />

                {data.technologiesUsed && data.technologiesUsed.length > 0 ? (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white mb-2.5">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data.technologiesUsed.map((tech, i) => (
                        <span
                          key={`tech-${i}`}
                          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {data.keyResults && data.keyResults.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2.5">
                      Key Results
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data.keyResults.map((result, i) => (
                        <span
                          key={`result-${i}`}
                          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-white"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Submit Application
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#2b9f9a]"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#2b9f9a]"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#d5f5f1] via-[#8ddbd4] to-[#2b9f9a] px-5 py-3 text-sm font-semibold text-black shadow-[0_14px_40px_rgba(34,119,116,0.35)] transition hover:shadow-[0_22px_55px_rgba(34,119,116,0.4)]"
                  >
                    Enquire Now
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
