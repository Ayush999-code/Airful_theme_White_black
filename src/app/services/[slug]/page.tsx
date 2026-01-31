import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { EnquiryForm } from "@/components/ui/enquiry-form";
import CTA from "@/components/sections/cta";
import { isConfigured } from "@/sanity/env";
import type { Metadata } from "next";
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const dynamic = "force-dynamic";

const sanity = client.withConfig({
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: process.env.SANITY_API_TOKEN ? "previewDrafts" : "published",
});

const query = `*[_type=="service" && slug.current == $slug][0]{
  title,
  icon,
  category,
  content,
  featuredImage,
  seoTitle,
  seoDescription
}`;

const metadataQuery = `*[_type=="service" && slug.current == $slug][0]{
  seoTitle,
  title
}`;

type Service = {
  title: string;
  icon?: SanityImageSource;
  category?: string;
  content?: PortableTextBlock[];
  featuredImage?: unknown;
  seoTitle?: string;
  seoDescription?: string;
};

type ServiceMeta = {
  seoTitle?: string;
  title?: string;
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
  if (!slug || !isConfigured()) return {};

  try {
    const data = await sanity.fetch<ServiceMeta | null>(metadataQuery, { slug });
    if (!data) return {};

    return {
      title: data.seoTitle || data.title,
      description: data.seoTitle ? undefined : data.title,
    };
  } catch (error) {
    console.error('Failed to fetch service metadata:', error);
    return {};
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  if (!slug) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Service not found
      </div>
    );
  }

  if (!isConfigured()) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Service not available
      </div>
    );
  }

  let data: Service | null = null;
  try {
    data = await sanity.fetch<Service | null>(query, { slug });
  } catch (error) {
    console.error('Failed to fetch service:', error);
  }

  if (!data) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Service not found
      </div>
    );
  }

  return (
    <>
      <section className="pt-[80px] pb-12 service-detail">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            {/* LEFT */}
            <div>
<h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {data.title}
              </h1>
        
              {/* Service Category - Single Line Format */}
              {data.category && (
                <p className="text-sm text-zinc-500 mb-8">
                  Service Category: <span className="text-cyan-400 capitalize">{data.category}</span>
                </p>
              )}
              
              <div className="h-px w-full bg-zinc-800 mb-10" />

              {data.content && data.content.length > 0 ? (
                <section className="mb-14">
                  <div className="prose prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-3 prose-ul:mt-4 prose-li:my-2 prose-li:leading-7">
                    <PortableText value={data.content} />
                  </div>
                </section>
              ) : null}
            </div>

            {/* RIGHT */}
            <aside className="lg:sticky lg:top-28 h-fit space-y-6">
              {/* Enquiry Form */}
              <EnquiryForm
                title="Enquire About This Service"
                buttonText="Enquire Now"
              />

              {/* Back to Services Link */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <Link
                  href="/services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition"
                >
                  ← Back to Services
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

