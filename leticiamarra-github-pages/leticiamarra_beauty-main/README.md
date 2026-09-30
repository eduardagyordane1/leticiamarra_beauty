# Instituto Marra — pronto para GitHub Pages

## O que foi corrigido

- Recuperados os arquivos ausentes: `client/src/pages/Home.tsx`, `client/src/pages/home.css`, `client/src/pages/NotFound.tsx`, `client/src/lib/utils.ts`, `shared/const.ts`, `server/index.ts` e `patches/wouter@3.7.1.patch`.
- Projeto organizado em uma única raiz: `package.json`, `client`, `shared`, `patches` e `.github` ficam no mesmo nível.
- Mantida a correção de `packages` no `pnpm-workspace.yaml`.
- Publicação por GitHub Actions, com verificação TypeScript e geração apenas do site estático.
- Caminho de imagens, CSS e JavaScript configurado automaticamente conforme o endereço do GitHub Pages. Não precisa fixar o nome do repositório no Vite.

## Publicar no GitHub

1. Extraia o ZIP e abra a pasta `leticiamarra_beauty-main`. Você deve ver `package.json` diretamente nela.
2. Faça uma cópia de segurança do seu projeto atual. Na cópia local do repositório, coloque **o conteúdo desta pasta na raiz**, mantendo a pasta `.git` existente. Não coloque outra pasta `leticiamarra_beauty-main` dentro do repositório.
3. Confirme que `.github/workflows/deploy.yml` está diretamente na raiz do repositório, dentro de `.github/workflows`. Remova workflows antigos de publicação concorrentes caso existam. As antigas pastas duplicadas do projeto podem ser removidas depois de conferir o backup.
4. Envie todos os arquivos extraídos com GitHub Desktop ou Git. Não envie apenas o ZIP e não envie `node_modules` nem `dist`.
5. No GitHub, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**.
6. Faça o commit/push na branch `main` ou `master`. Se os arquivos já foram enviados antes de ativar Pages, abra **Actions → Publicar no GitHub Pages → Run workflow**.
7. Aguarde os jobs `build` e `deploy` ficarem verdes. O link aparece em **Settings → Pages** e no ambiente `github-pages`.

Para um repositório comum, o endereço costuma ser `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`. Use o link que o GitHub mostrar. Para outra branch, ajuste `branches` no workflow e as permissões do ambiente Pages.

**Importante:** o workflow só é reconhecido quando `.github/workflows` está na raiz real do repositório. Pelo GitHub Desktop, confirme que `.github/workflows/deploy.yml` aparece na lista de alterações antes de fazer o commit. A publicação real depende de ativar GitHub Pages e enviar os arquivos; ela não foi realizada por este pacote.

## Rodar no Windows

Instale Node.js 22.12+ ou 24. Na pasta que contém `package.json`, execute um comando por vez:

```powershell
npm install -g pnpm@10.4.1
pnpm --version
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

Abra o endereço informado pelo terminal, normalmente `http://127.0.0.1:3000/`. Mantenha o terminal aberto; Ctrl+C encerra o servidor. Se o PowerShell bloquear scripts, use o Prompt de Comando (cmd).

## Conferir a compilação

```powershell
pnpm check
pnpm build:pages
pnpm preview --host 127.0.0.1
```

Os arquivos públicos são gerados em `dist/public`. O GitHub Pages publica esses arquivos, não executa o servidor Express. Os agendamentos continuam sendo feitos pelo WhatsApp.

## Referência

https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
