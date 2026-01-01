"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <p className="text-zinc-400 mb-4">
              Full Stack Services to Support you at different levels of Ambition
              and Growth
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Start with one and scale Up Dynamically as your business{" "}
              <span className="gradient-text">Evolves</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16">
        <Container>
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h2>
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                      <p className="text-zinc-400 text-sm line-clamp-2">
                        {service.description.split("\n\n")[0]}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-zinc-400 mb-2">Ready for Transformation?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join the innovative businesses & Entrepreneurs who&apos;ve
              discovered the power of technology with heart.
            </h2>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group mt-6">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
