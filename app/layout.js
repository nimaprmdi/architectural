import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

import "@/styles/css/styles.css";
import { Suspense } from "react";
import Preloader from "@/components/Preloader";

// FONTS
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" }); // Specify subsets if needed

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={<Preloader />}>
          <Header />
          <div className="page">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
