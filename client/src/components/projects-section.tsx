import { 
  FileText, 
  Utensils, 
  Hospital, 
  Car, 
  Video, 
  CarFront, 
  Ambulance, 
  Heart, 
  Truck, 
  Stethoscope, 
  ShoppingBag,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

const projectIcons: Record<string, any> = {
  FileText,
  Utensils,
  Hospital,
  Car,
  Video,
  CarFront,
  Ambulance,
  Heart,
  Truck,
  Stethoscope,
  ShoppingBag,
};

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of mobile applications I've developed, ranging from healthcare solutions to e-commerce platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.icon] || FileText;
            
            return (
              <Card
                key={project.title}
                className="project-card rounded-lg overflow-hidden"
                data-testid={`project-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="text-primary text-3xl" />
                    <div className="flex items-center gap-2">
                      {project.status && (
                        <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full" data-testid={`project-status-${index}`}>
                          {project.status}
                        </span>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`project-link-${index}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-accent transition-colors"
                      data-testid={`project-view-link-${index}`}
                    >
                      View on {project.linkType} <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
