import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { portfolioUiIcons } from "./portfolio-icons";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LandingHighlights() {
  const { experience, projects } = portfolioData;
  const { briefcase: BriefcaseIcon, external: ExternalIcon, magic: MagicIcon, star: StarIcon } = portfolioUiIcons;
  const featuredExperience = experience[0];
  const featuredProject = projects[projects.length - 1];

  return (
    <section className="relative -mt-16 pb-12 sm:pb-16">
      <div className="section-shell">
        <motion.div
          className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={reveal} className="premium-panel hero-highlight-panel p-7 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="eyebrow-chip">Signature Expertise</span>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MagicIcon className="w-4 h-4 text-primary" />
                Cross-platform apps with production polish
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="highlight-metric-card">
                <p className="metric-value">10+</p>
                <p className="metric-label">Apps shipped across healthcare, fitness, logistics, and commerce.</p>
              </div>
              <div className="highlight-metric-card">
                <p className="metric-value">4+</p>
                <p className="metric-label">Years building consumer-grade mobile experiences at speed.</p>
              </div>
              <div className="highlight-metric-card">
                <p className="metric-value">iOS + Android</p>
                <p className="metric-label">App Store and Play Store releases with scalable architecture.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={reveal} className="premium-panel hero-highlight-panel hero-highlight-panel--feature p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="section-kicker mb-3">Current role</p>
                <h3 className="text-2xl font-semibold text-foreground leading-tight">
                  {featuredExperience.position}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {featuredExperience.location
                    ? `${featuredExperience.company} · ${featuredExperience.location}`
                    : featuredExperience.company}
                </p>
              </div>
              <div className="icon-chip">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
            </div>

            <p className="hero-highlight-copy text-sm text-muted-foreground leading-7 mb-6">
              {featuredExperience.responsibilities[0]}
            </p>

            <div className="hero-highlight-actions flex flex-wrap items-center gap-3">
              <span className="tech-pill">Leadership</span>
              <span className="tech-pill">Cross-platform delivery</span>
              <a
                href="#projects"
                className="hero-highlight-link inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Featured app: {featuredProject.title}
                <ExternalIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="hero-highlight-note mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <StarIcon className="w-4 h-4 text-primary" />
              Product-minded execution from idea to launch.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
