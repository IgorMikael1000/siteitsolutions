import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "I&T Solutions — Sua Ideia, Nossa Tecnologia",
    description:
      "Criamos aplicativos e plataformas web para resolver desafios do dia a dia de pessoas e empresas.",
    path: "/",
  }),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skipLink" href="#main-content">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
