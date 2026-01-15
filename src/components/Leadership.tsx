import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Leadership = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Committed to <span className="text-secondary">Local Leadership</span>
            </h2>
            <p className="text-foreground mb-4">
              <strong>Beacons of Hope Network is locally led.</strong> Since our founding, our 
              participatory development approach has been rooted in the conviction that sustainable 
              impact and solutions to poverty are only possible when the communities most affected 
              are the real change-makers.
            </p>
            <p className="text-muted-foreground mb-8">
              We engage community advisory boards, hold feedback sessions, and strengthen 
              collaborations with like-minded organizations, <strong>building trust and credibility 
              essential to the success of our programs.</strong>
            </p>
            <Button className="btn-primary rounded-sm">
              Our Theory of Change
            </Button>
          </motion.div>

          {/* Image placeholder using gradient */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="font-heading text-secondary text-3xl font-bold">BoH</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Community Leadership in Action</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 teal-bg rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
