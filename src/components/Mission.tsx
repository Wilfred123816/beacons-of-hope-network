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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="heading-display text-[32px] md:text-[40px] text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Champions of Dignity, Advocates for Inclusion, and Drivers of Justice — creating equitable futures for communities in Kisii County.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: 'var(--shadow-soft)' }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="heading-display text-[24px] text-foreground mb-3">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A future where vulnerable children, youth, and families break cycles of poverty and exclusion through learning, wellbeing, and sustainable livelihoods.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: 'var(--shadow-soft)' }}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="heading-display text-[24px] text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower vulnerable communities to learn, heal, and lead by building community-driven learning hubs that integrate education, mental health, protection, and youth empowerment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
