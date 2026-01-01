"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export default function CookiesPolicyPage() {
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
            Cookies Policy
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
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help the site remember your actions and
              preferences over time, so you don&apos;t have to re-enter them
              whenever you return to the site or browse from one page to
              another.
            </p>

            <h2>Types of Cookies We Use</h2>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are required for the proper operation of our
              website. They enable basic functions like page navigation and
              access to secure areas. The website cannot function properly
              without these cookies.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies, including Google Analytics, to track
              visitor interactions on our website. These cookies help us
              understand how visitors use our site, which pages are most
              popular, and how we can improve the user experience.
            </p>

            <h3>Preference Cookies</h3>
            <p>
              These cookies store your settings and choices, such as language
              preferences or display settings. They help provide a more
              personalized experience when you return to our site.
            </p>

            <h3>Marketing Cookies</h3>
            <p>
              Marketing cookies are used to deliver relevant advertisements to
              you based on your browsing behavior. They also help limit the
              number of times you see an ad and measure the effectiveness of
              advertising campaigns.
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>
                Ensure smooth functionality and navigation across our website
              </li>
              <li>
                Analyze visitor behavior to identify areas for improvement
              </li>
              <li>
                Retain your preferences to provide a consistent experience
              </li>
              <li>
                Provide personalized content and marketing based on your
                interests
              </li>
              <li>Measure and improve the effectiveness of our services</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              You can control and delete cookies through your browser settings.
              Most web browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p>
              Please note that blocking or deleting certain cookies may impair
              the functionality of our website and your user experience.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies on our site are set by third-party services,
              including:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Used to collect anonymous
                data about website usage
              </li>
              <li>
                <strong>Social Media Platforms:</strong> May set cookies when
                you interact with social sharing features
              </li>
            </ul>
            <p>
              These third-party cookies are governed by the respective privacy
              policies of those providers. We encourage you to review their
              policies for more information about how they use cookies.
            </p>

            <h2>Cookie Retention</h2>
            <p>
              The length of time a cookie remains on your device depends on
              whether it is a &quot;session&quot; or &quot;persistent&quot;
              cookie:
            </p>
            <ul>
              <li>
                <strong>Session cookies:</strong> Temporary cookies that are
                deleted when you close your browser
              </li>
              <li>
                <strong>Persistent cookies:</strong> Remain on your device for a
                set period or until you delete them manually
              </li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. Any changes will be posted on this page with
              an updated effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact
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
