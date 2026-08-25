import { useState } from "react";

const roles = [
  {
    id: "finance",
    label: "Finance",
    modules: [
      "AI Security Fundamentals",
      "Protecting Financial Data When Using AI",
      "Business Email Compromise",
      "Payment Instruction Verification",
      "Deepfake Executive Fraud",
      "Data Privacy",
      "Phishing Simulation",
      "Final Assessment",
    ],
  },
  {
    id: "hr",
    label: "HR",
    modules: [
      "AI Security Fundamentals",
      "Handling Sensitive Employee Data",
      "Recruitment Fraud & Fake Candidates",
      "Social Engineering via HR Channels",
      "Insider Threat Awareness",
      "Data Privacy",
      "Phishing Simulation",
      "Final Assessment",
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    modules: [
      "AI Security Fundamentals",
      "Secure Use of AI Coding Assistants",
      "Credential & Secrets Management",
      "Supply Chain & Dependency Risks",
      "Insider Threat Awareness",
      "Data Privacy",
      "Phishing Simulation",
      "Final Assessment",
    ],
  },
  {
    id: "executive",
    label: "Executive",
    modules: [
      "AI Security Fundamentals",
      "Deepfake & Executive Impersonation",
      "Business Email Compromise",
      "Protecting Strategic & Financial Data",
      "Third-Party & Vendor Risk",
      "Data Privacy",
      "Phishing Simulation",
      "Final Assessment",
    ],
  },
  {
    id: "support",
    label: "Customer Support",
    modules: [
      "AI Security Fundamentals",
      "Verifying Customer Identity",
      "Social Engineering via Support Channels",
      "Handling Sensitive Customer Data",
      "Recognizing Account Takeover Attempts",
      "Data Privacy",
      "Phishing Simulation",
      "Final Assessment",
    ],
  },
  {
    id: "sales",
    label: "Sales",
    modules: [
      "AI Security Fundamentals",
      "Protecting Client & Deal Data",
      "Business Email Compromise",
      "Social Engineering in Sales Outreach",
      "Safe Use of AI in Proposals & Contracts",
      "Data Privacy",
      "Phishing Simulation",
      "Final Assessment",
    ],
  },
];

export default function AcademyLearningPaths() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((r) => r.id === activeId);

  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-10 max-w-2xl text-center text-[28px] sm:text-[36px]">
          Different employees. Different risks. Different training.
        </h2>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {roles.map((role) => {
            const isActive = role.id === activeId;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveId(role.id)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-signal-blue text-white shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_20px_-6px_rgba(21,93,252,0.6)]"
                    : "border border-perimeter bg-deep-steel-2 text-paper-dim hover:border-signal-blue-dim hover:text-paper"
                }`}
              >
                {role.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-perimeter bg-deep-steel-2 p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-4 border-b border-perimeter-soft pb-6">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-signal-blue/30 bg-signal-blue/[0.12] text-signal-blue">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2.5"
                  y="6.5"
                  width="15"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M7 6.5V5A1.5 1.5 0 0 1 8.5 3.5H11.5A1.5 1.5 0 0 1 13 5V6.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M2.5 11H17.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </div>
            <h3 className="text-xl">{active.label} Learning Path</h3>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
            {active.modules.map((title, i) => (
              <div key={title} className="flex items-center gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-void-navy font-mono text-sm text-paper-dim">
                  {i + 1}
                </span>
                <span className="text-[15px] font-semibold text-paper">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
