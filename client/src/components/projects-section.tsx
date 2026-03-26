import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons } from "./portfolio-icons";
import sectionBackgroundAlt1 from "@/assets/section-background-alt-1.png";

type ProjectsSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

export default function ProjectsSection({ limit, showViewAll = false }: ProjectsSectionProps) {
  const { projects } = portfolioData;
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const {
    appStore: AppStoreIcon,
    arrowRight: ArrowRightIcon,
    external: ExternalIcon,
    playStore: PlayStoreIcon,
  } = portfolioUiIcons;
  const selectedProject =
    typeof selectedProjectIndex === "number" ? projects[selectedProjectIndex] : null;

  return (
    <section id="projects" data-section-number="02" className="content-section bg-secondary/30">
      <div className="projects-background-cover" aria-hidden="true">
        <img
          src={sectionBackgroundAlt1}
          alt=""
          className="projects-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="projects-section-top mb-16">
            <div className="section-header section-header--left">
              <p className="section-kicker mb-3">Selected products</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
                <span className="gradient-text">Featured Projects</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-3xl">
                A collection of products I&apos;ve developed, ranging from mobile applications and AI-assisted community platforms to healthcare and e-commerce solutions
              </p>
            </div>
            {showViewAll ? (
              <Link href="/projects" className="projects-view-all-link" data-testid="projects-view-all">
                View All Projects
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </AnimatedSection>

        <motion.div
          className="projects-grid grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {visibleProjects.map((project, index) => {
            const projectBadge = project.category || project.platform || "Project";
            const projectSubtitle = project.platform || project.status || project.linkType || project.technologies[0];
            const projectIndex = projects.indexOf(project);
            const actionLinks = [
              project.playStore
                ? { href: project.playStore, label: "Play Store", Icon: PlayStoreIcon }
                : null,
              project.appStore
                ? { href: project.appStore, label: "App Store", Icon: AppStoreIcon }
                : null,
              project.link
                ? { href: project.link, label: project.linkType || "Website", Icon: ExternalIcon }
                : null,
            ].filter(Boolean) as Array<{ href: string; label: string; Icon: typeof PlayStoreIcon }>;
            const openProjectDialog = () => setSelectedProjectIndex(projectIndex);
            
            return (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
              >
                <Card
                  className="project-card project-card--premium rounded-lg overflow-hidden"
                  data-testid={`project-card-${projectIndex}`}
                >
                  <CardContent className="p-6">
                    <button
                      type="button"
                      className="project-card-main-link project-card-open-button"
                      onClick={openProjectDialog}
                    >
                      {(project.image || project.gallery?.[0]) && (
                        <div className="project-media project-media--reference mb-6 overflow-hidden aspect-[1.62/1] relative">
                          <span className="project-media-badge">{projectBadge}</span>
                          <img 
                            src={project.image || project.gallery?.[0]} 
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-500"
                            data-testid={`project-image-${projectIndex}`}
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${projectIndex}`}>
                        {project.title}
                      </h3>
                      {projectSubtitle ? (
                        <p className="project-role-line">{projectSubtitle}</p>
                      ) : null}
                      <p className="project-description project-description--reference" data-testid={`project-description-${projectIndex}`}>
                        {project.description}
                      </p>
                    </button>

                    <div className="project-tech-row">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="project-tech-chip project-tech-chip--reference"
                          data-testid={`project-tech-${projectIndex}-${techIndex}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="project-tech-chip project-tech-chip--reference">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="project-actions-row">
                      {actionLinks.slice(0, 2).map(({ href, label, Icon }) => (
                        <a
                          key={`${project.title}-${label}`}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-button"
                        >
                          <Icon className="w-4 h-4" />
                          {label}
                        </a>
                      ))}
                      <button
                        type="button"
                        className="project-action-button project-action-button--detail"
                        onClick={openProjectDialog}
                      >
                        <ArrowRightIcon className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <Dialog
          open={selectedProjectIndex !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProjectIndex(null);
            }
          }}
        >
          {selectedProject ? (
            <DialogContent className="project-dialog-content">
              <div className="project-dialog-shell">
                <div className="project-dialog-hero">
                  {(selectedProject.image || selectedProject.gallery?.[0]) && (
                    <div className="project-dialog-media">
                      <img
                        src={selectedProject.image || selectedProject.gallery?.[0]}
                        alt={selectedProject.title}
                        className="project-dialog-image"
                      />
                    </div>
                  )}

                  <div className="project-dialog-copy">
                    <p className="section-kicker">Selected product</p>
                    <DialogTitle className="project-details-title">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="project-dialog-description">
                      {selectedProject.description}
                    </DialogDescription>

                    <div className="project-details-meta-row">
                      {selectedProject.category ? (
                        <span className="project-tech-chip detail-meta-chip">
                          {selectedProject.category}
                        </span>
                      ) : null}
                      {selectedProject.platform ? (
                        <span className="project-tech-chip detail-meta-chip">
                          {selectedProject.platform}
                        </span>
                      ) : null}
                      {selectedProject.status ? (
                        <span className="project-tech-chip detail-meta-chip">
                          {selectedProject.status}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="project-dialog-body">
                  <div className="project-dialog-section">
                    <h3 className="detail-heading detail-heading--tight">Technologies</h3>
                    <div className="project-dialog-tech-grid">
                      {selectedProject.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="project-tech-chip project-dialog-tech-chip">
                          {tech}
                        </span>
                      ))}
                      {selectedProject.technologies.length > 6 ? (
                        <span className="project-tech-chip project-dialog-tech-chip">
                          +{selectedProject.technologies.length - 6} more
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {(selectedProject.playStore || selectedProject.appStore || selectedProject.link) ? (
                    <div className="project-dialog-section">
                      <h3 className="detail-heading detail-heading--tight">Project links</h3>
                      <div className="detail-store-actions-grid">
                        {selectedProject.playStore ? (
                          <a
                            href={selectedProject.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link detail-store-button"
                          >
                            <PlayStoreIcon className="w-5 h-5 flat-social-icon flat-social-icon--playstore" />
                            Play Store
                          </a>
                        ) : null}
                        {selectedProject.appStore ? (
                          <a
                            href={selectedProject.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link detail-store-button"
                          >
                            <AppStoreIcon className="w-5 h-5 flat-social-icon flat-social-icon--appstore" />
                            App Store
                          </a>
                        ) : null}
                        {selectedProject.link ? (
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link detail-store-button"
                          >
                            <ExternalIcon className="w-4 h-4" />
                            {selectedProject.linkType || "Website"}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </DialogContent>
          ) : null}
        </Dialog>
      </div>
    </section>
  );
}
