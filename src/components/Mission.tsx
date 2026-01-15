import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
            Talent is Universal, <span className="heading-underline text-secondary">Opportunity is Not</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <p className="text-foreground font-semibold text-lg mb-4">
            We are committed to connecting talented youth to opportunities.
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Our approach confronts the most critical obstacles at each stage of life, from 
            poor childhood nutrition to lack of education and gainful employment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
