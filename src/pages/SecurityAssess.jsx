import React from "react";
import Layout from "../layout/Layout";
import { PageHeader } from "../components/HelperComponent";
import { Link } from "react-router-dom";

import {
  Users,
  AlertTriangle,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
} from "lucide-react";



const deliverables = [
  "Executive Summary Report",
  "Detailed Technical Findings",
  "API and Web App Penetration Test Result",
  "Cloud Architecture Review (AWS/GCP/Azure)",
  "Remediation Roadmap",
];

const SecurityAssess = () => {
  return (
    <Layout>
      <PageHeader
        title="Security Assessment Sprint"
        body="A Rapid, Deep-Dive penetration test and architecture review to identify critical vulnerabilities before attackers do."
      />
      <div className="mx-auto max-w-content">
        <section className="px-8 py-12">
          {/* WHO IS IT FOR */}
          <div className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-[280px_1fr]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal-blue">
                <Users size={17} />
                Who is it for?
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-white/65">
                This service is designed for organizations, business leaders,
                and technology teams that need expert guidance to make better
                technology decisions, improve their digital infrastructure,
                strengthen security, and align technology investments with their
                overall business objectives.
              </p>
            </div>
          </div>
          {/* THE PROBLEM */}
          <div className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-[280px_1fr]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal-blue">
                <AlertTriangle size={17} />
                The Problem
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-white/65">
                Organizations often face complex technology challenges without
                having the right strategic direction or technical expertise to
                address them effectively. Poorly aligned systems, inefficient
                processes, security gaps, and unclear technology priorities can
                increase operational costs, create unnecessary risks, and limit
                business growth.
              </p>
            </div>
          </div>
          {/* THE OUTCOME */}
          <div className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-[280px_1fr]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal-blue">
                <ShieldCheck size={17} />
                The Outcome
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-white/65">
                Our approach provides organizations with clearer technology
                direction, stronger governance, improved operational efficiency,
                and a practical roadmap for building secure and scalable
                technology environments that support long-term business growth.
              </p>
            </div>
          </div>
          {/* DELIVERABLES */}
          <div className="grid gap-8 py-14 md:grid-cols-[280px_1fr]">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal-blue">
                <FileCheck2 size={17} />
                Highlight Deliverables
              </div>
            </div>

            <div className="grid max-w-4xl gap-3 sm:grid-cols-2">
              {deliverables.map((item, index) => (
                <div
                  key={item}
                  className={`group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-signal-blue/40 hover:bg-signal-blue/[0.05] ${
                    index === deliverables.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-signal-blue/10 text-sm font-semibold text-signal-blue">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-4">
                    <span className="text-sm font-medium leading-6 text-white/80">
                      {item}
                    </span>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-signal-blue"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center mb-8 gap-5">
          <div>
            <h1 className="lg:text-[30px] text-[15px] font-bold">Ready to secure your infrastructure</h1>
          </div>
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
        </div>
      </div>
    </Layout>
  );
};

export default SecurityAssess;
