// ── Edit all your portfolio content here ──

export const META = {
  name: "Deekshitha Lakshmi Kalavala",
  shortName: "Deekshitha",
  initials: "DK",
  tagline: "Hi, I'm Deekshitha Lakshmi Kalavala",
  //eyebrow: "Master's in CS · University of Cincinnati",
  sub: "Software Engineer · Machine Learning · Cloud (Azure / AWS). I build clean, scalable backend systems and turn messy data into reliable products.",
  email: "your.email@gmail.com",
  location: "Cincinnati, Ohio, USA",
  github: "https://github.com/DeekshithaLakshmiKalavala",
  linkedin: "https://www.linkedin.com/in/kalavala-deekshitha/",
  resume: process.env.PUBLIC_URL + "/Resume.pdf",
};

export const STATS = [
  { num: "AZ",  label: "Azure Certified" },
  { num: "ML",  label: "Data + ML Projects" },
  { num: "SWE", label: "Open to Full‑Time" },
];

export const ABOUT = [
  {
    title: "Who I Am",
    text: "I'm a Computer Science Master's student at the University of Cincinnati with a strong interest in Software Engineering, Backend Development, Cloud Computing, and DevOps. I enjoy building scalable applications and leveraging cloud technologies.",
  },
  {
    title: "What I Do",
    text: "My experience spans Java, Python, C/C++, and web technologies. I focus on backend development — server-side logic, databases, and APIs. I've applied ML techniques to solve real-world problems.",
  },
  {
    title: "Cloud & Certifications",
    list: [
      "Microsoft Azure Fundamentals (AZ-900)",
      "Azure DevOps Engineer Expert (AZ-400)",
      "Oracle Cloud Infrastructure Foundations",
      "AWS Solution Architect",
    ],
  },
  {
    title: "Currently Looking For",
    list: [
      "Full-time Software Engineer roles",
      "Backend Developer positions",
      "Cloud or DevOps Engineer opportunities",
      "Innovative teams solving real problems",
    ],
  },
];

export const EXPERIENCE = [
  {
    date: "2024 – Present",
    title: "Graduate Researcher / Capstone",
    company: "University of Cincinnati · MS CS",
    bullets: [
      "Capstone: Location-Aware Real Estate Valuation using spatial ML",
      "Coursework in Cloud Computing, AI/ML, Distributed Systems, Big Data",
      "Exploring Azure, AWS, and DevOps pipelines for cloud-native solutions",
    ],
  },
  {
    date: "2021 – 2023",
    title: "Research & Project Work",
    company: "Koneru Lakshmaiah Education Foundation",
    bullets: [
      "Published research on Bio-Medical Data Classification using PCA + Near Miss",
      "Applied ML algorithms to handle class imbalance in healthcare datasets",
      "Built front-end components using HTML, CSS, and JavaScript",
    ],
  },
  {
    date: "Add Dates",
    title: "Software Engineer Intern",
    company: "Company Name · Add your internship details here",
    bullets: [
      "Developed backend modules and REST APIs using Java and Python",
      "Integrated SQL databases and improved query performance",
      "Collaborated in agile sprint cycles delivering production features",
    ],
  },
];

export const SKILLS = [
  { icon: "💻", title: "Programming Languages", tags: ["Java", "Python", "C", "C++", ".NET"], primary: ["Java", "Python"] },
  { icon: "🌐", title: "Web Technologies",      tags: ["HTML5", "CSS3", "JavaScript", "XML"], primary: ["JavaScript"] },
  { icon: "🗄️", title: "Database Tools",        tags: ["SQL", "MySQL"],                       primary: ["SQL"] },
  { icon: "☁️", title: "Cloud & DevOps",         tags: ["Microsoft Azure", "Azure DevOps", "AWS"], primary: ["Microsoft Azure", "Azure DevOps"] },
  { icon: "🤖", title: "Machine Learning",       tags: ["PCA", "scikit-learn", "Pandas", "NumPy"], primary: ["PCA"] },
  { icon: "🧰", title: "Tools & Version Control",tags: ["Git", "GitHub", "VS Code"],           primary: ["Git"] },
];

export const SKILL_BARS = [
  { label: "Python",          level: 90 },
  { label: "Java",            level: 85 },
  { label: "SQL",             level: 80 },
  { label: "JavaScript",      level: 75 },
  { label: "Microsoft Azure", level: 78 },
];

export const PROJECTS = [
  {
    num: "01", icon: "📊", category: "ml",
    chip: "ML · Geo",
    title: "Location-Aware Real Estate Valuation",
    desc: "Predict property prices using spatial and neighbourhood features. Combines ML models with geospatial data to deliver accurate, location-sensitive valuations.",
    tech: ["Python", "ML", "Spatial Data"],
    links: [{ label: "GitHub ↗", url: "#" }, { label: "Demo ↗", url: "#" }],
  },
  {
    num: "02", icon: "🧬", category: "ml",
    chip: "Machine Learning",
    title: "Bio-Medical Data Classification (PCA + Near Miss)",
    desc: "Applied PCA and Near Miss techniques to handle class imbalance in biomedical datasets, significantly improving classification performance on healthcare data.",
    tech: ["Python", "PCA", "Near Miss", "scikit-learn"],
    links: [{ label: "GitHub ↗", url: "#" }, { label: "Paper ↗", url: "#" }],
  },
  {
    num: "03", icon: "⚙️", category: "backend",
    chip: "Backend",
    title: "Secure REST API (Java)",
    desc: "Built a production-ready REST API with authentication, input validation, and SQL database integration. Focused on security best practices and clean architecture.",
    tech: ["Java", "REST", "SQL"],
    links: [{ label: "GitHub ↗", url: "#" }],
  },
];

export const CERTIFICATIONS = [
  { icon: "☁️", title: "AWS Solution Architect (SAA-03)",            issuer: "Amazon Web Services" },
  { icon: "🔧", title: "Azure DevOps Engineer (AZ-400)",             issuer: "Microsoft" },
  { icon: "🏅", title: "Microsoft Azure Fundamentals (AZ-900)",      issuer: "Microsoft" },
  { icon: "🌩️", title: "Oracle Cloud Infrastructure Foundations",    issuer: "Oracle · Associate" },
];

export const EDUCATION = [
  {
    badge: "2024 – 2026",
    degree: "Master of Engineering in Computer Science",
    school: "University of Cincinnati · Ohio, USA",
    meta: "Focus: ML, Cloud, AI",
    courses: ["Cloud Computing", "AI / Machine Learning", "Distributed Systems", "Big Data Analytics", "DevOps"],
  },
  {
    badge: "2019 – 2023",
    degree: "Bachelor of Technology in Computer Science",
    school: "Koneru Lakshmaiah Education Foundation · India",
    meta: "Specialization: AI / IPA",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Machine Learning", "Embedded Systems", "DBMS"],
  },
];
