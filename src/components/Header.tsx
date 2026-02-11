import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

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
  { label: "Contacts", href: "/contact", isSection: false },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
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
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-between py-3 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Beacons of Hope Network" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-all duration-200"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-all duration-200"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                )}
                
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-lg border border-border py-2"
                    style={{ boxShadow: 'var(--shadow-medium)' }}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
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
            <Link to="/donate">
              <Button className="btn-primary rounded-xl text-sm">Donate</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
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
              <nav className="flex flex-col py-4 px-4 gap-1">
                {navItems.map((item) => (
                  item.isSection ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="py-2.5 px-3 text-muted-foreground hover:text-primary font-medium rounded-lg hover:bg-muted transition-colors"
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
                      className="py-2.5 px-3 text-muted-foreground hover:text-primary font-medium rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="mt-3 px-3">
                  <Link to="/donate" className="block">
                    <Button className="btn-primary rounded-xl w-full">Donate</Button>
                  </Link>
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
