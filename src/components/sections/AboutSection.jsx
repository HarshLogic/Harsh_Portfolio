"use client";

import React from "react";
import Image from "next/image";
import { personalData } from "@/data/portfolioData";
import { Terminal, ShieldCheck, GitBranch, Cpu, Award, BookOpen, Layers } from "lucide-react";
import { WingedStatueMotif, MetallicBeamMotif } from "@/components/ui/CinematicMotifs";

export default function AboutSection() {
  const philosophyPillars = [
    {
      title: "Systems Precision",
      tagline: "Deterministic guarantees beneath the UI",
      desc: "Whether building double-entry ledgers with zero drift or BullMQ worker pools dispatching 10k+ emails/hour, I design backend software with fault tolerance, idempotency, and explicit error boundaries.",
      icon: Cpu,
    },
    {
      title: "Algorithmic Rigor",
      tagline: "895+ Competitive DSA problems solved",
      desc: "Deep theoretical understanding of graph traversals, dynamic programming, and O(1) cache structures applied directly to real-world memory swapping and performance bottlenecks.",
      icon: ShieldCheck,
    },
    {
      title: "Product Polish",
      tagline: "Editorial craft & user-centered ergonomics",
      desc: "Software isn't finished when the test suite passes; it's finished when users experience effortless speed, intuitive workflows, and clean visual typography.",
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-space-850 relative overflow-hidden">
      {/* Background Classical Winged Statue Silhouette */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 pointer-events-none select-none -z-10">
        <WingedStatueMotif className="w-[500px] h-[500px] opacity-[0.05] blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
          <span>Section 02 // Engineering Philosophy & Story</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
          
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory leading-tight">
              &ldquo;I build software that turns{" "}
              <span className="font-semibold text-white">complex ideas</span> into{" "}
              <span className="editorial-gradient-text italic font-serif">useful products</span>.&rdquo;
            </h2>

            <div className="space-y-4 text-cinematic-silver text-base leading-relaxed font-normal">
              <p>
                I am a B.Tech Information Technology undergraduate at Bhagwan Parshuram Institute of Technology (BPIT), GGSIPU, Delhi, with a foundational Computer Science diploma from Amity University.
              </p>
              <p>
                My work spans backend engineering, distributed worker systems, machine learning workflows, and modern full-stack web applications. Over the past three years, I have architected high-throughput async dispatch queues, ACID double-entry banking ledgers, big-data retail demand forecasting pipelines with PySpark and XGBoost, and low-level virtual machine emulators with custom instruction sets.
              </p>
              <p>
                My core methodology is straightforward: thoroughly dissect the underlying systems problem, architect a reliable and mathematically rigorous solution, and present the final outcome in a refined, user-friendly digital product.
              </p>
            </div>

            {/* Quick Education & Leadership Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-space-900/80 border border-space-800">
                <span className="text-[11px] font-mono text-cinematic-ice uppercase tracking-wider block mb-1">
                  Academic Focus
                </span>
                <span className="text-sm font-sans font-medium text-cinematic-ivory block">
                  B.Tech in Information Technology
                </span>
                <span className="text-xs text-cinematic-dim font-mono">
                  BPIT, GGSIPU · 9.28 CGPA (Class of 2027)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-space-900/80 border border-space-800">
                <span className="text-[11px] font-mono text-cinematic-ice uppercase tracking-wider block mb-1">
                  Campus Leadership
                </span>
                <span className="text-sm font-sans font-medium text-cinematic-ivory block">
                  Project Chair, R&D Cell (ML)
                </span>
                <span className="text-xs text-cinematic-dim font-mono">
                  Placement Coordinator at BPIT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card & Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Minimalist Avatar & Identity Banner */}
            <div className="p-6 rounded-3xl bg-space-900 border border-space-700/80 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-space-700 shrink-0">
                  <Image
                    src={personalData.avatar.src}
                    alt={personalData.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-base font-sans font-semibold text-cinematic-ivory">{personalData.name}</h3>
                  <p className="text-xs font-mono text-cinematic-silver">{personalData.title}</p>
                  <p className="text-[11px] font-mono text-cinematic-dim">{personalData.location}</p>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-space-800">
                <div className="p-3 rounded-xl bg-space-950 border border-space-850">
                  <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">B.Tech CGPA</span>
                  <span className="text-xl font-mono font-bold text-cinematic-ivory">9.28</span>
                  <span className="text-[10px] font-mono text-emerald-400 block">Top Academic Tier</span>
                </div>
                <div className="p-3 rounded-xl bg-space-950 border border-space-850">
                  <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">DSA Solved</span>
                  <span className="text-xl font-mono font-bold text-cinematic-ivory">895+</span>
                  <span className="text-[10px] font-mono text-cinematic-ice block">LeetCode / CodeChef</span>
                </div>
                <div className="p-3 rounded-xl bg-space-950 border border-space-850">
                  <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">GSSoC &apos;26 Rank</span>
                  <span className="text-xl font-mono font-bold text-cinematic-ivory">Top 5%</span>
                  <span className="text-[10px] font-mono text-cinematic-silver block">1,976 Points Recorded</span>
                </div>
                <div className="p-3 rounded-xl bg-space-950 border border-space-850">
                  <span className="text-[10px] font-mono text-cinematic-dim uppercase tracking-wider block">SIH 2025</span>
                  <span className="text-xl font-mono font-bold text-cinematic-ivory">Team Lead</span>
                  <span className="text-[10px] font-mono text-cinematic-silver block">Round 3 Qualifier</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-space-850 flex items-center justify-between text-[11px] font-mono text-cinematic-dim">
                <span>Verification Source: Master Document</span>
                <span className="text-emerald-400">100% Fact Checked</span>
              </div>
            </div>

            {/* Subtle Metallic Coordinate Divider */}
            <MetallicBeamMotif />

          </div>
        </div>

        {/* 3 Engineering Philosophy Pillars */}
        <div className="mt-16 pt-12 border-t border-space-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-cinematic-dim mb-6">
            Engineering Tenets // Operating Standards
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-space-900/60 border border-space-800 hover:border-cinematic-ice/40 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-space-850 border border-space-700 flex items-center justify-center text-cinematic-ice">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-sans font-semibold text-cinematic-ivory">{pillar.title}</h4>
                    <span className="text-xs font-mono text-cinematic-ice block mt-0.5">{pillar.tagline}</span>
                  </div>
                  <p className="text-xs text-cinematic-silver leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
