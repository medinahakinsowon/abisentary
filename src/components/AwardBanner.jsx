export default function AwardBanner() {
  return (
    <div className="flex items-center gap-4.5 rounded-lg border border-alert-amber/35 bg-alert-amber/[0.06] px-5.5 py-4.5">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-alert-amber/40 bg-alert-amber/15 text-alert-amber">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2L12.5 7.2L18 8L14 12L15 17.5L10 15L5 17.5L6 12L2 8L7.5 7.2L10 2Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <strong className="block text-sm text-paper">
          Cybersecurity &amp; Threat Intelligence Company of the Year — 2025
        </strong>
        <span className="text-[13.5px] text-paper-dim">
          Global Elite Business Magazine Awards, Nigeria Edition
        </span>
      </div>
    </div>
  );
}
