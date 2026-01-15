import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { 
    label: "Our Impact", 
    href: "#impact",
    dropdown: ["Education Programs", "Health Initiatives", "Community Development"]
  },
  { 
    label: "Take Action", 
    href: "#take-action",
    dropdown: ["Donate", "Volunteer", "Partner With Us"]
  },
  { label: "About Us", href: "#mission" },
  { label: "Stories of Hope", href: "#leadership" },
  { label: "Contact", href: "#newsletter" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="font-heading text-primary font-bold text-lg">BoH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-primary text-lg leading-tight">
                Beacons of Hope
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Network</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card rounded-md shadow-lg border border-border py-2"
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="btn-primary rounded-sm">Donate</Button>
            <Button variant="outline" className="btn-outline-maroon rounded-sm">Contact</Button>
            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border"
            >
              <nav className="flex flex-col py-4 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="py-3 text-foreground font-medium border-b border-border last:border-0"
                    onClick={(e) => {
                      scrollToSection(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-3 mt-4">
                  <Button className="btn-primary rounded-sm flex-1">Donate</Button>
                  <Button variant="outline" className="btn-outline-maroon rounded-sm flex-1">Contact</Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
