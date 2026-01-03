import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="w-full h-full rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                <div className="font-mono text-4xl md:text-5xl font-bold text-primary">
                  AT
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse" />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-sm text-primary mb-2"
            >
              <span className="text-muted-foreground">$</span> whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-2"
            >
              <span className="text-primary font-semibold">{personalInfo.title}</span>
              <br />
              <span className="text-base">{personalInfo.tagline}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-6"
            >
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <div className="flex items-center gap-3">
                <SocialLink href={`tel:${personalInfo.phone}`} icon={Phone} label="Phone" />
                <SocialLink href={`mailto:${personalInfo.email}`} icon={Mail} label="Email" />
                <SocialLink href={personalInfo.linkedin} icon={Linkedin} label="LinkedIn" />
                <SocialLink href={personalInfo.github} icon={Github} label="GitHub" />
                <SocialLink href={personalInfo.leetcode} icon={ExternalLink} label="LeetCode" />
              </div>
              <motion.a
                href="/Abhishek_Tomar_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="font-mono text-sm text-primary mb-3">
            <span className="text-muted-foreground">$</span> cat about.txt
          </div>
          <div className="glass-card rounded-xl p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {personalInfo.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
