import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { skillCategoryIconGroups } from "./portfolio-icons";
import skillsBackgroundCover from "@/assets/skills-background-cover.png";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" data-section-number="03" className="content-section bg-background">
      <div className="skills-background-cover" aria-hidden="true">
        <img
          src={skillsBackgroundCover}
          alt=""
          className="skills-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--left mb-16">
            <p className="section-kicker mb-3">Stack, quality & delivery</p>
            <h2 className="section-heading-title mb-4" data-testid="section-title">
              Technical Skills
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              The toolkit behind my work as a Senior App Developer and Flutter developer—from architecture and cross-platform UI to backends, QA, security tooling, and store releases—plus what I rely on for freelance app delivery.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="skills-grid grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {Object.entries(skills).map(([category, skillList], index) => {
            const previewIcons = skillCategoryIconGroups[category] || skillCategoryIconGroups["Programming"];

            return (
              <motion.div
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
              >
              <Card
                className="skill-category-card"
                data-testid={`skill-category-${index}`}
              >
                <CardContent className="p-6 skill-card-content">
                  <div className="skill-card-header">
                    <div className="skill-icon-row">
                    {previewIcons.map(({ icon: PreviewIcon, className }, previewIndex) => (
                      <div key={`${category}-${previewIndex}`} className="skill-icon-badge">
                        <PreviewIcon className={className} />
                      </div>
                    ))}
                  </div>
                    <h3 className="skill-category-title" data-testid={`skill-category-title-${index}`}>
                      {category}
                    </h3>
                  </div>
                  <div className="skill-tags-grid">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 rounded-full text-sm cursor-pointer"
                        data-testid={`skill-tag-${index}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
