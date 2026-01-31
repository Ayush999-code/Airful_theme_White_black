"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { AvatarGroup } from "@/components/ui/avatar-group";

const avatars = [
  { src: "/images/testimonials/Adrian Bobanovic.avif", alt: "Client 1" },
  { src: "/images/testimonials/Angel Hernandez.avif", alt: "Client 2" },
  { src: "/images/testimonials/Alistair Langer.avif", alt: "Client 3" },
  { src: "/images/testimonials/Vasu Maganti.avif", alt: "Client 4" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function MentalHealthHero() {
  return (
    <section className="relative min-h-screen healthcare-theme overflow-hidden pt-24 lg:pt-32">
      {/* Organic Blob Backgrounds */}
      <div className="absolute inset-0 healthcare-blob-bg pointer-events-none">
        <div className="healthcare-blob healthcare-blob-1" />
        <div className="healthcare-blob healthcare-blob-2" />
        <div className="healthcare-blob healthcare-blob-3" />
      </div>

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#FAFAF8]" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F0E8]/50" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Soft Rounded Container */}
        <div className="max-w-7xl mx-auto healthcare-hero-container bg-[#FDFBF7]/80 backdrop-blur-sm shadow-2xl">
          <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="order-2 lg:order-1"
              >
                {/* Pill Badge */}
                <motion.div variants={fadeInUp} className="mb-6">
                  <span className="healthcare-pill">
                    <Sparkles className="w-4 h-4 mr-1.5" />
                    About Us
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="healthcare-heading healthcare-heading-xl mb-6"
                >
                  You&apos;re Not Alone
                  <br />
                  <span className="font-serif-italic healthcare-text-accent">
                    Healing
                  </span>{" "}
                  Starts Here
                </motion.h1>

                {/* Supporting Paragraph */}
                <motion.p
                  variants={fadeInUp}
                  className="healthcare-text-secondary healthcare-text-lg max-w-xl mb-8"
                >
                  Take the first step toward well-being. Our compassionate team
                  provides professional support in a safe, welcoming space
                  designed to help you find balance and peace.
                </motion.p>

                {/* CTA Button */}
                <motion.div variants={fadeInUp} className="mb-10">
                  <Link
                    href="/contact"
                    className="healthcare-btn-primary group inline-flex items-center gap-2"
                  >
                    Book A Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Trust Card */}
                <motion.div variants={fadeInUp}>
                  <AvatarGroup
                    avatars={avatars}
                    rating={5}
                    reviewCount={300}
                  />
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" as const }}
                className="order-1 lg:order-2 relative"
              >
                {/* Image Container with Soft Rounded Corners */}
                <div className="relative aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* Image Overlay */}
                  <div className="healthcare-image-overlay" />

                  {/* Main Portrait */}
                  <Image
                    src="/Will Ferrer.avif"
                    alt="Mental health professional in a relaxed, welcoming pose"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />

                  {/* Decorative Elements */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#8B9A7D]/20 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-[#8B9A7D]" />
                        </div>
                        <div>
                          <p className="text-[#2D2A26] font-semibold text-sm">
                            Personalized Care
                          </p>
                          <p className="text-[#5C574D] text-xs">
                            Tailored to your unique journey
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" as const }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#A8B89A]/20 blur-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" as const }}
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#EDE8DC]/80 blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </section>
  );
}

