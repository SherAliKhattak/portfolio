import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="section-title-underline" />
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
              className="bg-card border-border hover:border-primary transition-all duration-300"
              data-testid={`education-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    {index === 0 ? (
                      <GraduationCap className="text-primary text-2xl" />
                    ) : (
                      <BookOpen className="text-primary text-2xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" data-testid={`education-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold" data-testid={`education-field-${index}`}>
                      {edu.field}
                    </p>
                  </div>
                </div>
                <div className="text-muted-foreground mb-3" data-testid={`education-institution-${index}`}>
                  <GraduationCap className="inline w-5 h-5 mr-2 text-primary" />
                  {edu.institution}
                </div>
                <div className="text-muted-foreground mb-4" data-testid={`education-period-${index}`}>
                  <Calendar className="inline w-5 h-5 mr-2 text-primary" />
                  {edu.period}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`education-description-${index}`}>
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
