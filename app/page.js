import styles from "./page.module.css";
import Header from "./components/header/header";
import Banner from "./components/home-img/bannerImage";
import Service from "./components/service-section/service";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <Banner />
      </section>
      <section className={styles.container}>
        <Service />
      </section>
    </>
  );
}
