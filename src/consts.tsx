export const profileText = `
Dedicated Software Engineer with a strong foundation 
in software engineering principles and hands-on experience 
building end-to-end applications. 

Skilled in Python, JavaScript, and Java with practical experience 
developing REST APIs, working across backend services, 
and modern frontend interfaces using React.js. 

A strong team player focused on system design and performance 
optimization, aligning technical solutions with business needs.
`;


export const links = [
  {
    href: "https://github.com/adirzadok16",
    label: "Github",
    bgColor: "bg-gray-900",
    hoverColor: "hover:bg-gray-800",
  },
  {
    href: "https://www.linkedin.com/in/adir-zadok-8a28a5230/",
    label: "Linkedin",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
];


export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript","TypeScript","C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS","Tailwind CSS"],
  },
  {
    category: "LangChain & LLM Development",
    items: ["LangGraph", "RAG implementation", "Vector stores" , "embedding"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Kotlin"],
  },
  {
    category: "Backend Development",
    items: ["Express", "FastAPI", "Spring","Node.js" , "Error handling"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Version Control & DevOps",
    items: ["Git", "Docker"],
  },
];

export interface Project {
  title: string;
  description: string;
  inProgress: boolean;
  link: string;
  key_skiils: string[];
}

export const projects: Project[] = [
  {
    title: "Smart Range",
    description: "An AI-powered system that analyzes shooting targets in real time to deliver performance insights for improved accuracy, backed by a Python-based backend.",
    inProgress: false,
    link: "",
    key_skiils: ["Python", "Flutter", "FastAPI", "RabbitMQ", "Computer Vision"],
  },
  {
    title: "App Monitor",
    description: "Android application that monitors per-app screen time using a background service, enforces user-defined usage limits, and triggers real-time notifications to support digital wellbeing.",
    inProgress: false,
    link: "https://github.com/adirzadok16/App-Monitor",
    key_skiils: ["Services", "Java", "Firebase", "Material Design"],
  },
  {
    title: "Meal Match App",
    description: "Real-time Android application in Kotlin connecting restaurants and charities to redistribute surplus food efficiently. Implemented donation management, push notifications, and dual user interfaces using Firebase and Material Design.",
    inProgress: false,
    link: "https://github.com/adirzadok16/Meal-Match-App",
    key_skiils: ["Kotlin", "UI/UX", "Firebase", "Material Design"],
    
  },
  {
    title: "Job_Hunter",
    description: "Full-Stack system that searches for relevant jobs, analyzes job descriptions, and automatically optimizes user resumes, using a React frontend and a Python-based backend.",
    inProgress: true,
    link: "https://github.com/adirzadok16/Job_Hunter",
    key_skiils: ["React.js", "Python", "FastAPI", "LangChain", "LangGraph",]
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website showcasing academic background, military service, and projects. Developed using React.js, TypeScript and Tailwind CSS.",
    inProgress: false,
    link: "https://github.com/adirzadok16/Personal_Website",
    key_skiils: ["React.js", "TypeScript", "Tailwind CSS", "Vite","GitHub Pages"]
  },
];


export const professionalAttributes: string[] = [
  "Team Player",
  "Problem analysis and solution design",

  "Systematic requirements gathering",
  "User-focused thinking",
  "Rapid self-learning capabilities",
  "Leadership and operational management",
  "Project planning and optimization",
  "Full-stack development",
];