import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="portfolio-reference-page min-h-screen text-foreground">
      <div className="portfolio-reference-layout portfolio-reference-layout--single">
        <main className="portfolio-reference-main-column">
          <section className="content-section not-found-section">
            <p className="section-kicker">Error 404</p>
            <h1 className="section-heading-title">Page not found</h1>
            <p className="section-lede">
              This route does not exist. Return to the portfolio to continue.
            </p>
            <Link href="/" className="hero-primary-btn hero-primary-btn--dark">
              Back home
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
