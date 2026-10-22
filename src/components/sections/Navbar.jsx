"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/portfolioData";
import { Menu, X, FileText, ArrowUpRight, Sparkles, Volume2, VolumeX } from "lucide-react";

export default function Navbar({ soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Selected Work", href: "#work" },
    { name: "Architecture", href: "#architecture" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-space-950/85 backdrop-blur-md border-b border-space-700/80 py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Harshvardhan Sinha - Home"
          >
            <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center font-mono font-bold text-base text-cinematic-ivory tracking-tighter group-hover:border-cinematic-ice/50 group-hover:shadow-glow-ice transition-all">
              {personalData.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-medium text-sm tracking-tight text-cinematic-ivory group-hover:text-white transition-colors flex items-center gap-2">
                {personalData.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-cinematic-silver uppercase">
                  Available for SDE / AI Roles
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-space-900/60 p-1.5 rounded-full border border-space-700/60 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-cinematic-silver hover:text-cinematic-ivory hover:bg-space-800 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Audio Feedback Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-full border border-space-700 bg-space-850 text-cinematic-silver hover:text-cinematic-ivory hover:border-space-600 transition-colors"
              title={soundEnabled ? "Mute interactive acoustic tones" : "Enable subtle interaction sounds"}
              aria-label="Toggle interaction sounds"
            >
              {soundEnabled ? <Volume2 size={15} className="text-cinematic-ice" /> : <VolumeX size={15} />}
            </button>

            {/* Resume CTA Trigger */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-850 hover:bg-space-800 border border-space-700 hover:border-cinematic-ice/50 text-xs font-mono uppercase tracking-wider text-cinematic-ivory transition-all shadow-sm"
            >
              <FileText size={13} className="text-cinematic-ice" />
              <span>Resume</span>
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cinematic-ivory text-space-950 hover:bg-cinematic-ice hover:shadow-glow-ice text-xs font-semibold tracking-wide transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="p-2 rounded-lg border border-space-700 bg-space-850 text-cinematic-ivory text-xs font-mono"
              aria-label="View Resume"
            >
              <FileText size={16} className="text-cinematic-ice" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-space-700 bg-space-850 text-cinematic-ivory focus:outline-none"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-space-950/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 border-b border-space-700">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-mono tracking-widest text-cinematic-dim uppercase pb-2 border-b border-space-800">
              Navigation Index
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-sans text-cinematic-ivory hover:text-cinematic-ice py-2 border-b border-space-850 transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-cinematic-dim">0{idx + 1}</span>
              </a>
            ))}

            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-space-850 border border-space-700 text-sm font-mono text-cinematic-ivory"
              >
                <FileText size={16} className="text-cinematic-ice" />
                <span>View Resume & Credentials</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cinematic-ivory text-space-950 font-semibold text-sm"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Dialog / Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-space-900 border border-space-700 p-6 shadow-2xl">
            <button
              onClick={() => setResumeModalOpen(false)}
              className="absolute top-5 right-5 text-cinematic-silver hover:text-white p-1 rounded-lg border border-space-700"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cinematic-ice/10 border border-cinematic-ice/20 text-cinematic-ice">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-cinematic-ivory">Harshvardhan Sinha — Resume</h3>
                <p className="text-xs text-cinematic-silver font-mono">B.Tech IT · BPIT (CGPA 9.28) · Class of 2027</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-space-950 border border-space-800 text-xs text-cinematic-silver space-y-2 mb-6">
              <div className="flex justify-between py-1 border-b border-space-850">
                <span className="text-cinematic-dim">Primary Focus:</span>
                <span className="text-cinematic-ivory font-mono">Backend Systems & AI Engineering</span>
              </div>
              <div className="flex justify-between py-1 border-b border-space-850">
                <span className="text-cinematic-dim">Total Solved:</span>
                <span className="text-cinematic-ivory font-mono">895+ Competitive Problems</span>
              </div>
              <div className="flex justify-between py-1 border-b border-space-850">
                <span className="text-cinematic-dim">Current Role:</span>
                <span className="text-cinematic-ivory font-mono">Software Dev Intern @ RBP FINIVIS</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-cinematic-dim">Direct Contact:</span>
                <span className="text-cinematic-ice font-mono">{personalData.contact.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalData.contact.email}?subject=Resume%20Request%20-%20Harshvardhan%20Sinha`}
                className="flex-1 text-center py-2.5 px-4 rounded-xl bg-cinematic-ivory text-space-950 font-medium text-xs hover:bg-cinematic-ice transition-colors"
              >
                Request Updated PDF by Email
              </a>
              <a
                href={personalData.contact.resumeUrl}
                download
                className="py-2.5 px-4 rounded-xl bg-space-850 border border-space-700 text-cinematic-ivory hover:border-cinematic-ice/40 text-xs font-mono transition-colors"
              >
                Direct Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
