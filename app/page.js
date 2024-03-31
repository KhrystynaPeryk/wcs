import styles from "./page.module.css";
import Header from "./components/header/header";
import Banner from "./components/home-img/bannerImage";
import Service from "./components/service-section/service";
import ContactUs from "./components/contact-us/contactUs";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Banner />
      <Service />
      <ContactUs />
    </div>
  );
}