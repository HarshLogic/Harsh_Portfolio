"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutSection from "@/components/sections/AboutSection";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import CertificatesSection from "@/components/sections/CertificatesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-space-950 text-cinematic-ivory selection:bg-cinematic-ice selection:text-space-950 overflow-x-hidden">
      {/* Cinematic Custom Pointer Halo (Desktop Only, Smooth Independent Follower) */}
      <CustomCursor />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Selected Work & Systems Architecture Visualizer */}
        <SelectedWork />

        {/* About Section & Philosophy */}
        <AboutSection />

        {/* Categorized Technical Skills */}
        <TechnicalSkills />

        {/* Professional Work Experience Timeline */}
        <ExperienceTimeline />

        {/* Dedicated Verified Certificates & Traineeships */}
        <CertificatesSection />

        {/* Achievements & Competitive Coding Proof */}
        <AchievementsSection />

        {/* Academic Degrees & Collegiate Standing */}
        <EducationSection />

        {/* Contact & Dispatch */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
