import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const getNavOffset = () => {
    const navElement = document.querySelector("nav");
    const navHeight = navElement?.getBoundingClientRect().height ?? 0;
    return Math.ceil(navHeight + 20);
  };

  useEffect(() => {
    const handleScrollNav = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  useEffect(() => {
    if (location === "/projects") {
      setActiveSection("projects");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + getNavOffset();

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
      const offsetTop =
        targetSection.getBoundingClientRect().top + window.scrollY - getNavOffset();
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    } else {
      const destination =
        targetId === "home" ? "/" : targetId === "projects" ? "/projects" : `/#${targetId}`;
      window.location.assign(destination);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="reference-top-nav"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={`reference-nav-shell ${scrolled ? "reference-nav-shell--scrolled" : ""}`}>
          <div className="hidden md:flex nav-desktop-layout">
              <div className="nav-links-row">
                {navLinks.map((link) => (
                  <button
                    type="button"
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

          <div className="reference-nav-mobile-inner flex md:hidden w-full min-h-[2.85rem] items-center justify-end">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-mobile-toggle"
              data-testid="mobile-menu-button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="nav-mobile-close"
                    data-testid="close-menu"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="nav-mobile-links-list">
                  {navLinks.map((link, index) => (
                    <motion.button
                      type="button"
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
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
