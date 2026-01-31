import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "Token Masters",
    location: "Amman, JO",
    period: "Oct 2023 - Present",
    description:
      "Building and maintaining scalable web applications using Laravel and modern front-end technologies. Worked on multi-tenant accounting systems, multi-vendor eCommerce platforms, real-time tracking solutions, and complex third-party integrations including payment gateways and tax systems. Contributed to system architecture, performance optimization, SEO improvements, and deployment on Linux servers while collaborating closely with the development team.",
    technologies: [
      "laravel",
      "php",
      "react",
      "js",
      "html",
      "css",
      "tailwind",
      "bootstrap",
      "mysql",
      "linux",
      "websockets",
    ],
    link: "https://www.tokenmasters.com/",
  },
  {
    title: "Angular Intern",
    company: "Palmira Software Solutions",
    location: "Amman, JO",
    period: "Jun 2023 - Oct 2023",
    description:
      "Gained hands-on experience in front-end development using Angular. Worked on building dynamic, responsive UI components, integrating APIs, managing application state, and implementing routing. Strengthened understanding of component-based architecture, TypeScript, and modern web application workflows.",
    technologies: ["angular", "typescript", "js", "html", "css"],
    link: "",
  },
];


const ExperienceSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow" />

                <div className="card-gradient p-6 rounded-xl border border-border shadow-card hover:shadow-glow transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium flex items-center gap-2">
                        {exp.company}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
