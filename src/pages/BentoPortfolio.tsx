import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, Download, Briefcase, GraduationCap, Code, Folder, Award, Calendar } from "lucide-react";
import { personalInfo, workExperience, education, skills, projects, certifications } from "@/data/portfolioData";
import ThemeToggle from "@/components/portfolio/ThemeToggle";

const BentoCard = ({ 
  children, 
  className = "", 
  delay = 0,
  span = "col-span-1"
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  span?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.4, ease: "easeOut" }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={`${span} bg-card rounded-3xl border border-border p-6 hover:border-primary/50 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const BentoPortfolio = () => {
  const latestExperience = workExperience[0];
  const topSkills = Object.entries(skills).slice(0, 2);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Hero Card - Large */}
          <BentoCard span="col-span-1 md:col-span-2 lg:col-span-2 row-span-2" delay={0}>
            <div className="h-full flex flex-col">
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shrink-0">
                  <span className="font-mono text-2xl font-bold text-primary-foreground">AT</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Available for opportunities</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold">{personalInfo.name}</h1>
                  <p className="text-primary font-medium">{personalInfo.title}</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground mb-4">{personalInfo.tagline}</p>
              
              {/* About */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {personalInfo.about}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {personalInfo.location}
              </div>
            </div>
          </BentoCard>

          {/* Social Links Card */}
          <BentoCard delay={0.1}>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group">
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group">
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm font-medium">LeetCode</span>
              </a>
            </div>
          </BentoCard>

          {/* Resume Download Card */}
          <BentoCard delay={0.15} className="bg-gradient-to-br from-primary to-primary/80 border-0">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <Download className="w-10 h-10 text-primary-foreground mb-3" />
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Resume</h3>
              <a 
                href="/Abhishek_Tomar_Resume.pdf" 
                download 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline-offset-4 hover:underline"
              >
                Download PDF
              </a>
            </div>
          </BentoCard>

          {/* Current Role Card */}
          <BentoCard span="col-span-1 md:col-span-2" delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Current Role</h3>
              <span className="ml-auto text-xs text-muted-foreground font-mono">{latestExperience.dates}</span>
            </div>
            <div className="mb-3">
              <h4 className="text-xl font-bold">{latestExperience.company}</h4>
              <p className="text-primary font-medium">{latestExperience.position}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {latestExperience.highlights[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {latestExperience.highlights[0].keywords.map((keyword) => (
                <span key={keyword} className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground">
                  {keyword}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Stats Card */}
          <BentoCard delay={0.25}>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Experience</h3>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Building ML Systems</div>
            </div>
          </BentoCard>

          {/* Revenue Card */}
          <BentoCard delay={0.3}>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Impact</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$600k</div>
              <div className="text-sm text-muted-foreground">/month Revenue Impact</div>
            </div>
          </BentoCard>

          {/* Skills Card - Wide */}
          <BentoCard span="col-span-1 md:col-span-2 lg:col-span-2" delay={0.35}>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Tech Stack</h3>
            </div>
            <div className="space-y-4">
              {topSkills.map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-xs font-mono text-primary mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.slice(0, 8).map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                    {skillList.length > 8 && (
                      <span className="px-3 py-1.5 text-sm rounded-xl bg-secondary text-muted-foreground">
                        +{skillList.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Education Card */}
          <BentoCard span="col-span-1 md:col-span-2" delay={0.4}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.institution} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm">{edu.institution}</h4>
                    <p className="text-xs text-primary">{edu.degree}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {edu.dates} • {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Featured Projects */}
          {projects.slice(0, 2).map((project, index) => (
            <BentoCard key={project.title} delay={0.45 + index * 0.05}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <div className="flex items-center justify-between mb-3">
                  <Folder className="w-6 h-6 text-primary" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-xs font-mono rounded-lg bg-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </a>
            </BentoCard>
          ))}

          {/* More Experience Card */}
          <BentoCard span="col-span-1 md:col-span-2 lg:col-span-2" delay={0.55}>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Previous Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {workExperience.slice(1, 5).map((job) => (
                <div key={job.company} className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">{job.company}</h4>
                    <span className="text-xs text-muted-foreground font-mono">{job.dates.split(' - ')[0]}</span>
                  </div>
                  <p className="text-xs text-primary">{job.position}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {job.highlights[0]?.keywords.slice(0, 2).map((keyword) => (
                      <span key={keyword} className="px-2 py-0.5 text-xs font-mono rounded bg-background">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Certifications Card */}
          <BentoCard span="col-span-1 md:col-span-2" delay={0.6}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Certifications</h3>
            </div>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary/50 transition-colors">
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.grade && (
                    <span className="text-xs font-mono text-primary shrink-0">{cert.grade}</span>
                  )}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* More Projects Card */}
          {projects.slice(2).map((project, index) => (
            <BentoCard key={project.title} delay={0.65 + index * 0.05}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <div className="flex items-center justify-between mb-3">
                  <Folder className="w-6 h-6 text-primary" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-xs font-mono rounded-lg bg-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </a>
            </BentoCard>
          ))}

        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center py-12 text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} {personalInfo.name}
        </motion.footer>
      </div>
    </div>
  );
};

export default BentoPortfolio;
