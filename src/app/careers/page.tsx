"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { jobs } from "@/data/jobs";

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <Badge variant="glow" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Your <span className="gradient-text">Career</span> With Us
            </h1>
            <p className="text-xl text-zinc-400">
              We&apos;re always looking for talented individuals who are
              passionate about technology and making a difference. Browse our
              openings and find your next opportunity.
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Growth Opportunities
              </h3>
              <p className="text-zinc-400 text-sm">
                Continuous learning and development paths to help you advance
                your career.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Collaborative Culture
              </h3>
              <p className="text-zinc-400 text-sm">
                Work with talented professionals in a supportive, inclusive
                environment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Impactful Work
              </h3>
              <p className="text-zinc-400 text-sm">
                Contribute to projects that make a real difference for our
                clients worldwide.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/careers/${job.slug}`}
                  className="group block p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                      View Details
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-zinc-400 mb-8">
              We&apos;re always interested in meeting talented people. Send us
              your resume and we&apos;ll keep you in mind for future
              opportunities.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
