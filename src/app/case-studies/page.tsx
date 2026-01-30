import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";
import { isConfigured, projectId, dataset } from "@/sanity/env";

const query = `*[_type=="caseStudy"]{
  title,
  serviceCategory,
  shortDescription,
  thumbnail,
  "slug": slug.current,
  technologiesUsed
} | order(_createdAt desc)`;

type CaseStudyListItem = {
  title: string;
  serviceCategory?: string;
  shortDescription?: string;
  thumbnail?: unknown;
  slug: string;
  technologiesUsed?: string[];
};

export default async function CaseStudiesPage() {
  let caseStudies: CaseStudyListItem[] = [];
  let hasError = false;
  let errorMessage = '';
  
  // Debug logging (server-side only)
  const isDev = process.env.NODE_ENV === 'development';
  const isVercel = !!process.env.VERCEL;
  const shouldLog = isDev || isVercel;
  
  if (shouldLog) {
    console.log('\n========== [CaseStudies PAGE] START DEBUG ==========');
    console.log('[CaseStudies] Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: isVercel,
      NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT_SET',
      NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'NOT_SET',
      NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'NOT_SET',
    });
    console.log('[CaseStudies] Parsed config:', {
      projectId: projectId || 'NOT_SET',
      dataset: dataset || 'NOT_SET',
      isConfigured: isConfigured(),
    });
  }
  
  try {
    if (isConfigured()) {
      if (shouldLog) {
        console.log('[CaseStudies] Fetching with query:', query);
      }
      caseStudies = await client.fetch<CaseStudyListItem[]>(query);
      if (shouldLog) {
        console.log('[CaseStudies] Fetch SUCCESS:', {
          count: caseStudies.length,
          data: caseStudies.length > 0 ? caseStudies.map(cs => ({ title: cs.title, slug: cs.slug })) : 'EMPTY',
        });
      }
      
      // Diagnostic: if empty, try counting total documents
      if (caseStudies.length === 0 && shouldLog) {
        try {
          const countResult = await client.fetch<number>('count(*[_type=="caseStudy"])');
          console.log('[CaseStudies] Diagnostic count query result:', countResult);
        } catch (countError) {
          console.error('[CaseStudies] Diagnostic count query failed:', countError);
        }
      }
    } else {
      errorMessage = 'Sanity not configured (missing projectId or dataset)';
      if (shouldLog) {
        console.log('[CaseStudies] ERROR:', errorMessage);
      }
    }
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[CaseStudies] FETCH FAILED:', {
      error: errorMessage,
      errorFull: error,
    });
    hasError = true;
  }
  
  if (shouldLog) {
    console.log('========== [CaseStudies PAGE] END DEBUG ==========\n');
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-zinc-400">
            Explore how we've helped businesses transform through strategic solutions.
          </p>
        </div>

        {caseStudies.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-12 text-center">
            {hasError ? (
              <>
                <p className="text-zinc-400 mb-2">Unable to load case studies</p>
                <p className="text-sm text-zinc-500">Please try again later.</p>
              </>
            ) : (
              <>
                <p className="text-zinc-300 mb-2">No case studies available yet</p>
                <p className="text-sm text-zinc-500">Check back soon for our latest work.</p>
              </>
            )}
          </div>
        ) : (
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
                  <span className="inline-flex items-center rounded-full border border-cyan-400/50 px-4 py-2 text-sm text-cyan-300 transition hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
          </div>
        )}
      </Container>
    </section>
  );
}

