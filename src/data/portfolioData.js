/**
 * Central Portfolio Data Source for Harshvardhan Sinha
 * Source of truth: Master Profile Document & Verified Credentials
 * All links, metrics, and case studies can be centrally updated here.
 */

export const personalData = {
  name: "Harshvardhan Sinha",
  shortName: "Harsh",
  initials: "HS",
  title: "Software Engineer & Full-Stack Developer",
  rotatingRoles: [
    "Full-Stack Engineer",
    "Backend & Systems Developer",
    "AI/ML Engineer",
    "Distributed Systems Practitioner",
  ],
  tagline: "Engineering intelligent products. Designing thoughtful experiences.",
  heroSubheadline:
    "Information Technology undergraduate at BPIT, GGSIPU (CGPA 9.28). Architecting resilient backend systems, high-throughput asynchronous queues, and AI-driven predictive applications that solve tangible problems.",
  aboutPitch:
    "I operate at the intersection of backend engineering rigor, intelligent data systems, and polished digital interfaces. Whether designing double-entry financial ledgers with atomic guarantees, scaling asynchronous queues to 10k+ jobs/hour, or training predictive machine learning models, I build software that performs with precision beneath the surface.",
  location: "Delhi, India",
  timezone: "Asia/Kolkata (IST · UTC+5:30)",
  availability: "Open to SDE, Full-Stack & AI/ML Opportunities",
  educationBrief: "B.Tech in IT @ BPIT, GGSIPU · 2027 · CGPA: 9.28",
  
  // Replaceable Avatar Configuration
  avatar: {
    src: "/images/avatar.jpg",
    alt: "Harshvardhan Sinha - 3D Developer Avatar",
    statusBadge: "Available for Roles",
  },

  // Verified Contact & Social Links
  contact: {
    email: "harshvardhansinha17@gmail.com",
    // Resume link - marked as editable placeholder until user supplies direct PDF URL or uploads resume.pdf
    resumeUrl: "/Harshvardhan_Sinha_Resume.pdf", // User can place file in /public/Harshvardhan_Sinha_Resume.pdf
    hasDirectResume: false, // Set to true when PDF file is placed in public
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/HarshLogic",
      handle: "@HarshLogic",
      category: "Code & Projects",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/harshlogic",
      handle: "in/harshlogic",
      category: "Professional",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/HarshLogic_",
      handle: "@HarshLogic_",
      category: "Social & Thoughts",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/HarshLogic",
      handle: "HarshLogic (Rating: 1642)",
      category: "Competitive Coding",
    },
    {
      name: "CodeChef",
      url: "https://codechef.com/users/harshlogic",
      handle: "harshlogic (2-Star)",
      category: "Competitive Coding",
    },
    {
      name: "Codolio",
      url: "https://codolio.com/profile/Harshpiyush",
      handle: "Harshpiyush",
      category: "Developer Profile",
    },
    {
      name: "HackerRank",
      url: "https://hackerrank.com/profile/harshlogic",
      handle: "harshlogic",
      category: "Problem Solving",
    },
  ],

  // Core Statistics for Quick Credibility
  highlightStats: [
    { label: "B.Tech CGPA", value: "9.28", suffix: "/10", context: "Information Technology, BPIT" },
    { label: "Problems Solved", value: "895+", suffix: "", context: "LeetCode, CodeChef, HackerRank" },
    { label: "Email Queue Capacity", value: "10,000+", suffix: "/hr", context: "Distributed BullMQ Workers" },
    { label: "GSSoC '26 Rank", value: "Top 5%", suffix: "", context: "Project Admin · 1,976 Points" },
  ],
};

export const flagshipProjects = [
  {
    id: "inbox-scheduler",
    title: "FullStack Inbox Email Job Scheduler",
    tagline: "High-Throughput Distributed Queue & Async Email Dispatch Engine",
    category: "Backend & Systems",
    featured: true,
    accentColor: "#91B7FF",
    metrics: [
      { label: "Lighthouse Score", value: "98" },
      { label: "Time to First Byte", value: "< 800ms" },
      { label: "Async Capacity", value: "10k+ / hr", note: "5 concurrent worker threads" },
      { label: "Elasticsearch Search", value: "< 50ms", note: "Indexed 100k+ dispatch logs" },
      { label: "CSV Processing", value: "5k+ rows < 2s", note: "Bulk recipient parser" },
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "Elasticsearch",
      "Docker Compose",
      "Railway",
    ],
    overview:
      "A distributed, high-capacity email campaign and job scheduler engineered to process large-volume batch broadcasts without thread starvation or memory leaks.",
    challenge:
      "Large-scale asynchronous email delivery requires managing burst loads, handling third-party rate limits, safeguarding against worker crashes, and offering sub-second full-text audit search across millions of historical log records.",
    architectureDecisions: [
      "Separated the ingestion REST API from background consumers via Redis-backed BullMQ priority queues.",
      "Provisioned 5 isolated worker processes with automatic exponential backoff retry policies and dead-letter queues.",
      "Integrated Elasticsearch with multi-field analyzer mappings to achieve sub-50ms query latency over 100k+ audit logs.",
      "Structured local reproducibility using Docker Compose for isolated multi-container Redis, Postgres, and ES orchestration.",
    ],
    links: {
      github: "https://github.com/HarshLogic", // TODO: Update to exact repository URL once public
      demo: null, // Editable placeholder
      isRepoPublic: true,
    },
  },
  {
    id: "finflow",
    title: "FinFlow — Personal Finance & Wealth Management",
    tagline: "Multi-Asset Investment Tracking, 50-30-20 Budgeting & AI Analytics",
    category: "FinTech & Ledger",
    featured: true,
    accentColor: "#60A5FA",
    metrics: [
      { label: "Active Users", value: "10+" },
      { label: "Dashboard Speedup", value: "+40%", note: "Query optimization & caching" },
      { label: "Asset Classes", value: "4", note: "Stocks, Mutual Funds, FDs, Cash" },
      { label: "GSSoC Rank", value: "Top 5%", note: "Project Admin & Core Contributor" },
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "GraphQL",
      "Recharts",
      "Tailwind CSS",
      "Docker",
      "JWT",
    ],
    overview:
      "Comprehensive wealth management dashboard empowering individuals to monitor diversified net worth, project long-term SIP compound returns, and balance discretionary spending through structured 50-30-20 budgeting.",
    challenge:
      "Tracking heterogeneous asset classes in real time often results in heavy payload overhead and sluggish rendering on consumer client devices.",
    architectureDecisions: [
      "Implemented selective GraphQL query schemas to fetch only needed asset valuations, slashing unnecessary payload weight by 40%.",
      "Engineered mathematical amortization and compound SIP growth projection engines with visual interactive Recharts.",
      "Embedded an AI financial assistant to automatically classify receipts and flag non-essential lifestyle inflation.",
      "Administered repository during GirlScript Summer of Code 2026, orchestrating 10+ contributors and merging 14 clean pull requests.",
    ],
    links: {
      github: "https://github.com/HarshLogic", // TODO: Update to exact repository URL
      demo: null,
      isRepoPublic: true,
    },
  },
  {
    id: "bankify",
    title: "Bankify — Double-Entry Banking Dashboard",
    tagline: "ACID-Compliant Financial Ledger with Zero-Inconsistency Invariants",
    category: "FinTech & Ledger",
    featured: true,
    accentColor: "#38BDF8",
    metrics: [
      { label: "Ledger Model", value: "Double-Entry", note: "DEBIT + CREDIT parity" },
      { label: "Transactions", value: "ACID", note: "MongoDB multi-document sessions" },
      { label: "API Protection", value: "Idempotent", note: "Zero duplicate transfers on retry" },
      { label: "Authentication", value: "JWT + RBAC", note: "Role-enforced middleware" },
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "React",
      "Tailwind CSS",
      "JWT",
    ],
    overview:
      "An enterprise-grade banking engine built on the fundamental accounting equation, guaranteeing that money is never created or destroyed in transit, only transferred across balanced accounts.",
    challenge:
      "In financial software, standard database updates can cause race conditions or catastrophic balance drift if network interruptions happen mid-transaction.",
    architectureDecisions: [
      "Enforced strict Double-Entry accounting where every transaction creates complementary DEBIT and CREDIT ledger entries.",
      "Guaranteed atomic state changes via MongoDB two-phase transactional sessions; failure rolls back all balance modifications.",
      "Developed unique idempotency key validation on all money-movement endpoints to neutralize repeat clicks or network retries.",
      "Derived account balances dynamically from historical verified ledger rows to ensure immutable audit trails.",
    ],
    links: {
      github: "https://github.com/HarshLogic", // TODO: Update to exact repository URL
      demo: null,
      isRepoPublic: true,
    },
  },
  {
    id: "custom-os-vm",
    title: "Custom OS & Virtual Machine Emulator",
    tagline: "Stack-Based CPU Simulation, Custom ISA & O(1) LRU Page Cache",
    category: "Backend & Systems",
    featured: true,
    accentColor: "#A78BFA",
    metrics: [
      { label: "Architecture", value: "Stack VM", note: "Fetch-Decode-Execute cycle" },
      { label: "Cache Efficiency", value: "O(1)", note: "HashMap + Doubly Linked List LRU" },
      { label: "Swap Latency", value: "-50%", note: "Direct binary file offsets" },
      { label: "State Control", value: "REST API", note: "Step-by-step register inspector" },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "React",
      "Tailwind CSS",
      "Data Structures",
    ],
    overview:
      "A complete low-level software simulation of a computer processor, custom assembly instruction set, virtual memory paging unit, and interactive debugger.",
    challenge:
      "Simulating hardware memory translation and instruction execution requires tight temporal guarantees, strict bit-level decoding, and minimal cache swapping overhead.",
    architectureDecisions: [
      "Designed a clean Fetch-Decode-Execute CPU pipeline executing custom bytecode instructions (PUSH, POP, ADD, JMP, LOAD, STORE).",
      "Architected a virtual-to-physical address translation unit using a simulated page table with TLB acceleration.",
      "Implemented an optimal O(1) LRU (Least Recently Used) cache eviction policy combining a Hash map with a Doubly Linked List.",
      "Reduced simulated virtual memory page swapping latency by 50% using direct binary file offset indexing.",
      "Exposed the processor's execution state (registers, stack pointer, program counter) via Spring Boot REST APIs for real-time frontend visualization.",
    ],
    links: {
      github: "https://github.com/HarshLogic", // TODO: Update to exact repository URL
      demo: null,
      isRepoPublic: true,
    },
  },
  {
    id: "demand-intelligence",
    title: "Demand Intelligence & Sales Forecasting Pipeline",
    tagline: "Distributed Retail Time-Series Forecasting & Anomaly Detection",
    category: "AI / ML & Data",
    featured: true,
    accentColor: "#818CF8",
    metrics: [
      { label: "Dataset Scale", value: "10,000+ Records", note: "Across 1,000+ retail SKUs" },
      { label: "Anomaly Accuracy", value: "97%", note: "Evaluated on outlier spikes" },
      { label: "Allocation Time", value: "-30%", note: "Automated replenishment decisions" },
      { label: "Frameworks", value: "Spark + XGBoost", note: "Distributed pipeline" },
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Apache Spark",
      "Apache Hadoop",
      "Streamlit",
    ],
    overview:
      "Enterprise predictive analytics system analyzing historical purchase records, seasonality trends, and promotional anomalies to forecast retail inventory requirements with high statistical confidence.",
    challenge:
      "Retail sales data features heavy seasonal fluctuations, stockouts, and unpredictable consumer spikes that standard linear models fail to generalize.",
    architectureDecisions: [
      "Preprocessed and engineered rolling lag features, moving averages, and promotional flags using Apache Spark and Pandas.",
      "Trained gradient-boosted decision trees (XGBoost) and Random Forest ensembles with cross-validation tuning.",
      "Achieved 97% anomaly-detection precision for identifying inventory theft, return abuse, and sudden supply-chain bottlenecks.",
      "Packaged the analytical models into an interactive Streamlit operational dashboard, reducing stock allocation turnaround by 30%.",
    ],
    links: {
      github: "https://github.com/HarshLogic", // TODO: Update to exact repository URL
      demo: null,
      isRepoPublic: true,
    },
  },
];

export const archiveProjects = [
  {
    id: "sankalp-skillstack",
    title: "SANKALP — SkillStack Hub",
    tagline: "AI-Powered Internship & Job Readiness Platform",
    category: "Full-Stack Web",
    technologies: ["TypeScript", "React", "REST APIs", "Framer Motion", "Tailwind CSS"],
    description:
      "An intelligent career preparation platform featuring simulated AI mock interviews, rubric-based automated scorecards, and structured candidate screening workflows for recruiters.",
    role: "Full-Stack Developer",
    links: { github: "https://github.com/HarshLogic", demo: null },
  },
  {
    id: "employee-attrition",
    title: "Employee Attrition Predictive Intelligence",
    tagline: "Workforce Churn Modeling & SHAP Explainability",
    category: "AI / ML & Data",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Matplotlib"],
    description:
      "Machine learning classification model analyzing HR demographic and compensation metrics to identify primary drivers of organizational talent turnover.",
    role: "ML Practitioner",
    links: { github: "https://github.com/HarshLogic", demo: null },
  },
  {
    id: "house-price-prediction",
    title: "Geospatial Real Estate Valuation Model",
    tagline: "Multi-Variable Regression & Feature Engineering",
    category: "AI / ML & Data",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Ridge Regression"],
    description:
      "Predictive pricing model integrating square footage, zip-code neighborhood indices, and historical sale dynamics to estimate accurate property valuations.",
    role: "ML Practitioner",
    links: { github: "https://github.com/HarshLogic", demo: null },
  },
  {
    id: "online-auction",
    title: "Real-Time Online Auction System",
    tagline: "High-Concurrency Bidding Engine with REST APIs",
    category: "Backend & Systems",
    technologies: ["JavaScript ES6+", "Node.js", "Express", "MySQL", "REST APIs"],
    description:
      "Architected during internship at Kabhi Tech: responsive auction platform featuring instant price increments, automated bid validation, and database schema optimization.",
    role: "Web Dev Intern",
    links: { github: "https://github.com/HarshLogic", demo: null },
  },
];

export const technicalSkills = [
  {
    category: "Programming Languages",
    summary: "Strong object-oriented, functional & systems foundations",
    skills: [
      { name: "Java", level: "Advanced", core: true },
      { name: "TypeScript", level: "Advanced", core: true },
      { name: "JavaScript ES6+", level: "Advanced", core: true },
      { name: "Python", level: "Advanced", core: true },
      { name: "SQL", level: "Advanced", core: true },
      { name: "C++", level: "Proficient", core: true },
      { name: "Scala", level: "Familiar", core: false },
      { name: "HTML5 / CSS3", level: "Advanced", core: true },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    summary: "Asynchronous processing, scalable APIs & transactional reliability",
    skills: [
      { name: "Node.js", level: "Advanced", core: true },
      { name: "Express.js", level: "Advanced", core: true },
      { name: "Spring Boot", level: "Proficient", core: true },
      { name: "REST APIs", level: "Advanced", core: true },
      { name: "GraphQL", level: "Proficient", core: true },
      { name: "Prisma ORM", level: "Advanced", core: true },
      { name: "BullMQ", level: "Advanced", core: true },
      { name: "JWT Auth & RBAC", level: "Advanced", core: true },
      { name: "System Architecture", level: "Proficient", core: true },
      { name: "Nodemailer", level: "Proficient", core: false },
    ],
  },
  {
    category: "Databases, Caching & Search",
    summary: "ACID consistency, key-value stores & inverted index search",
    skills: [
      { name: "PostgreSQL", level: "Advanced", core: true },
      { name: "MongoDB Atlas", level: "Advanced", core: true },
      { name: "ACID Sessions", level: "Advanced", core: true },
      { name: "Redis", level: "Advanced", core: true },
      { name: "Elasticsearch", level: "Proficient", core: true },
      { name: "MySQL", level: "Advanced", core: true },
      { name: "Aggregation Pipelines", level: "Advanced", core: true },
      { name: "Firebase", level: "Proficient", core: false },
    ],
  },
  {
    category: "AI, Machine Learning & Data",
    summary: "Predictive pipelines, statistical modeling & big data compute",
    skills: [
      { name: "Scikit-learn", level: "Advanced", core: true },
      { name: "XGBoost", level: "Advanced", core: true },
      { name: "NumPy & Pandas", level: "Advanced", core: true },
      { name: "Apache Spark", level: "Proficient", core: true },
      { name: "Apache Hadoop", level: "Proficient", core: true },
      { name: "Time-Series Forecasting", level: "Advanced", core: true },
      { name: "Anomaly Detection", level: "Advanced", core: true },
      { name: "Feature Engineering", level: "Advanced", core: true },
      { name: "Streamlit", level: "Advanced", core: true },
      { name: "Matplotlib & EDA", level: "Proficient", core: false },
      { name: "MATLAB", level: "Familiar", core: false },
    ],
  },
  {
    category: "Frontend & Interface Engineering",
    summary: "Modern component-driven web with fluid motion and layout discipline",
    skills: [
      { name: "React.js", level: "Advanced", core: true },
      { name: "Next.js 16 / 14", level: "Advanced", core: true },
      { name: "Tailwind CSS", level: "Advanced", core: true },
      { name: "Framer Motion", level: "Advanced", core: true },
      { name: "Redux Toolkit", level: "Proficient", core: true },
      { name: "Recharts", level: "Proficient", core: true },
      { name: "React Native", level: "Familiar", core: false },
      { name: "DOM & State Optimisation", level: "Advanced", core: true },
    ],
  },
  {
    category: "DevOps, Cloud & Tooling",
    summary: "Containerization, automated deployment & robust API verification",
    skills: [
      { name: "Docker & Compose", level: "Advanced", core: true },
      { name: "Git & GitHub", level: "Advanced", core: true },
      { name: "GitHub Actions / CI/CD", level: "Proficient", core: true },
      { name: "Linux / Shell", level: "Advanced", core: true },
      { name: "Postman API Testing", level: "Advanced", core: true },
      { name: "AWS", level: "Familiar", core: false },
      { name: "Vercel & Railway", level: "Advanced", core: true },
      { name: "Jest Testing", level: "Proficient", core: false },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    summary: "Academic and competitive foundations evaluated in rigorous engineering",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", core: true },
      { name: "Operating Systems & Virtual Memory", level: "Advanced", core: true },
      { name: "Database Management Systems (DBMS)", level: "Advanced", core: true },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", core: true },
      { name: "Computer Networks", level: "Proficient", core: true },
      { name: "System Design Principles", level: "Proficient", core: true },
    ],
  },
  {
    category: "Design, Analytics & Workflow",
    summary: "Cross-functional product delivery and specification",
    skills: [
      { name: "Figma", level: "Proficient", core: true },
      { name: "Power BI", level: "Proficient", core: false },
      { name: "Agile & Jira", level: "Proficient", core: true },
      { name: "SEO Optimization", level: "Proficient", core: false },
      { name: "LaTeX", level: "Proficient", core: false },
    ],
  },
];

export const experienceTimeline = [
  {
    role: "Software Development & AI Automation Intern",
    company: "RBP FINIVIS Private Limited",
    period: "October 2026 – Present",
    status: "Current Role",
    location: "Delhi, India",
    summary:
      "Contributing to the Royal Bank Pacific enterprise web platform. Actively identifying and resolving production bugs, troubleshooting frontend-backend data anomalies, and enhancing platform reliability and user experience.",
    highlights: [
      "Diagnosed and resolved critical production bugs on the Royal Bank Pacific web portal.",
      "Engineered responsive user flows and streamlined component rendering performance.",
      "Collaborated closely with senior engineers on system stability and error logging.",
    ],
    technologies: ["JavaScript", "React", "REST APIs", "Debugging", "Web Optimization"],
  },
  {
    role: "AI & Data Science Intern",
    company: "XYlofy AI",
    period: "May/June 2026 – August 2026",
    status: "Completed",
    location: "Remote / Hybrid",
    summary:
      "Executed end-to-end data pipelines, predictive demand forecasting models, and distributed big data processing workflows for business analytics and strategic retail planning.",
    highlights: [
      "Engineered scalable predictive models using Python, Pandas, Scikit-learn, and XGBoost.",
      "Executed distributed data transformations across large-scale datasets using Apache Spark & Hadoop.",
      "Created operational Streamlit analytics dashboards translating raw machine learning inferences into commercial insights.",
    ],
    technologies: ["Python", "Spark", "Hadoop", "XGBoost", "Scikit-learn", "Streamlit", "SQL"],
  },
  {
    role: "Project Admin & Core Contributor",
    company: "GirlScript Summer of Code 2026",
    period: "May 2026 – August 2026",
    status: "Top 5% Global Rank",
    location: "Open Source Initiative",
    summary:
      "Led technical development and open-source contributor workflows for FinFlow. Ranked in the global top 5% of program participants with 1,976 points recorded in the official master tally.",
    highlights: [
      "Mentored and guided 10+ open-source developers across Git workflows and PR reviews.",
      "Managed 20+ engineering issues, audited architecture, and merged 14 production pull requests.",
      "Honored as Project Leader and Rising Star contributor.",
    ],
    technologies: ["Open Source", "React", "Node.js", "Git / GitHub", "Code Review"],
  },
  {
    role: "Artificial Intelligence Trainee",
    company: "Samsung Innovation Campus",
    period: "December 2025 – March 2026",
    status: "Certified",
    location: "Delhi, India",
    summary:
      "Selected for intensive AI and Python engineering training supported by the Telecom Sector Skill Council and Samsung Innovation Campus.",
    highlights: [
      "Completed rigorous modules in statistical learning, algorithms, and deep neural concepts.",
      "Applied Python pipelines to computer vision and predictive regression benchmarks.",
    ],
    technologies: ["Python", "AI Fundamentals", "Machine Learning", "TSSC Standards"],
  },
  {
    role: "AI/ML Summer Trainee",
    company: "WinnoVation Education Services",
    period: "June 2025 – July/August 2025",
    status: "Completed",
    location: "Delhi, India",
    summary:
      "Immersive practical training in applied machine learning, exploratory data analysis, data pre-processing, regression, classification, and unsupervised clustering algorithms.",
    highlights: [
      "Implemented standard ML algorithms from scratch and tuned hyper-parameters.",
      "Evaluated model performance using precision-recall curves, ROC-AUC, and confusion matrices.",
    ],
    technologies: ["Scikit-learn", "NumPy", "Pandas", "Supervised Learning", "Clustering"],
  },
  {
    role: "Web Development Intern",
    company: "Kabhi Tech",
    period: "January 2024 – March 2024",
    status: "Completed",
    location: "Delhi, India",
    summary:
      "Engineered full-stack features for the Online Auction System. Designed normalized relational database schemas, crafted RESTful endpoints, and ensured cross-device responsiveness.",
    highlights: [
      "Built resilient backend REST endpoints for live auction bid capture and user sessions.",
      "Refactored relational MySQL tables to optimize indexing and query execution times.",
      "Enforced accessibility standards and on-page technical SEO optimizations.",
    ],
    technologies: ["JavaScript ES6+", "Node.js", "Express", "MySQL", "REST APIs", "SEO"],
  },
];

export const competitiveAndAchievements = [
  {
    category: "Algorithmic Precision",
    title: "895+ Total Problems Solved",
    highlight: "895",
    suffix: "Problems",
    description:
      "Demonstrated depth in Data Structures & Algorithms across LeetCode, CodeChef, and HackerRank with an emphasis on graph theory, dynamic programming, and binary search.",
    badge: "Competitive Programming",
  },
  {
    category: "Contest Ranking",
    title: "LeetCode 1,642 Contest Rating",
    highlight: "1,642",
    suffix: "(Peak 1,652+)",
    description:
      "Consistent performance across global weekly and bi-weekly algorithmic contests, ranking comfortably in the top tier of active algorithmic competitors.",
    badge: "LeetCode",
    url: "https://leetcode.com/u/HarshLogic",
  },
  {
    category: "Contest Ranking",
    title: "CodeChef 2-Star (1,421)",
    highlight: "2★",
    suffix: "1,421 Rating",
    description:
      "Regular participant in CodeChef Starters and rated long/short challenges solving complex combinatorial and mathematical challenges.",
    badge: "CodeChef",
    url: "https://codechef.com/users/harshlogic",
  },
  {
    category: "Hackathons & Innovation",
    title: "Flipkart GRiD 8.0 Semi-Finalist",
    highlight: "Semi-Finalist",
    suffix: "National Level",
    description:
      "Advanced to the semi-finals of India's flagship engineering challenge by Flipkart, competing against thousands of collegiate teams across the nation.",
    badge: "National Hackathon",
  },
  {
    category: "Hackathons & Innovation",
    title: "Smart India Hackathon 2025 Team Lead",
    highlight: "Team Lead",
    suffix: "Round 3 Qualifier",
    description:
      "Led a 6-member engineering team through Round 3 and Semi-Final qualification with an innovative architectural solution addressing public infrastructure challenges.",
    badge: "Govt of India SIH",
  },
  {
    category: "Open Source Leadership",
    title: "GSSoC 2026 Project Leader & Rising Star",
    highlight: "Top 5%",
    suffix: "1,976 Points",
    description:
      "Spearheaded FinFlow development, orchestrated 10+ open-source developers, merged 14 PRs, and finished in the elite global 5% tier.",
    badge: "Open Source",
  },
  {
    category: "Hackathons & Ideathons",
    title: "Code with DCG (Top 10) & Delhi Ideathon (Top 20)",
    highlight: "Top 10 / Top 20",
    suffix: "Regional Finalist",
    description:
      "Recognized for rapid prototype delivery, clean architectural execution, and pragmatic product-market positioning.",
    badge: "Innovation",
  },
  {
    category: "Hackathons & Ideathons",
    title: "Adobe Hackathon Round 3 Qualifier",
    highlight: "Round 3",
    suffix: "Advanced Tier",
    description:
      "Progressed to Round 3 of Adobe's high-stakes algorithmic and software engineering competition.",
    badge: "Adobe",
  },
  {
    category: "Professional Growth",
    title: "McKinsey Forward Program Fellow",
    highlight: "Fellow",
    suffix: "Accepted",
    description:
      "Selected for McKinsey's global leadership and forward-thinking problem-solving accelerator program.",
    badge: "Leadership",
  },
  {
    category: "Institutional Leadership",
    title: "Project Chair, R&D Cell (Machine Learning) @ BPIT",
    highlight: "Project Chair",
    suffix: "BPIT R&D",
    description:
      "Guiding peer research initiatives, conducting technical workshops on ML architectures, and supervising collegiate project incubations.",
    badge: "Campus Leadership",
  },
  {
    category: "Institutional Leadership",
    title: "Placement Coordinator @ BPIT",
    highlight: "Coordinator",
    suffix: "Training & Placement",
    description:
      "Coordinating recruitment drives, liaising between tier-1 tech recruiters and undergraduate students, and facilitating technical mock interviews.",
    badge: "Campus Leadership",
  },
  {
    category: "Technical Cohort",
    title: "Harkirat Cohort 4.0 Active Member",
    highlight: "Cohort 4.0",
    suffix: "Full-Stack & Web3",
    description:
      "Engaged in intensive deep-dive engineering on modern full-stack architectures, distributed systems, Docker orchestration, and advanced DevOps practices.",
    badge: "Cohort",
  },
];

export const educationHistory = [
  {
    institution: "Bhagwan Parshuram Institute of Technology (BPIT)",
    affiliate: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
    degree: "Bachelor of Technology — Information Technology",
    period: "August 2024 – May/June 2027",
    status: "In Progress (3rd Year)",
    score: "9.28 / 10 CGPA",
    description:
      "Focusing on Distributed Operating Systems, Advanced Database Management, Object-Oriented Software Design, Machine Learning, and Computer Networks. Serving as Project Chair for R&D Cell and Placement Coordinator.",
    location: "Delhi, India",
  },
  {
    institution: "Amity University",
    affiliate: "Uttar Pradesh",
    degree: "Diploma — Computer Science Engineering",
    period: "July/August 2021 – May/June 2024",
    status: "Graduated with Distinction",
    score: "8.08 / 10 CGPA",
    description:
      "Built rigorous foundations in C++, Data Structures, Relational Databases, Web Technologies, and Computer Architecture.",
    location: "Noida, India",
  },
];

export const certifications = [
  {
    title: "Artificial Intelligence Course",
    issuer: "Samsung Innovation Campus & Telecom Sector Skill Council (TSSC)",
    date: "March 2026",
    category: "AI & ML",
  },
  {
    title: "Industry Training on AI/ML",
    issuer: "WinnoVation Education Services",
    date: "August 2025",
    category: "Machine Learning",
  },
  {
    title: "Python Programming Certification",
    issuer: "GUVI",
    date: "2024",
    category: "Software Development",
  },
  {
    title: "ChatGPT for Everyone",
    issuer: "LinkedIn Learning",
    date: "2024",
    category: "Generative AI",
  },
];
