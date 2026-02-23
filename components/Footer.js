import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer-glass ${styles.footer}`}>
      <div className={styles.content}>
        <p>© {currentYear} Vasanth Portfolio. All rights reserved.</p>
        <p className={styles.builtWith}>
          Built with <span className="text-gradient">Next.js</span> & Cyber
          Glassmorphism
        </p>
      </div>
    </footer>
  );
};

export default Footer;
