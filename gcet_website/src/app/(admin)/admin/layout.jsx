"use client";
import AdminState from "@/contexts/admin/AdminState";

export default function RootLayout({ children }) {
  return (
    <>
      <AdminState>{children}</AdminState>
    </>
  );
}
