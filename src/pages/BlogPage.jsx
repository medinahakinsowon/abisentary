
import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { blogPosts } from "../data/blogPost";

import Layout from "../layout/Layout";
import BacktoTop from "../components/BacktoTop";

const categories = [
  "All",
  "Cybersecurity",
  "Identity & Fraud",
  "Security Awareness",
  "Risk Management",
  "Compliance",
  "Threat Intelligence",
  "Cloud Security",
  "Cyber Resilience",
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Get featured article
  const featuredPost = blogPosts.find((post) => post.featured);

  // Filter articles
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Don't show featured article again in the article grid
  const latestPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <Layout>
      <div className="bg-void-navy text-white">
        {/* =====================================================
          HERO
      ====================================================== */}
        <section className="relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-blue bg-cyan-400/5 px-4 py-2 text-sm font-medium text-signal-blue">
              <Sparkles size={16} />
              Security Insights & Resources
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stay informed.
              <span className="block bg-gradient-to-r from-cyan-300 via-signal-blue to-signal-blue bg-clip-text text-transparent">
                Stay secure.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper-dim sm:text-lg">
              Practical cybersecurity insights, risk management guidance,
              compliance resources, and technology perspectives to help your
              business navigate an evolving digital threat landscape.
            </p>

            {/* Search */}
            <div className="mt-10 max-w-2xl">
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 backdrop-blur-xl transition focus-within:border-cyan-400/40">
                <Search size={20} className="text-slate-500" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search cybersecurity resources..."
                  className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}
        {featuredPost && (
          <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[500px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-void-navy via-transparent to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-signal-blue backdrop-blur">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-signal-blue">
                      {featuredPost.category}
                    </span>

                    <span className="text-xs text-slate-500">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-5 text-xs text-slate-500">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={15} />
                      {featuredPost.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={15} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="group mt-8 flex w-fit items-center gap-2 rounded-xl bg-signal-blue px-5 py-3.5 text-sm font-bold text-deep-steel transition hover:bg-cyan-300"
                  >
                    Read article
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
          CATEGORIES
      ====================================================== */}
        <section className="border-y border-white/5">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-signal-blue text-slate-950"
                      : "border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
          ARTICLES
      ====================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-signal-blue">
              <ShieldCheck size={17} />
              Latest insights
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore our resources
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore practical insights designed to help organizations
              strengthen security, reduce risk, and operate with confidence.
            </p>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                    <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-signal-blue backdrop-blur">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3 text-xs text-paper-dim">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {post.date}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-700" />

                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold leading-snug transition group-hover:text-cyan-300">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                      <span className="text-xs text-slate-500">
                        {post.author}
                      </span>

                      <button
                        type="button"
                        className="group/link flex items-center gap-1 text-sm font-semibold text-signal-blue"
                      >
                        Read more
                        <ChevronRight
                          size={16}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 px-6 py-16 text-center">
              <Search size={28} className="mx-auto text-slate-600" />

              <h3 className="mt-5 text-lg font-semibold">No resources found</h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search term or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-void-navy"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
      <BacktoTop/>
    </Layout>
  );
};

export default BlogPage;

