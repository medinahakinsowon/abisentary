const monitors = [
  { label: "API Endpoint Monitoring", status: "Active" },
  { label: "Cloud Infrastructure", status: "Active" },
  { label: "Network Traffic Analysis", status: "Active" },
];

export default function StatusCard() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] py-8">
      {/* Back card — offset, rotated, peeking out to create the stacked-card effect */}
      <div className="absolute -left-3 -top-3 -z-10 h-full w-full -rotate-2 rounded-2xl border border-signal-blue/20 bg-gradient-to-br from-signal-blue/25 to-signal-blue/10 shadow-[0_25px_50px_-20px_rgba(21,93,252,0.5)]" />

      {/* Front card */}
      <div className="rotate-1 rounded-2xl border border-black/5 bg-paper p-7 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:rotate-0">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <div className="mb-1.5 font-mono text-xs uppercase tracking-wider text-slate-500">System status</div>
            <div className="text-2xl font-bold text-void-navy">Protected</div>
          </div>
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-success-green/30 bg-success-green/10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L17 4.5V9C17 13.5 14 16.8 10 18.5C6 16.8 3 13.5 3 9V4.5L10 2Z"
                stroke="#2fd67a"
                strokeWidth="1.6"
              />
            </svg>
          </div>
        </div>

        <div className="mb-4 border-t border-slate-200" />

        <div className="flex flex-col gap-2.5">
          {monitors.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between rounded-lg bg-slate-100/70 px-4 py-3.5"
            >
              <span className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-success-green" />
                {m.label}
              </span>
              <span className="text-xs text-slate-400">{m.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}