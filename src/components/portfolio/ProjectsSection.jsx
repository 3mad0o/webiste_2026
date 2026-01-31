import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import vbc from "../../assets/images/projects/vbc.webp";
import safariTaxi from "../../assets/images/projects/safari_taxi.png";
import caarstation from "../../assets/images/projects/caarstation.jpg";
import raheeb from "../../assets/images/projects/raheeb.png";
import tabbo from "../../assets/images/projects/6abbo.png";
import furrera from "../../assets/images/projects/furrera.jpg";

const projects = [
  {
    title: "V Business Center (VBC) Website",
    description:
      "A business center platform that allows users to explore and rent office units, meeting rooms, co-working spaces, furnished offices, virtual offices, and dedicated desks. Built with a focus on usability, responsive design, and efficient data management for showcasing services and availability.",
    image: vbc,
    technologies: ["Laravel", "Bootstrap", "Yajra Datatables", "Chart.js"],
    liveUrl: "https://www.vbc.jo/",
    featured: true,
  },

  {
    title: "Safari Taxi",
    description:
      "A ride-hailing platform similar to Uber, featuring separate applications for drivers and passengers. The system supports real-time ride tracking, live location updates, in-app chat, and seamless trip management, delivering a reliable and responsive transportation experience.",
    image: safariTaxi,
    technologies: [
      "Laravel",
      "RESTful API",
      "WebSockets",
      "Live Tracking",
      "In-App Chat",
      "Yajra Datatables",
      "Bootstrap",
    ],
    liveUrl: "https://www.safari.taxi/",
    featured: true,
  },

  {
    title: "Caarstation",
    description:
      "A marketplace application for selling car parts, accessories, covers, and paint services, connecting sellers directly with buyers. The platform supports multiple payment gateways including Tamara, Tabby, MIS Pay, Madfu3, Visa, and Mastercard, providing secure and flexible checkout options. Built with Laravel and RESTful APIs, featuring an admin dashboard for managing vendors, products, orders, and transactions.",
    image: caarstation,
    technologies: [
      "Laravel",
      "RESTful API",
      "Payment Gateways",
      "Yajra Datatables",
      "Bootstrap",
    ],
    liveUrl: "https://www.caarstatin.com/",
    featured: true,
  },

  {
    title: "Raheeb",
    description:
      "A multi-vendor, multi-variation e-commerce platform built to manage diverse products, vendors, and orders efficiently.",
    image: raheeb,
    technologies: ["Bootstrap", "Laravel", "Yajra Datatable", "RESTful API"],
    liveUrl: "https://www.raheeb.sa/",
    featured: true,
  },

  {
    title: "6abbo",
    description:
      "A real estate management platform for handling properties, listings, and client interactions efficiently.",
    image: tabbo,
    technologies: ["Bootstrap", "Laravel", "Yajra Datatable", "RESTful API"],
    liveUrl: "https://www.6abbo.com/",
    featured: false,
  },

  {
    title: "Furrera",
    description:
      "A transportation platform designed for students with special needs, allowing guardians to track their children, providing ride-hailing, live tracking, and real-time communication to ensure safe and efficient travel.",
    image: furrera,
    technologies: [
      "Bootstrap",
      "Laravel",
      "Yajra Datatable",
      "RESTful API",
      "WebSocket",
      "Chat",
      "Live Tracking",
    ],
    liveUrl: "https://www.furrera.com/",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-gradient rounded-xl border border-border shadow-card overflow-hidden hover:shadow-glow transition-all duration-300"
            >
              {/* Project Image Area */}
              <div className="relative h-48 overflow-hidden bg-muted">
                {/* Overlay for better text readability and styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground shadow-sm">
                    Featured Project
                  </span>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        title="View Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
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
    </section>
  );
};

export default ProjectsSection;
