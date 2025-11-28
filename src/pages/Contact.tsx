import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rijas2244@gmail.com",
      href: "mailto:rijas2244@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 71 68 18 679",
      href: "tel:+94716818679",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vavuniya, Sri Lanka",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rijas-Mohamed",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rijas-mohamed",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm currently looking for internship opportunities. Feel free to reach out!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card p-8 rounded-xl border border-border shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.form>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedSection delay={0.3}>
              <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                <h2 className="text-2xl font-bold mb-6">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Connect on <span className="text-primary">Social Media</span>
                </h2>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 p-4 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-center border border-border hover:border-primary"
                    >
                      <social.icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">{social.label}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Looking for <span className="text-primary">Opportunities</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking software engineering internship positions where I can 
                  contribute to real-world projects, learn from experienced developers, and 
                  grow my skills in a professional environment.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
