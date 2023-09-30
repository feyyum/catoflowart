import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <p className={styles.copyright}>
          © 2024 İstanbul Teknik Üniversitesi | Cancer Through Flow
        </p>
      </div>
    </div>
  );
}

export default Footer;
