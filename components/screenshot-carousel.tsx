"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./screenshot-carousel.module.css";

const slides = [
  {
    src: "/img/vittabeauty/slide_1.png",
    alt: "Tela inicial com resumo do próximo atendimento, solicitações e atalhos",
    caption: "Início — visão geral da rotina profissional",
  },
  {
    src: "/img/vittabeauty/slide_2.png",
    alt: "Agenda profissional com visualizações por dia, semana e mês",
    caption: "Agenda — organize horários e atendimentos",
  },
  {
    src: "/img/vittabeauty/slide_3.png",
    alt: "Cadastro e pesquisa de clientes com preferências e observações",
    caption: "Clientes — mantenha contatos e histórico organizados",
  },
  {
    src: "/img/vittabeauty/slide_4.png",
    alt: "Cadastro de serviços com descrição, sinal, preço, duração e custo de material",
    caption: "Serviços — configure seus procedimentos e valores",
  },
  {
    src: "/img/vittabeauty/slide_5.png",
    alt: "Controle financeiro com receitas, despesas, custos e lucro",
    caption: "Financeiro — acompanhe valores previstos e realizados",
  },
  {
    src: "/img/vittabeauty/slide_6.png",
    alt: "Relatórios de faturamento, atendimentos, cancelamentos e despesas",
    caption: "Relatórios — acompanhe indicadores e resultados",
  },
  {
    src: "/img/vittabeauty/slide_7.png",
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
    <div aria-label="Telas do Vitta Beauty" className={styles.carousel}>
      <figure className={styles.frame} aria-live="polite">
        <a
          aria-label={`Ampliar tela ${activeIndex + 1} do Vitta Beauty`}
          href={slide.src}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={slide.alt}
            className={styles.image}
            height={870}
            priority={activeIndex === 0}
            src={slide.src}
            width={1917}
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
        <span aria-live="polite">
          {activeIndex + 1} / {slides.length}
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
