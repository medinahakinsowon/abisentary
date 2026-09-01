import React from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  ExternalLink,
  FileSearch,
  LockKeyhole,
  Mail,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Layout from "../layout/Layout";
import BacktoTop from "../components/BacktoTop";

const APP_URL = "https://mailaa.netlify.app/";

const features = [
  {
    icon: Search,
    title: "Scan Emails",
    description:
      "Analyze an email and examine the information available for potential security concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Email Security",
    description:
      "Evaluate important email security indicators and gain better visibility into potential risks.",
  },
  {
    icon: Activity,
    title: "Run Diagnostics",
    description:
      "Get structured diagnostic information that helps you understand what is happening with an email.",
  },
  {
    icon: FileSearch,
    title: "Understand Results",
    description:
      "Review the results of your scan and identify areas that may need further investigation.",
  },
];

const checks = [
  "Email security indicators",
  "Potential security risks",
  "Diagnostic information",
  "Actionable insights",
];

export default function AbiMail() {
  return (
    <Layout>
      <div className="overflow-hidden">
        {/* =====================================================
          HERO
      ===================================================== */}
        <section className="relative">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-[15%] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-signal-blue">
                  <Sparkles size={14} />
                  Email Security & Diagnostics
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-paper-dim sm:text-5xl md:text-6xl lg:text-7xl">
                  Scan your email.
                  <span className="block text-signal-blue">
                    Understand your risk.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-paper-dim sm:text-lg">
                  Quickly analyze an email for security indicators and
                  diagnostic information. Get a clearer understanding of
                  potential risks before deciding what to do next.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-signal-blue px-6 py-3.5 text-sm font-semibold text-void-navy shadow-lg shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Scan an Email
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    How It Works
                  </a>
                </div>

                {/* Benefits */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {checks.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-paper-dim"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10">
                        <Check size={12} className="text-signal-blue" />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT - VISUAL */}
              <div className="relative z-10">
                <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative rounded-[28px] border border-white/10 bg-void-navy p-4 shadow-2x backdrop-blur sm:p-5">
                  {/* Browser header */}
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>

                    <div className="rounded-md border border-white/10 bg-white/5 px-4 py-1.5 text-[9px] font-semibold text-slate-400">
                      EMAIL SECURITY SCANNER
                    </div>

                    <div className="w-10" />
                  </div>

                  {/* Scanner */}
                  <div className="rounded-2xl bg-slate-800 p-5 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-signal-blue">
                          Security Scan
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                          Email Diagnostic
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-signal-blue">
                        <Mail size={20} />
                      </div>
                    </div>

                    {/* Email preview */}
                    <div className="mt-6 rounded-xl border border-white/10 bg-void-navy p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-paper-dim">
                          <Mail size={17} />
                        </div>

                        <div className="flex-1">
                          <div className="h-2 w-36 rounded-full bg-white/10" />
                          <div className="mt-2 h-1.5 w-48 max-w-full rounded-full bg-white/5" />
                        </div>
                      </div>

                      <div className="mt-5 space-y-2">
                        <div className="h-1.5 w-full rounded-full bg-white/5" />
                        <div className="h-1.5 w-11/12 rounded-full bg-white/5" />
                        <div className="h-1.5 w-4/5 rounded-full bg-white/5" />
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mt-4 space-y-3">
                      <DiagnosticRow
                        icon={ShieldCheck}
                        title="Security Indicators"
                        status="Analyzed"
                      />

                      <DiagnosticRow
                        icon={Activity}
                        title="Email Diagnostics"
                        status="Checked"
                      />

                      <DiagnosticRow
                        icon={AlertTriangle}
                        title="Potential Risks"
                        status="Review"
                        warning
                      />
                    </div>

                    {/* Intelligence */}
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-signal-blue">
                        <LockKeyhole size={16} />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-signal-blue">
                          Security Intelligence
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          Review your email security diagnostics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating result card */}
                <div className="absolute -bottom-7 -left-5 hidden w-52 rounded-2xl border border-slate-700 bg-void-navy p-4 shadow-xl sm:block lg:-left-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-signal-blue">
                      <FileSearch size={17} />
                    </div>

                    <Check size={16} className="text-signal-blue" />
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-paper-dim">
                    Scan Result
                  </p>

                  <p className="mt-1 text-sm font-bold text-paper-dim">
                    Diagnostics Complete
                  </p>

                  <div className="mt-3 h-1 rounded-full bg-slate-700">
                    <div className="h-full w-4/5 rounded-full bg-signal-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          PROBLEM
      ===================================================== */}
        <section className="border-y border-paper-dim bg-void-navy">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
                  The problem
                </span>

                <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-paper-dim sm:text-4xl lg:text-5xl">
                  Not every suspicious email is easy to understand.
                </h2>
              </div>

              <div className="space-y-5 text-sm leading-8 text-paper-dim sm:text-base">
                <p>
                  Emails can contain technical information and security
                  indicators that are difficult to interpret without the right
                  tools.
                </p>

                <p>
                  A message may appear ordinary while containing information
                  that deserves closer inspection. Understanding these
                  indicators can help you make more informed security decisions.
                </p>

                <p className="font-medium text-slate-200">
                  Our email diagnostic platform gives you a structured way to
                  investigate an email and understand its security information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          FEATURES
      ===================================================== */}
        <section>
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
                Platform capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-paper-dim sm:text-4xl lg:text-5xl">
                Get more visibility into your emails.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                A simple diagnostic experience designed to help you investigate
                email security information more efficiently.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-paper-dim bg-void-navy p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-signal-blue">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-paper-dim">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-paper-dim">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
        <section
          id="how-it-works"
          className="border-y border-white/10 bg-void-navy"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
                  How it works
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Three simple steps to investigate an email.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  Start a scan, let the platform process the available
                  information, and review the resulting diagnostics.
                </p>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-signal-blue"
                >
                  Start an email scan
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="space-y-3">
                <Step
                  number="01"
                  title="Submit an email"
                  text="Provide the email information you want to investigate using the security scanner."
                />

                <Step
                  number="02"
                  title="Run the diagnostic"
                  text="The platform analyzes the available information and checks relevant security indicators."
                />

                <Step
                  number="03"
                  title="Review the results"
                  text="Examine the diagnostic information and identify potential areas that deserve attention."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          APP CTA
      ===================================================== */}
        <section id="scanner" className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

          <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-6 lg:py-32">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-signal-blue">
              <Mail size={28} />
            </div>

            <span className="mt-7 block text-xs font-bold titlecase tracking-[0.2em] text-signal-blue">
              Email Security Scanner
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to check an email?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-paper-dim sm:text-base">
              Take the next step and use the email security diagnostic platform
              to examine your email and understand the available security
              indicators.
            </p>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-signal-blue px-7 py-4 text-sm font-semibold text-deep-steel shadow-xl shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Open Email Scanner
              <ExternalLink
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </section>

        {/* =====================================================
          FINAL CTA
      ===================================================== */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:py-28">
            <ShieldCheck size={30} className="mx-auto text-signal-blue" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Make email security decisions with more confidence.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-paper-dim">
              Don't rely only on appearances. Use email diagnostics to get more
              information about the message you're investigating.
            </p>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Scan an Email
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>
      </div>
      <BacktoTop/>
    </Layout>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function DiagnosticRow({ icon: Icon, title, status, warning = false }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/50 p-3.5">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            warning
              ? "bg-amber-400/10 text-amber-400"
              : "bg-cyan-400/10 text-cyan-400"
          }`}
        >
          <Icon size={16} />
        </div>

        <p className="text-xs font-semibold text-slate-200">{title}</p>
      </div>

      <span
        className={`text-[9px] font-semibold ${
          warning ? "text-amber-400" : "text-cyan-400"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xs font-bold text-cyan-400">
        {number}
      </div>

      <div>
        <h3 className="font-bold text-white">{title}</h3>

        <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
      </div>
    </div>
  );
}
