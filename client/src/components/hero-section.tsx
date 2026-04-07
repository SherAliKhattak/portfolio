import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
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
  const { chevronDown: ChevronDownIcon, external: ExternalIcon } = portfolioUiIcons;
  const stats = [
    { value: "4+", label: "Years experience" },
    { value: "20+", label: "Projects shipped" },
    { value: "iOS + Android", label: "Production-ready app delivery" },
  ];

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="content-section hero-reference-section">
      <div className="section-shell section-shell--hero">
        <motion.div
          className="hero-shell hero-shell--reference-dark"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="hero-reference-bar hero-reference-bar--dark">
            <div className="hero-reference-bar-row flex flex-wrap items-center">
              <span className="eyebrow-chip eyebrow-chip--dark">Available for opportunities</span>
              <span className="hero-micro-label">Senior App Developer Portfolio</span>
            </div>
            <p className="hero-micro-summary">
              Cross-platform apps, clean architecture, and reliable product execution.
            </p>
          </motion.div>

          <div className="hero-reference-grid-dark">
            <motion.div variants={fadeInUp} className="hero-copy-column hero-copy-column--reference-dark">
              <p className="hero-kicker hero-kicker--dark">Hello There!</p>
              <div className="reference-name-wrap" data-testid="hero-title">
                <h1 className="reference-name-line reference-name-line--dark">
                  Flutter-focused engineer crafting polished mobile and product experiences.
                </h1>
              </div>
              <h2 className="hero-profession-line hero-profession-line--dark" data-testid="hero-subtitle">
                {personal.title}
              </h2>
              <p className="hero-intro-copy hero-intro-copy--dark" data-testid="hero-description">
                {personal.summary}
              </p>

              <div className="hero-intro-actions hero-intro-actions--dark">
                <Button
                  type="button"
                  onClick={handleProjectsClick}
                  className="hero-primary-btn hero-primary-btn--dark justify-center text-center"
                  data-testid="button-projects"
                >
                  View Portfolio
                </Button>
                <a
                  href="/assets/Sher_Ali_Khattak.pdf"
                  download="Sher_Ali_Khattak.pdf"
                  className="hero-secondary-btn hero-secondary-btn--dark"
                  data-testid="button-download-resume"
                >
                  <ExternalIcon className="w-4 h-4 mr-2" />
                  Resume
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="hero-text-link hero-text-link--dark"
                  data-testid="button-contact"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-reference-aside">
              <div className="hero-stats-row hero-stats-row--dark">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card stat-card--dark">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <motion.button
                type="button"
                onClick={handleScrollDown}
                className="scroll-indicator scroll-indicator--dark"
                data-testid="button-scroll-down"
                aria-label="Scroll to about section"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDownIcon size={20} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
