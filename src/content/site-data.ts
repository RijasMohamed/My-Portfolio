import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Code,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Users,
  Wrench,
} from "lucide-react";

export type NavItem = {
  path: string;
  label: string;
};

export const navigationLinks: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/profiles", label: "Profiles" },
  { path: "/resume", label: "Resume" },
  { path: "/contact", label: "Contact" },
];

export type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/RijasMohamed" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rijasmohamed/" },
  { icon: Mail, label: "Email", href: "mailto:rijas2244@gmail.com" },
];

export const heroStats = [
  { number: "2+", label: "Years of Coding", description: "Building projects since 2022" },
  { number: "5+", label: "Projects Completed", description: "Full-stack web applications" },
  { number: "Multiple", label: "Certifications", description: "From FreeCodeCamp & more" },
];

export const opportunityHighlights = [
  "Open to full-time internships",
  "Available immediately",
  "Remote or on-site",
];

export type ProjectShowcase = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  features: string[];
};

export const projectShowcase: ProjectShowcase[] = [
  {
    title: "ServiGo – Local Services Platform (MERN)",
    description:
      "An end-to-end marketplace (currently under active development) for discovering, booking, and managing local services with role-based dashboards, mandatory authentication, and a ServiGo-branded experience across devices.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Context API",
      "TailwindCSS",
    ],
    image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&h=600&fit=crop",
    github: "https://github.com/RijasMohamed/ServiGo",
    features: [
      "Status: Ongoing build with iterative feature releases",
      "Guided multi-step booking wizard with validation and progress persistence",
      "Role-based dashboards for customers, providers, and admins",
      "Interactive services grid with hover cues, badges, and contextual actions",
      "Mandatory authentication with session persistence before bookings",
      "Responsive layouts spanning mobile, tablet, and desktop breakpoints",
      "ServiGo brand consistency with dual-tone logo accents",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Production-ready e-commerce solution (client + admin + API) powered by React.js, Node.js, Express, MongoDB, Redux Toolkit, Tailwind CSS, and Stripe. Includes auth-secured shopping, admin controls, and Dev/Prod ops support.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=600&fit=crop",
    github: "https://github.com/RijasMohamed/RYJAX",
    features: [
      "Customer experience: advanced search/filtering, real-time cart, FAQ, and responsive UI",
      "Secure auth (login/register) with order placement, history tracking, and Stripe payments",
      "Admin dashboards for analytics, product/category/brand management, and customer support",
      "Real-time order count badges, inventory tracking, and one-click data refresh",
      "Redux Toolkit-powered global state + custom skeleton loaders",
      "Environment-specific configs, CORS hardening, and MongoDB export/import workflow",
      "Blog page placeholder (coming soon) keeps roadmap visible",
    ],
  },
 
  {
    title: "Inshaf Hotel Management System (PHP & MySQL)",
    description:
      "Full-stack hotel platform that centralizes room, guest, and booking operations with secure authentication, responsive Bootstrap 5 UI, and real-time analytics for occupancy and revenue insights.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    github: "https://github.com/RijasMohamed/Inshaf-Hotel",
    features: [
      "Rooms: CRUD for room types, pricing, occupancy, and maintenance statuses",
      "Guests: Complete profiles with history, preferences, and quick search/filter",
      "Bookings: Availability checks, automatic pricing, payment tracking, and check-in/out flows",
      "Analytics dashboard with Chart.js for real-time occupancy and revenue",
      "Secure admin auth with hashed credentials and PDO-based SQL protection",
      "Responsive Bootstrap UX with smooth transitions and mobile-friendly layouts",
      "MVC architecture deployable on standard LAMP/XAMPP stacks",
    ],
  },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "PHP", level: 82 },
      { name: "Java", level: 78 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Globe,
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Bootstrap", level: 85 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Visual Studio Code", level: 92 },
      { name: "XAMPP", level: 85 },
      { name: "Postman", level: 82 },
      { name: "Jira", level: 75 },
      { name: "OpenProject", level: 72 },
      { name: "CI/CD Pipelines", level: 70 },
    ],
  },
  {
    title: "Frontend Skills",
    icon: Users,
    skills: [
      { name: "Responsive Web Design", level: 88 },
      { name: "Component Optimization", level: 82 },
      { name: "UI State Management", level: 80 },
      { name: "Cross-browser Compatibility", level: 78 },
      { name: "Accessibility Basics", level: 74 },
      { name: "Figma", level: 70 },
      { name: "Adobe XD", level: 68 },
    ],
  },
];

export type ResumeSkillGroup = {
  title: string;
  items: string[];
};

export const resumeSkillsAndTechnologies: ResumeSkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "PHP", "Java", "Python"],
  },
  {
    title: "Frameworks / Libraries",
    items: ["React.js", "Node.js", "Express.js", "Bootstrap", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools / Platforms",
    items: [
      "Git/GitHub",
      "Visual Studio Code",
      "XAMPP",
      "Postman",
      "Jira",
      "OpenProject",
      "CI/CD pipelines",
    ],
  },
  {
    title: "Core Concepts",
    items: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "CRUD Operations",
      "Agile",
      "Scrum",
      "Software Engineering Principles",
      "MVC Architecture",
    ],
  },
  {
    title: "Frontend Skills",
    items: [
      "Responsive Web Design",
      "Component Optimization",
      "UI State Management",
      "Cross-browser Compatibility",
      "Accessibility Basics",
      "Figma",
      "Adobe XD",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Agile Team Collaboration",
      "Analytical Thinking",
      "Problem Solving",
      "Debugging",
      "Effective Communication",
      "Time Management",
      "Attention to Detail",
      "Adaptability",
      "Continuous Learning",
      "Creativity",
      "Accountability",
    ],
  },
];

export const softSkills = [
  "Agile Team Collaboration",
  "Analytical Thinking",
  "Problem Solving",
  "Debugging",
  "Effective Communication",
  "Time Management",
  "Attention to Detail",
  "Adaptability",
  "Continuous Learning",
  "Creativity",
  "Accountability",
];

export const languageFluency = [
  { language: "English", level: "Fluent" },
  { language: "Tamil", level: "Native" },
  { language: "Sinhala", level: "Good" },
];

export type Certification = {
  title: string;
  issuer: string;
  link?: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    link: "https://freecodecamp.org/certification/rijas_mohamed/responsive-web-design",
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "Coursera",
    link: "https://coursera.org/share/c0e7e4ab616452d1b817144d4c59198f",
  },
  {
    title: "Front-End Development",
    issuer: "Meta (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/73QXE6OCNQLI",
  },
  {
    title: "HTML5",
    issuer: "Infosys Springboard",
    link: "https://validate.onwingspan.com",
    image: "/certificates/html5-infosys.png",
  },
  {
    title: "Tech for Everyone",
    issuer: "Sololearn",
    image: "/certificates/tech-for-everyone.png",
  },
];

export const profileCards = [
  {
    name: "GitHub",
    username: "@RijasMohamed",
    stats: "Active repositories",
    description: "View my projects and contributions",
    color: "from-gray-700 to-gray-900",
    link: "https://github.com/RijasMohamed",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "LinkedIn",
    username: "@rijasmohamed",
    stats: "Professional network",
    description: "Connect with me professionally",
    color: "from-blue-600 to-blue-800",
    link: "https://www.linkedin.com/in/rijasmohamed/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
];

export const contactInfo = [
  { icon: Mail, label: "Email", value: "rijas2244@gmail.com", href: "mailto:rijas2244@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 71 68 18 679", href: "tel:+94716818679" },
  { icon: MapPin, label: "Location", value: "Vavuniya, Sri Lanka", href: "https://maps.app.goo.gl/J4YA7Y42VnL2" },
];

export const resumeProjects = [
  {
    title: "ServiGo – Local Services Platform (MERN)",
    points: [
      "Status: Under active development with new modules rolling out iteratively",
      "Designed an all-in-one marketplace with clear navigation (Home, About, Services, Booking, Dashboard) and ServiGo-branded UI",
      "Implemented a guided, validated booking wizard that preserves user progress and enforces mandatory authentication",
      "Delivered role-based dashboards so customers, providers, and admins can edit, cancel, rate, pay, and manage complaints",
      "Built CRUD flows for services, bookings, and users using the MERN stack, MVC patterns, and context-based session handling",
      "Tools Used: MongoDB, Express.js, React.js, Node.js, TailwindCSS, Context API",
    ],
  },
  {
    title: "E-Commerce Platform (Client + Admin + API)",
    points: [
      "Shipped a production-grade storefront with secure auth, advanced filtering/search, real-time cart, FAQs, and responsive layouts",
      "Implemented Stripe-powered checkout, order placement, and history tracking with Redux Toolkit for global state",
      "Built an admin portal for analytics, product/category/brand CRUD, customer management, and real-time inventory badges",
      "Automated MongoDB export/import, environment-based configs, hardened CORS, and custom skeleton loading states",
      "Tools Used: React.js, Redux Toolkit, TailwindCSS, Node.js, Express.js, MongoDB, Stripe",
    ],
  },
  {
    title: "Inshaf Hotel Management System (PHP & MySQL)",
    points: [
      "Solved double-booking and fragmented tooling by centralizing room, guest, and booking workflows",
      "Implemented CRUD for rooms with pricing, occupancy, and maintenance tracking plus full guest history",
      "Automated booking lifecycle with availability checks, pricing rules, payment tracking, and check-in/out ops",
      "Delivered real-time analytics dashboard using Chart.js for occupancy, revenue, and trends",
      "Hardened security with hashed admin auth, PDO-based SQL queries, and role-based access",
      "Tools Used: PHP, MySQL, Bootstrap 5, Chart.js, XAMPP",
    ],
  },
];

export const volunteeringHighlights = [
  "AIESEC: Team Leader (Summer Term)",
  "Muslim Majlis, University of Jaffna (Vavuniya Campus): 2nd Year Coordinator & Member",
  "IEEE Student Branch, University of Vavuniya: Student Member & Volunteer",
  "Yarl IT Hub: Volunteer",
];

export const resumeContactDetails = [
  { label: "Email", display: "rijas2244@gmail.com", href: "mailto:rijas2244@gmail.com" },
  { label: "Phone", display: "+94 71 68 18 679", href: "tel:+94716818679" },
  { label: "LinkedIn", display: "www.linkedin.com/in/rijasmohamed/", href: "https://www.linkedin.com/in/rijasmohamed/" },
  { label: "GitHub", display: "github.com/RijasMohamed", href: "https://github.com/RijasMohamed" },
];
