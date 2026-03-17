import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <div className="section-title-underline" />
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
              <Card className="bg-card border-border hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`experience-position-${index}`}>
                        {exp.position}
                      </h3>
                      <p className="text-primary font-semibold" data-testid={`experience-company-${index}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-muted-foreground mb-2" data-testid={`experience-location-${index}`}>
                    <MapPin className="inline w-4 h-4 mr-2 text-primary" />
                    {exp.location}
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start" data-testid={`experience-responsibility-${index}-${respIndex}`}>
                        <ChevronRight className="text-primary mr-3 mt-1 flex-shrink-0 w-4 h-4" />
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
