import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="portfolio-reference-page min-h-screen text-foreground">
      <div className="portfolio-reference-layout portfolio-reference-layout--single">
        <main className="portfolio-reference-main-column">
          <Navigation />
          <main>
            <ProjectsSection variant="portfolio" />
          </main>
          <Footer />
        </main>
      </div>
    </div>
  );
}
