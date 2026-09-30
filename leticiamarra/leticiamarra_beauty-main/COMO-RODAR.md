# Instituto Marra — como rodar o projeto

Guia para executar no Windows a versão atualizada do site enviada em `leticiamarra_beauty-main.zip`.

## 1. Instalar as ferramentas

- **Node.js 22.12 ou superior dentro da versão 22, ou Node.js 24.** Download: https://nodejs.org/pt-br/download
- **Visual Studio Code (opcional, mas facilita editar):** https://code.visualstudio.com/

O npm é instalado junto com o Node.js. Depois da instalação, feche e abra novamente o terminal ou o VS Code.

Abra o **Prompt de Comando (cmd)** e confira:

```bat
node -v
npm -v
```

Os dois comandos devem mostrar um número de versão.

Instale o pnpm na versão indicada pelo projeto:

```bat
npm install -g pnpm@10.4.1
pnpm --version
```

## 2. Extrair o ZIP e abrir a pasta correta

1. Clique com o botão direito em `leticiamarra_beauty-main.zip` e escolha **Extrair Tudo**.
2. Entre na pasta extraída `leticiamarra_beauty-main`.
3. Abra `leticia-marra-beauty-site-completo`.
4. Abra `leticia-marra-beauty-site`.

**Esta última é a pasta do projeto:** nela estão `package.json`, `pnpm-lock.yaml`, `vite.config.ts` e a pasta `client`.

No Explorador de Arquivos, estando nessa pasta, clique na barra de endereço, digite `cmd` e pressione Enter. O terminal será aberto no local correto.

Se preferir usar o VS Code, abra essa mesma pasta em **Arquivo → Abrir Pasta** e depois **Terminal → Novo Terminal**. Selecione **Command Prompt/Prompt de Comando** no menu de perfis do terminal.

> A pasta `previas`, na raiz do ZIP, contém imagens do site. Para executar a página interativa, siga os próximos passos.

## 3. Instalar as dependências

No terminal aberto na pasta que contém `package.json`, execute:

```bat
pnpm install --frozen-lockfile
```

Aguarde terminar. É necessária conexão com a internet para baixar os pacotes. Essa etapa cria a pasta `node_modules` e normalmente só precisa ser repetida se as dependências mudarem ou se essa pasta for removida.

## 4. Iniciar o site

Execute:

```bat
pnpm dev --host 127.0.0.1
```

Abra no navegador o endereço exibido no terminal. Normalmente será:

**http://127.0.0.1:3000/**

Se a porta 3000 estiver ocupada, o Vite poderá escolher outra; use o endereço que ele informar.

- Deixe o terminal aberto enquanto usa o site.
- Ao salvar alterações no código, o navegador normalmente atualiza automaticamente.
- Para encerrar, pressione **Ctrl + C** no terminal.
- Para abrir novamente outro dia, entre na mesma pasta e execute `pnpm dev --host 127.0.0.1`.

> Não abra `client/index.html` com dois cliques nem use a extensão Live Server para este projeto. Ele precisa ser iniciado pelo Vite com o comando acima.

## 5. Onde editar

Todos os caminhos abaixo partem da pasta que contém `package.json`.

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `client/src/pages/Home.tsx` | Textos, procedimentos, Hidragloss, contatos e links |
| `client/src/pages/home.css` | Cores, espaçamentos, layout e adaptação para celular |
| `client/src/img/` | Fotos, vídeos, capas dos vídeos e material do Hidragloss |
| `client/index.html` | Título da aba, descrição do site e fontes |
| `client/public/favicon.svg` | Ícone da aba do navegador |

## 6. Conferir a versão de produção

Execute, um comando por vez:

```bat
pnpm check
pnpm build
pnpm preview --host 127.0.0.1
```

- `check`: verifica os tipos do TypeScript.
- `build`: gera a versão de produção; os arquivos públicos ficam em `dist/public`.
- `preview`: permite conferir essa versão no navegador. Abra o endereço informado no terminal, geralmente `http://127.0.0.1:4173/`.

Depois de novas alterações, rode `pnpm build` novamente antes de conferir com `preview`.

Esses comandos executam o site no seu computador. **Não publicam o site na internet.** Para desenvolvimento e conferência no Windows, use `dev` e `preview`; o script `start` do projeto usa sintaxe de variável de ambiente de Linux/macOS.

## 7. Resolver problemas comuns

| Problema | O que fazer |
| --- | --- |
| `node`, `npm` ou `pnpm` não é reconhecido | Confira a instalação, feche e reabra o terminal. Para pnpm, repita a instalação da etapa 1. |
| `package.json` não encontrado | Abra o terminal na pasta `leticia-marra-beauty-site`, conforme a etapa 2. |
| PowerShell diz que a execução de scripts está desabilitada | Abra o **Prompt de Comando (cmd)** e execute os mesmos comandos nele. |
| Dependência ou módulo não encontrado | Rode `pnpm install --frozen-lockfile` na pasta do projeto e tente novamente. |
| Erro de versão do Node.js | Confira `node -v` e instale uma das versões indicadas na etapa 1. |
| Erro de incompatibilidade do lockfile | Confira `pnpm --version` e use pnpm 10.4.1. Preserve `pnpm-lock.yaml`. |
| O navegador não consegue acessar o site | Confira se o terminal continua executando e copie o endereço completo exibido nele. |

Não é necessário configurar banco de dados ou arquivo `.env` para visualizar esta versão. Os botões de agendamento abrem o WhatsApp; a confirmação do horário acontece por lá.

## Referência técnica

Requisitos do Vite: https://vite.dev/guide/

A versão do pnpm e os comandos deste guia foram baseados no `package.json` do projeto enviado.
