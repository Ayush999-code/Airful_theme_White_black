import { LegalPage, generateMetadata } from "@/components/ui/legal-page";

export const metadata = generateMetadata({
  title: "Terms and Conditions",
  description:
    "Review Airful's Terms and Conditions governing the use of our website and services. Understand your rights and responsibilities when using our digital marketing and consulting services.",
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms and Conditions" lastUpdated="May 1, 2025">
      <p>
        By accessing or using the Airful website (www.airful.io), you agree to
        the following Terms and Conditions.
      </p>

      <h2>1. Business Model &amp; Services Offered</h2>
      <p>Airful provides digital marketing, IT services, and consulting services including:</p>
      <ul>
        <li>Performance Marketing</li>
        <li>AI Consulting</li>
        <li>Website Development</li>
        <li>Strategy &amp; Analytics</li>
      </ul>
      <p>International payments may be made via bank transfer or cards.</p>

      <h2>2. Refund &amp; Cancellation Policy</h2>
      <ul>
        <li>Refunds processed in 5–7 working days</li>
        <li>Credited to original payment method</li>
        <li>Partial refunds possible for ongoing projects</li>
      </ul>

      <h2>3. Legal Terms</h2>

      <h3>User Rights and Responsibilities</h3>
      <p>Users must provide accurate information and not misuse the platform.</p>

      <h3>Intellectual Property</h3>
      <p>All content is owned by Airful.</p>

      <h3>Disclaimers and Limitation of Liability</h3>
      <p>Services provided {`"`}as-is{`"`} and {`"`}as-available{`"`}.</p>

      <h2>4. Contact Information</h2>
      <p>📧 hello@airful.io</p>
    </LegalPage>
  );
}

