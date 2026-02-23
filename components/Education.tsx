import styles from "./Education.module.css";

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  details: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "University College of Engineering Villupuram",
    date: "May 2018",
    details: "CGPA: 7.61",
  },
];

interface CertificationItem {
  title: string;
  validation: string;
}

const certificationData: CertificationItem[] = [
  {
    title: "AWS Certified Associate Developer",
    validation: "Validation: 6DP5XLRDF1141M96",
  },
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    validation: "Validation: 466q5n",
  },
  {
    title: "Certified Full Stack Professional",
    validation: "(MERN/MEAN)",
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={`text-gradient ${styles.sectionTitle}`}>Education</h2>
          <div className={styles.list}>
            {educationData.map((edu, idx) => (
              <div key={idx} className={`glass-panel ${styles.card}`}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <div className={styles.meta}>
                  <span className={styles.date}>{edu.date}</span>
                  <span className={styles.details}>{edu.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={`text-gradient ${styles.sectionTitle}`}>
            Certifications
          </h2>
          <div className={styles.list}>
            {certificationData.map((cert, idx) => (
              <div key={idx} className={`glass-panel ${styles.card}`}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                {cert.validation && (
                  <p className={styles.certValidation}>{cert.validation}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
