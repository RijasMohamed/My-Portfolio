import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Designed and developed a fully functional e-commerce web application with user authentication, product listings, and shopping cart functionality. Implemented secure RESTful APIs and integrated MongoDB for efficient data management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com/Rijas-Mohamed",
    features: [
      "User authentication & authorization",
      "Product listing & search",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order management system"
    ]
  },
  {
    title: "Hotel Management System",
    description: "Built a comprehensive full-stack hotel management system featuring room management, guest tracking, and booking modules. Designed a responsive UI with Bootstrap and implemented real-time analytics dashboard using Chart.js.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    github: "https://github.com/Rijas-Mohamed",
    features: [
      "Room & guest management",
      "Booking system",
      "Real-time dashboard",
      "MySQL database optimization",
      "Responsive design"
    ]
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in full-stack web development
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all shadow-lg h-full flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Skills Preview Section */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
            <p className="text-muted-foreground mb-6">
              Check out my skills and coding profiles
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <a href="/skills">View Skills</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/profiles">Coding Profiles</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
