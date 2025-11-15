import React from "react";

export const TermsOfServiceContent = () => {
  return (
    <div className="space-y-6 text-fcc-muted">
      <p className="text-sm text-fcc-gray">
        <strong>Last Updated:</strong>{" "}
        {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">1. Agreement to Terms</h3>
        <p className="text-sm leading-relaxed">
          By accessing or using Financial Command Center AI ("FCC AI," "Platform," "Service"), you agree to be bound by these
          Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are
          prohibited from using or accessing this service.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">2. Description of Service</h3>
        <p className="text-sm leading-relaxed">
          FCC AI provides AI-powered financial automation and insights through integration with third-party financial platforms
          including Stripe, Xero, and Plaid. Our service includes:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Real-time financial data aggregation and analysis</li>
          <li>AI-driven insights, forecasts, and recommendations</li>
          <li>Automated reporting and compliance monitoring</li>
          <li>Natural language query interface</li>
          <li>Integration with banking, accounting, and payment systems</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">3. Pilot Program Terms</h3>
        <p className="text-sm leading-relaxed">The current offering is a pilot program with the following conditions:</p>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Limited to 5-10 participating businesses</li>
          <li>Pricing at $999/month during pilot phase</li>
          <li>Enhanced support and onboarding assistance</li>
          <li>Possibility of feature changes and updates</li>
          <li>Early access to new capabilities</li>
          <li>30-day cancellation notice required</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">4. User Responsibilities</h3>
        <div className="space-y-2 text-sm">
          <p className="font-medium text-fcc-cream">4.1 Account Security</p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Maintain confidentiality of your account credentials</li>
            <li>Enable multi-factor authentication (MFA) when available</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Be responsible for all activities under your account</li>
          </ul>

          <p className="pt-3 font-medium text-fcc-cream">4.2 Data Accuracy</p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Ensure accuracy of financial data provided</li>
            <li>Maintain proper authorization for connected accounts</li>
            <li>Verify AI-generated insights before making business decisions</li>
            <li>Keep integration credentials current and valid</li>
          </ul>

          <p className="pt-3 font-medium text-fcc-cream">4.3 Acceptable Use</p>
          <ul className="ml-4 list-inside list-disc space-y-1">
            <li>Use the service only for legitimate business purposes</li>
            <li>Comply with all applicable financial regulations</li>
            <li>Not attempt to reverse-engineer or compromise the platform</li>
            <li>Not share access credentials with unauthorized users</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">5. Data Ownership</h3>
        <p className="text-sm leading-relaxed">
          You retain all rights to your financial data. FCC AI may process and analyze data solely for the purpose of providing
          the service. We do not claim ownership over your financial information.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">6. Payment & Subscription Terms</h3>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Billing occurs monthly at the agreed pilot rate</li>
          <li>Payments are due within 10 days of invoice</li>
          <li>Late payments may incur service suspension</li>
          <li>Future pricing may change after the pilot with prior notice</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">7. Intellectual Property</h3>
        <p className="text-sm leading-relaxed">
          FCC AI retains ownership of all software, AI models, and intellectual property related to the platform. Customers
          receive a limited, non-exclusive, non-transferable license to use the service during the subscription term.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">8. Confidentiality</h3>
        <p className="text-sm leading-relaxed">
          Both parties agree to keep confidential any proprietary information shared during the course of the engagement, including
          financial data, business processes, and future roadmap details.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">9. Service Availability</h3>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>FCC AI targets 99.5% uptime excluding scheduled maintenance</li>
          <li>Planned maintenance windows will be communicated in advance</li>
          <li>Unscheduled outages will be addressed promptly with status updates</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">10. Limitation of Liability</h3>
        <p className="text-sm leading-relaxed">
          FCC AI is not liable for indirect, incidental, or consequential damages. Our aggregate liability is limited to the fees
          paid by you in the 3 months preceding the incident giving rise to the claim.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">11. Termination</h3>
        <p className="text-sm leading-relaxed">
          Either party may terminate the agreement with 30 days written notice. FCC AI may suspend or terminate access for
          violations of these terms or illegal activity.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">12. Governing Law</h3>
        <p className="text-sm leading-relaxed">
          These Terms are governed by and construed in accordance with the laws of the jurisdiction where FCC AI operates, without
          regard to conflict of law principles.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">13. Updates to Terms</h3>
        <p className="text-sm leading-relaxed">
          We may update these Terms of Service periodically. Continued use of the platform after changes become effective shall
          constitute your consent to the updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">14. Contact Information</h3>
        <p className="text-sm leading-relaxed">
          Questions about these Terms? Email us at{" "}
          <a href="mailto:sayeem@daywinlabs.com" className="text-fcc-accent hover:text-fcc-accent">
            sayeem@daywinlabs.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};
