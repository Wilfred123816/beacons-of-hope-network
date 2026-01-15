import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 pt-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
          >
            Educating, Empowering, & Inspiring Communities
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/90 text-lg md:text-xl mb-4"
          >
            <strong>Beacons of Hope Network is community-centered and youth-aligned.</strong>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary-foreground/80 text-base md:text-lg mb-8"
          >
            We envision a future where every young person has access to quality education, 
            healthcare, and opportunities to become visionary leaders and change-makers in 
            their communities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="btn-primary text-lg px-10 py-6 rounded-sm">
              Donate Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
