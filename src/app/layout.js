import localFont from "next/font/local";
import "./globals.css";
import { personalData } from "@/data/portfolioData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://harshlogic.dev"),
  title: "Harshvardhan Sinha — Software Engineer & Full-Stack Developer",
  description:
    "Production-grade portfolio of Harshvardhan Sinha. Information Technology at BPIT (CGPA 9.28). Architecting distributed backend systems, async queues, and AI-powered predictive applications.",
  keywords: [
    "Harshvardhan Sinha",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Developer",
    "Distributed Systems",
    "AI ML Engineer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "BPIT Delhi",
    "HarshLogic",
  ],
  authors: [{ name: "Harshvardhan Sinha", url: "https://github.com/HarshLogic" }],
  creator: "Harshvardhan Sinha",
  openGraph: {
    title: "Harshvardhan Sinha — Software Engineer & Systems Architect",
    description:
      "I build thoughtful software products, scalable backend systems, and AI-powered applications that solve real problems.",
    url: "https://harshlogic.dev",
    siteName: "Harshvardhan Sinha Portfolio",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 800,
        height: 1200,
        alt: "Harshvardhan Sinha — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshvardhan Sinha — Software Engineer",
    description:
      "Engineering intelligent products. Designing thoughtful experiences. Distributed backend systems and AI engineering.",
    creator: "@HarshLogic_",
    images: ["/images/avatar.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Bhagwan Parshuram Institute of Technology (BPIT), GGSIPU",
      },
      {
        "@type": "EducationalOrganization",
        name: "Amity University",
      },
    ],
    sameAs: personalData.socials.map((s) => s.url),
    knowsAbout: [
      "Distributed Systems",
      "Full-Stack Web Development",
      "Asynchronous Queues",
      "Machine Learning",
      "Double-Entry Accounting",
      "Virtual Memory Simulation",
    ],
    url: "https://github.com/HarshLogic",
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-space-950 text-cinematic-ivory antialiased selection:bg-cinematic-ice selection:text-space-950 min-h-screen flex flex-col relative`}
      >
        {/* Subtle Film Grain for Cinematic Feel */}
        <div className="film-grain" aria-hidden="true" />
        
        {/* Ambient Top Glow */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-cinematic-ice/5 via-cinematic-ice/[0.02] to-transparent pointer-events-none -z-10 blur-3xl"
          aria-hidden="true"
        />

        {children}
      </body>
    </html>
  );
}
