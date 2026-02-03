"use client";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Strategic Discovery",
    description:
      "We begin by deeply understanding your vision, challenges, and aspirations. Through thoughtful conversation and collaborative exploration, we uncover the true potential of your business ecosystem.",
  },
  {
    number: "02",
    title: "Tailored Solution Design",
    description:
      "Drawing on our expertise, we craft digital strategies and solutions uniquely suited to your business needs. We prioritize simplicity, integration, and human experience.",
  },
  {
    number: "03",
    title: "Collaborative Implementation",
    description:
      "We bring your vision to life through careful, transparent execution. Your team remains actively involved as we build, integrate, and refine your solutions.",
  },
  {
    number: "04",
    title: "Continuous Partnership",
    description:
      "Our relationship extends far beyond project completion. As your trusted advisors, we provide ongoing guidance, proactive support, and strategic insight as your business evolves.",
  },
];

export function Process() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden lux-section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b1e1d] to-black" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#227774]/15 to-transparent blur-3xl"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            How we <span className="gradient-text">work</span>
          </h2>
        </div>

        {/* Two-column layout: Steps left, image boxed right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-[25px] items-start lg:items-stretch">
          {/* Left Column: Process Steps */}
          <div>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 sm:gap-8 pb-10 sm:pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[27px] top-16 bottom-0 w-px bg-gradient-to-b from-zinc-700 to-transparent" />
                )}

                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center lux-chip">
                    <span className="text-lg font-bold text-[#8fe6df]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p
                    className="text-zinc-400 leading-relaxed"
                    style={{ width: "var(--process-desc-width, 600px)" }}
                    data-process-desc="true"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="mt-10 lg:mt-0 lg:h-full">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-[10px] border border-white/10 overflow-hidden">
              <Image
                src="/work.png"
                alt="How we work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={false}
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          [data-process-desc="true"] {
            --process-desc-width: 600px;
          }
          @media (max-width: 700px) {
            [data-process-desc="true"] {
              --process-desc-width: 100%;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}
