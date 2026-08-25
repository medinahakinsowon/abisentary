import React from 'react'

const AcademyTrustTrack = () => {
    
  return (
    <div>
      <section className="px-8 py-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-signal-blue/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="text-3xl text-paper sm:text-4xl">
              Part of Abisentary Enterprise
              <span className="text-signal-blue"> TRUST STACK</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-perimeter bg-deep-steel-2 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-signal-blue/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-signal-blue/10 blur-2xl transition-all duration-300 group-hover:bg-signal-blue/20" />

              <div className="relative flex flex-col items-center">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-signal-blue/30 bg-signal-blue/10 text-signal-blue">
                  {/* Icon */}
                  <span className="text-xl">🛡️</span>
                </div>

                <h3 className="text-[30px] font-semibold text-paper">
                  AbiMirror
                </h3>

                <p className="mt-3 text-[18px] leading-6 text-paper/55">
                  Verify people
                </p>

                {/* <div className="mt-6 flex items-center gap-2 text-xs font-medium text-signal-blue">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-blue" />
                  Real-time protection.
                </div> */}
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
    group relative z-10 overflow-hidden rounded-2xl
    border border-alert-amber/60
    bg-deep-steel-2 p-7
    scale-[1.04] md:-translate-y-4
    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
    transition-all duration-300
    hover:-translate-y-5
    hover:border-alert-amber
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
  "
            >
              {/* Amber glow */}
              <div
                className="
      pointer-events-none absolute right-0 top-0
      h-32 w-32 rounded-full
      bg-alert-amber/15 blur-3xl
      transition-all duration-300
      group-hover:bg-alert-amber/25
    "
              />

              {/* Bottom glow for embossed effect */}
              <div
                className="
      pointer-events-none absolute bottom-0 left-1/2
      h-20 w-3/4 -translate-x-1/2
      rounded-full bg-alert-amber/10
      blur-2xl
    "
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className="
    mb-6 flex h-14 w-14 items-center justify-center
    rounded-xl
    border border-alert-amber/40
    bg-alert-amber/10
    text-alert-amber
    shadow-[0_0_25px_rgba(245,158,11,0.15)]
  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10L12 5 2 10l10 5 10-5Z" />
                    <path d="M6 12.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.5" />
                    <path d="M22 10v6" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-[30px] font-semibold text-paper">
                  Abisentary Academy
                </h3>

                {/* Description */}
                <p className="mt-3 text-[18px] leading-6 text-paper/55">
                  Strenghten the people.
                </p>

                {/* Status */}
                {/* <div className="mt-6 flex items-center gap-2 text-xs font-medium text-alert-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-alert-amber shadow-[0_0_8px_rgba(245,158,11,0.7)]" />
                  Fast threat response
                </div> */}
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-perimeter bg-deep-steel-2 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-signal-green/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-signal-green/10 blur-2xl transition-all duration-300 group-hover:bg-signal-green/20" />

              <div className="relative flex flex-col items-center">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-signal-green/30 bg-signal-green/10 text-signal-green">
                  <span className="text-xl">◉</span>
                </div>

                <h3 className="text-[30px] font-semibold text-paper">
                  Abisentary Advisory
                </h3>

                <p className="mt-3 text-[18px] leading-6 text-paper/55">
                  Protect the organisation.
                </p>

                {/* <div className="mt-6 flex items-center gap-2 text-xs font-medium text-signal-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
                  24/7 visibility
                </div> */}
              </div>
            </div>
          </div>

          {/* Text Below Cards */}
          <div className="mx-auto mt-12 max-w-3xl border-l-2 border-signal-blue/40 pl-6">
            <p className="text-[18px] leading-7 text-paper/60 sm:text-[20px] text-center">
              From verifying employees and vendors, to strengthening workforce behaviour,
              to protecting underlying technology environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AcademyTrustTrack
