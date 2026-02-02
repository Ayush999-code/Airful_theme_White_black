"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, TrendingUp, Eye, Zap, DollarSign } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Improved Conversion Rates",
    highlight: "Transform Clicks into Clients",
    description:
      "We turn website visitors into valuable customers through data-driven design and strategic optimization. Watch your casual browsers become loyal customers, driving real revenue growth where it matters most.",
    stat: "up to 35%",
  },
  {
    icon: Eye,
    title: "Stronger Brand Visibility",
    highlight: "Be Seen, Be Remembered",
    description:
      "Your distinctive brand presence captures attention in crowded markets, positioned strategically where your ideal customers already look. Transform industry anonymity into market authority that customers naturally gravitate toward.",
    stat: "up to 45%",
  },
  {
    icon: Zap,
    title: "Higher Business Productivity",
    highlight: "Accomplish More, Effort Less",
    description:
      "Your streamlined workflows and optimized systems eliminate bottlenecks, allowing your team to focus on high-impact work. Transform wasted hours into measurable business growth.",
    stat: "up to 40%",
  },
  {
    icon: DollarSign,
    title: "Increased Revenue",
    highlight: "Multiply Your Bottom Line",
    description:
      "Your data-driven decisions maximize every customer interaction, creating powerful revenue momentum. Transform market presence into sustainable profits that build lasting business success.",
    stat: "up to 47%",
  },
];

export function Outcomes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#0b1e1d] to-black lux-section"
    >
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Outcomes We Help You Achieve
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Transform Today.{" "}
            <span className="gradient-text">Thrive Tomorrow.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="border-b border-zinc-800 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#227774]/60 transition-colors lux-chip">
                    <outcome.icon className="w-5 h-5 text-[#8fe6df]" />
                  </div>
                  <span className="text-lg font-medium text-white group-hover:text-[#8fe6df] transition-colors">
                    {outcome.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:block text-sm font-semibold text-[#8fe6df]">
                    {outcome.stat}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center lux-chip">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-zinc-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-14">
                      <p className="text-white font-medium mb-2">
                        {outcome.highlight}
                      </p>
                      <p className="text-zinc-400 leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
