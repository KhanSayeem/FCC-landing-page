import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Brain, TrendingUp, Zap, Globe, Clock, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { TypographyH1, TypographyH2, TypographyLead, TypographyMuted } from "./ui/typography";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { VideoModal } from "./VideoModal";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { ContactModal } from "./ContactModal";

const features = [
  {
    title: "AI-Powered Insights",
    description: "Instantly generate summaries, forecasts, and recommendations using natural-language queries.",
    icon: Brain,
  },
  {
    title: "Unified Dashboard",
    description: "Connect Stripe, Xero, and banking systems into one live command center with real-time visibility.",
    icon: Globe,
  },
  {
    title: "Automated Compliance",
    description: "Built-in risk monitoring and compliance checks so you never miss critical deadlines.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Reporting",
    description: "Generate Q4 summaries, cash flow reports, and analytics in seconds — not hours.",
    icon: TrendingUp,
  },
  {
    title: "Smart Automation",
    description: "Automate invoicing, reminders, and reconciliations to reclaim 20+ hours every week.",
    icon: Zap,
  },
  {
    title: "24/7 Availability",
    description: "Your AI CFO works nonstop, providing insights and forecasts whenever you need them.",
    icon: Clock,
  },
];

const testimonials = [
  {
    quote: "FCC feels like having a CFO who never sleeps. The dashboards make financial clarity instant.",
    author: "Early Beta Advisor",
  },
  {
    quote: "Finally, financial automation that actually connects everything, not just reports.",
    author: "Industry Peer Review",
  },
];

const pricing = [
  {
    tier: "Pilot Program",
    price: "$999",
    cadence: "/ month",
    headline: "Be one of the first 10 businesses to experience AI-powered financial automation.",
    bullets: [
      "Complete setup and integration (Stripe, Xero, Plaid)",
      "Personalized financial dashboard for your business",
      "Weekly AI-generated cashflow and performance reports",
      "Automated compliance alerts and reconciliation",
      "Priority support during the pilot phase",
      "Limited to the first 5-10 businesses"
    ],
  },
];

const faqs = [
  {
    question: "Is my financial data secure?",
    answer: "Yes. FCC encrypts all credentials with AES-256 and runs over HTTPS. You maintain full control of your data.",
  },
  {
    question: "Do I need technical expertise?",
    answer: "No. We handle all integrations and setup for you — the system runs automatically once connected.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Cancel anytime, no hidden fees.",
  },
  {
    question: "How soon can I get started?",
    answer: "Setup takes around 3-5 days after onboarding.",
  },
];

const competitiveOverview = [
  {
    product: "Ramp",
    coreFocus: "Corporate cards & spend automation",
    targetMarket: "U.S. startups & mid-market",
    deployment: "Cloud SaaS",
  },
  {
    product: "Airbase",
    coreFocus: "Spend management & approval workflows",
    targetMarket: "Mid-enterprise finance teams",
    deployment: "Cloud SaaS",
  },
  {
    product: "FCC",
    coreFocus: "Unified finance automation + AI CFO copilots",
    targetMarket: "Tech-forward SMBs & agencies",
    deployment: "Self-hosted & private cloud",
  },
];

const featureComparisonRows = [
  {
    category: "Data Privacy",
    ramp: "Stored on vendor servers",
    airbase: "Stored on vendor servers",
    fcc: "Fully encrypted & locally stored",
  },
  {
    category: "AI Integration",
    ramp: "Basic analytics",
    airbase: "Rule-based workflows",
    fcc: "Conversational AI copilots + predictive insights",
  },
  {
    category: "Compliance & Audit",
    ramp: "Limited",
    airbase: "Medium",
    fcc: "Built-in compliance MCP & audit logs",
  },
  {
    category: "Banking Integrations",
    ramp: "Stripe, QuickBooks",
    airbase: "Xero, NetSuite",
    fcc: "Plaid, Stripe, Xero + ERP integrations",
  },
  {
    category: "Spend Control",
    ramp: "Corporate cards only",
    airbase: "Advanced routing",
    fcc: "Custom automations & policy thresholds",
  },
  {
    category: "Deployment Options",
    ramp: "SaaS only",
    airbase: "SaaS only",
    fcc: "Self-hosted, Dockerized, or hybrid",
  },
  {
    category: "Customization",
    ramp: "Low",
    airbase: "Medium",
    fcc: "High - modular, open architecture",
  },
  {
    category: "User Interface",
    ramp: "Web dashboard",
    airbase: "Web dashboard",
    fcc: "Web + AI chat + Claude Desktop MCP",
  },
  {
    category: "Pricing Model",
    ramp: "Per-user subscription",
    airbase: "Enterprise contracts",
    fcc: "Flexible - Pilot / OS / SaaS",
  },
];

const whyChoosePoints = [
  {
    title: "AI Command Layer",
    description:
      "FCC does more than surface data. Claude or ChatGPT copilots can automate forecasting, detect anomalies, and draft executive-ready reports on demand.",
  },
  {
    title: "Data Sovereignty",
    description:
      "Designed for finance teams that refuse to compromise on privacy. Credentials and transactions remain fully under client control.",
  },
  {
    title: "Unified Compliance",
    description:
      "FCC integrates a compliance MCP audit layer that monitors Plaid, Stripe, and Xero transactions for risk and policy violations in real time.",
  },
  {
    title: "Extensible Ecosystem",
    description:
      "Open APIs let teams plug in QuickBooks, ERP systems, payroll, or custom banking integrations so FCC becomes the command hub for the entire stack.",
  },
  {
    title: "Future-Proof AI Infrastructure",
    description:
      "FCC supports Claude, OpenAI, and Gemini models, protecting long-term optionality as the AI landscape evolves.",
  },
];

const strategicAdvantages = [
  {
    dimension: "Data Ownership",
    ramp: "Vendor-controlled",
    airbase: "Vendor-controlled",
    advantage: "Client-controlled & encrypted",
  },
  {
    dimension: "AI Governance",
    ramp: "Absent",
    airbase: "Absent",
    advantage: "Integrated AI + compliance decisioning",
  },
  {
    dimension: "Integration Scope",
    ramp: "Cards + accounting",
    airbase: "Approvals + accounting",
    advantage: "Banking + payments + accounting + compliance",
  },
  {
    dimension: "Scalability",
    ramp: "SaaS-limited",
    airbase: "SaaS-limited",
    advantage: "Modular microservice architecture",
  },
  {
    dimension: "White-Label Mode",
    ramp: "No",
    airbase: "No",
    advantage: "Yes - deployable by agencies & accountants",
  },
  {
    dimension: "Security",
    ramp: "SOC2 vendor",
    airbase: "SOC2 vendor",
    advantage: "AES-256 encryption with self-issued certificates",
  },
];

const marketOutlook = [
  {
    title: "Beyond Spend",
    description:
      "Ramp and Airbase focus on spend optimization while FCC orchestrates payments, compliance, receivables, and forecasting in one workspace.",
  },
  {
    title: "Global-Ready",
    description:
      "Self-hosted architecture deploys in any region to meet GDPR, APAC, or MENA requirements without SaaS restrictions.",
  },
  {
    title: "AI-Native",
    description:
      "Copilots, predictive alerts, and conversational intelligence ship as core features instead of optional add-ons.",
  },
  {
    title: "Client Longevity",
    description:
      "Modular integrations and model flexibility give teams long-term control over their finance infrastructure.",
  },
];

export function LandingPage() {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);
  const prefersReducedMotion = useReducedMotion();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEarlyAccessModalOpen, setIsEarlyAccessModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getAnimationProps = (baseProps: any) => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 }
      };
    }
    return baseProps;
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/30 bg-slate-950/40 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center space-x-2">
            <img
              src="/logo-no-background.svg"
              alt="Daywin Labs logo"
              className="h-10 w-auto"
              width="240"
              height="269"
            />
            <span className="text-lg font-semibold tracking-tight">Financial Command Center AI</span>
          </div>
          <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
            <a className="text-slate-300 transition hover:text-slate-100" href="#features">
              Features
            </a>
            <a className="text-slate-300 transition hover:text-slate-100" href="#why-fcc">
              Why FCC
            </a>
            <a className="text-slate-300 transition hover:text-slate-100" href="#pilot-program">
              Pilot Program
            </a>
            <a className="text-slate-300 transition hover:text-slate-100" href="#proof">
              Proof
            </a>
            <a className="text-slate-300 transition hover:text-slate-100" href="#faq">
              FAQ
            </a>
            <button
              className="text-slate-300 transition hover:text-slate-100"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact
            </button>
            <Button
              variant="ghost"
              className="px-0 text-slate-200 hover:text-white"
              onClick={() => setIsEarlyAccessModalOpen(true)}
            >
              Book Your Free AI CFO Audit
            </Button>
          </nav>
          <Button className="md:hidden" size="icon" aria-label="Open navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
            <span className="sr-only">Open navigation</span>
            <div className="h-5 w-5 space-y-1.5">
              <span className="block h-0.5 w-full rounded bg-slate-100" />
              <span className="block h-0.5 w-full rounded bg-slate-100" />
              <span className="block h-0.5 w-full rounded bg-slate-100" />
            </div>
          </Button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="absolute right-0 top-0 flex h-full w-[80vw] max-w-xs flex-col gap-6 border-l border-slate-800 bg-slate-950 px-6 py-8 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-100">Financial Command Center AI</span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="rounded-full border border-slate-800 p-2 text-slate-400 transition hover:border-blue-500/50 hover:text-slate-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <nav className="flex flex-col gap-3 text-base font-medium">
                  <a
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                    href="#features"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                    href="#why-fcc"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Why FCC
                  </a>
                  <a
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                    href="#pilot-program"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pilot Program
                  </a>
                  <a
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                    href="#proof"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Proof
                  </a>
                  <a
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                    href="#faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                  <button
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-3 text-left text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                    onClick={() => {
                      setIsContactModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact
                  </button>
                  <Button
                    className="w-full bg-blue-500 text-white hover:bg-blue-400"
                    onClick={() => {
                      setIsEarlyAccessModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Book Your Free AI CFO Audit
                  </Button>
                </nav>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <section
          id="hero"
          className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center lg:px-12 bg-slate-950"
          style={{ isolation: 'isolate' }}
        >
          <motion.div
            className="mx-auto flex max-w-4xl flex-col items-center space-y-8 relative"
            style={{ zIndex: 10 }}
            {...getAnimationProps({
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8 }
            })}
          >
            <motion.div
              className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your AI CFO, 24/7 — without the cost.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypographyH1>
                Automate 80% of your financial operations with AI
              </TypographyH1>
            </motion.div>
            <div className="max-w-2xl space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <TypographyLead>
                  Financial Command Center AI unifies your banking, accounting, and payment systems into one intelligent control center.
                </TypographyLead>
              </motion.div>

            </div>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button
                className="w-full sm:w-auto"
                size="lg"
                onClick={() => setIsEarlyAccessModalOpen(true)}
              >
                Book Your Free AI CFO Audit
              </Button>
              <Button
                variant="outline"
                className="w-full border-slate-700 text-slate-200 hover:bg-slate-900 sm:w-auto"
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
              >
                See Demo
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <TypographyMuted className="text-xs uppercase tracking-wider text-slate-500">
                Pilot program starts at $999/month • Limited to first 5-10 businesses
              </TypographyMuted>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="features"
          className="px-6 py-24 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-6xl flex-col space-y-12 text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TypographyH2>Save 20+ hours per week on financial operations</TypographyH2>
              <TypographyLead className="mx-auto max-w-3xl">
                Connect all your financial systems into one AI-powered command center. From natural language queries to automated workflows, FCC handles the complexity so you can focus on growing your business.
              </TypographyLead>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90 md:hover:scale-105">
                    <CardHeader className="items-start space-y-4">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <feature.icon className="h-6 w-6" />
                      </motion.div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="why-fcc"
          className="px-6 py-24 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-6xl flex-col space-y-12">
            <motion.div
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                Competitive Advantage
              </span>
              <TypographyH2>Why choose FCC over spend platforms</TypographyH2>
              <TypographyLead className="mx-auto max-w-3xl">
                FCC combines the automation of Ramp, the governance of Airbase, and the intelligence of an AI CFO while keeping every credential under your control.
              </TypographyLead>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                  <CardHeader className="space-y-2">
                    <CardTitle>Market overview</CardTitle>
                    <CardDescription className="text-slate-300">
                      How FCC compares to incumbents on focus, market, and deployment model.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px] table-fixed text-left text-sm">
                        <thead className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          <tr className="border-b border-slate-800 text-slate-300">
                            <th className="py-3 pr-4 font-semibold">Product</th>
                            <th className="py-3 pr-4 font-semibold">Core focus</th>
                            <th className="py-3 pr-4 font-semibold">Target market</th>
                            <th className="py-3 font-semibold">Deployment</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {competitiveOverview.map((row) => (
                            <tr key={row.product} className="text-slate-200">
                              <td className="py-3 pr-4 font-semibold text-slate-100">{row.product}</td>
                              <td className="py-3 pr-4 text-slate-300">{row.coreFocus}</td>
                              <td className="py-3 pr-4 text-slate-300">{row.targetMarket}</td>
                              <td className="py-3 text-slate-300">{row.deployment}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                  <CardHeader className="space-y-2">
                    <CardTitle>Feature comparison</CardTitle>
                    <CardDescription className="text-slate-300">
                      FCC unifies automation, compliance, and AI copilots that competitors treat as bolt-ons.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[720px] table-fixed text-left text-sm">
                        <thead className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          <tr className="border-b border-slate-800 text-slate-300">
                            <th className="py-3 pr-4 font-semibold">Category</th>
                            <th className="py-3 pr-4 font-semibold">Ramp</th>
                            <th className="py-3 pr-4 font-semibold">Airbase</th>
                            <th className="py-3 font-semibold">FCC</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {featureComparisonRows.map((row) => (
                            <tr key={row.category} className="text-slate-200 align-top">
                              <td className="py-3 pr-4 font-semibold text-slate-100">{row.category}</td>
                              <td className="py-3 pr-4 text-slate-300">{row.ramp}</td>
                              <td className="py-3 pr-4 text-slate-300">{row.airbase}</td>
                              <td className="py-3 text-slate-100">{row.fcc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                  <CardHeader className="space-y-2">
                    <CardTitle>Five reasons teams choose FCC</CardTitle>
                    <CardDescription className="text-slate-300">
                      Directly from customer-facing competitive analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4 text-left">
                      {whyChoosePoints.map((point, index) => (
                        <li key={point.title} className="flex items-start gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-semibold text-blue-300">
                            {index + 1}
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                              {point.title}
                            </p>
                            <p className="text-sm text-slate-300">{point.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                  <CardHeader className="space-y-2">
                    <CardTitle>Market outlook</CardTitle>
                    <CardDescription className="text-slate-300">
                      Where FCC leads the next generation of finance infrastructure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-left">
                      {marketOutlook.map((item) => (
                        <li key={item.title} className="space-y-1">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                            {item.title}
                          </p>
                          <p className="text-sm text-slate-300">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                  <CardHeader className="space-y-2">
                    <CardTitle>Strategic advantages</CardTitle>
                    <CardDescription className="text-slate-300">
                      The differentiators that keep finance teams on FCC.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[680px] table-fixed text-left text-sm">
                        <thead className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          <tr className="border-b border-slate-800 text-slate-300">
                            <th className="py-3 pr-4 font-semibold">Dimension</th>
                            <th className="py-3 pr-4 font-semibold">Ramp</th>
                            <th className="py-3 pr-4 font-semibold">Airbase</th>
                            <th className="py-3 font-semibold">FCC advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                          {strategicAdvantages.map((row) => (
                            <tr key={row.dimension} className="text-slate-200 align-top">
                              <td className="py-3 pr-4 font-semibold text-slate-100">{row.dimension}</td>
                              <td className="py-3 pr-4 text-slate-300">{row.ramp}</td>
                              <td className="py-3 pr-4 text-slate-300">{row.airbase}</td>
                              <td className="py-3 text-slate-100">{row.advantage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <TypographyMuted className="border-l-2 border-blue-500/60 pl-4 text-slate-300">
                      “FCC combines the automation of Ramp, the governance of Airbase, and the intelligence of an AI CFO — with total data ownership.”
                    </TypographyMuted>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="pilot-program"
          className="px-6 pb-32 pt-12 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-4xl flex-col space-y-12 text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TypographyH2>Join the $999 Pilot Program</TypographyH2>
              <TypographyLead className="mx-auto max-w-2xl">
                Be one of the first 10 businesses to experience AI-powered financial automation. Early access includes full setup, integrations, and guided onboarding.
              </TypographyLead>
            </motion.div>
            <div className="flex justify-center">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.tier}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="max-w-md border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                    <CardHeader className="items-center space-y-4 text-center">
                      <TypographyMuted className="uppercase tracking-[0.3em] text-blue-400">
                        {plan.tier}
                      </TypographyMuted>
                      <motion.div
                        className="flex items-baseline space-x-2"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <span className="text-5xl font-extrabold text-slate-50">{plan.price}</span>
                        <span className="text-sm text-slate-400">{plan.cadence}</span>
                      </motion.div>
                      <CardDescription className="text-slate-300 text-lg">
                        {plan.headline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3 text-left">
                        {plan.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + bulletIndex * 0.1
                            }}
                          >
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <span className="text-slate-300">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <Button
                          className="w-full"
                          size="lg"
                          onClick={() => setIsEarlyAccessModalOpen(true)}
                        >
                          Apply for Early Access
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="proof"
          className="px-6 py-24 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-5xl flex-col space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <TypographyH2>What early testers and advisors are saying</TypographyH2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-slate-800 bg-slate-900/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                    <CardContent className="flex h-full flex-col justify-between space-y-6 text-left">
                      <p className="text-lg leading-relaxed text-slate-100">"{testimonial.quote}"</p>
                      <TypographyMuted className="text-sm uppercase tracking-[0.2em] text-slate-400">
                        — {testimonial.author}
                      </TypographyMuted>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="px-6 py-24 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-5xl flex-col space-y-12 text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TypographyH2>Frequently Asked Questions</TypographyH2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-slate-800 bg-slate-900/70 text-left transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/90">
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-lg text-slate-100">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">{item.answer}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="px-6 py-24 lg:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto flex max-w-4xl flex-col space-y-12 text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TypographyH2>Ready to see your finances run themselves?</TypographyH2>
              <TypographyLead className="mx-auto max-w-2xl">
                Join forward-thinking businesses automating their finance stack with AI. Limited spots available in our $999 pilot program.
              </TypographyLead>
            </motion.div>
            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setIsEarlyAccessModalOpen(true)}
              >
                Book Free Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-slate-700 text-slate-200 hover:bg-slate-900 sm:w-auto"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Us
              </Button>
            </motion.div>
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypographyMuted>
                Questions? Reach out directly at{' '}
                <a href="mailto:sayeem@daywinlabs.com" className="text-blue-400 hover:text-blue-300 transition">
                  sayeem@daywinlabs.com
                </a>
              </TypographyMuted>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-900/30 bg-slate-950/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            &copy; {currentYear} Financial Command Center AI. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a className="transition hover:text-slate-200" href="/privacy">
              Privacy
            </a>
            <a className="transition hover:text-slate-200" href="/terms">
              Terms
            </a>
            <a className="transition hover:text-slate-200" href="/security">
              Security
            </a>
            <a className="transition hover:text-slate-200" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VideoModal open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen} />
      <EarlyAccessModal open={isEarlyAccessModalOpen} onOpenChange={setIsEarlyAccessModalOpen} />
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </div>
  );
}

export default LandingPage;
