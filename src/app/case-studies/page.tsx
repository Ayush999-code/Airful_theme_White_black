import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";

const query = `*[_type=="caseStudy"]{
  title,
  serviceCategory,
  shortDescription,
  thumbnail,
  "slug": slug.current,
  technologiesUsed,
  keyResults
}`;

type CaseStudyListItem = {
  title: string;
  serviceCategory?: string;
  shortDescription?: string;
  thumbnail?: unknown;
  slug: string;
  technologiesUsed?: string[];
  keyResults?: string[];
};

export default async function CaseStudiesPage() {
  const caseStudies = await client.fetch<CaseStudyListItem[]>(query);

  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_10px_60px_rgba(56,189,248,0.25)]"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {study.thumbnail ? (
                  <Image
                    src={urlFor(study.thumbnail).width(1200).height(800).fit("crop").url()}
                    alt={study.title}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="h-56 w-full bg-zinc-800/60" />
                )}

              </div>

              <div className="mt-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {study.technologiesUsed?.map((tag, i) => (
                    <span
                      key={`${study.slug}-tag-${i}`}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                  {study.serviceCategory ? (
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur">
                      {study.serviceCategory}
                    </span>
                  ) : null}
                </div>
                <h2 className="text-2xl font-bold text-white">{study.title}</h2>
                <p className="mt-1 text-sm text-zinc-400">{study.serviceCategory}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {study.shortDescription}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
                    KEY RESULTS
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.keyResults?.map((result, i) => (
                      <span
                        key={`${study.slug}-result-${i}`}
                        className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center rounded-full border border-cyan-400/50 px-4 py-2 text-sm text-cyan-300 transition hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
