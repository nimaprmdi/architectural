import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

import "@/styles/css/styles.css";
import { Suspense } from "react";

// FONTS
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" }); // Specify subsets if needed

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={<div className="w-full h-screen bg-red-400 absolute top-0 left-0">Loading hajis</div>}>
          <Header />
          <div className="page">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
