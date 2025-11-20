import React from "react";
import { PolicyPageLayout } from "./PolicyPageLayout";
import { SecurityPolicyContent } from "../components/policies/SecurityPolicyContent";

export const SecurityPolicyPage = () => {
  return (
    <PolicyPageLayout
      title="Security"
      subtitle="Enterprise-grade safeguards that keep your banking, accounting, and payments data protected 24/7."
    >
      <SecurityPolicyContent />
    </PolicyPageLayout>
  );
};
