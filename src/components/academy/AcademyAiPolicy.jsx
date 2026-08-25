const rules = [
  { label: "Public AI Tools", status: "Allowed", tone: "success" },
  { label: "Upload Company Documents", status: "Restricted", tone: "amber" },
  { label: "Customer PII", status: "Not Allowed", tone: "danger" },
  {
    label: "Customer-Facing AI Content",
    status: "Human Review Required",
    tone: "info",
  },
];

const toneStyles = {
  success: "border-success-green/30 bg-success-green/10 text-success-green",
  amber: "border-alert-amber/30 bg-alert-amber/10 text-alert-amber",
  danger: "border-red-500/30 bg-red-500/10 text-red-400",
  info: "border-signal-blue/30 bg-signal-blue/10 text-signal-blue-bright",
};

function AIPolicyCard() {
  return (
    <div className="rounded-2xl border border-perimeter bg-deep-steel-2 p-7 sm:p-8">
      <div className="mb-6 flex items-center gap-3 border-b border-perimeter-soft pb-6">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          className="flex-shrink-0 text-signal-blue"
        >
          <path
            d="M11 2.5L18 5.3V10C18 14.5 15 18.3 11 19.7C7 18.3 4 14.5 4 10V5.3L11 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-xl">AI Policy Settings</h3>
      </div>

      <div className="mb-6 flex flex-col gap-6">
        {rules.map((rule) => (
          <div
            key={rule.label}
            className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
          >
            <span className="text-[15px] text-paper-dim">{rule.label}</span>
            <span
              className={`rounded-md border px-3 py-1 text-xs font-bold ${toneStyles[rule.tone]}`}
            >
              {rule.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between border-t border-perimeter-soft pt-5">
        <span className="text-[15px] text-paper-dim">Approved AI Tools</span>
        <span className="text-sm text-paper-faint">Admin Configurable</span>
      </div>

      <div className="rounded-xl border border-perimeter bg-void-navy p-5">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper-faint">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M4 1.5H8.5L11.5 4.5V13.5H4V1.5Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 1.5V4.5H11.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          AI Acceptable Use Policy
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <div className="mb-1 text-xs text-paper-faint">Status</div>
            <div className="text-base font-bold text-success-green">
              Published
            </div>
          </div>
          <div>
            <div className="mb-1 text-xs text-paper-faint">Acknowledgement</div>
            <div className="text-base font-bold text-paper">94%</div>
          </div>
          <div>
            <div className="mb-1 text-xs text-paper-faint">Assessment</div>
            <div className="text-base font-bold text-paper">89%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcademyAiPolicy() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-2">
        <h2 className="text-[30px] leading-tight sm:text-[38px] font-bold">
          Give Employees Clear Rules for Using AI at Work.
        </h2>
        <AIPolicyCard />
      </div>
    </section>
  );
}
