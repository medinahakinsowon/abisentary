  
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import BacktoTop from "../components/BacktoTop";

import { useState } from "react";

export default function ChaseFraud() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Abisentry Product · ChaseFraud</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              Stop fraud <span className="text-signal-blue">before it costs you.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
              ChaseFraud monitors your transactions in real time, flags suspicious activity the moment it happens,
              and gives your team a complete case file to investigate and resolve it fast.
            </p>
            <div className="mb-11 flex flex-wrap gap-3.5">
              <a
                href="#request-demo"
                className="inline-flex items-center gap-2 rounded bg-signal-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
              >
                Request a demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded border border-perimeter px-7 py-3.5 text-[15px] font-semibold text-paper transition hover:border-signal-blue hover:bg-signal-blue/10"
              >
                See how it works
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4.5 font-mono text-xs uppercase tracking-wider text-paper-faint">
              <span>Real-time</span>
              <span className="flex items-center gap-4.5 before:content-['/'] before:text-perimeter">Built for African payment rails</span>
              <span className="flex items-center gap-4.5 before:content-['/'] before:text-perimeter">Full audit trail</span>
            </div>
          </div>
          <ChaseFraudHeroArt />
        </div>
      </section>

      <ChaseFraudValueProps />

      <div id="how-it-works">
        <ChaseFraudHowItWorks />
      </div>

      <ChaseFraudDemoForm />

      <BacktoTop />
    </Layout>
  );
}






 function ChaseFraudDemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section id="request-demo" className="px-8 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-perimeter bg-deep-steel-2 p-8 sm:p-12">
        <h2 className="mb-4 text-center text-[28px] sm:text-[34px]">Request a Demo of ChaseFraud</h2>
        <p className="mb-9 text-center text-[15px]">
          Fill out the form below and our team will get back to you shortly to schedule a personalized walkthrough.
        </p>

        {submitted && (
          <div className="mb-6 flex items-center gap-2.5 rounded border border-success-green/35 bg-success-green/10 px-4 py-3.5 text-sm text-success-green">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9.5L7 13.5L15 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Request received — we'll be in touch to schedule your demo.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Full Name" required />
            <Field id="email" label="Work Email" type="email" required />
          </div>
          <Field id="company" label="Company Name" required />
          <div className="mb-7">
            <label htmlFor="message" className="mb-2 block text-sm text-paper">
              How can we help you? <span className="text-signal-blue">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="min-h-[140px] w-full resize-y rounded-lg border border-perimeter bg-void-navy px-4 py-3 text-[14.5px] text-paper transition focus:border-signal focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-signal-blue px-7 py-4 text-[15px] font-bold text-deep-steel transition hover:bg-black"
          >
            Submit Request
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M15.5 1.5L1.5 7.5L7.5 9.5L9.5 15.5L15.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required = false }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block text-sm text-paper">
        {label} {required && <span className="text-signal-blue-bright">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-perimeter bg-void-navy px-4 py-3 text-[14.5px] text-paper transition focus:border-signal-blue focus:outline-none"
      />
    </div>
  );
}

 function ChaseFraudHeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <radialGradient id="chaseGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#155DFC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#155DFC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="200" r="190" fill="url(#chaseGlow)" />
        <circle cx="210" cy="200" r="175" stroke="#26365c" strokeWidth="1" />

        {/* Surrounding transaction blips */}
        <g stroke="#26365c" strokeDasharray="3 4">
          <line x1="70" y1="130" x2="140" y2="165" />
          <line x1="70" y1="280" x2="140" y2="240" />
          <line x1="350" y1="150" x2="285" y2="180" />
        </g>
        <circle className="animate-blip" cx="70" cy="130" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:0.6s]" cx="70" cy="280" r="5" fill="#4B83FF" />
        <circle className="animate-blip [animation-delay:1.2s]" cx="350" cy="150" r="5" fill="#4B83FF" />

        {/* Ledger / case file card */}
        <g>
          <rect x="140" y="130" width="140" height="160" rx="8" fill="rgba(21,93,252,0.05)" stroke="#4B83FF" strokeWidth="1.5" />
          <line x1="158" y1="155" x2="230" y2="155" stroke="#26365c" strokeWidth="2" strokeLinecap="round" />
          <line x1="158" y1="155" x2="230" y2="155" stroke="#26365c" strokeWidth="2" strokeLinecap="round" />

          {/* transaction rows */}
          <rect x="158" y="172" width="104" height="18" rx="3" fill="rgba(21,93,252,0.08)" />
          <line x1="166" y1="181" x2="220" y2="181" stroke="#4B83FF" strokeWidth="1.6" strokeLinecap="round" />
          <text x="252" y="184" textAnchor="end" fontSize="7" fill="#4B83FF" fontFamily="monospace">OK</text>

          <rect x="158" y="198" width="104" height="18" rx="3" fill="rgba(255,32,32,0.1)" stroke="#ff5757" strokeWidth="1" />
          <line x1="166" y1="207" x2="220" y2="207" stroke="#ff5757" strokeWidth="1.6" strokeLinecap="round" />

          <rect x="158" y="224" width="104" height="18" rx="3" fill="rgba(21,93,252,0.08)" />
          <line x1="166" y1="233" x2="220" y2="233" stroke="#4B83FF" strokeWidth="1.6" strokeLinecap="round" />
          <text x="252" y="236" textAnchor="end" fontSize="7" fill="#4B83FF" fontFamily="monospace">OK</text>

          <rect x="158" y="250" width="104" height="18" rx="3" fill="rgba(21,93,252,0.08)" />
          <line x1="166" y1="259" x2="220" y2="259" stroke="#4B83FF" strokeWidth="1.6" strokeLinecap="round" />
          <text x="252" y="262" textAnchor="end" fontSize="7" fill="#4B83FF" fontFamily="monospace">OK</text>
        </g>

        {/* Crosshair locking onto the flagged row */}
        <g>
          <circle cx="210" cy="207" r="34" stroke="#FFB020" strokeWidth="1.6" />
          <circle cx="210" cy="207" r="22" stroke="#FFB020" strokeWidth="1.2" opacity="0.6" />
          <line x1="210" y1="163" x2="210" y2="177" stroke="#FFB020" strokeWidth="2" strokeLinecap="round" />
          <line x1="210" y1="237" x2="210" y2="251" stroke="#FFB020" strokeWidth="2" strokeLinecap="round" />
          <line x1="166" y1="207" x2="180" y2="207" stroke="#FFB020" strokeWidth="2" strokeLinecap="round" />
          <line x1="240" y1="207" x2="254" y2="207" stroke="#FFB020" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Rotating scan sweep, matching the site's radar motif */}
        <g className="origin-[210px_207px] animate-sweep" style={{ animationDuration: "6s" }}>
          <line x1="210" y1="207" x2="210" y2="163" stroke="#FFB020" strokeWidth="1" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}





const steps = [
  {
    number: 1,
    title: "Connect",
    tagline: "Integrate your data",
    body: "Connect your payment stack and transaction sources — no disruption to systems already in production.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="7" cy="7" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="17" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Monitor",
    tagline: "In real time",
    body: "Every transaction is scored against live fraud patterns the moment it happens.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12H7L9.5 6L14 18L16.5 12H21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Flag & Investigate",
    tagline: "With full context",
    body: "High-risk activity is flagged with a complete case file — no digging through raw logs to reconstruct what happened.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Resolve & Report",
    tagline: "Close the loop",
    body: "Resolve cases, block confirmed fraud, and export reports your finance and compliance teams can act on.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 6.5V11C20 16 16.5 20 12 21.7C7.5 20 4 16 4 11V6.5L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12L11.2 14.2L15.5 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

 function ChaseFraudHowItWorks() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            How it works
          </div>
          <h2 className="text-[28px] sm:text-[32px]">From transaction to resolved case.</h2>
        </div>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-4 sm:gap-x-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-11 hidden h-px bg-perimeter sm:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-perimeter bg-deep-steel-2 text-signal-blue">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-void-navy bg-signal-blue text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-1.5 text-lg">{step.title}</h3>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-signal-blue">
                {step.tagline}
              </div>
              <p className="mx-auto mb-0 max-w-[220px] text-[13.5px]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




const details = [
    {
        title: "Target User",
        body: "Risks Team, Compliance Officers, And Financial Institutions Operations."
    },
    {
        title: "Clear Use Case",
        body: "Real-time Transaction monitoring and user behaviour analytics to block fraudulent activities instantly."
    },
    {
        title: "Problem Solved",
        body: "Rule-based fraud systems generate too many false positive and failed to catch sophisticated, evolving fraud rings targeting Africa payment gateways"
    }
]


const propositions = [
    "Machine learning models trained on local Africa fraud patterns",
    "Sub-50ms decision latency for real-time blocking",
    "Graph-based visualization of fraud rings",
    "Customizable risk scoring threshold"
]



 function ChaseFraudValueProps() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content grid items-start gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
            {details.map((detail) => (
                <div key={detail.title}>
                   <h3 className="mb-2.5 text-signal-blue text-xl">{detail.title}</h3>
                   <p className="mb-0 text-[15px]">{detail.body}</p>
                </div>
            ))}
        </div>
       <div className="rounded-2xl border border-perimeter bg-deep-steel p-8">
           <h3 className="mb-6 text-xl">Value Proposition</h3>
           <ul className="flex flex-col gap-5">
              {propositions.map((p) => (
                  <li className="flex items-start gap-3 text-[15px] text-paper-dim">
                    <span className="mt-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-signal-blue-bright">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M2 5.5L4.3 8L9 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    {p}
                  </li>
              ))}
           </ul>
       </div>
      </div>
    </section>
  );
}

