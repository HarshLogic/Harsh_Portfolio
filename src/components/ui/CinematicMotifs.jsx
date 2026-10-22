"useclient";

import React from "react";

/**
 * Cinematic visual motifs inspired by the art direction:
 * 1. Liquid Symmetry (Fluid chrome sculpture geometry)
 * 2. Metallic Beam (High-contrast razor grin / horizontal light slice)
 * 3. Sculptural Face / Monolith (Chiseled classical silhouette illuminated by directional spotlight)
 * 4. Winged Classical Silhouette (Neoclassical victory wings against deep space)
 */

export function LiquidSymmetryMotif({ className = "w-64 h-64 opacity-20" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="liquidGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#91B7FF" stopOpacity="0.4" />
          <stop offset="85%" stopColor="#222228" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="chromeLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4F3EF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#91B7FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Symmetrical organic fluid loops */}
      <circle cx="100" cy="100" r="85" stroke="url(#chromeLine)" strokeWidth="0.75" strokeDasharray="3 4" />
      <path
        d="M 100 20 C 60 50, 30 80, 50 120 C 65 150, 90 170, 100 180 C 110 170, 135 150, 150 120 C 170 80, 140 50, 100 20 Z"
        fill="url(#liquidGrad)"
        stroke="url(#chromeLine)"
        strokeWidth="1.2"
      />
      <path
        d="M 100 45 C 80 65, 60 90, 75 115 C 85 130, 95 145, 100 155 C 105 145, 115 130, 125 115 C 140 90, 120 65, 100 45 Z"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
      <circle cx="100" cy="100" r="14" fill="#050505" stroke="#91B7FF" strokeWidth="1" strokeOpacity="0.7" />
      <circle cx="100" cy="100" r="4" fill="#F4F3EF" />
      {/* Precision coordinate marks */}
      <line x1="90" y1="100" x2="110" y2="100" stroke="#91B7FF" strokeWidth="0.5" />
      <line x1="100" y1="90" x2="100" y2="110" stroke="#91B7FF" strokeWidth="0.5" />
    </svg>
  );
}

export function MetallicBeamMotif({ className = "w-full h-8 opacity-25" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cinematic-ice/40 to-transparent" />
      <div className="absolute flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice shadow-glow-ice" />
        <span className="text-[9px] font-mono tracking-widest text-cinematic-silver uppercase px-2 py-0.5 rounded bg-space-900/80 border border-space-700">
          SYSTEM INTEGRITY // 9.29 CGPA
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-cinematic-ice shadow-glow-ice" />
      </div>
    </div>
  );
}

export function SculpturalSpotlightMotif({ className = "w-48 h-48 opacity-15" }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spotlightRay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="40%" stopColor="#91B7FF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Directional light cone */}
      <polygon points="40,0 180,0 200,240 20,240" fill="url(#spotlightRay)" />
      {/* Chiseled sculptural bust geometric contours */}
      <path
        d="M 100 50 L 120 70 L 115 110 L 125 140 L 95 190 L 75 140 L 85 110 L 80 70 Z"
        stroke="#F4F3EF"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      <path
        d="M 120 70 L 140 90 L 130 130 L 115 160"
        stroke="#91B7FF"
        strokeWidth="0.8"
        strokeOpacity="0.3"
      />
      <circle cx="100" cy="50" r="1.5" fill="#FFFFFF" />
      <circle cx="120" cy="70" r="1.5" fill="#FFFFFF" />
      <circle cx="80" cy="70" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function WingedStatueMotif({ className = "w-64 h-64 opacity-20" }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wingCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#91B7FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="110" fill="url(#wingCenterGlow)" />
      {/* Left Wing Contours */}
      <path
        d="M 150 160 C 130 110, 80 80, 20 100 C 50 140, 90 170, 150 180 Z"
        stroke="#F4F3EF"
        strokeWidth="1.2"
        strokeOpacity="0.35"
      />
      <path
        d="M 140 165 C 110 130, 80 115, 45 125 C 70 155, 100 175, 140 185 Z"
        stroke="#91B7FF"
        strokeWidth="0.8"
        strokeOpacity="0.25"
      />
      {/* Right Wing Contours */}
      <path
        d="M 150 160 C 170 110, 220 80, 280 100 C 250 140, 210 170, 150 180 Z"
        stroke="#F4F3EF"
        strokeWidth="1.2"
        strokeOpacity="0.35"
      />
      <path
        d="M 160 165 C 190 130, 220 115, 255 125 C 230 155, 200 175, 160 185 Z"
        stroke="#91B7FF"
        strokeWidth="0.8"
        strokeOpacity="0.25"
      />
      {/* Central Classical Monolith / Pedestal */}
      <rect x="144" y="170" width="12" height="70" stroke="#F4F3EF" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="150" cy="145" r="8" stroke="#91B7FF" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

