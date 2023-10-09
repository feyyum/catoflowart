import styles from "./ProjectBox.module.css";
import { THEME } from "../../../lib/Constants";

function ProjectBox({ title = "", fullRounded = false, theme = THEME.PINK }) {
  return (
    <div
      className={`${styles.container} ${fullRounded && styles.full_rounded}`}
    >
      <div className={`${styles.inner_container} ${styles[theme]}`}>
        <h1 className={styles.project_title}>{title}</h1>
      </div>
    </div>
  );
}

export default ProjectBox;
