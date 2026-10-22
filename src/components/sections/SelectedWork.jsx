"use client";

import React, { useState } from "react";
import { flagshipProjects, archiveProjects } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, CheckCircle2, Archive } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import SystemArchitectureVisualizer from "@/components/visuals/SystemArchitectureVisualizer";

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);

  const categories = [
    "All",
    "Full-Stack & Systems",
    "FinTech & Ledger",
    "Systems & Low-Level",
    "AI / ML & Data",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? flagshipProjects
      : flagshipProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 sm:py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-space-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
              <span>Section 01 // Selected Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
              Featured <span className="font-semibold text-white">Systems</span> & Applications
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-cinematic-silver mt-2 max-w-xl">
              Individually engineered case studies emphasizing high-throughput queues, transactional consistency, and predictive AI models.
            </p>
          </div>

          {/* Category Filter Pills (Scrollable horizontally on mobile) */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-space-900/80 border border-space-800 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-space-800 text-cinematic-ivory border border-space-700 shadow-sm"
                    : "text-cinematic-dim hover:text-cinematic-silver"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Live Architecture Visualizer Component */}
        <SystemArchitectureVisualizer />

        {/* Flagship Case Studies List */}
        <div className="space-y-12 sm:space-y-16 mt-10 sm:mt-12">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative rounded-3xl bg-gradient-to-b from-space-900/90 to-space-950 p-5 sm:p-8 lg:p-10 border border-space-700/80 hover:border-cinematic-ice/40 transition-all duration-300 shadow-cinematic-card overflow-hidden"
            >
              {/* Subtle Atmospheric Top Rim Glow */}
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cinematic-ice/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Header, Specs & Metrics */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  {/* Category Index & Number */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] sm:text-xs text-cinematic-ice font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-cinematic-ice/10 border border-cinematic-ice/20">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-cinematic-dim">
                      CASE STUDY // 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium tracking-tight text-cinematic-ivory group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cinematic-silver">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Overview & Challenge */}
                  <div className="space-y-3 text-xs sm:text-sm text-cinematic-silver leading-relaxed font-normal">
                    <p>{project.overview}</p>
                    <div className="p-3 sm:p-3.5 rounded-xl bg-space-950/80 border border-space-800 text-xs">
                      <span className="text-cinematic-ivory font-mono font-medium block mb-1">
                        Core Engineering Challenge:
                      </span>
                      <p className="text-cinematic-silver">{project.challenge}</p>
                    </div>
                  </div>

                  {/* Verified Architectural Decisions */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cinematic-dim">
                      Key Architectural Decisions
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-cinematic-silver">
                      {project.architectureDecisions.map((decision, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-cinematic-ice shrink-0 mt-0.5" />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-space-950 border border-space-800 text-[10px] sm:text-[11px] font-mono text-cinematic-silver hover:text-cinematic-ivory hover:border-space-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Verified Performance Metrics & Action Card */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5 sm:space-y-6">
                  {/* Verified Metric Tiles */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-space-950 border border-space-800">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2.5 sm:p-3 rounded-xl bg-space-900 border border-space-850">
                        <span className="text-[9px] sm:text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">
                          {metric.label}
                        </span>
                        <div className="text-base sm:text-xl font-mono font-bold text-cinematic-ivory mt-0.5">
                          {metric.value}
                        </div>
                        {metric.note && (
                          <span className="text-[9px] sm:text-[10px] text-cinematic-silver font-mono block mt-0.5 line-clamp-1">
                            {metric.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Links & Repository Actions */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-space-950/90 border border-space-800 flex flex-col space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-cinematic-dim pb-2 border-b border-space-850">
                      <span>Deployment & Source</span>
                      <span className="text-emerald-400">Verified Architecture</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-space-900 hover:bg-space-850 border border-space-700 hover:border-cinematic-ice/40 text-xs font-mono text-cinematic-ivory transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>View Codebase</span>
                        </a>
                      ) : (
                        <div className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-space-900/50 border border-space-850 text-center text-xs font-mono text-cinematic-dim">
                          Private / Proprietary
                        </div>
                      )}

                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-cinematic-ivory text-space-950 font-semibold text-xs hover:bg-cinematic-ice transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <div className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-space-900 border border-space-850 text-xs font-mono text-cinematic-dim" title="Demo in internal staging">
                          <span>Demo in Staging</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Project Archive Trigger Banner */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-space-900/60 border border-space-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-sans font-medium text-cinematic-ivory flex items-center justify-center sm:justify-start gap-2">
              <Archive size={18} className="text-cinematic-ice" />
              <span>Looking for more systems & prototypes?</span>
            </h3>
            <p className="text-xs sm:text-sm text-cinematic-silver mt-1">
              Explore additional projects including SANKALP, Employee Attrition modeling, Real Estate valuations, and Online Auction systems.
            </p>
          </div>
          <button
            onClick={() => setArchiveModalOpen(true)}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-space-850 hover:bg-space-800 border border-space-700 hover:border-cinematic-ice/50 text-xs font-mono uppercase tracking-wider text-cinematic-ivory transition-all shrink-0"
          >
            Open Extended Project Archive (4)
          </button>
        </div>

        {/* Extended Project Archive Modal */}
        {archiveModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-space-900 border border-space-700 p-5 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-space-800 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-sans font-semibold text-cinematic-ivory">Extended Project Archive</h3>
                  <p className="text-xs text-cinematic-silver font-mono">Prototypes, Research Models & Supporting Work</p>
                </div>
                <button
                  onClick={() => setArchiveModalOpen(false)}
                  className="p-1.5 rounded-lg border border-space-700 text-cinematic-silver hover:text-white"
                  aria-label="Close archive modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {archiveProjects.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 sm:p-5 rounded-2xl bg-space-950 border border-space-800 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-sans font-medium text-cinematic-ivory">{p.title}</h4>
                        <span className="text-xs font-mono text-cinematic-ice">{p.tagline}</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded bg-space-900 border border-space-750 text-cinematic-silver w-fit">
                        {p.role}
                      </span>
                    </div>

                    <p className="text-xs text-cinematic-silver leading-relaxed">{p.description}</p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap gap-1">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-space-900 border border-space-850 text-[10px] font-mono text-cinematic-dim"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cinematic-silver hover:text-cinematic-ice transition-colors"
                      >
                        <GithubIcon size={12} />
                        <span>Repository</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
