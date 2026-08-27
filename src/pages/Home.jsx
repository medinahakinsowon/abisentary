import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import Radarmap from "../components/Radarmap";
import ServiceCard from "../components/ServiceCard";
import AwardBanner from "../components/AwardBanner";
import CTABanner from "../components/CTABanner";
import { Eyebrow, SectionHead } from "../components/HelperComponent";
import StatusCard from "../components/StatusCard"
import SecuritySuite from "../components/SecuritySuite";
import SecurityFramework from "../components/SecurityFramework";
import ResourceDownload from "../components/ResourcesDownload";
import SecurityadvisorCTA from "../components/SecurityadvisorCTA";
import BacktoTop from "../components/BacktoTop";

const sectors = [
  "Finance & Fintech",
  "Healthcare",
  "Education",
  "Logistics",
  "Public Sector",
  "SMEs & Startups",
];

const services = [
  {
    title: "Fraud Risk",
    body: "Continuous tracking of emerging threats relevant to your sector, translated into action your team can actually take.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 1.5L17 4.5V9C17 13.5 14 16.8 10 18.5C6 16.8 3 13.5 3 9V4.5L10 1.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "API Exposure",
    body: "Configuration audits, access controls and monitoring across your cloud infrastructure so misconfigurations don't become breaches.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5.5 15A3.5 3.5 0 0 1 5 8.02 4.5 4.5 0 0 1 13.9 6.1 3.5 3.5 0 0 1 15 13H5.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Compliance Pressure",
    body: "Enterprise-grade, always-on visibility into your network and endpoints — so issues are caught before they spread.",
    icon: (
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10L8 15L17 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Lack Of Visibility",
    body: "Real-world attack simulations against your network, applications and people — with a plain-language remediation plan.",
    icon: (
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
     <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
     <path
       d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6Z"
       stroke="currentColor"
       strokeWidth="1.5"
     />
   </svg>
    ),
  },

];


const enterprise = [
  {
    title: "Security Assessment Sprint",
    body: "Continuous tracking of emerging threats relevant to your sector, translated into action your team can actually take.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 1.5L17 4.5V9C17 13.5 14 16.8 10 18.5C6 16.8 3 13.5 3 9V4.5L10 1.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Compliance Readiness Program",
    body: "Configuration audits, access controls and monitoring across your cloud infrastructure so misconfigurations don't become breaches.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5.5 15A3.5 3.5 0 0 1 5 8.02 4.5 4.5 0 0 1 13.9 6.1 3.5 3.5 0 0 1 15 13H5.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Managed Detection & Response",
    body: "Enterprise-grade, always-on visibility into your network and endpoints — so issues are caught before they spread.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10L8 15L17 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Fractional vCISO",
    body: "Real-world attack simulations against your network, applications and people — with a plain-language remediation plan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "N1B+", label: "Transaction Secured" },
  { value: "ISO & NDPR", label: "Compliance Frameworks" },
  { value: "24/7", label: "Active Threat Monitoring" },
  { value: "Zero", label: "Breaches Across Managed Clients" },
];

const contextPoints = [
  {
    title: "Local Threat Intelligence",
    body: "We track and mitigate fraud rings and threat actors specifically targeting African financial institutions.",
  },
  {
    title: "Regulatory Alignment",
    body: "Deep expertise in CBN guidelines, NDPR, and local compliance mandates.",
  },
  {
    title: "Practical Execution",
    body: "No generic advice. We provide actionable remediation steps that your engineering team can actually implement.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_460px]">
          <div>
            {/* <StatusChip className="pt-6">Status: Monitoring · 24/7</StatusChip> */}
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[60px]">
              Cybersecurity backbone{" "}
              <span className="text-signal-blue">for Digital businesses.</span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
              We get you secured, you focus on growth. Threat intelligence,
              cloud protection and digital monitoring built for the realities of
              doing business across Africa.
            </p>
            <div className="mb-11 flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded bg-signal-blue px-7 py-3.5 text-[15px] font-semibold text-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
              >
                Book Free Security Review
              </Link>
              <Link
                to="/resources/samplereport"
                className="inline-flex items-center gap-2 rounded border border-perimeter px-7 py-3.5 text-[15px] font-semibold text-paper transition hover:border-signal-blue hover:bg-signal-blue/10"
              >
                See Sample Report
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4.5 font-mono text-xs uppercase tracking-wider text-paper-faint">
              <span>Trusted across</span>
              {["Finance", "Healthcare", "Education", "Logistics"].map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-4.5 before:content-['/'] before:text-perimeter"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <Radarmap />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-perimeter-soft px-8 py-10">
        <h2 className="text-center mb-9">
          SECURING THE INFRACSTRUCTURE OF AFRICA'S FASTEST GROWING COMPANIES
        </h2>
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 font-mono text-[30px] font-semibold text-signal-blue sm:text-[30px]">
                {s.value}
              </div>
              <div className="font-semibold text-[15px] text-paper-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <SectionHead
            eyebrow="What we do"
            title="The Cost Of Scaling Insecurely."
            body="From the first scan to the last incident report, we cover the ground most businesses don't have the time or staff to watch themselves."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title}>
                {s.body}
              </ServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* enterprise overview */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <SectionHead
            eyebrow="What we do"
            title="Enterprise-grade Security, Packaged for growth."
            body="From the first scan to the last incident report, we cover the ground most businesses don't have the time or staff to watch themselves."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {enterprise.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title}>
                {s.body}
              </ServiceCard>
            ))}
          </div>
        </div>
      </section>

       {/* Built for the African context */}
           <section className="px-8 py-24">
             <div className="mx-auto grid max-w-content items-center gap-16 md:grid-cols-2">
               <div>
                 <h2 className="mb-5 text-[32px] sm:text-[38px] font-bold">Built for the African context.</h2>
                 <p className="mb-9 max-w-md text-[18px]">
                   Global security frameworks are essential, but local execution is what prevents breaches. We understand
                   the specific threat actors, regulatory nuances, and infrastructure challenges unique to the African
                   digital economy.
                 </p>
                 <div className="flex flex-col gap-7">
                   {contextPoints.map((point) => (
                     <div key={point.title} className="flex gap-4">
                       <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-signal-blue text-signal-blue">
                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                           <path d="M2 6.2L4.8 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                         </svg>
                       </span>
                       <div>
                         <h3 className="mb-1 text-base">{point.title}</h3>
                         <p className="mb-0 text-[14.5px]">{point.body}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               <StatusCard />
             </div>
           </section>

           <SecuritySuite/>

           <SecurityFramework/>

           <ResourceDownload/>

           <SecurityadvisorCTA/>

      {/* Award + sectors */}
      {/* <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <div className="mb-14">
            <AwardBanner />
          </div>
          <Eyebrow>Who we protect</Eyebrow>
          <h2 className="mb-7 text-[28px] sm:text-[32px]">
            Built for the sectors that can least afford downtime
          </h2>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-perimeter px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <CTABanner
            title="Not sure where you're exposed?"
            body="Start with a free initial consultation — we'll tell you plainly what we find."
          />
        </div>
      </section>  */}
      <BacktoTop/>
    </Layout>
  );
}




