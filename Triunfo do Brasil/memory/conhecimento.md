# conhecimento.md — Aprendizados Acumulados

> Registrar aqui aprendizados sobre a operação conforme forem descobertos.
> Este arquivo cresce com o uso do sistema.

---

## Contexto do onboarding (2026-07-02)

- Gabriel entrou recentemente na Triunfo como gestor de tráfego e ainda está mapeando a operação comercial e de marketing como um todo — várias respostas do onboarding ficaram como `[PREENCHER]` por esse motivo, não por falta de contexto na empresa.
- Os PDFs originais do manual de marca (arquivos exportados do Illustrator, 50MB e 200MB) travaram o conversor de PDF local (Poppler) — o conteúdo só foi capturado com sucesso quando o Gabriel colou o texto/imagens extraídos diretamente na conversa.

---

## Aprendizados

### 2026-07-15 — Rastreamento GTM/GA4 (LP internacional)

- GA4 tem pelo menos 3 "velocidades" de exibição de dado, e confundir isso gera pânico desnecessário: **GTM Preview** e **GA4 DebugView** são quase instantâneos; **Relatórios → Tempo Real** é rápido (segundos a poucos minutos); **Admin → Eventos** e os relatórios padrão/históricos usam um pipeline de processamento que pode levar horas numa propriedade recém-criada, mesmo com tudo funcionando certo. Diagnosticar sempre pelo mais rápido primeiro.
- **Não existe** um jeito de marcar um evento como "evento-chave" (conversão) no GA4 antes dele aparecer pelo menos uma vez em Admin → Eventos → Eventos recentes. Não prometer esse atalho.
- Quando um contêiner GTM é **compartilhado entre vários sites** (comum em empresas com site institucional + LPs), qualquer tag com gatilho "All Pages" dispara em todos eles — inclusive contaminando uma propriedade GA4 nova com tráfego de outro domínio. Sempre restringir por "Nome do host" quando o container é compartilhado.

---

### 2026-07-16 — Meta Pixel: conflito de múltiplos pixels na mesma página

- **Sintoma:** com o Pixel do Meta hardcoded na LP + o GTM compartilhado
  injetando outros pixels de Meta (`1314668212218720`, `517991158551582`),
  o nosso pixel (`903988453820396`) aparecia inicializado e o `fbq.getState()`
  contava os eventos (eventCount subia), **mas nenhuma requisição saía** pra
  `facebook.com/tr` com o nosso ID. Só o pixel do GTM enviava. Por isso o
  Gerenciador de Eventos do nosso dataset ficava zerado, mesmo com a extensão
  Pixel Helper "vendo" pixel na página (só que o do GTM, não o nosso).
- **Causa:** quando há vários pixels no mesmo `fbq`, **quem inicializa primeiro
  "ganha" o ciclo de envio do fbevents**; os pixels adicionados depois contam
  eventos mas não os transmitem. No `<head>` da LP, o GTM (e seu pixel) vinha
  antes do nosso.
- **Como diagnostiquei:** Playwright na LP no ar — (1) confirmei o nosso ID no
  HTML e no `fbq.getState()`; (2) olhei `browser_network_requests` filtrando
  `facebook.com/tr` e vi só o ID intruso enviando; (3) teste isolado em
  `about:blank` com só o nosso pixel → enviou; (4) teste com o nosso pixel
  inicializado ANTES do intruso → os dois enviaram. Isso isolou "ordem" como a
  variável.
- **Correções:** (a) `fbq('trackSingle', PIXEL_ID, evento, ...)` em vez de
  `track` genérico — fixa o evento no nosso pixel e não vaza pros outros; (b)
  carregar o nosso Pixel no **topo do `<head>`, antes do GTM**. Regra geral:
  Pixel próprio que precisa conviver com GTM compartilhado tem que vir primeiro,
  ou (melhor) ficar num GTM/página sem pixels concorrentes.
- **Lição maior:** contêiner GTM compartilhado entre site institucional + LPs
  é uma fonte recorrente de dor (contaminou o GA4 antes, o Pixel agora). Pra LP
  nova, o certo é rastreamento isolado (GTM dedicado ou tudo hardcoded).

### 2026-07-16 — Google Apps Script: implantação troca a URL

- "**Nova implantação**" gera uma **URL `/exec` nova** toda vez — se a página
  aponta pra URL antiga, o webhook quebra silenciosamente. Pra atualizar o
  código **mantendo a mesma URL**: Implantar → **Gerenciar implantações** →
  lápis (✏️) na implantação existente → Versão: **"Nova versão"** → Implantar.
  O caminho do lápis é fácil de não achar; Gabriel criou várias implantações
  novas sem querer por isso.
- Segredos (ex.: token do CAPI) vão em **Configurações do projeto →
  Propriedades do script**, lidos com `PropertiesService`. Nunca no código
  (que fica no repo). Trocar o token é um lugar só: essa propriedade.

### 2026-07-16 — Google Ads: aplicação automática de recomendações

- A conta pode vir com **"Aplicação automática de recomendações" ligada**,
  incluindo automações de **lance** (Maximizar conversões, tCPA, ajustar CPA).
  Isso faz o Google **trocar a estratégia de lance sozinho**, sem aviso claro
  (aparece só um "N recomendações aplicadas automaticamente"). Ao assumir uma
  conta, checar em **Recomendações → Aplicação automática** e desligar as de
  lance/orçamento se você quer controle manual.

---

_A preencher conforme acontecerem._
