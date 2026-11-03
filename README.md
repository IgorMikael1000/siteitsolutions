# I&T Solutions

Site institucional estático construído com Next.js 16, React 19, TypeScript,
Tailwind CSS e CSS Modules.

## Desenvolvimento e validação

Requer Node.js 20.9 ou superior.

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

O build gera a exportação estática em `out/`.

## Publicação no Render

Para manter o endereço público atual, atualize o serviço Static Site existente
no Render, sem criar outro serviço:

- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `out`

O arquivo de verificação do Google e as imagens estão em `public/` e serão
incluídos na exportação.
