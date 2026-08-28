import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import CTABanner from "../components/CTABanner";
import BacktoTop from "../components/BacktoTop";

const stats = [
  { value: "Flexible", label: "Scoped to your budget" },
  { value: "No lock-in", label: "Month-to-month support" },
  { value: "Rapid", label: "Onboarding & setup" },
  { value: "Certified", label: "Security analysts" },
];

const segments = [
  "Startups",
  "Retail & E-commerce",
  "Professional Services",
  "Logistics",
  "Agencies",
  "Manufacturing",
];

export default function SMEs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Industry Focus</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              SMEs Security{" "}
              {/* <span className="text-signal-blue-bright">
                sized for your business.
              </span> */}
            </h1>
            <p className="mb-8 max-w-md text-lg">
              Enterprise-grade security packaged and priced for growing digital
              businesses
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
              <span>Built for</span>
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
          <SMEHeroArt />
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

      <SMEChallenges />

      {/* Who we serve */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
            Who we serve
          </div>
          <h2 className="mb-7 text-[28px] sm:text-[32px]">
            Across every kind of growing business.
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
            title="Not sure where to start?"
            body="Tell us where you're exposed and we'll recommend a plan that actually fits a business your size."
            ctaLabel="Request a security audit"
          />
        </div>
      </section>

      <BacktoTop />
    </Layout>
  );
}







 function SMEHeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <radialGradient id="smeGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#155DFC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#155DFC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="200" r="190" fill="url(#smeGlow)" />

        {/* Reference rings, matching the site's radar/orbit motif */}
        <circle cx="210" cy="200" r="175" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="200" r="125" stroke="#26365c" strokeWidth="1" />

        {/* Growth line rising behind the building */}
        <path
          d="M85 275L140 240L175 258L225 195L265 210L335 130"
          stroke="#FFB020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <circle cx="335" cy="130" r="5" fill="#FFB020" />

        {/* Small storefront / office building */}
        <g>
          {/* Flat roof with slight overhang */}
          <rect x="140" y="163" width="140" height="9" fill="rgba(21,93,252,0.1)" stroke="#4B83FF" strokeWidth="1.4" />
          {/* Building body */}
          <rect x="150" y="172" width="120" height="92" fill="rgba(21,93,252,0.06)" stroke="#4B83FF" strokeWidth="1.5" />
          {/* Storefront window (left) */}
          <rect x="162" y="188" width="38" height="38" fill="rgba(21,93,252,0.1)" stroke="#4B83FF" strokeWidth="1.3" />
          <path d="M162 207H200M181 188V226" stroke="#4B83FF" strokeWidth="1" />
          {/* Door (right) */}
          <rect x="228" y="200" width="30" height="64" fill="rgba(21,93,252,0.1)" stroke="#4B83FF" strokeWidth="1.3" />
          <circle cx="251" cy="232" r="1.6" fill="#4B83FF" />
          {/* Awning */}
          <path d="M156 172L146 188H264L254 172Z" fill="rgba(21,93,252,0.12)" stroke="#4B83FF" strokeWidth="1.2" strokeLinejoin="round" />
        </g>

        {/* Shield overlay - protection */}
        <g>
          <path
            d="M210 158L246 171V196C246 221 231 239 210 248C189 239 174 221 174 196V171L210 158Z"
            fill="#0a1020"
            stroke="#4B83FF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M197 201L206 210L224 188" stroke="#2fd67a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Small team nodes around the building */}
        <circle className="animate-blip" cx="90" cy="150" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:0.6s]" cx="330" cy="230" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:1.2s]" cx="100" cy="300" r="5" fill="#4B83FF" />
      </svg>
    </div>
  );
}





const pairs = [
  {
    challenge: {
      title: "Limited Security Budget & No Dedicated Team",
      body: "Most SMEs can't justify a full in-house security function, leaving gaps that go unnoticed until it's too late.",
    },
    solution: {
      title: "Fractional Security Support",
      body: "Enterprise-grade protection and expertise, scoped and priced for a growing business, without the overhead of a full team.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.5 18C5.2 14 7.7 11.7 11 11.7C14.3 11.7 16.8 14 17.5 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Fast Growth Outpacing Security",
      body: "Scaling headcount, tools, and infrastructure quickly often means security gets bolted on after the fact.",
    },
    solution: {
      title: "Security That Scales With You",
      body: "Right-sized controls that grow alongside your business, built in from day one rather than retrofitted later.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L8 11L13 15L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6H19V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Uncontrolled Use of Cloud & SaaS Tools",
      body: "Employees adopt new apps and AI tools independently, creating blind spots in what data goes where.",
    },
    solution: {
      title: "Cloud & SaaS Visibility",
      body: "Discover and govern the tools your team actually uses, without slowing them down or blocking adoption.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <path d="M6 16A4 4 0 0 1 5.4 8.1 5 5 0 0 1 15.5 6.5 4 4 0 0 1 16.5 14H6Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    challenge: {
      title: "Phishing & Ransomware Exposure",
      body: "Small teams are frequent targets precisely because attackers assume defenses are weaker.",
    },
    solution: {
      title: "Employee Training & Endpoint Protection",
      body: "Practical awareness training paired with monitoring that catches attacks before they spread.",
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
      title: "Compliance Requirements Creeping In",
      body: "Landing bigger clients or entering new markets often means new compliance obligations you didn't have before.",
    },
    solution: {
      title: "Right-Sized Compliance Support",
      body: "We help you meet what's actually required — no more, no less — so compliance doesn't slow down deals.",
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
      title: "Third-Party & Vendor Dependency",
      body: "Most SMEs run on a stack of external vendors and tools, each one a potential point of failure.",
    },
    solution: {
      title: "Vendor Risk Reviews",
      body: "We assess the tools and partners your business depends on, so a vendor's weak link doesn't become yours.",
    },
    icon: (
      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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

 function SMEChallenges() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            Challenges &amp; solutions
          </div>
          <h2 className="text-[28px] sm:text-[32px]">What growing businesses are up against — and what we do about it.</h2>
          <p className="mb-0 text-[17px]">
            Six recurring risk areas we see across SMEs and startups, paired with how Abisentry addresses each one.
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
