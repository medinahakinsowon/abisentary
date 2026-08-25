const programs = [
  {
    title: "Cybersecurity Fundamentals",
    level: "Foundational",
    duration: "6 weeks",
    body: "Build a solid base in networking, security principles, and risk before you specialize.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
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
    title: "Ethical Hacking & Penetration Testing",
    level: "Intermediate",
    duration: "10 weeks",
    body: "Learn to think like an attacker — network, web app, and social engineering testing, hands-on.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13.3 13.3L19 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "SOC Analyst & Threat Detection",
    level: "Intermediate",
    duration: "8 weeks",
    body: "Monitor, triage, and respond to real security alerts the way an active operations center does.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M2.5 11H6.5L8.5 5.5L13 16.5L15 11H19.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Security",
    level: "Advanced",
    duration: "8 weeks",
    body: "Secure AWS, Azure, and GCP environments — configuration, IAM, and cloud-native threat response.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M6 16A4 4 0 0 1 5.4 8.1 5 5 0 0 1 15.5 6.5 4 4 0 0 1 16.5 14H6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Governance, Risk & Compliance",
    level: "Intermediate",
    duration: "6 weeks",
    body: "ISO 27001, NDPR, and PCI DSS from the ground up — frameworks, audits, and policy writing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3V19M5 6L2.5 11.5C2.5 13 3.6 14 5 14C6.4 14 7.5 13 7.5 11.5L5 6ZM17 6L14.5 11.5C14.5 13 15.6 14 17 14C18.4 14 19.5 13 19.5 11.5L17 6ZM4 6H18M7 19H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital Forensics & Incident Response",
    level: "Advanced",
    duration: "10 weeks",
    body: "Investigate real breaches — evidence handling, root-cause analysis, and post-incident reporting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="4"
          y="4"
          width="14"
          height="14"
          rx="1.6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 8.5H18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function ProgramCard({ title, level, duration, body, icon }) {
  return (
    <div className="flex flex-col rounded-2xl border border-perimeter bg-gradient-to-b from-deep-steel-2 to-deep-steel p-7 transition duration-250 hover:-translate-y-1 hover:border-signal-blue-dim">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-signal-blue/30 bg-signal-blue/[0.12] text-signal-blue-bright">
          {icon}
        </div>
        <span className="rounded-full border border-perimeter px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider text-paper-faint">
          {level}
        </span>
      </div>
      <h3 className="mb-2 text-lg">{title}</h3>
      <p className="mb-5 flex-1 text-[14.5px]">{body}</p>
      <div className="flex items-center justify-between border-t border-perimeter-soft pt-4">
        <span className="font-mono text-xs uppercase tracking-wider text-paper-faint">
          {duration}
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper transition hover:text-signal-blue-bright"
        >
          View curriculum
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 11L11 3M11 3H5M11 3V9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function AcademyPrograms() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
            Programs
          </div>
          <h2 className="text-[28px] sm:text-[32px]">Pick your track.</h2>
          <p className="mb-0 text-[17px]">
            Six programs covering the full spectrum of practical cybersecurity
            work — from your first course to a specialist track.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
