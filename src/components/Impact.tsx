import { motion } from "framer-motion";
import { Users, Award, TrendingUp } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "community members served annually.",
  },
  {
    icon: Award,
    value: "15",
    label: "years of experience empowering communities.",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "of youth in our programs pursue higher education.",
  },
];

const Impact = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Title Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-display text-3xl md:text-4xl text-secondary-foreground leading-tight">
              The Power of Community
            </h2>
            <p className="text-secondary-foreground/90 mt-4">
              With years of dedicated work in our communities, Beacons of Hope Network has a 
              proven track record of leading change.
            </p>
          </motion.div>

          {/* Stats */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/95 p-6 md:p-8 text-center rounded-sm"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <div className="heading-display text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
