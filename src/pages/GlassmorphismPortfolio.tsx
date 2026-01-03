import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, Briefcase, GraduationCap, Code, Folder, Award, Sparkles } from "lucide-react";
import { personalInfo, workExperience, education, skills, projects, certifications } from "@/data/portfolioData";
import ThemeToggle from "@/components/portfolio/ThemeToggle";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const GlassCard = ({ 
  children, 
  className = "",
  delay = 0,
  glow = false,
  variant = "default"
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  glow?: boolean;
  variant?: "default" | "left" | "right" | "scale";
}) => {
  const variants = {
    default: itemVariants,
    left: slideInLeft,
    right: slideInRight,
    scale: scaleUp,
  };

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 ${glow ? 'shadow-[0_0_40px_-10px_hsl(var(--primary))]' : ''} hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const GlassmorphismPortfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <ThemeToggle />
      
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-[90px]" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-emerald-300 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/60 mb-2"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/40 mb-8"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-2 text-white/40 mb-12"
              >
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-emerald-400 text-black font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-3"
              >
                {[
                  { href: personalInfo.linkedin, icon: Linkedin },
                  { href: personalInfo.github, icon: Github },
                  { href: personalInfo.leetcode, icon: () => <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" alt="LeetCode" className="w-5 h-5 invert" /> },
                  { href: `tel:${personalInfo.phone}`, icon: Phone },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--primary))] transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <GlassCard glow variant="scale">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">About Me</h2>
                </motion.div>
                <motion.p variants={itemVariants} className="text-lg text-white/70 leading-relaxed">
                  {personalInfo.about}
                </motion.p>
              </motion.div>
            </GlassCard>
          </div>
        </section>


        {/* Experience Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
              <Briefcase className="w-8 h-8 text-primary" />
              Experience
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {workExperience.map((job, index) => (
                <GlassCard key={job.company} variant={index % 2 === 0 ? "left" : "right"}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.company}</h3>
                      <p className="text-primary">{job.position}</p>
                    </div>
                    <span className="text-sm text-white/40 font-mono">{job.dates}</span>
                  </div>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {job.highlights.map((highlight) => (
                      <motion.div 
                        key={highlight.title} 
                        variants={itemVariants}
                        className="border-l-2 border-primary/50 pl-4"
                      >
                        <h4 className="font-semibold text-white/90">{highlight.title}</h4>
                        <p className="text-sm text-white/50 mt-1">{highlight.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {highlight.keywords.map((keyword) => (
                            <span key={keyword} className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
              <Code className="w-8 h-8 text-primary" />
              Tech Stack
            </motion.h2>

            <GlassCard glow variant="scale">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div key={category} variants={itemVariants}>
                    <h3 className="text-sm font-semibold text-primary mb-3">{category}</h3>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {skillList.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          variants={scaleUp}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 text-sm rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 hover:shadow-[0_0_15px_-3px_hsl(var(--primary))] transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
              <Folder className="w-8 h-8 text-primary" />
              Projects
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--primary))] transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Folder className="w-8 h-8 text-primary" />
                    <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs rounded-lg bg-white/5 text-white/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {education.map((edu, index) => (
                <GlassCard key={edu.institution} variant={index % 2 === 0 ? "left" : "right"}>
                  <h3 className="text-lg font-bold">{edu.institution}</h3>
                  <p className="text-primary mt-1">{edu.degree}</p>
                  <div className="flex items-center gap-3 mt-3 text-sm text-white/50">
                    <span>{edu.dates}</span>
                    <span>•</span>
                    <span>{edu.grade}</span>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </motion.h2>

            <GlassCard variant="scale">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={cert.name} 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <Award className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-white/50 mt-1">{cert.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm text-white/40">{cert.date}</span>
                      {cert.grade && <p className="text-xs text-primary mt-1">{cert.grade}</p>}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Crafted with{" "}
              <span className="text-primary">♥</span>
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default GlassmorphismPortfolio;
