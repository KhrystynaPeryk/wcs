// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Craft Squad",
  description: "Crafting Your Online Vision from A to Z, with Expert Assistance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
