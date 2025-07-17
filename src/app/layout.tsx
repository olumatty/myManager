import type { Metadata } from "next";
import { Inter as InterFont, Archivo as ArchivoFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = InterFont({ subsets: ["latin"] });
const archivo = ArchivoFont({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "myManager",
  keywords: [
    "time management",
    "task management",
    "productivity app",
    "goal setting",
    "time tracking",
    "task prioritization",
    "efficiency tools",
    "personal productivity",
  ],
  description: "A personal project to manage tasks and notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${archivo.className}} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
