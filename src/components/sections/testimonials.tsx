"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I've had the pleasure of working with Avi, and he's one of the most driven digital transformation specialists I've met. From strategy to execution, he delivers results with a rare balance of creativity and data-driven insight.",
    author: "Adrian Bobanovic",
    role: "Optika MIBO",
  },
  {
    quote:
      "Working with Avishek Kedia was a game-changer. He delivered a complex 360° digital branding system with clarity where others failed. Avi brings insight, adaptability, and genuine professionalism.",
    author: "Angel Hernandez",
    role: "Connected Business",
  },
  {
    quote:
      "I highly recommend Avi for backend services. He structured my personal CRM (6,000+ contacts) and supported key clients with precision and strategic insight. Thoughtful, accurate, and unafraid of complex challenges.",
    author: "Alistair Langer",
    role: "783 Capital Partners",
  },
  {
    quote:
      "The Airful team work systematically and organized in their approach to digital marketing and brand building. They are helping us build our brand pan india, from website to linkedin and custom CRM.",
    author: "Syed Imran",
    role: "ICare Security Systems",
  },
  {
    quote:
      "These are folks you can trust to get the job done. They built a full fledged e-learning web portal for us to promote indian classic music to the masses.",
    author: "Ravi Mandapaka",
    role: "ABCD E Learning",
  },
  {
    quote:
      "The service from Airful has been efficient and responsive. We increased our web traffic by over 600% after a complete website overhaul and saw an uptick in the number of qualified sales demos.",
    author: "Hamza Zia",
    role: "GitStart",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors lux-card"
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-[#227774]/40 mb-4" />

      {/* Quote */}
      <p className="text-zinc-300 text-sm leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#227774] to-[#0b1e1d] flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {testimonial.author[0]}
          </span>
        </div>
        <div>
          <p className="text-white font-medium text-sm">{testimonial.author}</p>
          <p className="text-zinc-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#0b1e1d] to-black lux-section"
      data-lux-reveal
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#227774]/10 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            data-lux-parallax="8"
          >
            Hear directly from{" "}
            <span className="gradient-text">leaders we've worked with</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
