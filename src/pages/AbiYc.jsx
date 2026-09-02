import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Fingerprint,
  FileCheck,
  IdCard,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import Layout from "../layout/Layout";
import BacktoTop from "../components/BacktoTop";

// =========================================================
// EXISTING APP URL
// =========================================================
const APP_URL = "https://abiyc.top/";

const features = [
  {
    icon: UserCheck,
    title: "Verify Customers",
    description:
      "Verify customer information quickly and make informed decisions before providing your products or services.",
  },
  {
    icon: IdCard,
    title: "Know Your Customer",
    description:
      "Get a clearer understanding of who your customers are and the information associated with them.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce Risk",
    description:
      "Build stronger customer verification processes and reduce uncertainty when onboarding new customers.",
  },
  {
    icon: FileCheck,
    title: "Organized Verification",
    description:
      "Keep customer verification information structured, accessible, and easier to review.",
  },
];

const benefits = [
  "Faster customer verification",
  "Simplified KYC processes",
  "Better customer information",
  "More informed business decisions",
];

export default function AbiYc() {
  return (
    <Layout>
      <div className="overflow-hidden text-white">
        {/* =====================================================
          HERO
      ===================================================== */}
        <section className="relative">
          {/* Background glow */}
          <div className="pointer-events-none absolute left-[10%] top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              {/* LEFT */}
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  <Sparkles size={14} />
                  Customer Verification Platform
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Know your
                  <span className="block text-cyan-400">customers.</span>
                  <span className="block">Verify with confidence.</span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  Make customer verification easier. Get the information you
                  need to understand who your customers are, verify their
                  details, and make better-informed business decisions.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Verify a Customer
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    See How It Works
                  </a>
                </div>

                {/* Benefits */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-slate-400"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                        <Check size={12} className="text-cyan-400" />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                HERO VISUAL
            ================================================= */}
              <div className="relative z-10">
                <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative rounded-[28px] border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-5">
                  {/* Browser header */}
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>

                    <div className="rounded-md border border-white/10 bg-white/5 px-4 py-1.5 text-[9px] font-semibold text-slate-400">
                      CUSTOMER VERIFICATION
                    </div>

                    <div className="w-10" />
                  </div>

                  {/* Verification interface */}
                  <div className="rounded-2xl bg-slate-800 p-5 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          Verification
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                          Customer Profile
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <UserCheck size={20} />
                      </div>
                    </div>

                    {/* Customer profile */}
                    <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/50 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                          <Users size={21} />
                        </div>

                        <div className="flex-1">
                          <div className="h-2.5 w-32 rounded-full bg-white/15" />
                          <div className="mt-2 h-1.5 w-44 max-w-full rounded-full bg-white/5" />
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10">
                          <BadgeCheck size={17} className="text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Verification checks */}
                    <div className="mt-4 space-y-3">
                      <VerificationRow
                        icon={IdCard}
                        title="Customer Information"
                        status="Verified"
                      />

                      <VerificationRow
                        icon={Fingerprint}
                        title="Identity Information"
                        status="Checked"
                      />

                      <VerificationRow
                        icon={Building2}
                        title="Business Information"
                        status="Available"
                      />
                    </div>

                    {/* Verification status */}
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                        <ShieldCheck size={17} />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                          Verification Status
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          Customer information successfully reviewed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating verification card */}
                <div className="absolute -bottom-7 -left-5 hidden w-52 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-xl sm:block lg:-left-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                      <BadgeCheck size={18} />
                    </div>

                    <Check size={16} className="text-cyan-400" />
                  </div>

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Customer Status
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Verification Complete
                  </p>

                  <div className="mt-3 h-1 rounded-full bg-slate-700">
                    <div className="h-full w-full rounded-full bg-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          PROBLEM
      ===================================================== */}
        <section className="border-y border-white/10 bg-slate-950/30">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  The challenge
                </span>

                <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Do you really know who your customers are?
                </h2>
              </div>

              <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                <p>
                  Businesses interact with new customers every day. But
                  collecting customer information is only the first step.
                </p>

                <p>
                  Without an efficient verification process, businesses can
                  spend unnecessary time checking information manually or make
                  decisions without having enough information about the person
                  or business they are dealing with.
                </p>

                <p className="font-medium text-slate-200">
                  A better customer verification process gives your business
                  greater visibility and confidence during customer onboarding.
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Platform capabilities
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Everything you need to know your customers better.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Simplify customer verification and bring important customer
                information together in one place.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
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
          className="border-y border-white/10 bg-slate-950/30"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  How it works
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Verify customers in three simple steps.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  Make verification part of your customer onboarding process
                  without unnecessary complexity.
                </p>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-400"
                >
                  Start verifying
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="space-y-3">
                <Step
                  number="01"
                  icon={Users}
                  title="Enter customer information"
                  text="Provide the relevant information about the customer you want to verify."
                />

                <Step
                  number="02"
                  icon={Search}
                  title="Run the verification"
                  text="Use the platform to process and review the available customer information."
                />

                <Step
                  number="03"
                  icon={BadgeCheck}
                  title="Review the results"
                  text="Understand the information available and make a more informed customer decision."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          WHO IT IS FOR
      ===================================================== */}
        <section>
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-5 md:grid-cols-3">
              <AudienceCard
                icon={Building2}
                title="Businesses"
                text="For businesses that need a simpler way to understand and verify customers during onboarding."
              />

              <AudienceCard
                icon={Users}
                title="Customer-Facing Teams"
                text="Give teams a structured process for reviewing customer information before making decisions."
              />

              <AudienceCard
                icon={ShieldCheck}
                title="Compliance Teams"
                text="Support customer due diligence and verification workflows with organized information."
              />
            </div>
          </div>
        </section>

        {/* =====================================================
          CTA
      ===================================================== */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-6 lg:py-32">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
              <UserCheck size={28} />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Know who you're doing business with.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Simplify customer verification, understand your customers better,
              and make more informed decisions with the right information at
              your fingertips.
            </p>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Start Customer Verification
              <ExternalLink
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
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

function VerificationRow({ icon: Icon, title, status }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/50 p-3.5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
          <Icon size={16} />
        </div>

        <p className="text-xs font-semibold text-slate-200">{title}</p>
      </div>

      <span className="text-[9px] font-semibold text-cyan-400">{status}</span>
    </div>
  );
}

function Step({ number, icon: Icon, title, text }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        <Icon size={18} />
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest text-cyan-400">
            {number}
          </span>

          <h3 className="font-bold text-white">{title}</h3>
        </div>

        <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
      </div>
    </div>
  );
}

function AudienceCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        <Icon size={21} />
      </div>

      <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
    </div>
  );
}
