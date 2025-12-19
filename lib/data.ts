export const siteConfig = {
    name: "Aditya Chaudhari",
    title: "Full-Stack Developer & AI/ML Enthusiast",
    description:
        "Full-Stack Developer and AI/ML enthusiast with experience building scalable web applications and intelligent, LLM-powered solutions.",
    email: "Adityachaudhari9022@gmail.com",
    phone: "+91 9022249388",
    location: "Pune, Maharashtra, India",
    availability: "Open to opportunities",
    education: {
        institution: "Dy Patil International University",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "2021 – 2025",
        location: "Pune, Maharashtra",
    },
    links: {
        github: "https://github.com/AdityaChaudhari901",
        linkedin: "https://www.linkedin.com/in/aditya-chaudhari007",
        twitter: "https://x.com/adityamsn11",
    },
    certifications: [
        "ServiceNow Certified Application Developer (CAD)",
        "ServiceNow Certified System Administrator (CSA)",
        "NPTEL Internet of Things (IoT) and Cloud Computing",
    ],
};

export const skills = {
    frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Shadcn UI",
    ],
    backend: [
        "Node.js",
        "Express.js",
        "Python",
        "Java",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
    ],
    aiml: [
        "RAG",
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "MCP (Model Context Protocol)",
        "LLM API Integration",
    ],
    tools: [
        "Git",
        "GitHub",
        "ServiceNow",
        "NeonDB",
        "MongoDB Atlas",
        "Clerk",
        "Inngest",
    ],
};

export const projects = [
    {
        title: "SENSAI - AI Career Coaching Platform",
        description:
            "A full-stack AI-powered career coaching platform serving 100+ users with resume enhancement, mock interviews, and industry insights. Features Google Gemini AI integration for personalized suggestions and dynamic data visualizations.",
        tech: ["Next.js", "Tailwind CSS", "Prisma", "NeonDB", "Shadcn UI", "Clerk", "Gemini AI"],
        github: "https://github.com/Aditya901/sensai",
        live: "https://sensai-virid.vercel.app/",
        featured: true,
        highlights: [
            "Integrated Google Gemini AI APIs for personalized resume suggestions and interview questions",
            "Designed responsive, mobile-first UI achieving 95% cross-browser compatibility",
            "Implemented secure authentication with Clerk managing 50+ user sessions",
            "Developed dynamic visualizations using Recharts for performance metrics",
        ],
    },
    {
        title: "PriceMatrix - AI Pricing Analysis Platform",
        description:
            " Never miss a deal. Track product prices across popular e-commerce websites and get instant notifications when prices drop",
        tech: ["Next.js 16", "Firecrawl", "Supabase", "Tailwind CSS", "Resend", "shadcn/ui", "Recharts"],
        github: "https://github.com/AdityaChaudhari901/PriceMatrix",
        live: "https://pricematrix.vercel.app/",
        featured: true,
        highlights: [
            "Universal Product Tracking – Monitor prices across major platforms including Amazon, Zara, Walmart, and more",
            "Price History Analytics – Interactive charts that visualize price trends over time",
            "Secure Google Authentication – Seamless sign-in powered by Google OAuth",
            "Automated Daily Price Monitoring – Scheduled background jobs automatically track price changes",
            "Instant Email Notifications – Receive timely alerts via email when prices drop"
        ],
    },
    {
        title: "Healthcare RAG Application",
        description:
            "A Practo-like healthcare application that scans sonography reports and generates medical insights using RAG pipelines and multi-agent systems.",
        tech: ["Python", "LangChain", "RAG", "Agentic AI", "LLM APIs"],
        github: "https://github.com/Aditya901/healthcare-rag",
        live: "#",
        featured: true,
        highlights: [
            "Implemented RAG pipelines for medical data extraction and analysis",
            "Developed multi-agent systems for scanning, analysis, and report generation",
            "Built intelligent tool-integrated applications using MCP",
        ],
    },
    {
        title: "Dental Center Management System",
        description:
            "A comprehensive web application for managing dental center operations with role-based access for Administrators and Patients. Features patient management, appointment scheduling with interactive calendar, medical records tracking, and dashboard analytics.",
        tech: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "React Router", "shadcn/ui", "Recharts"],
        github: "https://github.com/AdityaChaudhari901/dental-center-management",
        live: "https://dental-management-system-alpha.vercel.app/",
        featured: true,
        highlights: [
            "Implemented role-based access control with separate interfaces for Administrators and Patients",
            "Built interactive calendar view with appointment booking, rescheduling, and status tracking",
            "Developed complete CRUD operations for patient records and medical history management",
            "Created responsive, mobile-friendly interface with modern UI components using shadcn/ui",
        ],
    },
];

export const experiences = [
    {
        company: "SWAN TECHPRO PRIVATE LIMITED",
        role: "AI/ML Engineer",
        period: "July 2025 - Present",
        location: "Remote / Hybrid",
        description: [
            "Designed and developed a WordPress website with customized themes and plugins, and implemented a custom chatbot for user interaction",
            "Built a Practo-like healthcare application to scan sonography reports and generate medical insights using RAG",
            "Implemented RAG pipelines for extracting, retrieving, and analyzing medical data from reports",
            "Developed multi-agent systems where specialized agents handled scanning, analysis, and automated report generation",
            "Learning and working with MCP (Model Context Protocol), RAG workflows, and Agentic AI",
        ],
        current: true,
        tech: ["Python", "LangChain", "LangGraph", "RAG", "Agentic AI", "MCP", "WordPress"],
        metrics: [
            { value: "3+", label: "AI Projects" },
            { value: "RAG", label: "Pipelines Built" },
            { value: "Multi", label: "Agent Systems" },
        ],
    },
    {
        company: "ADZVORTEX SOLUTIONS LLP",
        role: "Full-Stack Web Developer Intern",
        period: "June 2024 - August 2024",
        location: "Remote / Hybrid",
        description: [
            "Collaborated with a team of 5+ developers to identify and resolve 20+ software issues ensuring 99% application reliability",
            "Contributed to 3+ full-stack projects working closely with senior engineers throughout the SDLC",
            "Utilized Git version control to manage repositories and coordinate 50+ code modifications across teams",
            "Developed responsive web applications using modern frontend and backend technologies in agile environment",
        ],
        current: false,
        tech: ["React.js", "Node.js", "Git", "JavaScript", "REST APIs", "Agile"],
        metrics: [
            { value: "20+", label: "Issues Resolved" },
            { value: "99%", label: "App Reliability" },
            { value: "3+", label: "Projects" },
        ],
    },
    {
        company: "INTO HUNDRED SOFTWARE PVT.LTD",
        role: "Web Developer Intern",
        period: "May 2023 – July 2023",
        location: "Remote / Hybrid",
        description: [
            "Developed and deployed web applications gaining expertise in HTML5, CSS3, JavaScript, Node.js, and Express.js",
            "Collaborated with development teams to troubleshoot and resolve 15+ critical bugs",
            "Improved overall project stability and user experience by 25%",
            "Performed comprehensive code testing and quality assurance",
        ],
        current: false,
        tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
        metrics: [
            { value: "15+", label: "Bugs Fixed" },
            { value: "25%", label: "UX Improved" },
            { value: "2", label: "Months" },
        ],
    },
];
