"use client";

import React from "react";
import { competitiveAndAchievements, personalData } from "@/data/portfolioData";
import { Trophy, Code2, Award, ExternalLink, Flame, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function AchievementsSection() {
  // Profiles for direct verification
  const cpProfiles = personalData.socials.filter((s) =>
    ["LeetCode", "CodeChef", "Codolio", "HackerRank"].includes(s.name)
  );

  return (
    <section id="achievements" className="py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-space-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
              <span>Section 05 // Competitive Rigor & Honors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
              Achievements & <span className="font-semibold text-white">Competitive Proof</span>
            </h2>
            <p className="text-sm sm:text-base text-cinematic-silver mt-2 max-w-xl">
              Verified problem-solving metrics, national hackathon semi-finals, open-source distinctions, and institutional leadership.
            </p>
          </div>

          {/* Direct Verified Profile Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {cpProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-900 border border-space-750 hover:border-cinematic-ice/50 text-xs font-mono text-cinematic-silver hover:text-cinematic-ivory transition-all shadow-sm"
              >
                <span>{p.name}</span>
                <ArrowUpRight size={12} className="text-cinematic-ice" />
              </a>
            ))}
          </div>
        </div>

        {/* Highlight Flagship Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Tile 1: 895 Problems */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-space-850 to-space-950 border border-space-700/90 shadow-cinematic-card space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-space-950 border border-space-800 text-cinematic-ice">
                <Code2 size={24} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cinematic-dim px-2.5 py-1 rounded bg-space-900 border border-space-800">
                DSA Mastery
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                  895+
                </span>
                <span className="text-sm font-mono text-cinematic-silver">Problems Solved</span>
              </div>
              <p className="text-xs text-cinematic-silver mt-2 leading-relaxed">
                Extensive coverage of graphs, dynamic programming, heaps, and tree traversals across LeetCode, CodeChef, and HackerRank.
              </p>
            </div>
            <div className="pt-3 border-t border-space-800/80 flex items-center justify-between text-[11px] font-mono text-cinematic-dim">
              <span>LeetCode: 1,642 (Peak 1,652+)</span>
              <span>CodeChef: 2★ (1,421)</span>
            </div>
          </div>

          {/* Tile 2: Flipkart GRiD 8.0 & SIH */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-space-850 to-space-950 border border-space-700/90 shadow-cinematic-card space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-space-950 border border-space-800 text-amber-400">
                <Trophy size={24} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cinematic-dim px-2.5 py-1 rounded bg-space-900 border border-space-800">
                National Tier
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Flipkart GRiD 8.0
              </div>
              <span className="text-xs font-mono text-amber-300 block mt-0.5">
                National Semi-Finalist Qualifier
              </span>
              <p className="text-xs text-cinematic-silver mt-2 leading-relaxed">
                Also selected as Team Lead for Smart India Hackathon 2025 (Round 3 Semi-Finalist) and Adobe Hackathon Round 3.
              </p>
            </div>
            <div className="pt-3 border-t border-space-800/80 flex items-center justify-between text-[11px] font-mono text-cinematic-dim">
              <span>SIH 2025: Team Lead</span>
              <span>Adobe: Round 3</span>
            </div>
          </div>

          {/* Tile 3: GSSoC 2026 Top 5% */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-space-850 to-space-950 border border-space-700/90 shadow-cinematic-card space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-space-950 border border-space-800 text-emerald-400">
                <Award size={24} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cinematic-dim px-2.5 py-1 rounded bg-space-900 border border-space-800">
                Open Source
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                  Top 5%
                </span>
                <span className="text-sm font-mono text-cinematic-silver">Global Rank</span>
              </div>
              <p className="text-xs text-cinematic-silver mt-2 leading-relaxed">
                GirlScript Summer of Code 2026 Project Leader & Rising Star with 1,976 points scored in the master registry.
              </p>
            </div>
            <div className="pt-3 border-t border-space-800/80 flex items-center justify-between text-[11px] font-mono text-cinematic-dim">
              <span>10+ Developers Mentored</span>
              <span>14 PRs Merged</span>
            </div>
          </div>
        </div>

        {/* Secondary Honors & Institutional Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {competitiveAndAchievements.slice(3).map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-space-900/60 border border-space-800 hover:border-space-700 transition-colors space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-cinematic-dim mb-1">
                  <span>{item.category}</span>
                  <span className="text-cinematic-ice px-2 py-0.5 rounded bg-space-950 border border-space-800">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm font-sans font-semibold text-cinematic-ivory">
                  {item.title}
                </h4>
                <p className="text-xs text-cinematic-silver mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-cinematic-silver hover:text-cinematic-ice pt-2 transition-colors"
                >
                  <span>Verify Profile Record</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
