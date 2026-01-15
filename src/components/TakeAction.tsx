import { motion } from "framer-motion";
import { Heart, Gift, Lightbulb, Users } from "lucide-react";

const actions = [
  {
    icon: Heart,
    title: "Invest in Youth",
    description: "Your donation provides education and opportunities for young leaders.",
  },
  {
    icon: Gift,
    title: "Ways to Support",
    description: "Discover the many ways you can support Beacons of Hope Network.",
  },
  {
    icon: Lightbulb,
    title: "Collaborate With Us",
    description: "Partner with us on locally led solutions for community challenges.",
  },
  {
    icon: Users,
    title: "Join Our Network",
    description: "Connect with our growing community of changemakers and volunteers.",
  },
];

const TakeAction = () => {
  return (
    <section className="section-padding bg-background" id="action">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Take <span className="heading-underline-maroon text-primary">Action</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="maroon-bg text-primary-foreground p-8 text-center card-hover cursor-pointer rounded-sm"
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
