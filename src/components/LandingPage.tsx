import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  BarChart,
  CheckCircle2,
  Clock3,
  Database,
  Github,
  LayoutDashboard,
  Lightbulb,
  Linkedin,
  Mail,
  MessageSquare,
  PlayCircle,
  ScrollText,
  ShieldCheck,
  Star,
} from "lucide-react";
import { PageShell } from "./layout/PageShell";
import { VideoModal } from "./VideoModal";

const heroStats = [
  { value: "24+", label: "Hours saved every week" },
  { value: "98.2%", label: "Accuracy you can rely on" },
  { value: "120+", label: "Systems working seamlessly" },
];

const trustedLogos = [
  { name: "Airbnb", src: "/airbnb_logo.svg" },
  { name: "Uber", src: "/uber_logo.svg" },
  { name: "Stripe", src: "/Stripe_logo.svg" },
  { name: "Plaid", src: "/Plaid_logo.svg" },
  { name: "Xero", src: "/Xero_logo.svg" },
  { name: "NetSuite", src: "/Netsuite_logo.svg" },
  { name: "QuickBooks", src: "/Quickbooks_logo.svg" },
];

const problemCards = [
  {
    title: "Too many logins",
    description: "Cash visibility is spread across too many tools.",
    icon: LayoutDashboard,
  },
  {
    title: "Manual reporting",
    description: "Hours of manual spreadsheet reporting.",
    icon: ScrollText,
  },
  {
    title: "Slow answers",
    description: "Even basic financial questions take hours to resolve.",
    icon: Clock3,
  },
];

const solutionHighlights = ["17.2-month avg runway", "<2 hr close", "1-click decks"];

const walkthroughSections = [
  {
    title: "Guided Setup Wizard",
    description: "FCC walks your team through secure, self-hosted deployment in days.",
    bullets: [
      "Self-hosted instructions keep credentials in your VPC",
      "Pre-built connectors for Plaid, Stripe, payroll, ERP",
      "Health checks confirm every automation works",
    ],
    media: { type: "image", src: "/FCC_Setup_Page.png", alt: "FCC setup wizard" },
  },
  {
    title: "Financial Assistant Chat",
    description: "Glass-box chat pulls bank, payroll, and SaaS data together with citations.",
    bullets: [
      "Shared history across founders, finance, and boards",
      "Role-based controls keep sensitive data segmented",
      "Answers export directly into board or investor docs",
    ],
    media: { type: "image", src: "/FCC_AI_Assistant_Chat.png", alt: "Financial assistant conversation" },
  },
  {
    title: "Claude + FCC Copilots",
    description: "Use AI copilots to draft board answers, vendor approvals, and hiring guidance in seconds.",
    bullets: [
      "Ask natural-language questions tied to secure data",
      "Every response links back to the source system",
      "Suggested next steps make decisions automatic",
    ],
    media: {
      type: "video",
      src: "/FCC_AI_Demo_Generate_Q4_Financial_Summary.mp4",
      poster: "/FCC_AI_Assistant_Chat.png",
      alt: "FCC Copilot demo",
    },
  },
  {
    title: "Command Center Dashboard",
    description: "All cash positions, burn pacing, and forecast toggles land in one live cockpit.",
    bullets: [
      "Live runway reforecasts when burn or hiring shifts",
      "Variance flags highlight what changed overnight",
      "Executive-ready cards show cash, ARR, and spend",
    ],
    media: { type: "image", src: "/FCC_Ultimate_Dashboard.png", alt: "FCC dashboard overview" },
  },
];

const timelineSteps = [
  {
    label: "Ask",
    title: '"Can we hire three more AEs in May?"',
    description: "Type plain English and pull cash, burn, and ARR live.",
    icon: MessageSquare,
  },
  {
    label: "Analyze",
    title: "FCC syncs bank, Stripe, payroll, and headcount instantly.",
    description: "Variance, trend, and anomaly checks run in the background.",
    icon: Database,
  },
  {
    label: "Recommend",
    title: "You get sourced steps and the board-ready narrative.",
    description: "Every answer links to the originating table or ledger.",
    icon: Lightbulb,
  },
];

const automationReports = [
  { title: "Audit", icon: BarChart, body: "Daily pulse drops runway, burn swing, and what changed." },
  { title: "Compliance", icon: ShieldCheck, body: "Vendor spike? FCC tags the owner, risk, and next fix." },
  { title: "Automation", icon: ScrollText, body: "Weekly board packet auto-building with charts and live links." },
];

const testimonialCards = [
  {
    quote: "FCC replaced four dashboards and turned our finance review into a 10-minute ritual.",
    name: "Lena Ortiz",
    role: "Founder & CEO, Northwind Freight",
    initials: "LO",
  },
  {
    quote: "Answers that used to take three analysts a week now land in my inbox every morning.",
    name: "Caleb Mensah",
    role: "Co-founder, Signalwave",
    logo: "/Plaid_logo.svg",
    initials: "CM",
  },
];

const securityPillars = [
  {
    title: "Self-Hosted & Private Cloud",
    body: "Deploy inside your VPC with your logging and key management.",
    bullets: ["Credentials never leave your VPC", "SOC2-ready policies", "Granular RBAC controls"],
    icon: ShieldCheck,
  },
  {
    title: "Access & Auditability",
    body: "Every action, prompt, and export is stamped for review.",
    bullets: ["Live audit feed", "Multi-admin approvals", "AI answers cite source tables"],
    icon: BadgeCheck,
  },
  {
    title: "Enterprise Readiness",
    body: "SLA-backed delivery with separation between demo and live tenants.",
    bullets: ["Zero-trust defaults", "SAML + SCIM support", "24/7 security contact"],
    icon: BadgeDollarSign,
  },
];

const pilotChecklist = [
  "Live AI CFO audit",
  "Self-hosted deployment",
  "Integrations connected (Plaid/Stripe/payroll/ERP)",
  "AI CFO workflows",
  "Ongoing support",
];

const founderBullets = [
  "Founder and product lead at Daywin Labs (FCC)",
  "Hands-on with every AI CFO pilot implementation",
  "Helps VC-backed teams self-host finance automations safely",
];

const founderSocials = [
  { label: "GitHub", href: "https://github.com/KhanSayeem", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sayeem-khan-7657732b7/", icon: Linkedin },
  { label: "Email", href: "mailto:sayeem@daywinlabs.com", icon: Mail },
];

export const LandingPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <PageShell className="pt-32 pb-24">
      <div className="space-y-24 bg-fcc-black">
        <section id="hero" className="-mt-12 px-3 sm:px-5">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-fcc-black via-fcc-black/80 to-fcc-panel/80 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)] lg:p-14">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Financial Command Center AI</div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold leading-tight text-fcc-cream sm:text-5xl lg:text-6xl">Your AI CFO, self-hosted and answering in seconds.</h1>
                  <p className="text-base text-fcc-muted">
                    FCC unifies banking, payments, payroll, and SaaS data into one AI command center so finance leaders can make calls with conviction.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded border border-fcc-accent bg-fcc-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fcc-black"
                  >
                    Book a Live AI CFO Audit
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded border border-fcc-border/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fcc-black"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch the 2-min Pilot Tour
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded border border-fcc-border/60 bg-fcc-panel/40 p-4 text-center animate-in fade-in-50">
                      <p className="text-4xl font-semibold text-fcc-cream">{stat.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-fcc-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4 transition hover:-translate-y-1">
                  <img src="/FCC_Overview.png" alt="Financial Command Center cockpit" className="h-full w-full rounded-lg object-cover shadow-[0_24px_120px_rgba(0,0,0,0.55)]" />
                  <p className="text-center text-[11px] uppercase tracking-[0.35em] text-fcc-accent">AI powered Financial Automation</p>
                </div>
                <div className="rounded-xl bg-fcc-black/70 p-3 shadow-fcc-accent">
                  <div className="overflow-hidden rounded-xl">
                    <video className="h-full w-full object-cover" autoPlay loop muted playsInline poster="/FCC_AI_Assistant_Chat.png">
                      <source src="/10.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="mt-3 text-center text-[11px] uppercase tracking-[0.3em] text-fcc-gray">29-second live walkthrough</p>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-gray">Trusted across enterprise finance stacks</p>
              <div className="overflow-hidden rounded-xl bg-fcc-cream px-6 py-4">
                <div
                  className="flex min-w-max items-center gap-12 animate-marquee"
                  style={{ animationDirection: "reverse", animationDuration: "26s" }}
                >
                  {[0, 1].map((loop) => (
                    <React.Fragment key={`logo-loop-${loop}`}>
                      {trustedLogos.map((logo) => (
                        <img key={`${logo.name}-${loop}`} src={logo.src} alt={`${logo.name} logo`} className="h-8 w-auto flex-none md:h-10" loading="lazy" />
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10 rounded-2xl bg-fcc-panel/30 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Problem → Agitate → Solve</p>
                <h2 className="mt-3 text-3xl font-semibold text-fcc-cream">Financial insights delivered instantly and confidently.</h2>
              </div>
              <p className="max-w-xl text-sm text-fcc-muted">FCC collapses disconnected financial platforms, manual reporting, auditing, and compliance into one AI-powered command center.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl bg-fcc-black/70 p-6 shadow-fcc-accent animate-in fade-in-50">
                <p className="text-xs uppercase tracking-[0.3em] text-fcc-accent">Problem</p>
                <h3 className="mt-3 text-2xl font-semibold text-fcc-cream">What blocks finance today</h3>
                <ul className="mt-6 space-y-3">
                  {problemCards.map((card) => (
                    <li key={card.title} className="flex items-start gap-3 text-sm text-fcc-muted">
                      <card.icon className="mt-0.5 h-5 w-5 text-fcc-accent" />
                      <div>
                        <p className="font-semibold text-fcc-cream">{card.title}</p>
                        <p>{card.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-fcc-black/70 p-6 shadow-fcc-accent animate-in fade-in-50" style={{ animationDelay: "0.15s" }}>
                <p className="text-xs uppercase tracking-[0.3em] text-fcc-accent">Solve</p>
                <h3 className="mt-3 text-2xl font-semibold text-fcc-cream">Our solution</h3>
                <p className="mt-3 text-sm text-fcc-muted">One platform for your financial ecosystem.</p>
                <ul className="mt-6 space-y-3">
                  {["Automated reports", "Deep AI insights", "Compliance & audit trail", "AI/ML forecasting", "AI agents for natural language query"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-fcc-cream">
                      <CheckCircle2 className="h-5 w-5 text-fcc-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="space-y-16 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Product walkthrough</p>
            <h2 className="mt-3 text-3xl font-semibold text-fcc-cream">Every finance signal in one command center.</h2>
            <p className="mt-3 text-sm text-fcc-muted">Screenshots, copilots, and guided flows that keep operators and boards aligned.</p>
          </div>

          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            {walkthroughSections.map((section, index) => (
              <div
                key={section.title}
                className="grid items-center gap-8 rounded-2xl bg-fcc-black/60 p-6 shadow-[0_12px_60px_rgba(0,0,0,0.45)] transition hover:border-fcc-accent hover:-translate-y-1 animate-in fade-in-50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="rounded-2xl bg-fcc-black/70 p-3 shadow-fcc-accent">
                  <div className="overflow-hidden rounded-xl">
                    {section.media.type === "video" ? (
                      <video className="h-full w-full object-cover" autoPlay loop muted playsInline poster={section.media.poster} preload="metadata">
                        <source src={section.media.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={section.media.src} alt={section.media.alt} className="h-full w-full object-cover" loading="lazy" />
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-fcc-gray">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold text-fcc-cream">{section.title}</h3>
                  <p className="text-sm text-fcc-muted">{section.description}</p>
                  <ul className="space-y-3 text-sm text-fcc-cream">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-fcc-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Automation + Board-Level Answers</p>
            <h2 className="mt-3 text-3xl font-semibold text-fcc-cream">Ask → Analyze → Recommend</h2>
            <p className="mt-3 text-sm text-fcc-muted">FCC handles the grunt work so your board, exec team, and finance org see the same truth.</p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 rounded-2xl bg-fcc-panel/30 p-6 md:grid-cols-3">
              {timelineSteps.map((step, index) => (
                <div key={step.label} className="relative flex flex-col gap-3 rounded-2xl bg-fcc-black/70 p-5 animate-in fade-in-50" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-fcc-accent">
                    <step.icon className="h-5 w-5 text-fcc-accent" />
                    {step.label}
                  </div>
                  <p className="text-base font-semibold text-fcc-cream">{step.title}</p>
                  <p className="text-sm text-fcc-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {automationReports.map((card, index) => (
              <div key={card.title} className="rounded-xl bg-fcc-black/70 p-6 shadow-fcc-accent transition hover:-translate-y-1 animate-in fade-in-50" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-fcc-accent">
                  <card.icon className="h-5 w-5 text-fcc-accent" />
                  {card.title}
                </div>
                <p className="mt-3 text-sm text-fcc-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-fcc-panel/30 p-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-fcc-black/60">
              <video className="h-full w-full object-cover" autoPlay loop muted playsInline poster="/FCC_AI_Assistant_Chat.png">
                <source src="/FCC_AI_Demo_Generate_Q4_Financial_Summary.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">AI CFO Briefing</p>
              <h2 className="text-3xl font-semibold text-fcc-cream">Command your finances with FCC&apos;s AI Copilots.</h2>
              <blockquote className="border-l-2 border-fcc-accent pl-4 text-lg text-fcc-cream">“That demo sold our board.” — Priya Shah, COO</blockquote>
              <p className="text-sm text-fcc-muted">Show your stakeholders an AI CFO briefing that links every answer to live data. FCC proves value in under half a minute.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-fcc-accent bg-fcc-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
              >
                Book a Live AI CFO Audit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-fcc-border/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
              >
                Talk to Us
              </a>
            </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-8 rounded-2xl bg-fcc-black/60 p-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Proof from founders</p>
                <h2 className="mt-2 text-3xl font-semibold text-fcc-cream">Revenue leaders run on FCC.</h2>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-fcc-accent bg-fcc-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
              >
                Book a Live AI CFO Audit
              </a>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
              {testimonialCards.map((card, index) => (
                <article
                  key={card.name}
                  className="flex min-w-[280px] flex-col gap-4 rounded-2xl bg-fcc-panel/40 p-6 shadow-[0_12px_60px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 animate-in fade-in-50 snap-center"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-1 text-fcc-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={`${card.name}-star-${starIndex}`} className="h-4 w-4 fill-fcc-accent text-fcc-accent" />
                    ))}
                  </div>
                  <p className="text-lg text-fcc-cream">{card.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border border-fcc-border/70 bg-fcc-black/60 text-sm font-semibold uppercase text-fcc-cream">
                    {card.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fcc-cream">{card.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-fcc-gray">{card.role}</p>
                  </div>
                  {card.logo && <img src={card.logo} alt={`${card.name} company logo`} className="ml-auto h-6 w-auto opacity-80" loading="lazy" />}
                </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-8 rounded-2xl bg-fcc-panel/40 p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Security & Compliance</p>
                  <h2 className="mt-2 text-3xl font-semibold text-fcc-cream">SOC2-ready. Source-linked answers.</h2>
                </div>
                <div className="rounded border border-fcc-accent px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-fcc-accent">SOC2 Ready</div>
              </div>
            <div className="grid gap-4 md:grid-cols-3">
              {securityPillars.map((pillar, index) => (
                <div key={pillar.title} className="rounded-xl bg-fcc-black/70 p-6 shadow-fcc-accent animate-in fade-in-50" style={{ animationDelay: `${index * 0.05}s` }}>
                  <pillar.icon className="mb-4 h-8 w-8 text-fcc-accent" />
                  <h3 className="text-xl font-semibold text-fcc-cream">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-fcc-muted">{pillar.body}</p>
                  <ul className="mt-4 space-y-2 text-sm text-fcc-cream">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-fcc-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-fcc-black/70 p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Pilot Program</p>
                <h2 className="mt-3 text-3xl font-semibold text-fcc-cream">Launch your AI CFO in 30 days for $999.</h2>
                <p className="mt-3 text-sm text-fcc-muted">30-day pilot, refund guarantee, zero lock-in. FCC handles everything from audit to live workflows.</p>
              </div>
              <ul className="space-y-3 text-sm text-fcc-cream">
                {pilotChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-fcc-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
              <div className="space-y-6 rounded-xl bg-fcc-panel/60 p-6 shadow-fcc-accent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-fcc-gray">Pilot pricing</p>
                  <p className="mt-1 text-3xl font-semibold text-fcc-cream">$999 one-time</p>
                </div>
                <span className="rounded border border-fcc-accent px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-fcc-black bg-fcc-accent">3 seats left</span>
              </div>
              <div className="space-y-3 text-sm text-fcc-muted">
                <p>Includes deployment support, workflow automation, and co-piloting sessions with our finance team.</p>
                <p>No lock-in. Refund if ROI targets aren&apos;t hit in 30 days.</p>
              </div>
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded border border-fcc-accent bg-fcc-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
                >
                  Book a Live AI CFO Audit
                </a>
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded border border-fcc-border/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl grid gap-6 rounded-2xl bg-fcc-panel/40 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="mx-auto w-full max-w-sm lg:ml-0">
              <div className="overflow-hidden rounded-2xl bg-fcc-black/60">
                <img src="/Profile_Picture.png" alt="Sayeem Khan headshot" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-fcc-accent">Founder</p>
              <h2 className="text-3xl font-semibold text-fcc-cream">Sayeem Khan, Founder & CEO</h2>
              <p className="text-sm text-fcc-muted">
                As the founder of Daywin Labs, Sayeem guides every FCC pilot from the first audit to the final automation checklist so finance leaders and founders get answers they trust
                without handing data to an outside vendor.
              </p>
              <ul className="space-y-2 text-sm text-fcc-cream">
                {founderBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-fcc-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-fcc-accent bg-fcc-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
                >
                  Book a Live AI CFO Audit
                </a>
                <a
                  href="mailto:sayeem@daywinlabs.com"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded border border-fcc-border/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                >
                  Email Founder
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2 lg:justify-start">
                {founderSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 rounded border border-fcc-border/70 px-3 py-2 text-sm text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 md:hidden">
        <a
          href="/contact"
          className="flex-1 rounded border border-fcc-accent bg-fcc-accent px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
        >
          Book a Live AI CFO Audit
        </a>
      </div>

      <VideoModal open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </PageShell>
  );
};


