import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "I&T Solutions — Sua Ideia, Nossa Tecnologia",
  description:
    "Criamos aplicativos e plataformas web para resolver desafios do dia a dia de pessoas e empresas.",
};

const platforms = [
  {
    image: "/img/dash_1.png",
    alt: "Painel demonstrativo de visão geral com indicadores, métricas por aplicativo e atividades recentes",
    eyebrow: "Monitoramento",
    title: "Exemplo de Monitoramento — Visão Geral",
    description:
      "Um exemplo de painel central para acompanhar indicadores importantes da operação. Em vez de se adaptar a um software genérico, sua empresa pode definir quais informações precisa monitorar — como vendas, acessos, estoque ou produtividade — e como elas devem aparecer na tela inicial.",
  },
  {
    image: "/img/dash_2.png",
    alt: "Painel demonstrativo de gestão de usuários com busca, filtros, status e ações",
    eyebrow: "Gestão operacional",
    title: "Exemplo de Gestão Operacional e de Usuários",
    description:
      "Uma demonstração de gestão de usuários e clientes, com filtros, informações de cadastro e ações organizadas em uma única tela. Os módulos podem ser planejados de acordo com o fluxo de trabalho da sua equipe, priorizando as ferramentas necessárias para uma operação mais clara e ágil.",
  },
  {
    image: "/img/dash_3.png",
    alt: "Painel demonstrativo de desempenho financeiro com faturamento bruto, taxas e repasse líquido estimado",
    eyebrow: "Inteligência financeira",
    title: "Exemplo de Inteligência Financeira e Regras de Negócio",
    description:
      "Um modelo de acompanhamento financeiro com faturamento, taxas e estimativas de repasse. A plataforma pode ser planejada para considerar as regras de monetização e os meios de pagamento utilizados pela empresa, conforme os requisitos do projeto.",
  },
];

const contactLinks = [
  {
    icon: "bi-envelope-fill",
    label: "E-mail",
    detail: "itsolutions0709@gmail.com",
    href: "mailto:itsolutions0709@gmail.com",
  },
  {
    icon: "bi-whatsapp",
    label: "WhatsApp",
    detail: "+55 (88) 99311-8230",
    href: "https://wa.me/5588993118230",
  },
  {
    icon: "bi-instagram",
    label: "Instagram",
    detail: "@_itsolutionss_",
    href: "https://www.instagram.com/_itsolutionss_?vrfl=bGNrMHAwajBrZnZy",
  },
  {
    icon: "bi-facebook",
    label: "Facebook",
    detail: "I&T Solutions",
    href: "https://www.facebook.com/share/19iVftQCFg/",
  },
  {
    icon: "bi-youtube",
    label: "YouTube",
    detail: "@ITSolutions-SuaideianossaTecno",
    href: "https://www.youtube.com/@ITSolutions-SuaideianossaTecno",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className={styles.hero} id="inicio">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.badge}>✦ Novo lançamento</p>
              <h1>Sua rotina de beleza, mais organizada.</h1>
              <p className={styles.heroDescription}>
                Conheça o Vitta Beauty: a plataforma para organizar sua agenda,
                cuidar das clientes e acompanhar os resultados do seu negócio
                em um só lugar.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={styles.primaryButton}
                  href="https://vittabeauty.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Teste Gratuitamente <span aria-hidden="true">→</span>
                </a>
                <a className={styles.outlineButton} href="/vittabeauty/">
                  Conhecer a plataforma
                </a>
              </div>
              <ul className={styles.highlights}>
                <li>✓ Agenda online</li>
                <li>✓ Clientes e serviços</li>
                <li>✓ Gestão financeira</li>
              </ul>
            </div>
            <figure className={styles.heroPreview}>
              <a
                aria-label="Ampliar prévia da tela inicial do Vitta Beauty"
                href="/img/vittabeauty/slide_1.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="Prévia do painel inicial do Vitta Beauty com agenda, solicitações e indicadores do negócio"
                  className={styles.heroImage}
                  height={870}
                  priority
                  src="/img/vittabeauty/slide_1.png"
                  width={1917}
                />
              </a>
              <figcaption>
                Vitta Beauty — sua rotina profissional em um só lugar
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section} id="sobre">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Sobre a I&amp;T Solutions</p>
              <h2>Tecnologia que começa entendendo pessoas e negócios</h2>
              <p>
                Criamos aplicativos e plataformas web para resolver desafios do
                dia a dia de pessoas e empresas.
              </p>
              <p>
                Cada projeto parte de uma necessidade concreta: entender a
                rotina, definir uma solução adequada e desenvolver ferramentas
                claras para quem vai usar.
              </p>
            </div>
            <div className={styles.threeColumns}>
              {[
                ["01", "Entender", "Conhecemos o desafio, a rotina e os objetivos para definir o que a solução precisa fazer."],
                ["02", "Desenvolver", "Transformamos os requisitos em uma experiência digital organizada e alinhada ao uso real."],
                ["03", "Evoluir", "Planejamos soluções que possam acompanhar novas necessidades e objetivos do negócio."],
              ].map(([number, title, description]) => (
                <article className={styles.processCard} key={number}>
                  <span className={styles.cardNumber}>{number}</span>
                  <span aria-hidden="true" className={styles.processMark}>
                    {number === "01" ? "◎" : number === "02" ? "◇" : "↗"}
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.products}`} id="produtos">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Soluções I&amp;T Solutions</p>
              <h2>Tecnologia para diferentes rotinas</h2>
              <p>
                Conheça nossas plataformas e aplicativos, cada um pensado para
                um tipo de negócio.
              </p>
            </div>
            <article className={styles.featuredProduct}>
              <a
                aria-label="Conheça o Vitta Beauty"
                className={styles.featuredImage}
                href="/vittabeauty/"
              >
                <Image
                  alt="Painel inicial do Vitta Beauty com resumo da agenda e indicadores"
                  height={870}
                  src="/img/vittabeauty/slide_1.png"
                  width={1917}
                />
              </a>
              <div className={styles.featuredCopy}>
                <p className={styles.productLabel}>✦ Novo lançamento</p>
                <h3>Vitta Beauty</h3>
                <p>
                  Agenda, clientes, serviços, WhatsApp e financeiro reunidos em
                  uma plataforma feita para profissionais da beleza.
                </p>
                <div className={styles.productActions}>
                  <a className={styles.vittaButton} href="/vittabeauty/">
                    Conhecer o Vitta Beauty
                  </a>
                  <a
                    className={styles.secondaryButton}
                    href="https://vittabeauty.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Teste Gratuitamente
                  </a>
                </div>
              </div>
            </article>
            <div className={styles.appGrid}>
              <article className={styles.appCard}>
                <div className={styles.appTitle}>
                  <Image
                    alt="Ícone do Roterizador PRO"
                    height={80}
                    src="/img/icon_roterizadorpro.jpeg"
                    width={80}
                  />
                  <h3>Roterizador PRO</h3>
                </div>
                <p>
                  Otimize rotas, navegue com GPS e organize as finanças das suas
                  entregas.
                </p>
                <a
                  className={styles.storeLink}
                  href="https://play.google.com/store/apps/details?id=app.itsolutions.roterizadorpro"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true">▶</span>
                  <span>
                    <small>DISPONÍVEL NO</small>
                    <strong>Google Play</strong>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className={styles.appCard}>
                <div className={styles.appTitle}>
                  <Image
                    alt="Ícone do AgendaCare"
                    height={80}
                    src="/img/icon_agendacare.jpeg"
                    width={80}
                  />
                  <h3>AgendaCare</h3>
                </div>
                <p>
                  Organize atendimentos e pacientes, registre evoluções e envie
                  lembretes.
                </p>
                <a
                  className={styles.storeLink}
                  href="https://play.google.com/store/apps/details?id=app.itsolutions.agendacare"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true">▶</span>
                  <span>
                    <small>DISPONÍVEL NO</small>
                    <strong>Google Play</strong>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.platforms}`}
          id="plataformas"
        >
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Plataformas Sob Medida: o seu sistema, com as suas regras
              </h2>
              <p>
                Desenvolvemos painéis administrativos e sistemas web
                personalizados para a realidade da sua empresa. Para ilustrar
                nosso padrão de interface e organização, apresentamos abaixo
                algumas telas demonstrativas do ecossistema interno da I&amp;T
                Solutions.
              </p>
              <p>
                Estes modelos mostram possibilidades de apresentação e
                controle. O seu projeto será desenvolvido conforme as
                funcionalidades, métricas e necessidades do seu negócio.
              </p>
            </div>
            <div className={styles.platformList}>
              {platforms.map((platform, index) => (
                <article className={styles.platformItem} key={platform.image}>
                  <figure
                    className={`${styles.platformPreview} ${index % 2 ? styles.reverse : ""}`}
                  >
                    <a href={platform.image} target="_blank" rel="noreferrer">
                      <Image
                        alt={platform.alt}
                        height={870}
                        loading="lazy"
                        src={platform.image}
                        width={1917}
                      />
                    </a>
                    <figcaption>
                      Tela demonstrativa — clique na imagem para ampliar.
                    </figcaption>
                  </figure>
                  <div className={styles.platformCopy}>
                    <p className={styles.eyebrow}>{platform.eyebrow}</p>
                    <h3>{platform.title}</h3>
                    <p>{platform.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.platformCta}>
              <h3>Do Conceito ao Código</h3>
              <p>
                Seja um aplicativo, um portal para clientes ou um sistema de
                gestão interna, a tecnologia deve se moldar à sua empresa — e
                não o contrário. Conte para nós sobre sua necessidade
                operacional e vamos desenvolver uma plataforma alinhada aos
                seus objetivos de crescimento.
              </p>
              <a className={styles.vittaButton} href="#contato">
                Vamos conversar sobre seu projeto
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contato">
          <div className={styles.sectionInner}>
            <h2>Entre em Contato</h2>
            <div className={styles.contactGrid}>
              {contactLinks.map((contact) => (
                <a
                  className={styles.contactCard}
                  href={contact.href}
                  key={contact.label}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                >
                  <i
                    aria-hidden="true"
                    className={`bi ${contact.icon} ${styles.contactIcon}`}
                  />
                  <span className={styles.contactText}>
                    <strong>{contact.label}</strong>
                    <small>{contact.detail}</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
