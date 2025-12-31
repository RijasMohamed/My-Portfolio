import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap, Award, Users, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  certifications,
  resumeSkillsAndTechnologies,
  resumeContactDetails,
  resumeProjects,
  volunteeringHighlights,
} from "@/content/site-data";

const Resume = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block p-6 bg-primary/10 rounded-full mb-6"
            >
              <FileText className="w-16 h-16 text-primary" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-primary">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Download my complete professional resume
            </p>
            <Button size="lg" className="group" asChild>
              <a href="/resume/rijas-mohamed.pdf" download>
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download PDF
              </a>
            </Button>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Summary */}
          <AnimatedSection delay={0.1}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-primary">Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Final-year IT undergraduate passionate about software engineering, with hands-on experience building 
                frontend and full-stack web applications using React.js, JavaScript, and the MERN stack. Strong foundation 
                in OOP, DSA, and software engineering principles with practical exposure to MVC architecture, REST APIs, and 
                Agile workflows. Actively seeking a software engineering internship to contribute to real-world projects, 
                sharpen technical skills, and deliver impactful solutions.
              </p>
            </div>
          </AnimatedSection>

          {/* Skills and Technologies */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Skills & Technologies</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Aug 2022 – Present</p>
              <div className="grid md:grid-cols-2 gap-4">
                {resumeSkillsAndTechnologies.map((group) => (
                  <div key={group.title} className="bg-muted/40 rounded-lg p-4 border border-border">
                    <p className="font-semibold text-foreground mb-2">{group.title}</p>
                    <p className="text-muted-foreground">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.3}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Education</h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-primary pl-6"
              >
                <h3 className="text-xl font-bold">
                  Bachelor of Information Communication Technology (Hons) (Reading)
                </h3>
                <p className="text-primary font-medium">
                  University of Vavuniya, Sri Lanka | CGPA - 3.35
                </p>
                <p className="text-sm text-muted-foreground mb-2">Aug 2022 – Present</p>
                <p className="text-muted-foreground">
                  Currently in final year, focusing on software engineering and web development
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Projects */}
          <AnimatedSection delay={0.4}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Projects</h2>
              </div>
              
              <div className="space-y-8">
                {resumeProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-6 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <ul className="space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">▪</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.5}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Certifications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-muted p-4 rounded-lg border border-border"
                  >
                    <p className="font-medium">{`${cert.title} – ${cert.issuer}`}</p>
                    {(cert.image || cert.link) && (
                      <a
                        href={cert.image ?? cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary font-medium hover:underline"
                      >
                        View Credential
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Volunteering */}
          <AnimatedSection delay={0.6}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Volunteering</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {volunteeringHighlights.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.7}>
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-2 text-muted-foreground">
                {resumeContactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block hover:text-primary transition-colors"
                  >
                    {item.display}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Resume;
