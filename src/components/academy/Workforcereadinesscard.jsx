const bars = [
  { label: "AI Readiness", value: 82, color: "bg-signal-blue" },
  {
    label: "Cybersecurity Readiness",
    value: 74,
    color: "bg-signal-blue-bright",
  },
  { label: "Privacy & Compliance", value: 81, color: "bg-success-green" },
  { label: "Phishing Resilience", value: 69, color: "bg-alert-amber" },
];

export default function WorkforceReadinessCard() {
  return (
    <div className="mx-auto w-full max-w-[540px] overflow-hidden rounded-2xl border border-signal-blue/30 bg-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.15),0_30px_70px_-20px_rgba(21,93,252,0.35)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-perimeter-soft bg-deep-steel-2 px-6 py-4">
        <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-signal-blue-bright"
          >
            <path
              d="M1 8.5H4L5.5 4L8.5 12L10 8.5H15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Workforce readiness
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-paper-faint/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper-faint/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-signal-blue-bright" />
        </div>
      </div>

      <div className="p-6">
        {/* Stat tiles */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-perimeter bg-void-navy px-5 py-4">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              Overall readiness
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-paper">78</span>
              <span className="text-sm text-paper-faint">/100</span>
            </div>
          </div>
          <div className="rounded-xl border border-perimeter bg-void-navy px-5 py-4">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              High risk employees
            </div>
            <div className="text-3xl font-bold text-alert-amber">47</div>
          </div>
        </div>

        {/* Progress bars */}
        <div className="flex flex-col gap-4">
          {bars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-paper">{bar.label}</span>
                <span
                  className={`font-semibold ${bar.color === "bg-alert-amber" ? "text-alert-amber" : "text-paper"}`}
                >
                  {bar.value}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-perimeter">
                <div
                  className={`h-full rounded-full ${bar.color}`}
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-perimeter-soft pt-5">
          <div>
            <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              Employees assessed
            </div>
            <div className="text-xl font-bold text-paper">1,247</div>
          </div>
          <div>
            <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              Policy acknowledgement
            </div>
            <div className="text-xl font-bold text-paper">94%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
