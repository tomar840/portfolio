import { motion } from "framer-motion";
import { workExperience } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-primary mb-6"
        >
          <span className="text-muted-foreground">$</span> ls experience/
        </motion.div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{job.company}</h3>
                    <p className="font-mono text-sm text-primary">{job.position}</p>
                  </div>
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  {job.dates}
                </span>
              </div>

              <div className="space-y-4 ml-0 sm:ml-12">
                {job.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + hIndex * 0.05 }}
                    className="group"
                  >
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {highlight.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {highlight.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
