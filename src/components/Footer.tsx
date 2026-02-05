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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Who We Are */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center bg-white/10">
                <span className="font-heading text-orange font-bold text-sm">BoH</span>
              </div>
            </div>
            <h3 className="font-semibold text-white mb-3 text-lg">Who We Are</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              Beacons of Hope Network is a community-rooted CBO working to restore dignity, opportunity, and resilience among marginalized populations in Kisii County.
            </p>
            <ul className="text-white/70 text-xs leading-relaxed space-y-1">
              <li><span className="text-blue">•</span> Learning Hub — Education</li>
              <li><span className="text-harlequin">•</span> Youth Lab — Leadership</li>
              <li><span className="text-orange">•</span> MHPSS — Mental health</li>
              <li><span className="text-blue">•</span> Safe Village — Protection</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
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

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/70 hover:text-harlequin transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:beaconsofhopenetwork@gmail.com"
                  className="hover:text-orange transition-colors text-xs break-all"
                >
                  beaconsofhopenetwork@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-harlequin mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="tel:+254729508496" className="hover:text-harlequin transition-colors">0729508496</a>
                  <a href="tel:+254716524476" className="hover:text-harlequin transition-colors">0716524476</a>
                </div>
              </div>
              <div className="text-xs text-white/60">P.O. Box 995-40200, Kisii</div>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Stay Connected</h3>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="First Name" className="text-xs h-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Input placeholder="Last Name" className="text-xs h-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <Input placeholder="Email" type="email" className="text-xs h-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              <Button className="w-full btn-accent rounded-lg text-xs h-9">
                Subscribe
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
