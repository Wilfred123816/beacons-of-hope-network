import * as React from "react";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Linkedin, Video, Send } from "lucide-react";
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

      <main className="pt-28">
        <header className="page-hero pb-12">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <h1 className="text-hero">Contact Us</h1>
            <p className="mt-4 text-primary-foreground/90 max-w-2xl">
              Have questions? Reach us using the details below and we'll get back to you.
            </p>
          </div>
        </header>

        <section className="page-section">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="card-modern">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <h2 className="font-semibold text-foreground">Email</h2>
                    <a
                      className="text-body hover:text-primary transition-colors break-all"
                      href={`mailto:${contactLinks.email}`}
                    >
                      {contactLinks.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-modern">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <h2 className="font-semibold text-foreground">Phone</h2>
                    <div className="mt-1 space-y-1">
                      {contactLinks.phones.map((p) => (
                        <a
                          key={p}
                          className="block text-body hover:text-primary transition-colors"
                          href={`tel:+254${p.replace(/^0/, "")}`}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-modern">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h2 className="font-semibold text-foreground">Postal Address</h2>
                    <p className="text-body mt-1">{contactLinks.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-10 card-modern">
              <h2 className="font-semibold text-foreground">Social Media</h2>
              <p className="text-body text-sm mt-1">Find us as "beacons of hopenetwork".</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {contactLinks.social.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section className="mt-10 card-modern">
              <h2 className="font-semibold text-foreground text-xl mb-2">Send Us a Message</h2>
              <p className="text-body text-sm mb-6">
                Fill in the form below and we'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
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
                  <div>
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

                <div>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    maxLength={200}
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                  />
                </div>

                <div>
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

                <Button type="submit" disabled={isSubmitting} className="btn-primary rounded-lg gap-2">
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default ContactPage;
