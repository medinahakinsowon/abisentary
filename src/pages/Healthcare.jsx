import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import CTABanner from "../components/CTABanner";
import BacktoTop from "../components/BacktoTop";

const stats = [
  { value: "24/7", label: "Threat monitoring" },
  { value: "NDPR", label: "Compliance alignment" },
  { value: "Rapid", label: "Incident response" },
  { value: "Certified", label: "Healthcare-sector analysts" },
];

const segments = [
  "Hospitals",
  "Clinics",
  "Diagnostic Labs",
  "Telemedicine Platforms",
  "Pharmacies",
  "Health Insurance",
];

export default function Healthcare() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Industry Focus</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              Healthcare Security{" "}
              {/* <span className="text-signal-blue-bright">
                healthcare providers.
              </span> */}
            </h1>
            <p className="mb-8 max-w-md text-lg">
              Protect sensitive patient data and ensure compliance with strict
              privacy regulations.
            </p>
            <div className="mb-11 flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-signal-blue px-7 py-3.5 text-[15px] font-semibold text-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
              >
                Talk To An Industry Expert
              </Link>
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
          <HealthcareHeroArt />
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

      <HealthcareChallenges />

      {/* Who we serve */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            Who we serve
          </div>
          <h2 className="mb-7 text-[28px] sm:text-[32px]">
            Across every part of the care continuum.
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
            title="Not sure where your systems are exposed?"
            body="Talk to a specialist who understands healthcare data, devices, and compliance — not generic IT security."
            ctaLabel="Request a security audit"
          />
        </div>
      </section>

      <BacktoTop />
    </Layout>
  );
}

const pairs = [
  {
    challenge: {
      title: "Protecting Sensitive Patient Data",
      body: "Health records contain some of the most sensitive personal data that exists, making providers a prime target for data theft.",
    },
    solution: {
      title: "Data Privacy & Access Controls",
      body: "Encryption, access controls, and monitoring built specifically around patient data and its regulatory requirements.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <rect
          x="4"
          y="3"
          width="14"
          height="16"
          rx="1.6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 8H14M8 12H14M8 16H11"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Regulatory Compliance (NDPR & Health Data Laws)",
      body: "Providers must meet strict data-protection and health-record regulations, with audits and penalties for non-compliance.",
    },
    solution: {
      title: "Compliance Readiness Programs",
      body: "We map your controls against NDPR and healthcare-specific data regulations, closing gaps before your next audit.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path
          d="M6 2.5H13L17 6.5V19H6V2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M13 2.5V6.5H17"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11.5L10.2 13L14 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Legacy Medical Devices & Systems",
      body: "Diagnostic equipment and hospital systems often run outdated software that can't be easily patched.",
    },
    solution: {
      title: "Medical Infrastructure Security Audits",
      body: "Assessments of clinical systems and connected devices, with a remediation plan that doesn't disrupt patient care.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <rect
          x="3"
          y="4"
          width="16"
          height="14"
          rx="1.6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M3 8.5H19" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M7 12.5H15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Ransomware Targeting Hospitals",
      body: "Attackers specifically target healthcare providers, knowing disrupted systems put patient care directly at risk.",
    },
    solution: {
      title: "24/7 Threat Monitoring & Incident Response",
      body: "Continuous monitoring and a rapid-response team ready to contain attacks before they reach critical systems.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L19 5.5V10C19 14.5 16 18.3 11 19.7C6 18.3 3 14.5 3 10V5.5L11 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Third-Party & Vendor Risk",
      body: "Labs, suppliers, and health-tech platforms all connect into your systems, each one a potential entry point.",
    },
    solution: {
      title: "Vendor & Supply Chain Risk Reviews",
      body: "We assess the security posture of the vendors and platforms your facility depends on before they become a liability.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <circle
          cx="15"
          cy="15"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M9.5 9.5L12.5 12.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Remote & Telemedicine Access Risks",
      body: "Remote consultations and staff access from personal devices widen the attack surface beyond hospital walls.",
    },
    solution: {
      title: "Secure Remote Access Controls",
      body: "Strong authentication and monitored access policies that keep telemedicine convenient and secure.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <rect
          x="4"
          y="4"
          width="14"
          height="10"
          rx="1.4"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 18H14M11 14V18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function Arrow() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center py-2 lg:py-0 lg:px-2">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        className="rotate-90 text-perimeter lg:rotate-0"
      >
        <path
          d="M3 11H19M19 11L13 5M19 11L13 17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HealthcareChallenges() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            Challenges &amp; solutions
          </div>
          <h2 className="text-[28px] sm:text-[32px]">
            What healthcare providers are up against — and what we do about it.
          </h2>
          <p className="mb-0 text-[17px]">
            Six recurring risk areas we see across hospitals, clinics, and
            health-tech platforms, paired with how Abisentry addresses each one.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {pairs.map((pair) => (
            <div
              key={pair.challenge.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-perimeter bg-deep-steel-2 lg:flex-row lg:items-stretch"
            >
              {/* Challenge */}
              <div className="flex-1 border-b border-perimeter-soft p-7 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-alert-amber">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-alert-amber/30 bg-alert-amber/10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1.5L11 10.5H1L6 1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                      />
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
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-signal-blue/30 bg-signal-blue/10 text-signal">
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

function HealthcareHeroArt() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="healthGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#155DFC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#155DFC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="200" r="190" fill="url(#healthGlow)" />

        {/* Reference rings, matching the site's radar/orbit motif */}
        <circle cx="210" cy="200" r="175" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="200" r="125" stroke="#26365c" strokeWidth="1" />

        {/* ECG heartbeat line running behind the building */}
        <path
          d="M75 235H120L135 210L150 260L165 235L178 235L195 195L210 235H345"
          stroke="#FFB020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <circle cx="345" cy="235" r="5" fill="#FFB020" />

        {/* Hospital building */}
        <g>
          {/* Flat roof */}
          <rect
            x="140"
            y="150"
            width="140"
            height="9"
            fill="rgba(21,93,252,0.1)"
            stroke="#4B83FF"
            strokeWidth="1.4"
          />
          {/* Building body */}
          <rect
            x="150"
            y="159"
            width="120"
            height="105"
            fill="rgba(21,93,252,0.06)"
            stroke="#4B83FF"
            strokeWidth="1.5"
          />
          {/* Medical cross on facade */}
          <rect
            x="199"
            y="178"
            width="22"
            height="66"
            fill="rgba(21,93,252,0.14)"
            stroke="#4B83FF"
            strokeWidth="1.3"
          />
          <rect
            x="177"
            y="200"
            width="66"
            height="22"
            fill="rgba(21,93,252,0.14)"
            stroke="#4B83FF"
            strokeWidth="1.3"
          />
          {/* Side windows */}
          <rect
            x="160"
            y="178"
            width="14"
            height="14"
            fill="rgba(21,93,252,0.1)"
            stroke="#4B83FF"
            strokeWidth="1.1"
          />
          <rect
            x="246"
            y="178"
            width="14"
            height="14"
            fill="rgba(21,93,252,0.1)"
            stroke="#4B83FF"
            strokeWidth="1.1"
          />
          <rect
            x="160"
            y="228"
            width="14"
            height="14"
            fill="rgba(21,93,252,0.1)"
            stroke="#4B83FF"
            strokeWidth="1.1"
          />
          <rect
            x="246"
            y="228"
            width="14"
            height="14"
            fill="rgba(21,93,252,0.1)"
            stroke="#4B83FF"
            strokeWidth="1.1"
          />
        </g>

        {/* Shield overlay - protection */}
        <g>
          <path
            d="M210 145L246 158V183C246 208 231 226 210 235C189 226 174 208 174 183V158L210 145Z"
            fill="#0a1020"
            stroke="#4B83FF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M188 191H198L202 182L208 201L213 191H232"
            stroke="#2fd67a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Patient-record data nodes flowing toward the shield */}
        <g stroke="#26365c" strokeDasharray="3 4">
          <line x1="75" y1="150" x2="174" y2="190" />
          <line x1="345" y1="150" x2="246" y2="190" />
        </g>
        <circle
          className="animate-blip"
          cx="75"
          cy="150"
          r="5"
          fill="#4B83FF"
        />
        <circle
          className="animate-blip [animation-delay:0.8s]"
          cx="345"
          cy="150"
          r="5"
          fill="#4B83FF"
        />
        <circle
          className="animate-blip [animation-delay:1.4s]"
          cx="95"
          cy="300"
          r="5"
          fill="#4B83FF"
        />
      </svg>
    </div>
  );
}
