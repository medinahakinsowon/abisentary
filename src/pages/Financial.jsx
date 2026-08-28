import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
// import FinancialHeroArt from "../components/FinancialHeroArt";
// import FinancialChallenges from "../components/FinancialChallenges";
import CTABanner from "../components/CTABanner";
import BacktoTop from "../components/BacktoTop";

const stats = [
  { value: "24/7", label: "Transaction monitoring" },
  { value: "CBN · NDPR · PCI DSS", label: "Compliance alignment" },
  { value: "Rapid", label: "Fraud incident response" },
  { value: "Certified", label: "Financial-sector analysts" },
];

const segments = [
  "Commercial Banks",
  "Fintechs",
  "Payment Processors",
  "Insurance",
  "Microfinance",
  "Investment Firms",
];

export default function FinancialInstitutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Industry Focus</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              financial Institutions.{" "}
              <span className="text-signal-blue">
                Security.
              </span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
              Secure Your Core Banking Infrastructure and Protect User Funds From Sophisticated Fraud Rings
            </p>
            <div className="mb-11 flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-signal-blue px-7 py-3.5 text-[15px] font-semibold text-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
              >
                Talk To An Industry Expert
              </Link>
              {/* <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded border border-perimeter px-7 py-3.5 text-[15px] font-semibold text-paper transition hover:border-signal-blue hover:bg-signal-blue/10"
              >
                Talk to us
              </Link> */}
            </div>
            <div className="flex flex-wrap items-center gap-4.5 font-mono text-xs uppercase tracking-wider text-paper-faint">
              <span>Serving</span>
              {segments.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-4.5 before:content-['/'] before:text-perimeter"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <FinancialHeroArt />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-perimeter-soft px-8 py-10">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 font-mono text-[22px] font-semibold text-signal-blue sm:text-[26px]">
                {s.value}
              </div>
              <div className="font-mono text-[13px] text-paper-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinancialChallenges />

      {/* Who we serve */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            Who we serve
          </div>
          <h2 className="mb-7 text-[28px] sm:text-[32px]">
            Across every corner of financial services.
          </h2>
          <div className="flex flex-wrap gap-3">
            {segments.map((s) => (
              <span
                key={s}
                className="rounded-full border border-perimeter px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <CTABanner
            title="Not sure where your institution is exposed?"
            body="Talk to a specialist who understands financial-sector threats and compliance — not generic IT security."
            ctaLabel="Request a security audit"
          />
        </div>
      </section>

      <BacktoTop />
    </Layout>
  );
}



 function FinancialHeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <radialGradient id="finGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#155DFC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#155DFC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="200" r="190" fill="url(#finGlow)" />

        {/* Reference rings, matching the site's radar/orbit motif */}
        <circle cx="210" cy="200" r="175" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="200" r="125" stroke="#26365c" strokeWidth="1" />

        {/* Bank facade */}
        <g>
          {/* Pediment (roof triangle) */}
          <path d="M130 150L210 108L290 150Z" stroke="#4B83FF" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(21,93,252,0.06)" />
          {/* Entablature bar under roof */}
          <rect x="126" y="150" width="168" height="10" fill="rgba(21,93,252,0.1)" stroke="#4B83FF" strokeWidth="1.3" />
          {/* Columns */}
          {[142, 172, 202, 232, 262].map((x) => (
            <rect key={x} x={x} y="164" width="10" height="90" fill="rgba(21,93,252,0.08)" stroke="#4B83FF" strokeWidth="1.2" />
          ))}
          {/* Base steps */}
          <rect x="118" y="254" width="184" height="9" fill="rgba(21,93,252,0.1)" stroke="#4B83FF" strokeWidth="1.2" />
          <rect x="108" y="263" width="204" height="9" fill="rgba(21,93,252,0.08)" stroke="#26365c" strokeWidth="1.2" />
        </g>

        {/* Shield overlay - protection */}
        <g>
          <path
            d="M210 190L246 203V228C246 253 231 271 210 280C189 271 174 253 174 228V203L210 190Z"
            fill="#0a1020"
            stroke="#4B83FF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M197 233L206 242L224 220" stroke="#FFB020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Transaction / data nodes flowing toward the shield */}
        <g stroke="#26365c" strokeDasharray="3 4">
          <line x1="70" y1="120" x2="174" y2="205" />
          <line x1="60" y1="260" x2="174" y2="235" />
          <line x1="350" y1="130" x2="246" y2="205" />
          <line x1="360" y1="270" x2="246" y2="235" />
        </g>
        <circle className="animate-blip" cx="70" cy="120" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:0.6s]" cx="60" cy="260" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:1.2s]" cx="350" cy="130" r="5" fill="#FFB020" />
        <circle className="animate-blip [animation-delay:1.8s]" cx="360" cy="270" r="5" fill="#4B83FF" />

        {/* Small currency glyphs on two nodes to read as "transactions" */}
        <text x="70" y="124" textAnchor="middle" fontSize="7" fill="#0a1020" fontWeight="700">$</text>
        <text x="360" y="274" textAnchor="middle" fontSize="7" fill="#0a1020" fontWeight="700">$</text>
      </svg>
    </div>
  );
}



const pairs = [
  {
    challenge: {
      title: "Real-Time Fraud & Account Takeover",
      body: "Attackers increasingly target customer accounts through credential stuffing, SIM-swap, and social engineering.",
    },
    solution: {
      title: "24/7 Fraud & Threat Monitoring",
      body: "Continuous transaction and access monitoring with real-time alerts the moment anomalous behavior is detected.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L19 5.5V10C19 14.5 16 18.3 11 19.7C6 18.3 3 14.5 3 10V5.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Regulatory Compliance Pressure",
      body: "CBN, NDPR, and PCI DSS requirements keep evolving, and non-compliance carries real financial and reputational risk.",
    },
    solution: {
      title: "Compliance Readiness Programs",
      body: "We map your controls against CBN guidelines, NDPR, and PCI DSS, then close the gaps before your next audit.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M6 2.5H13L17 6.5V19H6V2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M13 2.5V6.5H17" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8.5 11.5L10.2 13L14 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Legacy Core Banking Infrastructure",
      body: "Older core banking systems weren't built for today's threat landscape, creating hard-to-patch vulnerabilities.",
    },
    solution: {
      title: "Infrastructure Security Audits",
      body: "Deep assessments of core banking and surrounding systems, with a prioritized, practical remediation plan.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8.5H19" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 12.5H15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Third-Party & Vendor Risk",
      body: "Payment processors, fintech partners, and vendors extend your attack surface beyond your own walls.",
    },
    solution: {
      title: "Vendor & Supply Chain Risk Reviews",
      body: "We assess the security posture of critical vendors and partners before they become your weakest link.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Business Email Compromise & Payment Fraud",
      body: "Fraudulent payment instructions and executive impersonation cost financial institutions millions each year.",
    },
    solution: {
      title: "Email Security & Payment Verification",
      body: "Layered email authentication and out-of-band verification protocols that stop fraudulent transfers before they happen.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <rect x="2.5" y="4.5" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 5.5L11 12L19 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Insider Threats",
      body: "Employees and contractors with privileged access represent one of the hardest risks to detect.",
    },
    solution: {
      title: "Insider Threat & Access Monitoring",
      body: "Behavioral monitoring and least-privilege access controls that catch misuse without slowing your team down.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7.5" r="3.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.5 18C5.2 14 7.7 11.7 11 11.7C14.3 11.7 16.8 14 17.5 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Arrow() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center py-2 lg:py-0 lg:px-2">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="rotate-90 text-perimeter lg:rotate-0">
        <path d="M3 11H19M19 11L13 5M19 11L13 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

 function FinancialChallenges() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            Challenges &amp; solutions
          </div>
          <h2 className="text-[28px] sm:text-[32px]">What financial institutions are up against — and what we do about it.</h2>
          <p className="mb-0 text-[17px]">
            Six recurring risk areas we see across banks, fintechs, and payment providers, paired with how Abisentry
            addresses each one.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {pairs.map((pair) => (
            <div
              key={pair.challenge.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-perimeter bg-deep-steel lg:flex-row lg:items-stretch"
            >
              {/* Challenge */}
              <div className="flex-1 border-b border-perimeter-soft p-7 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-alert-amber">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-alert-amber/30 bg-alert-amber/10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1.5L11 10.5H1L6 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Challenge
                </div>
                <h3 className="mb-1.5 text-[17px]">{pair.challenge.title}</h3>
                <p className="mb-0 text-[14.5px]">{pair.challenge.body}</p>
              </div>

              <Arrow />

              {/* Solution */}
              <div className="flex-1 p-7">
                <div className="mb-3 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-signal-blue">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-signal-blue/30 bg-signal-blue/10 text-signal-blue">
                    {pair.icon}
                  </span>
                  Our solution
                </div>
                <h3 className="mb-1.5 text-[17px]">{pair.solution.title}</h3>
                <p className="mb-0 text-[14.5px]">{pair.solution.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
