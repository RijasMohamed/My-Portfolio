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
  { icon: Github, label: "GitHub", href: "https://github.com/Rijas-Mohamed" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rijas-mohamed" },
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
    title: "E-Commerce Platform",
    description:
      "Designed and developed a fully functional e-commerce web application with user authentication, product listings, and shopping cart functionality. Implemented secure RESTful APIs and integrated MongoDB for efficient data management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com/Rijas-Mohamed",
    features: [
      "User authentication & authorization",
      "Product listing & search",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order management system",
    ],
  },
  {
    title: "Hotel Management System",
    description:
      "Built a comprehensive full-stack hotel management system featuring room management, guest tracking, and booking modules. Designed a responsive UI with Bootstrap and implemented real-time analytics dashboard using Chart.js.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    github: "https://github.com/Rijas-Mohamed",
    features: [
      "Room & guest management",
      "Booking system",
      "Real-time dashboard",
      "MySQL database optimization",
      "Responsive design",
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
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Globe,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Bootstrap", level: 85 },
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
      { name: "Git & GitHub", level: 85 },
      { name: "Visual Studio Code", level: 90 },
      { name: "XAMPP", level: 85 },
      { name: "Postman", level: 80 },
    ],
  },
];

export const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Debugging",
  "Team Collaboration",
  "Effective Communication",
  "Time Management",
  "Attention to Detail",
  "Adaptability",
  "Continuous Learning",
  "Creativity",
  "Accountability",
];

export const languageFluency = [
  { language: "Tamil", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "Sinhala", level: "Good" },
];

export const certifications = [
  { title: "Responsive Web Design", issuer: "FreeCodeCamp" },
  { title: "Programming for Everybody", issuer: "Getting Started with Python" },
];

export const profileCards = [
  {
    name: "GitHub",
    username: "@Rijas-Mohamed",
    stats: "Active repositories",
    description: "View my projects and contributions",
    color: "from-gray-700 to-gray-900",
    link: "https://github.com/Rijas-Mohamed",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "LinkedIn",
    username: "@rijas-mohamed",
    stats: "Professional network",
    description: "Connect with me professionally",
    color: "from-blue-600 to-blue-800",
    link: "https://linkedin.com/in/rijas-mohamed",
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
    title: "E-Commerce Website (MERN Stack)",
    points: [
      "Designed and developed a fully functional e-commerce web application with user authentication, product listings, and shopping cart",
      "Implemented secure RESTful APIs using Node.js and Express.js",
      "Integrated MongoDB for product and order management",
      "Tools Used: MongoDB, Express.js, React.js, Node.js, Bootstrap",
    ],
  },
  {
    title: "Hotel Management System (PHP & MySQL)",
    points: [
      "Built a full-stack hotel management system with room, guest, and booking modules",
      "Designed a responsive Bootstrap UI and real-time Chart.js dashboard",
      "Optimized MySQL database and deployed on XAMPP for demo and testing",
      "Tools Used: PHP, MySQL, HTML, CSS, JavaScript",
    ],
  },
];

export const volunteeringHighlights = [
  "Mission Rise Up Association: Secretary, Treasurer",
  "AIESEC: Team Leader (Summer Term)",
  "Muslim Majlis, University of Jaffna: 2nd Year Coordinator & Member",
  "IEEE Student Branch, University of Vavuniya: Student Member",
  "Yarl IT Hub: Volunteer",
];

export const resumeContactDetails = [
  { label: "Email", display: "rijas2244@gmail.com", href: "mailto:rijas2244@gmail.com" },
  { label: "Phone", display: "+94 71 68 18 679", href: "tel:+94716818679" },
  { label: "LinkedIn", display: "linkedin.com/in/rijas-mohamed", href: "https://linkedin.com/in/rijas-mohamed" },
  { label: "GitHub", display: "github.com/Rijas-Mohamed", href: "https://github.com/Rijas-Mohamed" },
];
