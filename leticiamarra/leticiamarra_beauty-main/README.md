# Instituto Marra — visual e interações atualizados

Esta é a versão completa redesenhada, com todos os sete serviços, incluindo Hidragloss. Para usar este visual, extraia o ZIP em uma nova pasta e siga `COMO-RODAR.md`. Não basta substituir apenas Home.tsx: esta versão também usa novos estilos, imagens e configurações.

## Novidades

- Paleta vinho, rosé e creme, retrato em destaque e cartões organizados.
- Seletor de interesses e filtros por rosto, corpo e lábios.
- Janela de detalhes para cada serviço, com fechamento pelo botão ou pela tecla Escape.
- Hidragloss em destaque em Nossos serviços e em seção própria.
- Menu móvel, perguntas expansíveis e galeria com os três vídeos originais.
- WhatsApp com mensagem específica para cada procedimento.

## Executar

Abra `leticia-marra-beauty-site-completo/leticia-marra-beauty-site`, onde está `package.json`. Use Node.js 22.12+ ou 24 e pnpm 10.4.1.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

Abra o endereço indicado no terminal. Consulte `COMO-RODAR.md` para o passo a passo completo no Windows.

## Validação

TypeScript e build de produção concluídos. Testados: detalhes dos procedimentos, fechamento de janelas por Escape e botão, contraindicações, seleção de interesses, filtros, perguntas, menu móvel e galeria. Layout verificado em 320, 390, 768 e 1440 px, sem rolagem horizontal indevida. Imagens de prévia em `previas`.

O site não foi publicado. Agendamentos são consultados e confirmados pelo WhatsApp.
