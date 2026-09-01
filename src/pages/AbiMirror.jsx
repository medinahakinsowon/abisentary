  
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import BacktoTop from "../components/BacktoTop";

import { useState } from "react";

export default function AbiMirror() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Abisentry Product · AbiMirror</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              Critical validation <span className="text-signal-blue">for Employees & Individuals.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
              Reliable Background Checks & Identity Verification.
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
          <AbiMirrorImage />
        </div>
      </section>

      <AbiMirrorValueProps />

      <div id="how-it-works">
        <AbiMirrowHowItWorks />
      </div>

      <AbiMirrorDemoForm />

      <BacktoTop />
    </Layout>
  );
}






 function AbiMirrorDemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section id="request-demo" className="px-8 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-perimeter bg-deep-steel-2 p-8 sm:p-12">
        <h2 className="mb-4 text-center font-bold text-[28px] sm:text-[34px]">Request a Demo of AbiMirror</h2>
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

const AbiMirrorImage = () => {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="validationGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#155DFC" stop-opacity="0.22" />
          <stop offset="100%" stop-color="#155DFC" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="420" height="420" fill="#0a1020" />
      <circle cx="210" cy="200" r="190" fill="url(#validationGlow)" />

      <circle cx="210" cy="200" r="175" stroke="#26365c" stroke-width="1" />
      <circle cx="210" cy="200" r="125" stroke="#26365c" stroke-width="1" />

      <g stroke="#26365c" stroke-dasharray="3 4">
        <line x1="70" y1="140" x2="150" y2="185" />
        <line x1="70" y1="270" x2="150" y2="235" />
        <line x1="350" y1="150" x2="270" y2="190" />
      </g>

      <g>
        <circle
          cx="70"
          cy="140"
          r="16"
          fill="#0a1020"
          stroke="#4B83FF"
          stroke-width="1.6"
        />
        <circle cx="70" cy="134" r="5" stroke="#4B83FF" stroke-width="1.4" />
        <path
          d="M62 148C63 143 66 140 70 140C74 140 77 143 78 148"
          stroke="#4B83FF"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </g>

      <g>
        <circle
          cx="70"
          cy="270"
          r="16"
          fill="#0a1020"
          stroke="#4B83FF"
          stroke-width="1.6"
        />
        <circle cx="70" cy="264" r="5" stroke="#4B83FF" stroke-width="1.4" />
        <path
          d="M62 278C63 273 66 270 70 270C74 270 77 273 78 278"
          stroke="#4B83FF"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </g>

      <circle cx="350" cy="150" r="5" fill="#FFB020">
        <animate
          attributeName="opacity"
          values="1;0.35;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <g>
        <rect
          x="150"
          y="150"
          width="120"
          height="150"
          rx="10"
          fill="rgba(21,93,252,0.05)"
          stroke="#4B83FF"
          stroke-width="1.6"
        />

        <circle cx="185" cy="192" r="16" stroke="#4B83FF" stroke-width="1.4" />
        <path
          d="M172 216C174 208 179 204 185 204C191 204 196 208 198 216"
          stroke="#4B83FF"
          stroke-width="1.4"
          stroke-linecap="round"
        />

        <line
          x1="210"
          y1="182"
          x2="255"
          y2="182"
          stroke="#26365c"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="210"
          y1="192"
          x2="245"
          y2="192"
          stroke="#26365c"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="210"
          y1="202"
          x2="250"
          y2="202"
          stroke="#26365c"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        <line
          x1="164"
          y1="232"
          x2="256"
          y2="232"
          stroke="#1c2745"
          stroke-width="1"
        />

        <line
          x1="164"
          y1="246"
          x2="256"
          y2="246"
          stroke="#26365c"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="164"
          y1="258"
          x2="230"
          y2="258"
          stroke="#26365c"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="164"
          y1="270"
          x2="240"
          y2="270"
          stroke="#26365c"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>

      <g>
        <circle
          cx="270"
          cy="285"
          r="26"
          fill="#0a1020"
          stroke="#2fd67a"
          stroke-width="2.2"
        />
        <path
          d="M258 285L266 293L283 275"
          stroke="#2fd67a"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      <g transform-origin="210px 220px">
        <circle
          cx="210"
          cy="220"
          r="95"
          stroke="#4B83FF"
          stroke-width="1"
          stroke-dasharray="2 10"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 210 220"
            to="360 210 220"
            dur="14s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}




 function AbiMirrowHowItWorks() {
  return (
    <section className="px-8 py-12">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <div className="mb-3.5 flex items-center justify-center gap-2.5 font-bold text-[40px] text-signal-blue">
            How it Works
          </div>
          <div>
            <p className="text-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets. It has survived not only many
              decades, but also the leap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




const details = [
    {
        title: "Target User",
        body: "HR Teams, Onboarding Specialists, And Compliance (KYC) Teams."
    },
    {
        title: "Clear Use Case",
        body: "Authomation Identity Verification, Criminal Record Checks and Credential Validation for Employees and High-risk Customers."
    },
    {
        title: "Problem Solved",
        body: "Manual Background Checks are Slow, Error Prone and often rely on fragmented or outdated databases, leading to bad hires or compliance failures."
    }
]


const propositions = [
    "Integration with data identity databases (NIN, BVN)",
    "Automated document verification (Liveness detection)",
    "API-first design for seamless onboarding integration",
    "Comprehensive audit trails for compliance"
]



 function AbiMirrorValueProps() {
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

