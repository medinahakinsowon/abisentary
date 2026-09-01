  
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import BacktoTop from "../components/BacktoTop";

import { useState } from "react";

export default function AbiQr() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>Abisentry Product · AbiQr</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[54px]">
              Monitor QR codes <span className="text-signal-blue">both Dynamic & Static.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
              AbiQr, a secure QR code management.
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
          <QRCodeIllustration />
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
        <h2 className="mb-4 text-center font-bold text-[28px] sm:text-[34px]">Request a Demo of AbiQR</h2>
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

const QRCodeIllustration = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-auto w-full"
      aria-label="QR code security scanner"
    >
      <defs>
        {/* Blue glow */}
        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="25" />
        </filter>

        <linearGradient id="phoneGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#102D50" />
          <stop offset="100%" stopColor="#06152A" />
        </linearGradient>

        <linearGradient id="screenGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#123761" />
          <stop offset="100%" stopColor="#061A35" />
        </linearGradient>

        <linearGradient id="cyanGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>

        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <circle
        cx="570"
        cy="285"
        r="170"
        fill="#0EA5E9"
        opacity="0.08"
        filter="url(#softGlow)"
      />

      <circle
        cx="370"
        cy="310"
        r="150"
        fill="#22D3EE"
        opacity="0.05"
        filter="url(#softGlow)"
      />

      {/* =========================
          DECORATIVE SCAN ICON
      ========================== */}

      <g
        stroke="url(#cyanGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.9"
      >
        <path d="M95 180V155C95 148 101 142 108 142H133" />
        <path d="M170 180V155C170 148 164 142 157 142H132" />

        <path d="M95 210V235C95 242 101 248 108 248H133" />
        <path d="M170 210V235C170 242 164 248 157 248H132" />

        <path d="M108 195H157" />
      </g>

      {/* =========================
          FLOATING DOTS
      ========================== */}

      <g fill="#38BDF8">
        <circle cx="90" cy="350" r="6" opacity="0.7" />
        <circle cx="125" cy="390" r="4" opacity="0.5" />

        <circle cx="700" cy="125" r="5" opacity="0.8" />
        <circle cx="730" cy="155" r="4" opacity="0.5" />
        <circle cx="700" cy="185" r="4" opacity="0.7" />

        <circle cx="735" cy="215" r="5" opacity="0.6" />
        <circle cx="675" cy="220" r="3" opacity="0.5" />
      </g>

      {/* =========================
          LARGE QR CARD BEHIND PHONE
      ========================== */}

      <g transform="rotate(4 560 315)">
        <rect
          x="405"
          y="175"
          width="285"
          height="300"
          rx="25"
          fill="#F8FAFC"
          stroke="#BFDBFE"
          strokeWidth="2"
        />

        {/* QR background */}
        <rect
          x="445"
          y="215"
          width="205"
          height="205"
          rx="12"
          fill="#FFFFFF"
        />

        {/* QR Position Squares */}

        <g fill="#071A33">
          {/* Top left */}
          <rect x="465" y="235" width="50" height="50" rx="3" />
          <rect
            x="475"
            y="245"
            width="30"
            height="30"
            fill="white"
          />
          <rect x="482" y="252" width="16" height="16" rx="2" />

          {/* Top right */}
          <rect x="580" y="235" width="50" height="50" rx="3" />
          <rect
            x="590"
            y="245"
            width="30"
            height="30"
            fill="white"
          />
          <rect x="597" y="252" width="16" height="16" rx="2" />

          {/* Bottom left */}
          <rect x="465" y="350" width="50" height="50" rx="3" />
          <rect
            x="475"
            y="360"
            width="30"
            height="30"
            fill="white"
          />
          <rect x="482" y="367" width="16" height="16" rx="2" />

          {/* QR pattern */}
          <rect x="525" y="235" width="12" height="12" />
          <rect x="541" y="235" width="12" height="12" />
          <rect x="525" y="251" width="12" height="12" />
          <rect x="557" y="251" width="12" height="12" />
          <rect x="541" y="267" width="12" height="12" />

          <rect x="525" y="295" width="12" height="12" />
          <rect x="541" y="295" width="12" height="12" />
          <rect x="557" y="295" width="12" height="12" />
          <rect x="589" y="295" width="12" height="12" />

          <rect x="525" y="311" width="12" height="12" />
          <rect x="557" y="311" width="12" height="12" />
          <rect x="573" y="311" width="12" height="12" />
          <rect x="605" y="311" width="12" height="12" />

          <rect x="525" y="327" width="12" height="12" />
          <rect x="541" y="327" width="12" height="12" />
          <rect x="573" y="327" width="12" height="12" />
          <rect x="605" y="327" width="12" height="12" />

          <rect x="525" y="350" width="12" height="12" />
          <rect x="541" y="366" width="12" height="12" />
          <rect x="557" y="350" width="12" height="12" />
          <rect x="573" y="366" width="12" height="12" />
          <rect x="605" y="350" width="12" height="12" />

          <rect x="525" y="382" width="12" height="12" />
          <rect x="557" y="382" width="12" height="12" />
          <rect x="589" y="382" width="12" height="12" />
          <rect x="605" y="398" width="12" height="12" />
        </g>
      </g>

      {/* =========================
          SECURITY SHIELD
      ========================== */}

      <g>
        <circle
          cx="700"
          cy="410"
          r="42"
          fill="#2563EB"
          opacity="0.9"
        />

        <circle
          cx="700"
          cy="410"
          r="58"
          stroke="#38BDF8"
          strokeWidth="2"
          opacity="0.25"
        />

        <path
          d="M700 385L720 393V408C720 423 711 435 700 440C689 435 680 423 680 408V393L700 385Z"
          fill="#0B4FC4"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M691 410L697 417L710 402"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* =========================
          SCANNER PLATFORM
      ========================== */}

      <ellipse
        cx="500"
        cy="510"
        rx="205"
        ry="30"
        fill="#0EA5E9"
        opacity="0.08"
      />

      <ellipse
        cx="500"
        cy="510"
        rx="170"
        ry="18"
        stroke="#22D3EE"
        strokeWidth="3"
        opacity="0.8"
      />

      <ellipse
        cx="500"
        cy="510"
        rx="125"
        ry="10"
        stroke="#2563EB"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* =========================
          PHONE SHADOW
      ========================== */}

      <ellipse
        cx="350"
        cy="530"
        rx="130"
        ry="20"
        fill="#0B1F3A"
        opacity="0.25"
      />

      {/* =========================
          PHONE BODY
      ========================== */}

      <g transform="rotate(-2 350 300)">
        <rect
          x="230"
          y="65"
          width="235"
          height="455"
          rx="42"
          fill="url(#phoneGradient)"
          stroke="#173A63"
          strokeWidth="7"
        />

        {/* Inner screen */}
        <rect
          x="244"
          y="80"
          width="207"
          height="425"
          rx="31"
          fill="url(#screenGradient)"
        />

        {/* Notch */}
        <rect
          x="312"
          y="83"
          width="72"
          height="20"
          rx="10"
          fill="#06162A"
        />

        <circle
          cx="392"
          cy="93"
          r="4"
          fill="#173A63"
        />

        {/* Back / Close icon */}
        <path
          d="M275 140L290 155M290 140L275 155"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Flash icon */}
        <path
          d="M415 136L403 153H413L405 168L423 147H413L415 136Z"
          fill="white"
        />

        {/* =====================
            PHONE SCANNER
        ====================== */}

        <rect
          x="268"
          y="185"
          width="160"
          height="170"
          rx="16"
          fill="#06172D"
          stroke="#16466F"
          strokeWidth="2"
        />

        {/* Scanner corners */}
        <g
          stroke="#22D3EE"
          strokeWidth="5"
          strokeLinecap="round"
        >
          <path d="M282 215V203C282 198 286 195 291 195H305" />
          <path d="M391 195H405C410 195 414 198 414 203V215" />

          <path d="M282 325V338C282 343 286 347 291 347H305" />
          <path d="M391 347H405C410 347 414 343 414 338V325" />
        </g>

        {/* QR white card */}
        <rect
          x="300"
          y="218"
          width="96"
          height="96"
          rx="6"
          fill="white"
        />

        {/* QR */}
        <g fill="#071A33">
          <rect x="309" y="227" width="25" height="25" />
          <rect
            x="315"
            y="233"
            width="13"
            height="13"
            fill="white"
          />

          <rect x="362" y="227" width="25" height="25" />
          <rect
            x="368"
            y="233"
            width="13"
            height="13"
            fill="white"
          />

          <rect x="309" y="280" width="25" height="25" />
          <rect
            x="315"
            y="286"
            width="13"
            height="13"
            fill="white"
          />

          <rect x="338" y="227" width="7" height="7" />
          <rect x="348" y="227" width="7" height="7" />
          <rect x="338" y="237" width="7" height="7" />
          <rect x="350" y="247" width="7" height="7" />

          <rect x="338" y="262" width="7" height="7" />
          <rect x="348" y="262" width="7" height="7" />
          <rect x="358" y="262" width="7" height="7" />

          <rect x="338" y="272" width="7" height="7" />
          <rect x="358" y="272" width="7" height="7" />
          <rect x="378" y="272" width="7" height="7" />

          <rect x="338" y="282" width="7" height="7" />
          <rect x="348" y="292" width="7" height="7" />
          <rect x="368" y="292" width="7" height="7" />
          <rect x="378" y="302" width="7" height="7" />
        </g>

        {/* Scanning line */}
        <rect
          x="280"
          y="264"
          width="135"
          height="3"
          rx="2"
          fill="#22D3EE"
          filter="url(#glow)"
        />

        {/* =====================
            GALLERY BUTTON
        ====================== */}

        <circle
          cx="347"
          cy="415"
          r="27"
          fill="#12385E"
          stroke="#2563EB"
          strokeWidth="2"
        />

        {/* Image icon */}
        <rect
          x="335"
          y="403"
          width="24"
          height="20"
          rx="3"
          stroke="white"
          strokeWidth="2"
        />

        <circle
          cx="342"
          cy="409"
          r="3"
          fill="white"
        />

        <path
          d="M337 419L344 412L349 416L354 410L359 419H337Z"
          fill="white"
        />
      </g>

      {/* =========================
          HAND
      ========================== */}

      <path
        d="
          M210 520
          C190 500 177 467 182 430
          L190 355
          C192 338 202 325 214 328
          C226 331 229 344 226 359
          L222 390
          C229 365 238 350 248 354
          C259 358 260 371 255 386
          L247 425
          C245 453 238 487 230 510
          Z
        "
        fill="#FDBA74"
      />

      {/* Hand highlight */}
      <path
        d="M202 370C199 348 205 335 214 331"
        stroke="#FED7AA"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Finger holding phone */}
      <path
        d="
          M458 310
          C472 300 485 303 491 315
          C497 327 491 341 478 347
          L459 355
          Z
        "
        fill="#FDBA74"
      />

      <path
        d="
          M458 375
          C473 367 485 372 490 384
          C495 396 488 409 476 414
          L460 420
          Z
        "
        fill="#FDBA74"
      />

      {/* =========================
          FLOATING BLUE LEAVES
      ========================== */}

      <path
        d="M120 470C100 445 101 420 120 403C139 421 140 447 120 470Z"
        fill="#60A5FA"
        opacity="0.45"
      />

      <path
        d="M130 480C137 450 155 435 177 438C172 460 154 477 130 480Z"
        fill="#22D3EE"
        opacity="0.35"
      />

      {/* =========================
          SMALL SHIELD
      ========================== */}

      <g opacity="0.8">
        <circle
          cx="155"
          cy="430"
          r="23"
          fill="#EFF6FF"
        />

        <path
          d="M155 417L165 421V429C165 437 160 443 155 446C150 443 145 437 145 429V421L155 417Z"
          stroke="#2563EB"
          strokeWidth="2"
        />

        <path
          d="M151 430L154 433L160 426"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};




 function ChaseFraudHowItWorks() {
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
        body: "Retail banks, Payment Aggregators, And Merchants."
    },
    {
        title: "Clear Use Case",
        body: "Generation management and security monitoring of dynamic and static QR codes."
    },
    {
        title: "Problem Solved",
        body: "QR Codes fraud (Quishing) and tampering lead to misdirected payments and loss of customer trust. AbiQR ensures the integrity of every code"
    }
]


const propositions = [
    "Cryptographic signing of QR payloads",
    "Real-time tampering detection",
    "Dynamic QR generation API",
    "Merchant management dashboard"
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

