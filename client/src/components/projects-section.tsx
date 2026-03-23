import { Link } from "wouter";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons, projectIconMap } from "./portfolio-icons";
import sectionBackgroundAlt1 from "@/assets/section-background-alt-1.png";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const { arrowRight: ArrowRightIcon, globe: DefaultProjectIcon } = portfolioUiIcons;

  return (
    <section id="projects" data-section-number="04" className="content-section bg-secondary/30">
      <div className="projects-background-cover" aria-hidden="true">
        <img
          src={sectionBackgroundAlt1}
          alt=""
          className="projects-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header mb-16">
            <p className="section-kicker mb-3">Selected products</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of products I've developed, ranging from mobile applications and AI-assisted community platforms to healthcare and e-commerce solutions
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.map((project, index) => {
            const IconComponent = projectIconMap[project.icon] || DefaultProjectIcon;
            
            return (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
              >
              <Link href={`/project/${index}`}>
                <Card
                  className="project-card project-card--premium rounded-lg overflow-hidden cursor-pointer"
                  data-testid={`project-card-${index}`}
                >
                  <CardContent className="p-6">
                    {(project.image || project.gallery?.[0]) && (
                      <div className="project-media mb-5 rounded-[24px] overflow-hidden aspect-video relative border border-white/8">
                        <img 
                          src={project.image || project.gallery?.[0]} 
                          alt={project.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          data-testid={`project-image-${index}`}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className="icon-chip">
                        <IconComponent className="w-5 h-5" />
                      </div>
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
                    <p className="project-description mb-4 text-sm leading-relaxed line-clamp-2" data-testid={`project-description-${index}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="project-tech-chip"
                          data-testid={`project-tech-${index}-${techIndex}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="project-tech-chip">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="project-link">
                      View Details <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
