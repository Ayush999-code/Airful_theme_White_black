import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { PortableText } from "@portabletext/react";
import { isConfigured } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";
import { EnquiryForm } from "@/components/ui/enquiry-form";
import CTA from "@/components/sections/cta";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { PortableTextBlock } from "@portabletext/types";

export const dynamic = "force-dynamic";

const sanity = client.withConfig({
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: process.env.SANITY_API_TOKEN ? "previewDrafts" : "published",
});

// Query to get all blog slugs for generateStaticParams
const slugsQuery = `*[_type == "blog"]{ "slug": slug.current }`;

const query = `*[_type=="blog" && slug.current == $slug][0]{
  title,
  shortDescription,
  category,
  featuredImage,
  content,
  publishedAt
}`;

const relatedQuery = `*[_type=="blog" && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3]{
  title,
  "slug": slug.current,
  featuredImage,
  publishedAt
}`;

const metadataQuery = `*[_type=="blog" && slug.current == $slug][0]{
  title,
  shortDescription
}`;

type BlogPost = {
  title: string;
  shortDescription?: string;
  category?: string;
  featuredImage?: unknown;
  content?: PortableTextBlock[];
  publishedAt?: string;
};

type RelatedBlog = {
  title: string;
  slug: string;
  featuredImage?: unknown;
  publishedAt?: string;
};

type BlogMeta = {
  title?: string;
  shortDescription?: string;
};

// Simplified slug normalization - Next.js App Router already decodes URL parameters
const normalizeSlug = (input: string | string[] | undefined): string => {
  if (!input) return "";
  // App Router passes the slug as a string (or array which we join), already decoded
  return Array.isArray(input) ? input[0] : input;
};

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  if (!isConfigured()) {
    return [];
  }

  try {
    const slugs = await client.fetch<{ slug: string }[]>(slugsQuery);
    const isVercel = !!process.env.VERCEL;

    if (isVercel) {
      console.log('[Blog] generateStaticParams found', slugs.length, 'slugs');
    }

    return slugs.map((item) => ({
      slug: item.slug,
    }));
  } catch (error) {
    console.error('[Blog] Failed to generate static params:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);

  if (!slug || !isConfigured()) return {};

  try {
    const data = await sanity.fetch<BlogMeta | null>(metadataQuery, { slug });
    if (!data) return {};

    return {
      title: data.title,
      description: data.shortDescription,
    };
  } catch (error) {
    console.error('Failed to fetch blog post metadata:', error);
    return {};
  }
}

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);

  if (!slug) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Blog post not found
      </div>
    );
  }

  if (!isConfigured()) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Blog post not available
      </div>
    );
  }

  let data: BlogPost | null = null;
  try {
    data = await sanity.fetch<BlogPost | null>(query, { slug });
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
  }

  if (!data) {
    return (
      <div className="pt-32 text-center text-zinc-400">
        Blog post not found: {slug}
      </div>
    );
  }

  // Fetch related blogs
  let relatedBlogs: RelatedBlog[] = [];
  if (data.category) {
    try {
      relatedBlogs = await sanity.fetch<RelatedBlog[]>(relatedQuery, { 
        slug, 
        category: data.category 
      });
    } catch (error) {
      console.error('Failed to fetch related blogs:', error);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-[80px] pb-12">
        <Container>
          <div className="grid gap-[2%] lg:grid-cols-[1fr_1fr] items-center">
            {/* Left Column - Text */}
            <div>
              {/* Category Pill */}
              {data.category ? (
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur mb-6 inline-block">
                  {data.category}
                </span>
              ) : null}

              {/* Blog Title */}
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {data.title}
              </h1>

              {/* Short Description */}
              {data.shortDescription ? (
                <p className="text-lg text-zinc-400 mb-6">
                  {data.shortDescription}
                </p>
              ) : null}

              {/* Publish Date */}
              {data.publishedAt ? (
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
                  {formatDate(data.publishedAt)}
                </span>
              ) : null}
            </div>

            {/* Right Column - Featured Image */}
            {data.featuredImage ? (
              <div className="relative overflow-hidden rounded-[12px]">
                <Image
                  src={urlFor(data.featuredImage).width(1600).height(900).fit("crop").url()}
                  alt={data.title}
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {/* Section Divider */}
      <div className="h-px w-full border-t border-white/10" />

      {/* Content Section - Same layout as Case Study */}
      <section className="py-12 pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            {/* Left Column - Content */}
            <div>
              {data.content && data.content.length > 0 ? (
                <div className="prose prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-3 prose-ul:mt-4 prose-li:my-2 prose-li:leading-7">
                  <PortableText value={data.content} />
                </div>
              ) : (
                <div className="text-center text-zinc-400">
                  <p>No content available for this blog post.</p>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar (same as Case Study) */}
            <aside className="lg:sticky lg:top-28 h-fit space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <p className="text-sm text-zinc-400 mb-2.5">Category:</p>
                <p className="text-white font-semibold">
                  {data.category || "—"}
                </p>
              </div>

              {/* Enquiry Form */}
              <EnquiryForm
                title="Submit Application"
                buttonText="Enquire Now"
              />
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 ? (
        <section className="py-16 border-t border-white/10">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-8">Related Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    {blog.featuredImage ? (
                      <Image
                        src={urlFor(blog.featuredImage).width(800).height(600).fit("crop").url()}
                        alt={blog.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="h-full w-full bg-zinc-800" />
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-cyan-300 transition">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* CTA Section */}
      <CTA />
    </>
  );
}

