import { motion } from "framer-motion";
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
  const { briefcase: BriefcaseIcon, shield: ShieldIcon, star: StarIcon } = portfolioUiIcons;
  const featureCards = [
    {
      title: "Cross-Platform Excellence",
      copy: "Building polished Flutter and React Native products for production environments across iOS and Android.",
      Icon: BriefcaseIcon,
    },
    {
      title: "Quality and Security",
      copy: "Hands-on QA testing, Postman workflows, and Burp Suite security checks for dependable product releases.",
      Icon: ShieldIcon,
    },
    {
      title: "Product Execution",
      copy: "From concept to store submission, I focus on thoughtful UX, scalable architecture, and reliable launches.",
      Icon: StarIcon,
    },
  ];

  return (
    <section className="content-section content-section--compact bg-background">
      <div className="section-shell">
        <motion.div
          className="highlights-grid-clean"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {featureCards.map(({ title, copy, Icon }) => (
            <motion.div key={title} variants={reveal} className="highlight-feature-card">
              <div className="highlight-feature-icon">
                <Icon className="w-5 h-5" />
              </div>
              <p className="section-kicker">Specialization</p>
              <h3 className="highlight-feature-title">{title}</h3>
              <p className="highlight-feature-copy">{copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
