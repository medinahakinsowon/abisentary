const risks = [
  {
    title: "Shadow AI",
    body: "Employees using unapproved AI tools.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M8.5 3C6.6 3 5 4.6 5 6.5C4 6.8 3.3 7.7 3.3 8.8C3.3 9.5 3.6 10.1 4 10.6C3.6 11 3.3 11.6 3.3 12.3C3.3 13.5 4.2 14.5 5.4 14.6C5.7 15.9 6.9 16.8 8.2 16.8C8.7 16.8 9.1 16.6 9.5 16.4V4.5C9.5 3.7 9.2 3 8.5 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 3C13.4 3 15 4.6 15 6.5C16 6.8 16.7 7.7 16.7 8.8C16.7 9.5 16.4 10.1 16 10.6C16.4 11 16.7 11.6 16.7 12.3C16.7 13.5 15.8 14.5 14.6 14.6C14.3 15.9 13.1 16.8 11.8 16.8C11.3 16.8 10.9 16.6 10.5 16.4V4.5C10.5 3.7 10.8 3 11.5 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Data Exposure",
    body: "Sensitive information being entered into public AI systems.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <ellipse
          cx="10"
          cy="5"
          rx="6"
          ry="2.3"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M4 5V15C4 16.3 6.7 17.3 10 17.3C13.3 17.3 16 16.3 16 15V5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M4 10C4 11.3 6.7 12.3 10 12.3C13.3 12.3 16 11.3 16 10"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    title: "Phishing & BEC",
    body: "Employees targeted through sophisticated email attacks.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2.5"
          y="4.5"
          width="15"
          height="11"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M3 5.5L10 11L17 5.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Social Engineering",
    body: "Attackers exploiting trust, urgency and impersonation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle
          cx="7"
          cy="6.5"
          r="2.6"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M2.5 15.5C3 12.7 4.7 11 7 11C9.3 11 11 12.7 11.5 15.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M13 7.5C14.1 7.5 15 6.6 15 5.5C15 4.4 14.1 3.5 13 3.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M13.3 11C15.4 11.4 16.8 12.8 17.2 15.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Compliance Gaps",
    body: "Businesses unable to prove employee policy awareness.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5.5 2.5H11.5L15 6V16.5C15 17.1 14.5 17.5 14 17.5H5.5C5 17.5 4.5 17.1 4.5 16.5V3.5C4.5 3 5 2.5 5.5 2.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 2.5V6H15"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.5L8.7 13L12.5 9"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Deepfake & AI Fraud",
    body: "AI-generated voice, video and messages used for impersonation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2.5L17.5 15.5H2.5L10 2.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M10 8V11.3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="10" cy="13.5" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
];

export default function AcademyRisk() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] leading-tight sm:text-[37px] font-bold">
          Your technology can be secure while your{" "}
          <span className="text-alert-amber">WORKFORCE REMAINS EXPOSED.</span>
        </h2>

        <div className="overflow-hidden rounded-2xl border border-perimeter">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {risks.map((risk, i) => {
              const isLastCol = (i + 1) % 3 === 0;
              const isLastRow = i >= risks.length - 3;
              return (
                <div
                  key={risk.title}
                  className={`p-8 ${!isLastCol ? "sm:border-r sm:border-perimeter-soft" : ""} ${
                    !isLastRow ? "border-b border-perimeter-soft" : ""
                  }`}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-alert-amber/30 bg-alert-amber/[0.1] text-alert-amber">
                    {risk.icon}
                  </div>
                  <h3 className="mb-2 text-lg">{risk.title}</h3>
                  <p className="mb-0 text-[14.5px]">{risk.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
