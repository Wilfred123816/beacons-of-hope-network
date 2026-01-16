import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Palette, Heart, Users, Shield, Star, Target, BookOpen, ShieldCheck, Brain, Home } from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Knowledge as Light",
    description: "We believe education illuminates pathways to opportunity, growth, and dignity.",
  },
  {
    icon: Palette,
    title: "Creativity as Expression",
    description: "We embrace the power of arts and talent to inspire, unite, and transform.",
  },
  {
    icon: Heart,
    title: "Wellness as Strength",
    description: "We champion mental health and holistic well-being as essential for thriving communities.",
  },
  {
    icon: Users,
    title: "Empowerment as Justice",
    description: "We stand for inclusive, community-driven solutions that uplift the vulnerable and amplify voices.",
  },
  {
    icon: Shield,
    title: "Integrity as Foundation",
    description: "We uphold transparency, accountability, and trust in all our work.",
  },
  {
    icon: Star,
    title: "Hope as Our Beacon",
    description: "We are guided by the unwavering belief that change is possible and transformation is within reach.",
  },
];

const objectives = [
  {
    icon: BookOpen,
    title: "Advancing Education",
    description: "Unlock opportunities for lifelong learning.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    description: "Strengthen systems to identify, prevent and respond to risks affecting children through coordinated community, school and government service providers.",
  },
  {
    icon: Brain,
    title: "Mental Health & Wellness",
    description: "Strengthen mental health and wellness as the foundation for resilience and productivity.",
  },
  {
    icon: Home,
    title: "Community Empowerment",
    description: "Enable individuals and families improve their well-being, self-reliance, and active participation in sustainable community development.",
  },
];

const pillars = [
  "Innovative Education",
  "Child Protection Strengthening",
  "Mental Health",
  "Home Based Community Empowerment",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4">
              About Us
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              Lighting Paths, Transforming Lives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary text-secondary-foreground p-8 md:p-10 rounded-sm"
            >
              <h2 className="heading-display text-2xl md:text-3xl mb-4">Our Vision</h2>
              <p className="text-secondary-foreground/90 leading-relaxed">
                A world where individuals and communities flourish with knowledge, creativity, wellness, and sustainable living—guided by hope and empowered for transformation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground p-8 md:p-10 rounded-sm"
            >
              <h2 className="heading-display text-2xl md:text-3xl mb-4">Our Mission</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To serve as a guiding light for holistic empowerment by establishing education hub for mental health through art and sports and community led support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
              Our Core Values
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="heading-display text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6 text-center">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Beacons of Hope Network operates in rural Kisii. The organization focus is children and youth particularly girls and teenage mothers who comes from vulnerable families that continues to face heightened risks of school dropouts, explorations and poverty.
              </p>
              <p className="mb-4">
                Girls and teenage mothers particularly are the most affected. Limited educational and livelihood support continue to perpetuate household stress, weakening child protection issues and loss of hope. These pressures further contributes to mental health among families and adolescents.
              </p>
              <p className="mb-6">
                Anchored in the Sustainable Development Goals (1, 3, 4 and 8), and Kenyan Vision 2030, Beacons of Hope Network advances these challenges through 4 pillars:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-secondary/10 p-4 rounded-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      ✔
                    </div>
                    <span className="text-foreground font-medium">{pillar}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary text-secondary-foreground">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Our Theory of Change
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              If we create opportunities for vulnerable children to access safe spaces for learning, healing, protection and livelihood, then they will gain knowledge, be protected, psychologically supported and live a dignified life which leads to resilient communities capable of breaking cycles of poverty, inequality, and child protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Objectives */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
              Main Objectives
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-muted rounded-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <objective.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-display text-lg mb-2 text-foreground">{objective.title}</h3>
                  <p className="text-muted-foreground text-sm">{objective.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Innovation */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-display text-3xl md:text-4xl mb-6">
              Our Innovation
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Beacons of Hope Network believes in community driven model that integrates education, child protection, mental health and community driven livelihood into a single pathway for change. This approach empowers the community and equips vulnerable children, youth, teenage mothers and people living with disabilities with sustainable future skills. By co-designing local realities and community support mental health, protection, education and livelihood, the model creates sustainable impacts that continues beyond projects funding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Support Us */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-6">
              Why Support Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Beacons of Hope Network is run by professional and experienced personnel in different project cycle. We are guided by the code of conduct, adhere to child protection principles on human dignity.
            </p>
            <p className="text-foreground text-lg leading-relaxed font-medium">
              Your support in this project will equip vulnerable learners with future-ready skills, safe healing spaces and empowering the communities to be self-sustained. By investing in this project, you are not only transforming lives but also building resilient and sustainable communities for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
