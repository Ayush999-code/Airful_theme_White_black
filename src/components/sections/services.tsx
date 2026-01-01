"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Workflow,
  Brain,
  BarChart3,
  Code2,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Strategic Digital Architecture",
    description:
      "We design cohesive digital ecosystems that connect your tools, teams, and data into a unified, powerful system.",
  },
  {
    icon: Code2,
    title: "Custom Integration Solutions",
    description:
      "Seamlessly connect your existing software, eliminating data silos and creating efficient workflows across platforms.",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflow Automation",
    description:
      "Automate repetitive tasks and complex processes, freeing your team to focus on high-value creative work.",
  },
  {
    icon: BarChart3,
    title: "Full Stack Digital Marketing",
    description:
      "Data-driven marketing strategies that amplify your brand presence and drive measurable business growth.",
  },
  {
    icon: Brain,
    title: "AI Implementation",
    description:
      "Leverage cutting-edge AI tools and strategies to enhance decision-making and operational efficiency.",
  },
  {
    icon: Zap,
    title: "Data-Driven Insights",
    description:
      "Transform raw data into actionable intelligence that powers strategic business decisions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden lux-section"
      data-lux-reveal
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b1e1d] to-black" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-lux-parallax="8"
          >
            Breathing connectivity &{" "}
            <span className="gradient-text">vitality</span> into your business
          </h2>
          <p className="text-zinc-400 text-xl" data-lux-parallax="5">
            We create digital solutions that serve the human spirit of your business,
            not complicate it.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900 lux-card"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#227774]/20 to-[#0b1e1d]/40 border border-[#227774]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 lux-chip">
                <service.icon className="w-6 h-6 text-[#8fe6df]" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8fe6df] transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#227774]/10 to-[#0b1e1d]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
