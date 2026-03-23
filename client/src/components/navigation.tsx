import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollNav = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={`section-shell section-shell--nav ${scrolled ? "section-shell--nav-scrolled" : ""}`}>
          <div
            className={`premium-nav nav-frame ${
              scrolled ? "nav-scrolled" : ""
            }`}
          >
            <div className="hidden md:flex nav-desktop-layout">
              <div className="nav-links-row">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link ${
                      activeSection === link.href.substring(1) ? "nav-link--active" : ""
                    }`}
                    data-testid={`nav-${link.label.toLowerCase()}`}
                  >
                    <span className="nav-link-label">{link.label}</span>
                  </button>
                ))}
              </div>

            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="nav-mobile-toggle"
                data-testid="mobile-menu-button"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              className="nav-mobile-overlay fixed inset-0 z-[55] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 premium-mobile-menu z-[60] md:hidden"
              data-testid="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-5">
                <div className="nav-mobile-header">
                  <div>
                    <p className="nav-mobile-kicker">Navigation</p>
                    <p className="nav-mobile-title">Explore portfolio</p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="nav-mobile-close"
                    data-testid="close-menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="nav-mobile-links-list">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`nav-mobile-link ${
                        activeSection === link.href.substring(1) ? "nav-mobile-link--active" : ""
                      }`}
                      data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <span className="nav-mobile-link-index">{String(index + 1).padStart(2, "0")}</span>
                      <span>{link.label}</span>
                    </motion.button>
                  ))}
                </nav>

                <button
                  onClick={() => handleNavClick("#contact")}
                  className="nav-cta mt-6 w-full justify-center"
                  data-testid="mobile-nav-contact-cta"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
