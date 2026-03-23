import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { portfolioData } from "@/data/portfolio-data";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  ArrowLeft,
  Tag,
  Info,
  Video,
  Images
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect } from "react";
import { portfolioUiIcons, projectIconMap } from "@/components/portfolio-icons";
import projectDetailsBackgroundCover from "@/assets/project-details-background-cover.png";

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

  const { appStore: AppStoreIcon, external: ExternalIcon, globe: DefaultProjectIcon, playStore: PlayStoreIcon } = portfolioUiIcons;
  const IconComponent = projectIconMap[project.icon] || DefaultProjectIcon;
  const projectCategory = project.category || "Mobile App";
  const projectPlatform = project.platform || "Flutter";

  return (
    <motion.div
      className="project-details-page min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-details-background-media" aria-hidden="true">
        <img
          src={projectDetailsBackgroundCover}
          alt=""
          className="project-details-background-image"
        />
      </div>

      <div className="project-details-shell">
        <Navigation />
        
        <main className="project-details-main">
          <div className="section-shell">
            <Link href="/">
              <Button variant="ghost" className="project-details-back-button">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>

            <div className="project-details-hero">
              <div className="project-details-icon-chip icon-chip">
                <IconComponent className="text-primary w-10 h-10" />
              </div>
              <div className="project-details-hero-copy">
                <p className="section-kicker mb-3">Selected product</p>
                <h1 className="project-details-title gradient-text">
                  {project.title}
                </h1>
                <div className="project-details-meta-row">
                  {project.status && (
                    <span className="project-tech-chip detail-meta-chip">
                      <Info className="w-4 h-4 mr-2" />
                      {project.status}
                    </span>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-tech-chip detail-meta-chip"
                    >
                      <PlayStoreIcon className="w-4 h-4 mr-2 flat-social-icon flat-social-icon--playstore" />
                      Play Store
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-tech-chip detail-meta-chip"
                    >
                      <AppStoreIcon className="w-4 h-4 mr-2 flat-social-icon flat-social-icon--appstore" />
                      App Store
                    </a>
                  )}
                  {!project.playStore && !project.appStore && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-tech-chip detail-meta-chip"
                    >
                      <ExternalIcon className="w-4 h-4 mr-2" />
                      View on {project.linkType}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="section-shell">
            {project.video && (
              <section className="detail-section">
                <h2 className="detail-heading">
                  <Video className="mr-2 text-primary" />
                  Project Demo
                </h2>
                <Card className="premium-panel detail-video-card">
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
              <section className="detail-section">
                <h2 className="detail-heading">
                  <Images className="mr-2 text-primary" />
                  Project Screenshots
                </h2>
                <div className="project-details-gallery">
                  {project.gallery.map((img: string, idx: number) => (
                    <Card key={idx} className="premium-panel detail-screenshot-card group">
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

            <div className="project-details-grid">
              <div className="md:col-span-2 space-y-8">
                <section className="detail-section detail-section--compact">
                  <h2 className="detail-heading detail-heading--tight">
                    <Info className="mr-2 text-primary" />
                    Project Overview
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </section>

                <section className="detail-section detail-section--compact">
                  <h2 className="detail-heading detail-heading--tight">
                    <Tag className="mr-2 text-primary" />
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="project-tech-chip"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <Card className="premium-panel detail-info-card sticky top-24">
                  <CardContent className="p-6">
                    <p className="section-kicker mb-3">Quick facts</p>
                    <h3 className="detail-info-title">Project Info</h3>
                    <div className="space-y-4">
                      <div className="detail-info-row">
                        <span className="text-muted-foreground">Category</span>
                        <span className="font-medium text-primary">{projectCategory}</span>
                      </div>
                      <div className="detail-info-row">
                        <span className="text-muted-foreground">Platform</span>
                        <span className="font-medium">{projectPlatform}</span>
                      </div>
                      <div className="detail-store-actions">
                        {(project.playStore || project.appStore) ? (
                          <div className="detail-store-actions-grid">
                            {project.playStore && (
                              <a
                                href={project.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link detail-store-button"
                              >
                                <PlayStoreIcon className="w-5 h-5 flat-social-icon flat-social-icon--playstore" />
                                Play Store
                              </a>
                            )}
                            {project.appStore && (
                              <a
                                href={project.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link detail-store-button"
                              >
                                <AppStoreIcon className="w-5 h-5 flat-social-icon flat-social-icon--appstore" />
                                App Store
                              </a>
                            )}
                          </div>
                        ) : project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                            <span className="project-link detail-store-button detail-store-button--full">
                              {project.linkType === "Play Store" ? (
                                <>
                                  <PlayStoreIcon className="mr-2 w-5 h-5 flat-social-icon flat-social-icon--playstore" />
                                  View on Play Store
                                </>
                              ) : project.linkType === "App Store" ? (
                                <>
                                  <AppStoreIcon className="mr-2 w-5 h-5 flat-social-icon flat-social-icon--appstore" />
                                  View on App Store
                                </>
                              ) : (
                                <>
                                  <ExternalIcon className="mr-2 w-4 h-4" />
                                  View Live Project
                                </>
                              )}
                            </span>
                          </a>
                        ) : (
                          <span className="project-link detail-store-button detail-store-button--full detail-store-button--disabled">
                            Link Coming Soon
                          </span>
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
    </motion.div>
  );
}
