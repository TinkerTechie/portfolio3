const featuredProjects = [
  {
    title: "FitVibe",
    tag: "Group Project",
    description: "Multi-agent Flask backend on Groq LLM: a coordinator agent routes to dedicated workout and nutrition agents, backed by a rule-based safety validator and a thread-safe JSON state store. Built for the AI Agents: Intensive Vibe Coding Capstone.",
    stack: ["Flask", "Groq", "Multi-Agent", "Guardrails"],
    demoLink: "https://fitvibe-frontend.onrender.com",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie/FitVibe",
    codeText: "Code ↗"
  },
  {
    title: "Argus",
    tag: "Apr 2026",
    description: "A multi-agent RAG research assistant. LangGraph orchestrates retrieval, reasoning, and validation across a custom corpus; a critic agent reviews Llama 3 (Ollama) output and forces self-correction to cut hallucinations.",
    stack: ["LangGraph", "Llama 3", "FAISS", "SentenceTransformers"],
    demoLink: "https://argus-ai-rag-kz2s78uomwwpcwbinjjwsp.streamlit.app/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie",
    codeText: "Browse Repos ↗"
  },
  {
    title: "Socratic Misconception Mapper",
    tag: "Mar–Apr 2026",
    description: "An adaptive AI tutor that teaches through Socratic dialogue instead of answers. Tracks a belief-state per student against a misconception taxonomy and scaffolds questions accordingly, on a FastAPI backend with multi-model LLM routing and session persistence.",
    stack: ["FastAPI", "Groq / Gemini", "Belief-State Tracking"],
    demoLink: "https://socrates-cr87.onrender.com/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie",
    codeText: "Browse Repos ↗"
  },
  {
    title: "FakeNewsDetector",
    tag: "Capstone · Group",
    description: "An agentic news-credibility system pairing a scikit-learn classifier with LLM reasoning. RAG-based retrieval grounds every verdict in evidence, and the output stays explainable rather than a bare true/false label.",
    stack: ["Streamlit", "Scikit-learn", "RAG"],
    demoLink: "https://fakenewsdetector-wb6gzcc5fbimonu7cvgvvu.streamlit.app/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie",
    codeText: "Browse Repos ↗"
  },
  {
    title: "AutoAgent",
    tag: "Team Lead · Group Project",
    description: "Led team VisionForge, a group project building an autonomous agent platform from architecture through deployment.",
    stack: ["Agents", "Team Leadership"],
    demoLink: "https://autoagent-1-m2u1.onrender.com/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie/AutoAgent",
    codeText: "Code ↗"
  },
  {
    title: "AuraMatch",
    tag: "Group Project · 2 Hackathons",
    description: "A beauty-salon marketplace concept built as a group project for the AI Startup Buildathon 2026 (Unstop), then carried forward at Codespire Hackathon 2026 — matching clients to salons with an AI-assisted flow.",
    stack: ["Marketplace", "AI Matching"],
    demoLink: "https://aura-match-delta.vercel.app/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie/AuraMatch",
    codeText: "Code ↗"
  },
  {
    title: "Trading Bot",
    tag: "Internship Assignment",
    description: "A modular Python CLI for placing MARKET and LIMIT orders on Binance USDT-M Futures Testnet — clean backend architecture, structured logging, input validation, and robust exception handling throughout.",
    stack: ["Python", "Binance API", "CLI"],
    demoLink: "#",
    demoText: "CLI Tool",
    disabled: true,
    codeLink: "https://github.com/TinkerTechie/trading_bot",
    codeText: "Code ↗"
  },
  {
    title: "Hospital Management System",
    tag: "Full-Stack",
    description: "A full-stack hospital platform on Next.js and PostgreSQL with Prisma and Redux, secured by JWT/NextAuth role-based access. Interactive ApexCharts dashboards, automated email notifications, and a Framer Motion UI on an optimized, scalable architecture.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redux"],
    demoLink: "https://hospital-management-system-xx3n.onrender.com/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie",
    codeText: "Browse Repos ↗"
  },
  {
    title: "VizMind",
    tag: "Data Intelligence",
    description: "A browser-based data intelligence platform built on React, Vite, and Danfo.js — clean, paste, and query datasets with GPT-4 powered analysis and Q&A, modular dashboards, and one-click PDF export.",
    stack: ["React", "Danfo.js", "GPT-4", "PapaParse"],
    demoLink: "https://viz-mind-x8oh.vercel.app/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie",
    codeText: "Browse Repos ↗"
  },
  {
    title: "Foresight Finance",
    tag: "FinTech",
    description: "A financial forecasting app on React and Next.js with interactive dashboards, Plaid and Firebase for secure account data, Recharts visualizations, CSV export, and real-time currency exchange via the Fixer API.",
    stack: ["Next.js", "Plaid API", "Firebase", "Recharts"],
    demoLink: "https://foresight-finance-t6vv.vercel.app/",
    demoText: "Live Demo ↗",
    codeLink: "https://github.com/TinkerTechie",
    codeText: "Browse Repos ↗"
  }
];

const logProjects = [
  { link: "https://the-three-pillars-of-ai-diffusion.vercel.app/", name: "The Three Pillars of AI Diffusion", note: "— interactive visualization of the UNCTAD Technology and Innovation Report 2024", domain: "Data Viz / Policy", text: "live ↗" },
  { link: "https://ai-betrayal-maze.vercel.app/", name: "AI Betrayal Maze", note: "— a maze game where an AI opponent navigates using A* search", domain: "Game / Algorithms", text: "play ↗" },
  { link: "https://github.com/TinkerTechie", name: "Crime Pattern Analysis, Indian Cities", note: "— led analysis of 40,000+ records across 29 cities; report on high-risk regions & trends", domain: "Data Analysis", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie", name: "AI Job Market Analysis", note: "— 30,000+ job records, 2 Tableau dashboards on AI's impact on salary & automation risk", domain: "Data Analysis", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/zomato-data_visualization", name: "Zomato Data Visualization", note: "— cleaning and visualizing a real-world restaurant dataset", domain: "Data Analysis", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/QuillBot---Notes-made-easy", name: "QuillBot — Notes Made Easy", note: "— note-taking tool", domain: "Web App", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Cpu-Encyclopedia", name: "CPU Encyclopedia", note: "— reference web app", domain: "Web App", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/exploding-balls", name: "Exploding Balls", note: "— interactive browser game", domain: "Game", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/DSAquiz/tree/master", name: "DSA Quiz", note: "— quiz app for data structures & algorithms practice", domain: "Web App", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/QR-code-Generator", name: "QR Code Generator", note: "— generate QR codes on the fly", domain: "Tool", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/css-glow-bowl", name: "CSS Glow Bowl", note: "— pure-CSS visual experiment", domain: "UI Experiment", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Calculator", name: "Scientific Calculator", note: "— React calculator with keyboard support & real-time display", domain: "Web App", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Go-Get-your-thing", name: "Go Get Your Thing", note: "— quick-link launcher for everyday services", domain: "Web App", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Password_Generator", name: "Password Generator", note: "— configurable secure password tool", domain: "Tool", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Spotify-_", name: "Spotify Clone", note: "— front-end music player UI", domain: "Web App", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Tic-Tac-Toe", name: "Tic-Tac-Toe", note: "— classic game, clean state logic", domain: "Game", text: "repo ↗" },
  { link: "https://github.com/TinkerTechie/Capstone-Project", name: "Capstone Project", note: "— early full-stack capstone build", domain: "Full-Stack", text: "repo ↗" },
  { link: "https://github.com/The-Glimpses-of-Bharat/The-Glimpses-of-Bharat", name: "The Glimpses of Bharat", note: "— open-source contributor", domain: "Open Source", text: "repo ↗" }
];
