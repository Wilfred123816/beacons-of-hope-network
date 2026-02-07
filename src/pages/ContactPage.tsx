import * as React from "react";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Linkedin, Video, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const contactLinks = {
  email: "beaconsofhopenetwork@gmail.com",
  address: "P.O. Box 995-40200, Kisii",
  phones: ["0729508496", "0716524476", "0113596287"],
  social: [
    { label: "YouTube", href: "https://youtube.com/@beaconsofhopenetwork?si=mzyXKdF-WmZ3ln7r", Icon: Youtube },
    { label: "Facebook", href: "https://www.facebook.com/share/1D3GTudquG/", Icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/beaconsofhopenetwork?igsh=MWtvczlwNDE2cDZlaw==", Icon: Instagram },
    { label: "TikTok", href: "https://www.tiktok.com/@beaconsof.hope.ne?_r=1&_t=ZS-93Fq6rSKQi5", Icon: Video },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/beaconsof-hopenetwork-a628913a7", Icon: Linkedin },
  ],
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      toast({
        title: "Validation error",
        description: parsed.error.errors[0]?.message || "Please check your inputs.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject || null,
        message: parsed.data.message,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Failed to send",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="container-narrow mx-auto text-center px-4 md:px-8">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h1 className="text-hero mb-4">Contact Us</h1>
              <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 max-w-2xl mx-auto">
                We'd love to hear from you. Reach out and let's create impact together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="page-section">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  color: "bg-primary/10 text-primary",
                  content: (
                    <a
                      className="text-body hover:text-primary transition-colors break-all"
                      href={`mailto:${contactLinks.email}`}
                    >
                      {contactLinks.email}
                    </a>
                  ),
                },
                {
                  icon: Phone,
                  title: "Phone",
                  color: "bg-secondary/10 text-secondary",
                  content: (
                    <div className="space-y-1">
                      {contactLinks.phones.map((p) => (
                        <a
                          key={p}
                          className="block text-body hover:text-secondary transition-colors"
                          href={`tel:+254${p.replace(/^0/, "")}`}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  ),
                },
                {
                  icon: MapPin,
                  title: "Postal Address",
                  color: "bg-accent/10 text-accent",
                  content: <p className="text-body">{contactLinks.address}</p>,
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-modern text-center flex flex-col items-center"
                >
                  <div className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading font-semibold text-foreground text-lg mb-2">{card.title}</h2>
                  {card.content}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="page-section-alt">
          <div className="container-narrow mx-auto text-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-section-title mb-2">Find Us Online</h2>
              <p className="text-section-subtitle mb-8">
                Follow "Beacons of Hope Network" on social media for updates and stories of impact.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {contactLinks.social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="page-section-cream">
          <div className="container-narrow mx-auto">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-section-title">Send Us a Message</h2>
                <p className="text-section-subtitle">
                  Fill in the form below and we'll respond as soon as possible.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="card-modern"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name">Your Name *</Label>
                      <Input
                        id="contact-name"
                        required
                        maxLength={100}
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={255}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      maxLength={200}
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      maxLength={2000}
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="btn-primary rounded-lg gap-2 w-full md:w-auto">
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
