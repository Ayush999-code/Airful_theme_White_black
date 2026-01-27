"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const testimonials = [


{
  quote:
    "I've had the pleasure of working with Avi and I can confidently say he is one of the most driven and effective digital transformation specialists I've encountered. Whether implementing comprehensive digital marketing strategies, analysing customer data, or developing business growth initiatives, Avi consistently delivers impactful results.\n\nWhat stands out most is his ability to understand and engage our audience with authenticity and strategic intent. He balances creativity with data-driven digital marketing insight, ensuring each initiative not only looks great but serves a purpose—building business value, growing market reach, and deepening customer engagement.\n\nEven when juggling multiple digital marketing platforms and campaigns, Avi remains organized, focused, and incredibly responsive. He is also a fantastic team player—collaborative, communicative, and always ready to support or lead, depending on what's needed.\n\nIf you're looking for someone who can both own digital transformation and digital marketing end-to-end and elevate team efforts, Avi would be an outstanding addition to any brand or organization.",
  author: "Adrian Bobanovic",
  company: "Optika MIBO",
  image: "/images/testimonials/Adrian Bobanovic.avif"
},


  {
    quote:
      "The service from Airful has been efficient and responsive. We increased our web traffic by over 600% after a complete website overhaul and saw an uptick in the number of qualified sales demos. They have also helped us automate our digital marketing and community growth stack.",
    author: "Hamza Zia",
    company: "Gitstart",
    image: "/images/testimonials/hamza-zia.avif",
  },
  {
    quote:
      "The Airful team were there to help us at every step – they became an important partner for promoting our tech business. What I’ve especially liked is their thoughtfulness and pro activeness.",
    author: "Will Ferrer",
    company: "Tempest House",
    image: "/images/testimonials/Will Ferrer.avif",
  },
  {
    quote:
      "Airful has helped us tremendously with our prospecting, lead generation and sales efforts. They’ve done good research and contributed with high quality content to help us engage our leads and close better.",
    author: "Vasu Maganti",
    company: "Zelarsoft",
    image: "/images/testimonials/Vasu Maganti.avif",
  },
  {
    quote:
      "Airful’s strong market understanding coupled with good technical prowess has helped us scale Bandhu better. They have helped us with technical tasks and setting up a strong engineering process so that we could release features faster on our mobile apps.",
    author: "Rushil Pallavajhalla",
    company: "Bandhu",
    image: "/images/testimonials/Rushil Pallavajhalla.avif",
  },
{
  quote:
    "Airful helped us lay out a strong foundation for our digital marketing, including building a beautiful website, CRM and google analytics. Working with them has helped us see a good increase in our revenue coming from digital and social channels.",
  author: "Rohan Salian",
  company: "Le Roma",
  image: "/images/testimonials/Rohan Salian.avif",
},
{
  quote:
    "These are folks you can trust to get the job done as long as you give them some initial direction. They built a full fledged e learning web portal for us called Indian Music Guru to promote indian classic music to the masses.",
  author: "Ravi Mandapaka",
  company: "ABCD E Learning",
  image: "/images/testimonials/Ravi Mandapaka.avif",
},
{
  quote:
    "I have enjoyed working with the Airful team. They work systematically and organized in their approach to digital marketing and brand building. They are helping us build the ICSS brand pan india, ranging from working on website to handling our linkedin, social media pages and building a custom CRM.",
  author: "Syed Imran",
  company: "ICare Security Systems",
  image: "/images/testimonials/Syed Imran.avif",
},
{
  quote:
    "These guys built our website and handle our digital presence. They know their stuff and do their work well.",
  author: "Syed Arshad",
  company: "Aqua Pool Solutions",
  image: "/images/testimonials/Syed Arshad.avif",
},

{
  quote:
    "I can wholeheartedly recommend Avi for any backend services. He has been structuring my personal CRM (+6,000 contacts) as well as working for core clients of mine. He has always been on point, accurate, very thoughtful. Beyond mere execution, he's very strategic, straightforward and doesn't shy away from complicated questions. So, if you need somebody to structure your backend, build your CRM, enrich your data, refine your pipeline, he's your guy.\n\n5 stars from my side. For any questions around him, don't hesitate to personally reach out to me.",
  author: "Alistair Langer",
  company: "Alistair Langer",
  image: "/images/testimonials/Alistair Langer.avif",
},
{
  quote:
    "Working with Avishek Kedia was a turning point for our company. He not only delivered a complex 360° digital branding system with clarity and precision – where others had failed – but also brought adaptability, insight, and consistent added value. Avi leads with integrity, professionalism, and a deeply human touch that makes collaboration both effective and inspiring. I wholeheartedly recommend him and his team.",
  author: "Angel Hernandez",
  company: "Connected Business",
  image: "/images/testimonials/Angel Hernandez.avif",
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
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-medium text-sm">{testimonial.author}</p>
          <p className="text-zinc-500 text-xs">{testimonial.company}</p>
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
            <span className="gradient-text">leaders we&apos;ve worked with</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={`${testimonial.author}-${testimonial.company}-${index}`} className="mb-6 break-inside-avoid">
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
