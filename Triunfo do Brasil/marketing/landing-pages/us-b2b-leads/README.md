# LP — US B2B Lead Gen (English)

Landing page para captura de leads B2B do mercado americano (food, beverage, nutracêuticos). Estática, sem build step — pronta para deploy direto no Netlify.

## Deploy no Netlify

1. Publish directory: esta pasta (`marketing/landing-pages/us-b2b-leads/`).
2. Não precisa de build command — é HTML/CSS/JS puro.
3. O formulário usa **Netlify Forms** (`data-netlify="true"`, name `us-lead-form`, honeypot anti-spam `company-website`). O Netlify detecta o form automaticamente no deploy.
4. **Depois do primeiro deploy:** ir em Site settings → Forms → Form notifications → adicionar o e-mail que deve receber os leads (ainda não definido — ver pendência abaixo).

## Leads → Google Sheets

**✅ Configurado e testado (2026-07-02).** Cada envio do formulário cai na aba `Leads` da planilha `triunfo-leads-lp-entrada`, via Google Apps Script Web App. O Netlify Forms continua capturando cada envio também, como backup silencioso.

- Código do Apps Script: [`google-apps-script.gs`](google-apps-script.gs) (já implantado na planilha do Gabriel).
- URL do webhook: colada em `SHEETS_WEBHOOK_URL` no topo do bloco correspondente em [`script.js`](script.js).
- Testado via chamada direta à API e via formulário real no navegador — ambos gravaram linha na aba `Leads` corretamente.
- **Detalhe de deploy que travou na primeira tentativa:** a opção "Quem tem acesso" precisa estar em **"Qualquer pessoa"** (não "Qualquer pessoa com Conta do Google" nem "Somente eu") — Workspace às vezes reverte essa configuração sozinho; se o webhook parar de funcionar no futuro, esse é o primeiro lugar a checar (Deploy → Gerenciar implantações → editar → "Quem tem acesso").
- Limitação conhecida (não é bug): o navegador não consegue ler a resposta do Apps Script (`mode: "no-cors"`) — por isso o Netlify continua sendo a fonte confiável pra mostrar sucesso/erro na tela pro usuário, e o Sheets recebe uma cópia em paralelo, silenciosa.

## Rastreamento — GTM + GA4 + UTM

Instalado no código (2026-07-15) e **confirmado funcionando em produção** via GTM Preview e GA4 Tempo Real (`page_view`, `form_start`, `generate_lead`, `scroll`, `user_engagement`, `first_visit` todos disparando). Restam 2 itens não fechados — ver status abaixo.

**O que já está no código:**
- Snippet do **GTM `GTM-WGZ488V`** no `<head>` + noscript após `<body>`.
- Captura de **UTM / gclid / fbclid / referrer** na chegada (script no `<head>`, antes do GTM), persistida em `sessionStorage` (first-touch por sessão).
- Evento **`generate_lead`** empurrado no `dataLayer` no sucesso do envio, com `lead_country`, `lead_product_interest`, `lead_utm_source`, `lead_utm_campaign`.
- Os campos de atribuição vão junto no envio pro Google Sheets (colunas novas — ver abaixo).

**GA4:** propriedade `Triunfo — LP US B2B`, Measurement ID **`G-8V3RQYZ2G8`**. A tag GA4 NÃO está no código — é configurada dentro do GTM.

### Status dos passos manuais (atualizado 2026-07-15)

**✅ 1. Colunas de atribuição na aba `Leads`** — feito e confirmado. Lead de teste real chegou com as 15 colunas certas preenchidas (Timestamp … Referrer).

**✅ 2. Tags configuradas e publicadas no GTM** — feito por Gabriel (versão 28 "LP - Rastreamento de Lead (GA4 generate_lead)" e versão 29 "PageView-LPNetflify", publicadas 15/07/2026). Confirmado disparando via Preview e Tempo Real.

**⚠️ Pendência real aberta: contaminação cross-site.** O contêiner `GTM-WGZ488V` é compartilhado com o site principal (`triunfodobrasil.com`). Se a tag "GA4 Configuration" ainda estiver com gatilho **All Pages**, ela também dispara lá — e hits do site antigo (`Home - Triunfo do Brasil`) foram vistos no Tempo Real da propriedade nova, contaminando os dados. **Correção:** trocar o gatilho da tag GA4 Configuration para um gatilho de "Visualização de página" com condição **Nome do host contém `netlify.app`**, e publicar de novo. Ainda não reconfirmado depois da correção — checar no Tempo Real se "Home - Triunfo do Brasil" para de aparecer.

**Se até 2026-07-16 a contaminação ou o atraso de relatório continuarem incômodos:** combinado com Gabriel criar um **contêiner GTM novo, dedicado só à LP** (sem herdar tags/gatilhos do site principal) — resolve a contaminação de vez e simplifica o debug.

**⬜ 3. Google Ads — conversão nova dedicada à LP** (bloqueado até `generate_lead` aparecer em Admin → Eventos → Eventos recentes do GA4 — ver nota de atraso abaixo):

- Ferramentas → Conversões → + Nova ação de conversão → Importar → **Google Analytics 4 (Web)** → selecionar propriedade "Triunfo — LP US B2B" → marcar `generate_lead`.
- Configurações recomendadas: Categoria "Enviar formulário de lead", Contagem "Uma".
- **NÃO reaproveitar** as conversões antigas ("Formulário", "Lead form - Submit") — essas são do site `triunfodobrasil.com` e estão em "Configuração incorreta"; problema separado, do site, não da LP.
- Pré-requisito: marcar `generate_lead` como evento-chave em Admin → Eventos → Eventos recentes (aba "Eventos principais" → toggle na linha do evento). **Não existe** um jeito de registrar isso manualmente antes do evento aparecer nessa lista — é preciso esperar o processamento.

### ⚠️ Atraso de relatório do GA4 é normal — não é bug

Numa propriedade recém-criada, o **Tempo Real** e o **DebugView** mostram eventos em segundos/minutos — mas o **Admin → Eventos → Eventos recentes** e o aviso de "coleta não ativa" no stream usam um pipeline de processamento separado, que pode levar horas pra atualizar mesmo com tudo funcionando certo. Ordem de diagnóstico, do mais rápido pro mais lento: **GTM Preview → GA4 Tempo Real (Relatórios → Visão geral em tempo real) → GA4 DebugView → Admin → Eventos (o mais lento)**. Se o Tempo Real já confirma o evento, está tudo certo — só esperar o resto processar.

### Como testar

1. GTM → **Visualizar** (Preview) → abrir a LP com `?utm_source=teste&utm_medium=cpc&utm_campaign=teste&gclid=abc` → confirmar que a tag GA4 dispara no page view e o evento `generate_lead` dispara ao enviar o form.
2. GA4 → **Relatórios → Visão geral em tempo real** → confirmar `page_view`/`generate_lead` chegando (mais rápido e mais confiável que Admin → Eventos pra uma checagem imediata).
3. Enviar um lead de teste real e confirmar que as colunas UTM aparecem preenchidas na aba `Leads`.

### ⚠️ Consentimento (GDPR) — pendência conhecida

Rastreamento instalado **sem banner de consentimento** (decisão do Gabriel, 2026-07-15). Como a Alemanha é mercado-alvo, disparar GA4 sem consentimento pra visitante da UE é uma exposição legal a resolver depois — quando for a hora, o caminho é Google Consent Mode v2 + um banner simples (aceitar/recusar) que só libera as tags após o aceite.

## Conversão no Google Ads (2026-07-16) — ✅ funcionando

O evento `generate_lead` foi marcado como **evento-chave** no GA4 e importado pro **Google Ads** como conversão **"Triunfo — LP US B2B (web) generate_lead"** (origem "Site (GA4)", **Principal**, janela 90 dias). Fluxo: form → `dataLayer generate_lead` → GTM → GA4 → (vínculo GA4↔Ads) → conversão no Ads.

- Conta Ads: **Triunfo do Brasil** `538-768-3164`. Vínculo GA4↔Ads criado (propaga em até 24h).
- **Codificação automática (auto-tagging) tem que ficar LIGADA** — é o que amarra a conversão ao clique. Sem ela, zero conversões no Ads mesmo com leads chegando.
- **Aplicação automática de recomendações foi DESLIGADA** (estava trocando a estratégia de lance sozinha). Manter desligada pra ter controle manual.
- Lance atual: **Maximizar cliques**, por decisão do Gabriel, até acumular ~15–30 conversões; depois migrar pra Maximizar conversões. No lance de cliques a conversão continua sendo contada.
- Status "Conversões pendentes" é normal até o 1º lead vindo de anúncio fluir (import do GA4 tem latência de até 24–48h). Não reaproveitar as conversões antigas "Formulário"/"Lead form - Submit" (site principal).

## Meta Pixel + CAPI (2026-07-16) — ⏸️ código pronto, ativação ADIADA

Montado pra permitir campanhas de leads/tráfego no Meta apontando pra LP, mas **não está ativo/validado** — Gabriel adiou.

- **Pixel `903988453820396`** (dataset "Triunfo") hardcoded no `<head>` do [`index.html`](index.html) — **de propósito no topo, ANTES do GTM** (ver gotcha abaixo). Dispara `PageView` no load e `Lead` no sucesso do form via `fbq('trackSingle', ...)`, com `event_id` por envio.
- **CAPI (server-side)** no [`google-apps-script.gs`](google-apps-script.gs) (`sendMetaCapi`): o mesmo webhook que grava o lead relaya um `Lead` server-side com o mesmo `event_id` (dedup), com hash SHA256 de e-mail/nome + `_fbp`/`_fbc`/user-agent. **Token nas Propriedades do Script** (`META_CAPI_TOKEN`, `META_DATASET_ID`; opcional `META_TEST_EVENT_CODE` pra testar) — nunca no código. Configurar: Apps Script → Configurações do projeto → Propriedades do script.
- 🐛 **Gotcha que travou (importante):** o GTM compartilhado `GTM-WGZ488V` injeta OUTROS pixels de Meta na LP (`1314668212218720`, `517991158551582`). Com vários pixels na página, **quem inicializa primeiro no fbevents "ganha" o envio** — os outros contam o evento mas não transmitem. Por isso o Pixel foi movido pro topo do `<head>` e usa `trackSingle`. A correção **não foi verificada ao vivo** (Gabriel parou antes do redeploy).
- **Decisão:** ativar Meta pra LP só depois de criar um **GTM novo dedicado só à LP** (o compartilhado já contaminou GA4 e conflitou o Pixel). Ao fazer, validar Pixel (navegador) + CAPI (servidor) no Gerenciador de Eventos → Testar eventos, esperando o `Lead` desduplicado entre os dois.

> **Nota de implantação do Apps Script:** "Nova implantação" gera URL nova toda vez. URL atual do webhook já está no `script.js`. Pra atualizar mantendo a URL: Implantar → Gerenciar implantações → lápis → "Nova versão".

## Pendências para Gabriel confirmar antes de publicar

- [ ] **Selo orgânico específico** (ex. USDA Organic) — a página usa o texto "Certified Organic" com nota de que a documentação de equivalência é enviada durante o processo de cotação, sem logo de certificadora, até confirmar autorização de uso da marca. Ver `company/certificacoes.md`.
- [ ] **Fotografia real** — a página hoje é 100% tipografia/cor/forma (sem fotos), para não usar imagens falsas de plantação/produto. Se houver fotos reais da produção/colheita/fábrica, dá pra substituir o bloco visual da seção "Our Origin" (`.origin-visual` em `style.css`) por uma foto real.
- [ ] **Prova social** — não há depoimentos/clientes nomeados na página (não há nada documentado em `products/` ou `sales/`). Se puder citar setores/regiões atendidas (mesmo sem nome de empresa), dá pra reforçar a seção "Why Triunfo".
- [ ] **Domínio** — decidir se a LP vai em subdomínio próprio (ex. `us.triunfodobrasil.com` ou `leads.triunfodobrasil.com`) ou domínio Netlify temporário. Isso também destrava `robots.txt`/`sitemap.xml`/canonical (hoje com placeholder `REPLACE-WITH-FINAL-DOMAIN`).
- [ ] **Social card (og:image)** — hoje reaproveita o logo quadrado; vale um card 1200×630 dedicado quando houver tempo de design.

## Estrutura

- `index.html` — conteúdo, estrutura semântica, schema JSON-LD (Organization + FAQPage)
- `style.css` — identidade visual (paleta e tipografia do manual de marca) + animações
- `script.js` — scroll reveal, header sticky, validação de formulário, submit AJAX (Netlify + Google Sheets)
- `google-apps-script.gs` — código para colar no Apps Script do Google Sheets (ver seção acima)
- `robots.txt`, `sitemap.xml` — precisam do domínio final (hoje com placeholder)
- `assets/fonts/` — Panton (Black Caps), Bio Sans (Regular/Italic/SemiBold/ExtraBold), Brittanian — todas em WOFF2 (convertidas de OTF pra reduzir peso/LCP)
- `assets/img/` — logo (claro/branco) e ícone de folha, copiados de `branding/Logos/`

## Testar localmente

Qualquer servidor estático funciona, por exemplo:

```powershell
cd marketing/landing-pages/us-b2b-leads
python -m http.server 8080
```

Depois abrir `http://localhost:8080`. O envio do formulário só funciona de fato (gravando lead) quando publicado no Netlify — localmente ele vai cair no fallback e tentar submit nativo (sem efeito).
