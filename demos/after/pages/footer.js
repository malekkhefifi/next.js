import styles from './Footer.module.css'; // Optional: Add styles via CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} malek khefifi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;