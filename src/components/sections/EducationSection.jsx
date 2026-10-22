"use client";

import React from "react";
import { educationHistory, certifications } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-space-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
            <span>Section 06 // Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
            Education & <span className="font-semibold text-white">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-cinematic-silver mt-2 max-w-xl">
            Formal university foundations in Information Technology and Computer Science Engineering, supplemented with specialized industrial programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left: Formal Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cinematic-dim mb-4">
              Formal Degrees & University Programmes
            </h3>

            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-space-900/80 border border-space-800 hover:border-space-700 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-sans font-semibold text-cinematic-ivory">
                      {edu.degree}
                    </h4>
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

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-cinematic-dim border-t border-space-850">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {edu.location}
                  </span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Specialized Industrial Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cinematic-dim mb-4">
              Specialized Industrial Certifications
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-space-900/60 border border-space-800 hover:border-space-700 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-space-850 border border-space-750 text-cinematic-ice shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-sans font-semibold text-cinematic-ivory">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-cinematic-silver font-mono">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-cinematic-dim">
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span className="text-cinematic-ice">{cert.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Academic Rigor Callout */}
            <div className="p-5 rounded-2xl bg-space-950 border border-space-800 text-xs font-mono text-cinematic-dim space-y-1">
              <span className="text-cinematic-ivory font-semibold block">Academic Stance</span>
              <p className="text-cinematic-silver">
                Ranked in the top echelon of the Information Technology batch with a 9.28 CGPA, while maintaining active involvement in campus R&D and technical placement coordination.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
