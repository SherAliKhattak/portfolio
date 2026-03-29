import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons } from "./portfolio-icons";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function AboutSection() {
  const { personal, experience, education } = portfolioData;
  const {
    briefcase: BriefcaseIcon,
    graduation: GraduationIcon,
    shield: ShieldIcon,
    folder: FolderIcon,
  } = portfolioUiIcons;
  const currentRole = experience[0];
  const latestEducation = education[0];
  const capabilityCards = [
    {
      title: "Mobile Apps",
      copy: "Professional Flutter and React Native applications built for Android and iOS production environments.",
      Icon: BriefcaseIcon,
    },
    {
      title: "Architecture",
      copy: "Clean Architecture, scalable code structure, and practical engineering decisions for long-term delivery.",
      Icon: FolderIcon,
    },
    {
      title: "Quality and Security",
      copy: "QA-minded implementation, Postman workflows, and security-focused testing with dependable releases.",
      Icon: ShieldIcon,
    },
  ];

  return (
    <section id="about" data-section-number="01" className="content-section bg-background">
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--left mb-16">
            <p className="section-kicker mb-3">Profile</p>
            <h2 className="section-heading-title mb-4" data-testid="section-title">
              About Me
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              A concise overview of how I approach mobile engineering, delivery, and product execution.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="about-reference-panel"
          variants={cardVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="about-reference-copy-block"
            variants={cardVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="about-main-title" data-testid="about-title">
              What I Build
            </h3>
            <span className="about-reference-title-accent" aria-hidden="true" />
            <div className="about-main-copy">
              <p className="about-copy" data-testid="about-paragraph-1">
                {personal.summary}
              </p>
              <p className="about-copy about-copy--secondary">
                I focus on building production-ready mobile products with clean UX, practical architecture, and dependable shipping quality across the full development lifecycle.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-reference-services"
            variants={cardVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-reference-services-header">
              <h4 className="about-reference-services-title">What I&apos;m Doing</h4>
            </div>
            <div className="about-reference-service-grid">
              {capabilityCards.map(({ title, copy, Icon }) => (
                <div key={title} className="about-detail-card about-detail-card--service">
                  <div className="about-card-icon about-card-icon--reference">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="about-reference-service-copy">
                    <h5 className="about-detail-title">{title}</h5>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-reference-meta-grid"
            variants={cardVariants}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-reference-meta-card">
              <div className="about-card-icon about-card-icon--reference">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="about-reference-meta-label">Current Role</p>
                <p className="about-reference-meta-title">{currentRole.position}</p>
                <p className="about-reference-meta-copy">{currentRole.company} · {currentRole.period}</p>
              </div>
            </div>
            <div className="about-reference-meta-card">
              <div className="about-card-icon about-card-icon--reference">
                <GraduationIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="about-reference-meta-label">Education</p>
                <p className="about-reference-meta-title">{latestEducation.degree}</p>
                <p className="about-reference-meta-copy">
                  {latestEducation.field} · {latestEducation.institution}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
