import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              My Resume
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Download my complete professional resume
            </p>
            <Button size="lg" className="glow-cyan group">
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download PDF
            </Button>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Section */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card p-8 rounded-lg border border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Experience</h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Senior Full Stack Developer",
                    company: "Tech Corp",
                    period: "2022 - Present",
                    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
                  },
                  {
                    title: "Frontend Developer",
                    company: "Digital Agency",
                    period: "2020 - 2022",
                    description: "Built responsive, accessible web applications for clients across various industries.",
                  },
                  {
                    title: "Junior Developer",
                    company: "Startup Inc",
                    period: "2019 - 2020",
                    description: "Contributed to the development of a SaaS platform serving thousands of users.",
                  },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-6 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection delay={0.3}>
            <div className="bg-card p-8 rounded-lg border border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Education</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    degree: "Bachelor of Science in Computer Science",
                    school: "University Name",
                    period: "2015 - 2019",
                    description: "Graduated with honors, specializing in web technologies and software engineering.",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary pl-6"
                  >
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications Section */}
          <AnimatedSection delay={0.4}>
            <div className="bg-card p-8 rounded-lg border border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Certifications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "AWS Certified Developer",
                  "React Advanced Certification",
                  "TypeScript Professional",
                  "UI/UX Design Fundamentals",
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-muted p-4 rounded-lg border border-border"
                  >
                    <p className="text-foreground font-medium">{cert}</p>
                  </motion.div>
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
