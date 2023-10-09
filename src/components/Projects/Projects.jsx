import styles from "./Projects.module.css";
import { ProjectBox } from "../";
import { THEME } from "../../lib/Constants";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h1 className={styles.content_title}>/PROJECTS</h1>
        <ProjectBox title="01 | Cancer Through Flow" />
        <div className={styles.mini_projects}>
          <ProjectBox title="02 | RARE" fullRounded theme={THEME.WHITE} />
          <ProjectBox title="03 | BrAIn" theme={THEME.BLUE} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
