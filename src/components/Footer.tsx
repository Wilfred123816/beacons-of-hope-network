import * as React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Stories of Hope", href: "/stories" },
  { label: "Take Action", href: "/take-action" },
  { label: "Resources", href: "/resources" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1D3GTudquG/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/beaconsofhopenetwork?igsh=MWtvczlwNDE2cDZlaw==", label: "Instagram" },
  { icon: Video, href: "https://www.tiktok.com/@beaconsof.hope.ne?_r=1&_t=ZS-93Fq6rSKQi5", label: "TikTok" },
  { icon: Linkedin, href: "http://www.linkedin.com/in/beaconsof-hopenetwork-a628913a7", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@beaconsofhopenetwork?si=mzyXKdF-WmZ3ln7r", label: "YouTube" },
];

const Footer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [footerForm, setFooterForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFooterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!footerForm.email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        first_name: footerForm.firstName.trim() || null,
        last_name: footerForm.lastName.trim() || null,
        email: footerForm.email.trim(),
      });

      if (error) throw error;

      toast({
        title: "Subscribed!",
        description: "Thank you for staying connected with us.",
      });

      setFooterForm({ firstName: "", lastName: "", email: "" });
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container-narrow mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Who We Are */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-lg">Who We Are</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Beacons of Hope Network is a community-rooted CBO working to restore dignity, opportunity, and resilience among marginalized populations in Kisii County.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <div className="flex gap-3 mb-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2.5 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:beaconsofhopenetwork@gmail.com"
                  className="hover:text-white transition-colors text-xs break-all"
                >
                  beaconsofhopenetwork@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="tel:+254729508496" className="hover:text-white transition-colors">0729508496</a>
                  <a href="tel:+254716524476" className="hover:text-white transition-colors">0716524476</a>
                </div>
              </div>
              <div className="text-xs text-white/40">P.O. Box 995-40200, Kisii</div>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-lg">Stay Connected</h3>
            <form onSubmit={handleFooterSubscribe} className="space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="First Name"
                  className="text-xs h-9 bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                  value={footerForm.firstName}
                  onChange={(e) => setFooterForm((prev) => ({ ...prev, firstName: e.target.value }))}
                />
                <Input
                  placeholder="Last Name"
                  className="text-xs h-9 bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                  value={footerForm.lastName}
                  onChange={(e) => setFooterForm((prev) => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
              <Input
                placeholder="Email"
                type="email"
                required
                className="text-xs h-9 bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-lg"
                value={footerForm.email}
                onChange={(e) => setFooterForm((prev) => ({ ...prev, email: e.target.value }))}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary hover:bg-white/90 rounded-lg text-xs h-9 font-medium transition-all duration-300"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Beacons of Hope Network · All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
