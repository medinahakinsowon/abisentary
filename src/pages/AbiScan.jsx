import React from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Link2,
  Search,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Globe,
  Users,
  ExternalLink,
} from "lucide-react";
import BacktoTop from "../components/BacktoTop"

const appUrl = "https://abimirror.name.ng/";

const detectionItems = [
  {
    icon: ShieldAlert,
    title: "Phishing Links",
    description:
      "Identify links that may lead to fake websites designed to steal login credentials or sensitive information.",
  },
  {
    icon: Lock,
    title: "Malicious Websites",
    description:
      "Check URLs for indicators associated with malware, harmful content, and other online threats.",
  },
  {
    icon: ArrowRight,
    title: "Suspicious Redirects",
    description:
      "Detect links that may redirect you through unexpected or potentially dangerous destinations.",
  },
  {
    icon: Globe,
    title: "Suspicious Domains",
    description:
      "Get useful security information about domains before deciding whether to visit them.",
  },
];

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Copy the URL",
    description:
      "Found a link you're unsure about? Copy it without opening the website.",
  },
  {
    number: "02",
    icon: Search,
    title: "Open the Scanner",
    description:
      "Visit our URL scanner and paste the link into the scanning interface.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Review the Result",
    description:
      "The app analyzes the URL and provides security information to help you make an informed decision.",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Individuals",
    description:
      "Check links received through email, SMS, social media, or messaging apps.",
  },
  {
    icon: Globe,
    title: "Businesses",
    description:
      "Give employees an additional layer of awareness when dealing with unfamiliar links.",
  },
  {
    icon: ShieldCheck,
    title: "Security Teams",
    description:
      "Use URL analysis as part of your everyday security investigation and awareness workflow.",
  },
];

export default function UrlScannerLanding() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050b14] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -right-40 top-[700px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute -left-40 top-[1400px] h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="/" 
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <ShieldCheck className="h-5 w-5 text-signal-blue" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                Secure<span className="text-cyan-400">URL</span>
              </p>

              <p className="hidden text-[9px] uppercase tracking-[0.3em] text-slate-500 sm:block">
                URL Threat Scanner
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#features"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#who"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Who It's For
            </a>
          </nav>

          {/* App button */}
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-signal-blue px-4 py-2.5 text-sm font-semibold text-deep-steel transition hover:bg-cyan-300 sm:px-5"
          >
            Open Scanner
            <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">
          {/* Cyber grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-signal-blue">
                <span className="h-2 w-2 rounded-full bg-signal-blue shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                Protect yourself from malicious links
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Don't Click It.
                <span className="block text-signal-blue">Scan It First.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Not every link is what it seems. Our URL scanning app helps you
                analyze suspicious links and identify potential online threats
                before you visit them.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-signal-blue px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-signal-blue-bright"
                >
                  Scan a URL
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex h-13 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  Learn How It Works
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08111e] shadow-2xl shadow-black/50">
                  {/* Browser top */}
                  <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.025] px-5 py-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

                    <div className="ml-4 flex-1 rounded-lg border border-white/5 bg-black/20 px-4 py-2 text-xs text-slate-600">
                      secureurl.app / scanner
                    </div>
                  </div>

                  {/* Mock scanner UI */}
                  <div className="grid min-h-[350px] items-center gap-10 p-7 sm:p-12 lg:grid-cols-2 lg:p-16">
                    <div>
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                        <ShieldCheck className="h-7 w-7 text-cyan-400" />
                      </div>

                      <h3 className="text-2xl font-bold sm:text-3xl">
                        Analyze Before You Visit
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-slate-500">
                        Use the scanner to inspect a URL and understand
                        potential security risks before opening the destination.
                      </p>

                      <a
                        href={appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-signal-blue hover:text-cyan-300"
                      >
                        Open the scanner
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Mock result */}
                    <div className="rounded-2xl border border-white/10 bg-[#050b14] p-5 shadow-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-slate-500">
                          URL Analysis
                        </span>

                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-400">
                          ANALYZED
                        </span>
                      </div>

                      <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.025] p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
                            <Link2 className="h-4 w-4 text-signal-blue" />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-xs text-slate-300">
                              https://example.com
                            </p>

                            <p className="mt-1 text-[10px] text-slate-600">
                              URL submitted for analysis
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        {[
                          "Threat indicators",
                          "Domain information",
                          "Security analysis",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between border-b border-white/5 pb-3 text-xs"
                          >
                            <span className="text-slate-500">{item}</span>
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROBLEM
        ====================================================== */}
        <section
          id="about"
          className="border-y border-white/5 bg-[#07101c] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-signal-blue">
                  THE PROBLEM
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  A link can look harmless and still be dangerous.
                </h2>

                <p className="mt-6 leading-7 text-slate-400">
                  Cybercriminals use malicious links to trick people into
                  visiting fraudulent websites, downloading harmful files, or
                  revealing sensitive information.
                </p>

                <p className="mt-4 leading-7 text-slate-500">
                  The challenge is that malicious URLs aren't always obvious.
                  They can appear in emails, social media posts, text messages,
                  advertisements, and even messages from people you know.
                </p>

                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-signal-blue transition hover:text-cyan-300"
                >
                  Check a suspicious link
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Warning card */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-red-500/5 blur-3xl" />

                <div className="relative rounded-3xl border border-red-400/10 bg-[#0a111d] p-7 sm:p-9">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-400/10">
                      <ShieldAlert className="h-6 w-6 text-red-400" />
                    </div>

                    <div>
                      <p className="font-semibold">Think before you click</p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        If you don't recognize a link or weren't expecting it,
                        don't open it immediately.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl border border-white/5 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-wider text-slate-600">
                      Suspicious URL
                    </p>

                    <p className="mt-3 break-all font-mono text-sm text-red-300">
                      https://secure-login-example...
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                      <ShieldAlert className="h-4 w-4 text-red-400" />
                      Always verify before visiting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}
        <section
          id="how-it-works"
          className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-signal-blue">
                HOW IT WORKS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Stay safer in three simple steps.
              </h2>

              <p className="mt-5 text-slate-500">
                You don't need to be a cybersecurity expert to check a
                suspicious link.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                        <Icon className="h-5 w-5 text-signal-blue" />
                      </div>

                      <span className="text-4xl font-bold text-white/[0.05]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}
        <section
          id="features"
          className="border-y border-white/5 bg-[#07101c] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-signal-blue">
                WHAT IT CHECKS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Designed to help you recognize online threats.
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                The scanner provides security insights that can help you make
                better decisions about unfamiliar URLs.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {detectionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                      <Icon className="h-5 w-5 text-signal-blue" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO IT IS FOR
        ====================================================== */}
        <section id="who" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-signal-blue">
                WHO IT'S FOR
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Security for everyone who uses the internet.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {audiences.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                      <Icon className="h-5 w-5 text-signal-blue" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-16 text-center sm:px-10">
              <div className="absolute left-1/2 top-[-150px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <ShieldCheck className="h-7 w-7 text-cyan-400" />
                </div>

                <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Unsure about a link?
                  <span className="block text-signal-blue">
                    Check it before you click.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  Use our URL scanner to analyze suspicious links and make safer
                  decisions online.
                </p>

                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-signal-blue px-7 py-3.5 text-sm font-bold text-deep-steel transition hover:bg-cyan-300"
                >
                  Open URL Scanner
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#030810] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
            </div>

            <div>
              <p className="text-sm font-bold">
                Secure<span className="text-cyan-400">URL</span>
              </p>

              <p className="text-xs text-slate-600">
                Safer links. Smarter decisions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-slate-600">
            <a href="#about" className="hover:text-slate-300">
              About
            </a>

            <a href="#how-it-works" className="hover:text-slate-300">
              How It Works
            </a>

            <a href="#features" className="hover:text-slate-300">
              Features
            </a>

            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400"
            >
              Open Scanner
            </a>
          </div>

          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} SecureURL
          </p>
        </div>
        <BacktoTop/>
      </footer>
    </div>
  );
}
