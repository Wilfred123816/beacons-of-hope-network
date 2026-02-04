import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Handshake, BookOpen, Brain, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Heart,
    title: "Community Health",
    description: "Removing barriers to accessing quality health care for underserved communities.",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    description: "Equipping youth with education, employment, and advocacy skills to lead change.",
  },
  {
    icon: Handshake,
    title: "Powerful Partnerships",
    description: "Bringing together partners to tackle community challenges collectively.",
  },
  {
    icon: BookOpen,
    title: "Child Protection",
    description: "Supporting children through protection clubs and psychosocial services.",
  },
  {
    icon: Brain,
    title: "Mental Health & Psychosocial Support",
    description: "Providing counselling and support to caregivers and vulnerable individuals.",
  },
  {
    icon: Briefcase,
    title: "Livelihood Programs",
    description: "Training young entrepreneurs with business skills for sustainable futures.",
  },
];

const ProjectsSummary = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Our <span className="heading-underline-green text-secondary">Projects/Programs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our comprehensive programs designed to empower communities and create lasting change in Kisii County and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-sm card-hover"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <project.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-display text-lg mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/programs">
            <Button className="btn-primary text-lg px-8 py-5 rounded-sm">
              Explore All Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSummary;
