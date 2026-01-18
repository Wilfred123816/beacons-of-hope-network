import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Stories of Hope", href: "#stories" },
  { label: "Take Action", href: "/take-action" },
  { label: "Resources", href: "#resources" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="font-heading text-primary font-bold text-xl">BoH</span>
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-4">Who We Are</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Beacons of Hope Network is a registered nonprofit organization dedicated to 
              empowering youth through education, health, and community development programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@beaconsofhope.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Connected</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="First Name" className="text-sm" />
                <Input placeholder="Last Name" className="text-sm" />
              </div>
              <Input placeholder="Email" type="email" className="text-sm" />
              <Button className="w-full btn-primary rounded-sm text-sm">
                Sign Up for Our Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Beacons of Hope Network | All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary hover:underline text-sm">Privacy Policy</a>
            <a href="#" className="text-primary hover:underline text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
