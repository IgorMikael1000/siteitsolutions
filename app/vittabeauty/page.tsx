import type { Metadata } from "next";
import { ResponsiveImage } from "@/components/responsive-image";
import { ScreenshotCarousel } from "@/components/screenshot-carousel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./vittabeauty.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Vitta Beauty — Mais organização para sua rotina de beleza",
  description:
    "Organize sua rotina de beleza com o Vitta Beauty: agenda online, clientes, serviços, WhatsApp e controle financeiro em um só lugar.",
  path: "/vittabeauty/",
});

const features = [
  {
    icon: "◷",
    title: "Agenda sem complicação",
    items: [
      "Compartilhe seu link para receber solicitações sem exigir conta das clientes.",
      "Visualize compromissos por dia, semana ou mês e confirme ou cancele pedidos.",
      "Configure horários, pausas e bloqueios conforme sua disponibilidade.",
    ],
  },
  {
    icon: "♡",
    title: "Clientes e serviços organizados",
    items: [
      "Cadastre procedimentos com descrição, preço, duração, custo de materiais e sinal.",
      "Pesquise clientes por nome ou WhatsApp.",
      "Consulte preferências, observações e histórico de atendimentos.",
    ],
  },
  {
    icon: "☏",
    title: "Relacionamento mais fácil",
    items: [
      "Use mensagens prontas para confirmar horários e enviar lembretes.",
      "Agradeça a visita ou responda às solicitações recebidas.",
      "Mantenha seus dados de contato e perfil profissional atualizados.",
    ],
  },
  {
    icon: "↗",
    title: "Visão do seu negócio",
    items: [
      "Registre receitas e despesas e acompanhe valores previstos ou recebidos.",
      "Veja custos e lucro para entender melhor seus resultados.",
      "Consulte faturamento, atendimentos, cancelamentos e serviços mais realizados.",
    ],
  },
];

const steps = [
  [
    "01",
    "Prepare seu espaço",
    "Atualize seu perfil, cadastre os serviços e configure seus horários de atendimento.",
  ],
  [
    "02",
    "Compartilhe seu link",
    "Envie o link de agendamento para suas clientes consultarem os serviços e solicitarem um horário sem criar conta.",
  ],
  [
    "03",
    "Acompanhe seu negócio",
    "Organize os atendimentos, mantenha contato pelo WhatsApp e acompanhe suas receitas e resultados.",
  ],
];

const trialUrl = "https://vittabeauty.vercel.app/";

export default function VittaBeautyPage() {
  return (
    <>
      <SiteHeader variant="vitta" />
      <main className={styles.page} id="main-content">
        <section className={styles.hero} id="inicio">
          <div className={styles.heroInner}>
            <div>
              <p className={styles.eyebrow}>✦ Seu espaço, seu momento</p>
              <h1>Mais organização para a sua rotina de beleza</h1>
              <p>
                Gerencie sua agenda, cadastre clientes e serviços, compartilhe
                um link para receber solicitações e acompanhe seu financeiro em
                um só lugar.
              </p>
              <p>
                E, com mensagens prontas pelo WhatsApp, fica mais fácil manter
                contato com suas clientes.
              </p>
              <a className={styles.primaryButton} href={trialUrl} target="_blank" rel="noopener noreferrer">
                Teste Gratuitamente <span aria-hidden="true">↗</span>
              </a>
              <small>Suas clientes podem solicitar um horário pelo link sem criar conta.</small>
            </div>
            <figure className={styles.screenshot}>
              <a
                aria-label="Abrir tela inicial do Vitta Beauty em tamanho ampliado"
                href="/media/vittabeauty/slide_1-1440.webp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ResponsiveImage
                  alt="Tela inicial do Vitta Beauty com resumo da agenda e atalhos para clientes, serviços e organização"
                  height={653}
                  mobileSrc="/media/vittabeauty/slide_1-768.webp"
                  priority
                  src="/media/vittabeauty/slide_1"
                  width={1440}
                />
              </a>
              <figcaption>Uma visão prática da rotina profissional.</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section} id="funcionalidades">
          <div className={styles.content}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Tudo conectado à sua rotina</p>
              <h2>
                Cuide dos atendimentos e do seu negócio em um só lugar
              </h2>
              <p>
                Ferramentas para organizar o dia a dia, atender melhor e
                acompanhar os resultados do seu espaço.
              </p>
            </div>
            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <article className={styles.featureCard} key={feature.title}>
                  <span aria-hidden="true" className={styles.featureIcon}>
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <ul>
                    {feature.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.how}`} id="como-funciona">
          <div className={styles.content}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Comece no seu ritmo</p>
              <h2>Sua rotina, mais organizada em poucos passos</h2>
            </div>
            <div className={styles.stepGrid}>
              {steps.map(([number, title, description]) => (
                <article className={styles.stepCard} key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="telas">
          <div className={styles.content}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Conheça por dentro</p>
              <h2>Uma plataforma feita para acompanhar seu trabalho</h2>
              <p>
                Veja algumas telas do Vitta Beauty. Use as setas para navegar e
                selecione uma imagem para ampliá-la.
              </p>
            </div>
            <ScreenshotCarousel />
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.cta}>
            <p className={styles.eyebrow}>Seu próximo passo</p>
            <h2>Mais organização para a sua rotina de beleza!</h2>
            <p>
              Com o Vitta Beauty, você gerencia sua agenda, cadastra clientes e
              serviços, compartilha um link para receber solicitações de
              agendamento e acompanha seu financeiro e seus resultados em um só
              lugar. E, com mensagens prontas pelo WhatsApp, fica mais fácil
              manter contato com suas clientes.
            </p>
            <a className={styles.primaryButton} href={trialUrl} target="_blank" rel="noopener noreferrer">
              Teste Gratuitamente <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter vitta />
    </>
  );
}
