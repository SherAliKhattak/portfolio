import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons } from "./portfolio-icons";
import experienceBackgroundCover from "@/assets/experience-background-cover.png";

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const { calendar: CalendarIcon, chevronRight: ChevronRightIcon, mapPin: MapPinIcon } = portfolioUiIcons;

  return (
    <section id="experience" data-section-number="04" className="content-section bg-secondary/30">
      <div className="experience-background-cover" aria-hidden="true">
        <img
          src={experienceBackgroundCover}
          alt=""
          className="experience-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--left mb-16">
            <p className="section-kicker mb-3">Career path</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Roles focused on mobile delivery, product quality, and collaboration across engineering teams.
            </p>
          </div>
        </AnimatedSection>

        <div className="experience-stack max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="experience-entry timeline-item"
              data-testid={`experience-item-${index}`}
            >
              <Card className="premium-panel experience-card">
                <CardContent className="experience-card-content p-6">
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
