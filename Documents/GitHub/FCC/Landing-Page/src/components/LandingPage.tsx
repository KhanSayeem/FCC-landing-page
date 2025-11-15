import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  TerminalSquare,
  LayoutDashboard,
  ArrowRight,
  ShieldCheck,
  Database,
  MessageSquare,
  ScrollText,
  LockKeyhole,
  BadgeCheck,
  BookOpenText,
  BadgeDollarSign,
  BarChart,
  Star,
  Send,
  PlayCircle,
} from "lucide-react";
import { PageShell } from "./layout/PageShell";
import { VideoModal } from "./VideoModal";

const heroStats = [
  { label: "Reconciliation accuracy", value: "98.2%" },
  { label: "Finance hours saved weekly", value: "24+" },
  { label: "Systems connected", value: "120+" },
];

const trustedLogos = [
  { name: "Airbnb", src: "/airbnb_logo.svg" },
  { name: "Uber", src: "/uber_logo.svg" },
  { name: "Plaid", src: "/Plaid_logo.svg" },
  { name: "Stripe", src: "/Stripe_logo.svg" },
  { name: "Xero", src: "/Xero_logo.svg" },
  { name: "NetSuite", src: "/Netsuite_logo.svg" },
  { name: "QuickBooks", src: "/Quickbooks_logo.svg" },
];

const highlightMetrics = [
  { label: "Runway answers in under a minute" },
  { label: "Investor-ready updates auto-send" },
  { label: "Monthly close wraps in <2 hours" },
];

const problemStatements = [
  {
    tag: "No signal",
    title: "Cash, burn, and runway sit in different tools.",
  },
  {
    tag: "Manual updates",
    title: "Board notes and team briefings eat nights.",
  },
  {
    tag: "Slow calls",
    title: "Hiring and pricing pause while finance catches up.",
  },
];

const architectureFlow = [
  {
    eyebrow: "You ask",
    title: "What happens if we hire 3 AEs?",
    description: "Type the question in chat or the dashboard-same place every time.",
  },
  {
    eyebrow: "FCC analyzes",
    title: "Bank, Stripe, payroll, and invoices line up instantly.",
    description: "Swings, late payments, and renewals surface with zero digging.",
  },
  {
    eyebrow: "AI CFO replies",
    title: "You get the answer plus one clear next step.",
    description: "Every insight links back to the source so you can verify fast.",
  },
];

const timelineEntries = [
  {
    label: "Morning - Fresh view",
    badge: "Sync",
    description: "FCC refreshes banking, payments, and accounting.",
  },
  {
    label: "Midday - Reconciliations",
    badge: "Autopilot",
    description: "Copilots match Stripe, Plaid, and Xero line items.",
  },
  {
    label: "Afternoon - Forecasting",
    badge: "Models",
    description: "Scenarios update whenever headcount or spend shifts.",
  },
  {
    label: "Evening - Executive wrap",
    badge: "Report",
    description: "Brief digest lands with deltas, risks, and approvals.",
  },
];

const automationCards = [
  {
    title: "Daily recap",
    status: "Delivered",
    body: "Fast pulse on cash, burn, receivables, and any spikes.",
  },
  {
    title: "Invoice + spend watch",
    status: "On alert",
    body: "Late invoices or vendor jumps surface before they bite.",
  },
  {
    title: "Board-ready deck",
    status: "Weekly",
    body: "Plain-language slides you can forward without edits.",
  },
];

const securityCards = [
  {
    icon: ShieldCheck,
    title: "Self-hosted & private cloud",
    body: "Runs in your stack with encrypted credentials.",
    bullets: ["Data stays in your VPC", "Keys never hit source control", "SOC 2 ready posture"],
    shadow: "shadow-fcc-accent",
  },
  {
    icon: LockKeyhole,
    title: "Access & auditability",
    body: "Every action is logged for easy review.",
    bullets: ["Detailed audit trail", "AI suggestions stay traceable", "Security teams can self-serve"],
    shadow: "shadow-fcc-dark",
  },
  {
    icon: BadgeCheck,
    title: "Enterprise readiness",
    body: "Built for teams that expect uptime and rigor.",
    bullets: ["SOC 2 friendly patterns", "Clear demo vs live split", "Review packets on demand"],
    shadow: "shadow-fcc-accent",
  },
];

const pilotSteps = [
  { title: "Free AI CFO audit", description: "Spot the highest-leverage automations." },
  { title: "Self-hosted setup", description: "Deploy together so data never leaves your infra." },
  { title: "Integrations connected", description: "Plaid, Stripe, payroll, and books connected." },
  { title: "AI CFO workflows", description: "Reconciliation, reporting, and forecasting tuned." },
  { title: "Ongoing support", description: "Hands-on tweaks as the pilot runs." },
];

const personaCards = [
  {
    title: "For finance leaders",
    description: "One tab tells you what moved and why.",
    bullets: ["Unified cash + burn view", "Board-ready AI notes", "Compliance-ready logs"],
    shadow: "shadow-fcc-dark",
  },
  {
    title: "For founders & operators",
    description: "Finance clarity without extra hires.",
    bullets: ["Self-hosted control", "Automation that removes busywork", "Backed by Daywin Labs"],
    shadow: "shadow-fcc-accent",
  },
];

const pilotFeatures = ["Self-hosted deployment", "Plaid, Stripe, Xero setup", "AI CFO workflows configured", "Hands-on support"];

const partnerBadges = ["Plaid", "Stripe", "Xero", "QuickBooks", "NetSuite", "Chargebee"];

const productShots = [
  {
    title: "Command center dashboard",
    description: "Cash, burn, vendors, and runway in one secure view.",
    src: "/FCC_Homepage.png",
  },
  {
    title: "Claude + FCC copilots",
    description: "Ask Claude to “Generate Q4 summary” and get sourced answers.",
    src: "/FCC_AI_Assistant_Chat.png",
  },
  {
    title: "Guided setup wizard",
    description: "Self-hosted onboarding keeps Stripe, Plaid, and Xero credentials in your VPC.",
    src: "/FCC_Setup_Page.png",
  },
];

const videoTestimonials = [
  {
    title: "Claude connects to FCC via MCP",
    body: "Watch the AI CFO generate a full Q4 financial summary in seconds.",
    src: "/FCC_AI_Demo_Generate_Q4_Financial_Summary.mp4",
    poster: "/FCC_AI_Assistant_Chat.png",
    quote: "“That demo sold our board in one meeting.” – Priya, Northbeam Labs",
  },
];

const pilotAvailability = { total: 10, remaining: 3 };

const founderOutcomes = [
  {
    title: "Know your runway every morning",
    description: "Daily recap answers how much cash, how long, what changed.",
    stat: "17.2 mo avg runway",
  },
  {
    title: "Close books without the scramble",
    description: "Copilots reconcile Stripe, Plaid, and Xero within hours.",
    stat: "<2 hr close",
  },
  {
    title: "Impress investors automatically",
    description: "Weekly briefs explain metrics, risks, and next steps.",
    stat: "1-click decks",
  },
];

const personaProfiles = [
  {
    title: "Founders / CEOs",
    pain: "Need instant answers on burn or hiring.",
    win: "FCC translates finance noise into action.",
  },
  {
    title: "COOs / Operators",
    pain: "Juggle banking, payroll, SaaS spend, and approvals.",
    win: "One workspace automates alerts and approvals.",
  },
  {
    title: "Finance Leads",
    pain: "Reporting crushes the week.",
    win: "Copilots handle prep so you guide strategy.",
  },
];

const first30Days = [
  { title: "Day 1 - Kickoff", description: "Align on the goal: runway, fundraising, or control." },
  { title: "Week 1 - Connections", description: "Plaid, Stripe, banking, and payroll wired in." },
  { title: "Week 2 - First insights", description: "Daily AI brief shows the key shifts." },
  { title: "Week 4 - Automation live", description: "Reconciliations, alerts, and reports run solo." },
];

const testimonials = [
  {
    quote: "I finally know our burn and runway every morning without chasing spreadsheets.",
    name: "Jordan Ames",
    role: "Founder, Atlas Robotics",
  },
  {
    quote: "Board prep now means forwarding the FCC summary. It's the calmest fundraise we’ve done.",
    name: "Priya Raman",
    role: "Co-founder, Northbeam Labs",
  },
  {
    quote: "FCC feels like a fractional CFO that never sleeps and never asks me for passwords.",
    name: "Luis Delgado",
    role: "COO, Parallel Studio",
  },
  {
    quote: "We closed the month in hours, not weeks. That alone paid for the pilot.",
    name: "Maya Stewart",
    role: "Finance Lead, Kestrel Services",
  },
];

export const LandingPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const testimonialMarquee = useMemo(() => [...testimonials, ...testimonials], []);
  const [pilotForm, setPilotForm] = useState({ email: "", company: "", note: "" });
  const [pilotStatus, setPilotStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [pilotError, setPilotError] = useState("");
  const pilotVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (pilotVideoRef.current) {
      pilotVideoRef.current.muted = false;
    }
  }, []);

  const handlePilotChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPilotForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePilotSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPilotStatus("submitting");
    setPilotError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5e9c3527-ae34-42ea-abbf-c00ae35ca0de",
          subject: "FCC Pilot Checklist Request",
          from_name: pilotForm.email,
          email: pilotForm.email,
          to_email: "sayeem@daywinlabs.com",
          message: `Company / Role: ${pilotForm.company || "N/A"}\nPilot Notes: ${pilotForm.note || "N/A"}`,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setPilotStatus("success");
      setPilotForm({ email: "", company: "", note: "" });
    } catch (error) {
      console.error("Error submitting checklist request:", error);
      setPilotError("Something went wrong. Please email sayeem@daywinlabs.com and we’ll help.");
      setPilotStatus("error");
    }
  };
  return (
    <PageShell>
      <div className="border-b border-fcc-border">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-14 lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 border border-fcc-border bg-fcc-panel px-3 py-1.5 text-[10px] uppercase tracking-[0.24em]">
              <span className="h-1.5 w-1.5 rounded-full bg-fcc-accent" />
              <span className="text-fcc-accent">Limited pilot • 10 seats • $999</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-fcc-cream sm:text-4xl lg:text-5xl">
                Your AI CFO, self-hosted and answering in seconds.
              </h1>
              <p className="max-w-xl text-sm text-fcc-muted sm:text-base">
                FCC connects Plaid, Stripe, and Xero to Claude/ChatGPT copilots so you can ask “What’s our cash runway if we hire 5 more engineers?” and see the sourced answer instantly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-fcc-accent bg-fcc-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
              >
                <TerminalSquare className="h-4 w-4" />
                Book my AI CFO audit
              </a>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-fcc-border bg-fcc-black px-3 py-2 text-xs uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
              >
                <LayoutDashboard className="h-4 w-4" />
                See FCC in action
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="border border-fcc-border bg-fcc-black p-3 text-xs">
                  <div className="text-2xl font-semibold tracking-tight text-fcc-cream">{stat.value}</div>
                  <div className="text-fcc-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden border border-fcc-border bg-fcc-black">
              <div className="flex items-center justify-between border-b border-fcc-border px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-fcc-gray">
                Claude + FCC demo
                <span className="inline-flex items-center gap-1 text-fcc-accent">
                  <ArrowRight className="h-3.5 w-3.5" />
                  “Generate Q4 summary”
                </span>
              </div>
              <div className="relative">
                <video
                  className="h-full w-full video-hero-demo"
                  src="/FCC_AI_Demo_Generate_Q4_Financial_Summary.mp4"
                  poster="/FCC_AI_Assistant_Chat.png"
                  playsInline
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  muted
                  loop
                  autoPlay
                  controls
                />
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded border border-fcc-border bg-fcc-panel/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-fcc-cream"
                >
                  <PlayCircle className="h-3.5 w-3.5" />
                  Expand
                </button>
              </div>
            </div>

            <div className="space-y-3 border border-fcc-border bg-fcc-panel p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-fcc-gray">
                Get the pilot checklist
                <span className="text-fcc-accent">No spam</span>
              </div>
              {pilotStatus === "success" && <div className="border border-green-500 bg-green-500/10 p-2 text-xs text-green-200">Checklist request received! We’ll get back to you shortly.</div>}
              {pilotStatus === "error" && (
                <div className="border border-red-500 bg-red-500/10 p-2 text-xs text-red-200">{pilotError || "Unable to send right now. Please try again."}</div>
              )}
              <form className="space-y-2 text-sm" onSubmit={handlePilotSubmit}>
                <input
                  className="w-full border border-fcc-border bg-fcc-black px-3 py-2 text-fcc-cream placeholder:text-fcc-gray"
                  placeholder="Work email"
                  type="email"
                  name="email"
                  value={pilotForm.email}
                  onChange={handlePilotChange}
                  required
                />
                <input
                  className="w-full border border-fcc-border bg-fcc-black px-3 py-2 text-fcc-cream placeholder:text-fcc-gray"
                  placeholder="Company + role"
                  type="text"
                  name="company"
                  value={pilotForm.company}
                  onChange={handlePilotChange}
                  required
                />
                <textarea
                  className="h-20 w-full border border-fcc-border bg-fcc-black px-3 py-2 text-fcc-cream placeholder:text-fcc-gray"
                  placeholder="Biggest finance fire (optional)"
                  name="note"
                  value={pilotForm.note}
                  onChange={handlePilotChange}
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 border border-fcc-accent bg-fcc-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream disabled:opacity-50"
                  disabled={pilotStatus === "submitting"}
                >
                  <Send className="h-4 w-4" />
                  {pilotStatus === "submitting" ? "Sending..." : "Send me the AI CFO checklist"}
                </button>
              </form>
              <p className="text-[11px] text-fcc-muted">We reply in under 24 hours with the pilot outline.</p>
            </div>
          </div>
        </section>
        <div className="border-t border-fcc-border bg-fcc-cream/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fcc-black">Trusted by teams shipping faster with FCC</span>
            <div className="overflow-hidden rounded border border-fcc-border/60 bg-white/90">
              <div className="flex min-w-max items-center gap-5 px-4 py-4 animate-marquee">
                {[...trustedLogos, ...trustedLogos, ...trustedLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex h-12 min-w-[130px] items-center justify-center border border-fcc-border/30 bg-white px-4 shadow"
                  >
                    <img src={logo.src} alt={`${logo.name} logo`} className="h-7 w-auto" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="product" className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-fcc-gray">Outcomes for founders & operators</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">Know your cash story in minutes, act in seconds.</h2>
              <p className="mt-3 max-w-2xl text-sm text-fcc-muted">
                FCC turns disconnected banking, payments, and accounting data into a single command center so answers, proofs, and next steps are never more than one ask away.
              </p>
            </div>
            <div className="grid gap-2 text-xs sm:grid-cols-3">
              {highlightMetrics.map((chip) => (
                <div key={chip.label} className="border border-fcc-border bg-fcc-black px-3 py-2 text-center">
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {productShots.map((shot) => (
                <div key={shot.title} className="space-y-3 border-2 border-fcc-border bg-fcc-black p-4 shadow-fcc-accent">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-fcc-gray">{shot.title}</div>
                  <div className="overflow-hidden border border-fcc-border bg-fcc-panel">
                    <img src={shot.src} alt={shot.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <p className="text-sm text-fcc-muted">{shot.description}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 border border-fcc-border bg-fcc-panel p-3 text-sm sm:grid-cols-3">
              {personaProfiles.map((persona) => (
                <div key={persona.title} className="border border-fcc-border bg-fcc-black p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-fcc-accent">{persona.title}</div>
                  <p className="mt-1 text-fcc-gray">Pain: {persona.pain}</p>
                  <p className="mt-1 text-fcc-cream">Win: {persona.win}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 border border-fcc-border bg-fcc-black px-4 py-3 text-[11px] text-fcc-gray">
              {partnerBadges.map((partner) => (
                <span key={partner} className="border border-fcc-border px-2 py-1 text-fcc-cream">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-fcc-gray">Your first 30 days</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">White-glove onboarding, fast wins.</h2>
              <p className="mt-2 max-w-2xl text-sm text-fcc-muted">We handle setup so you see useful insights inside two weeks.</p>
            </div>
            <a href="/contact" className="inline-flex border border-fcc-border px-3 py-2 text-xs uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent">
              Get the pilot checklist
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {first30Days.map((step, index) => (
              <div key={step.title} className="border border-fcc-border bg-fcc-panel p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-fcc-accent">{`Step ${index + 1}`}</div>
                <h3 className="mt-2 text-base font-semibold text-fcc-cream">{step.title}</h3>
                <p className="mt-2 text-sm text-fcc-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-b border-fcc-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">Ask a question. Get the decision.</h2>
              <p className="mt-3 text-sm text-fcc-muted">
                FCC keeps a running story of your money—cash in, cash out, upcoming bills—so when you ask a question it responds like a calm CFO: here&apos;s the number, here&apos;s why it moved, here&apos;s what to do.
              </p>
            </div>
            <div className="space-y-4 border-2 border-fcc-border bg-fcc-black p-4 shadow-fcc-accent">
              {architectureFlow.map((step) => (
                <div key={step.eyebrow} className="border border-fcc-border bg-fcc-panel p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-fcc-accent">{step.eyebrow}</div>
                  <div className="mt-1 text-sm font-semibold text-fcc-cream">{step.title}</div>
                  <p className="mt-2 text-xs text-fcc-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-fcc-border bg-fcc-black p-4 shadow-fcc-dark">
              <div className="text-xs uppercase tracking-[0.2em] text-fcc-gray">A typical day with FCC</div>
              <div className="mt-4 space-y-4 text-xs text-fcc-muted">
                {timelineEntries.map((entry, index) => (
                  <div key={entry.label} className="flex gap-3">
                    <div className="pt-1.5">
                      <div className="h-2 w-2 rounded-full bg-fcc-accent" />
                      {index !== timelineEntries.length - 1 && <div className="mx-auto h-full w-px bg-fcc-border" />}
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-fcc-cream">{entry.label}</span>
                        <span className="border border-fcc-border px-1.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-fcc-gray">{entry.badge}</span>
                      </div>
                      <p>{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-fcc-border bg-fcc-panel p-3 text-xs text-fcc-muted">
              <p>“FCC feels like having a CFO who never sleeps. The dashboards make financial clarity instant.”</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-fcc-accent">Mara Patel — Beta Advisor</p>
            </div>
          </div>
        </div>
      </section>

      <section id="automation" className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">What FCC handles for you every day.</h2>
              <p className="mt-2 text-sm text-fcc-muted">Skip the spreadsheet chase-FCC sends short, reliable updates on what changed.</p>
            </div>
            <a
              href="#deploy"
              className="inline-flex items-center gap-2 border border-fcc-border bg-fcc-black px-3 py-2 text-xs uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
            >
              <ScrollText className="h-4 w-4" />
              See what we automate
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.5fr_minmax(0,1.2fr)]">
            <div className="space-y-4 border-2 border-fcc-border bg-fcc-black p-4 shadow-fcc-accent">
              <div className="text-xs uppercase tracking-[0.2em] text-fcc-gray">A typical conversation</div>
              {architectureFlow.map((step) => (
                <div key={step.title} className="grid gap-2 border border-fcc-border bg-fcc-panel p-3 text-sm">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-fcc-accent">{step.eyebrow}</div>
                  <div className="text-fcc-cream">{step.title}</div>
                  <p className="text-xs text-fcc-muted">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {automationCards.map((card) => (
                <div key={card.title} className="border border-fcc-border bg-fcc-panel p-3">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-fcc-cream">{card.title}</span>
                    <span className="text-[10px] text-fcc-accent uppercase tracking-[0.2em]">{card.status}</span>
                  </div>
                  <p className="text-sm text-fcc-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-fcc-gray">See the AI CFO briefing</p>
            <h2 className="text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">From Claude prompt to executive summary in under a minute.</h2>
            <p className="text-sm text-fcc-muted">Clients use this clip to rally stakeholders and boards around the pilot.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            {videoTestimonials.map((demo) => (
              <React.Fragment key={demo.title}>
                <div className="border-2 border-fcc-border bg-fcc-black p-3 shadow-fcc-accent">
                  <video className="w-full video-hero-demo" src={demo.src} poster={demo.poster} controls playsInline muted />
                  <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-fcc-gray">
                    <span>{demo.title}</span>
                    <button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      className="inline-flex items-center gap-1 border border-fcc-border px-2 py-1 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                    >
                      <PlayCircle className="h-3.5 w-3.5" />
                      Expand
                    </button>
                  </div>
                </div>
                <div className="space-y-4 border border-fcc-border bg-fcc-panel p-4">
                  <p className="text-sm text-fcc-muted">{demo.body}</p>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-fcc-accent">{demo.quote}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-fcc-border bg-fcc-black px-3 py-2 text-xs uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                  >
                    <TerminalSquare className="h-4 w-4" />
                    Book the AI CFO pilot
                  </a>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-fcc-gray">Founders talking about FCC</p>
            <h2 className="text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">Client stories that show the outcomes.</h2>
            <p className="text-sm text-fcc-muted">Short quotes from the pilot so you can see what resonates fastest.</p>
          </div>
          <div className="overflow-hidden border border-fcc-border bg-fcc-black py-4">
            <div className="flex min-w-max gap-4 animate-marquee">
              {testimonialMarquee.map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}`} className="min-w-[260px] border border-fcc-border bg-fcc-panel p-4 text-sm text-fcc-muted">
                  <div className="mb-2 flex items-center gap-0.5 text-fcc-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3 w-3 text-fcc-accent" strokeWidth={1.5} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-fcc-cream">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-fcc-accent">{testimonial.name}</p>
                  <p className="text-[11px] text-fcc-gray">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 sm:px-6 sm:py-14">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-fcc-gray">Security & compliance</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">
              Privacy-first finance automation that passes enterprise review.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-fcc-muted">Deploy FCC inside your VPC so credentials stay local and every AI note links to its source.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {securityCards.map((card) => (
              <div key={card.title} className={`border-2 border-fcc-border bg-fcc-black p-4 ${card.shadow}`}>
                <div className="mb-2 flex items-center gap-2">
                  <card.icon className="h-5 w-5 text-fcc-accent" />
                  <span className="text-xs uppercase tracking-[0.18em]">{card.title}</span>
                </div>
                <p className="text-xs text-fcc-muted">{card.body}</p>
                <ul className="mt-3 space-y-1 text-[11px] text-fcc-cream">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deploy" className="border-b border-fcc-border">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-fcc-cream sm:text-3xl">
                Pilot program: AI CFO implementation for $999.
              </h2>
              <p className="mt-2 text-sm text-fcc-muted">In 4-6 weeks we deploy, connect tools, and tune copilots beside your team.</p>
              <div className="mt-3 flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-fcc-gray">
                <span>
                  {pilotAvailability.remaining} of {pilotAvailability.total} seats remaining
                </span>
                <div className="h-2 w-48 border border-fcc-border bg-fcc-black">
                  <div
                    className="h-full bg-fcc-accent"
                    style={{
                      width: `${((pilotAvailability.total - pilotAvailability.remaining) / pilotAvailability.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-fcc-border bg-fcc-black px-3 py-2 text-xs uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
            >
              <BookOpenText className="h-4 w-4" />
              Book your free AI CFO audit
            </a>
          </div>

          <div className="flex flex-col gap-4 border border-fcc-border bg-fcc-black px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-fcc-gray">Pilot pricing</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-fcc-cream">$999</span>
                <span className="text-xs text-fcc-gray">one-time, 4-6 week implementation</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] sm:flex sm:flex-wrap">
              {pilotFeatures.map((feature) => (
                <span key={feature} className="border border-fcc-border bg-fcc-panel px-2 py-1 text-fcc-cream">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="border-2 border-fcc-border bg-fcc-black p-4 shadow-fcc-accent">
              <div className="text-xs uppercase tracking-[0.2em] text-fcc-gray">What's included in the pilot</div>
              <ol className="mt-4 space-y-3 text-xs text-fcc-muted">
                {pilotSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-6 min-w-[24px] items-center justify-center border border-fcc-border bg-fcc-panel text-[10px] text-fcc-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-fcc-cream">{step.title}</div>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-3 border-2 border-fcc-border bg-fcc-black p-4 shadow-fcc-dark">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-fcc-gray">
                Pilot montage
                <span className="text-fcc-accent">Claude + dashboards</span>
              </div>
              <video ref={pilotVideoRef} className="w-full" src="/10.mp4" poster="/FCC_Homepage.png" controls playsInline />
              <p className="text-sm text-fcc-muted">See the setup wizard, AI assistant, and automation console we deploy beside your team.</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-fcc-border bg-fcc-black px-3 py-2 text-xs uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
              >
                <TerminalSquare className="h-4 w-4" />
                Reserve my pilot slot
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {personaCards.map((persona) => (
              <div key={persona.title} className={`flex flex-col justify-between border-2 border-fcc-border bg-fcc-panel p-4 ${persona.shadow}`}>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-fcc-accent">{persona.title}</div>
                  <p className="mt-2 text-xs text-fcc-muted">{persona.description}</p>
                </div>
                <ul className="mt-4 space-y-1 text-[11px] text-fcc-cream">
                  {persona.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 border border-fcc-border bg-fcc-black px-4 py-4 text-xs text-fcc-muted sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-fcc-gray">Limited early access</div>
              <p>The $999 AI CFO implementation pilot is limited to the first 10 businesses.</p>
            </div>
            <div className="flex flex-col items-start text-[11px] sm:items-end">
              <span className="text-fcc-cream">Interested in the pilot?</span>
              <span>
                Founder: Sayeem Khan –{" "}
                <a href="mailto:sayeem@daywinlabs.com" className="underline hover:text-fcc-accent">
                  sayeem@daywinlabs.com
                </a>
              </span>
              <span>
                Website:{" "}
                <a href="https://www.daywinlabs.com" className="underline hover:text-fcc-accent">
                  www.daywinlabs.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <VideoModal open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </PageShell>
  );
};

