import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { portfolioData } from "@/data/portfolio-data";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  FileText, Utensils, Hospital, Car, Video, 
  CarFront, Ambulance, Heart, Truck, 
  Stethoscope, ShoppingBag, ArrowLeft, 
  ExternalLink, Calendar, Tag, Info, Sun, Trophy, Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";

const projectIcons: Record<string, any> = {
  FileText, Utensils, Hospital, Car, Video, 
  CarFront, Ambulance, Heart, Truck, 
  Stethoscope, ShoppingBag, Sun, Trophy, Camera
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
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
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
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/40 px-3 py-1 rounded-full hover:bg-[#3DDC84]/30 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    Play Store
                  </a>
                )}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm bg-foreground/10 text-foreground border border-border px-3 py-1 rounded-full hover:bg-foreground/20 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </a>
                )}
                {!project.playStore && !project.appStore && project.link && (
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
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.video && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Video className="mr-2 text-primary" />
                Project Demo
              </h2>
              <Card className="overflow-hidden border-border bg-black aspect-[9/16] max-w-sm mx-auto">
                <CardContent className="p-0 h-full">
                  <video 
                    src={project.video} 
                    controls 
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Info className="mr-2 text-primary" />
                Project Screenshots
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img: string, idx: number) => (
                  <Card key={idx} className="overflow-hidden border-border hover:border-primary transition-colors cursor-pointer group">
                    <CardContent className="p-0 aspect-[9/19]">
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
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
                    <div className="pt-4 space-y-3">
                      {(project.playStore || project.appStore) ? (
                        <div className="flex flex-col sm:flex-row gap-3">
                          {project.playStore && (
                            <a
                              href={project.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-1 items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/40 hover:bg-[#3DDC84]/30"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                              </svg>
                              Play Store
                            </a>
                          )}
                          {project.appStore && (
                            <a
                              href={project.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-1 items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] bg-foreground/10 text-foreground border border-border hover:bg-foreground/20"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                              </svg>
                              App Store
                            </a>
                          )}
                        </div>
                      ) : project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full block">
                          <Button className="w-full">
                            {project.linkType === "Play Store" ? (
                              <>
                                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                                </svg>
                                View on Play Store
                              </>
                            ) : project.linkType === "App Store" ? (
                              <>
                                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                View on App Store
                              </>
                            ) : (
                              <>
                                <ExternalLink className="mr-2 w-4 h-4" />
                                View Live Project
                              </>
                            )}
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
    </motion.div>
  );
}
