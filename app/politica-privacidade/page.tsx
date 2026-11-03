import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — I&T Solutions",
  description: "Política de privacidade da I&T Solutions.",
};

const sections = [
  {
    title: "1. Coleta de Dados",
    text: "A I&T Solutions coleta informações estritamente necessárias para o funcionamento de nossos aplicativos (como o Roterizador PRO), incluindo dados de localização em segundo plano, essenciais para a funcionalidade de navegação GPS e rastreamento de rotas logísticas.",
  },
  {
    title: "2. Uso das Informações",
    text: "Os dados coletados são utilizados exclusivamente para fornecer as funcionalidades do aplicativo, autenticação de usuários e manutenção de assinaturas. Não comercializamos dados pessoais com terceiros.",
  },
  {
    title: "3. Segurança",
    text: "Implementamos rigorosas medidas de segurança, incluindo criptografia na comunicação com nossos servidores e tokenização de dados de pagamento (via Mercado Pago), garantindo a proteção das suas informações.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <nav className="bg-slate-900 px-4 py-4 text-white">
        <div className="mx-auto max-w-5xl">
          <a className="font-bold hover:underline" href="/">
            ← I&amp;T Solutions
          </a>
        </div>
      </nav>
      <article className="mx-auto my-10 max-w-5xl rounded-2xl bg-white px-6 py-10 shadow-sm sm:px-12">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-slate-500">Última atualização: Outubro de 2026</p>
        {sections.map((section) => (
          <section className="mt-8" key={section.title}>
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="mt-2 leading-7 text-slate-700">{section.text}</p>
          </section>
        ))}
        <section className="mt-8">
          <h2 className="text-xl font-bold">4. Contato</h2>
          <p className="mt-2 leading-7 text-slate-700">
            Para dúvidas sobre privacidade ou para solicitar a exclusão
            permanente dos seus dados, entre em contato através do e-mail:{" "}
            <a
              className="font-semibold text-blue-700 underline"
              href="mailto:itsolutions0709@gmail.com"
            >
              itsolutions0709@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
