import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { portfolioUiIcons } from "./portfolio-icons";

export default function Footer() {
  const { personal } = portfolioData;
  const { appStore: AppStoreIcon, email: EmailIcon, github: GithubIcon, linkedin: LinkedinIcon, playStore: PlayStoreIcon } = portfolioUiIcons;

  return (
    <motion.footer
      className="bg-background border-t border-border py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm" data-testid="copyright">
              © 2024 <span className="text-primary font-semibold">{personal.name}</span>. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <GithubIcon className="text-xl w-6 h-6 flat-social-icon flat-social-icon--github" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <LinkedinIcon className="text-xl w-6 h-6 flat-social-icon flat-social-icon--linkedin" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <EmailIcon className="text-xl w-6 h-6 flat-social-icon flat-social-icon--email" />
            </a>
            {personal.playStore && (
              <a
                href={personal.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-playstore"
                title="Play Store"
              >
                <PlayStoreIcon className="text-xl w-6 h-6 flat-social-icon flat-social-icon--playstore" />
              </a>
            )}
            {personal.appStore && (
              <a
                href={personal.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-appstore"
                title="App Store"
              >
                <AppStoreIcon className="text-xl w-6 h-6 flat-social-icon flat-social-icon--appstore" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
