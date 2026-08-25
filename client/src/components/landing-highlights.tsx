import { motion } from "framer-motion";
import { portfolioUiIcons } from "./portfolio-icons";
import { AnimatedSection } from "./animated-section";
import { SectionHeader } from "./section-header";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LandingHighlights() {
  const { briefcase: BriefcaseIcon, shield: ShieldIcon, star: StarIcon } = portfolioUiIcons;
  const featureCards = [
    {
      title: "Cross-platform delivery",
      copy: "Production Flutter and React Native products for iOS and Android, with the same quality bar on both platforms.",
      Icon: BriefcaseIcon,
    },
    {
      title: "Quality and security",
      copy: "QA-minded implementation, Postman workflows, and security checks that keep releases dependable.",
      Icon: ShieldIcon,
    },
    {
      title: "Product execution",
      copy: "From concept to store submission: thoughtful UX, scalable architecture, and reliable launches.",
      Icon: StarIcon,
    },
  ];

  return (
    <section className="content-section content-section--compact">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            kicker="Focus"
            title="How I work"
            description="A consistent way of shipping: cross-platform craft, quality under pressure, and product follow-through."
          />
        </AnimatedSection>
        <motion.div
          className="highlights-grid-clean"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {featureCards.map(({ title, copy, Icon }) => (
            <motion.div key={title} variants={reveal} className="highlight-feature-card">
              <div className="highlight-feature-icon">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="highlight-feature-title">{title}</h3>
              <p className="highlight-feature-copy">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
