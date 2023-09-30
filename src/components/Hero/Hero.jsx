import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.hero_text_container} ${styles.inner_container}`}
      >
        Hero
      </div>
      <div className={styles.hero_content_container}>
        <div
          className={`${styles.inner_container} ${styles.hero_inner_container}`}
        >
          <div className={styles.stats_container}>
            <div className={`${styles.stats_row} ${styles.stat_blue}`}>
              <div className={styles.stat_container}>
                <div className={styles.stat_value}>3</div>
                <div className={styles.stat_title}>Proje</div>
              </div>
              <div className={styles.stat_container}>
                <div className={styles.stat_value}>15</div>
                <div className={styles.stat_title}>Üye</div>
              </div>
            </div>
            <div className={`${styles.stats_row} ${styles.stat_white}`}>
              <div className={styles.stat_container}>
                <div className={styles.stat_value}>2</div>
                <div className={styles.stat_title}>Sponsor</div>
              </div>
              <div className={styles.stat_container}>
                <div className={`${styles.stat_value} ${styles.stat_bold}`}>
                  5
                </div>
                <div className={styles.stat_title}>Ödül</div>
              </div>
            </div>
          </div>
          <div className={styles.image_container}>
            <div className={styles.button}></div>
            <div className={styles.image}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
