# Plano de melhoria do site I&T Solutions

## Contexto atual

O projeto é uma vitrine institucional estática, migrada para:

- Next.js 16 com App Router;
- React 19 e TypeScript;
- Tailwind CSS e CSS Modules;
- Exportação estática para publicação no Render.

As páginas atuais são a página inicial, a apresentação do Vitta Beauty e a
política de privacidade. O site não possui backend, formulários com
processamento ou lógica de negócio própria. Os links do Vitta Beauty levam a
um produto externo.

O Render deve continuar usando o serviço Static Site atual para preservar o
endereço público. A configuração recomendada é:

- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `out`

O arquivo de verificação do Google e as imagens ficam em `public/` para serem
incluídos na exportação.

## O que já está funcionando

- As três páginas são geradas como conteúdo estático.
- Menu responsivo e carrossel de capturas do Vitta Beauty são interativos.
- Os botões de chamada para ação do Vitta Beauty usam o texto “Teste
  Gratuitamente”.
- Os links de contato e os ícones de e-mail, WhatsApp, Instagram, Facebook e
  YouTube estão presentes no rodapé da página inicial.
- As imagens-fonte são mantidas em `assets-source/img/`; o build gera WebP para
  telas pequenas e grandes, reduzindo o total transferido das imagens de
  2.765.552 bytes para cerca de 902.296 bytes.
- SEO inclui favicon, ícone Apple, imagem Open Graph, `robots.txt` e sitemap.
  Canonicals e URLs absolutas dependem de `NEXT_PUBLIC_SITE_URL`.
- Há link para pular ao conteúdo, foco visível, suporte a movimento reduzido e
  anúncio acessível do slide atual.
- Lint, verificação de tipos e build passaram na validação mais recente.
- A auditoria não encontrou vulnerabilidades nas dependências. Os alertas
  moderados transitivos de `minimatch` foram resolvidos com um override para a
  versão corrigida, sem downgrade do ESLint. `npm audit`, lint, verificação de
  tipos e build passaram após a atualização.

## Melhorias priorizadas

### 1. Otimizar imagens

**Prioridade:** alta  
**Impacto esperado:** reduzir transferência de dados e melhorar carregamento,
especialmente em dispositivos móveis.

As imagens são geradas em formatos WebP responsivos durante o build, já que a
exportação estática não depende de um otimizador de imagens em runtime.

**Ações**

- Gerar capturas e imagens WebP responsivas usando
  `npm run optimize:images`; os originais ficam preservados em
  `assets-source/img/`.
- Gerar tamanhos apropriados para desktop e dispositivos móveis.
- Definir dimensões e prioridade de carregamento de forma coerente com a
  posição de cada imagem na página.
- Verificar se as capturas continuam legíveis e sem distorção em telas menores.

**Critérios de conclusão**

- Imagens principais carregam corretamente na exportação estática.
- Não há perda visual perceptível nas imagens em desktop ou celular.
- O peso total das imagens exportadas é medido e reduzido em relação à versão
  original.

### 2. Completar SEO técnico e compartilhamento

**Prioridade:** alta  
**Impacto esperado:** melhorar apresentação em buscadores e ao compartilhar
links.

**Ações**

- Favicon SVG/PNG, ícone Apple, imagem de compartilhamento e metadados Open
  Graph/Twitter foram adicionados.
- `robots.txt` e sitemap são gerados para as rotas estáticas.
- URLs canônicas e URLs absolutas do sitemap são ativadas por
  `NEXT_PUBLIC_SITE_URL`; configure essa variável com o domínio público atual.
- Manter o arquivo de verificação do Google publicado na raiz do site.

**Critérios de conclusão**

- Arquivos de SEO são incluídos em `out/`.
- Cada página apresenta título e descrição próprios; Open Graph e canonicals
  usam a URL configurada.
- Com `NEXT_PUBLIC_SITE_URL` definido durante o build, o sitemap lista as três
  rotas publicadas.

### 3. Validar acessibilidade e experiência em dispositivos móveis

**Prioridade:** alta  
**Impacto esperado:** tornar o site mais fácil de usar em diferentes telas e
por pessoas que usam teclado ou tecnologias assistivas.

**Ações**

- Testar navegação por teclado, ordem de foco e foco visível em todas as
  páginas.
- Revisar contraste de texto, botões e ícones.
- Testar abertura e fechamento do menu em larguras pequenas e médias.
- Testar o carrossel com teclado e leitor de tela, incluindo anúncio da tela
  atual, descrição das imagens e controles.
- Conferir os textos alternativos das imagens e os nomes acessíveis dos links.
- Conferir que as capturas de painéis permaneçam legíveis em celular.
- Capturas podem ser abertas em tamanho ampliado caso os detalhes fiquem
  pequenos na visualização em celular.

**Critérios de conclusão**

- Todas as ações principais podem ser realizadas por teclado.
- Estados de foco são perceptíveis e os controles têm nomes acessíveis.
- Menu, carrossel, conteúdo e imagens funcionam sem cortes nos tamanhos de tela
  suportados.

### 4. Refinar e unificar a identidade visual

**Prioridade:** média  
**Impacto esperado:** aumentar consistência e reconhecimento da marca.

A página institucional e a página do Vitta Beauty usam identidades visuais
distintas. É necessário decidir se essa distinção é intencional ou se ambas
devem compartilhar mais elementos.

**Ações**

- Definir cores, tipografia, escala de espaçamento, raios de borda e estilos de
  botão compartilhados.
- Aproximar as duas páginas nos elementos comuns, mantendo características
  próprias do produto se isso fizer parte da estratégia da marca.
- Manter “Teste Gratuitamente” como chamada principal nas áreas do Vitta
  Beauty e assegurar que ações secundárias tenham menor destaque.
- Rever hierarquia visual, leitura e espaçamento das seções em telas pequenas.

**Critérios de conclusão**

- Elementos compartilhados têm aparência consistente entre páginas.
- A chamada principal é fácil de localizar sem competir com chamadas
  secundárias.
- O layout mantém hierarquia e leitura adequadas em desktop e celular.

### 5. Registrar e estabilizar o ambiente de desenvolvimento e deploy

**Prioridade:** média  
**Impacto esperado:** reduzir diferenças entre máquinas locais e build do
Render.

**Ações**

- Documentar e manter o requisito mínimo de Node.js usado pelo Next.js 16.
- `.node-version` especifica Node 22 e `package.json` declara o mínimo
  suportado (20.9).
- Manter o lockfile atualizado junto com alterações de dependências.
- Usar `npm ci` no Render para instalar as versões registradas no lockfile.
- Confirmar no painel que o serviço continua sendo um Static Site existente,
  com publicação de `out`, sem criar um novo serviço.
- Garantir que o arquivo de verificação do Google continue presente após cada
  build.

**Critérios de conclusão**

- `npm ci`, lint, verificação de tipos e build funcionam em ambiente limpo.
- O Render publica o conteúdo de `out/`, usa `NEXT_PUBLIC_SITE_URL` e preserva
  o endereço público atual.
- O arquivo de verificação e os assets necessários estão disponíveis no site
  publicado.

### 6. Acompanhar dependências de desenvolvimento

**Prioridade:** média  
**Impacto esperado:** manter ferramentas de build e validação atualizadas sem
introduzir regressões.

O alerta de `minimatch` foi resolvido com um override no `package.json` para
manter toda a árvore de dependências em uma versão corrigida, compatível com o
projeto. Reavalie ou remova o override quando as dependências consumidoras
adotarem essa versão diretamente.

**Ações**

- Revisar periodicamente os alertas de `npm audit`, distinguindo dependências
  de produção das de desenvolvimento.
- Atualizar dependências de forma controlada, sem aplicar correções forçadas
  que provoquem downgrades ou alterações incompatíveis.
- Após atualizações, executar lint, verificação de tipos e build.

**Critérios de conclusão**

- Alertas são revisados e atualizados com uma decisão registrada.
- O build e as verificações continuam passando após cada atualização.

### 7. Centralizar tokens visuais

**Prioridade:** baixa  
**Impacto esperado:** facilitar ajustes futuros de tema e reduzir duplicação de
valores de estilo.

**Ações**

- Centralizar cores, tipografia, espaçamentos e outros valores recorrentes em
  tokens CSS ou na configuração apropriada do Tailwind.
- Reutilizar os tokens nos CSS Modules das páginas e componentes.

**Critérios de conclusão**

- Valores visuais recorrentes têm uma fonte única de manutenção.
- A aparência existente permanece preservada após a refatoração.

## Ordem recomendada

1. Otimização de imagens.
2. SEO técnico e metadados de compartilhamento.
3. Testes de acessibilidade e responsividade.
4. Refinamento visual e alinhamento da identidade entre páginas.
5. Estabilização do ambiente e acompanhamento das dependências.
6. Centralização dos tokens visuais.

## Fora do escopo atual

- Backend, autenticação, banco de dados ou processamento de pagamentos.
- Alterações no produto Vitta Beauty hospedado fora deste repositório.
- Mudança do endereço público ou criação de outro serviço no Render.

Esses itens só devem ser considerados se surgirem novos requisitos de produto.
