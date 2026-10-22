"use client";

import React from "react";
import { personalData } from "@/data/portfolioData";
import { ArrowUp, Terminal, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ playAudioCue }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playAudioCue?.();
  };

  return (
    <footer className="bg-space-950 border-t border-space-850 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-space-850">
          {/* Brand & Mission */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center font-mono font-bold text-xs text-cinematic-ivory">
                {personalData.initials}
              </div>
              <span className="font-sans font-medium text-base text-cinematic-ivory">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs text-cinematic-silver font-mono max-w-md">
              &ldquo;Building systems that work beautifully beneath the surface.&rdquo;
            </p>
          </div>

          {/* Quick Jump Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <nav className="flex items-center gap-4 text-xs font-mono text-cinematic-silver">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 p-2.5 rounded-full bg-space-900 hover:bg-space-850 border border-space-700 text-xs font-mono text-cinematic-silver hover:text-white transition-all shadow-sm"
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={14} className="text-cinematic-ice" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cinematic-dim">
          <div className="flex items-center gap-2">
            <span>© 2026 {personalData.name}.</span>
            <span>All master facts verified from official records.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Next.js 14 App Router · Tailwind CSS · Geist Typography</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
