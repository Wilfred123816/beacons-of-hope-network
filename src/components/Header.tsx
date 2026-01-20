import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", isSection: false },
  { 
    label: "About Us", 
    href: "/about",
    isSection: false,
    dropdown: ["Vision & Mission", "Core Values", "Theory of Change"]
  },
  { 
    label: "Programs", 
    href: "/programs",
    isSection: false,
    dropdown: ["Learning Hubs", "Mental Health", "Community Empowerment"]
  },
  { 
    label: "Resources", 
    href: "/resources",
    isSection: false,
    dropdown: ["Education Empowerment", "Youth Empowerment", "Mental Health & Wellbeing"]
  },
  { 
    label: "Stories of Hope", 
    href: "/stories",
    isSection: false
  },
  { 
    label: "Take Action", 
    href: "/take-action",
    isSection: false,
    dropdown: ["Donate", "Volunteer", "Partner With Us"]
  },
  { label: "Our Impact", href: "#impact", isSection: true },
  { label: "Contact", href: "#newsletter", isSection: true },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault();
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    // For non-section links (like /take-action), let the default Link behavior handle it
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="font-heading text-primary font-bold text-lg">BoH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-primary text-lg leading-tight">
                Beacons of Hope
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Network</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.isSection ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                )}
                
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
            <Link to="/take-action">
              <Button className="btn-primary rounded-sm">Donate</Button>
            </Link>
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
                  item.isSection ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="py-3 text-foreground font-medium border-b border-border last:border-0"
                      onClick={(e) => {
                        handleNavClick(e, item);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="py-3 text-foreground font-medium border-b border-border last:border-0"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="flex gap-3 mt-4">
                  <Link to="/take-action" className="flex-1">
                    <Button className="btn-primary rounded-sm w-full">Donate</Button>
                  </Link>
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
