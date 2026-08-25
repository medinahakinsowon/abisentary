const traditional = [
  "Annual training",
  "Generic content",
  "Completion certificates",
  "No workforce risk visibility",
  "Manual reporting",
];

const academy = [
  "Role-based learning",
  "Employee readiness scores",
  "AI and cyber risk measurement",
  "Continuous improvement",
  "Management reporting",
];

export default function AcademyComparison() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] sm:text-[36px]">
          Don't Just Deliver Training, Reduce Risk.
        </h2>

        <div className="mx-auto grid max-w-5xl gap-9 sm:grid-cols-2">
          {/* Traditional training — deliberately muted */}
          <div className="rounded-2xl border border-perimeter-soft bg-deep-steel/60 p-8 opacity-80">
            <div className="mb-6 font-mono text-xs lg:text-xl font-semibold uppercase tracking-wider text-paper-faint">
              Traditional training
            </div>
            <ul className="flex flex-col gap-4">
              {traditional.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[18px] text-paper-faint"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-paper-faint/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Abisentry Academy — elevated */}
          <div className="relative overflow-hidden rounded-2xl border border-signal-blue/40 bg-gradient-to-b from-deep-steel-2 to-void-navy p-8 shadow-[0_0_0_1px_rgba(21,93,252,0.15),0_25px_60px_-20px_rgba(21,93,252,0.45)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signal-blue to-signal-blue" />
            <div className="mb-6 font-mono text-xs lg:text-xl font-semibold uppercase tracking-wider text-signal-blue">
              Abisentry Academy
            </div>
            <ul className="flex flex-col gap-4">
              {academy.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[18px] font-medium text-paper"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-signal-blue text-signal-blue">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M2 5.5L4.3 8L9 3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-perimeter bg-deep-steel-2 px-10 py-7 text-center">
          <div className="font-mono text-sm font-semibold uppercase tracking-wider text-paper-dim">
            Training is the input.
          </div>
          <div className="mt-1 font-mono text-base font-bold uppercase tracking-wider text-signal-blue">
            Readiness is the outcome.
          </div>
        </div>
      </div>
    </section>
  );
}
