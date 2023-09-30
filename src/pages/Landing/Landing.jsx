import styles from "./Landing.module.css";

// Section Components
import { About, Contact, Footer, Header, Hero } from "../../components";

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
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
