"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutSection from "@/components/sections/AboutSection";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import AchievementsSection from "@/components/sections/AchievementsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { acoustic } from "@/components/ui/AcousticFeedback";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const playAudioCue = () => {
    if (soundEnabled) {
      acoustic.playClick();
    }
  };

  return (
    <div className="relative min-h-screen bg-space-950 text-cinematic-ivory selection:bg-cinematic-ice selection:text-space-950">
      {/* Cinematic Custom Pointer Halo (Desktop Only) */}
      <CustomCursor />

      {/* Persistent Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={(val) => {
          setSoundEnabled(val);
          if (val) acoustic.playPop();
        }}
      />

      {/* Main Content Flow */}
      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <HeroSection playAudioCue={playAudioCue} />

        {/* Selected Work & Systems Visualizer */}
        <SelectedWork playAudioCue={playAudioCue} />

        {/* About Section & Philosophy */}
        <AboutSection />

        {/* Categorized Technical Skills */}
        <TechnicalSkills playAudioCue={playAudioCue} />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Achievements & Competitive Coding */}
        <AchievementsSection />

        {/* Education & Certifications */}
        <EducationSection />

        {/* Contact & Dispatch */}
        <ContactSection playAudioCue={playAudioCue} />
      </main>

      {/* Footer */}
      <Footer playAudioCue={playAudioCue} />
    </div>
  );
}
