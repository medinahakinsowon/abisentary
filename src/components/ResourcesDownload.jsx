import { useState } from "react";

function DocumentIllustration() {
  return (
    <div className="relative mx-auto hidden w-full max-w-[280px] md:block">
      <div className="absolute -left-4 top-4 -z-10 h-full w-full -rotate-3 rounded-2xl bg-signal-blue/15" />
      <div className="rotate-3 rounded-2xl border border-black/5 bg-paper p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:rotate-1">
        <div className="mb-2 h-2.5 w-full rounded-full bg-slate-200" />
        <div className="mb-6 h-2.5 w-4/5 rounded-full bg-slate-200" />
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="h-4 w-4 flex-shrink-0 rounded border border-slate-300" />
              <span className="h-2 w-full rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <span className="h-8 w-8 rounded-full bg-signal-blue/25" />
        </div>
      </div>
    </div>
  );
}

export default function ResourceDownload() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-2xl border border-perimeter bg-gradient-to-br from-deep-steel-2 to-void-navy p-10 sm:p-14">
          <div className="pointer-events-none absolute -right-[8%] -top-[40%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(21,93,252,0.22),transparent_70%)]" />

          <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-perimeter bg-void-navy/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-signal-blue">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 1.5H8L11 4.5V12.5H3V1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 1.5V4.5H11"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
                Free resource
              </span>

              <h2 className="mb-5 text-[28px] leading-tight sm:text-[34px]">
                The 2026 Financial Institution Security &amp; Compliance
                Checklist
              </h2>
              <p className="mb-8 max-w-lg text-[16px]">
                A comprehensive, actionable checklist used by top African
                financial institutions to prepare for ISO 27001 audits and
                secure their core infrastructure.
              </p>

              {submitted ? (
                <div className="flex items-center gap-2.5 rounded border border-success-green/35 bg-success-green/10 px-4 py-3.5 text-sm text-success-green">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 9.5L7 13.5L15 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Check your inbox — the checklist is on its way.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full flex-1 rounded border border-perimeter bg-void-navy px-4 py-3.5 text-[14.5px] text-paper placeholder:text-paper-faint transition focus:border-signal-blue focus:outline-none sm:max-w-xs"
                  />
                  <button
                    type="submit"
                    className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded bg-signal-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 2V11M8 11L4.5 7.5M8 11L11.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 13.5H13.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    Download now
                  </button>
                </form>
              )}
            </div>

            <DocumentIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
