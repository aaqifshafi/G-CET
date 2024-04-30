"use client";
import "@/app/globals.css";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
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
      router.replace("/admin/dashboard");
    }
  }, [router]); // Add router as a dependenc
  return (
    <>
      <Header href="/student/login" text={"Student Portal"} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
