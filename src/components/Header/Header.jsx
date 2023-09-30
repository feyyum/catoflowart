import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.nav_group}>
        <a className={styles.nav_element} href="#">
          Anasayfa
        </a>
        <a className={styles.nav_element} href="#">
          Hakkımızda
        </a>
      </div>
      <h1 className={styles.title}>CaToFlow</h1>
      <div className={styles.nav_group}>
        <a className={styles.nav_element} href="#">
          Projeler
        </a>
        <a className={styles.nav_element} href="#">
          Bize Ulaşın
        </a>
      </div>
    </div>
  );
}

export default Header;
