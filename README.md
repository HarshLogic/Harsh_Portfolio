# Harshvardhan Sinha — Cinematic Engineering Portfolio

A production-ready, dark cinematic personal portfolio website for **Harshvardhan Sinha**, Software Engineer, Full-Stack Developer, and AI/ML practitioner.

Built with **Next.js 14 (App Router)**, **JavaScript / React**, **Tailwind CSS**, and **Geist Typography**, featuring editorial storytelling, interactive systems architecture simulations, and authentic credentials.

---

## ⚡ Quick Start

### 1. Requirements
- Node.js 18+ (tested on Node v20 LTS)
- npm 10+

### 2. Install & Run
```bash
# Clone or navigate to the directory
cd /home/harshvardhan/Desktop/Portfolio

# Run the development server
npm run dev

# Or create an optimized production build
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Architecture & Visual Direction

- **Cinematic Palette**: Near-black backgrounds (`#050505`, `#0B0B0D`), Ivory-white text (`#F4F3EF`), Cool silver (`#A4A4AC`), and restrained Icy-Blue accents (`#91B7FF`).
- **Atmospheric Textures**: Subtle SVG film grain overlay, directional spotlight cones, and chiseled sculptural motifs inspired by classical and fluid chrome art direction.
- **3D Avatar Display**: Harshvardhan's stylish 3D avatar framed with ambient rim lighting, floating capability badges, and desktop 3D perspective tilt.
- **Interactive Systems Architecture Visualizer**: Live interactive tabs simulating:
  1. **BullMQ Concurrency**: 10,000+ emails/hr queue draining across 5 worker threads with Elasticsearch sub-50ms search audit.
  2. **Stack VM & LRU Cache**: Live Fetch-Decode-Execute register stepper and O(1) doubly-linked list memory cache simulation.
  3. **ACID Ledger Invariant**: Double-entry transaction verification with zero-drift balance validation.
- **Auditory Feedback**: Optional Web Audio API synthesizer for tactile acoustic micro-tones (opt-in, muted by default).

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   └── avatar.jpg          # Harshvardhan's stylish 3D avatar
│   └── Harshvardhan_Sinha_Resume.pdf # Place your resume PDF here
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, grain overlay, and glassmorphic styles
│   │   ├── layout.js           # SEO metadata, OpenGraph, JSON-LD Schema
│   │   ├── page.js             # Single-page layout composition
│   │   ├── robots.js           # Automated robots.txt generator
│   │   └── sitemap.js          # Automated sitemap.xml generator
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.jsx      # Navigation, audio toggle, and resume modal
│   │   │   ├── HeroSection.jsx # Editorial headline, rotating roles, and avatar display
│   │   │   ├── SelectedWork.jsx# Flagship case studies & archive drawer
│   │   │   ├── AboutSection.jsx# Narrative, metrics & 3 engineering tenets
│   │   │   ├── TechnicalSkills.jsx # 8 categorized skills with instant search
│   │   │   ├── ExperienceTimeline.jsx # 6 verified career milestones
│   │   │   ├── AchievementsSection.jsx # 895+ DSA problems, SIH, Flipkart GRiD, GSSoC
│   │   │   ├── EducationSection.jsx # BPIT (9.28 CGPA), Amity (8.08 CGPA), certs
│   │   │   ├── ContactSection.jsx # 1-click email copy, mailto dispatch & IST clock
│   │   │   └── Footer.jsx      # Technical credits & back-to-top
│   │   ├── ui/
│   │   │   ├── BrandIcons.jsx  # SVG icons (GitHub, LeetCode)
│   │   │   ├── CinematicMotifs.jsx # Moodboard motifs (liquid, beam, bust, wings)
│   │   │   ├── CustomCursor.jsx# Ambient pointer follower (desktop only)
│   │   │   └── AcousticFeedback.js # In-browser Web Audio micro-synth
│   │   └── visuals/
│   │       └── SystemArchitectureVisualizer.jsx # Live CPU, Queue & Ledger simulator
│   └── data/
│       └── portfolioData.js    # Single central source of truth for all facts & links
└── tailwind.config.js          # Extended theme tokens
```

---

## 📝 Central Data Configuration (`src/data/portfolioData.js`)

All project details, metrics, and URLs are stored in [`src/data/portfolioData.js`](src/data/portfolioData.js). To update any statistic, link, or experience, you only edit this single file!

### 🔍 Missing Information & TODO Checklist for Harshvardhan:
1. **Resume File**: Place your updated resume PDF in `public/Harshvardhan_Sinha_Resume.pdf`.
2. **Flagship Project Repositories**: Update the placeholder GitHub links in `flagshipProjects` in `src/data/portfolioData.js` to point to the exact public repositories once published.
3. **Live Demos**: If public deployments exist for *FullStack Inbox*, *FinFlow*, or *Bankify*, add their live URLs to `links.demo`.
4. **Domain Configuration**: Replace `https://harshlogic.dev` in `src/app/layout.js`, `sitemap.js`, and `robots.js` with your custom production domain if different.
# Harsh_Portfolio
