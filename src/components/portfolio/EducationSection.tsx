import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-primary mb-6"
        >
          <span className="text-muted-foreground">$</span> cat education.json
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">{edu.institution}</h3>
                  <p className="font-mono text-sm text-primary">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.dates}</p>
                  <p className="text-sm text-muted-foreground italic">{edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-primary mb-6"
        >
          <span className="text-muted-foreground">$</span> ls certifications/
        </motion.div>

        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                    {cert.grade && (
                      <span className="text-xs font-mono text-primary">{cert.grade}</span>
                    )}
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
