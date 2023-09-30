import Marquee from "react-fast-marquee";
import styles from "./NameMarquee.module.css";

function NameMarquee() {
  return (
    <div className={styles.container}>
      <Marquee direction="left" speed={90}>
        <p>İSTANBUL TEKNİK ÜNİVERSİTESİ CANCER THROUGH FLOW</p>
        <p>İSTANBUL TEKNİK ÜNİVERSİTESİ CANCER THROUGH FLOW</p>
        <p>İSTANBUL TEKNİK ÜNİVERSİTESİ CANCER THROUGH FLOW</p>
      </Marquee>
    </div>
  );
}

export default NameMarquee;
