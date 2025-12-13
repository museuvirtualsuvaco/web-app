# Museu Virtual do Suvaco do Cristo - Web App

Código fonte da página web do Museu Virtual do Suvaco do Cristo. 

Esta documentação baseia-se em Linux Ubuntu (Ou outras distribuições baseadas em Debian)

## Sumário

- [Museu Virtual do Suvaco do Cristo - Web App](#museu-virtual-do-suvaco-do-cristo---web-app)
- [Instação e execução](#insta%C3%A7%C3%A3o-e-execu%C3%A7%C3%A3o)
- [Documentação Completa – Configuração de Pipeline no Heroku](#documenta%C3%A7%C3%A3o-completa--configura%C3%A7%C3%A3o-de-pipeline-no-heroku)
  - [1. Visão Geral](#1-vis%C3%A3o-geral)
  - [2. Pré-requisitos](#2-pr%C3%A9-requisitos)
  - [3. Instalação da CLI e Login](#3-instala%C3%A7%C3%A3o-da-cli-e-login)
  - [4. Verificar Aplicativo de Produção](#4-verificar-aplicativo-de-produ%C3%A7%C3%A3o)
  - [5. Criar Pipeline e Associar Produção](#5-criar-pipeline-e-associar-produ%C3%A7%C3%A3o)
  - [6. Criar App de Staging e Adicionar ao Pipeline](#6-criar-app-de-staging-e-adicionar-ao-pipeline)
  - [7. Deploy para Staging](#7-deploy-para-staging)
  - [8. Escalar Dyno Eco no Staging](#8-escalar-dyno-eco-no-staging)
  - [9. Promover Staging para Produção](#9-promover-staging-para-produ%C3%A7%C3%A3o)
  - [10. Custos Envolvidos](#10-custos-envolvidos)
  - [11. Resumo de Comandos](#11-resumo-de-comandos)
- [Configuração Heroku, Hostinger e Cloudflare](#configuração-heroku-hostinger-e-cloudflare)
  - [Visão geral](#visão-geral)
  - [Passo 1 – Apps e pipeline no Heroku](#passo-1--apps-e-pipeline-no-heroku)
  - [Passo 2 – Criar domínio customizado no Heroku](#passo-2--criar-domínio-customizado-no-heroku)
  - [Passo 3 – Delegar DNS da Hostinger para a Cloudflare](#passo-3--delegar-dns-da-hostinger-para-a-cloudflare)
  - [Passo 4 – Registros DNS na Cloudflare](#passo-4--registros-dns-na-cloudflare)
  - [Passo 5 – SSL/TLS e regras na Cloudflare](#passo-5--ssltls-e-regras-na-cloudflare)
  - [Passo 6 – Testes finais](#passo-6--testes-finais)
- [Guia para Deploy de Atualizações no Pipeline Heroku](#guia-para-deploy-de-atualiza%C3%A7%C3%B5es-no-pipeline-heroku)
  - [Passo 1: Login no Heroku CLI](#passo-1-login-no-heroku-cli)
  - [Passo 2: Preparar Atualizações Localmente](#passo-2-preparar-atualiza%C3%A7%C3%B5es-localmente)
  - [Passo 3: Commit das Alterações](#passo-3-commit-das-altera%C3%A7%C3%B5es)
  - [Passo 4: Enviar Código para o Ambiente de Staging](#passo-4-enviar-c%C3%B3digo-para-o-ambiente-de-staging)
  - [Passo 5: Testar no Ambiente de Staging](#passo-5-testar-no-ambiente-de-staging)
  - [Passo 6: Promover Atualização para Produção](#passo-6-promover-atualiza%C3%A7%C3%A3o-para-produ%C3%A7%C3%A3o)
  - [Passo 7: Monitorar Produção](#passo-7-monitorar-produ%C3%A7%C3%A3o)
  - [Dicas Importantes](#dicas-importantes)
  - [Resumo dos Comandos](#resumo-dos-comandos)


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

## Configuração Heroku, Hostinger e Cloudflare

Esta seção descreve o passo a passo da configuração de domínio e infraestrutura usando Heroku, Hostinger e Cloudflare para o domínio `suvacodocristo.com`.

### Visão geral
-----------

- O app roda no Heroku, usando o pipeline `museu-virtual-suvaco-pipeline` com ambientes de **staging** e **produção**.
- O domínio `suvacodocristo.com` é gerenciado na Hostinger.
- A Cloudflare é usada como DNS e proxy (HTTPS, cache e segurança) para o domínio.

### Passo 1 – Apps e pipeline no Heroku
-----------------------------------

1. Acessar o dashboard do Heroku e abrir o app de produção `museu-virtual-suvaco` na aba **Settings**.  
2. Confirmar também o app de staging `museu-virtual-suvaco-staging` e o pipeline `museu-virtual-suvaco-pipeline` com os dois estágios (staging e production).  
3. Ajustar variáveis de ambiente e tipo de dyno em cada app (staging e produção) conforme necessidade do projeto.
4. Ajustar buildpacks, no nosso caso: `heroku/nodejs` e `https://github.com/heroku/heroku-buildpack-nginx`

### Passo 2 – Criar domínio customizado no Heroku


Antes de configurar DNS na Hostinger/Cloudflare, é necessário cadastrar o domínio customizado no Heroku para obter o **DNS Target**, que será usado como destino no registro CNAME da Cloudflare.

1. Acesse o dashboard do Heroku e abra o app de produção `museu-virtual-suvaco` na aba **Settings**.  
2. Localize a seção **Domains** ou **Domains and certificates**.  
3. Clique em **Add domain** e informe o domínio que será usado, por exemplo:  
   - `suvacodocristo.com`
   - `suvacodocristo.com.br`
4. Após adicionar, o Heroku exibirá um **DNS Target** (um endereço do tipo `algum-nome.herokudns.com`).  
5. Copie esse **DNS Target**, pois ele será utilizado na configuração de DNS na Cloudflare, como valor do registro CNAME para o subdomínio configurado (por exemplo, `www`).
6. Localize a seção **SSL Certificates**.
7. Clique em **Configure Certificate** e escolha **Automatic Certificate Management (ACM)** (Só é necessário um certificado)

> Observação: Utilizamos mais de um domínio e subdomínio (`suvacodocristo.com`, `www.suvacodocristo.com`, `suvacodocristo.com.br` e `www.suvacodocristo.com.br`), repita o processo adicionando cada um deles no Heroku para obter os respectivos DNS Targets.



### Passo 3 – Delegar DNS da Hostinger para a Cloudflare
----------------------------------------------------

1. No painel da Hostinger, acessar **Meus domínios** e selecionar `suvacodocristo.com`.  
2. Abrir a seção **DNS / Nameservers** do domínio.  
3. Na Cloudflare, adicionar o domínio `suvacodocristo.com` e copiar os nameservers indicados.  
4. Na Hostinger, substituir os nameservers atuais pelos fornecidos pela Cloudflare e salvar.  
5. Aguardar a propagação até a Cloudflare indicar o domínio como ativo. 

> Observação: Repita o processo para todos os domínios (`suvacodocristo.com` e `suvacodocristo.com.br`)


### Passo 4 – Registros DNS na Cloudflare
-------------------------------------

1. No dashboard da Cloudflare, selecionar o domínio `suvacodocristo.com`  
2. Ir em **DNS → Registros**.  
3. Criar um registro **CNAME** para o site, por exemplo:  
   - Nome: `suvacodocristo.com`  
   - Tipo: `CNAME`  
   - Destino: DNS Target do Heroku (ex.: `algum-nome.herokudns.com`)  
   - Proxy: ativado (nuvem laranja).  
4. Repita o processo para `www`:
   - Nome: `www`  
   - Tipo: `CNAME`  
   - Destino: DNS Target do Heroku (ex.: `algum-nome.herokudns.com`)  
   - Proxy: ativado (nuvem laranja).

> Observação: Repita o processo para todos os domínios e subdomínios (`suvacodocristo.com`, `www.suvacodocristo.com`, `suvacodocristo.com.br` e `www.suvacodocristo.com.br`)

### Passo 5 – SSL/TLS e regras na Cloudflare
----------------------------------------

1. Na Cloudflare, acessar a seção **SSL/TLS** do domínio `suvacodocristo.com`.  
2. Definir o modo de SSL adequado ( **Full** ou **Completo**).  
3. Ativar a opção de redirecionar todo o tráfego para HTTPS (por exemplo, “Always Use HTTPS”).  
4. Criar regras de página/redirecionamento se necessário, como redirecionar `suvacodocristo.com` para `www.suvacodocristo.com`.  

### Passo 6 – Testes finais
-----------------------

1. Acessar `https://suvacodocristo.com` e/ou `https://www.suvacodocristo.com` em uma aba anônima.  
2. Verificar se:  
   - O certificado HTTPS está válido (cadeado no navegador).  
   - O conteúdo carregado corresponde ao app de produção `museu-virtual-suvaco` no Heroku.  
3. Realizar um deploy via pipeline (staging → produção) e confirmar que as alterações aparecem no domínio customizado.  

> Observação: Repita o processo para todos os domínios (`suvacodocristo.com`, `www.suvacodocristo.com`, `suvacodocristo.com.br` e `www.suvacodocristo.com.br`)

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
git checkout -b nova-brach
```
> Observação: Escolha um nome de branch que faça sentido com a sua alteração

```
git add .
```
```
git commit -m "Mensagem clara e descritiva sobre a atualização"
```

```
git push origin nova-brach
```
> Observação: `nova-branch é o nome da SUA branch`

> Aguarde a solicitação de PR ser **Aprovada**.

> Após ser aprovada, confirme que está tudo certo com:
```
git status
```

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