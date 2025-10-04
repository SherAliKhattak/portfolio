import { GraduationCap, BookOpen, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
