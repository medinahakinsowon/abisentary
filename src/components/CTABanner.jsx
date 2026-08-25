import { Link } from "react-router-dom";

export default function CTABanner({
  title,
  body,
  ctaLabel = "Request a security audit",
  to = "/contact",
}) {
  return (
    <div className="relative flex flex-col items-start gap-8 overflow-hidden rounded-2xl border border-perimeter bg-gradient-to-br from-deep-steel-2 to-void-navy p-10 sm:flex-row sm:items-center sm:justify-between sm:p-14">
      <div className="pointer-events-none absolute -right-[10%] -top-[60%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(21,93,252,0.25),transparent_70%)]" />
      <div className="relative z-10">
        <h2 className="mb-2 text-3xl">{title}</h2>
        <p className="mb-0 max-w-md">{body}</p>
      </div>
      <div className="relative z-10 flex-shrink-0">
        <Link
          to={to}
          className="inline-flex items-center gap-2 rounded bg-signal-blue px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
