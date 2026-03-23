import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import heroBackgroundCover from "@/assets/hero-background-cover.png";
import resumePdf from "@/assets/sher-ali-khattak-resume.pdf";
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
  const { personal, projects } = portfolioData;
  const { chevronDown: ChevronDownIcon, email: EmailIcon, external: ExternalIcon, folder: FolderIcon, github: GithubIcon, linkedin: LinkedinIcon, phone: PhoneIcon } = portfolioUiIcons;
  const headlineLines = ["Mobile App", "Developer"];
  const intro =
    "I build polished cross-platform mobile products with clean architecture, thoughtful UX, and production-ready execution for iOS and Android.";
  const microSummary =
    "Passionate mobile developer and problem solver, dedicated to crafting polished digital products with modern engineering and thoughtful UX.";
  const stats = [
    { value: "7+", label: "Years experience" },
    { value: `${projects.length}+`, label: "Projects shipped" },
    { value: "Remote", label: "Available worldwide" },
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
            <span className="hero-micro-label">Code by {personal.name.split(" ")[0]}</span>
            <p className="hero-micro-summary">{microSummary}</p>
          </motion.div>

          <div className="hero-grid hero-grid--reference">
            <motion.div variants={fadeInUp} className="hero-copy-column hero-copy-column--reference">
              <div className="space-y-6">
                <div className="reference-name-wrap" data-testid="hero-title">
                  {headlineLines.map((line, index) => (
                    <h1
                      key={line}
                      className={`reference-name-line reference-name-line--hero ${index === 1 ? "reference-name-line--soft" : ""}`}
                    >
                      {line}
                    </h1>
                  ))}
                </div>
                <div className="hero-identity-block">
                  <p className="hero-identity-name">{personal.name}</p>
                  <h2 className="hero-profession-line" data-testid="hero-subtitle">
                    {personal.title}
                  </h2>
                </div>
              </div>

              <div className="hero-intro-panel" data-testid="hero-description">
                <p className="hero-intro-copy">{intro}</p>

                <div className="hero-intro-actions">
                  <Button
                    onClick={handleContactClick}
                    className="hero-primary-btn"
                    data-testid="button-contact"
                  >
                    <EmailIcon className="w-5 h-5 mr-2" />
                    Start a Project
                  </Button>
                  <Button
                    onClick={handleProjectsClick}
                    variant="outline"
                    className="hero-secondary-btn"
                    data-testid="button-projects"
                  >
                    <FolderIcon className="w-5 h-5 mr-2" />
                    View Projects
                  </Button>
                  <a
                    href={resumePdf}
                    download="SherAli-Khattak-Resume.pdf"
                    className="hero-secondary-btn"
                    data-testid="button-download-resume"
                  >
                    <ExternalIcon className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </div>

                <div className="hero-stats-row">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-link-row">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                    data-testid="link-github"
                  >
                    <GithubIcon className="w-4 h-4 flat-social-icon flat-social-icon--github" />
                    GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link"
                    data-testid="link-linkedin"
                  >
                    <LinkedinIcon className="w-4 h-4 flat-social-icon flat-social-icon--linkedin" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="hero-link"
                    data-testid="link-email"
                  >
                    <EmailIcon className="w-4 h-4 flat-social-icon flat-social-icon--email" />
                    Email
                  </a>
                  <a
                    href={`tel:${personal.phones[0]}`}
                    className="hero-link"
                    data-testid="link-phone"
                  >
                    <PhoneIcon className="w-4 h-4 flat-social-icon flat-social-icon--phone" />
                    Call
                  </a>
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
