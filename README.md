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
<br>

# Documentação Completa – Configuração de Pipeline no Heroku

## 1. Visão Geral

O **Heroku Pipeline** conecta múltiplos aplicativos para automatizar o fluxo de implantação, geralmente em estágios como **staging → production**.  
Cada app no pipeline roda em um dyno independente (com custo conforme tipo e uso).

**Características principais:**

- Pipeline gratuito
- Cada ambiente (staging e produção) com seu dyno
- Staging usa **Eco dyno** (USD 5/mês, até 1000h, dorme após 30min inatividade)
- Produção usa **Basic** ou **Standard‑1X dyno**, conforme necessário

<details>
<summary>Mais detalhes</summary>

- Eco dyno: indicado para staging, custo baixo, mas com suspensão após inatividade.  
- Basic dyno: custo aproximado USD 7/mês, para produção com baixo tráfego.  
- Standard‑1X dyno: custo aproximado USD 25/mês, para produção com requisitos maiores.

</details>

---

## 2. Pré-requisitos

- Conta Heroku com app de produção ativo  
- Projeto local em Git, com arquivos:  
  - `package.json`  
  - `Procfile` no diretório raiz  
- Pelo menos 1 dyno ativo em produção e outro em staging

---

## 3. Instalação da CLI e Login

```
curl https://cli-assets.heroku.com/install.sh | sh
```

```
heroku login
```

---

## 4. Verificar Aplicativo de Produção

```
heroku apps
```


---

## 5. Criar Pipeline e Associar Produção

```
heroku pipelines:create meu-pipeline -a meu-app-prod --stage production
```


---

## 6. Criar App de Staging e Adicionar ao Pipeline

```
heroku apps:create meu-app-staging
```

```
heroku pipelines:add meu-pipeline -a meu-app-staging --stage staging
```

---

## 7. Deploy para Staging

```
heroku git:remote -a meu-app-staging --remote staging
```
```
git add .
```
```
git commit -m "Configuração pipeline"
```
```
git push staging main:master
```


---

## 8. Escalar Dyno Eco no Staging

```
heroku ps:scale web=1:eco --app meu-app-staging
```

```
heroku ps --app meu-app-staging
```


---

## 9. Promover Staging para Produção

```
heroku pipelines:promote -r staging
```


> Ou use o botão **“Promote”** disponível no dashboard do Heroku.

---

## 10. Custos Envolvidos

| Recurso            | Preço Aproximado | Observações                       |
|--------------------|------------------|---------------------------------|
| Pipeline           | Gratuito         |                                 |
| Eco Dyno (staging) | USD 5/mês        | Dorme após 30 minutos de inatividade |
| Basic Dyno (prod)  | USD 7/mês        | Para produção de baixo tráfego  |
| Standard-1X Dyno   | USD 25/mês       | Para produção com mais demanda  |
| Add-ons            | Variável         | Banco de dados, cache etc.       |

---

## 11. Resumo de Comandos

```
curl https://cli-assets.heroku.com/install.sh | sh
heroku login

heroku apps

heroku pipelines:create meu-pipeline -a meu-app-prod --stage production

heroku apps:create meu-app-staging
heroku pipelines:add meu-pipeline -a meu-app-staging --stage staging

heroku git:remote -a meu-app-staging --remote staging
git add .
git commit -m "Setup staging"
git push staging main:master

heroku ps:scale web=1:eco --app meu-app-staging

heroku pipelines:promote -r staging
```

<br>

# Guia para Deploy de Atualizações no Pipeline Heroku

Este documento deve ser consultado sempre que for necessário fazer deploy de atualizações nos ambientes de **staging** e **produção** do pipeline Heroku.

---

## Passo 1: Login no Heroku CLI

Antes de rodar qualquer comando, faça o login na CLI do Heroku para autenticação:

```
heroku login
```

Siga as instruções para autenticar sua conta.

---

## Passo 2: Preparar Atualizações Localmente

- Faça as modificações necessárias no código no seu ambiente local.
- Verifique que os arquivos essenciais (`package.json`, `Procfile`) estejam corretos e atualizados.

---

## Passo 3: Commit das Alterações

No diretório do projeto, faça o commit das suas mudanças:

```
git add .
```
```
git commit -m "Mensagem clara e descritiva sobre a atualização"
```

Aguarde a solicitação de PR ser **Aprovada**.

---

## Passo 4: Enviar Código para o Ambiente de Staging

Envie o código para o app de staging configurado no pipeline:

```
git push staging main:master
```

- O remote `staging` deve estar previamente configurado.
- Aguarde a conclusão do deploy no Heroku (verifique status pelo dashboard ou CLI).

---

## Passo 5: Testar no Ambiente de Staging

Acesse o app de staging e realize os testes necessários para validar as alterações antes de liberar para produção.

---

## Passo 6: Promover Atualização para Produção

Se os testes foram satisfatórios, promova a versão do staging para produção:

```
heroku pipelines:promote -r staging
```


Também é possível realizar esta ação clicando no botão **“Promote”** no dashboard do Heroku.

---

## Passo 7: Monitorar Produção

Após a promoção, monitore o app em produção para garantir seu funcionamento correto.

---

## Dicas Importantes

- Teste exaustivamente em staging antes de promover para produção.
- Use mensagens claras e objetivas nos commits.
- Utilize o painel do Heroku para monitoramento e análise de logs se necessário.

---

## Resumo dos Comandos

```
heroku login

git add .
git commit -m "Descrição da atualização"
git push staging main:master
```

Após testes aprovados

```
heroku pipelines:promote -r staging
```