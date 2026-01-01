"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            <h2>Introduction</h2>
            <p>
              Airful Consulting LLP (&quot;we,&quot; &quot;us,&quot; or
              &quot;Airful&quot;) is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website at airful.io.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you express interest in obtaining information about us
              or our products and services, participate in activities on the
              website, or contact us.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies
              installed on your device.
            </p>

            <h3>Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to collect
              information about your browsing activities. See our Cookies Policy
              for more details.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Communicate with you for customer service and marketing purposes
              </li>
              <li>Process your transactions and send related information</li>
              <li>Send you promotional communications (with your consent)</li>
            </ul>

            <h2>Legal Basis for Processing (EEA/UK)</h2>
            <p>
              If you are located in the European Economic Area or United
              Kingdom, we process your personal information based on: your
              consent, contractual necessity, legal obligations, or our
              legitimate interests.
            </p>

            <h2>Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                Service providers who assist in operating our website and
                services
              </li>
              <li>Business partners in connection with business transfers</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your consent</li>
              <li>Professional advisors such as lawyers and accountants</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected and to comply
              with legal obligations. You can request deletion of your data by
              contacting us at hello@airful.io.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h3>California Residents</h3>
            <p>
              California residents have additional rights under the CCPA and
              CPRA, including the right to know what personal information we
              collect, delete personal information, and opt out of the sale of
              personal information.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. In the event of a
              data breach, we will notify affected individuals as required by
              applicable law.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be processed in India where our operations
              are based. By using our services, you consent to such transfers.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for users under 16 years of age. We
              do not knowingly collect personal information from children.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <ul>
              <li>Email: hello@airful.io</li>
              <li>Phone: +91 8141442364</li>
              <li>Address: Jamshedpur, India</li>
            </ul>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
