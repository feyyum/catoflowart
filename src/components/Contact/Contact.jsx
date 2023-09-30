import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h1 className={styles.title}>/ABONE OL</h1>
        <div className={styles.desc_container}>
          <p className={styles.desc}>
            Sizin için hazırladığımız en yeni ve heyecan verici içeriklerden
          </p>
          <p className={styles.desc}>
            haberdar olmak için haber akışımıza katıl!
          </p>
        </div>
        <div className={styles.func_container}>
          <div className={styles.subscribe_container}>
            <input
              type="text"
              placeholder="johndoe@example.com"
              className={styles.text_input}
            />
          </div>
          <div className={styles.contact_container}>
            <div className={styles.button}>abone ol</div>
            <h1 className={styles.contact_text}>veya</h1>
            <a
              href="mailto:info@catoflow.com"
              className={`${styles.button} ${styles.blue}`}
            >
              bize ulaş
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
