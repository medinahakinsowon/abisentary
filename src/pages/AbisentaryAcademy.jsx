import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
// import AcademyOrbit from "../components/academy/AcademyOrbit";
// import AcademyWhy from "../components/academy/AcademyWhy";
// import AcademyPath from "../components/academy/AcademyPath";
// import AcademyPrograms from "../components/academy/AcademyPrograms";
// import CTABanner from "../components/CTABanner";
import BacktoTop from "../components/BacktoTop";
import WorkforceReadinessCard from "../components/academy/Workforcereadinesscard";
import AcademyRisk from "../components/academy/AcademyRisk";
import AcademyComparison from "../components/academy/Academycomparison";
import AcademyCycle from "../components/academy/Academycycle";
import Academyresilient from "../components/academy/Academyresilient";
import EmployeeRiskExplorer from "../components/academy/EmployeeRiskExplorer";
import AcademyLearningPaths from "../components/academy/Academylearningpaths";
import AcademyThreats from "../components/academy/Academythreats";
import AcademyAiPolicy from "../components/academy/AcademyAiPolicy";
import AcademyDashboard from "../components/academy/AcademyDashboard";
import AcademyOrganization from "../components/academy/AcademyOrganization";
import AcademyWhat from "../components/academy/AcademyWhat";
import AcademyTrustTrack from "../components/academy/AcademyTrustTrack";
import AcademyWorkforce from "../components/academy/AcademyWorkforce";


const stats = [
  { value: "6", label: "Certification tracks" },
  { value: "500+", label: "Learners trained" },
  { value: "85%", label: "Job placement rate" },
  { value: "100%", label: "Practitioner-led" },
];

export default function Academy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="px-8 pb-10 pt-16">
        <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_440px]">
          <div>
            <StatusChip>ABISENTARY ACADEMY FOR BUSINESS</StatusChip>
            <h1 className="mt-5.5 text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[56px]">
              Turn Your Employees Into{" "}
              <span className="text-signal-blue">
                Your First Line Of Digital Defence.
              </span>
            </h1>
            <p className="mb-8 max-w-md text-lg">
              Build an Ai ready and cyber-resilient workforce with role-based
              education, employee assessment, security simulations and
              measurable workforce readiness.
            </p>
            <div className="mb-11 flex flex-wrap gap-3.5">
              <a
                href="#workforce-assessment"
                className="inline-flex items-center gap-2 rounded bg-signal-blue px-7 py-3.5 text-[15px] font-bold text-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
              >
                Request Workforce Assessment
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded border border-perimeter px-7 py-3.5 text-[15px] font-semibold text-paper transition hover:border-signal-blue hover:bg-signal-blue/10"
              >
                Book a Demo
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4.5 font-mono text-xs uppercase tracking-wider text-paper-faint">
              <span>Graduates now working in</span>
              {["Finance", "Healthcare", "Government"].map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-4.5 before:content-['/'] before:text-perimeter"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <WorkforceReadinessCard />
        </div>
      </section>

      {/* Stats */}
      {/* <section className="border-y border-perimeter-soft px-8 py-10">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 font-mono text-[26px] font-semibold text-signal-blue-bright sm:text-[30px]">
                {s.value}
              </div>
              <div className="font-mono text-[13px] text-paper-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <AcademyRisk />
      <AcademyComparison />
      <AcademyCycle />
      <Academyresilient />
      <EmployeeRiskExplorer />
      <AcademyLearningPaths />
      <AcademyThreats />
      <AcademyAiPolicy />

      <AcademyDashboard />

      <AcademyOrganization />

      <AcademyWhat />

      <AcademyTrustTrack />

      <AcademyWorkforce />

      {/* <div id="programs">
        <AcademyPrograms />
      </div> */}

      {/* <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <CTABanner
            title="Ready to start your cybersecurity career?"
            body="Applications are open for the next cohort. Spots are limited to keep classes hands-on."
            ctaLabel="Apply now"
            to="/contact"
          />
        </div>
      </section> */}

      <BacktoTop />
    </Layout>
  );
}
