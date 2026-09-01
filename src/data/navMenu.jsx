// Dummy/placeholder nav content — swap labels, descriptions, and links for the real
// site structure once it's decided. `to` = internal route, `href` = external/anchor.

const IconGear = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M9 2.3V3.8M9 14.2V15.7M15.7 9H14.2M3.8 9H2.3M13.7 4.3L12.6 5.4M5.4 12.6L4.3 13.7M13.7 13.7L12.6 12.6M5.4 5.4L4.3 4.3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconShield = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M9 2L15 4.3V8.5C15 12 12.3 14.7 9 15.7C5.7 14.7 3 12 3 8.5V4.3L9 2Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const IconDocument = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M4.5 2H11L14 5V16H4.5V2Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M11 2V5H14"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M6.7 9H11.8M6.7 11.7H11.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconPulse = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M2 9.5H5.5L7 5.5L10.5 13.5L12 9.5H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUserCheck = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="7" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M2.5 15C3 12 4.8 10.5 7 10.5C8 10.5 8.9 10.8 9.6 11.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M12 9.5L13.5 11L16 8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconScan = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M11.8 11.8L16 16"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconQr = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect
      x="2.5"
      y="2.5"
      width="5"
      height="5"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <rect
      x="10.5"
      y="2.5"
      width="5"
      height="5"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <rect
      x="2.5"
      y="10.5"
      width="5"
      height="5"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M10.5 11H12.5V13H10.5V11ZM13.5 11H15.5V13H13.5V11ZM10.5 14H12.5V16H10.5V14ZM13.5 14H15.5V16H13.5V14Z"
      fill="currentColor"
    />
  </svg>
);

const IconEye = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M1.5 9S4.5 3.5 9 3.5 16.5 9 16.5 9 13.5 14.5 9 14.5 1.5 9 1.5 9Z"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <circle cx="9" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const IconClipboardCheck = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect
      x="4"
      y="3"
      width="10"
      height="13"
      rx="1.3"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M6.8 3V2.3C6.8 1.8 7.2 1.5 7.6 1.5H10.4C10.8 1.5 11.2 1.8 11.2 2.3V3"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M6.8 9.5L8.3 11L11.3 7.7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect
      x="2"
      y="4"
      width="14"
      height="10"
      rx="1.4"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M2.5 5L9 10L15.5 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const navMenu = [
  {
    label: "Solutions",
    items: [
      {
        title: "Technology Advisor",
        description: "Digital Transformation & Strategy",
        icon: IconGear,
        to: "/techadvisor",
      },
      {
        title: "Security Assessment Sprint",
        description: "Rapid  Penetration Testing & Review",
        icon: IconShield,
        to: "/securityassess",
      },
      {
        title: "Compliance Readiness",
        description: "ISO 27001, NDPR, and PCIDSS Implementation",
        icon: IconDocument,
        to: "/compliance",
      },
      {
        title: "Managed Detection & Response",
        description: "24/7 Active Threat Hunting and Monitoring",
        icon: IconPulse,
        to: "/detection",
      },
      {
        title: "Fractional vCISO",
        description: "Executive-level Security Leadership",
        icon: IconUserCheck,
        to: "/fractional",
      },
    ],
    footerLink: { label: "View all solutions", to: "/services" },
  },
  {
    label: "Products",
    items: [
      {
        title: "Abiscan",
        description: "File & URL Vulnerability Scanner",
        icon: IconScan,
        href: "/abiscan",
      },
      {
        title: "ChaseFraud",
        description: "A Powered Fraud Detection System",
        icon: IconShield,
        href: "/chasefraud",
      },
      {
        title: "AbiQR",
        description: "Secured QR code Management",
        icon: IconQr,
        href: "/abiqr",
      },
      {
        title: "AbiMirror",
        description: "Reliable Background Checks",
        icon: IconEye,
        href: "/abimirror",
      },
      {
        title: "AbiComplyStarter",
        description: "Compliance Starter Kit",
        icon: IconClipboardCheck,
        href: "abicomply",
      },
      {
        title: "AbiMail",
        description: "Email Security Diagonistic Suite",
        icon: IconMail,
        href: "abimail",
      },
      {
        title: "AbiYc",
        description: "Know Your Customer With Ease",
        icon: IconClipboardCheck,
        href: "abiyc",
      },
    ],
    footerLink: { label: "See all products", href: "#" },
  },
  {
    label: "Industries",
    items: [
      {
        title: "Financial Institutions",
        description: "Payment security & fraud defense",
        href: "/financial",
      },
      {
        title: "SMEs",
        description: "Campus network & data security",
        href: "/smes",
      },
      {
        title: "Healthcare",
        description: "Patient data & systems protection",
        href: "/health",
      },

      {
        title: "Government",
        description: "Supply chain system hardening",
        href: "/govern",
      },
      ,
    ],
    footerLink: { label: "Explore all industries", href: "#" },
  },
  {
    label: "Resources",
    items: [
      {
        title: "Blog",
        description: "Analysis, guides & commentary",
        href: "/blog",
      },
      {
        title: "Case Studies",
        description: "How clients use Abisentry",
        href: "/casestudy",
      },
      {
        title: "Guides & Reports",
        description: "Live sessions & recordings",
        href: "/guides",
      },
      {
        title: "Abisentry Academy",
        description: "Cybersecurity training programs",
        href: "/academy",
      },
    ],
    footerLink: { label: "Visit resource hub", href: "#" },
  },
  {
    label: "Company",
    items: [
      { title: "About us", description: "Our story & mission", to: "/about" },
      { title: "Careers", description: "Join the team", href: "/career" },
      {
        title: "Contact",
        description: "Announcements & press",
        href: "/contact",
      },
    ],
    footerLink: { label: "About Abisentry", to: "/about" },
  },
];
