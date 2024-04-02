import styles from "./page.module.css";
import Header from "./components/header/header";
import Banner from "./components/home-img/bannerImage";
import Service from "./components/service-section/service";
import ContactUs from "./components/contact-us/contactUs";
import Blog from "./components/blog/blog";
import About from "./components/about/about";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Banner />
      <Service />
      <Blog />
      <About />
      <ContactUs />
    </div>
  );
}