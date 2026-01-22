import { motion } from "framer-motion";
import { Heart, Gift, Users, Handshake, GraduationCap, Megaphone, Trophy, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    title: "Run a Marathon for Us",
    description: "Participate in a marathon that supports our vulnerable children and youth centred initiatives.",
  },
  {
    icon: Share2,
    title: "Share Our Story",
    description: "Share our vision and mission in different social media platforms to reach more people.",
  },
];

const TakeActionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 maroon-bg text-primary-foreground">
        <div className="container-narrow mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Take Action
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
              Join us in making a difference. There are many ways you can contribute to our mission of empowering communities and transforming lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Actions Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 text-center card-hover cursor-pointer rounded-sm group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <action.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="heading-display text-xl mb-3 text-foreground">
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

      {/* Call to Action */}
      <section className="section-padding teal-bg text-primary-foreground">
        <div className="container-narrow mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Every action counts. Whether you volunteer your time, donate resources, or simply share our story, you're helping us create lasting change in communities.
            </p>
            <a
              href="mailto:beaconsofhopenetwork@gmail.com"
              className="inline-block bg-primary-foreground text-secondary px-8 py-4 rounded-sm font-heading font-bold text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakeActionPage;
