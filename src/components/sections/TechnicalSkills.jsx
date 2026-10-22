"use client";

import React, { useState } from "react";
import { technicalSkills } from "@/data/portfolioData";
import { Search } from "lucide-react";

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...technicalSkills.map((c) => c.category)];

  const filteredGroups = technicalSkills
    .filter((group) => activeCategory === "All" || group.category === activeCategory)
    .map((group) => {
      if (!searchQuery.trim()) return group;
      const q = searchQuery.toLowerCase();
      const filtered = group.skills.filter((s) => s.name.toLowerCase().includes(q));
      return { ...group, skills: filtered };
    })
    .filter((group) => group.skills.length > 0);

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-space-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
              <span>Section 03 // Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
              Skills & <span className="font-semibold text-white">Engineering Stack</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-cinematic-silver mt-2 max-w-xl">
              Categorized by technical domain with explicit depth indicators. Filter or search across languages, distributed engines, and AI tooling.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cinematic-dim" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter tech (e.g. Redis, PySpark)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-space-900 border border-space-700 text-xs font-mono text-cinematic-ivory placeholder-cinematic-dim focus:border-cinematic-ice/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Pills (Scrollable horizontally on mobile) */}
        <div className="flex items-center gap-1.5 pt-5 pb-7 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-space-800 text-cinematic-ivory border border-space-700 shadow-sm"
                  : "bg-space-950 text-cinematic-dim border border-space-850 hover:text-cinematic-silver hover:border-space-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 sm:p-6 rounded-2xl bg-space-900/80 border border-space-800 hover:border-space-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-space-850 mb-3">
                  <h3 className="text-sm font-sans font-semibold text-cinematic-ivory">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-cinematic-ice px-2 py-0.5 rounded bg-cinematic-ice/10 border border-cinematic-ice/20">
                    {group.skills.length} Techs
                  </span>
                </div>

                <p className="text-[11px] text-cinematic-dim font-mono mb-4">
                  {group.summary}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip relative px-2.5 py-1 rounded-lg bg-space-950 border border-space-850 hover:border-cinematic-ice/40 text-xs font-mono text-cinematic-silver hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <span>{skill.name}</span>
                      {skill.core && (
                        <span
                          className="w-1 h-1 rounded-full bg-cinematic-ice shadow-glow-ice"
                          title="Core Competency"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Depth Legend Note */}
              <div className="mt-5 pt-3 border-t border-space-850/80 flex items-center justify-between text-[10px] font-mono text-cinematic-dim">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-cinematic-ice" />
                  <span>Verified Production Experience</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
