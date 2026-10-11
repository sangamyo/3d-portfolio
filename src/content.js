export const heroContent = {
  kicker: "AI Engineer · Software Engineer · Available immediately",
  name: "Hari Om Kasaundhan",
  subtitle: " builds Python backends, LLM data tools and robot-learning (VLA) datasets.",
  description:
    "AI / Software Engineer (B.Tech CSE 2026) building Python backends and LLM-powered data systems with FastAPI, PostgreSQL, Docker, embeddings and semantic search. Robotics & AI Intern at Addverb Technologies on robot-learning (VLA) data pipelines.",
  primaryAction: "Explore Projects",
  secondaryAction: "View Journey",
};

export const sectionMeta = {
  about: {
    label: "About Avatar",
    kicker: "Origin Story",
    icon: "🧍",
  },
  projects: {
    label: "Project Arsenal",
    kicker: "Flagship Work",
    icon: "💻",
  },
  skills: {
    label: "Skills Galaxy",
    kicker: "Capability Map",
    icon: "🌌",
  },
  experience: {
    label: "Milestone Path",
    kicker: "Journey Timeline",
    icon: "🏆",
  },
  contact: {
    label: "Contact Portal",
    kicker: "Let’s Build",
    icon: "📞",
  },
};

export const aboutContent = {
  title: "About Hari Om Kasaundhan",
  summary:
    "AI / Software Engineer (B.Tech CSE 2026) building Python backends and LLM-powered data systems: FastAPI, PostgreSQL, REST APIs, Docker, Generative AI, embeddings and semantic search. Currently a Robotics & AI Intern at Addverb, working on robot-learning (VLA) data pipelines with LeRobot, MuJoCo and PyTorch.",
  stats: [
    { label: "Active Users Served", value: "500+" },
    { label: "Vendor Workflows", value: "15+" },
    { label: "Latency Improvement", value: "40%" },
    { label: "API Speed Gain", value: "50%" },
  ],
  highlights: [
    {
      title: "Robot-Learning Data",
      text: "At Addverb I build teleoperated robot-manipulation datasets for Vision-Language-Action models in LeRobot format, and automate the data-collection workflow with Bash across remote and local machines.",
    },
    {
      title: "LLM Data Systems",
      text: "DataLens imports Hugging Face datasets, runs 8 quality checks per sample, and offers natural-language and semantic search (bge-small in pgvector, ~6 ms top-25 queries), backed by 280 tests.",
    },
    {
      title: "Full Stack Experience",
      text: "At PureWashr I built a MERN platform with real-time scheduling and order tracking for 500+ active users, integrated 15+ vendor workflows and cut API latency by 40%.",
    },
    {
      title: "Shipped and Live",
      text: "Most of my projects run live: two RAG chat apps, a Ghibli-style image converter on WebGPU, a voice assistant, hand-gesture control and a traffic simulation compiled to WebAssembly.",
    },
  ],
  education: [
    {
      period: "2023-2026",
      title: "B.Tech, Computer Science & Engineering (lateral entry) · CGPA 7.8/10",
      school: "G L Bajaj Institute of Technology & Management, Greater Noida (AKTU)",
    },
    {
      period: "2020-2023",
      title: "Diploma, Computer Science · 71%",
      school: "Government Polytechnic Deeh, Unnao (BTEUP)",
    },
  ],
  achievements: [
    "Robotics & AI Intern at Addverb Technologies (Advanced Robotics, CEO Office) since May 2026.",
    "Built PureWashr's MERN platform (a Startup India recognised startup), serving 500+ active users.",
    "Certified in Java and Problem Solving (Apna College), Python and Programming in C (Infosys Springboard).",
  ],
};

export const projects = [
  {
    label: "LLM Data Quality",
    title: "DataLens",
    description:
      "A data-quality platform for LLM fine-tuning datasets: imports Hugging Face instruction/chat datasets, runs 8 quality checks per sample (MinHash/LSH near-duplicates, PII, refusals, length, formatting), and offers LLM-validated natural-language search plus semantic search in pgvector.",
    stack: ["Python", "FastAPI", "PostgreSQL / pgvector", "Redis", "Docker", "React"],
    demo: "https://huggingface.co/spaces/sangamyo/datalens",
    repo: "https://github.com/sangamyo/datalens",
  },
  {
    label: "Multimodal RAG",
    title: "PDF RAG Chat",
    description:
      "A chatbot that answers questions from the text, tables, charts and images inside PDFs, with page citations. A vision LLM describes charts at ingest, and hybrid retrieval combines bge-small embeddings with BM25 via reciprocal rank fusion.",
    stack: ["Python", "Groq (Qwen 3.8)", "PyMuPDF", "fastembed", "BM25", "Streamlit"],
    demo: "https://pdf-rag-chat-hariom.streamlit.app",
    repo: "https://github.com/sangamyo/pdf-rag-chat",
  },
  {
    label: "In-Browser RAG",
    title: "RAG Chat (in-browser)",
    description:
      "Ask questions about your PDFs and notes with cited answers. Retrieval and the LLM both run in your browser: bge-small embeddings, hybrid BM25 + vector search, and Qwen2.5 / Llama 3.2 on WebGPU, with a grounding check on every answer.",
    stack: ["JavaScript", "transformers.js", "WebLLM", "WebGPU", "BM25", "pdf.js"],
    demo: "https://sangamyo.github.io/rag-chat/",
    repo: "https://github.com/sangamyo/rag-chat",
  },
  {
    label: "AI Product",
    title: "ATS Resume Checker",
    description:
      "Scores a resume against a job description with the Google Gemini API, reports missing keywords and section-level feedback, returns structured JSON output, parses PDF resumes and is deployed on Streamlit.",
    stack: ["Python", "Google Gemini API", "Streamlit", "PDF parsing"],
    demo: "https://atsresumecheckerbyappgeminigit-uw8c5qferlp44dqjjuas6w.streamlit.app",
    repo: "https://github.com/sangamyo/ATS_RESUME_CHECKER_BY_GOOGLE_GEMiNI",
  },
  {
    label: "Voice Assistant",
    title: "AI Desktop Assistant (Jarvis)",
    description:
      "A voice assistant you talk or type to: live weather, Wikipedia answers, definitions, a safe calculator, timers, notes and web search. The Tkinter desktop app also launches apps and plays local music; the web edition runs in the browser.",
    stack: ["Python", "Tkinter", "JavaScript", "Web Speech API", "Speech Recognition"],
    demo: "https://sangamyo.github.io/ai-desktop-assistant/",
    repo: "https://github.com/sangamyo/ai-desktop-assistant",
  },
  {
    label: "Generative AI",
    title: "Ghibli Image Converter",
    description:
      "Turns photos into a Ghibli-inspired painting with a pretrained AnimeGANv3 model, from a Python CLI or a web app that runs the model on your GPU (WebGPU), with a before/after slider and PNG download.",
    stack: ["Python", "ONNX Runtime", "WebGPU", "JavaScript"],
    demo: "https://sangamyo.github.io/ghibli-image-converter/",
    repo: "https://github.com/sangamyo/ghibli-image-converter",
  },
  {
    label: "Smart Mobility",
    title: "SYNCRONET-AI Traffic Signals",
    description:
      "A density-based adaptive traffic-signal simulation in Python and Pygame: each green phase is set from the number of vehicles waiting. Runs in the browser via WebAssembly.",
    stack: ["Python", "Pygame", "asyncio", "WebAssembly"],
    demo: "https://sangamyo.github.io/sangamyo-sangamyo-Synchronet-Traffic-Simulation-with-stats/",
    repo: "https://github.com/sangamyo/sangamyo-sangamyo-Synchronet-Traffic-Simulation-with-stats",
  },
  {
    label: "Computer Vision",
    title: "Hand Gesture Control System",
    description:
      "Touchless control with OpenCV and MediaPipe: move and click the cursor with your fingers, set volume with a pinch, plus a voice assistant. A browser version runs the same gesture logic live.",
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    demo: "https://sangamyo.github.io/control_with_hand_gesture/",
    repo: "https://github.com/sangamyo/control_with_hand_gesture",
  },
  {
    label: "DSA Analytics Platform",
    title: "AlgoFlow Tracker",
    description:
      "A full-stack platform for tracking DSA progress with real-time analytics, secure authentication and a cloud-deployed architecture.",
    stack: ["Next.js", "MongoDB", "Authentication", "REST APIs"],
    demo: "https://algo-flow-tracker.vercel.app/login",
    repo: "https://github.com/sangamyo/AlgoFlow-tracker",
  },
];

export const skillsContent = {
  title: "Skills Galaxy",
  summary: "Python backends and LLM data systems, robot-learning data, and full-stack web, on solid computer science fundamentals.",
  groups: [
    {
      name: "AI / ML & LLM",
      items: ["Machine Learning", "Deep Learning", "Generative AI", "LLM APIs (Gemini, Claude)", "RAG", "Embeddings & Semantic Search", "PyTorch", "Hugging Face"],
    },
    {
      name: "Languages",
      items: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "Bash"],
    },
    {
      name: "Backend",
      items: ["FastAPI", "Django", "Node.js", "Express", "REST APIs"],
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "pgvector", "Redis", "MongoDB"],
    },
    {
      name: "Robotics & CV",
      items: ["LeRobot", "MuJoCo", "Computer Vision", "OpenCV", "MediaPipe"],
    },
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
  ],
  core: [
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "REST API Design",
    "Authentication (JWT)",
    "Performance Optimisation (caching, indexing)",
    "Testing (pytest)",
    "Docker",
    "CI/CD (GitHub Actions)",
    "Linux",
    "Git / GitHub",
  ],
};

export const experienceContent = {
  title: "Milestone Path",
  stops: [
    {
      year: "May 2026 - Present",
      title: "Robotics & AI Intern - Addverb Technologies",
      text: "Advanced Robotics, CEO Office, Noida. Built teleoperated robot-manipulation datasets used to train Vision-Language-Action (VLA) models in LeRobot format, automated teleoperation and data collection with Bash across remote and local machines, and worked with MuJoCo and PyTorch-based VLA training/evaluation pipelines.",
    },
    {
      year: "Mar 2024 - Feb 2025",
      title: "Full Stack Developer Intern - PureWashr",
      text: "Built a MERN platform with real-time scheduling and order tracking for 500+ active users at a Startup India recognised startup, integrated 15+ vendor workflows, and cut API latency by 40% through query optimisation, indexing and leaner responses.",
    },
    {
      year: "Jun 2023 - Feb 2024",
      title: "Freelance Software Developer",
      text: "Built JWT-based authentication, admin dashboards and automation scripts for client projects (Node.js, Express, MongoDB), and reduced API response time by 50% by caching frequently read endpoints.",
    },
    {
      year: "2023-2026",
      title: "B.Tech in Computer Science & Engineering",
      text: "G L Bajaj Institute of Technology & Management (AKTU), lateral entry, CGPA 7.8/10.",
    },
    {
      year: "Now",
      title: "Available Immediately",
      text: "Open to AI Engineer, Software Engineer, Python/Backend and ML roles (full-time).",
    },
  ],
};

export const contactContent = {
  title: "Contact Portal",
  summary: "Available immediately for AI Engineer, Software Engineer, Python/Backend and ML roles. Email is the fastest way to reach me.",
  resumeHref: "/resume.pdf",
  links: [
    {
      label: "Email",
      value: "hariomkasaundhan988@gmail.com",
      href: "mailto:hariomkasaundhan988@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 90059 79045",
      href: "tel:+919005979045",
    },
    {
      label: "LinkedIn",
      value: "hari-om-kasaundhan-321b0b2a6",
      href: "https://www.linkedin.com/in/hari-om-kasaundhan-321b0b2a6/",
    },
    {
      label: "GitHub",
      value: "github.com/sangamyo",
      href: "https://github.com/sangamyo",
    },
    {
      label: "Terminal Portfolio",
      value: "sangamyo.github.io/terminal",
      href: "https://sangamyo.github.io/terminal/",
    },
  ],
};
