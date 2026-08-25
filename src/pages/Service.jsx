import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import { PageHeader } from "../components/HelperComponent";
import ServiceDetail from "../components/ServiceDetail";
import CTABanner from "../components/CTABanner";

const detailItems = [
  {
    title: "Threat Intelligence",
    body: "We track the threat landscape relevant to your sector — from phishing campaigns targeting African fintechs to malware families circulating regionally — and turn raw signals into decisions you can act on this week.",
    points: [
      "Sector-specific threat briefings",
      "Dark web & leaked-credential monitoring",
      "Early warning on active campaigns",
    ],
    visual: (
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
        <circle cx="110" cy="110" r="95" stroke="#26365c" />
        <circle cx="110" cy="110" r="65" stroke="#26365c" />
        <circle cx="110" cy="110" r="35" stroke="#26365c" />
        <circle cx="145" cy="80" r="5" fill="#4B83FF" />
        <circle cx="70" cy="130" r="5" fill="#FFB020" />
        <circle cx="130" cy="150" r="5" fill="#4B83FF" />
        <path d="M110 15V205M15 110H205" stroke="#1c2745" />
      </svg>
    ),
  },
  {
    title: "Cloud Protection",
    body: "Most breaches start with a misconfiguration, not a genius hacker. We audit your cloud environments, lock down access, and keep watch so a small mistake never becomes a headline.",
    points: [
      "Cloud configuration audits",
      "Identity & access management review",
      "Continuous compliance monitoring",
    ],
    reverse: true,
    visual: (
      <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
        <path
          d="M45 100A28 28 0 0 1 41 45 36 36 0 0 1 111 33 28 28 0 0 1 120 100H45Z"
          stroke="#4B83FF"
          strokeWidth="1.6"
          fill="rgba(21,93,252,0.08)"
        />
        <path
          d="M82 60V90M70 78L82 90L94 78"
          stroke="#FFB020"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital Monitoring",
    body: "Enterprise-grade, around-the-clock visibility into your network and endpoints. If something unusual happens at 3am, we see it at 3am — not when someone opens their laptop the next morning.",
    points: [
      "24/7 network & endpoint monitoring",
      "Anomaly detection & alerting",
      "Monthly posture reporting",
    ],
    visual: (
      <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
        <path
          d="M10 100L50 100L65 60L85 120L100 40L120 100L140 100L155 75L175 100L210 100"
          stroke="#4B83FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Penetration Testing",
    body: "We attack your systems before someone else does — networks, applications and, where relevant, your people — then hand you a plain-language report you can actually action.",
    points: [
      "Network & application testing",
      "Social engineering simulations",
      "Prioritized remediation roadmap",
    ],
    reverse: true,
    visual: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        <rect x="30" y="30" width="100" height="100" rx="8" stroke="#26365c" />
        <path
          d="M55 80L73 98L110 55"
          stroke="#4B83FF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital Forensics",
    body: "When something has already gone wrong, we reconstruct exactly what happened — what was accessed, how the attacker got in, and how to make sure they can't do it again.",
    points: [
      "Breach root-cause investigation",
      "Evidence collection & chain of custody",
      "Malware analysis",
    ],
    visual: (
      <svg width="160" height="180" viewBox="0 0 160 180" fill="none">
        <circle cx="70" cy="70" r="45" stroke="#4B83FF" strokeWidth="1.8" />
        <line
          x1="102"
          y1="102"
          x2="135"
          y2="135"
          stroke="#4B83FF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M55 70a15 15 0 0 1 15-15"
          stroke="#FFB020"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Incident Response",
    body: "A calm, practiced team on call the moment things go wrong — containing the breach, minimizing damage, and getting your systems back to normal without the guesswork.",
    points: [
      "Rapid breach containment",
      "System recovery support",
      "Post-incident reporting",
    ],
    reverse: true,
    visual: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        <path
          d="M80 20L140 40V80C140 112 114 134 80 145C46 134 20 112 20 80V40L80 20Z"
          stroke="#4B83FF"
          strokeWidth="1.8"
          fill="rgba(21,93,252,0.08)"
        />
        <path
          d="M80 55V85M80 100V102"
          stroke="#FFB020"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Service() {
  return (
    <Layout>
      <PageHeader
        status={<StatusChip>Capability index</StatusChip>}
        title="Everything a security team would do for you — on call."
        body="Six capabilities, one team. Engage us for a single audit or as your ongoing security operations partner."
      />

      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          {detailItems.map((item, i) => (
            <ServiceDetail
              key={item.title}
              index={String(i + 1).padStart(2, "0")}
              {...item}
            />
          ))}
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <CTABanner
            title="Ready to see where you stand?"
            body="Book a free initial consultation and get a clear picture of your current exposure."
          />
        </div>
      </section>
    </Layout>
  );
}
