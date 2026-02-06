import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";
import { isConfigured, projectId, dataset } from "@/sanity/env";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// GROQ query for services listing - ordered by the 'order' field
const query = `*[_type=="service"] | order(order asc, title asc) {
  title,
  "slug": slug.current,
  icon,
  shortDescription,
  category,
  order
}`;

type ServiceListItem = {
  title: string;
  slug: string;
  icon?: SanityImageSource;
  shortDescription?: string;
  category?: string;
  order?: number;
};

export default async function ServicesPage() {
  let services: ServiceListItem[] = [];
  let hasError = false;
  let errorMessage = '';
  
  // Debug logging (server-side only)
  const isDev = process.env.NODE_ENV === 'development';
  const isVercel = !!process.env.VERCEL;
  const shouldLog = isDev || isVercel;
  
  if (shouldLog) {
    console.log('\n========== [Services PAGE] START DEBUG ==========');
    console.log('[Services] Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: isVercel,
      NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT_SET',
      NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'NOT_SET',
    });
    console.log('[Services] Parsed config:', {
      projectId: projectId || 'NOT_SET',
      dataset: dataset || 'NOT_SET',
      isConfigured: isConfigured(),
    });
  }
  
  try {
    if (isConfigured()) {
      if (shouldLog) {
        console.log('[Services] Fetching with query:', query);
      }
      services = await client.fetch<ServiceListItem[]>(query);
      if (shouldLog) {
        console.log('[Services] Fetch SUCCESS:', {
          count: services.length,
          data: services.length > 0 ? services.map(s => ({ title: s.title, slug: s.slug, order: s.order })) : 'EMPTY',
        });
      }
      
      // Diagnostic: if empty, try counting total documents
      if (services.length === 0 && shouldLog) {
        try {
          const countResult = await client.fetch<number>('count(*[_type=="service"])');
          console.log('[Services] Diagnostic count query result:', countResult);
        } catch (countError) {
          console.error('[Services] Diagnostic count query failed:', countError);
        }
      }
    } else {
      errorMessage = 'Sanity not configured (missing projectId or dataset)';
      if (shouldLog) {
        console.log('[Services] ERROR:', errorMessage);
      }
    }
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[Services] FETCH FAILED:', {
      error: errorMessage,
      errorFull: error,
    });
    hasError = true;
  }
  
  if (shouldLog) {
    console.log('========== [Services PAGE] END DEBUG ==========\n');
  }

  return (
    <>
      <section className="py-24">
        <Container>
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-zinc-400">
              Comprehensive digital solution tailored to your business needs.
            </p>
          </div>

          {services.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-12 text-center">
              {hasError ? (
                <>
                  <p className="text-zinc-400 mb-2">Unable to load services</p>
                  <p className="text-sm text-zinc-500">Please try again later.</p>
                </>
              ) : (
                <>
                  <p className="text-zinc-300 mb-2">No services available yet</p>
                  <p className="text-sm text-zinc-500">Check back soon for our service offerings.</p>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                // Ensure slug is always a string for the href
                const slugString = typeof service.slug === 'string' 
                  ? service.slug 
                  : String(service.slug || '');
                
                return (
                  <Link
                    key={slugString || service.title}
                    href={`/services/${slugString}`}
                    className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_10px_60px_rgba(56,189,248,0.25)]"
                  >
                   <div className="block items-start gap-4 ">
       
                      <div className="flex-shrink-0 w-[80px]">
                        {service.icon ? (
                          <div className="bg-white rounded-[10px] p-2 transition duration-300 group-hover:scale-110">
                            <Image
                              src={urlFor(service.icon).width(200).height(200).fit("crop").url()}
                              alt={service.title}
                              width={64}
                              height={64}
                              className="h-16 w-16 object-cover rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="h-16 w-16 rounded-xl bg-zinc-800/60 flex items-center justify-center">
                            <span className="text-2xl">⚡</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {service.shortDescription && (
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                        {service.shortDescription}
                      </p>
                    )}

                    <div className="mt-6">
                      <span className="inline-flex items-center rounded-full border border-cyan-400/50 px-4 py-2 text-sm text-cyan-300 transition hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]">
                        Read More →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

