# I&T Solutions

Site institucional estático construído com Next.js 16, React 19, TypeScript,
Tailwind CSS e CSS Modules.

## Desenvolvimento e validação

Requer Node.js 20.9 ou superior; `.node-version` indica Node 22.

```bash
npm ci
npm run dev
npm run optimize:images
npm run lint
npm run typecheck
npm run build
```

As imagens-fonte são mantidas em `assets-source/img/`; o script gera versões
WebP para celular e desktop em `public/media/`, além dos ícones e da imagem de
compartilhamento. O build executa essa otimização e gera a exportação estática
em `out/`.

Para metadados canônicos e sitemap com URLs absolutas, configure
`NEXT_PUBLIC_SITE_URL` com a URL pública do site. O arquivo `.env.example`
mostra o formato esperado.

## Publicação no Render

Para manter o endereço público atual, atualize o serviço Static Site existente
no Render, sem criar outro serviço:

- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `out`
- **Environment Variable:** `NEXT_PUBLIC_SITE_URL` com a URL pública atual,
  incluindo `https://`.

O arquivo de verificação do Google e os assets otimizados estão em `public/` e
serão incluídos na exportação.
