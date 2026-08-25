import React from 'react'

const boxes = [
  {
    title: "Financial Services",
    description: "Secure customer assets and transaction handling.",
  },
  {
    title: "Fintech",
    description: "Protect rapid growth and digital infrastructure.",
  },
  {
    title: "Health Care",
    description: "Safe guard sensitive patients records and PII.",
  },
  {
    title: "Telecommunications",
    description: "Secure massive customer data sets.",
  },
  {
    title: "NGOs",
    description: "Protect beneficiary data and operations.",
  },
  {
    title: "Technology Companies",
    description: "Secure intellectual property and code.",
  },
  {
    title: "SMEs",
    description: "Build foundational digital resilience.",
  },
  {
    title: "Government",
    description: "Ensure national data security and compliance.",
  },
];

const AcademyOrganization = () => {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] sm:text-[36px]">
          Built For High-Risk And High-growth Organisations.
        </h2>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {boxes.map((box) => (
            <div
              key={box}
              className="flex flex-col items-center sm:items-start gap-3.5 rounded-xl border border-perimeter bg-deep-steel-2 sm:px-6 sm:py-8 px-3 py-5 text-center transition duration-250 hover:-translate-y-1 hover:border-alert-amber/40"
            >
              <h3 className="sm:text-[20px] text-[12px] sm:font-semibold font-medium text-alert-amber">
                {box.title}
              </h3>
              <p className='sm:text-[16px] text-[12px] sm:text-left'>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademyOrganization
