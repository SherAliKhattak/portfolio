import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons } from "./portfolio-icons";
import sectionBackgroundAlt2 from "@/assets/section-background-alt-2.png";

export default function EducationSection() {
  const { education } = portfolioData;
  const { calendar: CalendarIcon, graduation: GraduationIcon } = portfolioUiIcons;

  return (
    <section id="education" data-section-number="05" className="content-section bg-background">
      <div className="education-background-cover" aria-hidden="true">
        <img
          src={sectionBackgroundAlt2}
          alt=""
          className="education-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--left mb-16">
            <p className="section-kicker mb-3">Learning path</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Academic foundations that shaped my engineering mindset and problem-solving approach.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="education-grid max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              className="education-grid-item"
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
            <Card
              key={index}
              className="education-card"
              data-testid={`education-card-${index}`}
            >
              <CardContent className="p-8 education-card-content">
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
                  <GraduationIcon className="w-5 h-5 text-primary" />
                  <span>{edu.institution}</span>
                </div>

                <div className="education-period-chip" data-testid={`education-period-${index}`}>
                  <CalendarIcon className="w-5 h-5 text-primary" />
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
