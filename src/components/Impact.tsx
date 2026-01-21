import { motion } from "framer-motion";
import { GraduationCap, Users, TrendingUp, Lightbulb, Target, Heart } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";

const educationStats = [
  {
    icon: GraduationCap,
    value: "200",
    label: "vulnerable learners supported annually",
  },
  {
    icon: Target,
    value: "≥85%",
    label: "school attendance among supported learners",
  },
  {
    icon: Heart,
    value: "≥70%",
    label: "of parents demonstrate improved education support practices",
  },
];

const youthStats = [
  {
    icon: Users,
    value: "120",
    label: "youth trained annually in life skills and entrepreneurship",
  },
  {
    icon: TrendingUp,
    value: "≥60%",
    label: "of participants engaged in income-generating activities",
  },
  {
    icon: Lightbulb,
    value: "≥50%",
    label: "report increased self-confidence and leadership skills",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="relative py-16 md:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 bg-secondary/85" />
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
          <h2 className="heading-display text-3xl md:text-4xl text-secondary-foreground mb-6">
            OUR IMPACT
          </h2>
          <p className="text-secondary-foreground/90 max-w-4xl mx-auto text-lg leading-relaxed">
            Beacons of Hope Network has contributed to meaningful, life-changing impact among vulnerable 
            households and marginalized groups in Birongo and Giachere Sub-Counties through an integrated, 
            people-centered development approach. By addressing education, youth empowerment, mental health 
            and wellbeing, and livelihood support simultaneously, the organization has helped families move 
            from vulnerability toward resilience and self-reliance.
          </p>
        </motion.div>

        {/* Education Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {educationStats.map((stat, index) => (
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

        {/* Key Outcomes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="heading-display text-2xl md:text-3xl text-secondary-foreground">
            Key Outcomes & Indicators
          </h3>
        </motion.div>

        {/* Youth Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {youthStats.map((stat, index) => (
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
