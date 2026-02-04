import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <footer className="bg-foreground text-white">
      <div className="container-narrow mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* About Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-orange flex items-center justify-center bg-white/10">
                <span className="font-heading text-orange font-bold text-xl">BoH</span>
              </div>
            </div>
            <h3 className="font-semibold text-white mb-4">Who We Are</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Beacons of Hope Network is a community-rooted, people-centered CBO working to restore dignity, opportunity, justice and resilience among marginalized populations in Kisii County, with a focus on Birongo and Gianchere Sub-Counties.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              Our integrated development model addresses four interconnected pillars:
            </p>
            <ul className="text-white/70 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li><span className="text-blue">Learning Hub</span> — Education empowerment</li>
              <li><span className="text-harlequin">Youth Lab</span> — Leadership development</li>
              <li><span className="text-orange">MHPSS</span> — Mental health & psychosocial support</li>
              <li><span className="text-blue">Safe Village</span> — Child protection & GBV prevention</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-white/70 hover:text-orange transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-orange transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/70 hover:text-harlequin transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange" />
                <a
                  href="mailto:beaconsofhopenetwork@gmail.com"
                  className="hover:text-orange transition-colors"
                >
                  beaconsofhopenetwork@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-harlequin" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+254729508496" className="hover:text-harlequin transition-colors">
                    0729508496
                  </a>
                  <a href="tel:+254716524476" className="hover:text-harlequin transition-colors">
                    0716524476
                  </a>
                  <a href="tel:+254113596287" className="hover:text-harlequin transition-colors">
                    0113596287
                  </a>
                </div>
              </div>
              <div className="text-sm">
                <div className="text-white/70">P.O. Box 995-40200, Kisii</div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Connected</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="First Name" className="text-sm bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Input placeholder="Last Name" className="text-sm bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <Input placeholder="Email" type="email" className="text-sm bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              <Button className="w-full btn-accent rounded-lg text-sm">
                Sign Up for Our Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Beacons of Hope Network | All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-orange hover:underline text-sm">Privacy Policy</a>
            <a href="#" className="text-harlequin hover:underline text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
