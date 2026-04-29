import { useEffect, useMemo, useState } from "react";
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
  variant?: "featured" | "portfolio";
};

type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  gallery: string[];
  image?: string;
  playStore?: string;
  appStore?: string;
  link?: string;
  linkType?: string;
  video?: string;
  status?: string;
  category?: string;
  platform?: string;
};

type PortfolioFilterId = "all" | "applications" | "web-development" | "ui-ux";

const portfolioFilters: Array<{ id: PortfolioFilterId; label: string }> = [
  { id: "all", label: "All" },
  { id: "applications", label: "Applications" },
  { id: "web-development", label: "Web development" },
  { id: "ui-ux", label: "UI/UX" },
];

const getProjectFilterId = (project: PortfolioProject): PortfolioFilterId => {
  const title = project.title.toLowerCase();
  const category = project.category?.toLowerCase() ?? "";
  const platform = project.platform?.toLowerCase() ?? "";
  const linkType = project.linkType?.toLowerCase() ?? "";
  const technologies = project.technologies.map((tech) => tech.toLowerCase());
  const hasMobileStoreLinks = Boolean(project.playStore || project.appStore);

  if (
    hasMobileStoreLinks ||
    platform.includes("application") ||
    technologies.some((tech) => tech.includes("flutter") || tech.includes("react native"))
  ) {
    return "applications";
  }

  if (
    category.includes("website") ||
    platform.includes("lovable") ||
    linkType.includes("website") ||
    technologies.some((tech) => tech.includes("web"))
  ) {
    return "web-development";
  }

  if (
    title.includes("opticalfit") ||
    technologies.some(
      (tech) =>
        tech.includes("augmented reality") ||
        tech.includes("arkit") ||
        tech.includes("design")
    )
  ) {
    return "ui-ux";
  }

  return "applications";
};

const getPortfolioSubtitle = (project: PortfolioProject) => {
  const filterId = getProjectFilterId(project);

  if (filterId === "web-development") {
    return "Web development";
  }

  if (filterId === "ui-ux") {
    return "UI/UX";
  }

  return "Applications";
};

export default function ProjectsSection({
  limit,
  showViewAll = false,
  variant = "featured",
}: ProjectsSectionProps) {
  const projects = portfolioData.projects as PortfolioProject[];
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterId>("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const isPortfolioVariant = variant === "portfolio";
  const usePortfolioCardLayout = isPortfolioVariant || showViewAll;
  const projectsByFilter = useMemo(() => {
    const limitedProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;
    return limitedProjects.reduce<Record<PortfolioFilterId, PortfolioProject[]>>(
      (acc, project) => {
        acc.all.push(project);
        const filterId = getProjectFilterId(project);
        acc[filterId].push(project);
        return acc;
      },
      { all: [], applications: [], "web-development": [], "ui-ux": [] },
    );
  }, [limit, projects]);
  const visibleProjects = isPortfolioVariant
    ? projectsByFilter[activeFilter]
    : projectsByFilter.all;
  const filterCounts = useMemo(
    () =>
      ({
        all: projectsByFilter.all.length,
        applications: projectsByFilter.applications.length,
        "web-development": projectsByFilter["web-development"].length,
        "ui-ux": projectsByFilter["ui-ux"].length,
      }) satisfies Record<PortfolioFilterId, number>,
    [projectsByFilter],
  );
  const availableFilters = portfolioFilters.filter(
    (filter) => filter.id === "all" || filterCounts[filter.id] > 0,
  );
  const visibleCount = visibleProjects.length;
  const activeFilterLabel =
    portfolioFilters.find((filter) => filter.id === activeFilter)?.label ?? "All";
  const activeFilterTabId = `projects-filter-${activeFilter}`;
  const {
    appStore: AppStoreIcon,
    arrowRight: ArrowRightIcon,
    external: ExternalIcon,
    playStore: PlayStoreIcon,
  } = portfolioUiIcons;
  const selectedProject =
    typeof selectedProjectIndex === "number" ? projects[selectedProjectIndex] : null;

  useEffect(() => {
    if (!isPortfolioVariant || activeFilter === "all") {
      return;
    }
    if (filterCounts[activeFilter] === 0) {
      setActiveFilter("all");
    }
  }, [activeFilter, filterCounts, isPortfolioVariant]);

  return (
    <section
      id="projects"
      data-section-number={isPortfolioVariant ? undefined : "02"}
      className={`content-section bg-secondary/30 ${isPortfolioVariant ? "portfolio-gallery-section" : ""}`}
    >
      <div className="projects-background-cover" aria-hidden="true">
        <img
          src={sectionBackgroundAlt1}
          alt=""
          className="projects-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div
            className={`projects-section-top mb-10 md:mb-16 ${
              isPortfolioVariant ? "projects-section-top--portfolio" : ""
            }`}
          >
            {!isPortfolioVariant ? (
              <div className="projects-section-kicker-row">
                <p className="section-kicker projects-section-kicker mb-0">Selected work</p>
                {showViewAll ? (
                  <Link href="/projects" className="projects-view-all-link" data-testid="projects-view-all">
                    View All Projects
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                ) : null}
              </div>
            ) : null}
            <div className="section-header section-header--left">
              <h2 className="section-heading-title mb-4" data-testid="section-title">
                {isPortfolioVariant ? "Portfolio" : "What I Build"}
              </h2>
              {isPortfolioVariant ? (
                <span className="portfolio-gallery-title-accent" aria-hidden="true" />
              ) : (
                <p className="text-muted-foreground mt-4 max-w-3xl">
                  A selected set of mobile and product experiences focused on real delivery,
                  practical architecture, and polished execution.
                </p>
              )}
            </div>
          </div>

          {isPortfolioVariant ? (
            <div className="portfolio-filter-row" role="tablist" aria-label="Project categories">
              {availableFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  id={`projects-filter-${filter.id}`}
                  aria-controls="projects-grid-panel"
                  aria-selected={activeFilter === filter.id}
                  className={`portfolio-filter-button ${
                    activeFilter === filter.id ? "portfolio-filter-button--active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
              <p className="portfolio-filter-results" aria-live="polite">
                {visibleCount} project{visibleCount === 1 ? "" : "s"}
              </p>
            </div>
          ) : null}
        </AnimatedSection>

        {visibleCount > 0 ? (
          <motion.div
            id="projects-grid-panel"
            role="tabpanel"
            aria-labelledby={activeFilterTabId}
            aria-label={`${activeFilterLabel} projects`}
            className={`projects-grid grid gap-8 ${
              isPortfolioVariant ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {visibleProjects.map((project, index) => {
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
            const portfolioSubtitle = getPortfolioSubtitle(project);
            
            return (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
              >
                <Card
                  className={`project-card project-card--premium rounded-lg overflow-hidden ${
                    usePortfolioCardLayout ? "project-card--portfolio-gallery" : ""
                  }`}
                  data-testid={`project-card-${projectIndex}`}
                >
                  <CardContent
                    className={
                      usePortfolioCardLayout
                        ? "project-card-content project-card-content--portfolio"
                        : "project-card-content project-card-content--featured"
                    }
                  >
                    <button
                      type="button"
                      className={`project-card-main-link project-card-open-button ${
                        usePortfolioCardLayout ? "project-card-main-link--portfolio" : ""
                      }`}
                      onClick={openProjectDialog}
                    >
                      {(usePortfolioCardLayout || project.image || project.gallery?.[0]) && (
                        <div
                          className={`project-media project-media--reference overflow-hidden relative ${
                            usePortfolioCardLayout
                              ? "project-media--portfolio aspect-[1.6/1]"
                              : "mb-6 aspect-[1.62/1]"
                          }`}
                        >
                          {usePortfolioCardLayout ? (
                            (project.image || project.gallery?.[0]) ? (
                              <img
                                src={project.image || project.gallery?.[0]}
                                alt={project.title}
                                className="project-portfolio-image"
                                data-testid={`project-image-${projectIndex}`}
                              />
                            ) : null
                          ) : (
                            <>
                              <span className="project-media-badge">
                                {project.category || project.platform || "Project"}
                              </span>
                              <img 
                                src={project.image || project.gallery?.[0]} 
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform duration-500"
                                data-testid={`project-image-${projectIndex}`}
                              />
                            </>
                          )}
                        </div>
                      )}
                      <div className={usePortfolioCardLayout ? "project-gallery-copy" : "project-copy-block"}>
                        <h3 className="text-xl font-bold mb-3" data-testid={`project-title-${projectIndex}`}>
                          {project.title}
                        </h3>
                        {portfolioSubtitle ? (
                          <p className={`project-role-line ${usePortfolioCardLayout ? "project-role-line--portfolio" : ""}`}>
                            {usePortfolioCardLayout
                              ? project.platform || portfolioSubtitle
                              : project.platform || project.status || project.linkType || project.technologies[0]}
                          </p>
                        ) : null}
                        {usePortfolioCardLayout ? (
                          <p
                            className="project-description project-description--portfolio-preview"
                            data-testid={`project-description-${projectIndex}`}
                          >
                            {project.description}
                          </p>
                        ) : null}
                        {!usePortfolioCardLayout ? (
                          <p
                            className="project-description project-description--reference"
                            data-testid={`project-description-${projectIndex}`}
                          >
                            <span className="project-description-text">{project.description}</span>
                          </p>
                        ) : null}
                      </div>
                    </button>

                    {!usePortfolioCardLayout ? (
                      <>
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
                      </>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            );
            })}
          </motion.div>
        ) : (
          <div className="projects-empty-state" role="status">
            <p className="projects-empty-title">No projects in this category yet.</p>
            <p className="projects-empty-copy">Try another filter to see more work.</p>
            {isPortfolioVariant ? (
              <button
                type="button"
                className="projects-empty-reset"
                onClick={() => setActiveFilter("all")}
              >
                Show all projects
              </button>
            ) : null}
          </div>
        )}

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
