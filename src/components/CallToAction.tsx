import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import youthImage from "@/assets/youth-celebration.jpg";

const CallToAction = () => {
  return (
    <section className="relative min-h-[500px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${youthImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-2">
            Join Us in Investing in
          </h2>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-6">
            The Power of Youth
          </h2>
          <Button className="btn-primary text-lg px-10 py-6 rounded-sm">
            Donate Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
