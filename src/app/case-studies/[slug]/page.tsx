"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { caseStudiesData, type CaseStudy } from "@/data/case-studies";


export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    return (
      <>
        <section className="pt-32 pb-16 min-h-screen">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Case Study Not Found
              </h1>
              <p className="text-zinc-400 mb-8">
                The case study you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link href="/case-studies">
                <Button variant="primary">View All Case Studies</Button>
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <Badge variant="glow" className="mb-4">
            {caseStudy.category}
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-3xl"
          >
            {caseStudy.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400 max-w-3xl"
          >
            {caseStudy.description}
          </motion.p>

          {caseStudy.projectUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <a
                href={caseStudy.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="group">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </a>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Challenges Section */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              The Challenge
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Problems We Solved
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <p className="text-zinc-400">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Our Approach
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              How We Solved It
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {solution.title}
                  </h3>
                  <ul className="space-y-3">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 border-t border-zinc-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              The Outcome
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Results Achieved
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-zinc-300 font-medium">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-zinc-800">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Schedule a Discovery Meeting
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
