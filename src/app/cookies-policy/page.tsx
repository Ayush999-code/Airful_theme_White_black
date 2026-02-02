import { LegalPage, generateMetadata } from "@/components/ui/legal-page";

export const metadata = generateMetadata({
  title: "Cookies Policy",
  description:
    "Learn how Airful uses cookies and similar tracking technologies on our website. Understand the types of cookies we use and how to manage your cookie preferences.",
});

export default function CookiesPolicyPage() {
  return (
    <LegalPage title="Cookies Policy" lastUpdated="May 1, 2025">
      <div className="cookies-content">
        <p>This Cookies Policy explain how Airful uses cookies.</p>

        <h2>1. What Are Cookies?</h2>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li>Essential-Cookies</li>
          <li>Analytics-Cookies</li>
          <li>Preference-Cookies</li>
          <li>Marketing-Cookies</li>
        </ul>

        <h2>3. How We Use Cookies</h2>
        <ul>
          <li>Website functionality</li>
          <li>Analytics</li>
          <li>Preferences</li>
          <li>Marketing</li>
        </ul>

        <h2>4. Managing Cookies</h2>
        <p>Users can control cookies via browser settings.</p>

        <h2>5. Third-Party Cookies</h2>
        <p>Third-party tools like Google Analytics may be used.</p>

        <h2>6. Changes to This Policy</h2>

        <h2>7. Contact Us</h2>
        <p>📧 hello@airful.io</p>
      </div>
    </LegalPage>
  );
}

