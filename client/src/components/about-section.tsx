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
    email: EmailIcon,
    external: ExternalIcon,
    github: GithubIcon,
    graduation: GraduationIcon,
    linkedin: LinkedinIcon,
    mapPin: MapPinIcon,
    phone: PhoneIcon,
  } = portfolioUiIcons;
  const currentRole = experience[0];
  const latestEducation = education[0];
  const conciseSummary =
    "Software Engineer with 4+ years of experience focused on polished Flutter and React Native products, AI-assisted development, security-minded engineering, and dependable releases across iOS and Android.";
  const aboutHighlights = [
    "4+ years of software engineering experience",
    "10+ shipped apps across multiple industries",
    "AI, QA, and security-minded product delivery",
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
          <div className="section-header mb-16">
            <p className="section-kicker mb-3">Profile</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">About Me</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <motion.div
            className="space-y-6"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardVariants} custom={0}>
              <Card className="about-main-panel">
                <CardContent className="p-7 sm:p-8">
                  <p className="section-kicker">Craft + engineering</p>
                  <h3 className="about-main-title mt-4" data-testid="about-title">
                    Building mobile products that feel polished, performant, and ready for real users.
                  </h3>
                  <div className="space-y-4 mt-6">
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
                  <div className="about-badge-row pt-6">
                    {aboutHighlights.map((item) => (
                      <span key={item} className="about-chip">
                        {item}
                      </span>
                    ))}
                  </div>
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

            <motion.div variants={cardVariants} custom={1}>
              <div className="grid gap-6 md:grid-cols-2">
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
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardVariants} custom={0}>
              <Card className="about-summary-card">
                <CardContent className="p-6 sm:p-7">
                  <div className="about-profile-image-wrap mb-6">
                    <img
                      src={sherAliPortrait}
                      alt={personal.name}
                      className="about-profile-image"
                    />
                  </div>
                  <p className="section-kicker">At a glance</p>
                  <h3 className="about-profile-name mt-4">{personal.name}</h3>
                  <p className="about-summary-role">{personal.title}</p>

                  <div className="about-summary-stack mt-6">
                    <span className="about-chip">Flutter</span>
                    <span className="about-chip">React Native</span>
                    <span className="about-chip">Clean Architecture</span>
                  </div>

                  <div className="about-summary-list mt-6">
                    {personal.location ? (
                      <div className="about-summary-row">
                        <span className="about-contact-label">Location</span>
                        <span className="about-contact-value" data-testid="location-text">{personal.location}</span>
                      </div>
                    ) : null}
                    <div className="about-summary-row">
                      <span className="about-contact-label">Current focus</span>
                      <span className="about-contact-value">AI-assisted development and security-minded product delivery</span>
                    </div>
                    <div className="about-summary-row">
                      <span className="about-contact-label">Availability</span>
                      <span className="about-contact-value">Freelance and long-term collaborations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} custom={1}>
              <Card className="about-contact-card">
                <CardContent className="p-6">
                  <p className="section-kicker">Contact</p>
                  <div className="space-y-4 mt-5">
                    {personal.location ? (
                      <div className="about-contact-row">
                        <div className="about-card-icon">
                          <MapPinIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="about-contact-label">Location</p>
                          <p className="about-contact-value" data-testid="location-text">{personal.location}</p>
                        </div>
                      </div>
                    ) : null}
                    <div className="about-contact-row">
                      <div className="about-card-icon">
                        <EmailIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="about-contact-label">Email</p>
                        <a href={`mailto:${personal.email}`} className="about-contact-value">
                          {personal.email}
                        </a>
                      </div>
                    </div>
                    <div className="about-contact-row">
                      <div className="about-card-icon">
                        <PhoneIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="about-contact-label">Phone</p>
                        <a href={`tel:${personal.phones[0]}`} className="about-contact-value">
                          {personal.phones[0]}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="about-action-grid mt-6">
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-action-link"
                    >
                      <LinkedinIcon className="w-4 h-4 flat-social-icon flat-social-icon--linkedin" />
                      LinkedIn
                    </a>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-action-link"
                    >
                      <GithubIcon className="w-4 h-4 flat-social-icon flat-social-icon--github" />
                      GitHub
                    </a>
                    <a href={`mailto:${personal.email}`} className="about-action-link">
                      <EmailIcon className="w-4 h-4 flat-social-icon flat-social-icon--email" />
                      Email
                    </a>
                    <a href={`tel:${personal.phones[0]}`} className="about-action-link">
                      <PhoneIcon className="w-4 h-4 flat-social-icon flat-social-icon--phone" />
                      Call
                    </a>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="about-cta-link mt-6"
                  >
                    Start a conversation
                    <ExternalIcon className="w-4 h-4" />
                  </a>
                  <div className="about-contact-note text-sm text-muted-foreground leading-7 mt-5">
                    Open to freelance engagements, product collaborations, and long-term mobile app work.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
