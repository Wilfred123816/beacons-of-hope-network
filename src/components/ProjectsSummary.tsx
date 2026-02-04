import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Handshake, BookOpen, Brain, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Heart,
    title: "Community Health",
    description: "Removing barriers to accessing quality health care for underserved communities.",
    color: "blue" as const,
  },
  {
    icon: Users,
    title: "Youth Leadership",
    description: "Equipping youth with education, employment, and advocacy skills to lead change.",
    color: "harlequin" as const,
  },
  {
    icon: Handshake,
    title: "Powerful Partnerships",
    description: "Bringing together partners to tackle community challenges collectively.",
    color: "orange" as const,
  },
  {
    icon: BookOpen,
    title: "Child Protection",
    description: "Supporting children through protection clubs and psychosocial services.",
    color: "blue" as const,
  },
  {
    icon: Brain,
    title: "Mental Health & Psychosocial Support",
    description: "Providing counselling and support to caregivers and vulnerable individuals.",
    color: "harlequin" as const,
  },
  {
    icon: Briefcase,
    title: "Livelihood Programs",
    description: "Training young entrepreneurs with business skills for sustainable futures.",
    color: "orange" as const,
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-light",
    icon: "bg-blue text-white",
    border: "border-l-4 border-blue",
  },
  harlequin: {
    bg: "bg-harlequin-light",
    icon: "bg-harlequin text-white",
    border: "border-l-4 border-harlequin",
  },
  orange: {
    bg: "bg-orange-light",
    icon: "bg-orange text-white",
    border: "border-l-4 border-orange",
  },
};

const ProjectsSummary = () => {
  return (
    <section id="projects" className="section-padding bg-cream">
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
              className={`bg-card p-6 rounded-lg card-hover ${colorClasses[project.color].border}`}
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <div className={`w-12 h-12 mb-4 rounded-full ${colorClasses[project.color].icon} flex items-center justify-center`}>
                <project.icon className="w-6 h-6" />
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
            <Button className="btn-secondary text-lg px-8 py-5 rounded-lg">
              Explore All Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSummary;
