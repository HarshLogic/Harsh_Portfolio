"use client";

import React, { useState } from "react";
import { certificatesList } from "@/data/portfolioData";
import { Award, ShieldCheck, Calendar, ExternalLink, CheckCircle2, X, Sparkles } from "lucide-react";

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="py-20 sm:py-24 border-b border-space-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-10 sm:pb-12 border-b border-space-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-space-700/70 text-cinematic-silver font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice" />
            <span>Section 05 // Industrial & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-cinematic-ivory">
            Verified <span className="font-semibold text-white">Certificates</span> & Traineeships
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cinematic-silver mt-2 max-w-xl">
            Specialized industrial programs in Artificial Intelligence, applied machine learning workflows, and software foundations.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-3xl bg-gradient-to-b from-space-900/90 to-space-950 p-6 sm:p-8 border border-space-700/80 hover:border-cinematic-ice/40 transition-all duration-300 shadow-cinematic-card flex flex-col justify-between"
            >
              {/* Subtle Atmospheric Top Rim Glow */}
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cinematic-ice/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <div className="space-y-4">
                {/* Badge and Period */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-cinematic-ice/10 border border-cinematic-ice/20 text-xs font-mono text-cinematic-ice font-semibold tracking-wide">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-mono text-cinematic-silver flex items-center gap-1">
                    <Calendar size={12} className="text-cinematic-dim" />
                    {cert.period}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-sans font-semibold text-cinematic-ivory group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cinematic-ice flex items-center gap-1.5">
                    <Award size={14} className="shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cinematic-silver leading-relaxed font-normal">
                  {cert.description}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-cinematic-silver">
                  {cert.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-cinematic-ice shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-space-950 border border-space-850 text-[10px] sm:text-[11px] font-mono text-cinematic-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action / Verification Bar */}
              <div className="mt-6 pt-4 border-t border-space-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <ShieldCheck size={14} />
                  <span>{cert.status}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="px-3 py-1.5 rounded-xl bg-space-900 hover:bg-space-850 border border-space-700 hover:border-cinematic-ice/40 text-xs font-mono text-cinematic-ivory transition-colors"
                  >
                    View Details
                  </button>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-xl bg-cinematic-ivory text-space-950 hover:bg-cinematic-ice transition-colors"
                      title="Verify Certificate"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Details Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <div className="relative w-full max-w-lg rounded-3xl bg-space-900 border border-space-700 p-6 sm:p-8 shadow-2xl space-y-5">
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 text-cinematic-silver hover:text-white p-1 rounded-lg border border-space-700"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cinematic-ice/10 border border-cinematic-ice/20 text-cinematic-ice">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cinematic-ivory">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs text-cinematic-silver font-mono">{activeCert.issuer}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-space-950 border border-space-800 text-xs text-cinematic-silver space-y-2 font-mono">
                <div className="flex justify-between py-1 border-b border-space-850">
                  <span className="text-cinematic-dim">Credential Type:</span>
                  <span className="text-cinematic-ivory">{activeCert.credentialType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-space-850">
                  <span className="text-cinematic-dim">Timeline:</span>
                  <span className="text-cinematic-ivory">{activeCert.period}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-space-850">
                  <span className="text-cinematic-dim">Verification Status:</span>
                  <span className="text-emerald-400">{activeCert.status}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-cinematic-dim">Recipient:</span>
                  <span className="text-cinematic-ice">Harshvardhan Sinha</span>
                </div>
              </div>

              <p className="text-xs text-cinematic-silver leading-relaxed">
                {activeCert.description}
              </p>

              <div className="pt-2 flex items-center justify-end">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-cinematic-ivory text-space-950 font-semibold text-xs hover:bg-cinematic-ice transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
