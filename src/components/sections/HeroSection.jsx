"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { personalData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { LiquidSymmetryMotif, SculpturalSpotlightMotif } from "@/components/ui/CinematicMotifs";

export default function HeroSection({ playAudioCue }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const avatarCardRef = useRef(null);

  // Subtle rotating role indicator
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalData.rotatingRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Subtle 3D card tilt on desktop pointer move
  const handleMouseMove = (e) => {
    if (!avatarCardRef.current) return;
    const rect = avatarCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden border-b border-space-850">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-20 right-[-10%] pointer-events-none select-none -z-10">
        <LiquidSymmetryMotif className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.06] blur-[1px]" />
      </div>
      <div className="absolute top-40 left-[-5%] pointer-events-none select-none -z-10">
        <SculpturalSpotlightMotif className="w-[350px] h-[400px] opacity-[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Storytelling */}
          <div className="lg:col-span-7 flex flex-col space-y-7 z-10">
            {/* Identity & Educational Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-space-900 border border-space-700/80 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cinematic-ice shadow-glow-ice" />
              <span className="text-xs font-mono tracking-wide text-cinematic-silver">
                {personalData.educationBrief}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-light tracking-tight leading-[1.05] text-cinematic-ivory">
                Engineering <span className="font-semibold text-white">intelligent</span> products.
                <br />
                <span className="editorial-gradient-text font-serif italic tracking-normal">Designing</span> thoughtful systems.
              </h1>

              {/* Dynamic Rotating Role Indicator */}
              <div className="flex items-center gap-3 pt-2 text-sm sm:text-base font-mono text-cinematic-silver">
                <span className="text-cinematic-dim">Specializing in:</span>
                <span className="inline-block px-3 py-1 rounded-md bg-space-850 border border-space-700 text-cinematic-ice font-semibold tracking-wide transition-all duration-300">
                  {personalData.rotatingRoles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Strategic Value Proposition */}
            <p className="text-base sm:text-lg text-cinematic-silver font-normal max-w-2xl leading-relaxed">
              I build thoughtful software products, scalable backend systems, and AI-powered applications that solve real problems. Focused on high-throughput queues, double-entry financial guarantees, and predictive machine learning.
            </p>

            {/* Dual CTAs & Terminal Status Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                onClick={() => playAudioCue?.()}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-cinematic-ivory text-space-950 font-semibold text-sm tracking-wide hover:bg-cinematic-ice hover:shadow-glow-ice transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => playAudioCue?.()}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-space-850 hover:bg-space-800 border border-space-700 hover:border-cinematic-ice/50 text-cinematic-ivory text-sm font-mono tracking-wider transition-all"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={16} className="text-cinematic-ice" />
              </a>
            </div>

            {/* Terminal Metadata Footnote */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-cinematic-dim">
              <span className="flex items-center gap-1.5">
                <Terminal size={13} className="text-cinematic-ice" />
                <span>Node 20 · Next 16 · Docker · PySpark</span>
              </span>
              <span>•</span>
              <span>Delhi, India (IST)</span>
            </div>
          </div>

          {/* Right Column: Harshvardhan's Cinematic 3D Avatar Display */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient Backlight Aura */}
            <div
              className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-cinematic-ice/10 blur-[80px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Sculpted Avatar Frame with 3D Tilt */}
            <div
              ref={avatarCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl bg-gradient-to-b from-space-850 via-space-900 to-space-950 p-2.5 border border-space-700/80 shadow-2xl shadow-black/80 group"
            >
              {/* Inner Sculptural Bezel */}
              <div className="relative rounded-[22px] overflow-hidden bg-space-950 border border-space-800/80 aspect-[4/5]">
                {/* Harshvardhan's Stylized 3D Avatar Image */}
                <Image
                  src={personalData.avatar.src}
                  alt={personalData.avatar.alt}
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.05] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Cinematic Vignette & Bottom Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent opacity-85" />
                
                {/* Subtle Top Rim Light */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                {/* Bottom Overlay Status Tag */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between p-3 rounded-xl bg-space-900/90 backdrop-blur-md border border-space-700/70">
                  <div className="flex flex-col">
                    <span className="font-sans font-medium text-xs text-cinematic-ivory tracking-tight">
                      {personalData.name}
                    </span>
                    <span className="text-[10px] font-mono text-cinematic-silver">
                      Full-Stack & Systems Dev
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-space-950/80 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-300 font-medium">9.28 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Floating Engineering Badge 1 (Top Right) */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-900/95 border border-space-700 text-xs font-mono text-cinematic-ivory shadow-lg backdrop-blur-md animate-float-subtle">
                <Cpu size={14} className="text-cinematic-ice" />
                <span>10k+ Emails / Hr</span>
              </div>

              {/* Floating Engineering Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-900/95 border border-space-700 text-xs font-mono text-cinematic-ivory shadow-lg backdrop-blur-md">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>895+ Problems Solved</span>
              </div>
            </div>
          </div>

        </div>

        {/* High-Impact Credibility Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-space-850/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalData.highlightStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xs font-mono text-cinematic-ice">{stat.suffix}</span>
                )}
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-cinematic-silver">
                {stat.label}
              </span>
              <span className="text-[11px] text-cinematic-dim line-clamp-1">
                {stat.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
