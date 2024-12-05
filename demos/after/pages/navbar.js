// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import des styles CSS Module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a className={styles.link}>About</a>
      </Link>
      <Link href="/projects" passHref>
        <a className={styles.link}>Projects</a>
      </Link>
      <Link href="/contact" passHref>
        <a className={styles.link}>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
