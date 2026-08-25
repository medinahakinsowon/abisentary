import { Link } from "react-router-dom";

export default function SecurityadvisorCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Abstract blurred backdrop — stands in for a photographic background */}
      <div className="absolute inset-0 -z-10 bg-[#0a1128]">
        <div className="absolute left-[8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-signal-blue/25 blur-[110px]" />
        <div className="absolute right-[5%] top-[10%] h-[360px] w-[360px] rounded-full bg-slate-400/15 blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-[380px] w-[380px] rounded-full bg-signal-blue-dim/30 blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] h-[300px] w-[300px] rounded-full bg-white/5 blur-[90px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-void-navy/40 via-transparent to-void-navy/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-8 text-center">
        <h2 className="mb-5 text-[34px] font-bold leading-tight text-white sm:text-[44px]">
          Stop guessing about your security posture.
        </h2>
        <p className="mb-9 text-[17px] text-paper-dim">
          Talk to a security advisor today. We'll help you identify your biggest
          risks and build a roadmap to secure scale.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded bg-signal-blue px-8 py-4 text-[15px] font-bold text-white shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_12px_30px_-8px_rgba(21,93,252,0.7)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
        >
          Talk to a Security Advisor
        </Link>
      </div>
    </section>
  );
}
