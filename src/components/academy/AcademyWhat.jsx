import React from 'react'

const whats = [
  {
    title: "Reduced Human Cyber Risk",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2.5L18 5.3V10C18 14.5 15 18.3 11 19.7C7 18.3 4 14.5 4 10V5.3L11 2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Save AI Option",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M8.5 3C6.6 3 5 4.6 5 6.5C4 6.8 3.3 7.7 3.3 8.8C3.3 9.5 3.6 10.1 4 10.6C3.6 11 3.3 11.6 3.3 12.3C3.3 13.5 4.2 14.5 5.4 14.6C5.7 15.9 6.9 16.8 8.2 16.8C8.7 16.8 9.1 16.6 9.5 16.4V4.5C9.5 3.7 9.2 3 8.5 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 3C13.4 3 15 4.6 15 6.5C16 6.8 16.7 7.7 16.7 8.8C16.7 9.5 16.4 10.1 16 10.6C16.4 11 16.7 11.6 16.7 12.3C16.7 13.5 15.8 14.5 14.6 14.6C14.3 15.9 13.1 16.8 11.8 16.8C11.3 16.8 10.9 16.6 10.5 16.4V4.5C10.5 3.7 10.8 3 11.5 3Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Measurable Workforce Readiness",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M2 9.5H5.5L7 5.5L10.5 13.5L12 9.5H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Compliance Evidence",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M6 2.5H13L17 6.5V19H6V2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M13 2.5V6.5H17"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11.5L10.2 13L14 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Executive Visibility",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 18.5V13M11 18.5V7M18 18.5V10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4" />
        <circle
          cx="11"
          cy="11"
          r="4.3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="11" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const AcademyWhat = ({}) => {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] sm:text-[36px]">
          Built For High-Risk And High-growth Organisations.
        </h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whats.map((box) => (
            <div
              key={box}
              className="flex flex-col lg:flex-row items-center gap-6 rounded-xl border border-perimeter bg-deep-steel-2 px-6 py-4 text-center transition duration-250 hover:-translate-y-1 hover:border-alert-amber/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-signal-blue bg-signal-blue/[0.12] text-signal-blue">
                {box.icon}
              </div>
              <div className='flex justify-center items-center'>
                <h3 className="text-[16px] font-semibold text-paper">
                  {box.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademyWhat
