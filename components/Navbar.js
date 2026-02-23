import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navLinks = [
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className={`glass-nav ${styles.navbar}`}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Vasanth Portfolio</span>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path} className={styles.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
