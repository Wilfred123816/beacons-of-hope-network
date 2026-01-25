import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Brain, Home, Sparkles } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Learning Hubs",
    description: "Beacons of Hope Network is on the process of establishing community learning hubs and pathways to transform youth education and livelihoods.",
    features: [
      "Establishing education hub to benefit needy and vulnerable rural children in Kisii County",
      "Digital literacy & coding training",
      "Create a community safe space where youth will access free learning materials and mentorship",
      "Link teenage mothers to vocational training and jobs opportunities",
      "Provide scholarship opportunities for vulnerable children who otherwise will not access education",
    ],
  },
  {
    icon: Brain,
    title: "Mental Health Psychosocial Support (MHPSS)",
    description: "Beacons of Hope Network promotes mental health and psychosocial wellbeing by using sports and learning institutions as safe and trusted platforms to reach children and youth in Kisii County.",
    features: [
      "Integrating mental health awareness into sports, play, and everyday school life",
      "Normalizing wellbeing conversations and encouraging early help-seeking",
      "Building resilience, emotional regulation, and positive coping skills through sports-based activities",
      "Training teachers in mental health literacy and basic psychosocial support",
      "Creating safe spaces for dialogue and strengthened referral pathways",
      "Connecting families to local health providers for higher-level care when needed",
    ],
  },
  {
    icon: Home,
    title: "Home Based Community Empowerment",
    description: "Improved socio-economic well-being and self-reliance among marginalized households in Kisii County.",
    features: [
      "Increased access to basic services",
      "Enhanced livelihoods opportunities",
      "Strengthened community participation",
      "Sustainable use of local resources",
      "Support for marginalized households",
    ],
  },
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-secondary text-secondary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl mx-auto">
              Transforming lives through education, mental health support, and community empowerment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <program.icon className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">{program.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-display text-3xl md:text-4xl mb-4">
              Support Our Programs
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Your contribution helps us continue transforming lives through education, mental health support, and community empowerment.
            </p>
            <a
              href="/take-action"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-sm font-medium hover:bg-secondary/90 transition-colors"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
