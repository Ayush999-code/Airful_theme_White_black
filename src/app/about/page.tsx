"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Technology with Heart",
    description:
      "We believe technology should serve the human spirit of your business, not complicate it.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We're obsessed with delivering measurable results that matter: streamlined operations, enhanced experiences, and sustainable growth.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "Your success isn't just a metric for us—it's the fundamental reason we exist. We grow when you grow.",
  },
  {
    icon: Zap,
    title: "Innovation Forward",
    description:
      "We stay at the cutting edge of technology to bring you solutions that don't just solve today's problems but prepare you for tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              We breathe{" "}
              <span className="gradient-text">connectivity & vitality</span>{" "}
              into your business
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              At Airful, we don't just integrate systems—we create digital heartbeats
              that pump vitality through your entire organization.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="glow" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Creating digital solutions that serve humans
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Every integration we design, every automation we build, and every
                digital solution we create is crafted with one goal: to free your
                team's creativity and passion while driving measurable growth.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                We understand that technological transformation isn't just about
                tools—it's about outcomes. Since our inception, we've been obsessed
                with delivering measurable results that matter.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent border border-zinc-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                  <p className="text-white font-medium text-lg">
                    "To create magic, one needs four things:"
                  </p>
                  <p className="text-zinc-400 mt-2 italic">
                    purity of intent | level of awareness | focus of will | quality of character
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What drives us forward
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Leadership
            </Badge>
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-white">AK</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Avishek Kedia</h2>
            <p className="text-zinc-500 mb-6">Founder & CEO</p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              As your partner and advisor, we commit to cutting through the digital
              noise to implement solutions that address your unique challenges with
              precision and care. Your success isn't just a metric for us—it's the
              fundamental reason we exist.
            </p>
            <Link href="/contact">
              <Button variant="primary" className="group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
