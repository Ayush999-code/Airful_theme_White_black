import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* About Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="glow" className="mb-4">
              About Airful
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technology for Growth
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Realize your vision with powerful technology solutions grounded in solid business
              wisdom. We breathe connectivity and vitality into your digital ecosystem.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Building systems that create clarity, confidence, and momentum
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We align strategy, operations, and execution so every team knows
                what matters, what moves, and what scales. Our approach combines
                strategic thinking with operational rigor to deliver measurable results.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                The result is a digital foundation that turns complexity into clarity—
                so your leadership can move faster with confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-8">
              <div className="grid gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white font-semibold mb-2">How we think</p>
                  <p className="text-sm text-zinc-400">
                    Systems-first, outcome-driven. Every decision ties to
                    measurable business impact.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white font-semibold mb-2">How we work</p>
                  <p className="text-sm text-zinc-400">
                    Collaborative, transparent, and fast—without sacrificing
                    quality or precision.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-white font-semibold mb-2">Why it matters</p>
                  <p className="text-sm text-zinc-400">
                    Teams move as one. Customers feel the difference. Growth
                    becomes repeatable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What drives us
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              We believe technology should serve the human spirit of your business,
              not complicate it. These core values guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Technology with Heart</h3>
              <p className="text-sm text-zinc-400">
                We believe technology should serve the human spirit of your business,
                not complicate it.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Results-Driven</h3>
              <p className="text-sm text-zinc-400">
                We&apos;re obsessed with delivering measurable results that matter:
                streamlined operations, enhanced experiences, and sustainable growth.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">True Partnership</h3>
              <p className="text-sm text-zinc-400">
                Your success isn&apos;t just a metric for us—it's the fundamental
                reason we exist. We grow when you grow.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Innovation Forward</h3>
              <p className="text-sm text-zinc-400">
                We stay at the cutting edge of technology to bring you solutions
                that don&apos;t just solve today&apos;s problems but prepare you for tomorrow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Leadership
            </Badge>
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 overflow-hidden">
              <img
                src="/ak.jpg"
                alt="Avishek Kedia"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Avishek Kedia</h2>
            <p className="text-zinc-500 mb-6">Founder & CEO</p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              As your partner and advisor, we commit to cutting through the digital
              noise to implement solutions that address your unique challenges with
              precision and care. Your success isn&apos;t just a metric for us—it&apos;s the
              fundamental reason we exist.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Work With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

