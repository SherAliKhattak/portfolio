import { motion } from "framer-motion";
import { 
  Layers, 
  Database, 
  Cloud, 
  GitBranch, 
  Wrench, 
  ShoppingCart, 
  Palette, 
  Rocket, 
  Code 
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";

const skillIcons: Record<string, any> = {
  "State Management": Layers,
  "Backend & Database": Database,
  "Cloud Services": Cloud,
  "Architecture & Patterns": GitBranch,
  "Development Tools": Wrench,
  "Payments & Storage": ShoppingCart,
  "UI/UX": Palette,
  "Deployment": Rocket,
  "Programming": Code,
};

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="section-title-underline" />
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {Object.entries(skills).map(([category, skillList], index) => {
            const IconComponent = skillIcons[category] || Code;
            
            return (
              <motion.div
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
              >
              <Card
                className="bg-card border-border hover:border-primary transition-all duration-300"
                data-testid={`skill-category-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-primary text-2xl mr-3" />
                    <h3 className="text-xl font-bold" data-testid={`skill-category-title-${index}`}>
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
