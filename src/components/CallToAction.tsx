import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import youthImage from "@/assets/youth-celebration.jpg";

const CallToAction = () => {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${youthImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20">
            Join The Movement
          </span>
          <h2 className="heading-display text-[32px] md:text-[44px] text-white mb-6 leading-tight">
            Be a Beacon of Hope
          </h2>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Together, we can break cycles of poverty and exclusion. Your support creates sustainable change in Kisii County and beyond.
          </p>
          <p className="text-white/70 italic text-base max-w-xl mx-auto mb-10">
            "At our core, we are champions of dignity, inclusion, and social justice."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button className="btn-primary text-base px-8 py-6 rounded-xl gap-2 w-full sm:w-auto">
                Join Our Mission
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 text-base px-8 py-6 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
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
