
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  FileText,
  Globe2,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import Layout from "../layout/Layout"
import BacktoTop from "../components/BacktoTop"

const APP_URL = "https://abicomplystarter.name.ng/";

const features = [
  {
    icon: Globe2,
    title: "Company Profile",
    description:
      "Provide information about your organization and understand how your business environment influences your compliance needs.",
  },
  {
    icon: Layers3,
    title: "Technology Stack",
    description:
      "Identify the technologies your organization uses, including frameworks, programming languages, databases, and platforms.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Assessment",
    description:
      "Tell us about the compliance practices and measures already implemented within your organization.",
  },
  {
    icon: SearchCheck,
    title: "Gap Identification",
    description:
      "Highlight areas that may require additional attention, controls, documentation, or review.",
  },
  {
    icon: Target,
    title: "Compliance Intelligence",
    description:
      "Turn information about your organization and technology environment into meaningful compliance insights.",
  },
  {
    icon: FileText,
    title: "Report Generation",
    description:
      "Generate a structured report from your assessment that can be reviewed, printed, and used for further action.",
  },
];

const steps = [
  {
    number: "01",
    title: "Your Company",
    text: "Start by telling us about your organization and the nature of your business.",
  },
  {
    number: "02",
    title: "Your Technology",
    text: "Identify the technologies, frameworks, databases, and platforms used by your organization.",
  },
  {
    number: "03",
    title: "Your Compliance",
    text: "Tell us about the compliance practices and standards currently in place.",
  },
  {
    number: "04",
    title: "Your Intelligence",
    text: "Receive insights based on the information provided during your assessment.",
  },
  {
    number: "05",
    title: "Your Report",
    text: "Review your results and generate a report that can be printed and shared.",
  },
];

const audiences = [
  "Technology-driven businesses",
  "Startups and growing companies",
  "IT and security teams",
  "Organizations preparing for compliance reviews",
];

export default function AbiComplyStarter() {
  return (
    <Layout>
      <div className="overflow-hidden">
        {/* =========================================================
          HERO
      ========================================================= */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
              {/* Hero content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
                  <Sparkles size={14} />
                  Compliance Intelligence Platform
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Know your compliance.
                  <span className="block text-cyan-600">
                    Understand your risk.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  ABICOMPLY helps you assess your company, understand your
                  technology environment, evaluate your compliance posture, and
                  generate a structured compliance intelligence report.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={APP_URL}
                    target="_blank"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-signal-blue px-6 py-3.5 text-sm font-semibold text-deep-steel shadow-lg shadow-slate-900/10 transition cursor-pointer"
                  >
                    Start Your Assessment
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
                  >
                    See How It Works
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Technology assessment",
                    "Compliance insights",
                    "Printable report",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-slate-500"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10">
                        <Check size={12} className="text-signal-blue" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero visual */}
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative rounded-[28px] border border-slate-200 bg-white/80 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-5">
                  {/* Top bar */}
                  <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    </div>

                    <div className="rounded-md bg-slate-50 px-4 py-1.5 text-[9px] text-slate-400">
                      ABICOMPLY ASSESSMENT
                    </div>

                    <div className="w-10" />
                  </div>

                  {/* Assessment */}
                  <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                          Assessment
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          Compliance Intelligence
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                        <ShieldCheck size={20} />
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-[10px] font-medium text-slate-400">
                        <span>Assessment progress</span>
                        <span>72%</span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-[72%] rounded-full bg-cyan-500" />
                      </div>
                    </div>

                    {/* Assessment items */}
                    <div className="mt-6 space-y-3">
                      <AssessmentItem
                        icon={Globe2}
                        title="Company Profile"
                        description="Organization information"
                        completed
                      />

                      <AssessmentItem
                        icon={Layers3}
                        title="Technology Stack"
                        description="React · Python · MongoDB · PostgreSQL"
                        active
                      />

                      <AssessmentItem
                        icon={ClipboardCheck}
                        title="Compliance Posture"
                        description="Controls and practices"
                      />
                    </div>

                    {/* Intelligence */}
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-cyan-600 shadow-sm">
                        <Zap size={16} />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-cyan-600">
                          Intelligence
                        </p>

                        <p className="mt-0.5 text-xs text-slate-600">
                          Turning your assessment into actionable insight
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating report card */}
                <div className="absolute -bottom-6 -left-5 hidden w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                      <FileText size={17} />
                    </div>

                    <ArrowUpRight size={15} className="text-slate-400" />
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Output
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Compliance Report
                  </p>

                  <div className="mt-3 h-1 rounded-full bg-slate-100">
                    <div className="h-full w-4/5 rounded-full bg-cyan-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          INTRO / PROBLEM
      ========================================================= */}
        <section className="border-y border-slate-200 bg-white/60">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-deep-steel">
                  Why compliance intelligence?
                </span>

                <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Your technology environment is part of your compliance
                  picture.
                </h2>
              </div>

              <div className="space-y-5 text-xl leading-8 text-deep-steel sm:text-base">
                <p>
                  Modern organizations rely on an increasingly complex mix of
                  technologies. From frontend frameworks and programming
                  languages to databases, cloud services, and third-party
                  platforms, your technology environment matters.
                </p>

                <p>
                  But knowing what technologies you use is only part of the
                  picture. You also need visibility into your existing
                  compliance practices and the areas where additional attention
                  may be required.
                </p>

                <p className="font-medium text-slate-800">
                  ABICOMPLY brings these elements together into one guided
                  assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
        <section id="how-it-works">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
                How it works
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-signal-blue sm:text-4xl lg:text-5xl">
                From company information to compliance intelligence.
              </h2>

              <p className="mt-5 text-sm leading-7 text-paper-dim sm:text-base">
                A simple guided process that turns the information you provide
                into a structured assessment.
              </p>
            </div>

            <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative p-6 lg:p-7 ${
                    index !== steps.length - 1
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-cyan-600">
                      {step.number}
                    </span>

                    {index !== steps.length - 1 && (
                      <ArrowRight
                        size={15}
                        className="hidden text-slate-300 lg:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-10 text-base font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          FEATURES
      ========================================================= */}
        <section
          id="features"
          className="border-y border-slate-200 bg-slate-50/70"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-deep-steel">
                Platform capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Understand the pieces that shape your compliance environment.
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-100">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
        <section>
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
                  Technology environment
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-signal-blue sm:text-4xl lg:text-5xl">
                  Your technology stack matters.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-8 text-paper-dim sm:text-base">
                  ABICOMPLY allows you to identify the technologies your
                  organization works with so they can be considered as part of
                  your assessment.
                </p>

                <a
                  href={APP_URL}
                  target="_blank"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-600"
                >
                  Assess your technology environment
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "React",
                  "Python",
                  "MongoDB",
                  "PostgreSQL",
                  "Node.js",
                  "Cloud",
                ].map((technology, index) => (
                  <div
                    key={technology}
                    className={`flex h-28 items-center justify-center rounded-2xl border text-sm font-semibold transition ${
                      index === 0
                        ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-cyan-200 hover:bg-cyan-50/50"
                    }`}
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          WHO IT'S FOR
      ========================================================= */}
        <section
          id="who-its-for"
          className="border-y border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Who it's for
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Built for organizations that take technology and compliance
                  seriously.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Whether you're building a new business, managing an
                  established technology environment, or preparing for a
                  compliance review, ABICOMPLY gives you a structured place to
                  start.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {audiences.map((audience, index) => (
                  <div
                    key={audience}
                    className="flex items-center gap-4 rounded-2xl border border-paper-dim bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Users size={19} />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-cyan-600">
                        0{index + 1}
                      </span>
                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {audience}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          REPORT
      ========================================================= */}
        <section id="report">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
                  Assessment report
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-signal-blue sm:text-4xl lg:text-5xl">
                  Don't just assess. Get a report you can use.
                </h2>

                <p className="mt-6 text-sm leading-8 text-paper-dim sm:text-base">
                  Once your assessment is complete, ABICOMPLY presents the
                  resulting compliance intelligence in a structured report that
                  you can review and print.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Review your assessment results",
                    "Understand identified areas of attention",
                    "Document your assessment",
                    "Print your generated report",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50">
                        <Check size={12} className="text-cyan-600" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={APP_URL}
                  target="_blank"
                  className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-signal-blue px-6 py-3.5 text-sm font-semibold text-deep-steel transition hover:bg-slate-800"
                >
                  Start Your Assessment
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Report visual */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-2xl">
                  <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex items-start justify-between border-b border-slate-100 pb-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                            <ShieldCheck size={16} />
                          </div>

                          <span className="text-sm font-bold text-slate-900">
                            ABICOMPLY
                          </span>
                        </div>

                        <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Compliance Intelligence Report
                        </p>
                      </div>

                      <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold text-emerald-600">
                        Assessment Complete
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 py-6">
                      {[
                        ["Company", "Profile"],
                        ["Technology", "Environment"],
                        ["Compliance", "Assessment"],
                      ].map(([title, value]) => (
                        <div
                          key={title}
                          className="rounded-lg border border-slate-100 bg-slate-50 p-3"
                        >
                          <p className="text-[8px] uppercase text-slate-400">
                            {title}
                          </p>
                          <p className="mt-1 text-[9px] font-bold text-slate-700">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-slate-100 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold text-slate-800">
                          Compliance Intelligence Summary
                        </p>

                        <FileText size={14} className="text-slate-400" />
                      </div>

                      <div className="mt-5 space-y-4">
                        <ReportBar width="82%" />
                        <ReportBar width="67%" />
                        <ReportBar width="74%" />
                        <ReportBar width="58%" />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-[8px] uppercase text-slate-400">
                          Technology
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Reviewed
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-4">
                        <p className="text-[8px] uppercase text-slate-400">
                          Assessment
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Complete
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          FINAL CTA
      ========================================================= */}
        <section className="relative overflow-hidden border-t border-slate-200">
          <div className="absolute left-1/2 top-1/2 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-6 lg:py-32">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
              <ShieldCheck size={25} />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight text-signal-blue sm:text-5xl">
              How compliant is your technology environment?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-paper-dim sm:text-base">
              Tell ABICOMPLY about your company, your technology stack, and your
              existing compliance practices — then get a clearer picture of
              where you stand.
            </p>

            <a
              href={APP_URL}
              target="_blank"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-signal-blue px-7 py-4 text-sm font-semibold text-deep-steel shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Start Your Compliance Assessment
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

function AssessmentItem({
  icon: Icon,
  title,
  description,
  completed,
  active,
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        active
          ? "border-cyan-200 bg-white"
          : "border-slate-200 bg-white/70"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              active
                ? "bg-cyan-50 text-cyan-600"
                : "bg-slate-50 text-slate-500"
            }`}
          >
            <Icon size={17} />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-800">{title}</p>
            <p className="mt-0.5 text-[10px] text-slate-400">
              {description}
            </p>
          </div>
        </div>

        {completed ? (
          <Check size={16} className="text-cyan-600" />
        ) : active ? (
          <span className="rounded-full bg-cyan-50 px-2 py-1 text-[9px] font-bold text-cyan-600">
            Current
          </span>
        ) : (
          <span className="text-[9px] text-slate-400">Pending</span>
        )}
      </div>
    </div>
  );
}

function ReportBar({ width }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
      <div
        className="h-full rounded-full bg-slate-800"
        style={{ width }}
      />
    </div>
  );
}

