import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

import "@/styles/css/styles.css";

// FONTS
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" }); // Specify subsets if needed

export default async function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={montserrat.className}>
        <Header />
        <div className="page">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
