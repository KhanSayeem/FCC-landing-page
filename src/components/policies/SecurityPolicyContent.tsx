import React from "react";
import { AlertTriangle, Database, FileCheck, Key, Lock, Shield } from "lucide-react";

export const SecurityPolicyContent = () => {
  return (
    <div className="space-y-6 text-fcc-muted">
      <p className="text-sm text-fcc-gray">
        <strong>Last Updated:</strong>{" "}
        {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">Our Commitment to Security</h3>
        <p className="text-sm leading-relaxed">
          At Financial Command Center AI, we understand that your financial data is among your most sensitive information. We
          implement enterprise-grade security measures to protect your data at every layer of our infrastructure.
        </p>
      </section>

      <section className="space-y-4">
        <PolicyItem icon={Lock} title="1. Data Encryption">
          <div className="text-sm space-y-2">
            <p className="font-medium text-fcc-cream">Encryption at Rest</p>
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>AES-256 encryption for all stored data</li>
              <li>Encrypted database volumes and backups</li>
              <li>Hardware-level encryption on storage infrastructure</li>
              <li>Separate encryption keys per customer tenant</li>
            </ul>

            <p className="pt-2 font-medium text-fcc-cream">Encryption in Transit</p>
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>TLS 1.3 for all data transmission</li>
              <li>Perfect Forward Secrecy (PFS) enabled</li>
              <li>HSTS (HTTP Strict Transport Security) enforced</li>
              <li>Certificate pinning for API connections</li>
            </ul>
          </div>
        </PolicyItem>

        <PolicyItem icon={Key} title="2. Access Control & Authentication">
          <div className="text-sm space-y-2">
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>Multi-factor authentication (MFA) required for all accounts</li>
              <li>Role-based access control (RBAC) with principle of least privilege</li>
              <li>Single Sign-On (SSO) support via SAML 2.0</li>
              <li>Session management with automatic timeout</li>
              <li>IP whitelisting and geofencing options</li>
              <li>OAuth 2.0 / OpenID Connect for third-party integrations</li>
              <li>Passwordless authentication options available</li>
            </ul>
          </div>
        </PolicyItem>

        <PolicyItem icon={Database} title="3. Infrastructure Security">
          <div className="text-sm space-y-2">
            <p className="font-medium text-fcc-cream">Cloud Architecture</p>
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>Dedicated VPC with subnet isolation</li>
              <li>Private networking between services</li>
              <li>Encrypted service-to-service communication</li>
              <li>Immutable infrastructure deployments</li>
            </ul>

            <p className="pt-2 font-medium text-fcc-cream">Monitoring & Logging</p>
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>24/7 infrastructure monitoring with automated alerts</li>
              <li>Centralized logging with anomaly detection</li>
              <li>Security Information & Event Management (SIEM) pipeline</li>
              <li>Audit logs retained for a minimum of 365 days</li>
            </ul>
          </div>
        </PolicyItem>

        <PolicyItem icon={AlertTriangle} title="4. Incident Response">
          <div className="text-sm space-y-2">
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>Documented incident response plan with defined roles</li>
              <li>Regular tabletop exercises with engineering & leadership</li>
              <li>24-hour notification commitment for security breaches</li>
              <li>Dedicated security channel with escalation playbooks</li>
            </ul>
          </div>
        </PolicyItem>

        <PolicyItem icon={FileCheck} title="5. Compliance & Audits">
          <div className="text-sm space-y-2">
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>SOC 2 Type II readiness with independent audits</li>
              <li>GDPR and CCPA aligned data handling practices</li>
              <li>Annual penetration testing by third-party firms</li>
              <li>Vendor risk management and ongoing security reviews</li>
            </ul>
          </div>
        </PolicyItem>

        <PolicyItem icon={Shield} title="6. Customer Controls">
          <div className="text-sm space-y-2">
            <ul className="ml-4 list-inside list-disc space-y-1">
              <li>Granular permissioning for team members</li>
              <li>Audit-ready export of activity logs</li>
              <li>Dedicated environments (single tenant) for enterprise</li>
              <li>Bring-your-own-key (BYOK) support on roadmap</li>
            </ul>
          </div>
        </PolicyItem>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">7. Responsible Disclosure</h3>
        <p className="text-sm leading-relaxed">
          We encourage ethical security researchers to report vulnerabilities responsibly. Email{" "}
          <a href="mailto:security@daywinlabs.com" className="text-fcc-accent hover:text-fcc-accent">
            security@daywinlabs.com
          </a>{" "}
          with details, steps to reproduce, and proof of concept. We commit to acknowledging receipt within 48 hours.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">8. Business Continuity</h3>
        <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
          <li>Daily encrypted backups stored in geo-redundant locations</li>
          <li>Disaster recovery drill at least twice per year</li>
          <li>RPO of under 15 minutes and RTO under 2 hours for critical systems</li>
          <li>Automatic failover for core data pipelines</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-fcc-cream">9. Contact</h3>
        <p className="text-sm leading-relaxed">
          Have questions about our security practices? Email{" "}
          <a href="mailto:sayeem@daywinlabs.com" className="text-fcc-accent hover:text-fcc-accent">
            sayeem@daywinlabs.com
          </a>{" "}
          and we'll connect you with our security team.
        </p>
      </section>
    </div>
  );
};

interface PolicyItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}

const PolicyItem = ({ icon: Icon, title, children }: PolicyItemProps) => (
  <div className="flex items-start gap-3 border border-fcc-border bg-fcc-black p-4 shadow-fcc-dark">
    <div className="mt-1 border border-fcc-border bg-fcc-panel p-2">
      <Icon className="h-5 w-5 text-fcc-accent" />
    </div>
    <div className="flex-1 space-y-2">
      <h3 className="text-lg font-semibold text-fcc-cream">{title}</h3>
      {children}
    </div>
  </div>
);
