# Museu Virtual do Suvaco do Cristo - Web App

Código fonte da página web do Museu Virtual do Suvaco do Cristo. 

Esta documentação baseia-se em Linux Ubuntu (Ou outras distribuições baseadas em Debian)

## Instalação e execução

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
npm run build
export PORT=3000 # Ou outra porta à sua escolha. Obs: Esse comando tem que ser dado em cada novo terminal aberto.
npm start
```

## Deploy no Heroku

O Heroku é a plataforma escolhida para fazer o deploy desta aplicação. É uma ferramenta que baseia-se em uma forte integração entre o repositório Git e o ambiente do deploy. A documentação recomendada para iniciantes, além de ser a fonte principal das instruções a seguir, é a seguinte: [*Getting Started on Heroku with Node.js*](https://devcenter.heroku.com/articles/getting-started-with-nodejs). Uma documentação mais avançada e que deve estudada pela equipe de infra do projeto é: [*Deploying Node.js Apps on Heroku*](https://devcenter.heroku.com/articles/deploying-nodejs). Uma introdução em vídeo à ferramenta que pode ser proveitosa aos novos membros é: [Subindo Aplicações Web em Produção | Aprendendo HEROKU - Fábio Akita](https://www.youtube.com/watch?v=TLRW_xTnQwY).

Existem alguns conceitos sobre Heroku importantes a serem compreendidos antes de começar a fazer deploys (Como dynos e o Procfile), por isso recomendamos que consultem as referências dadas acima.

A forma recomendada de instalar o Heroku CLI, no nosso caso, é através do npm. Para tal, é necessário ter node e npm instalados na máquin

```bash
sudo npm install -g heroku
heroku --version            # Para verificar sucesso da instalação
```

Então, é necessário fazer login através da Heroku CLI:

```bash
heroku login
```

**OBSERVAÇÃO**: Nessa etapa, será aberta uma página web com o formulário de login do site. No momento atual do projeto (Abril/2025), é necessário uma autenticação em dois fatores que exige um código gerado em um *authenticator app* no celular do @VitorMotta. Isso precisa ser alterado, por ser um gargalo em nosso processo de deploy. Para membros da extensão que estejam lendo isso em um futuro distante, alterem esta documentação caso isso já tenha mudado. (TO DO: Desabilitar MFA da conta Heroku, é possível?)

Caso já exista um projeto Heroku no ar, dê o comando:

```bash
heroku git:remote -a <nome-do-projeto> # 10-04-2025: O nome do projeto no momento é: museu-virtual-suvaco
```

**Obs:** Caso seja necessário criar um novo projeto Heroku, dê o comando abaixo. (Este caso é exceção!)

```bash
heroku create
```

Quando houver uma alteração que deseja-se subir para produção, 

```bash
git add src/minhaPagina.js src/meuComponetne.js  # Apenas um exemplo
git commit -m "Minhas alterações"
git push heroku main # Ou master, ou o nome da branch que se quer upar no heroku
```

Para se certificar que pelo menos um *Dyno* está rodando para servir o site, execute:

``` bash
heroku ps:scale web=1
```
E então, para visualizar o site no ar:

```bash
heroku open
```