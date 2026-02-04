import { motion } from "framer-motion";
import { GraduationCap, Users, TrendingUp, Heart } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";

const impactStats = [
  {
    icon: GraduationCap,
    value: "20",
    label: "Learners Supported",
    description: "Vulnerable children receiving comprehensive educational support annually",
    color: "blue" as const,
  },
  {
    icon: Users,
    value: "100",
    label: "Children Protection Clubs",
    description: "Students enrolled for child protection clubs in schools",
    color: "harlequin" as const,
  },
  {
    icon: Heart,
    value: "20",
    label: "Psychosocial Support",
    description: "Caregivers supported on counselling and psychosocial support",
    color: "orange" as const,
  },
  {
    icon: TrendingUp,
    value: "10",
    label: "Youth Trained",
    description: "Young entrepreneurs equipped with business skills each year",
    color: "blue" as const,
  },
];

const colorClasses = {
  blue: "text-blue border-t-4 border-blue",
  harlequin: "text-harlequin border-t-4 border-harlequin",
  orange: "text-orange border-t-4 border-orange",
};

const Impact = () => {
  return (
    <section id="impact" className="relative py-16 md:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 gradient-blue-green opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
            OUR IMPACT
          </h2>
          <p className="text-white/90 max-w-4xl mx-auto text-lg leading-relaxed">
            Real change, measurable results. Our community-driven approach creates lasting transformation across Kisii County.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-6 md:p-8 text-center rounded-lg ${colorClasses[stat.color]}`}
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color === 'blue' ? 'text-blue' : stat.color === 'harlequin' ? 'text-harlequin' : 'text-orange'}`} />
              <div className={`heading-display text-3xl md:text-4xl mb-2 ${stat.color === 'blue' ? 'text-blue' : stat.color === 'harlequin' ? 'text-harlequin' : 'text-orange'}`}>
                {stat.value}
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
