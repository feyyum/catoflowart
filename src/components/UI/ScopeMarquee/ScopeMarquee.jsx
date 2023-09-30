import Marquee from "react-fast-marquee";
import styles from "./ScopeMarquee.module.css";

function ScopeMarquee() {
  return (
    <div className={styles.container}>
      <Marquee direction="right" speed={50}>
        <p>MİKROBİYOLOJİ</p>
        <p>KİMYA</p>
        <p>YAPAY ZEKA</p>
      </Marquee>
    </div>
  );
}

export default ScopeMarquee;
