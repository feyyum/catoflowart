import styles from "./Landing.module.css";

// Section Components
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "../../components";

// UI Components
import { ScopeMarquee, NameMarquee } from "../../components";

function Landing() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <ScopeMarquee />
      <About />
      <NameMarquee />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
