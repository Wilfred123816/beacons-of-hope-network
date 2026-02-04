import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Be a Beacon of Hope
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Together, we can break cycles of poverty and exclusion. Join a movement that values dignity, inclusion, and guided by the child protection acts. Your support creates sustainable change in Kisii County and beyond.
          </p>
          <p className="text-secondary italic text-base md:text-lg max-w-2xl mx-auto mb-8">
            "At our core, we are champions of dignity, inclusion, and social justice, lighting pathways of hope where exclusion, poverty, and silence once prevailed."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="btn-primary text-lg px-10 py-6 rounded-sm">
                Join Our Mission
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-6 rounded-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
