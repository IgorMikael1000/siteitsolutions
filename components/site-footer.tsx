type SiteFooterProps = {
  vitta?: boolean;
};

export function SiteFooter({ vitta = false }: SiteFooterProps) {
  return (
    <footer className="bg-slate-950 px-4 py-7 text-center text-sm text-white">
      <p className="mb-2">
        © 2026 I&amp;T Solutions. Todos os direitos reservados.
      </p>
      {vitta ? (
        <a className="text-slate-300 underline-offset-4 hover:underline" href="/">
          Voltar ao site da I&amp;T Solutions
        </a>
      ) : (
        <a
          className="text-blue-300 underline-offset-4 hover:underline"
          href="/politica-privacidade/"
        >
          Política de Privacidade
        </a>
      )}
    </footer>
  );
}
