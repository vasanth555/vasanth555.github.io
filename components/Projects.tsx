import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "sivalingammilks.com (IoT & PWA)",
    description:
      "Engineered a full-stack PWA for milk delivery & bill management. Secured milk transactions using an IoT-based framework programmed with Arduino + Bluetooth.",
    tech: ["MERN Stack", "GCP Cloud Functions", "Arduino IoT", "RFID/QR"],
    image: "https://placehold.co/600x400/09090e/00f0ff?text=Sivalingam+Milks",
    link: "https://sivalingammilks.com",
  },
  {
    id: 2,
    title: "Microapp Migration System",
    description:
      "Scalable migration from legacy monolithic AngularJS applications into modular React.js microapps for a massive enterprise client.",
    tech: ["React.js", "React Testing Library", "Webpack", "JIRA"],
    image: "https://placehold.co/600x400/09090e/ff00ff?text=Microapp+React",
    link: "#",
  },
  {
    id: 3,
    title: "NPM Component Library",
    description:
      "Built and published a strictly typed, reusable common components library to a private corporate NPM registry to enhance engineering throughput.",
    tech: ["React.js", "NPM", "Node.js", "GitHub Actions"],
    image: "https://placehold.co/600x400/09090e/00ffcc?text=NPM+Library",
    link: "#",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`glass-panel ${styles.projectCard}`}>
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
        <div className={styles.overlay}>
          <a href={project.link} className={styles.viewBtn}>
            View Project
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStack}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.header}>
        <h2 className={`text-gradient ${styles.sectionTitle}`}>
          Featured Projects
        </h2>
        <p className={styles.sectionSubtitle}>A selection of my recent work</p>
      </div>
      <div className={styles.grid}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
