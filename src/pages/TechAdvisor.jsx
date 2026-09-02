import React from 'react'
import Layout from '../layout/Layout'
import { PageHeader } from '../components/HelperComponent';
import { Link } from 'react-router-dom';



import { Lightbulb, FileText, GraduationCap, Cog } from "lucide-react";

const cards = [
  {
    title: "ICT Advisory",
    description:
      "Get expert guidance to align your technology infrastructure with your business goals, security requirements, and digital transformation strategy.",
    icon: Lightbulb,
  },
  {
    title: "Policy Development",
    description:
      "Develop clear and effective IT and cybersecurity policies that strengthen governance, reduce risks, and support regulatory compliance.",
    icon: FileText,
  },
  {
    title: "Training & Capacity Development",
    description:
      "Build stronger teams through practical training and capacity development designed to improve cybersecurity awareness, skills, and performance.",
    icon: GraduationCap,
  },
  {
    title: "Engineering Design Services",
    description:
      "Design reliable and secure technology solutions tailored to your organization's infrastructure, operational needs, and long-term objectives.",
    icon: Cog,
  },
];

const TechAdvisor = () => {
  return (
    <Layout>
      <PageHeader
        title="Advisory & Consulting"
        body="Digital Transformation, Cybersecurity and Engineering Consulting Firm."
      />

      <section className="px-8 py-12">
        <div className="mx-auto max-w-content">
          <Link to="/contact">
            <button className="group inline-flex items-center gap-3 rounded-md border border-signal-blue/40 bg-signal-blue px-6 py-3 text-sm font-semibold text-deep-steel backdrop-blur-sm transition-all duration-300 hover:border-signal-blue hover:bg-signal-blue hover:shadow-[0_0_25px_rgba(21,93,252,0.3)]">
              <span>Speak with an Expert</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Link>

          <div className="grid grid-cols-1 mt-14 gap-5 sm:grid-cols-1 lg:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-blue/40 hover:bg-signal-blue/[0.05] hover:shadow-[0_15px_40px_-20px_rgba(21,93,252,0.5)]"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-signal-blue/20 bg-signal-blue/10 text-signal-blue transition-all duration-300 group-hover:border-signal-blue/40 group-hover:bg-signal-blue/20">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/60">
                    {card.description}
                  </p>

                  {/* Subtle hover glow */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-signal-blue/10 blur-3xl transition-all duration-500 group-hover:bg-signal-blue/20" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TechAdvisor
