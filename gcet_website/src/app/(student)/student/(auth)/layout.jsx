"use client";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const storedAuthorization =
      sessionStorage.getItem("authorization") ||
      localStorage.getItem("authorization");

    if (storedAuthorization) {
      router.replace("/student/dashboard");
    }
  }, [router]); // Add router as a dependenc
  return (
    <>
      <Header href={"/admin/login"} text={"Admin Portal"} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
