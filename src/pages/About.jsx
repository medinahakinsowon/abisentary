import Layout from "../layout/Layout";
import StatusChip from "../components/StatusChip";
import { PageHeader, Eyebrow, SectionHead } from "../components/HelperComponent";
import AwardBanner from "../components/AwardBanner";
import Timeline from "../components/Timeline";
import CTABanner from "../components/CTABanner";

const timelineItems = [
  {
    year: "Founding",
    title: "Started with a single mission",
    body: "Abisentry Technologies was founded to close the gap between enterprise-grade cybersecurity and the businesses that actually needed it across Nigeria and the wider region.",
  },
  {
    year: "Growth",
    title: "Expanded across sectors",
    body: "Grew from individual assessments into ongoing security partnerships with clients in finance, healthcare and education.",
  },
  {
    year: "Academy",
    title: "Launched Abisentry Academy",
    body: "Built a dedicated training arm to grow the next generation of African cybersecurity and AI talent.",
  },
  {
    year: "2025",
    title: "Recognized industry-wide",
    body: "Named Cybersecurity and Threat Intelligence Company of the Year at the Global Elite Business Magazine Awards.",
  },
];

const values = [
  {
    letter: "A",
    title: "Plain-language security",
    body: "We explain findings the way we'd want them explained to us — no jargon standing between you and a decision.",
  },
  {
    letter: "B",
    title: "Built for local realities",
    body: "Threats, infrastructure and compliance requirements differ by region. Our recommendations reflect where you actually operate.",
  },
  {
    letter: "C",
    title: "Investigators first",
    body: "Our team's background is in real cybercrime investigation, not just tooling — that shapes how seriously we take every engagement.",
  },
];

const facts = [
  { label: "Monitoring coverage", value: "24/7" },
  { label: "Sectors served", value: "Finance / Health / Edu" },
  { label: "Certifications", value: "CEH · CTH" },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        status={<StatusChip>Our story</StatusChip>}
        title="Built by analysts who've been on the other side of a breach."
        body="Abisentry Technologies started with a simple observation: African businesses were being sold cybersecurity tools built for someone else's threat landscape. We built the alternative."
      />

      {/* Mission + facts card */}
      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-content items-start gap-16 md:grid-cols-2">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 className="text-[28px]">
              Enterprise-grade protection, without the enterprise price tag or
              complexity.
            </h2>
            <p>
              We believe every business — not just the largest ones — deserves a
              real security posture. That means practical, sector-aware
              protection delivered by people who investigate real cybercrime,
              not just sell software.
            </p>
            <p>
              Our team has worked incident response, digital forensics, malware
              analysis and threat intelligence across finance, healthcare and
              education. That field experience shapes everything we build for
              clients.
            </p>
          </div>
          <div className="rounded-2xl border border-perimeter bg-gradient-to-b from-deep-steel-2 to-deep-steel p-9">
            <div className="mb-5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright">
              By the numbers
            </div>
            <div className="flex flex-col gap-5">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex items-baseline justify-between ${
                    i < facts.length - 1
                      ? "border-b border-perimeter-soft pb-4"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[13px] text-paper-faint">
                    {f.label}
                  </span>
                  <span className="font-mono text-lg text-signal-blue-bright">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Award */}
      <section className="px-8 py-8">
        <div className="mx-auto max-w-content">
          <AwardBanner />
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <SectionHead
            eyebrow="How we got here"
            title="A short, deliberate history"
          />
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Values */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-content">
          <SectionHead
            eyebrow="What we stand for"
            title="The principles behind every engagement"
          />
          <div>
            {values.map((v, i) => (
              <div
                key={v.letter}
                className={`flex gap-5 border-b border-perimeter-soft py-6 ${i === 0 ? "border-t" : ""}`}
              >
                <span className="pt-0.5 font-mono text-sm text-paper-faint">
                  {v.letter}
                </span>
                <div>
                  <h3 className="mb-1.5 text-base">{v.title}</h3>
                  <p className="mb-0 text-[14.5px]">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-content">
          <CTABanner
            title="Want to work with us?"
            body="Tell us where you're exposed and we'll tell you exactly what we'd do about it."
            ctaLabel="Get in touch"
          />
        </div>
      </section>
    </Layout>
  );
}
