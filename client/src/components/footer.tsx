import { portfolioData } from "@/data/portfolio-data";
import { portfolioUiIcons } from "./portfolio-icons";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();
  const {
    email: EmailIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
  } = portfolioUiIcons;

  const footerLinks = [
    { href: personal.github, label: "GitHub", Icon: GithubIcon, external: true },
    { href: personal.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
    { href: `mailto:${personal.email}`, label: "Email", Icon: EmailIcon, external: false },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-copy" data-testid="copyright">
          <span>
            © {currentYear} {personal.name}
          </span>
          <span className="site-footer-sep" aria-hidden="true">
            ·
          </span>
          <span className="site-footer-role">{personal.title}</span>
        </p>

        <nav className="site-footer-links" aria-label="Social links">
          {footerLinks.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              className="site-footer-link profile-sidebar-social-link"
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
