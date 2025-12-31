import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { heroStats, opportunityHighlights, socialLinks } from "@/content/site-data";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="text-primary">Rijas Mohamed</span>
              </motion.h1>
              
              <motion.p
                className="text-2xl md:text-3xl text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Software Engineer Intern
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Final-year IT undergraduate passionate about software engineering, with hands-on experience building 
                frontend and full-stack web applications using React.js, JavaScript, and the MERN stack. Strong foundation 
                in OOP, DSA, and software engineering principles, plus practical experience across MVC architecture, REST 
                APIs, and Agile workflows. Actively seeking a software engineering internship to contribute to real-world 
                projects, enhance technical skills, and deliver impactful solutions.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/contact">
                <Button size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/resume">
                <Button size="lg" variant="outline">
                  <Download className="mr-2" size={20} />
                  View Resume
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="mx-auto h-40 w-40 md:h-48 md:w-48 rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 overflow-hidden shadow-lg">
                  <img
                    src="/profile/profile.jpeg"
                    alt="Portrait of Rijas Mohamed"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Looking for Opportunities</h3>
                  <p className="text-muted-foreground">
                    Actively seeking software engineering internship positions
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  {opportunityHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <AnimatedSection delay={0.2} className="mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">About Me</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
              I'm a final-year IT undergraduate at the University of Jaffna, passionate about software engineering and 
              modern product development. I enjoy building frontend and full-stack solutions with React.js, JavaScript, 
              and the MERN stack while applying solid OOP, DSA, and software engineering principles to solve real-world 
              problems.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Hero;
