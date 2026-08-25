const steps = [
  {
    number: 1,
    title: "Apply",
    tagline: "Tell us your goals",
    body: "Share your background and where you want to go. We place you on the track that fits — no wasted time on the wrong course.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M5 21C5.6 17 8.4 14.5 13 14.5C17.6 14.5 20.4 17 21 21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="13"
          cy="8.5"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Train",
    tagline: "Learn by doing",
    body: "Live sessions, hands-on labs, and real case studies taught by practicing analysts — not recycled slide decks.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect
          x="3"
          y="6"
          width="20"
          height="13"
          rx="1.6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 22H17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M13 19V22" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Certify",
    tagline: "Get job-ready",
    body: "Earn your certification, build a portfolio from real projects, and get introduced to our hiring partner network.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M13 3L21 6.5V12C21 17 17.5 20.7 13 22C8.5 20.7 5 17 5 12V6.5L13 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.5L12 15L17 9.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function AcademyPath() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
            How it works
          </div>
          <h2 className="text-[28px] sm:text-[32px]">
            From first lesson to first day on the job.
          </h2>
          <p className="mb-0 text-[17px]">
            A structured path built to take you from wherever you are now to a
            real cybersecurity career.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-10">
          <div className="absolute left-[16.6%] right-[16.6%] top-11 hidden h-px bg-perimeter sm:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-perimeter bg-deep-steel-2 text-signal-blue-bright">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-void-navy bg-signal-blue text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-1.5 text-xl">{step.title}</h3>
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
                {step.tagline}
              </div>
              <p className="mx-auto mb-0 max-w-[280px] text-[14.5px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
