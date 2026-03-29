import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { portfolioUiIcons } from "./portfolio-icons";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="site-footer bg-background py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm" data-testid="copyright">
              © {currentYear} <span className="text-primary font-semibold">{personal.name}</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
