import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, Download, ArrowRight } from "lucide-react";
import { personalInfo, workExperience, education, skills, projects, certifications } from "@/data/portfolioData";
import ThemeToggle from "@/components/portfolio/ThemeToggle";

const NeoBrutalistPortfolio = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 border-b-4 border-foreground">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
              Available for Work
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-none tracking-tight">
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="text-primary">{personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          <div className="mt-8 max-w-2xl">
            <p className="text-xl md:text-2xl font-bold uppercase tracking-wide">
              {personalInfo.title}
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <a 
              href="/Abhishek_Tomar_Resume.pdf" 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-bold uppercase tracking-wide border-4 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-[6px_6px_0px_0px_hsl(var(--primary))]"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-background font-bold uppercase tracking-wide border-4 border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12">
            {[
              { href: personalInfo.linkedin, icon: Linkedin, label: "LI" },
              { href: personalInfo.github, icon: Github, label: "GH" },
              { href: personalInfo.leetcode, icon: ExternalLink, label: "LC" },
              { href: `tel:${personalInfo.phone}`, icon: Phone, label: "PH" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border-4 border-foreground bg-background hover:bg-primary hover:text-primary-foreground transition-colors font-bold"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Location Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-sm uppercase tracking-widest"
        >
          <MapPin className="w-5 h-5" />
          {personalInfo.location}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            About<span className="text-primary">_</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl border-l-8 border-primary pl-6">
            {personalInfo.about}
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Experience<span className="text-primary">_</span>
          </h2>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-4 border-foreground p-6 md:p-8 bg-card hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase">{job.company}</h3>
                    <p className="text-lg text-primary font-bold uppercase">{job.position}</p>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 border-4 border-foreground bg-secondary">
                    {job.dates}
                  </span>
                </div>
                
                <div className="space-y-4">
                  {job.highlights.map((highlight) => (
                    <div key={highlight.title} className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold uppercase text-lg">{highlight.title}</h4>
                      <p className="text-muted-foreground mt-1">{highlight.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {highlight.keywords.map((keyword) => (
                          <span key={keyword} className="px-3 py-1 text-xs font-bold uppercase bg-foreground text-background">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground bg-foreground text-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Skills<span className="text-primary">_</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-black uppercase mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-bold uppercase border-4 border-background bg-transparent hover:bg-background hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Projects<span className="text-primary">_</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-4 border-foreground p-6 bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-black uppercase">{project.title}</h3>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-sm leading-relaxed mb-4 opacity-80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs font-bold uppercase border-2 border-current">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Education<span className="text-primary">_</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-4 border-foreground p-6 bg-card"
              >
                <h3 className="text-xl font-black uppercase">{edu.institution}</h3>
                <p className="text-primary font-bold uppercase mt-2">{edu.degree}</p>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <span className="px-3 py-1 bg-secondary font-bold">{edu.dates}</span>
                  <span className="font-bold">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b-4 border-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Certs<span className="text-primary">_</span>
          </h2>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-4 border-foreground hover:bg-secondary transition-colors"
              >
                <div>
                  <h3 className="font-bold uppercase">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  {cert.grade && <span className="text-primary font-bold">{cert.grade}</span>}
                  <span className="px-3 py-1 bg-foreground text-background text-sm font-bold">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-black uppercase">
            Let's Work Together<span className="text-primary">_</span>
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block mt-6 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
          >
            {personalInfo.email}
          </a>
          <p className="mt-12 text-sm uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default NeoBrutalistPortfolio;
