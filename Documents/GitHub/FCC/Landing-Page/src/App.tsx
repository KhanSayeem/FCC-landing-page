import React from "react";
import { LandingPage } from "./components/LandingPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { SecurityPolicyPage } from "./pages/SecurityPolicyPage";
import { ContactPage } from "./pages/ContactPage";

const App = () => {
  const currentPath = typeof window !== "undefined" ? normalizePath(window.location.pathname) : "/";

  switch (currentPath) {
    case "/privacy":
      return <PrivacyPolicyPage />;
    case "/terms":
      return <TermsOfServicePage />;
    case "/security":
      return <SecurityPolicyPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <LandingPage />;
  }
};

function normalizePath(pathname: string) {
  if (!pathname) return "/";
  const [cleanPath] = pathname.toLowerCase().split(/[?#]/);
  if (cleanPath === "/") return "/";
  return cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;
}

export default React.memo(App);
