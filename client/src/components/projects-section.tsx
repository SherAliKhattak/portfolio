import { Link } from "wouter";
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
  ExternalLink,
  Sun,
  Trophy,
  Camera
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
  Sun,
  Trophy,
  Camera
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
              <Link key={project.title} href={`/project/${index}`}>
                <Card
                  className="project-card rounded-lg overflow-hidden cursor-pointer"
                  data-testid={`project-card-${index}`}
                >
                  <CardContent className="p-6">
                    {project.image && (
                      <div className="mb-4 rounded-lg overflow-hidden aspect-video relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          data-testid={`project-image-${index}`}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="text-primary text-3xl" />
                      <div className="flex items-center gap-2">
                        {project.status && (
                          <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full" data-testid={`project-status-${index}`}>
                            {project.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2" data-testid={`project-description-${index}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          data-testid={`project-tech-${index}-${techIndex}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center text-primary hover:text-accent transition-colors">
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
