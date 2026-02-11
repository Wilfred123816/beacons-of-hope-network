import { motion } from "framer-motion";
import { GraduationCap, BarChart3 } from "lucide-react";

const teamMembers = [
  {
    name: "Evans Ongau Mosima",
    role: "Founder & Executive Director",
    icon: GraduationCap,
    bio: "Evans Ongau Mosima is a visionary and results-driven development leader. Trained as an educator with a Bachelor's and Master's degree in Education, Evans has leveraged his academic foundation to build a holistic leadership approach that integrates education, youth empowerment, mental health, and sustainable livelihoods to drive lasting community transformation.",
    experience: "He has worked with organizations such as Children of God's Relief Institute and Kidscare Kenya, holding senior roles including School Principal and Program Officer, where he led institutional growth, designed and implemented multi-sectorial programs, and strengthened community and stakeholder engagement.",
  },
  {
    name: "Ivan Osano",
    role: "MEAL Specialist",
    icon: BarChart3,
    bio: "Ivan is a development practitioner with a background in public health. He has extensive experience in Health (maternal and newborn care), education, nutrition and WASH.",
    experience: "Previously worked with Tushinde Children's Trust, Good Neighbors International and Medair. He is also a Clinton Global Initiative Fellow. Has BA in Public Health from St. Elizabeth University of Health and Social Sciences, Post Graduate Diploma from the University of Nairobi and currently undertaking MSc in Monitoring and Evaluation from the Jomo Kenyatta University of Agriculture and Technology.",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="heading-display text-[32px] md:text-[40px] text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals committed to driving sustainable community transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-soft)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <member.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="heading-display text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm">{member.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.experience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-card rounded-xl p-8 border border-border"
          style={{ boxShadow: 'var(--shadow-soft)' }}
        >
          <h3 className="heading-display text-xl text-foreground mb-3">
            Committed to Local Leadership
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Beacons of Hope Network is locally led.</strong> Since our founding, our 
            participatory development approach has been rooted in the conviction that sustainable 
            impact and solutions to poverty are only possible when the communities most affected 
            are the real change-makers. We engage community advisory boards, hold feedback sessions, and strengthen 
            collaborations with like-minded organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
