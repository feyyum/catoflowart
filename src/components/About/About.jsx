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
              Takımımızın adı, “Cancer Through Flow” yani “Akıştaki Kanser”den
              almaktadır. Bu ad, takımın kurulmasına vesile olmuş ilk projemiz
              meme kanseri tanı ve takip kitinden gelmektedir.
            </p>
            <p>
              Takımımızın vizyonu, bilimin yol göstericiliğinde, yaşam bilimleri
              alanında ülkemize ve dünyaya katkı sağlayan projeler üreten bir
              takım olmaktır. Takımımızın misyonu ise, vizyonumuz doğrultusunda
              bir araya gelen ekiplerden oluşan takımımızla, ortaya yenilikçi
              projeler çıkarmak ve katıldığımız yarışmalarda başarılı sonuçlar
              elde etmektir. Meme kanseri tanı ve takip kiti projesine ek olarak
              başka projelerimiz de bulunmaktadır. Bu projeler ise nadir
              hastalıklara odaklanmış olan CaToFlow-Rare ve yapay zeka ile
              sağlık alanını birleştiren CaToFlow- BrAIn alt takımlarının
              bünyesinde toplanmıştır.
            </p>
            <p>
              Takımımızın danışmanı İTÜ Fen Edebiyat Fakültesi Biyoloji
              Bölümü’nden Dr. Öğr. Üyesi Abdulhalim Kılıç’tır. Ek olarak Rare ve
              BrAIn alt takımlarının danışmanlığı ise İTÜ İşletme Fakültesi
              İşletme Mühendisliği Bölümünden Prof. Dr. Hatice Camgöz Akdağ
              yapmaktadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
