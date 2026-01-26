import { useRoute } from "wouter";
import { portfolioData } from "@/data/portfolio-data";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  FileText, Utensils, Hospital, Car, Video, 
  CarFront, Ambulance, Heart, Truck, 
  Stethoscope, ShoppingBag, ArrowLeft, 
  ExternalLink, Calendar, Tag, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";

const projectIcons: Record<string, any> = {
  FileText, Utensils, Hospital, Car, Video, 
  CarFront, Ambulance, Heart, Truck, 
  Stethoscope, ShoppingBag
};

export default function ProjectDetails() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id ? parseInt(params.id) : -1;
  const project = portfolioData.projects[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = projectIcons[project.icon] || FileText;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <IconComponent className="text-primary w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                {project.status && (
                  <span className="flex items-center text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                    <Info className="w-4 h-4 mr-2" />
                    {project.status}
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on {project.linkType}
                  </a>
                )}
              </div>
            </div>
          </div>

          {project.image && (
            <Card className="overflow-hidden border-border mb-12">
              <CardContent className="p-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Info className="mr-2 text-primary" />
                  Project Overview
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Tag className="mr-2 text-primary" />
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium text-primary">Mobile App</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Platform</span>
                      <span className="font-medium">Flutter</span>
                    </div>
                    <div className="pt-4">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full block">
                          <Button className="w-full">
                            View Live Project
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                      ) : (
                        <Button disabled className="w-full opacity-50">
                          Link Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
