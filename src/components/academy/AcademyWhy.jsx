const points = [
  {
    title: "Practitioner-led, not theory-only",
    body: "Every instructor actively works incident response, pentesting, or SOC operations for real Abisentry clients.",
  },
  {
    title: "Built on real case studies",
    body: "Labs and projects are drawn from actual threats facing African businesses — not generic textbook scenarios.",
  },
  {
    title: "Career support that continues after graduation",
    body: "Certification, portfolio review, and introductions into our hiring partner network for job-ready graduates.",
  },
];

const facts = [
  { label: "Format", value: "Live + self-paced" },
  { label: "Instructors", value: "Practicing analysts" },
  { label: "Certification", value: "Issued on completion" },
];

export default function AcademyWhy() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-content items-center gap-16 md:grid-cols-2">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
            Why Abisentry Academy
          </div>
          <h2 className="mb-5 text-[28px] sm:text-[32px]">
            Training built by people who do this for a living.
          </h2>
          <p className="mb-9 max-w-md text-[17px]">
            Most cybersecurity courses are taught by people who left the field
            years ago. Ours are taught by the analysts defending African
            businesses this week.
          </p>
          <div className="flex flex-col gap-7">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-signal-blue-bright text-signal-blue-bright">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.2L4.8 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-1 text-base">{point.title}</h3>
                  <p className="mb-0 text-[14.5px]">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] py-8">
          <div className="absolute -left-3 -top-3 -z-10 h-full w-full -rotate-2 rounded-2xl border border-signal-blue/20 bg-gradient-to-br from-signal-blue/25 to-signal-blue/10 shadow-[0_25px_50px_-20px_rgba(21,93,252,0.5)]" />
          <div className="rotate-1 rounded-2xl border border-black/5 bg-paper p-7 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:rotate-0">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="mb-1.5 font-mono text-xs uppercase tracking-wider text-slate-500">
                  Certificate of completion
                </div>
                <div className="text-2xl font-bold text-void-navy">
                  Verified
                </div>
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-success-green/30 bg-success-green/10">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10.5L8 14.5L16 5.5"
                    stroke="#2fd67a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-4 border-t border-slate-200" />
            <div className="flex flex-col gap-2.5">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between rounded-lg bg-slate-100/70 px-4 py-3.5"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {f.label}
                  </span>
                  <span className="text-xs text-slate-500">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
