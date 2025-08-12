# Museu Virtual do Suvaco do Cristo - Web App

Código fonte da página web do Museu Virtual do Suvaco do Cristo. 

Esta documentação baseia-se em Linux Ubuntu (Ou outras distribuições baseadas em Debian)

## Instação e execução

Geralmente, projetos [Node.js](https://nodejs.org/pt) utiliza-se do [npm](https://www.hostinger.com.br/tutoriais/o-que-e-npm), gerenciador de pacotes muito comum da linguagem.

Para instalar Node.js e npm em linux, rode:

```bash
sudo apt update
sudo apt install nodejs npm
```

Para checar se foram instaladas corretamente, os seguintes comandos devem retornar as versões destes softwares:

```bash
node -v
npm -v
```

Então, clone o repositório do projeto. Lembrando que para esta etapa é necessário ter uma [chave SSH registrada na sua conta do GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account):

```bash
git clone git@github.com:museuvirtualsuvaco/web-app.git
```

Todo projeto tem, em sua raíz, um arquivo chamado *package.json* que lista diversas de suas configurações, incluindo as dependências do projeto. Para instalá-las:

```bash
npm install
```

Na seção *scripts* desse arquivo, há algumas palavras que podem ser passados como argumentos para o comando *npm*, que indica qual comando será executado. O script *dev* é o comando que se utiliza quando se quer rodar o projeto em ambiente de desenvolvimento, geralmente com a funcionalidade de *hot reloading*. O script *build* gera código o código "compilado" na pasta dist, que será servido em ambiente de produção. Por fim, o script *start* serve o código existente na pasta build, sendo o comando que serve o código em ambiente de produção de fato.

Em ambiente dev:

```bash
npm run dev
```

No modo dev, as alterações feitas no código serão atualizadas em tempo real enquanto o comando anterior estiver rodando.

Em produção:

```bash
npm run build && npm start
```