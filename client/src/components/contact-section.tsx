import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons } from "./portfolio-icons";
import sectionBackgroundAlt2 from "@/assets/section-background-alt-2.png";

export default function ContactSection() {
  const { personal } = portfolioData;
  const {
    appStore: AppStoreIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
    playStore: PlayStoreIcon,
  } = portfolioUiIcons;

  return (
    <section id="contact" data-section-number="07" className="content-section bg-secondary/30">
      <div className="contact-background-cover" aria-hidden="true">
        <img
          src={sectionBackgroundAlt2}
          alt=""
          className="contact-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--center mb-16">
            <p className="section-kicker mb-3">Start a conversation</p>
            <h2 className="contact-heading section-heading-title mb-4" data-testid="section-title">
              <span className="contact-heading-line">Get In</span>
              <span className="contact-heading-line contact-heading-line--accent">Touch</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I&apos;m open to product collaborations, consulting work, and strong engineering opportunities. Let&apos;s build something meaningful together.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="contact-centered"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={`mailto:${personal.email}`}
            className="contact-email-link"
            data-testid="contact-email"
          >
            {personal.email}
          </a>

          <div className="contact-social-row" aria-label="Contact links">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-social-link" data-testid="contact-github" title="GitHub">
              <GithubIcon className="w-5 h-5 flat-social-icon flat-social-icon--github" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link" data-testid="contact-linkedin" title="LinkedIn">
              <LinkedinIcon className="w-5 h-5 flat-social-icon flat-social-icon--linkedin" />
            </a>
            {personal.playStore && (
              <a href={personal.playStore} target="_blank" rel="noopener noreferrer" className="contact-social-link" data-testid="contact-playstore" title="Play Store">
                <PlayStoreIcon className="w-5 h-5 flat-social-icon flat-social-icon--playstore" />
              </a>
            )}
            {personal.appStore && (
              <a href={personal.appStore} target="_blank" rel="noopener noreferrer" className="contact-social-link" data-testid="contact-appstore" title="App Store">
                <AppStoreIcon className="w-5 h-5 flat-social-icon flat-social-icon--appstore" />
              </a>
            )}
          </div>

          <div className="contact-footer-copy">
            <p className="text-muted-foreground">
              Best way to reach me is by email. Social links are here for everything else.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
