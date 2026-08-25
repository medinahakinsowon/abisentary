const steps = [
  {
    number: "01",
    title: "ASSESS",
    body: "Measure employee AI, cyber and privacy readiness.",
  },
  { number: "02", title: "EDUCATE", body: "Provide role-based training." },
  {
    number: "03",
    title: "SIMULATE",
    body: "Test employees with realistic security scenarios.",
  },
  {
    number: "04",
    title: "MEASURE",
    body: "Track individual and departmental risk.",
  },
  { number: "05", title: "IMPROVE", body: "Assign targeted remediation." },
  {
    number: "06",
    title: "PROVE",
    body: "Provide management reports and compliance evidence.",
  },
];

export default function AcademyCycle() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-16 max-w-2xl text-center text-[28px] sm:text-[36px]">
          A Continuous Workforce Readiness Cycle.
        </h2>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
          <div className="absolute left-[8.3%] right-[8.3%] top-8 hidden h-px bg-perimeter lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-signal-blue bg-void-navy font-mono text-lg font-bold text-signal-blue">
                {step.number}
              </div>
              <h1 className="mb-1.5 text-base font-bold">{step.title}</h1>
              <p className="mx-auto mb-0 max-w-[160px] text-[13.5px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex w-fit items-center gap-2.5 rounded-full border border-perimeter bg-deep-steel-2 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper-faint">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-signal-blue-bright"
          >
            <path
              d="M12 7A5 5 0 1 1 10.5 3.4M12 7V3M12 7H8"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Repeats continuously
        </div>
      </div>
    </section>
  );
}
