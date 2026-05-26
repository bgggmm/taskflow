import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "TaskFlow - Herramienta de Productividad",
  description: "Gestiona tareas, colabora en equipo y aumenta tu productividad con TaskFlow.",
  keywords: ["productividad", "gestión de tareas", "equipos", "SaaS", "task management"],
  authors: [{ name: "TaskFlow" }],
  openGraph: {
    title: "TaskFlow - Herramienta de Productividad",
    description: "La forma más inteligente de gestionar proyectos y tareas.",
    images: [{ url: "/og-image.jpg" }],
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
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1 pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}