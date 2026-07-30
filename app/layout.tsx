import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Health Nurse | Career Mentoring",
  description:
    "Practical career mentoring for nurses and healthcare professionals exploring digital health, customer success, health informatics and other career pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
