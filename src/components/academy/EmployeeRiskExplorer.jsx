const metrics = [
  { label: "AI Readiness", value: 82, tone: "text-success-green" },
  { label: "Cyber Awareness", value: 74, tone: "text-signal-blue-bright" },
  { label: "Phishing Resilience", value: 61, tone: "text-red-400" },
  { label: "Data Privacy", value: 78, tone: "text-success-green" },
  { label: "Compliance", value: 76, tone: "text-signal-blue-bright" },
];

const departments = [
  { name: "Finance", risk: "High" },
  { name: "Operations", risk: "Medium" },
  { name: "Engineering", risk: "Low" },
  { name: "HR", risk: "Medium" },
  { name: "Executives", risk: "High" },
];

const riskStyles = {
  High: "border-red-500/30 bg-red-500/10 text-red-400",
  Medium: "border-alert-amber/30 bg-alert-amber/10 text-alert-amber",
  Low: "border-success-green/30 bg-success-green/10 text-success-green",
};

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect
      x="4"
      y="2"
      width="10"
      height="14"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path
      d="M7 5.5H7.01M11 5.5H11.01M7 8.5H7.01M11 8.5H11.01M7 11.5H7.01M11 11.5H11.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function EmployeeRiskCard() {
  return (
    <div className="rounded-2xl border border-perimeter bg-deep-steel-2 p-7">
      <div className="mb-5 flex items-start justify-between border-b border-perimeter-soft pb-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-void-navy text-paper-dim">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="7"
                r="3.3"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M4 17C4.6 13.6 7 11.5 10 11.5C10.6 11.5 11.2 11.6 11.8 11.8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M13.5 15L15 16.5L18 13"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="mb-0.5 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              Employee
            </div>
            <div className="text-lg font-bold text-paper">Finance Officer</div>
          </div>
        </div>
        <div className="text-right">
          <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
            Risk level
          </div>
          <span className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
            High
          </span>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between rounded-xl border border-perimeter bg-void-navy px-5 py-4">
        <span className="font-semibold text-paper">Overall Readiness:</span>
        <span>
          <span className="text-2xl font-bold text-paper">71</span>
          <span className="text-sm text-paper-faint">/100</span>
        </span>
      </div>

      <div className="mb-6 flex flex-col gap-3.5">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between text-[15px]"
          >
            <span className="text-paper-dim">{m.label}</span>
            <span className={`font-bold ${m.tone}`}>{m.value}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-signal-blue/25 bg-signal-blue/[0.08] p-5">
        <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-signal-blue">
          Recommended training
        </div>
        <div className="flex items-center gap-2.5 text-[15px] font-semibold text-paper">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="flex-shrink-0 text-signal-blue"
          >
            <path
              d="M2.5 4C4 3 6.5 3 9 4V15C6.5 14 4 14 2.5 15V4Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 4C14 3 11.5 3 9 4V15C11.5 14 14 14 15.5 15V4Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          Business Email Compromise for Finance Teams
        </div>
      </div>
    </div>
  );
}

function DepartmentRiskList() {
  return (
    <div className="flex flex-col gap-4">
      {departments.map((d) => (
        <div
          key={d.name}
          className="flex items-center justify-between rounded-xl border border-perimeter bg-deep-steel-2 px-6 py-5"
        >
          <div className="flex items-center gap-3 text-paper">
            <span className="text-paper-faint">
              <BuildingIcon />
            </span>
            <span className="text-[15px] font-bold">{d.name}</span>
          </div>
          <span
            className={`rounded-md border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${riskStyles[d.risk]}`}
          >
            {d.risk} risk
          </span>
        </div>
      ))}
    </div>
  );
}

export default function EmployeeRiskExplorer() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] sm:text-[36px]">
          Know Where Your Human Risk Actually Exists.
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <EmployeeRiskCard />
          <DepartmentRiskList />
        </div>
      </div>
    </section>
  );
}
