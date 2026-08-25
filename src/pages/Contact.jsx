import { useState } from "react";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import { PageHeader } from "../components/HelperComponent";

const infoItems = [
  {
    title: "Email",
    value: "hello@abisentrytechnologies.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4L9 10L16 4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="3.5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Phone",
    value: "+234 (0) 000 000 0000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 3.5C3 3 3.4 2.5 4 2.5H6.5L8 6L6 7.5C6.7 9.2 8.3 10.8 10 11.5L11.5 9.5L15 11V13.5C15 14.1 14.5 14.5 14 14.5C8 14.2 3.3 9.5 3 3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Location",
    value: "Ibadan, Nigeria — serving clients across Africa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 16S15 10.5 15 6.5A6 6 0 0 0 3 6.5C3 10.5 9 16 9 16Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Response time",
    value: "We reply to enquiries within one business day. Active incidents get a same-day response.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 5V9L11.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <Layout>
      <PageHeader
        status={<StatusChip>Open channel</StatusChip>}
        title="Request a Qoute."
        body="Tell Us About Your Business And Security Need, Our Team Will Get back to You Within with a Tailored Proposal."
        span="24 hours"
      />

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-content gap-14 md:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <div>
            {infoItems.map((item) => (
              <div key={item.title} className="mb-7 flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-signal-blue/30 bg-signal-blue/[0.12] text-signal-blue-bright">
                  {item.icon}
                </div>
                <div>
                  <h4 className="mb-1 text-sm text-paper">{item.title}</h4>
                  <p className="mb-0 text-[14.5px]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form column */}
          <div className="rounded-2xl border border-perimeter bg-deep-steel p-9">
            {submitted && (
              <div className="mb-5 flex items-center gap-2.5 rounded border border-success-green/35 bg-success-green/10 px-4 py-3.5 text-sm text-success-green">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9.5L7 13.5L15 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Message received — we'll be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4.5 sm:grid-cols-2">
                <Field id="name" label="Full name" placeholder="Jane Okoro" required />
                <Field id="company" label="Company" placeholder="Your business" />
              </div>
              <div className="grid gap-4.5 sm:grid-cols-2">
                <Field id="email" label="Email" type="email" placeholder="you@company.com" required />
                <div className="mb-5">
                  <label htmlFor="topic" className="mb-2 block font-mono text-xs uppercase tracking-wide text-paper-faint">
                    What do you need?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full rounded border border-perimeter bg-void-navy px-3.5 py-3 text-[14.5px] text-paper transition focus:border-signal-blue focus:outline-none"
                  >
                    <option>Security audit</option>
                    <option>Incident response — urgent</option>
                    <option>Cloud protection</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wide text-paper-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us a bit about your business and what's prompting you to reach out."
                  className="min-h-[110px] w-full resize-y rounded border border-perimeter bg-void-navy px-3.5 py-3 text-[14.5px] text-paper transition focus:border-signal-blue focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-signal-blue px-7 py-3.5 text-center text-[15px] font-semibold text-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
              >
                Send message
              </button>
              <p className="mb-0 mt-3.5 text-[12.5px] text-paper-faint">
                By submitting, you agree to be contacted by Abisentry Technologies regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ id, label, type = "text", placeholder, required = false }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-wide text-paper-faint">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded border border-perimeter bg-void-navy px-3.5 py-3 text-[14.5px] text-paper transition focus:border-signal-blue focus:outline-none"
      />
    </div>
  );
}
