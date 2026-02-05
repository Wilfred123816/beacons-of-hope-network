import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Users, Brain, ShieldCheck } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Learning Hub",
    subtitle: "Breaking Barriers to Learning in Kisii County",
    content: `In Birongo and Gianchere Sub-Counties, many children from low-income households face persistent barriers to education, including poverty, child labor, and low parental awareness. Beacons of Hope Network is working with families, schools, and local leaders to ensure vulnerable children—especially those at risk of dropping out—remain in school and thrive.

Through targeted education support, mentorship, and family sensitization forums, learners receive scholastic materials, psychosocial encouragement, and a protective community environment. Parents are engaged to understand the value of education and their role in sustaining their children's learning journeys. Teachers and community volunteers collaborate to monitor attendance and wellbeing.

As a result, children who were once absent from school are now attending regularly, showing improved confidence and academic engagement. Education is becoming a shared responsibility within the community, breaking cycles of exclusion and inter-generational poverty.`
  },
  {
    icon: Users,
    title: "Youth Lab",
    subtitle: "Turning Vulnerability into Leadership",
    content: `Youth in Birongo and Gianchere Sub-Counties face high unemployment, limited skills opportunities, and growing social pressures. Beacons of Hope Network's youth empowerment initiative responds by transforming vulnerability into leadership and economic potential.

The organization supports adolescents and youth with life skills, mentorship, linkages to vocational training and livelihood opportunities as a transition pathway. We recognize that sustainable economic inclusion requires structured pathways—not just one-time training or seed capital that leaves youth without ongoing support.

Young men and women who were once disengaged are now actively contributing to household income, serving as peer mentors, and advocating for positive social change. Youth who successfully transition to livelihoods become role models and mentors for younger children.`
  },
  {
    icon: Brain,
    title: "Mental Health Psychosocial Support (MHPSS)",
    subtitle: "Healing Families, Reducing Stigma",
    content: `Beacons of Hope Network promotes mental health and psychosocial wellbeing by using sports and learning institutions as safe and trusted platforms to reach children and youth in Kisii County. Many learners experience stress, trauma, and emotional challenges that remain unaddressed due to stigma and limited access to care.

By integrating mental health awareness into sports, play, and everyday school life, we normalize wellbeing conversations and encourage early help-seeking in a culturally appropriate way. Through sports-based activities and school partnerships, children build resilience, emotional regulation, and positive coping skills while teachers are trained in mental health literacy and basic psychosocial support.

Where higher-level care is needed, Beacons of Hope Network strengthens referral pathways with local health providers, ensuring children and families access appropriate support while remaining connected to their communities.`
  },
  {
    icon: ShieldCheck,
    title: "Safe Village",
    subtitle: "Community-Led Child Protection",
    content: `Beacons of Hope Network strengthens community-led child protection and gender-based violence prevention systems, focusing on prevention, safe reporting, and referral pathways rather than parallel structures.

We build on existing community mechanisms, enhancing their capacity rather than replacing them with external systems that disappear when funding ends. Communities with stronger protection systems create safer environments for learning.

Our approach ensures that protection mechanisms are sustainable and owned by the community itself, creating lasting impact that continues beyond project funding.`
  }
];

const ResourcesPage = () => {
  return (
    <div className="page-wrapper">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-hero mb-6">
              Resources
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Explore our four integrated pillars and learn how we're creating lasting impact 
              in Birongo and Gianchere Sub-Counties through education, youth empowerment, 
              mental health support, and community protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="page-section">
        <div className="container-narrow mx-auto">
          <div className="space-y-16">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start`}
              >
                {/* Icon Card */}
                <div className="lg:w-1/3">
                  <div className="card-modern text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <resource.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-section-title">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {resource.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <div className="card-modern">
                    <h2 className="text-section-title">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-primary font-medium mb-6">
                      {resource.subtitle}
                    </p>
                    <div className="prose prose-lg max-w-none">
                      {resource.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-body mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-section-alt">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title">
              Join Us in Making a Difference
            </h2>
            <p className="text-section-subtitle mb-8">
              Your support helps us continue our work in education, youth empowerment, 
              and mental health across Kisii County.
            </p>
            <a
              href="/take-action"
              className="btn-primary rounded-md inline-block"
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

export default ResourcesPage;
