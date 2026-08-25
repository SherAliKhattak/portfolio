import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { SectionHeader } from "./section-header";
import { portfolioUiIcons } from "./portfolio-icons";

export default function EducationSection() {
  const { education } = portfolioData;
  const { calendar: CalendarIcon, graduation: GraduationIcon } = portfolioUiIcons;

  return (
    <section id="education" className="content-section">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            kicker="Background"
            title="Education"
            description="Computer systems engineering and pre-engineering studies that underpin the work I ship today."
          />
        </AnimatedSection>

        <motion.div
          className="education-grid grid md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              className="education-grid-item"
              key={`${edu.institution}-${edu.degree}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              <Card
                className="education-card"
                data-testid={`education-card-${index}`}
              >
                <CardContent className="education-card-content">
                  <div className="education-card-header">
                    <div className="education-icon-wrap">
                      <GraduationIcon className="text-primary text-2xl" />
                    </div>
                    <div className="education-heading">
                      <h3 className="education-degree" data-testid={`education-degree-${index}`}>
                        {edu.degree}
                      </h3>
                      <p className="education-field" data-testid={`education-field-${index}`}>
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  <div className="education-meta-row" data-testid={`education-institution-${index}`}>
                    <span>{edu.institution}</span>
                  </div>

                  <div className="education-period-chip" data-testid={`education-period-${index}`}>
                    <CalendarIcon className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="education-description" data-testid={`education-description-${index}`}>
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
