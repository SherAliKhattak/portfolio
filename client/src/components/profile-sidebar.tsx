import { portfolioData } from "@/data/portfolio-data";
import sherAliPortrait from "@/assets/sher-ali-portrait.png";
import { portfolioUiIcons } from "./portfolio-icons";

export default function ProfileSidebar() {
  const { personal } = portfolioData;
  const {
    email: EmailIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
    phone: PhoneIcon,
  } = portfolioUiIcons;

  const contactItems = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      Icon: EmailIcon,
    },
    {
      label: "Phone",
      value: personal.phones[0],
      href: `tel:${personal.phones[0]}`,
      Icon: PhoneIcon,
    },
  ];

  return (
    <div className="profile-sidebar-card">
      <div className="profile-sidebar-top">
        <div className="profile-sidebar-avatar-wrap">
          <img
            src={sherAliPortrait}
            alt={`Portrait of ${personal.name}`}
            className="profile-sidebar-avatar"
          />
          <span className="profile-sidebar-status" aria-hidden="true" />
        </div>

        <div className="profile-sidebar-identity">
          <h2 className="profile-sidebar-name">{personal.name}</h2>
          <p className="profile-sidebar-role">{personal.title}</p>
        </div>
      </div>

      <div className="profile-sidebar-contact-list">
        {contactItems.map(({ label, value, href, Icon }) => (
          <a key={label} href={href} className="profile-sidebar-contact-item">
            <span className="profile-sidebar-contact-icon">
              <Icon className="w-4 h-4" />
            </span>
            <span className="profile-sidebar-contact-copy">
              <span className="profile-sidebar-contact-label">{label}</span>
              <span className="profile-sidebar-contact-value">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="profile-sidebar-socials">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-sidebar-social-link"
          aria-label="Open GitHub profile"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-sidebar-social-link"
          aria-label="Open LinkedIn profile"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
