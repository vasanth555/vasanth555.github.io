"use client"; // Needed since we use hooks for scroll animation

import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "STG Labs - ExtendaRetail",
    duration: "Dec 2022 - Present",
    description:
      "Developing scalable web applications using React.js and Node.js with a focus on TDD. Built and published reusable NPM libraries. Managing GCP CI/CD pipelines via GitHub Actions.",
  },
  {
    id: 2,
    role: "Application Development Senior Analyst",
    company: "Accenture (Client: Walmart)",
    duration: "Aug 2021 - Nov 2022",
    description:
      "Served as an active React.js UI Developer migrating legacy AngularJS systems to React Microapps. Mentored the team, wrote extensive React Testing Library suites, and navigated complex JIRA deliverables.",
  },
  {
    id: 3,
    role: "Senior Systems Engineer",
    company: "Infosys (Clients: Samsung SDS, Toyota)",
    duration: "Jun 2018 - Aug 2021",
    description:
      "Engineered responsive Angular 9 applications with Nest.js REST APIs. Built complex data UI with Drag-and-Drop functionality, bulk S3 uploads, and AWS Lambda deployments using the MEAN stack.",
  },
];

interface TimelineItemProps {
  exp: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 },
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <article
      ref={domRef}
      className={`glass-panel ${styles.timelineItem} ${isVisible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className={styles.timelineDot}></div>
      <div className={styles.content}>
        <h3 className={styles.role}>{exp.role}</h3>
        <span className={styles.company}>{exp.company}</span>
        <span className={styles.duration}>{exp.duration}</span>
        <p className={styles.description}>{exp.description}</p>
      </div>
    </article>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className={styles.timelineSection}>
      <h2 className={`text-gradient ${styles.sectionTitle}`}>
        Professional Experience
      </h2>
      <div className={styles.timelineContainer}>
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
