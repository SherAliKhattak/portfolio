import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";
import { portfolioUiIcons } from "./portfolio-icons";
import sectionBackgroundAlt1 from "@/assets/section-background-alt-1.png";

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;
  const { quote: QuoteIcon, star: StarIcon } = portfolioUiIcons;

  return (
    <section id="testimonials" data-section-number="06" className="content-section bg-background">
      <div className="testimonials-background-cover" aria-hidden="true">
        <img
          src={sectionBackgroundAlt1}
          alt=""
          className="testimonials-background-image"
        />
      </div>
      <div className="section-shell">
        <AnimatedSection>
          <div className="section-header section-header--left mb-16">
            <p className="section-kicker mb-3">Social proof</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="section-title">
              <span className="gradient-text">What Clients Say</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              Feedback from clients who trusted me with product design, implementation, and delivery.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <Card className="premium-panel testimonial-card" data-testid={`testimonial-card-${index}`}>
                <CardContent className="p-7 sm:p-8 testimonial-card-content">
                  <div className="testimonial-topline">
                    <div className="testimonial-quote-icon">
                      <QuoteIcon className="w-5 h-5" />
                    </div>
                    <div className="testimonial-stars" aria-label={`${testimonial.rating} star rating`}>
                      {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                        <StarIcon key={`${testimonial.name}-${starIndex}`} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="testimonial-quote" data-testid={`testimonial-quote-${index}`}>
                    {testimonial.quote}
                  </p>

                  <div className="testimonial-footer">
                    <div>
                      <p className="testimonial-name" data-testid={`testimonial-name-${index}`}>
                        {testimonial.name}
                      </p>
                      <p className="testimonial-context">{testimonial.context}</p>
                    </div>
                    <span className="testimonial-rating-badge">{testimonial.rating}.0 / 5</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
