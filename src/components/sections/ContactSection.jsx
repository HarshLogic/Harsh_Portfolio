"use client";

import React, { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";
import { Mail, Copy, Check, Send, ArrowUpRight, Clock, MapPin, Globe, Sparkles } from "lucide-react";
import { LiquidSymmetryMotif } from "@/components/ui/CinematicMotifs";

export default function ContactSection({ playAudioCue }) {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    playAudioCue?.();
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Create an explicit mailto trigger so visitor's default email client opens with the pre-filled message
    const subject = encodeURIComponent(formState.subject || `Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${personalData.contact.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    playAudioCue?.();
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] pointer-events-none select-none -z-10">
        <LiquidSymmetryMotif className="w-[600px] h-[600px] opacity-[0.06] blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900 border border-space-700 text-cinematic-silver font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice shadow-glow-ice" />
            <span>Initiate Direct Communication</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-light tracking-tight text-cinematic-ivory">
            Let&apos;s Build <span className="font-semibold text-white">Something Meaningful</span>.
          </h2>

          <p className="text-sm sm:text-base text-cinematic-silver max-w-xl mx-auto leading-relaxed font-normal">
            Currently open to Software Engineering, Backend & Systems, and AI/ML opportunities. Let&apos;s discuss architecture, internships, or high-impact technical collaborations.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          
          {/* Left Column: Direct Email Action & Social Profile Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-space-900 border border-space-700/80 shadow-2xl space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-cinematic-dim block">
                Primary Direct Channel
              </span>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-space-950 border border-space-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail size={16} className="text-cinematic-ice shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-cinematic-ivory truncate">
                    {personalData.contact.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-space-900 hover:bg-space-850 border border-space-700 text-cinematic-silver hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {copied && (
                <div className="text-center text-xs font-mono text-emerald-400 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20 animate-fade-in">
                  ✓ Email copied to clipboard!
                </div>
              )}

              <div className="flex gap-3">
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cinematic-ivory text-space-950 font-semibold text-xs tracking-wide hover:bg-cinematic-ice transition-all"
                >
                  <Mail size={14} />
                  <span>Email Me Directly</span>
                </a>
              </div>

              {/* Time & Availability Telemetry */}
              <div className="pt-4 border-t border-space-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-space-950 border border-space-850">
                  <span className="text-cinematic-dim flex items-center gap-1 text-[10px] uppercase">
                    <Clock size={11} />
                    Current IST Time
                  </span>
                  <span className="text-cinematic-ivory font-bold block mt-1">
                    {currentTime || "Loading..."}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-space-950 border border-space-850">
                  <span className="text-cinematic-dim flex items-center gap-1 text-[10px] uppercase">
                    <MapPin size={11} />
                    Location
                  </span>
                  <span className="text-cinematic-ivory font-bold block mt-1">
                    Delhi, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Directory */}
            <div className="p-6 rounded-3xl bg-space-900/60 border border-space-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cinematic-dim block mb-2">
                Verified Social & Coding Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {personalData.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-space-950/80 border border-space-850 hover:border-cinematic-ice/40 hover:bg-space-900 text-xs font-mono text-cinematic-silver hover:text-white flex items-center justify-between transition-all"
                  >
                    <div>
                      <span className="font-medium text-cinematic-ivory block">{s.name}</span>
                      <span className="text-[10px] text-cinematic-dim line-clamp-1">{s.handle}</span>
                    </div>
                    <ArrowUpRight size={13} className="text-cinematic-dim" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-space-900 border border-space-700/80 shadow-2xl">
              <div className="pb-6 border-b border-space-800 mb-6">
                <h3 className="text-xl font-sans font-semibold text-cinematic-ivory">
                  Send a Structured Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-cinematic-silver mt-1">
                  Leave a note with your project or engineering opportunity. Launches with verified mailto payload.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-space-950 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-lg font-sans font-semibold text-white">Message Prepared</h4>
                  <p className="text-xs text-cinematic-silver max-w-md mx-auto leading-relaxed">
                    Your message draft has been dispatched to your local mail client directed to{" "}
                    <span className="text-cinematic-ice">{personalData.contact.email}</span>. Harshvardhan will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl bg-space-900 border border-space-700 text-xs font-mono text-cinematic-silver hover:text-white"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-cinematic-dim uppercase tracking-wider block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-space-800 text-xs font-mono text-cinematic-ivory placeholder-cinematic-dim focus:border-cinematic-ice/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-cinematic-dim uppercase tracking-wider block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-space-800 text-xs font-mono text-cinematic-ivory placeholder-cinematic-dim focus:border-cinematic-ice/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-cinematic-dim uppercase tracking-wider block mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. SDE Opportunity / Distributed Systems Architecture"
                      className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-space-800 text-xs font-mono text-cinematic-ivory placeholder-cinematic-dim focus:border-cinematic-ice/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-cinematic-dim uppercase tracking-wider block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, engineering role, or question..."
                      className="w-full px-4 py-2.5 rounded-xl bg-space-950 border border-space-800 text-xs font-mono text-cinematic-ivory placeholder-cinematic-dim focus:border-cinematic-ice/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cinematic-ivory text-space-950 font-semibold text-xs tracking-wider uppercase hover:bg-cinematic-ice transition-all shadow-md"
                  >
                    <Send size={14} />
                    <span>Dispatch Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
