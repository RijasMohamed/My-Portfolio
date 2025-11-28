import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    name: "GitHub",
    username: "@yourusername",
    stats: "500+ contributions",
    description: "Open source projects and code repositories",
    color: "from-[#6e5494] to-[#24292e]",
    link: "https://github.com",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "LeetCode",
    username: "@yourusername",
    stats: "1500+ problems solved",
    description: "Algorithm and data structure challenges",
    color: "from-[#FFA116] to-[#F89F1B]",
    link: "https://leetcode.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    name: "CodePen",
    username: "@yourusername",
    stats: "200+ pens",
    description: "Creative frontend experiments and demos",
    color: "from-[#47CF73] to-[#00C1B3]",
    link: "https://codepen.io",
    icon: "https://cpwebassets.codepen.io/assets/social/codepen-logo-f8b7f83f32c45c42f9f6949b97a6d1e8.svg",
  },
  {
    name: "Stack Overflow",
    username: "@yourusername",
    stats: "5k+ reputation",
    description: "Helping developers solve problems",
    color: "from-[#F48024] to-[#FE7A16]",
    link: "https://stackoverflow.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg",
  },
  {
    name: "HackerRank",
    username: "@yourusername",
    stats: "Gold badges",
    description: "Coding competitions and skill certifications",
    color: "from-[#00EA64] to-[#0FA958]",
    link: "https://hackerrank.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
  },
  {
    name: "Dev.to",
    username: "@yourusername",
    stats: "50k+ post views",
    description: "Technical articles and tutorials",
    color: "from-[#3B49DF] to-[#0A0A0A]",
    link: "https://dev.to",
    icon: "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
  },
];

const CodingProfiles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Coding Profiles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where I code, compete, and contribute to the developer community
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {profiles.map((profile, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-lg border border-border hover:border-primary transition-all shadow-card overflow-hidden group"
              >
                <div className={`h-32 bg-gradient-to-br ${profile.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="relative z-10 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={profile.icon}
                      alt={profile.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-primary">{profile.username}</p>
                  </div>

                  <div className="py-3 px-4 bg-muted rounded-lg">
                    <p className="text-lg font-bold text-foreground">{profile.stats}</p>
                  </div>

                  <p className="text-muted-foreground">
                    {profile.description}
                  </p>

                  <Button
                    className="w-full glow-cyan group/btn"
                    asChild
                  >
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                      <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
