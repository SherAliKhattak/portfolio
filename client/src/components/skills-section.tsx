import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { SectionHeader } from "./section-header";
import { skillCategoryIconGroups } from "./portfolio-icons";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="content-section">
      <div className="section-shell">
        <AnimatedSection>
          <SectionHeader
            kicker="Capabilities"
            title="Technical skills"
            description="The stack behind my work as a full stack mobile developer—architecture, cross-platform UI, backends, QA, and store releases."
          />
        </AnimatedSection>

        <motion.div
          className="skills-grid grid md:grid-cols-2"
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
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Card
                  className="skill-category-card"
                  data-testid={`skill-category-${index}`}
                >
                  <CardContent className="skill-card-content">
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
                          className="skill-tag"
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
