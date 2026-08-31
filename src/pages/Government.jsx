import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
// import GovernmentHeroArt from "../components/GovernmentHeroArt";
// import GovernmentChallenges from "../components/GovernmentChallenges";
import CTABanner from "../components/CTABanner";
import BacktoTop from "../components/BacktoTop";

const stats = [
  { value: "24/7", label: "Threat monitoring" },
  { value: "NDPR", label: "Compliance alignment" },
  { value: "Rapid", label: "Incident response" },
  { value: "Certified", label: "Public-sector analysts" },
];

const segments = [
  "Federal Agencies",
  "State & Local Government",
  "Public Utilities",
  "Law Enforcement",
  "Education Boards",
  "Public Health Agencies",
];

export default function Government() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Industry · Government</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              Cybersecurity built for{" "}
              <span className="text-signal-blue-bright">
                public institutions.
              </span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
             Defend critical national infrastructure and citizen data against advanced persistence threats.
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
          <GovernmentHeroArt />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-perimeter-soft px-8 py-10">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 font-mono text-[22px] font-semibold text-signal-blue-bright sm:text-[26px]">
                {s.value}
              </div>
              <div className="font-mono text-[13px] text-paper-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GovernmentChallenges />

      {/* Who we serve */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
            Who we serve
          </div>
          <h2 className="mb-7 text-[28px] sm:text-[32px]">
            Across every level of public service.
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
            title="Not sure where your agency is exposed?"
            body="Talk to a specialist who understands public-sector threats, budgets, and accountability — not generic IT security."
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
      title: "Protecting Citizen Data at Scale",
      body: "Agencies hold vast amounts of sensitive citizen data across many systems, making them a high-value target for large-scale breaches.",
    },
    solution: {
      title: "Data Protection & Access Governance",
      body: "Centralized visibility and access controls across departments, protecting citizen data without slowing service delivery.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="3" width="14" height="16" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 8H14M8 12H14M8 16H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Legacy & Fragmented IT Systems",
      body: "Public sector infrastructure is often a patchwork of legacy systems built over decades, with inconsistent security standards.",
    },
    solution: {
      title: "Infrastructure Security Audits",
      body: "Comprehensive assessments across legacy and modern systems, with a prioritized roadmap that respects budget constraints.",
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
      title: "Nation-State & Politically Motivated Attacks",
      body: "Government targets face more sophisticated, well-resourced adversaries than most private-sector organizations.",
    },
    solution: {
      title: "Advanced Threat Intelligence & Monitoring",
      body: "Continuous monitoring informed by threat intelligence tailored to politically and financially motivated attackers.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L19 5.5V10C19 14.5 16 18.3 11 19.7C6 18.3 3 14.5 3 10V5.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Regulatory & Public Accountability Requirements",
      body: "Public institutions face strict data-protection mandates and must demonstrate accountability to oversight bodies.",
    },
    solution: {
      title: "Compliance & Audit Readiness",
      body: "We help you meet NDPR and sector-specific mandates, with documentation ready for oversight and public scrutiny.",
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
      title: "Interagency & Third-Party Data Sharing",
      body: "Data flows between agencies, contractors, and partners create numerous points where sensitive information can leak.",
    },
    solution: {
      title: "Secure Data-Sharing Frameworks",
      body: "Controls and monitoring for how data moves between agencies and partners, reducing exposure without blocking collaboration.",
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
      title: "Limited Budgets Against Growing Threats",
      body: "Public sector budgets rarely keep pace with the sophistication of modern cyber threats.",
    },
    solution: {
      title: "Right-Sized, Prioritized Security Programs",
      body: "We focus investment on the highest-impact protections first, maximizing security within real budget constraints.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L8 11L13 15L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6H19V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

 function GovernmentChallenges() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
            Challenges &amp; solutions
          </div>
          <h2 className="text-[28px] sm:text-[32px]">What public institutions are up against — and what we do about it.</h2>
          <p className="mb-0 text-[17px]">
            Six recurring risk areas we see across government agencies and public bodies, paired with how Abisentry
            addresses each one.
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
                <div className="mb-3 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-signal-blue-bright">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-signal-blue/30 bg-signal-blue/10 text-signal-blue-bright">
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





 function GovernmentHeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <radialGradient id="govGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#155DFC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#155DFC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="200" r="190" fill="url(#govGlow)" />

        {/* Reference rings, matching the site's radar/orbit motif */}
        <circle cx="210" cy="200" r="175" stroke="#26365c" strokeWidth="1" />

        {/* Interagency data network around the seal */}
        <g stroke="#26365c" strokeDasharray="3 4">
          <line x1="60" y1="110" x2="130" y2="150" />
          <line x1="60" y1="290" x2="130" y2="250" />
          <line x1="360" y1="110" x2="290" y2="150" />
          <line x1="360" y1="290" x2="290" y2="250" />
        </g>
        <circle className="animate-blip" cx="60" cy="110" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:0.5s]" cx="60" cy="290" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:1s]" cx="360" cy="110" r="5" fill="#FFB020" />
        <circle className="animate-blip [animation-delay:1.5s]" cx="360" cy="290" r="5" fill="#4B83FF" />

        {/* Official seal / emblem - scalloped outer edge */}
        <g>
          {(() => {
            const points = [];
            const outerR = 110;
            const innerR = 98;
            const cx = 210, cy = 200;
            const scallops = 24;
            for (let i = 0; i < scallops * 2; i++) {
              const angle = (Math.PI * 2 * i) / (scallops * 2);
              const r = i % 2 === 0 ? outerR : innerR;
              points.push(`${(cx + r * Math.sin(angle)).toFixed(1)},${(cy - r * Math.cos(angle)).toFixed(1)}`);
            }
            return (
              <polygon points={points.join(" ")} fill="rgba(21,93,252,0.05)" stroke="#4B83FF" strokeWidth="1.4" strokeLinejoin="round" />
            );
          })()}
          <circle cx="210" cy="200" r="82" stroke="#26365c" strokeWidth="1" />

          {/* Five-pointed star at center */}
          <path
            d="M210 148L221 180L255 180L227 200L238 233L210 213L182 233L193 200L165 180L199 180Z"
            fill="rgba(21,93,252,0.12)"
            stroke="#4B83FF"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </g>

        {/* Shield overlay - protection */}
        <g>
          <path
            d="M210 258L246 271V296C246 321 231 339 210 348C189 339 174 321 174 296V271L210 258Z"
            fill="#0a1020"
            stroke="#4B83FF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M197 301L206 310L224 288" stroke="#2fd67a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}