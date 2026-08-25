import Navigation from "@/components/navigation";
import ProfileSidebar from "@/components/profile-sidebar";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="portfolio-reference-page min-h-screen text-foreground">
      <div className="portfolio-reference-layout">
        <aside className="portfolio-reference-sidebar-column">
          <ProfileSidebar />
        </aside>
        <div className="portfolio-reference-main-column">
          <Navigation />
          <main>
            <ProjectsSection variant="portfolio" />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
