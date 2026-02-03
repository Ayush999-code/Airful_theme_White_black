import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";
import { isConfigured } from "@/sanity/env";

export const dynamic = 'force-dynamic';

const query = `*[_type=="blog"]{
  title,
  category,
  shortDescription,
  featuredImage,
  "slug": slug.current,
  publishedAt
} | order(publishedAt desc)`;

type BlogListItem = {
  title: string;
  category?: string;
  shortDescription?: string;
  featuredImage?: unknown;
  slug: string;
  publishedAt?: string;
};

export default async function BlogPage() {
  let blogs: BlogListItem[] = [];
  let hasError = false;
  let errorMessage = '';

  // Debug logging (server-side only)
  const isDev = process.env.NODE_ENV === 'development';
  const isVercel = !!process.env.VERCEL;
  const shouldLog = isDev || isVercel;

  if (shouldLog) {
    console.log('\n========== [Blog PAGE] START DEBUG ==========');
    console.log('[Blog] Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: isVercel,
      isConfigured: isConfigured(),
    });
  }

  try {
    if (isConfigured()) {
      if (shouldLog) {
        console.log('[Blog] Fetching with query:', query);
      }
      blogs = await client.fetch<BlogListItem[]>(query);
      if (shouldLog) {
        console.log('[Blog] Fetch SUCCESS:', {
          count: blogs.length,
          data: blogs.length > 0 ? blogs.map(b => ({ title: b.title, slug: b.slug })) : 'EMPTY',
        });
      }

      // Diagnostic: if empty, try counting total documents
      if (blogs.length === 0 && shouldLog) {
        try {
          const countResult = await client.fetch<number>('count(*[_type=="blog"])');
          console.log('[Blog] Diagnostic count query result:', countResult);
        } catch (countError) {
          console.error('[Blog] Diagnostic count query failed:', countError);
        }
      }
    } else {
      errorMessage = 'Sanity not configured (missing projectId or dataset)';
      if (shouldLog) {
        console.log('[Blog] ERROR:', errorMessage);
      }
    }
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[Blog] FETCH FAILED:', {
      error: errorMessage,
      errorFull: error,
    });
    hasError = true;
  }

  if (shouldLog) {
    console.log('========== [Blog PAGE] END DEBUG ==========\n');
  }

  return (
    <>
      <section className="py-24">
        <Container>
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-zinc-400">
              Explore our latest insights on technology, business, and digital transformation.
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-12 text-center">
              {hasError ? (
                <>
                  <p className="text-zinc-400 mb-2">Unable to load blog posts</p>
                  <p className="text-sm text-zinc-500">Please try again later.</p>
                </>
              ) : (
                <>
                  <p className="text-zinc-300 mb-2">No blog posts available yet</p>
                  <p className="text-sm text-zinc-500">Check back soon for our latest insights.</p>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_10px_60px_rgba(56,189,248,0.25)]"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    {blog.featuredImage ? (
                      <Image
                        src={urlFor(blog.featuredImage).width(1200).height(800).fit("crop").url()}
                        alt={blog.title}
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
                      {blog.category ? (
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur">
                          {blog.category}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                      {blog.shortDescription}
                    </p>

                    <div className="mt-6">
                      <span className="inline-flex items-center rounded-full border border-cyan-400/50 px-4 py-2 text-sm text-cyan-300 transition hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

