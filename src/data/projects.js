export const PROJECT_CATEGORIES = ["All", "Full Stack", "Java", "AI & ML", "Web"];

export const PROJECTS = [
  {
    id: "anti-proxy-attendance",
    title: "Anti-Proxy Smart Appearance Monitoring System",
    category: "AI & ML",
    duration: "2025",
    shortDescription: "AI-powered attendance monitoring system using YOLOv8 face detection, InsightFace verification, and OpenCV.",
    fullDescription: "An automated AI-powered attendance monitoring platform engineered to eliminate proxy attendance in institutions and enterprise environments. The system utilizes YOLOv8 for multi-face detection, OpenCV for real-time video processing, InsightFace for high-precision facial feature verification, and PostgreSQL for secure record logging.",
    overview: "Automates roll-call attendance through real-time computer vision stream analysis, preventing photograph/proxy spoofing.",
    problem: "Manual paper roll-call attendance is time-consuming and vulnerable to proxy signing and identity fraud.",
    solution: "Designed a real-time face detection pipeline using YOLOv8 and InsightFace embeddings with secure JWT authentication and role-based access.",
    featured: true,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    ],
    technologies: ["Python", "FastAPI", "React.js", "OpenCV", "YOLOv8", "InsightFace", "PostgreSQL", "JWT", "REST APIs"],
    features: [
      { title: "AI-Powered Attendance", description: "Automated real-time attendance logging via camera streams." },
      { title: "Face Detection (YOLOv8)", description: "Multi-face bounding box detection & liveness check." },
      { title: "Face Verification (InsightFace)", description: "High-dimensional facial feature vector similarity matching." },
      { title: "Secure JWT Authentication", description: "Tokens and encryption protecting biometric data." },
      { title: "Multi-Role Access Control", description: "Custom dashboards for Administrators, Faculty, and Students." },
      { title: "Real-Time Reporting", description: "Instant automated attendance summaries and absentee alerts." }
    ],
    architecture: ["React.js Frontend", "FastAPI Server", "YOLOv8 & InsightFace AI Pipeline", "PostgreSQL Database"],
    challenges: [
      { title: "Multi-Face Stream Latency", solution: "Optimized frame resolution & vector search index, maintaining sub-300ms verification times." }
    ],
    github: "https://github.com/appalalohith/anti-proxy-attendance",
    demo: "https://smart-attendance-demo.vercel.app"
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    category: "Java",
    duration: "2024 - 2025",
    shortDescription: "Modular hospital management application with Java Spring Boot backend, RBAC, and AI-powered virtual assistant.",
    fullDescription: "An enterprise medical workflow application built using Java and Spring Boot service-oriented architecture. Streamlines hospital operations including electronic medical records (EMR), appointment scheduling, RBAC security, and an AI-powered symptom assessment assistant.",
    overview: "Unifying hospital administrative processes, patient records, and doctor scheduling into an integrated, secure web platform.",
    problem: "Fragmented patient medical files cause administrative bottlenecks, billing errors, and scheduling conflicts.",
    solution: "Built a modular REST API backend in Spring Boot with PostgreSQL database indexing, role-based access control (RBAC), and an AI virtual assistant.",
    featured: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504813184591-01552f359ff5?q=80&w=1000&auto=format&fit=crop"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "AI Integration", "React.js", "Spring Security"],
    features: [
      { title: "Hospital Workflow Management", description: "End-to-end administration for patient registration, doctor schedules, and billing." },
      { title: "RBAC Implementation", description: "Granular access permissions for Doctors, Nurses, Receptionists, and Admins." },
      { title: "AI-Powered Virtual Assistant", description: "Integrated AI triage assistant for preliminary symptom evaluation." },
      { title: "Modular SOA Architecture", description: "Service-oriented backend modules for scalability and easy maintenance." },
      { title: "Appointment & EMR Management", description: "Real-time doctor appointment booking and patient electronic health records." }
    ],
    architecture: ["React.js Client", "Java Spring Boot REST API", "PostgreSQL RDBMS", "AI Diagnosis Assistant"],
    challenges: [
      { title: "EMR Query Latency", solution: "Utilized indexed PostgreSQL views to optimize medical history retrievals by 60%." }
    ],
    github: "https://github.com/appalalohith/hospital-management-system",
    demo: "https://hospital-mgmt-demo.vercel.app"
  }
];

export const projects = PROJECTS;
export default PROJECTS;
