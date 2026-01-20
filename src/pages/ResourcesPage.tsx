import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Heart } from "lucide-react";

const resources = [
  {
    icon: GraduationCap,
    title: "Education Empowerment",
    subtitle: "Breaking Barriers to Learning in Kisii County",
    content: `In Birongo and Giachere Sub-Counties, many children from low-income households face persistent barriers to education, including poverty, child labor, and low parental awareness. Beacons of Hope Network is working with families, schools, and local leaders to ensure vulnerable children, especially those at risk of dropping out—remain in school and thrive.

Through targeted education support, mentorship, and family sensitization forums, learners receive scholastic materials, psychosocial encouragement, and a protective community environment. Parents are engaged to understand the value of education and their role in sustaining their children's learning journeys. Teachers and community volunteers collaborate to monitor attendance and wellbeing.

As a result, children who were once absent from school are now attending regularly, showing improved confidence and academic engagement. Education is becoming a shared responsibility within the community, breaking cycles of exclusion and inter-generational poverty.`
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    subtitle: "Turning Risk into Leadership in Kisii County",
    content: `Youth in Birongo and Giachere Sub-Counties face high unemployment, limited skills opportunities, and growing social pressures. Beacons of Hope Network's youth empowerment initiative responds by transforming vulnerability into leadership and economic potential.

Through mentorship, life-skills training, entrepreneurship exposure, and community service, young people gain confidence, purpose, and practical skills. Youth groups are supported to design small income-generating projects and participate in peace building and community development activities.

Young men and women who were once disengaged are now actively contributing to household income, serving as peer mentors, and advocating for positive social change. The program builds a pipeline of responsible, skilled, and socially conscious youth leaders within Kisii County.`
  },
  {
    icon: Heart,
    title: "Mental Health & Wellbeing",
    subtitle: "Healing Families, Reducing Stigma in Birongo",
    content: `Mental health challenges in Birongo and Giachere Sub-Counties often remain unaddressed due to stigma, lack of awareness, and limited access to support. Beacons of Hope Network integrates mental health and psychosocial wellbeing into its community programming to ensure holistic development.

Through community dialogues, family sensitization sessions, and peer support forums, individuals and families learn to recognize mental health challenges and seek help early. Safe spaces are created for sharing experiences related to stress, trauma, and emotional distress, while referral pathways are strengthened with local health providers.

As stigma reduces, families become more supportive, and individuals regain emotional stability and social inclusion. Mental wellbeing becomes a foundation for success in education, youth engagement, and livelihoods.`
  }
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our key focus areas and learn how we're creating lasting impact 
              in Birongo and Giachere Sub-Counties through education, youth empowerment, 
              and mental health initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-16">
        <div className="container-narrow mx-auto px-4 md:px-8">
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
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <resource.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {resource.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-primary font-medium mb-6">
                      {resource.subtitle}
                    </p>
                    <div className="prose prose-lg max-w-none">
                      {resource.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground mb-4 last:mb-0 leading-relaxed">
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
      <section className="py-16 bg-primary/5">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your support helps us continue our work in education, youth empowerment, 
              and mental health across Kisii County.
            </p>
            <a
              href="/take-action"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
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
