import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-28">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
