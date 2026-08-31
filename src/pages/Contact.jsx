import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Send,
  ShieldCheck,
  Clock3,
  MapPin,
} from "lucide-react";

import Layout from "../layout/Layout"
import BacktoTop from "../components/BacktoTop";

const Contact = () => {
  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      description:
        "Drop us a message and we'll respond within 24 hours",
      value: "admin@abisentarytechnologies.com",
      action: "Send us an email",
      href: "mailto:admin@abisentarytechnologies.com",
      iconBg: "bg-void-navy",
      iconColor: "text-signal-blue",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly to our team during business hours.",
      value: "+234 701 844 1890",
      value1: "+229 957 859 38",
      action: "Give us a call",
      href: "tel:+2347018441890",
      href1: "tel:+22995785938",
      iconBg: "bg-void-navy",
      iconColor: "text-signal-blue",
    },
    {
      icon: MessageCircle,
      title: "Chat on WhatsApp",
      description: "Get quick answers from our team on WhatsApp.",
      value: "Chat on Whatsapp",
      action: "Start a conversation",
      href: "https://wa.me/2347018441890",
      iconBg: "bg-void-navy",
      iconColor: "text-signal-blue",
    },
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-slate-50">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-void-navy">
          {/* Decorative background */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                <ShieldCheck size={16} />
                Let&apos;s secure your business
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Request a <span className="text-signal-blue">Quote.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us about your business and security needs. Out team will
                get back to you within <strong>24 hours</strong> with a tailored
                proposal.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT CARDS ================= */}
        <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <a
                  key={index}
                  href={card.href}
                  target={card.href.startsWith("https") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("https")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}
                    >
                      <Icon size={23} strokeWidth={2} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-signal-blue transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-deep-steel">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-deep-steel font-semibold">
                    {card.description}
                  </p>

                  <p className="mt-5 break-all font-medium text-deep-steel">
                    {card.value}
                  </p>

                  <div className="mt-4 text-sm font-semibold text-signal-blue">
                    {card.action} →
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ================= CONTACT FORM ================= */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.5fr] lg:items-start">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-10">
              <span className="text-sm uppercase tracking-[0.18em] text-deep-steel font-bold">
                Get in touch
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-deep-steel sm:text-4xl">
                Tell us what you&apos;re looking to solve.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Fill out the form and one of our security specialists will get
                back to you. Give us a little context about your business and
                what you need help with.
              </p>

              {/* Small information blocks */}
              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-signal-blue-dim">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#10254A]">
                      Quick response
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Our team will get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-signal-blue-dim">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#10254A]">
                      Your information is secure
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Your information is handled securely and kept private.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-signal-blue-dim">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#10254A]">
                      Serving businesses
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Supporting organizations with practical cybersecurity
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#10254A]">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Complete the form below and we&apos;ll be in touch.
                </p>
              </div>

              <form className="space-y-6">
                {/* NAME + COMPANY */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-[#10254A]"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold text-[#10254A]"
                    >
                      Company Name
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Ltd."
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#10254A]"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#10254A]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#10254A]"
                  >
                    Service of Interest <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="service"
                    required
                    defaultValue=""
                    className="h-13 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>

                    <option value="ict-advisory">ICT Advisory</option>
                    <option value="policy-development">
                      Policy Development
                    </option>
                    <option value="training">
                      Training & Capacity Development
                    </option>
                    <option value="engineering">
                      Engineering Design Services
                    </option>
                    <option value="security-assessment">
                      Security Assessment
                    </option>
                    <option value="compliance">Compliance & Governance</option>
                    <option value="managed-security">
                      Managed Security Services
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#10254A]"
                  >
                    Tell Us About Your Needs
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Describe your business, current security challenges, or what you're looking for..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-void-navy px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-signal-blue hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.99]"
                >
                  <Send
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  Send Request
                </button>

                {/* PRIVACY */}
                <p className="text-center text-xs leading-5 text-slate-400">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-slate-600 underline underline-offset-2 hover:text-blue-600"
                  >
                    Privacy Policy
                  </a>
                  . We will never share your information.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <BacktoTop/>
    </Layout>
  );
};

export default Contact;
