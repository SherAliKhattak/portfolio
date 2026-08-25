import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { SectionHeader } from "./section-header";
import { portfolioUiIcons } from "./portfolio-icons";

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const { calendar: CalendarIcon, chevronRight: ChevronRightIcon, mapPin: MapPinIcon } = portfolioUiIcons;

  return (
    <section id="experience" className="content-section">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            kicker="Career"
            title="Work experience"
            description="From junior Flutter roles through senior app development and freelance delivery, with a focus on mobile quality and collaboration."
          />
        </AnimatedSection>

        <div className="experience-stack">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="experience-entry timeline-item"
              data-testid={`experience-item-${index}`}
            >
              <Card className="premium-panel experience-card">
                <CardContent className="experience-card-content">
                  <div className="experience-card-header">
                    <div className="experience-heading">
                      <p className="experience-role-badge">Role {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="experience-position" data-testid={`experience-position-${index}`}>
                        {exp.position}
                      </h3>
                      <div className="experience-meta-row">
                        <p className="experience-company" data-testid={`experience-company-${index}`}>
                          {exp.company}
                        </p>
                        {exp.location ? (
                          <div className="experience-location" data-testid={`experience-location-${index}`}>
                            <MapPinIcon className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <span className="experience-period-chip">
                      <CalendarIcon className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="experience-list">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="experience-list-item" data-testid={`experience-responsibility-${index}-${respIndex}`}>
                        <span className="experience-bullet">
                          <ChevronRightIcon className="w-4 h-4" />
                        </span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
