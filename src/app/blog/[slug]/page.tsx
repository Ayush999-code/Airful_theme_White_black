"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <section className="pt-32 pb-16 min-h-screen">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Post Not Found
              </h1>
              <p className="text-zinc-400 mb-8">
                The blog post you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link href="/blog">
                <Button variant="primary">View All Posts</Button>
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <Badge variant="glow" className="mb-4">
            {post.category}
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-3xl"
          >
            {post.excerpt}
          </motion.p>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg prose-zinc prose-headings:text-white prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-zinc-400 prose-p:leading-relaxed prose-li:text-zinc-400 prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.article>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-zinc-800">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                  >
                    <Badge variant="outline" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 border-t border-zinc-800">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to Learn More?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Get in touch to discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="group">
                  More Articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
