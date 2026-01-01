"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-spotlight" />
        <Container className="relative z-10">
          <Badge variant="outline" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-zinc-400">Last Updated: May 1, 2025</p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto prose prose-invert prose-zinc"
          >
            <h2>About Our Services</h2>
            <p>
              Airful Consulting LLP provides digital marketing, IT services, and
              consulting solutions. Our services include but are not limited to
              performance marketing, AI consulting, website development, and
              strategy work.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using our website and services, you accept and
              agree to be bound by the terms and provisions of this agreement.
              If you do not agree to abide by these terms, please do not use our
              services.
            </p>

            <h2>Payment Terms</h2>
            <p>
              We accept international payments via bank transfer or credit/debit
              cards. Payment terms will be specified in individual service
              agreements or invoices.
            </p>

            <h2>Refund and Cancellation Policy</h2>
            <p>
              Refunds, when approved, will be processed within 5-7 working days
              and returned to the original payment method. For ongoing projects,
              partial refunds may be considered based on the completion status
              at the time of cancellation. Specific refund terms may be outlined
              in individual service agreements.
            </p>

            <h2>User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>
                Not misuse our platform, systems, or content in any unauthorized
                manner
              </li>
              <li>
                Not attempt to gain unauthorized access to any part of our
                systems
              </li>
              <li>
                Comply with all applicable laws and regulations in your use of
                our services
              </li>
              <li>
                Respect intellectual property rights and not infringe upon the
                rights of others
              </li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and code, is the property of Airful Consulting LLP and is
              protected by applicable intellectual property laws. You may not
              reproduce, distribute, modify, or create derivative works from any
              content without our express written permission.
            </p>

            <h2>Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any
              proprietary information shared during the course of our business
              relationship. This includes but is not limited to business
              strategies, technical information, and client data.
            </p>

            <h2>Service Delivery</h2>
            <p>
              We strive to deliver all services within agreed timelines and to
              the specifications outlined in service agreements. Any delays or
              changes will be communicated promptly.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Our services are provided on an &quot;as-is&quot; and
              &quot;as-available&quot; basis. To the fullest extent permitted by
              law, Airful disclaims all warranties, express or implied. We shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our
              services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Airful Consulting LLP and
              its officers, directors, employees, and agents from any claims,
              damages, losses, or expenses arising from your use of our services
              or violation of these terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the
              courts in Jamshedpur, India.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective upon posting to this website. Your continued use
              of our services after any changes constitutes acceptance of the
              modified terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the
              remaining provisions will continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>
              For any inquiries about these Terms and Conditions, please contact
              us at:
            </p>
            <ul>
              <li>Email: hello@airful.io</li>
            </ul>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
