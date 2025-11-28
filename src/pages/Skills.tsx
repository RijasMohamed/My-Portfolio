import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Code, Palette, Database, Cloud, Zap, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Prototyping", level: 88 },
      { name: "User Research", level: 82 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 82 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    title: "Performance",
    icon: Zap,
    skills: [
      { name: "Optimization", level: 90 },
      { name: "SEO", level: 88 },
      { name: "Accessibility", level: 85 },
      { name: "Core Web Vitals", level: 87 },
    ],
  },
  {
    title: "Web3 & Modern Tech",
    icon: Globe,
    skills: [
      { name: "Three.js", level: 78 },
      { name: "WebGL", level: 75 },
      { name: "Web3.js", level: 70 },
      { name: "AI Integration", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              My Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all shadow-card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-neon rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <AnimatedSection delay={0.5} className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Other Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {[
                "Git", "GitHub", "VS Code", "Postman", "Jira", "Slack",
                "Redux", "Zustand", "Jest", "Cypress", "Webpack", "Vite",
                "MongoDB", "Redis", "Supabase", "Firebase", "Stripe",
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;
