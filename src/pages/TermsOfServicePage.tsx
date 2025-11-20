import React from "react";
import { PolicyPageLayout } from "./PolicyPageLayout";
import { TermsOfServiceContent } from "../components/policies/TermsOfServiceContent";

export const TermsOfServicePage = () => {
  return (
    <PolicyPageLayout
      title="Terms of Service"
      subtitle="The agreement that governs access, pilot participation, and acceptable use of Financial Command Center AI."
    >
      <TermsOfServiceContent />
    </PolicyPageLayout>
  );
};
