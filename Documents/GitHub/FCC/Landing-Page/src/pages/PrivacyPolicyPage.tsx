import React from "react";
import { PolicyPageLayout } from "./PolicyPageLayout";
import { PrivacyPolicyContent } from "../components/policies/PrivacyPolicyContent";

export const PrivacyPolicyPage = () => {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      subtitle="How we collect, secure, and use your financial data across the Financial Command Center AI platform."
    >
      <PrivacyPolicyContent />
    </PolicyPageLayout>
  );
};
