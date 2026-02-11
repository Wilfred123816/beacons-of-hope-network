import { motion } from "framer-motion";
import { Heart, Gift, Users, Handshake, GraduationCap, Megaphone, Trophy, Share2 } from "lucide-react";

const actions = [
  {
    icon: Heart,
    title: "Volunteer",
    description: "Donate your skills through mentorship, life skills, counselling, creative art and community outreaches.",
  },
  {
    icon: Gift,
    title: "Donate",
    description: "Your little contributions will keep vulnerable children in school, protect and help them access MHPSS.",
  },
  {
    icon: Users,
    title: "Become a Mentor",
    description: "Walk with children and youth through counselling, life skills and in livelihood programs.",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate with us to expand impact by training our team, donations, participating in our events.",
  },
  {
    icon: GraduationCap,
    title: "Intern",
    description: "Gain skills in real world experience in different areas of our project.",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description: "Use your voice and skills in promoting rights of children, mental health and empowerment.",
  },
  {
    icon: Trophy,
    title: "Run for a Cause",
    description: "Join our community marathons and fundraising events.",
  },
  {
    icon: Share2,
    title: "Share Our Story",
    description: "Share our vision and mission in different social media platforms to reach more people.",
  },
];

const TakeAction = () => {
  return (
    <section id="take-action" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get Involved
          </span>
          <h2 className="heading-display text-[32px] md:text-[40px] text-foreground">
            Take Action
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join us in making a difference. There are many ways you can contribute to our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="bg-card p-6 text-center rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <action.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="heading-display text-base mb-2 text-foreground">
                {action.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {action.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
