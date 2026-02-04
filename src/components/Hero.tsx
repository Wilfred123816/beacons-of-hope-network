import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
          >
            <span className="text-white">Beacons of</span>{" "}
            <span className="text-orange">Hope</span>{" "}
            <span className="text-harlequin">Network</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/95 text-xl md:text-2xl font-semibold mb-4"
          >
            Educating, Empowering and Inspiring Communities
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/85 text-base md:text-lg mb-8"
          >
            We help the Community create Lighting Pathways to Thrive
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/donate">
              <Button className="btn-accent text-lg px-10 py-6 rounded-lg">
                Donate Today
              </Button>
            </Link>
            <Link to="/programs">
              <Button className="btn-secondary text-lg px-10 py-6 rounded-lg">
                Explore Our Programs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
