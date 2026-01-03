import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> echo "Thanks for visiting!"
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
