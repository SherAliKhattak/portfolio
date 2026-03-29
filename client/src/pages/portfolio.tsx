import Navigation from "@/components/navigation";
import ProfileSidebar from "@/components/profile-sidebar";
import HeroSection from "@/components/hero-section";
import LandingHighlights from "@/components/landing-highlights";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="portfolio-reference-page min-h-screen text-foreground">
      <div className="portfolio-reference-layout">
        <aside className="portfolio-reference-sidebar-column">
          <ProfileSidebar />
        </aside>

        <main className="portfolio-reference-main-column">
          <Navigation />
          <HeroSection />
          <LandingHighlights />
          <ProjectsSection limit={4} showViewAll />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
