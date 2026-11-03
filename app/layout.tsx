import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I&T Solutions — Sua Ideia, Nossa Tecnologia",
  description:
    "Criamos aplicativos e plataformas web para resolver desafios do dia a dia de pessoas e empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
