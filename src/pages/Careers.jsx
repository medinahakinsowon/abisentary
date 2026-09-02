
import React, { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Layout from "../layout/Layout";
import BacktoTop from "../components/BacktoTop";

const benefits = [
  {
    icon: Rocket,
    title: "Build Meaningful Solutions",
    description:
      "Work on cybersecurity solutions that help businesses protect their people, systems, data, and customers.",
  },
  {
    icon: GraduationCap,
    title: "Keep Growing",
    description:
      "We encourage continuous learning, professional development, and opportunities to expand your technical and professional skills.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside people who value knowledge sharing, teamwork, accountability, and different perspectives.",
  },
  {
    icon: ShieldCheck,
    title: "Make an Impact",
    description:
      "Your work contributes directly to creating safer digital environments for organizations and their customers.",
  },
  {
    icon: Code2,
    title: "Solve Real Problems",
    description:
      "Tackle practical technology, security, compliance, and business challenges rather than working on solutions that exist only on paper.",
  },
  {
    icon: HeartHandshake,
    title: "People First",
    description:
      "We believe great security starts with great people. We aim to create an environment where people can contribute and thrive.",
  },
];

const openRoles = [
  {
    title: "Cybersecurity Analyst",
    type: "Full-time",
    location: "Nigeria",
    icon: ShieldCheck,
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Hybrid / Remote",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps Engineer",
    type: "Full-time",
    location: "Hybrid / Remote",
    icon: Cloud,
  },
  {
    title: "Security Consultant",
    type: "Full-time",
    location: "Nigeria",
    icon: BriefcaseBusiness,
  },
];

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-void-navy outline-none transition placeholder:text-slate-400 focus:border-signal-blue focus:ring-4 focus:ring-cyan-500/10";

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this to your backend/API later.
    console.log("Application submitted");
  };

  return (
    <Layout>
      <main className="bg-white text-void-navy">
        {/* =====================================================
          HERO
      ====================================================== */}
        <section className="relative isolate overflow-hidden bg-void-navy">
          {/* Background grid */}
          <div
            className="absolute inset-0 -z-20 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          {/* Glows */}
          <div className="absolute left-1/4 top-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute right-[-150px] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-signal-blue">
                <Sparkles size={16} />
                Careers at Abisentry
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Build a safer
                <span className="block bg-gradient-to-r from-signal-blue via-blue-400 to-signal-blue bg-clip-text text-transparent">
                  digital future with us.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Join a team working to make the digital world safer. At
                Abisentry, you'll have the opportunity to solve real
                cybersecurity challenges, build innovative solutions, and make a
                meaningful impact.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#open-roles"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-signal-blue px-6 py-3.5 text-sm font-bold text-void-navy transition hover:bg-cyan-300"
                >
                  View open roles
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#application"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-paper-dim transition hover:bg-white/10"
                >
                  Apply now
                </a>
              </div>
            </div>

            {/* Hero stats */}
            <div className="mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              <div className="bg-void-navy p-6 backdrop-blur">
                <ShieldCheck className="mb-4 text-signal-blue" size={24} />
                <p className="text-sm font-semibold text-white">
                  Security focused
                </p>
                <p className="mt-1 text-xs leading-5 text-paper-dim">
                  Work at the forefront of digital security.
                </p>
              </div>

              <div className="bg-void-navy p-6 backdrop-blur">
                <Users className="mb-4 text-signal-blue" size={24} />
                <p className="text-sm font-semibold text-white">
                  People driven
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Grow alongside a collaborative team.
                </p>
              </div>

              <div className="bg-void-navy p-6 backdrop-blur">
                <Rocket className="mb-4 text-signal-blue" size={24} />
                <p className="text-sm font-semibold text-white">
                  Impact focused
                </p>
                <p className="mt-1 text-xs leading-5 text-paper-dim">
                  Build solutions that solve real problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          WHY WORK WITH US
      ====================================================== */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-signal-blue">
                Why Abisentry
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-void-navy sm:text-4xl">
                More than a job. Build something that matters.
              </h2>

              <p className="mt-5 text-sm leading-7 text-paper-dim sm:text-base">
                We bring together technology, cybersecurity, and people to solve
                challenges that matter. We want our team to learn, contribute,
                experiment, and grow.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-signal-blue transition group-hover:bg-cyan-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-void-navy">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-paper-dim">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
          OPEN ROLES
      ====================================================== */}
        <section id="open-roles" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-signal-blue">
                  Opportunities
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Explore open positions
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-paper-dim sm:text-base">
                  Find an opportunity where your skills can make a difference.
                  Don't see your exact role? You can still submit a general
                  application below.
                </p>
              </div>
            </div>

            <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {openRoles.map((role) => {
                const Icon = role.icon;

                return (
                  <div
                    key={role.title}
                    className="group flex flex-col gap-5 p-6 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between sm:p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper-dim text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-600">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-bold text-void-navy">
                          {role.title}
                        </h3>

                        <div className="mt-1 flex flex-wrap gap-4 text-xs text-paper-dim">
                          <span className="flex items-center gap-1.5">
                            <BriefcaseBusiness size={13} />
                            {role.type}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} />
                            {role.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRole(role.title);

                        document.getElementById("application")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-void-navy transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      Apply for role
                      <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
          APPLICATION SECTION
      ====================================================== */}
        <section id="application" className="bg-slate-950 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* Left content */}
              <div className="lg:sticky lg:top-10">
                <span className="text-sm font-bold uppercase tracking-widest text-signal-blue">
                  Join our team
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to make an impact?
                </h2>

                <p className="mt-5 text-sm leading-7 text-paper-dim sm:text-base">
                  Tell us about yourself, your experience, and what you can
                  bring to Abisentry. Whether you're applying for an open
                  position or simply want to introduce yourself, we'd love to
                  hear from you.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-signal-blue"
                      size={19}
                    />
                    <p className="text-sm text-paper-dim">
                      Work on meaningful cybersecurity challenges.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-signal-blue"
                      size={19}
                    />
                    <p className="text-sm text-paper-dim">
                      Develop your technical and professional skills.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-signal-blue"
                      size={19}
                    />
                    <p className="text-sm text-paper-dim">
                      Collaborate with people who care about security.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
                  <Mail size={18} className="text-signal-blue" />
                  <span className="text-sm text-paper-dim">
                    Have a question? Reach out to our team.
                  </span>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-void-navy">
                    Submit your application
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Complete the form below and our team will review your
                    application.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-800">
                        First name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        required
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-800">
                        Last name
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Email / Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-800">
                        Email address
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-800">
                        Phone number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Position
                    </label>

                    <div className="relative">
                      <select
                        name="position"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className={`${inputClasses} appearance-none pr-10`}
                        required
                      >
                        <option value="">Select a position</option>

                        {openRoles.map((role) => (
                          <option key={role.title} value={role.title}>
                            {role.title}
                          </option>
                        ))}

                        <option value="General Application">
                          General Application
                        </option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-paper-dim"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Current location
                    </label>

                    <input
                      type="text"
                      name="location"
                      placeholder="City, Country"
                      className={inputClasses}
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Years of experience
                    </label>

                    <select name="experience" className={inputClasses} required>
                      <option value="">Select experience</option>
                      <option value="0-1">0 - 1 year</option>
                      <option value="2-3">2 - 3 years</option>
                      <option value="4-5">4 - 5 years</option>
                      <option value="6-8">6 - 8 years</option>
                      <option value="9+">9+ years</option>
                    </select>
                  </div>

                  {/* Cover letter */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Tell us about yourself
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell us about your experience, skills, and why you'd like to join Abisentry..."
                      className={`${inputClasses} resize-none`}
                      required
                    />
                  </div>

                  {/* CV */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Upload CV / Resume
                    </label>

                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center transition hover:border-cyan-400 hover:bg-cyan-50/30">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-signal-blue shadow-sm">
                        <FileText size={22} />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-slate-700">
                        Upload your CV
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        PDF, DOC or DOCX · Maximum 5MB
                      </p>

                      <input
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-signal-blue focus:ring-cyan-500"
                    />

                    <span className="text-xs leading-5 text-paper-dim">
                      I confirm that the information provided is accurate and I
                      consent to Abisentry using my information for recruitment
                      purposes.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-void-navy px-6 py-4 text-sm font-bold text-white transition hover:bg-cyan-600"
                  >
                    Submit application
                    <Send size={17} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BacktoTop/>
    </Layout>
  );
};

export default Careers;



