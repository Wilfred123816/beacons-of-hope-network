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
    description: "Collaborate with us to expand impact by training our team, donations, participating in our events e.t.c.",
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
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Take <span className="heading-underline-blue text-primary">Action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join us in making a difference. There are many ways you can contribute to our mission of empowering communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="blue-bg text-primary-foreground p-8 text-center card-hover cursor-pointer rounded-sm"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center">
                <action.icon className="w-7 h-7" />
              </div>
              <h3 className="heading-display text-lg mb-3">
                {action.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
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
