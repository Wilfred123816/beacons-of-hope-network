import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StoriesPage = () => {
  const stories = [
    {
      title: "This is the story of Ryan.",
      quote: "Poverty pushed him out of school. Through the Beacons of Hope Education Kit and child sponsorship, he returned to class with books, uniforms, and psychosocial support. Today, Ryan attends school consistently and believes in his future again.",
      impact: "Your support didn't just help—it changed a life.",
      icon: BookOpen,
      color: "from-primary/20 to-primary/5"
    },
    {
      title: "Here is what hope looks like.",
      quote: "A family once trapped by stress and silence accessed mental health and psychosocial support through Beacons of Hope. Safe spaces, dialogue, and referrals reduced stigma and restored connection.",
      impact: "Your support strengthened wellbeing, protected families, and created a foundation for education, livelihoods, and resilience.",
      icon: Heart,
      color: "from-secondary/20 to-secondary/5"
    },
    {
      title: "It started with a simple intervention.",
      quote: "Agnes worked daily yet remained vulnerable. Through donor-supported livelihoods and financial literacy, she started a small business and stabilized her income. Her children stayed in school.",
      impact: "Your support restored dignity, reduced dependency, and helped a family move from survival to self-reliance.",
      icon: Users,
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Stories of Hope
            </h1>
            <p className="text-xl text-muted-foreground">
              Real lives transformed through community support, compassion, and the belief that every person deserves dignity and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${story.color} p-8 md:p-12`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-background/80 rounded-2xl shadow-lg">
                      <story.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {story.title}
                    </h2>
                    <blockquote className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-6 italic">
                      "{story.quote}"
                    </blockquote>
                    <p className="text-lg font-semibold text-primary">
                      {story.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Be Part of the Next Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every contribution creates ripples of change. Join us in writing more stories of transformation, resilience, and hope.
            </p>
            <a
              href="/take-action"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Take Action Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoriesPage;
