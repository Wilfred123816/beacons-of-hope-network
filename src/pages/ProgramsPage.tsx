import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Brain, Users, ShieldCheck, Sparkles } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Learning Hub",
    description: "In Birongo and Gianchere Sub-Counties, many children from low-income households face persistent barriers to education, including poverty, child labor, and low parental awareness. Beacons of Hope Network is working with families, schools, and local leaders to ensure vulnerable children—especially those at risk of dropping out—remain in school and thrive.",
    impact: "Children who were once absent from school are now attending regularly, showing improved confidence and academic engagement. Education is becoming a shared responsibility within the community, breaking cycles of exclusion and inter-generational poverty.",
    features: [
      "Provide education support infrastructure and retention mechanisms",
      "Free teacher capacity building on child safeguarding",
      "Strengthen educational ecosystem by creating safe learning environments",
      "Address school attendance barriers through family sensitization",
      "Establish learning hubs focused on quality and literacy",
      "Provide scholastic materials and psychosocial encouragement",
    ],
  },
  {
    icon: Users,
    title: "Youth Lab",
    description: "Youth in Birongo and Gianchere Sub-Counties face high unemployment, limited skills opportunities, and growing social pressures. Beacons of Hope Network's youth empowerment initiative responds by transforming vulnerability into leadership and economic potential.",
    impact: "We recognize that sustainable economic inclusion requires structured pathways—not just one-time training or seed capital that leaves youth without ongoing support.",
    features: [
      "Life skills training and mentorship programs",
      "Linkages to vocational training opportunities",
      "Structured transition pathways to livelihoods",
      "Leadership development for adolescents and youth",
      "Economic empowerment through sustainable support",
      "Role modeling and peer mentoring networks",
    ],
  },
  {
    icon: Brain,
    title: "Mental Health Psychosocial Support (MHPSS)",
    description: "Beacons of Hope Network promotes mental health and psychosocial wellbeing by using sports and learning institutions as safe and trusted platforms to reach children and youth in Kisii County. Many learners experience stress, trauma, and emotional challenges that remain unaddressed due to stigma and limited access to care.",
    impact: "By integrating mental health awareness into sports, play, and everyday school life, we normalize wellbeing conversations and encourage early help-seeking in a culturally appropriate way.",
    features: [
      "Integrating mental health awareness into sports, play, and school life",
      "Building resilience and emotional regulation through sports-based activities",
      "Training teachers in mental health literacy and basic psychosocial support",
      "Creating safe spaces for dialogue and strengthened referral pathways",
      "School and family partnerships for holistic support",
      "Connecting families to local health providers for higher-level care",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safe Village",
    description: "We strengthen community-led child protection and gender-based violence prevention systems, focusing on prevention, safe reporting, and referral pathways rather than parallel structures. We build on existing community mechanisms, enhancing their capacity rather than replacing them with external systems that disappear when funding ends.",
    impact: "Communities with stronger protection systems create safer environments for learning, and the whole becomes greater than the sum of its parts.",
    features: [
      "Community-led child protection systems",
      "Gender-based violence prevention and response",
      "Safe reporting mechanisms and referral pathways",
      "Building on existing community mechanisms",
      "Capacity enhancement for local leaders",
      "Sustainable protection systems beyond project funding",
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
              Four integrated pillars working together to transform lives and build resilient communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-start ${
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
                  <p className="text-muted-foreground text-lg mb-4">
                    {program.description}
                  </p>
                  <p className="text-foreground font-medium mb-6 bg-muted p-4 rounded-sm">
                    {program.impact}
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

      {/* How It All Connects */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              How It All Connects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Our integrated approach creates feedback loops that amplify impact. Families with improved mental health are better able to support their children's education. Communities with stronger protection systems create safer environments for learning.
            </p>
            <p className="text-foreground text-lg leading-relaxed font-medium">
              Youth who successfully transition to livelihoods become role models and mentors for younger children. The whole becomes greater than the sum of its parts.
            </p>
          </motion.div>
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
              Your contribution helps us continue transforming lives through education, mental health support, youth empowerment, and community protection.
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
