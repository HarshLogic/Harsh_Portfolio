"use client";

import React from "react";
import { experienceTimeline } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-space-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
            <span>Section 04 // Professional Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
            Work Experience & <span className="font-semibold text-white">Internships</span>
          </h2>
          <p className="text-sm sm:text-base text-cinematic-silver mt-2 max-w-xl">
            Chronological progression across enterprise web debugging, big-data ML pipelines, open-source administration, and industrial AI traineeships.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mt-12 pl-4 sm:pl-8 border-l border-space-700/60 space-y-12">
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Indicator */}
              <div
                className={`absolute -left-[21px] sm:-left-[37px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  item.status === "Current Role"
                    ? "bg-emerald-400 border-space-950 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                    : "bg-space-850 border-space-600 group-hover:border-cinematic-ice group-hover:bg-cinematic-ice"
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-space-900/70 border border-space-800 hover:border-space-700 transition-colors space-y-4">
                
                {/* Header: Role, Company & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-sans font-semibold text-cinematic-ivory">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-cinematic-ice mt-0.5">
                      <span className="font-medium text-white">{item.company}</span>
                      <span>•</span>
                      <span className="text-cinematic-dim flex items-center gap-1">
                        <MapPin size={11} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Dates & Status Badge */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                    <span className="text-xs font-mono text-cinematic-silver flex items-center gap-1">
                      <Calendar size={12} className="text-cinematic-dim" />
                      {item.period}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                        item.status === "Current Role"
                          ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                          : "bg-space-850 border border-space-750 text-cinematic-dim"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-cinematic-silver leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-cinematic-silver font-normal">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-cinematic-ice mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-space-850">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-space-950 border border-space-850 text-[10px] font-mono text-cinematic-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
