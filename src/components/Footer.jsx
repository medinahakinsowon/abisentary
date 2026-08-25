import { Link } from "react-router-dom";
import Logo from "./Logo";

const columns = [
  {
    title: "Solutions",
    items: [
      { label: "Technology Advisory", href: "/techadvisor" },
      { label: "Security Assessment", href: "/securityassess" },
      { label: "Compliance Readiness", href: "/compliance" },
      { label: "Managed Detection", href: "/detection" },
      { label: "Fractional vCISO", href: "/fractional" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "Abiscan", href: "#" },
      { label: "AbiQR", href: "#" },
      { label: "AbiMirror", href: "#" },
      { label: "AbiComplyStarter", href: "#" },
      { label: "AbiMail", href: "#" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Financial Institution", href: "/financial" },
      { label: "SMEs", href: "/smes" },
      { label: "Healthcare", href: "/health" },
      { label: "Government", href: "/govern" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Careers", href: "/career" },
      { label: "Academy", href: "/academy" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2.5 5.5H4.5V13.5H2.5V5.5ZM3.5 2.5C4.2 2.5 4.7 3 4.7 3.7C4.7 4.4 4.2 4.9 3.5 4.9C2.8 4.9 2.3 4.4 2.3 3.7C2.3 3 2.8 2.5 3.5 2.5Z"
          fill="currentColor"
        />
        <path
          d="M6.3 5.5H8.2V6.5C8.5 6 9.2 5.3 10.4 5.3C12.1 5.3 13.5 6.4 13.5 8.9V13.5H11.5V9.2C11.5 8 11 7.2 9.9 7.2C9 7.2 8.5 7.8 8.3 8.4C8.2 8.6 8.2 8.9 8.2 9.2V13.5H6.3V5.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M10.5 2.5H9C7.6 2.5 6.5 3.6 6.5 5V6.8H5V9.2H6.5V13.5H9V9.2H10.5L11 6.8H9V5.3C9 4.9 9.3 4.6 9.7 4.6H11V2.5H10.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@abisentrytechnologies.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3.5" width="12" height="9" rx="1.3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.5 4.5L8 8.5L13.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-perimeter-soft bg-deep-steel px-8 pb-8 pt-16">
      <div className="mx-auto max-w-content">
        <div className="mb-12 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-5 max-w-[280px] text-sm text-paper-dim">
              Cybersecurity infrastructure for African digital businesses. Prevent fraud, gain visibility, achieve
              compliance, and scale securely.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-void-navy text-paper-dim transition hover:text-signal-blue-bright"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <FooterCol key={col.title} title={col.title} items={col.items} />
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-perimeter-soft pt-6 text-sm text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Abisentry Technologies. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-signal-blue-bright">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-signal-blue-bright">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-signal-blue-bright">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-paper">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => {
          const className = "text-sm text-paper-dim transition hover:text-signal-blue-bright";
          return (
            <li key={item.label}>
              {item.to ? (
                <Link to={item.to} className={className}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className={className}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}