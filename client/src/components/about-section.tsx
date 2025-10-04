import { MapPin, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid="location-title">Location</h3>
                    <p className="text-muted-foreground" data-testid="location-text">{personal.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Briefcase className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid="role-title">Current Role</h3>
                    <p className="text-muted-foreground" data-testid="role-text">Senior Flutter Developer at Duseca Software</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid="education-title">Education</h3>
                    <p className="text-muted-foreground" data-testid="education-text">B.S. in Computer Systems Engineering</p>
                    <p className="text-muted-foreground text-sm">UET Peshawar (2018-2022)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6" data-testid="about-title">
              Passionate About Creating Exceptional Mobile Experiences
            </h3>
            {personal.aboutDetails.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed"
                data-testid={`about-paragraph-${index + 1}`}
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="experience-badge">
                <CheckCircle className="inline w-4 h-4 mr-2" />
                4+ Years Experience
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="projects-badge">
                <CheckCircle className="inline w-4 h-4 mr-2" />
                10+ Projects Delivered
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium" data-testid="fullstack-badge">
                <CheckCircle className="inline w-4 h-4 mr-2" />
                Full-Stack Mobile Dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
