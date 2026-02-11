import { motion } from "framer-motion";
import { GraduationCap, Users, TrendingUp, Heart } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";

const impactStats = [
  {
    icon: GraduationCap,
    value: "20",
    label: "Learners Supported",
    description: "Vulnerable children receiving comprehensive educational support annually",
  },
  {
    icon: Users,
    value: "100",
    label: "Children Protection Clubs",
    description: "Students enrolled for child protection clubs in schools",
  },
  {
    icon: Heart,
    value: "20",
    label: "Psychosocial Support",
    description: "Caregivers supported on counselling and psychosocial support",
  },
  {
    icon: TrendingUp,
    value: "10",
    label: "Youth Trained",
    description: "Young entrepreneurs equipped with business skills each year",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="relative py-24 md:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium mb-4 border border-white/20">
            Our Impact
          </span>
          <h2 className="heading-display text-[32px] md:text-[40px] text-white mb-4">
            Real Change, Measurable Results
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Our community-driven approach creates lasting transformation across Kisii County.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-sm p-8 text-center rounded-xl border border-white/15 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/15 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="heading-display text-4xl md:text-5xl mb-2 text-white">
                {stat.value}
              </div>
              <h3 className="font-heading font-semibold text-white mb-2 text-sm">
                {stat.label}
              </h3>
              <p className="text-white/70 text-xs leading-relaxed">
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
