import "@/app/globals.css";
import Footer from "@/components/public/footer/Index";
import Header from "@/components/public/header/Index";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script src="/scripts/divAnimation.js" />
    </>
  );
}
