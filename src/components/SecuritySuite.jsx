const products = [
  {
    name: "AbiYc",
    tagline: "Know your customer with ease",
    description:
      "With AbiYc, we've made it easy for entrepreneurs and businesses to verify identities, screen customers, and stay compliant without slowing down onboarding.",
  },
  {
    name: "Abimirror",
    tagline: "AI-fueled background check",
    description:
      "Whether it's employees or clients onboarding, Abimirror runs AI-powered background checks that surface risk before it becomes your problem.",
  },
];

const CubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M11 2L19 6.5V15.5L11 20L3 15.5V6.5L11 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M3 6.5L11 11M11 11L19 6.5M11 11V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

function ProductCard({ name, tagline, description }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-perimeter bg-gradient-to-b from-deep-steel-2 to-deep-steel p-8 transition duration-250 hover:border-signal-blue-dim">
      <div className="mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-signal-blue/30 bg-signal-blue/[0.12] text-signal-blue">
        <CubeIcon />
      </div>
      <h3 className="mb-1.5 text-xl">{name}</h3>
      <div className="mb-3 font-mono text-xs uppercase tracking-wider text-signal-blue">
        {tagline}
      </div>
      <p className="mb-6 text-[14.5px]">{description}</p>
      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm font-semibold text-paper transition hover:text-signal-blue"
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 11L11 3M11 3H5M11 3V9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

export default function SecuritySuite() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-content gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue">
            Our security suite
          </div>
          <h2 className="text-[28px] sm:text-[32px]">
            Continuous Visibility &amp; Protection.
          </h2>
          <p className="mb-0 max-w-sm text-[17px]">
            Discover vulnerabilities and prevent fraud with our suite of
            security products designed for modern tech stacks.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
