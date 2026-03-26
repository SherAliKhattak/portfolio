import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import sherAliPortrait from "@/assets/sher-ali-portrait.png";
import aboutBackgroundCover from "@/assets/about-background-cover.png";
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
    external: ExternalIcon,
    github: GithubIcon,
    graduation: GraduationIcon,
    linkedin: LinkedinIcon,
    phone: PhoneIcon,
  } = portfolioUiIcons;
  const currentRole = experience[0];
  const latestEducation = education[0];
  const conciseSummary =
    "Software Engineer with 4+ years of experience focused on polished Flutter and React Native products, AI-assisted development, security-minded engineering, and dependable releases across iOS and Android.";
  const aboutHighlights = [
    "4+ years of software engineering experience",
    "20+ shipped projects across multiple industries",
    "AI, QA, and security-minded product delivery",
  ];
  const aboutSnapshot = [
    {
      label: "Current focus",
      value: "AI-assisted development and security-minded product delivery",
    },
    {
      label: "Availability",
      value: "Open to collaborations and product-focused roles",
    },
  ];

  return (
    <section id="about" data-section-number="01" className="content-section bg-background">
      <div className="about-background-cover" aria-hidden="true">
        <img
          src={aboutBackgroundCover}
          alt=""
          className="about-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--left mb-16">
            <p className="section-kicker mb-3">Profile</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              A concise overview of how I approach mobile engineering, delivery, and product execution.
            </p>
          </div>
        </AnimatedSection>

        <div className="about-layout-grid">
          <motion.div
            className="about-layout-main"
            variants={cardVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="about-main-panel">
              <CardContent className="p-7 sm:p-8">
                <p className="section-kicker">Craft + engineering</p>
                <h3 className="about-main-title mt-4" data-testid="about-title">
                  My Journey in Software Engineering
                </h3>
                <div className="about-main-copy mt-6">
                  <p
                    className="about-copy"
                    data-testid="about-paragraph-1"
                  >
                    {conciseSummary}
                  </p>
                  <p
                    className="about-copy"
                    data-testid="about-paragraph-2"
                  >
                    {personal.aboutDetails[1]}
                  </p>
                </div>
                <ul className="about-insight-grid pt-6">
                  {aboutHighlights.map((item) => (
                    <li key={item} className="about-insight-item">
                      <span className="about-insight-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="about-link-row pt-6">
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="about-social-link">
                    <GithubIcon className="w-4 h-4 flat-social-icon flat-social-icon--github" />
                    GitHub
                  </a>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="about-social-link">
                    <LinkedinIcon className="w-4 h-4 flat-social-icon flat-social-icon--linkedin" />
                    LinkedIn
                  </a>
                  <a href={`tel:${personal.phones[0]}`} className="about-social-link">
                    <PhoneIcon className="w-4 h-4 flat-social-icon flat-social-icon--phone" />
                    Call
                  </a>
                  <a href="#contact" className="about-cta-link" data-testid="about-contact-cta">
                    Let&apos;s work together
                    <ExternalIcon className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="about-layout-summary"
            variants={cardVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="about-summary-card">
              <CardContent className="p-6 sm:p-7 about-summary-content">
                <div className="about-profile-image-wrap">
                  <img
                    src={sherAliPortrait}
                    alt={personal.name}
                    className="about-profile-image"
                  />
                </div>
                <div className="about-summary-header">
                  <p className="section-kicker">At a glance</p>
                  <h3 className="about-profile-name">{personal.name}</h3>
                  <p className="about-summary-role">{personal.title}</p>
                </div>

                <div className="about-summary-stack">
                  <span className="about-chip">Flutter</span>
                  <span className="about-chip">React Native</span>
                  <span className="about-chip">Clean Architecture</span>
                </div>

                <div className="about-summary-list">
                  {aboutSnapshot.map((item) => (
                    <div key={item.label} className="about-summary-row">
                      <span className="about-contact-label">{item.label}</span>
                      <span className="about-contact-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="about-layout-details"
            variants={cardVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-detail-grid grid gap-6 md:grid-cols-2">
              <Card className="about-detail-card">
                <CardContent className="p-6">
                  <div className="about-card-icon">
                    <BriefcaseIcon className="w-5 h-5" />
                  </div>
                  <p className="section-kicker mt-5">Experience</p>
                  <h4 className="about-detail-title mt-3" data-testid="role-title">Current Role</h4>
                  <p className="text-foreground font-medium mt-2" data-testid="role-text">
                    {currentRole.position}
                  </p>
                  <p className="text-muted-foreground mt-1">{currentRole.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">{currentRole.period}</p>
                </CardContent>
              </Card>

              <Card className="about-detail-card">
                <CardContent className="p-6">
                  <div className="about-card-icon">
                    <GraduationIcon className="w-5 h-5" />
                  </div>
                  <p className="section-kicker mt-5">Education</p>
                  <h4 className="about-detail-title mt-3" data-testid="education-title">Academic Foundation</h4>
                  <p className="text-foreground font-medium mt-2" data-testid="education-text">
                    {latestEducation.degree} in {latestEducation.field}
                  </p>
                  <p className="text-muted-foreground mt-1">{latestEducation.institution}</p>
                  <p className="text-sm text-muted-foreground mt-4">{latestEducation.period}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
