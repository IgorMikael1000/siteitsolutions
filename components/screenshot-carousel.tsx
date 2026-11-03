"use client";

import { useState } from "react";
import { ResponsiveImage } from "@/components/responsive-image";
import styles from "./screenshot-carousel.module.css";

const slides = [
  {
    src: "/media/vittabeauty/slide_1",
    alt: "Tela inicial com resumo do próximo atendimento, solicitações e atalhos",
    caption: "Início — visão geral da rotina profissional",
  },
  {
    src: "/media/vittabeauty/slide_2",
    alt: "Agenda profissional com visualizações por dia, semana e mês",
    caption: "Agenda — organize horários e atendimentos",
  },
  {
    src: "/media/vittabeauty/slide_3",
    alt: "Cadastro e pesquisa de clientes com preferências e observações",
    caption: "Clientes — mantenha contatos e histórico organizados",
  },
  {
    src: "/media/vittabeauty/slide_4",
    alt: "Cadastro de serviços com descrição, sinal, preço, duração e custo de material",
    caption: "Serviços — configure seus procedimentos e valores",
  },
  {
    src: "/media/vittabeauty/slide_5",
    alt: "Controle financeiro com receitas, despesas, custos e lucro",
    caption: "Financeiro — acompanhe valores previstos e realizados",
  },
  {
    src: "/media/vittabeauty/slide_6",
    alt: "Relatórios de faturamento, atendimentos, cancelamentos e despesas",
    caption: "Relatórios — acompanhe indicadores e resultados",
  },
  {
    src: "/media/vittabeauty/slide_7",
    alt: "Página de agendamento online para compartilhar com as clientes",
    caption: "Agendamento online — compartilhe seu link com as clientes",
  },
];

export function ScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  function showSlide(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <div
      aria-label="Telas do Vitta Beauty"
      className={styles.carousel}
      role="region"
    >
      <figure className={styles.frame}>
        <a
          aria-label={`Ampliar tela ${activeIndex + 1} do Vitta Beauty`}
          href={`${slide.src}-1440.webp`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ResponsiveImage
            alt={slide.alt}
            className={styles.image}
            height={653}
            mobileSrc={`${slide.src}-768.webp`}
            priority={activeIndex === 0}
            src={slide.src}
            width={1440}
          />
        </a>
        <figcaption>{slide.caption}</figcaption>
      </figure>
      <div className={styles.controls}>
        <button
          aria-label="Ver tela anterior"
          onClick={() => showSlide(-1)}
          type="button"
        >
          <span aria-hidden="true">←</span>
        </button>
        <span aria-hidden="true">
          {activeIndex + 1} / {slides.length}
        </span>
        <span aria-atomic="true" aria-live="polite" className={styles.srOnly}>
          Tela {activeIndex + 1} de {slides.length}: {slide.caption}
        </span>
        <button
          aria-label="Ver próxima tela"
          onClick={() => showSlide(1)}
          type="button"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
