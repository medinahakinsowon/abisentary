const steps = [
  {
    number: 1,
    title: "Detect",
    tagline: "Discover & assess",
    body: "We map your entire attack surface, identify vulnerabilities in your code and infrastructure, and assess your compliance gaps.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M16 16L21.5 21.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Secure",
    tagline: "Remediate & harden",
    body: "We work alongside your engineering team to fix vulnerabilities, implement security controls, and establish secure architectures.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect
          x="6"
          y="12"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 12V8.5a4 4 0 0 1 8 0V12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Monitor",
    tagline: "Continuous MDR",
    body: "We deploy active threat hunting and 24/7 monitoring to detect and neutralize attacks in real-time before they cause damage.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M3 13H8L10.5 6L14.5 20L17 13H23"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function SecurityFramework() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            The Abisentry security framework
          </div>
          <h2 className="text-[28px] sm:text-[32px]">
            A systematic approach to resilience.
          </h2>
          <p className="mb-0 text-[17px]">
            Security isn't a one-time project. It's a continuous lifecycle. Our
            signature framework ensures you are always ahead of the threat
            curve.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-10">
          {/* Connecting line — sits behind the icon circles, only meaningful at 3-column width */}
          <div className="absolute left-[16.6%] right-[16.6%] top-11 hidden h-px bg-perimeter sm:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-perimeter bg-deep-steel-2 text-signal-blue">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-void-navy bg-signal-blue text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-1.5 text-xl">{step.title}</h3>
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-signal-blue">
                {step.tagline}
              </div>
              <p className="mx-auto mb-0 max-w-[280px] text-[14.5px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
