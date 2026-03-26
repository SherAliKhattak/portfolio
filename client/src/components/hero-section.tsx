import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import heroBackgroundCover from "@/assets/hero-background-cover.png";
import resumePdf from "@/assets/SherAliKhattakCV (1).pdf";
import { portfolioUiIcons } from "./portfolio-icons";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  const { personal } = portfolioData;
  const { chevronDown: ChevronDownIcon, external: ExternalIcon, folder: FolderIcon, phone: PhoneIcon } = portfolioUiIcons;
  const stats = [
    { value: "4+", label: "Years experience" },
    { value: "20+", label: "Projects shipped" },
    { value: "iOS + Android", label: "Production-ready app delivery" },
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient premium-hero min-h-screen pt-28 overflow-hidden">
      <div className="hero-background-media" aria-hidden="true">
        <img
          src={heroBackgroundCover}
          alt=""
          className="hero-background-image"
        />
      </div>
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="section-shell section-shell--hero pb-24 relative z-10">
        <motion.div
          className="hero-shell"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="hero-reference-bar">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow-chip">Available for opportunities</span>
              <span className="hero-micro-label">Software Engineer Portfolio</span>
            </div>
            <p className="hero-micro-summary">Cross-platform products, clean architecture, and AI-assisted delivery.</p>
          </motion.div>

          <div className="hero-grid hero-grid--reference">
            <motion.div variants={fadeInUp} className="hero-copy-column hero-copy-column--reference">
              <div className="space-y-6">
                <p className="hero-kicker">Hi, I&apos;m {personal.name}</p>
                <div className="reference-name-wrap" data-testid="hero-title">
                  <h1 className="reference-name-line reference-name-line--hero">
                    Software Engineer specializing in
                  </h1>
                  <h1 className="reference-name-line reference-name-line--hero reference-name-line--soft">
                    Cross-Platform Development and AI Integration
                  </h1>
                </div>
                <div className="hero-identity-block">
                  <h2 className="hero-profession-line" data-testid="hero-subtitle">
                    {personal.title}
                  </h2>
                </div>
              </div>

              <div className="hero-intro-panel" data-testid="hero-description">
                <p className="hero-intro-copy">{personal.summary}</p>

                <div className="hero-contact-inline">
                  <a href={`mailto:${personal.email}`} className="hero-contact-item">
                    {personal.email}
                  </a>
                  <a href={`tel:${personal.phones[0]}`} className="hero-contact-item">
                    <PhoneIcon className="w-4 h-4" />
                    {personal.phones[0]}
                  </a>
                </div>

                <div className="hero-intro-actions">
                  <Button
                    onClick={handleProjectsClick}
                    className="hero-primary-btn"
                    data-testid="button-projects"
                  >
                    <FolderIcon className="w-4 h-4 mr-2" />
                    View My Work
                  </Button>
                  <a
                    href={resumePdf}
                    download="SherAliKhattakCV.pdf"
                    className="hero-secondary-btn"
                    data-testid="button-download-resume"
                  >
                    <ExternalIcon className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                  <button
                    onClick={handleContactClick}
                    className="hero-text-link"
                    data-testid="button-contact"
                  >
                    Contact
                  </button>
                </div>

                <div className="hero-stats-row">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          onClick={handleScrollDown}
          className="scroll-indicator"
          data-testid="button-scroll-down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDownIcon size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
