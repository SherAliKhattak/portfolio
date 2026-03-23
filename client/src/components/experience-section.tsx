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
    <section id="experience" data-section-number="02" className="content-section bg-secondary/30">
      <div className="experience-background-cover" aria-hidden="true">
        <img
          src={experienceBackgroundCover}
          alt=""
          className="experience-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header mb-16">
            <p className="section-kicker mb-3">Career path</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Work Experience</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-2">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative border-l-2 border-border pl-8 pb-12 timeline-item"
              data-testid={`experience-item-${index}`}
            >
              <Card className="premium-panel experience-card">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div>
                      <p className="section-kicker mb-3">Role {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`experience-position-${index}`}>
                        {exp.position}
                      </h3>
                      <p className="experience-company" data-testid={`experience-company-${index}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="experience-period-chip">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {exp.period}
                    </span>
                  </div>

                  {exp.location ? (
                    <div className="experience-location" data-testid={`experience-location-${index}`}>
                      <MapPinIcon className="w-4 h-4 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  ) : null}

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
