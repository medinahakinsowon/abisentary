const threats = [
  "Fake bank credential request",
  "Payroll change fraud",
  "CEO WhatsApp impersonation",
  "Vendor payment substitution",
  "Procurement fraud",
  "Fake Microsoft 365 login",
  "Malicious QR codes",
  "Recruitment scams",
  "Regulatory impersonation",
  "AI-generated executive fraud",
];

const WarningIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path
      d="M13 3.5L23 21.5H3L13 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M13 10.5V15"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="13" cy="18" r="1" fill="currentColor" />
  </svg>
);

export default function AcademyThreats() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] sm:text-[36px]">
          Built Around The Threats African Businesses Actually Face.
        </h2>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {threats.map((threat) => (
            <div
              key={threat}
              className="flex flex-col items-center justify-center gap-3.5 rounded-xl border border-perimeter bg-deep-steel-2 px-5 py-8 text-center transition duration-250 hover:-translate-y-1 hover:border-alert-amber/40"
            >
              <span className="text-alert-amber">
                <WarningIcon />
              </span>
              <span className="text-[14.5px] font-bold text-paper">
                {threat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
