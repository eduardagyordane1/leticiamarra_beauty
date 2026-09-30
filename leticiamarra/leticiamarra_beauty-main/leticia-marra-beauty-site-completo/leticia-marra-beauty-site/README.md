# Instituto Marra — site atualizado

## Executar

Requer Node.js 22 ou superior e pnpm 10.4.1.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verificar e gerar a versão de produção

```sh
pnpm check
pnpm build
pnpm preview
```

Para GitHub Pages, o workflow existente mantém `VITE_BASE=/leticiamarra_beauty/`. Se o nome do repositório mudar, ajuste essa variável. O conteúdo publicável fica em `dist/public`.

## O que mudou

- Identidade visual em vinho, rosé e creme; layout responsivo.
- Sete procedimentos com filtros por rosto, corpo e lábios.
- Hidragloss com informações transcritas e adaptadas do material fornecido; sem promessa de resultado.
- WhatsApp com mensagens por procedimento, menu móvel, perguntas expansíveis e galeria dos três vídeos originais.
- Melhorias de acessibilidade, navegação por teclado e respeito à preferência de movimento reduzido.
- Removidos botões sem ação, comandos no rodapé, favicon quebrado e analytics sem configuração.

Os contatos e a localização foram preservados do projeto original. Não foram adicionados preços. O agendamento é confirmado por WhatsApp; não há agenda automática.

Textos e contatos: `client/src/pages/Home.tsx`. Estilos: `client/src/pages/home.css`. Mídias originais: `client/src/img`.
