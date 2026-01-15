import { motion } from "framer-motion";
import { Heart, Users, Handshake } from "lucide-react";

const programs = [
  {
    icon: Heart,
    title: "Community Health",
    description: "We remove barriers to accessing quality health care for underserved communities.",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    description: "We equip youth with education, employment, and advocacy skills to lead change.",
  },
  {
    icon: Handshake,
    title: "Powerful Partnerships",
    description: "We bring together partners to tackle community challenges collectively.",
  },
];

const Programs = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="teal-bg text-secondary-foreground p-8 md:p-10 text-center card-hover rounded-sm"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-foreground/20 flex items-center justify-center">
                <program.icon className="w-8 h-8" />
              </div>
              <h3 className="heading-display text-xl md:text-2xl mb-4">
                {program.title}
              </h3>
              <p className="text-secondary-foreground/90">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
