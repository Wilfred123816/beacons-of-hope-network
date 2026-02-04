import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section id="about-us" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            About <span className="text-secondary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beacons of Hope Network is community-centered and youth-aligned, dedicated to creating lasting change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-lg p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-display text-2xl md:text-3xl text-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A future where vulnerable children, youth, and families break cycles of poverty and exclusion through learning, wellbeing, and sustainable livelihoods.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-lg p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-display text-2xl md:text-3xl text-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              To empower vulnerable communities to learn, heal, and lead by building community-driven learning hubs that integrate education, mental health, protection, and youth empowerment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
