"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { getJobBySlug } from "@/data/jobs";

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const job = getJobBySlug(slug);

  if (!job) {
    return (
      <section className="pt-32 pb-16 min-h-screen">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Position Not Found
            </h1>
            <p className="text-zinc-400 mb-8">
              The job you&apos;re looking for doesn&apos;t exist or has been
              filled.
            </p>
            <Link href="/careers">
              <Button variant="primary">View All Positions</Button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="glow">{job.department}</Badge>
            <Badge variant="outline">{job.type}</Badge>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {job.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-zinc-400 mb-8"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{job.location}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-3xl"
          >
            {job.description}
          </motion.p>
        </Container>
      </section>

      {/* Job Details */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Responsibilities
                </h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Requirements
                </h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Apply for this Position
                </h3>
                <p className="text-sm text-zinc-400 mb-6">
                  Interested in this role? We&apos;d love to hear from you. Send
                  us your resume and a brief introduction.
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="w-full">
                    Apply Now
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <h4 className="text-sm font-medium text-white mb-3">
                    Quick Facts
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
