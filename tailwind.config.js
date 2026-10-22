/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          950: "#050505", // Primary deep canvas
          900: "#0B0B0D", // Secondary dark canvas
          850: "#111115", // Elevated cards
          800: "#18181D", // Hover cards
          700: "#222228", // Active borders
          600: "#2E2E36", // Subtle lines
        },
        cinematic: {
          ivory: "#F4F3EF",  // Primary crisp text
          silver: "#A4A4AC", // Secondary muted text
          dim: "#6B6B74",    // Tertiary subtle metadata
          dark: "#383840",   // Disabled or deep border
          ice: "#91B7FF",    // Signature Icy blue accent
          "ice-glow": "rgba(145, 183, 255, 0.15)",
          cobalt: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "cinematic-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
        "glow-ice": "0 0 40px -10px rgba(145, 183, 255, 0.25)",
        "glow-subtle": "0 0 60px -20px rgba(145, 183, 255, 0.12)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-subtle": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
