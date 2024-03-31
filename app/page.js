import styles from "./page.module.css";
import Header from "./components/header/header";
import Banner from "./components/home-img/bannerImage";
import Service from "./components/service-section/service";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <section className={styles.bannerContainer}>
        <Banner />
      </section>
      <section className={styles.servicesContainer}>
        <Service />
      </section>
    </div>
  );
}
