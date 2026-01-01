"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <Badge variant="glow" className="mb-4">
              Client Success
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h1>
            <p className="text-xl text-zinc-400">
              Real stories from businesses we&apos;ve helped transform. These
              partnerships reflect our commitment to delivering exceptional
              results.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                <blockquote className="text-lg text-zinc-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">50+</p>
              <p className="text-zinc-400">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">10+</p>
              <p className="text-zinc-400">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">600%</p>
              <p className="text-zinc-400">Average Traffic Growth</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">5★</p>
              <p className="text-zinc-400">Client Satisfaction</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-zinc-400 mb-8">
              Join the businesses that have transformed their operations with
              our partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
