"use client";

import React from "react";
import { educationHistory } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, ArrowDown, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-10 sm:pb-12 border-b border-space-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
            <span>Section 07 // Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
            Education & <span className="font-semibold text-white">University Degrees</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cinematic-silver mt-2 max-w-xl">
            Formal collegiate foundations in Information Technology and Computer Science Engineering with consistent top-tier academic records.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mt-10 sm:mt-12 items-start">
          
          {/* Left: Formal Degrees Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-space-900/80 border border-space-800 hover:border-space-700 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-sans font-semibold text-cinematic-ivory">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-cinematic-ice mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-cinematic-silver font-mono">
                      {edu.affiliate}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                    <span className="px-3 py-1 rounded-full bg-cinematic-ice/10 border border-cinematic-ice/20 text-cinematic-ice font-mono text-xs font-bold">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-cinematic-dim flex items-center gap-1">
                      <Calendar size={11} />
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-cinematic-silver leading-relaxed font-normal">
                  {edu.description}
                </p>

                <div className="pt-3 flex items-center justify-between text-xs font-mono text-cinematic-dim border-t border-space-850">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {edu.location}
                  </span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Academic Stance & Leadership Note */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 rounded-3xl bg-space-900/60 border border-space-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cinematic-dim">
                <GraduationCap size={16} className="text-cinematic-ice" />
                <span>Collegiate Standing</span>
              </div>
              
              <div className="space-y-3 text-xs text-cinematic-silver leading-relaxed font-normal">
                <p>
                  Ranked in the top echelon of the Information Technology cohort at BPIT, GGSIPU with an active <span className="text-white font-mono font-semibold">9.28 CGPA</span>.
                </p>
                <p>
                  Concurrently serving as <span className="text-cinematic-ivory font-medium">Project Chair of the R&D Cell (Machine Learning)</span>, coordinating collegiate workshops and guiding student research initiatives.
                </p>
                <p>
                  Appointed <span className="text-cinematic-ivory font-medium">Placement Coordinator</span>, liaising between technical recruiters and the student engineering body.
                </p>
              </div>

              <div className="pt-3 border-t border-space-850">
                <a
                  href="#certificates"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cinematic-ice hover:text-white transition-colors"
                >
                  <span>Explore Industrial Traineeships</span>
                  <ArrowDown size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
