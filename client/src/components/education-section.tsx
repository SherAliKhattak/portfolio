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
          <div className="section-header mb-16">
            <p className="section-kicker mb-3">Learning path</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Education</span>
            </h2>
          </div>
        </AnimatedSection>

        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
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
              <CardContent className="p-8">
                <div className="flex items-center mb-5">
                  <div className="education-icon-wrap mr-4">
                    <GraduationIcon className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" data-testid={`education-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <p className="education-field" data-testid={`education-field-${index}`}>
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="education-meta-row mb-3" data-testid={`education-institution-${index}`}>
                  <GraduationIcon className="w-5 h-5 text-primary" />
                  <span>{edu.institution}</span>
                </div>

                <div className="education-meta-row mb-4" data-testid={`education-period-${index}`}>
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <span>{edu.period}</span>
                </div>
                <p className="education-description text-sm leading-relaxed" data-testid={`education-description-${index}`}>
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
