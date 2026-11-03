"use client";

import { useState } from "react";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  variant?: "home" | "vitta";
};

const homeLinks = [
  ["Início", "#inicio"],
  ["Sobre Nós", "#sobre"],
  ["Aplicativos", "#produtos"],
  ["Plataformas Sob Medida", "#plataformas"],
  ["Contato", "#contato"],
];

const vittaLinks = [
  ["Funcionalidades", "#funcionalidades"],
  ["Como funciona", "#como-funciona"],
  ["Conheça as telas", "#telas"],
];

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = variant === "home" ? homeLinks : vittaLinks;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          I&amp;T Solutions
        </a>
        <button
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          aria-label="Navegação principal"
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
          id="site-navigation"
        >
          {links.map(([label, href]) => (
            <a
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className={styles.navCta}
            href="https://vittabeauty.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"Teste Gratuitamente"}
          </a>
        </nav>
      </div>
    </header>
  );
}
