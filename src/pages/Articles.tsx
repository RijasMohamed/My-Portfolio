import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Performant React Applications",
    excerpt: "Learn the best practices for optimizing React apps and improving Core Web Vitals scores.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    title: "The Future of Web Development with AI",
    excerpt: "Exploring how artificial intelligence is reshaping the way we build web applications.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt: "A comprehensive guide to utility-first CSS and building modern, responsive designs.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
  },
  {
    title: "TypeScript Best Practices in 2024",
    excerpt: "Advanced TypeScript patterns and techniques for writing type-safe code.",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
  },
  {
    title: "Deploying Modern Web Apps",
    excerpt: "A guide to deploying and scaling web applications using modern cloud platforms.",
    date: "February 20, 2024",
    readTime: "9 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
  {
    title: "Animation in Web Development",
    excerpt: "Creating smooth, performant animations with Framer Motion and CSS.",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Featured Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on web development, design, and technology
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all shadow-card group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:bg-primary/10"
                  >
                    Read More
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
