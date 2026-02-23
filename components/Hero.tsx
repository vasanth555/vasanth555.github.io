import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.greeting}>Hi there, I am</p>
          <h1 className={styles.title}>
            Vasantha Kumar Selvaraj <br />
            <span className="text-gradient">Full Stack Web Developer</span>
          </h1>
          <p className={styles.description}>
            Dynamic developer with{" "}
            <span className={styles.highlight}>7+ years of experience</span>{" "}
            designing scalable apps using React.js, Node.js, and Angular. Proven
            expertise in creating reusable libraries and employing TDD
            practices.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#projects" className={`glass-panel ${styles.primaryBtn}`}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageGlow}></div>
          <img
            src="/profile.png"
            alt="Profile Picture"
            className={`glass-panel ${styles.profileImage}`}
          />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
