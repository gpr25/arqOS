# Integração de Leads B2B → CVCRM · Guia Operacional

> **Objetivo:** fazer os leads B2B (locação) das DUAS fontes chegarem automaticamente ao
> comercial no **CVCRM**, com rastreamento garantido. Documento feito para uma sessão futura
> retomar do zero. **Status: BLOQUEADO aguardando liberação de acesso/usuário** (2026-07-20).

---

## 1. Modelo mental (não confundir 2 coisas)

| | O que é | Serve pra |
|---|---|---|
| **A. Entrega do lead** | levar nome/telefone ao comercial | o corretor ligar |
| **B. Rastreamento** | avisar Meta/Google que houve lead | otimizar a mídia |

São canos separados. A dúvida principal do Gabriel é a **A**. A tela de pixel na publicação
do anúncio é a **B**.

**Regra de ouro:** destino único = **CVCRM**. Cada fonte etiquetada por **origem**.
**RD Station SAI do fluxo B2B** (é o elo furado onde o lead se perde hoje).

---

## 2. As duas fontes de lead

### Fonte 1 — Formulário instantâneo do Meta (anúncio de lead)
### Fonte 2 — Formulário da nova LP B2B (ainda NÃO publicada)

Ambas terminam no CVCRM.

---

## 3. Fonte 1: Meta Instant Form → CVCRM (integração NATIVA)

**Confirmado por pesquisa:** o CVCRM tem integração nativa com Meta/Facebook Lead Ads
(cvcrm.com.br/integracao/facebook). Não precisa de RD Station nem Zapier.

### ⚠️ CORREÇÃO IMPORTANTE (fonte da confusão do Gabriel)
**A conexão é iniciada DENTRO do CVCRM, NÃO dentro do Meta.**

- Na tela do Meta (`Ferramentas › Formulários de anúncios de lead › Lead Integration ›
  Conectar CRM`), o dropdown só lista os parceiros diretos do Meta (Google Sheets, Zapier,
  HubSpot, Salesforce...). **O CVCRM NÃO aparece aí e nunca vai aparecer.** Isso é normal,
  não é erro. **Não é nessa tela que se integra.**
- O modelo nativo é o inverso: **o CVCRM "puxa" o lead do Meta**, logando no Facebook e
  pedindo permissão de ler os formulários da Página.

### Passo a passo (feito no painel do CVCRM)
1. CVCRM › **Integrações → Meta / Facebook Lead Ads**.
2. Clicar em conectar → abre **login do Facebook**.
3. Logar com a conta que é **Administradora da Página** do Shopping e **autorizar** o acesso
   aos leads.
4. O CVCRM lista as Páginas e os formulários → **escolher o formulário** do anúncio.
5. **Mapear os campos** (é onde a maioria erra): Nome→nome, WhatsApp→telefone,
   Segmento→campo customizado. Definir **origem = "Meta Ads B2B"**.
6. Testar com um lead de mentira e confirmar que caiu no CVCRM.

**Papel do Gabriel na tela do Meta = ZERO configuração.** Só precisa: (a) ser **Admin da
Página**, e (b) clicar "autorizar" no popup do Facebook quando o CVCRM pedir.

### Plano B (só se o nativo falhar)
Na própria tela "Conectar CRM" do Meta existe **Zapier**. Fluxo: Meta → Zapier → API CVCRM.
Mais trabalhoso; usar só se o nativo não rolar.

### 🚩 Alerta do print (2026-07-20)
No topo da tela de formulários aparecia **"New Google Sheets Integration"** ATIVA num
formulário. Alguém já ligou uma saída de leads pra uma planilha Google. **Checar se é
intencional** — senão há lead caindo numa planilha esquecida. Ao ligar o CVCRM,
provavelmente **remover a do Sheets** pra não duplicar.

---

## 4. Fonte 2: Formulário da LP → CVCRM (via API)

A LP é estática (arquivo em `marketing/lp-b2b/lp-shopping-cidade-b2b.html`), ainda **não
publicada**. Arquitetura definida:

1. Publicar a LP no **Netlify** (estático, plano gratuito).
2. **Netlify Function** guarda o **token** do CVCRM (nunca no HTML) e faz `POST` na API:
   `https://{subdominio}.cvcrm.com.br/api/v1/...` (auth **e-mail + token**, campos
   nome/email/telefone/origem, limite 200 req/min).
3. Definir **origem = "Site LP B2B"**.
4. No envio bem-sucedido, disparar evento **Lead** no pixel do Shopping (rastreamento B).

---

## 5. Rastreamento (tela de publicação do anúncio no Meta)

- ❌ **DESMARCAR "Eventos de CRM".** Ele puxava o dataset **"Pixel Morá - gas rocket"**
  (ID 185598782144030), que **NÃO é do Shopping Cidade** — é de outra conta/agência dentro
  do Business Manager. Não amarrar nada nisso.
- ✅ **Manter só "Eventos do site" = Pixel de Shopping Cidade Curitiba** (ID 234559080256415).
- 💡 No formulário instantâneo, o evento de **Lead é NATIVO do Meta** — a conversão é contada
  sozinha, com ou sem pixel. Rastreamento do lead **já garantido**. Pode publicar sem medo
  dessa seção.
- **"Eventos de CRM"** (devolver ao Meta o status down-funnel: "lead virou cliente" pra
  otimizar por qualidade) = **fase 2**, só depois do CVCRM ligado e alimentando de volta.

---

## 6. Pendências para destravar (cobrar do comercial / TI Gadens)

- [ ] Liberação do **usuário/acesso** (bloqueio atual)
- [ ] Acesso **admin ao CVCRM** (configurar as integrações)
- [ ] Gabriel ser **Administrador da Página** do Meta (autorizar integração nativa)
- [ ] **Subdomínio** do CVCRM + **e-mail + token** de API (para a LP)
- [ ] **Código de origem** usado pelos leads (etiquetar as duas fontes)

Nada publica (nem anúncio nem LP) até o acesso sair.

---

## 7. Estado dos entregáveis relacionados

- **Copy do anúncio:** PRONTA em `marketing/campanhas/copy-anuncio-b2b-meta-forms.md`
  (V1 recomendada + V2, hook âncora "Você tem a melhor loja da rua errada", botão `Saiba mais`).
- **LP B2B:** existe em `marketing/lp-b2b/lp-shopping-cidade-b2b.html`, não publicada.
- **Formulário instantâneo do Meta:** já desenvolvido pelo Gabriel; falta conectar ao CVCRM.

---

*Atualizado 2026-07-20. Quando o acesso sair: começar pela Fonte 1 (nativa, mais rápida),
testar com lead-fantasma, depois publicar a LP (Fonte 2).*
