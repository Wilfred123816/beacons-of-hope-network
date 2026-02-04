import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import youthImage from "@/assets/youth-celebration.jpg";

const CallToAction = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${youthImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-harlequin/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-orange/20 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Be a <span className="text-orange">Beacon</span> of <span className="text-harlequin">Hope</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Together, we can break cycles of poverty and exclusion. Join a movement that values dignity, inclusion, and guided by the child protection acts. Your support creates sustainable change in Kisii County and beyond.
          </p>
          <p className="text-white/80 italic text-base md:text-lg max-w-2xl mx-auto mb-10 border-l-4 border-orange pl-4 text-left">
            "At our core, we are champions of dignity, inclusion, and social justice, lighting pathways of hope where exclusion, poverty, and silence once prevailed."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="btn-accent text-lg px-10 py-6 rounded-lg w-full sm:w-auto">
                Join Our Mission
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-secondary text-lg px-10 py-6 rounded-lg w-full sm:w-auto">
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
