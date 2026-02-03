import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Palette, Heart, Users, Shield, Star, BookOpen, Brain, Home, ShieldCheck, Scale } from "lucide-react";

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

const pillars = [
  {
    icon: BookOpen,
    title: "Learning Hub",
    description: "Education empowerment for vulnerable children and families",
  },
  {
    icon: Users,
    title: "Youth Lab",
    description: "Youth empowerment and leadership development",
  },
  {
    icon: Brain,
    title: "MHPSS",
    description: "Mental health and psychosocial wellbeing",
  },
  {
    icon: ShieldCheck,
    title: "Safe Village",
    description: "Community-led child protection and GBV prevention",
  },
];

const sdgAlignment = [
  { number: 1, title: "No Poverty" },
  { number: 3, title: "Good Health" },
  { number: 4, title: "Quality Education" },
  { number: 5, title: "Gender Equality" },
  { number: 17, title: "Partnerships" },
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
                A future where vulnerable children, youth, and families break cycles of poverty and exclusion through learning, wellbeing, and sustainable livelihoods.
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
                To empower vulnerable communities to learn, heal, and lead by building community-driven learning hubs that integrate education, mental health, protection and youth empowerment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Objectives */}
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
              Our Main Objectives
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Advancing Education",
                description: "Unlocking opportunities for lifelong learning and breaking cycles of exclusion."
              },
              {
                icon: ShieldCheck,
                title: "Strengthening Protection",
                description: "Identifying, preventing, and responding to risks affecting children, girls, and women through community-based approaches."
              },
              {
                icon: Brain,
                title: "Mental Health & Wellness",
                description: "Building the foundation for resilience and productivity through psychosocial support."
              },
              {
                icon: Users,
                title: "Empowering Youth",
                description: "Establishing Youth Lab with digital skills, mentorship, and business grants for sustainable livelihoods."
              }
            ].map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-sm flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <objective.icon className="w-6 h-6 text-secondary" />
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
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Lightbulb className="w-10 h-10 text-primary" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground">
                Our Innovation
              </h2>
            </div>
            <div className="bg-secondary text-secondary-foreground p-8 md:p-10 rounded-sm">
              <p className="leading-relaxed mb-4">
                Beacons of Hope Network believes in a community-driven model that integrates education, child protection, mental health, and community-driven livelihood into a single pathway for change.
              </p>
              <p className="leading-relaxed mb-4">
                This approach empowers the community and equips vulnerable children, youth, teenage mothers, and people living with disabilities with sustainable future skills.
              </p>
              <p className="leading-relaxed font-medium">
                By co-designing with local realities and community support across mental health, protection, education, and livelihood, the model creates sustainable impacts that continue beyond project funding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
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
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Beacons of Hope Network is a community-rooted, people-centered CBO working to restore dignity, opportunity, justice and resilience among marginalized populations particularly in Kisii County, with a focus on Birongo and Gianchere Sub-Counties. We aspire to reduce inter-generational poverty by strengthening families through integrated community-based family care.
              </p>
              <p>
                Our integrated development model addresses four interconnected pillars: Education, Mental Health, Youth Support, and Protection—which borrows from Sustainable Development Goals (SDG 1, 3, 4, 5, 17) and Agenda 2063. We value local leadership, accountability, and sustainability, ensuring change is owned by the community themselves.
              </p>
              <p>
                The organization is grounded on the belief that sustainable development requires a multifaceted approach in addressing family vulnerability at the centre of interventions and opportunities. At our core, we are champions of dignity, inclusion, and social justice, lighting pathways of hope where exclusion, poverty, and silence once prevailed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
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
              The Challenge We Address
            </h2>
            <div className="bg-muted p-8 md:p-10 rounded-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                In rural Kisii, poverty manifests itself through gender-based violence, distress, teenage pregnancies, and school absenteeism. This also weakens transition pathways for youth. These challenges are not standalone—they are interconnected and create a cycle of vulnerability which continues to hold families back.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unfortunately, families suffering with mental health challenges are unable to provide proper child care, which in turn affects their children's academics. Youth on the other side remain economically marginalized with no clear pathway.
              </p>
              <p className="text-foreground font-medium leading-relaxed">
                Beacons of Hope Network believes service delivery should not operate in silos but holistically—to identify the root cause rather than symptoms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary text-secondary-foreground">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-display text-3xl md:text-4xl mb-4">
              Our Four Pillars
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              An integrated approach addressing interconnected challenges
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background text-foreground p-6 rounded-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="heading-display text-lg mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
                className="bg-muted p-6 rounded-sm hover:shadow-md transition-shadow"
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

      {/* Theory of Change */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-display text-3xl md:text-4xl mb-6 text-center">
              How Change Happens
            </h2>
            <div className="space-y-6 text-lg leading-relaxed opacity-90">
              <p>
                Our Theory of Change is grounded in evidence and local experience. If vulnerable children remain in school, families receive psychosocial support, community protection systems are strengthened, and youth access structured transition pathways, then learning outcomes, wellbeing, and economic resilience will improve. This leads to reduced exposure to violence, higher school completion, and long-term poverty reduction.
              </p>
              <p>
                This integrated approach creates feedback loops that amplify impact. Families with improved mental health are better able to support their children's education. Communities with stronger protection systems create safer environments for learning. Youth who successfully transition to livelihoods become role models and mentors for younger children.
              </p>
              <p className="font-semibold text-center text-xl">
                The whole becomes greater than the sum of its parts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDG Alignment */}
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
              Aligned with Global Goals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our work contributes to the UN Sustainable Development Goals and Africa's Agenda 2063
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {sdgAlignment.map((sdg, index) => (
              <motion.div
                key={sdg.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-muted px-5 py-3 rounded-sm"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                  {sdg.number}
                </div>
                <span className="text-foreground font-medium text-sm">{sdg.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding Commitment */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Scale className="w-10 h-10 text-primary" />
              <h2 className="heading-display text-3xl md:text-4xl text-foreground">
                Safeguarding Commitment
              </h2>
            </div>
            <div className="bg-background p-8 md:p-10 rounded-sm">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We uphold zero tolerance against any forms of abuse. This commitment is embedded in our governance, partnerships, and operations policies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We operate under key legal frameworks including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                  Basic Education Act 2013
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                  Data Protection Act 2019
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                  Children Act 2022
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                  Sexual Offences Act 2006
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Support Us */}
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
              Why Support Us
            </h2>
            <p className="opacity-90 text-lg leading-relaxed mb-6">
              Beacons of Hope Network is run by professional and experienced personnel across the project cycle. We are guided by our code of conduct and adhere to child protection principles on human dignity.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Your support equips vulnerable learners with future-ready skills, safe healing spaces, and empowers communities to be self-sustained. By investing in this project, you are transforming lives and building resilient, sustainable communities for future generations.
            </p>
            <a
              href="/take-action"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
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

export default AboutPage;
