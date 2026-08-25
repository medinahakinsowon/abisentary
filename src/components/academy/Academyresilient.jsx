const categories = [
{
title: "AI Readiness",
icon: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M8.5 3C6.6 3 5 4.6 5 6.5C4 6.8 3.3 7.7 3.3 8.8C3.3 9.5 3.6 10.1 4 10.6C3.6 11 3.3 11.6 3.3 12.3C3.3 13.5 4.2 14.5 5.4 14.6C5.7 15.9 6.9 16.8 8.2 16.8C8.7 16.8 9.1 16.6 9.5 16.4V4.5C9.5 3.7 9.2 3 8.5 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
<path d="M11.5 3C13.4 3 15 4.6 15 6.5C16 6.8 16.7 7.7 16.7 8.8C16.7 9.5 16.4 10.1 16 10.6C16.4 11 16.7 11.6 16.7 12.3C16.7 13.5 15.8 14.5 14.6 14.6C14.3 15.9 13.1 16.8 11.8 16.8C11.3 16.8 10.9 16.6 10.5 16.4V4.5C10.5 3.7 10.8 3 11.5 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
</svg>
),
items: ["AI literacy", "Safe AI use", "Prompting", "Confidential data handling", "Responsible AI", "Shadow AI awareness"],
},
{
title: "Cybersecurity Awareness",
icon: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 2.5L18 5.3V10C18 14.5 15 18.3 11 19.7C7 18.3 4 14.5 4 10V5.3L11 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
</svg>
),
items: ["Phishing", "Password security", "Social engineering", "Business email compromise", "Malware", "Insider risk"],
},
{
title: "Security Simulations",
icon: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
<circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4" />
<circle cx="11" cy="11" r="4.3" stroke="currentColor" strokeWidth="1.4" />
<circle cx="11" cy="11" r="1" fill="currentColor" />
</svg>
),
items: ["Controlled phishing tests", "Employee response tracking", "Remedial training"],
},
{
title: "Data Privacy & Compliance",
icon: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
<rect x="5" y="10" width="12" height="8.5" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
<path d="M7.5 10V7.5A3.5 3.5 0 0 1 14.5 7.5V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
</svg>
),
items: ["NDPA awareness", "GDPR awareness where relevant", "Data handling", "Employee private responsibilities"],
},
{
title: "AI Governance",
icon: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M6 2.5H13L17 6.5V19H6V2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
<path d="M13 2.5V6.5H17" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
<path d="M8.5 11.5L10.2 13L14 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
</svg>
),
items: ["AI acceptable-use policies", "Approved AI tools", "Restricted activities", "Employee private acknowledgement"],
},
{
title: "Workforce Analytics",
icon: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M4 18.5V13M11 18.5V7M18 18.5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
</svg>
),
items: ["Employee risk scores", "Department risk", "Training completion", "AI readiness", "Cyber readiness", "compliance visibility"],
},
];

const Check = () => (
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0 text-success-green">
<circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.3" />
<path d="M5.3 8.2L7.1 10L10.7 6.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
</svg>
);

function CategoryCard({ title, icon, items }) {
return (
<div className="flex h-full flex-col rounded-2xl border border-perimeter bg-gradient-to-b from-deep-steel-2 to-deep-steel p-7 transition duration-250 hover:-translate-y-1 hover:border-signal-blue-dim">
<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-signal-blue/30 bg-signal-blue/[0.12] text-signal-blue-bright">
{icon}
</div>
<h3 className="mb-4 text-lg">{title}</h3>
<ul className="flex flex-col gap-3">
{items.map((item) => (
<li key={item} className="flex items-start gap-2.5 text-[14.5px] text-paper-dim">
<Check />
{item}
</li>
))}
</ul>
</div>
);
}

export default function Academyresilient() {
return (
<section className="px-8 py-24">
<div className="mx-auto max-w-content">
<h2 className="mx-auto mb-14 max-w-2xl text-center text-[28px] sm:text-[36px]">
Everything You Need To Build A Digitally Resilient Workforce.
</h2>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <CategoryCard key={c.title} {...c} />
      ))}
    </div>
  </div>
</section>

)
}