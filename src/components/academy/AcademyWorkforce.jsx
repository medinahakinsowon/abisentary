import React, { useState } from "react";

const weeks = [
  {
    week: "01–02",
    assess: "Baseline Assessment",
    description: "Establish your current workforce security posture.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    week: "03–06",
    assess: "Role-Based Training",
    description: "Train employees based on their specific security roles.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    week: "07–09",
    assess: "Security Simulations",
    description: "Test your workforce against realistic cyber scenarios.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    week: "10–11",
    assess: "Targeted Remediation",
    description: "Address identified weaknesses with focused interventions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />
      </svg>
    ),
  },
  {
    week: "12",
    assess: "Executive Readiness Report",
    description: "Receive a clear picture of your organization's readiness.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M4 19V5" />
        <path d="M4 5h12l-2 3 2 3H4" />
        <path d="M8 19h12" />
      </svg>
    ),
  },
];

const programmes = [
  {
    title: "Cybersecurity",
    description:
      "Develop practical skills to identify, prevent and respond to cyber threats.",
    icon: "shield",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Build practical AI skills for today's rapidly evolving digital workplace.",
    icon: "ai",
  },
  {
    title: "Data Analysis",
    description:
      "Learn how to transform data into meaningful insights and decisions.",
    icon: "chart",
  },
];

const AcademyWorkforce = () => {
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-signal-blue/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-alert-amber/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-content">
        {/* =====================================================
            90-DAY PILOT
        ====================================================== */}

        <div className="mb-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-signal-blue/30 bg-signal-blue/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-signal-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-blue shadow-[0_0_8px_currentColor]" />
              90-Day Programme
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
              Start With a <span className="text-signal-blue">90-Day</span>{" "}
              Workforce AI & Cyber Readiness Pilot
            </h2>

            <p className="mt-5 text-sm leading-7 text-paper/55 sm:text-base">
              A structured programme designed to measure workforce risk,
              strengthen employee capabilities and build a more resilient
              organization.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-perimeter to-transparent lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {weeks.map((item, index) => (
                <div
                  key={item.week}
                  className="group relative rounded-2xl border border-perimeter bg-deep-steel-2 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-signal-blue/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                >
                  {/* Number */}
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal-blue/30 bg-signal-blue/[0.08] text-signal-blue transition-all duration-300 group-hover:border-signal-blue/60 group-hover:bg-signal-blue/[0.15]">
                      {item.icon}
                    </div>

                    <span className="text-xs font-semibold tracking-wider text-paper/30">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-alert-amber">
                    Week {item.week}
                  </p>

                  <h3 className="mt-2 text-[17px] font-semibold leading-6 text-paper">
                    {item.assess}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-paper/45">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("workforce-assessment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-3 rounded-xl bg-signal-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-signal-blue/90 hover:shadow-[0_12px_30px_rgba(0,150,255,0.25)]"
            >
              Request 90-Day Pilot
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* =====================================================
            INDIVIDUAL TRAINING
        ====================================================== */}

        <div className="mb-24">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-alert-amber">
                Abisentary Academy
              </span>

              <h2 className="mt-3 text-3xl font-bold text-paper sm:text-4xl">
                Training for Individuals
              </h2>

              <p className="mt-4 text-sm leading-7 text-paper/50 sm:text-base">
                Building your career in cybersecurity, artificial intelligence
                or data analysis? Explore practical Abisentary Academy
                programmes designed to help you build relevant, real-world
                skills.
              </p>
            </div>

            <button className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-signal-blue transition-colors hover:text-paper">
              Explore Individual Programmes
              <span>→</span>
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {programmes.map((programme) => (
              <button
                type="button"
                key={programme.title}
                onClick={() => setSelectedProgramme(programme.title)}
                className={`group rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-2 ${
                  selectedProgramme === programme.title
                    ? "border-signal-blue/60 bg-signal-blue/[0.06] shadow-[0_15px_40px_rgba(0,150,255,0.1)]"
                    : "border-perimeter bg-deep-steel-2 hover:border-signal-blue/40"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-signal-blue/30 bg-signal-blue/[0.08] text-signal-blue">
                    {programme.icon === "shield" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                      >
                        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    )}

                    {programme.icon === "ai" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                      >
                        <rect x="4" y="4" width="16" height="16" rx="3" />
                        <path d="M9 9h6v6H9z" />
                        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 14h2M2 9h2M2 14h2" />
                      </svg>
                    )}

                    {programme.icon === "chart" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                      >
                        <path d="M4 19V5" />
                        <path d="M4 19h17" />
                        <path d="m7 15 4-4 3 2 6-7" />
                      </svg>
                    )}
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-paper/20 transition-all group-hover:translate-x-1 group-hover:text-signal-blue"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-paper">
                  {programme.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-paper/45">
                  {programme.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* =====================================================
            WORKFORCE ASSESSMENT + FORM
        ====================================================== */}

        <div
          id="workforce-assessment"
          className="overflow-hidden rounded-3xl border border-perimeter bg-deep-steel-2"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Content */}
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-alert-amber/[0.08] blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-alert-amber/30 bg-alert-amber/[0.08] px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-alert-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-alert-amber" />
                  Workforce Risk
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-paper sm:text-4xl">
                  Your Employees Are Already Using AI.
                </h2>

                <h2 className="mt-2 text-3xl font-bold leading-tight text-alert-amber sm:text-4xl">
                  Attackers Are Already Targeting Them.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-paper/50 sm:text-base">
                  Measure workforce risk before it becomes a business incident.
                  Understand your current security posture and identify where
                  targeted training can make the biggest impact.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-4">
                  {[
                    "Fast baseline assessment",
                    "Actionable executive reporting",
                    "Targeted pilot programmes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-paper/70"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal-blue/30 bg-signal-blue/[0.08] text-signal-blue">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3.5 w-3.5"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="border-t border-perimeter bg-black/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-signal-blue">
                  Get Started
                </span>

                <h2 className="mt-2 text-2xl font-bold text-paper">
                  Workforce Assessment Form
                </h2>

                <p className="mt-2 text-sm text-paper/40">
                  Tell us about your organization and we'll help you determine
                  the right starting point.
                </p>
              </div>

              {submitted ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-signal-blue/40 bg-signal-blue/10 text-signal-blue">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-7 w-7"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-paper">
                    Assessment Request Received
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-paper/45">
                    Thank you. Our team will review your request and get back to
                    you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Company */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-paper/60">
                        Full Name
                      </label>

                      <div className="relative">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/25"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21a8 8 0 0 1 16 0" />
                        </svg>

                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-perimeter bg-deep-steel-2 py-3 pl-10 pr-4 text-sm text-paper outline-none placeholder:text-paper/20 transition focus:border-signal-blue/60 focus:ring-1 focus:ring-signal-blue/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-paper/60">
                        Company
                      </label>

                      <div className="relative">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/25"
                        >
                          <path d="M3 21h18" />
                          <path d="M5 21V5l7-3 7 3v16" />
                          <path d="M9 9h1M14 9h1M9 13h1M14 13h1" />
                        </svg>

                        <input
                          type="text"
                          required
                          placeholder="Company name"
                          className="w-full rounded-xl border border-perimeter bg-deep-steel-2 py-3 pl-10 pr-4 text-sm text-paper outline-none placeholder:text-paper/20 transition focus:border-signal-blue/60 focus:ring-1 focus:ring-signal-blue/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-paper/60">
                      Work Email
                    </label>

                    <div className="relative">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/25"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>

                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-perimeter bg-deep-steel-2 py-3 pl-10 pr-4 text-sm text-paper outline-none placeholder:text-paper/20 transition focus:border-signal-blue/60 focus:ring-1 focus:ring-signal-blue/20"
                      />
                    </div>
                  </div>

                  {/* Employee count */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-paper/60">
                      Number of Employees
                    </label>

                    <select
                      required
                      className="w-full rounded-xl border border-perimeter bg-deep-steel-2 px-4 py-3 text-sm text-paper outline-none transition focus:border-signal-blue/60 focus:ring-1 focus:ring-signal-blue/20"
                    >
                      <option value="">Select workforce size</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-paper/60">
                      Tell us about your needs
                    </label>

                    <textarea
                      rows="4"
                      placeholder="What would you like to assess or improve?"
                      className="w-full resize-none rounded-xl border border-perimeter bg-deep-steel-2 px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/20 transition focus:border-signal-blue/60 focus:ring-1 focus:ring-signal-blue/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-signal-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-blue/90 hover:shadow-[0_12px_30px_rgba(0,150,255,0.2)]"
                  >
                    Request Workforce Assessment
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>

                  <p className="text-center text-[11px] leading-5 text-paper/25">
                    Your information is kept confidential and will only be used
                    to respond to your assessment request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyWorkforce;
