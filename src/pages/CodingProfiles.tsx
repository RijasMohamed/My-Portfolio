import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const profiles = [
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

const CodingProfiles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-primary">Profiles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with me on these platforms
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl border border-border hover:border-primary transition-all shadow-lg overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-br ${profile.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg">
                    <img
                      src={profile.icon}
                      alt={profile.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-primary">{profile.username}</p>
                  </div>

                  <div className="py-3 px-4 bg-muted rounded-lg">
                    <p className="text-lg font-bold">{profile.stats}</p>
                  </div>

                  <p className="text-muted-foreground">
                    {profile.description}
                  </p>

                  <Button
                    className="w-full group"
                    asChild
                  >
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl border border-border shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations, or just having 
              a chat about technology and development. Feel free to reach out through any of 
              these platforms!
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CodingProfiles;
