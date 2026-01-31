import { motion } from "framer-motion";
import { Trophy, Award, Medal, Calendar } from "lucide-react";

const certificates = [
   {
    title: "ASP.NET Core Web API Development",
    issuer: "Microsoft / Online Training",
    year: "2023",
    website: "https://learn.microsoft.com/",
  },
  {
    title: "Angular – The Complete Guide",
    issuer: "Udemy (Maximilian Schwarzmüller)",
    year: "2023",
    website: "https://www.udemy.com/",
  },
];

const AwardsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Awards Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Trophy className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Awards
          </h2>
        </motion.div> */}

        {/* Awards Grid */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-20">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-border shadow-card hover:shadow-glow transition-shadow duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {award.issuer}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {award.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {award.description}
                </p>
              </motion.div>
            );
          })}
        </div> */}

        {/* Certificates Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Certificates
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-gradient p-5 rounded-xl border border-border shadow-soft flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                  {/* <span className="truncate">ID: {cert.credentialId}</span> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
