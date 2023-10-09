import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>/HAKKIMIZDA</h1>
          <div className={styles.desc_container}>
            <p>
              <span className={styles.pink}>CaToFlow</span>, İstanbul Teknik
              Üniversitesi Fen-Edebiyat Fakültesi’nde kurulmuş ikinci proje
              takımı ve Teknofest yarışmasında finalist olan ilk takımıdır.
              Takımımızın adı, “
              <span className={styles.pink}>Cancer Through Flow</span>” yani
              “Akıştaki Kanser”den almaktadır. Bu ad, takımın kurulmasına vesile
              olmuş ilk projemiz{" "}
              <span className={styles.pink}>
                meme kanseri tanı ve takip kiti
              </span>
              nden gelmektedir.
            </p>
            <p>
              Takımımızın vizyonu, bilimin yol göstericiliğinde, yaşam bilimleri
              alanında ülkemize ve dünyaya katkı sağlayan projeler üreten bir
              takım olmaktır. Takımımızın misyonu ise, vizyonumuz doğrultusunda
              bir araya gelen ekiplerden oluşan takımımızla, ortaya yenilikçi
              projeler çıkarmak ve katıldığımız yarışmalarda başarılı sonuçlar
              elde etmektir. Meme kanseri tanı ve takip kiti projesine ek olarak
              başka projelerimiz de bulunmaktadır. Bu projeler ise nadir
              hastalıklara odaklanmış olan{" "}
              <span className={styles.pink}>CaToFlow-Rare</span> ve yapay zeka
              ile sağlık alanını birleştiren{" "}
              <span className={styles.pink}>CaToFlow-BrAIn</span> alt
              takımlarının bünyesinde toplanmıştır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
