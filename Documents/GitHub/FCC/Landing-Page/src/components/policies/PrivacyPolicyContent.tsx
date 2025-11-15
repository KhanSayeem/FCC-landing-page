import React from "react";

export const PrivacyPolicyContent = () => {
  return (
    <div className="space-y-6 text-fcc-muted">
      <p className="text-sm text-fcc-gray">
        <strong>Last Updated:</strong>{" "}
        {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">1. Introduction</h3>
        <p className="text-sm leading-relaxed">
          Financial Command Center AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you use our AI-powered financial
          automation platform.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">2. Information We Collect</h3>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-fcc-cream">2.1 Financial Data</p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Banking transaction data via Plaid integration</li>
            <li>Accounting records from Xero</li>
            <li>Payment processing data from Stripe</li>
            <li>Financial reports and analytics</li>
          </ul>

          <p className="pt-3 font-medium text-fcc-cream">2.2 Account Information</p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Name, email address, and contact details</li>
            <li>Company information and business details</li>
            <li>Authentication credentials</li>
          </ul>

          <p className="pt-3 font-medium text-fcc-cream">2.3 Usage Data</p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Platform interactions and feature usage</li>
            <li>AI query history and commands</li>
            <li>System logs and performance metrics</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">3. How We Use Your Information</h3>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Provide AI-powered financial insights and automation</li>
          <li>Connect and sync data across financial platforms</li>
          <li>Generate reports, forecasts, and recommendations</li>
          <li>Improve our AI models and platform functionality</li>
          <li>Ensure security and prevent fraud</li>
          <li>Communicate updates and support</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">4. Data Security</h3>
        <p className="text-sm leading-relaxed">We implement industry-standard security measures including:</p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>256-bit AES encryption for data at rest</li>
          <li>TLS 1.3 encryption for data in transit</li>
          <li>SOC 2 Type II compliant infrastructure</li>
          <li>Regular security audits and penetration testing</li>
          <li>Multi-factor authentication (MFA)</li>
          <li>Role-based access controls (RBAC)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">5. Data Sharing and Third Parties</h3>
        <p className="text-sm leading-relaxed">We do not sell your data. We only share information with:</p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>
            <strong>Service Providers:</strong> Plaid, Stripe, Xero for financial integrations
          </li>
          <li>
            <strong>Cloud Infrastructure:</strong> Secure hosting and database providers
          </li>
          <li>
            <strong>AI Services:</strong> Encrypted processing for AI insights
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law or legal process
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">6. Data Retention</h3>
        <p className="text-sm leading-relaxed">We retain your financial data for as long as your account is active and as required for:</p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Providing ongoing services and support</li>
          <li>Compliance with tax and accounting regulations (typically 7 years)</li>
          <li>Legal obligations and dispute resolution</li>
        </ul>
        <p className="pt-2 text-sm leading-relaxed">
          You may request deletion of your data at any time, subject to legal retention requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">7. Your Rights</h3>
        <p className="text-sm leading-relaxed">You have the right to:</p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Access your personal and financial data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Export your data in a portable format</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent for data processing</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">8. Cookies and Tracking</h3>
        <p className="text-sm leading-relaxed">
          We use essential cookies for authentication and platform functionality. We do not use third-party advertising cookies. You
          can control cookie preferences through your browser settings.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">9. International Data Transfers</h3>
        <p className="text-sm leading-relaxed">
          Your data may be processed in secure data centers globally. We ensure adequate protection through standard contractual
          clauses and compliance with GDPR, CCPA, and other applicable regulations.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">10. Children's Privacy</h3>
        <p className="text-sm leading-relaxed">Our services are not intended for individuals under 18. We do not knowingly collect data from children.</p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">11. Changes to This Policy</h3>
        <p className="text-sm leading-relaxed">
          We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform
          notification. Continued use constitutes acceptance of updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">12. Contact Us</h3>
        <p className="text-sm leading-relaxed">For privacy-related questions or to exercise your rights, contact us at:</p>
        <div className="space-y-1 rounded-lg bg-fcc-panel p-4 text-sm">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sayeem@daywinlabs.com" className="text-fcc-accent hover:text-fcc-accent">
              sayeem@daywinlabs.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/8801949317789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fcc-accent hover:text-fcc-accent"
            >
              +880 1949-317789
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
