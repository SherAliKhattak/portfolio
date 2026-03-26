import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import LandingHighlights from "@/components/landing-highlights";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
        <LandingHighlights />
      <ProjectsSection limit={4} showViewAll />
        <SkillsSection />
        <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
