import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GradientMesh from "@/components/GradientMesh";
import PageLoader from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow - Productividad para Equipos Modernos",
  description: "Gestiona tareas, colabora en tiempo real y lleva tu productividad al siguiente nivel.",
  keywords: ["task management", "productividad", "gestión de proyectos", "SaaS", "equipos"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageLoader />
          <GradientMesh />
          <div className="noise-overlay" />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}