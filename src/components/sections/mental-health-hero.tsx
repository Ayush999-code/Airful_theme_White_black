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

// Calm, slow animation variants for healthcare feel
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

export function MentalHealthHero() {
  return (
    <section className="relative min-h-screen healthcare-theme overflow-hidden pt-20 lg:pt-28">
      {/* Organic Blob Backgrounds */}
      <div className="absolute inset-0 healthcare-blob-bg pointer-events-none">
        <div className="healthcare-blob healthcare-blob-1" />
        <div className="healthcare-blob healthcare-blob-2" />
        <div className="healthcare-blob healthcare-blob-3" />
      </div>

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#FAFAF8]" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F0E8]/50 pointer-events-none" />

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Soft Rounded Container with enhanced shadow */}
        <div className="max-w-7xl mx-auto healthcare-hero-container bg-[#FDFBF7]/85 backdrop-blur-sm shadow-[0_8px_60px_rgba(45,42,38,0.08)]">
          <div className="p-7 sm:p-9 lg:p-12 xl:p-16">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="order-2 lg:order-1"
              >
                {/* Pill Badge - refined spacing */}
                <motion.div variants={fadeInUp} className="mb-6">
                  <span className="healthcare-pill">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                    About Us
                  </span>
                </motion.div>

                {/* Main Headline - enhanced contrast and typography */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-[#2D2A26] font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-[1.15] mb-7"
                >
                  You&apos;re Not Alone
                  <br />
                  <span className="font-serif italic text-[#6B7A5D] font-normal">
                    Healing
                  </span>{" "}
                  Starts Here
                </motion.h1>

                {/* Supporting Paragraph - improved readability */}
                <motion.p
                  variants={fadeInUp}
                  className="text-[#5C574D] text-base sm:text-lg leading-relaxed max-w-lg mb-9"
                >
                  Take the first step toward well-being. Our compassionate team 
                  provides professional support in a safe, welcoming space 
                  designed to help you find balance and peace.
                </motion.p>

                {/* CTA Button - refined */}
                <motion.div variants={fadeInUp} className="mb-10">
                  <Link
                    href="/contact"
                    className="healthcare-btn-primary group inline-flex items-center gap-2.5"
                  >
                    Book A Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" as const }}
                className="order-1 lg:order-2 relative"
              >
                {/* Image Container with Soft Rounded Corners */}
                <div className="relative aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_25px_70px_rgba(45,42,38,0.15)]">
                  {/* Image Overlay - subtle warmth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8]/30 via-transparent to-[#E8EDE4]/10 z-10 pointer-events-none" />

                  {/* Main Portrait */}
                  <Image
                    src="/Will Ferrer.avif"
                    alt="Mental health professional in a relaxed, welcoming pose"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />

                  {/* Floating Label Card - refined styling */}
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <div className="bg-white/92 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(45,42,38,0.12)]">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[#A8B89A]/15 flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 text-[#6B7A5D]" />
                        </div>
                        <div>
                          <p className="text-[#2D2A26] font-semibold text-sm leading-tight">
                            Personalized Care
                          </p>
                          <p className="text-[#8B8578] text-xs mt-0.5">
                            Tailored to your unique journey
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements - refined glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" as const }}
                  className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-[#A8B89A]/15 blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" as const }}
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#EDE8DC]/90 blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade - smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/90 to-transparent" />
    </section>
  );
}

