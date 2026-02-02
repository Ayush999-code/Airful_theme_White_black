import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Airful",
  description:
    "Learn how Airful Consulting LLP collects, uses, and protects your personal information. Our Privacy Policy outlines our commitment to your privacy.",
};

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
          <p className="text-zinc-400">
            Last Updated: May 1, 2025
            <br />
            Effective Date: May 1, 2025
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
            <p>
              Airful Consulting LLP ({'"'}Airful,{'"'} {'"'}we,{'"'}
              {'"'}our,{'"'} or {'"'}us{'"'}) respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website (airful.io) or use our
              services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using
              our services, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Privacy Policy. If you do
              not agree with our policies and practices, please do not use our
              services.
            </p>

            <h2>1. Introduction</h2>

            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you interact with us.
            </p>

            <h3>2.2 Information Automatically Collected</h3>
            <p>
              When you access our website, our servers automatically record
              information sent by your browser.
            </p>

            <h3>2.3 Cookies and Similar Technologies</h3>
            <p>
              We use cookies and similar tracking technologies. Please see our
              Cookie Policy for details.
            </p>

            <h2>3. How We Use Your Information</h2>

            <h2>4. Legal Basis for Processing (For EEA and UK Residents)</h2>

            <h2>5. Information Sharing and Disclosure</h2>

            <h3>5.1 Service Providers</h3>
            <h3>5.2 Business Transfers</h3>
            <h3>5.3 Legal Requirements</h3>
            <h3>5.4 With Your Consent</h3>
            <h3>5.5 Professional Advisors</h3>

            <h2>6. Data Retention</h2>
            <p>Contact: hello@airful.io</p>

            <h2>7. Your Rights and Choices</h2>

            <h3>7.1 Access and Update</h3>
            <h3>7.2 Data Subject Rights</h3>
            <h3>7.3 California Privacy Rights (CCPA & CPRA)</h3>
            <h3>7.4 Marketing Communications</h3>

            <h2>8. Data Security</h2>

            <h2>9. International Data Transfers</h2>

            <h2>10. Children&apos;s Privacy</h2>

            <h2>11. Third-Party Websites</h2>

            <h2>12. Changes to This Privacy Policy</h2>

            <h2>13. Contact Us</h2>
            <p>
              <strong>Airful Consulting LLP</strong>
              <br />
              1, Mohini Complex, Anil Sur Path
              <br />
              Uliyan, Kadma
              <br />
              Jamshedpur, Jharkhand – 831005
              <br />
              India
            </p>
            <p>
              📞 +91 8141442364
              <br />
              📧 hello@airful.io
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

