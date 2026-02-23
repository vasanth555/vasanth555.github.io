import styles from "./Skills.module.css";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Angular (9+)",
      "HTML/CSS",
      "JavaScript",
      "Progressive Web Apps (PWA)",
      "Webpack",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (Lambda, S3, API Gateway)",
      "GCP (Cloud Functions)",
      "CI/CD (GitHub Actions)",
      "Linux Shell Scripting",
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "Git",
      "JIRA",
      "Confluence",
      "TDD (Jest, RTL)",
      "NPM Publishing",
      "AI Tools (Cursor.ai, ChatGPT)",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={`text-gradient ${styles.sectionTitle}`}>
        Technical Skills
      </h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className={`glass-panel ${styles.skillCategory}`}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
