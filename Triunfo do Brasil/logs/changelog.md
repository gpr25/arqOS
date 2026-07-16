# changelog.md — Histórico do Sistema

> **Registrar ao final de toda sessão de trabalho** com mudanças significativas
> (arquivo criado/editado, decisão de arquitetura, publicação, integração
> configurada). Não é pra registrar cada micro-ajuste — é o resumo do que
> mudou no sistema desde a última entrada, pra qualquer sessão futura (deste
> ou de outro projeto) conseguir entender rápido o que já foi feito sem
> precisar reler a conversa inteira.

## Como registrar uma sessão

```markdown
## [Data] — [Título curto da sessão]

**O que foi feito:**
- (lista objetiva do que mudou — arquivos criados/editados, integrações
  configuradas, decisões fechadas)

**Arquivos tocados:** (caminhos relativos, se relevante)

**Pendências que mudaram de status:** (o que foi resolvido, o que ficou
novo, o que continua aberto)

**Próxima sessão deve:** (retomar de onde, se houver algo em aberto)
```

Detalhe de decisão/aprendizado (o *porquê*, argumentos, contexto de negócio)
continua indo pra `memory/decisoes.md` — este arquivo é o índice cronológico
"o que mudou e quando", não substitui aquele.

---

## 2026-07-16 — Conversão no Google Ads (Google OK) + Pixel/CAPI do Meta (adiado)

Sessão longa. Duas frentes: fechar a conversão do **Google Ads** (concluída e
funcionando) e montar **Pixel + CAPI do Meta** (código pronto, mas ativação
adiada por um bug de conflito de pixel no GTM compartilhado).

**Google Ads / GA4 — CONCLUÍDO:**

- `generate_lead` apareceu em Admin → Eventos do GA4 (era só o atraso da
  propriedade nova) e Gabriel marcou como **evento-chave**.
- Vínculo **GA4 ↔ Google Ads** criado (conta Ads "Triunfo do Brasil"
  `538-768-3164`; leva até 24h pra propagar dados).
- Conversão importada no Ads: **"Triunfo — LP US B2B (web) generate_lead"**,
  origem "Site (Google Analytics GA4)", **Principal**, janela 90 dias. Status
  ficou "Conversões pendentes" (normal até o 1º lead vindo de clique de anúncio
  fluir; import do GA4 tem latência de até 24–48h).
- **Codificação automática (auto-tagging) confirmada LIGADA** na conta Ads
  (crítico pra atribuição — sem ela, o Ads não amarra a conversão ao clique).
- **Aplicação automática de recomendações: TODAS DESLIGADAS.** Estavam ligadas
  5 automações de lance (Maximizar conversões, tCPA, etc.) que trocariam a
  estratégia sozinhas — desligadas a pedido pra manter controle manual.
- Lance mantido em **Maximizar cliques** por decisão do Gabriel (acumular
  conversões antes de migrar pra Maximizar conversões). Campanha é de Pesquisa,
  aponta pra LP.

**Meta Pixel + CAPI — CÓDIGO PRONTO, ATIVAÇÃO ADIADA:**

- Pixel `903988453820396` (dataset "Triunfo", no Business "Shopping Cidade
  Curitiba") hardcoded na LP + evento `Lead` no sucesso do formulário, com
  `event_id` compartilhado; **CAPI** montado no Apps Script (`sendMetaCapi`,
  hash SHA256, token nas Propriedades do Script). Ver `decisoes.md` e o README
  da LP pro detalhe completo.
- 🐛 **Bug encontrado e diagnosticado (via Playwright na LP no ar):** o GTM
  compartilhado (`GTM-WGZ488V`) injeta OUTROS pixels de Meta na LP
  (`1314668212218720`, `517991158551582`). Com eles presentes, o nosso pixel
  **conta o evento mas nunca envia pela rede** — quem inicializa primeiro
  "ganha" o ciclo de envio do fbevents. Teste isolado provou que o nosso pixel
  funciona sozinho; teste de ordem provou que "nosso pixel primeiro → os dois
  enviam". Correção aplicada no código (Pixel movido pro topo do `<head>`,
  antes do GTM, + `trackSingle`), **mas NÃO verificada ao vivo** — Gabriel
  parou antes do redeploy.
- **Decisão do Gabriel:** adiar o Meta pra LP. Quando for ativar, criar um
  **GTM totalmente novo, dedicado só à LP** — o compartilhado já contaminou o
  GA4 e agora conflitou o Pixel; não vale mais remendar.

**Nota de implantação do Apps Script:** "Nova implantação" gera URL nova toda
vez. A URL do webhook mudou pra
`.../macros/s/AKfycbxI7gDpKX7c58N9oGZSDzYpUctOP58TPUjTqfPlcFMt-pbWciJmPKVs1955SuCh5CF0lw/exec`
(já atualizada no `script.js`). Pra atualizar SEM trocar URL: Implantar →
Gerenciar implantações → lápis → "Nova versão".

**Arquivos tocados:**

- `marketing/landing-pages/us-b2b-leads/index.html` (Pixel no topo do head),
  `script.js` (evento Lead trackSingle, campos CAPI, URL nova do webhook),
  `google-apps-script.gs` (função CAPI + hash + test_event_code)
- `memory/decisoes.md`, `memory/conhecimento.md`
- memórias automáticas `project_lp_us_gtm_ga4_tracking.md` e
  `project_lp_meta_pixel_capi.md` (nova)

**Pendências que mudaram de status:**

- ✅ Resolvido: `generate_lead` como evento-chave; conversão importada no Ads
  (Principal); auto-tagging ligado; auto-apply de recomendações desligado.
- 🟡 Aberto (Google): status "Conversões pendentes" some sozinho quando o 1º
  lead de anúncio fluir (até 24–48h). Migrar lance pra Maximizar conversões só
  depois de ~15–30 conversões.
- 🟡 Recomendado, talvez não feito: rebaixar as conversões antigas do site
  (`Formulário`, `Lead form - Submit`) pra **Secundário** — checar.
- ⏸️ ADIADO (Meta): Pixel + CAPI não estão validados/rodando. Reativar só com
  o **GTM novo dedicado**.

**Próxima sessão deve:** (Google) confirmar que a conversão saiu de "pendente"
e planejar a virada de lance. (Meta, quando o Gabriel quiser) criar o GTM novo
dedicado à LP, então validar Pixel + CAPI — o código já está pronto no repo.

---

## 2026-07-15 — Textura de fundo + rastreamento GTM/GA4/UTM da LP dos EUA

**O que foi feito:**

- Gerada imagem estática de textura de fundo (folha de erva-mate, paleta da
  marca) para uso futuro em formulários/materiais — **não integrada à LP**,
  por pedido explícito do Gabriel.
- Instalado rastreamento completo na LP `us-b2b-leads`: GTM (`GTM-WGZ488V`),
  captura de UTM/gclid/fbclid/referrer, evento `generate_lead` no
  `dataLayer`, colunas de atribuição no Google Sheets.
- Gabriel configurou e publicou as tags no GTM (versões 28 e 29).
- Confirmado funcionando de ponta a ponta via GTM Preview e GA4 Tempo Real.
- Diagnosticada uma sessão inteira de troubleshooting: atraso normal de
  processamento do GA4 (Admin → Eventos demorou a refletir dado que já
  estava confirmadamente chegando) e um problema real ainda aberto —
  possível contaminação da propriedade GA4 nova com tráfego do site
  principal, porque o contêiner GTM é compartilhado entre os dois.
- Corrigido um erro meu: orientei o Gabriel a usar um botão "Novo
  evento-chave" que não existe na interface atual do GA4.

**Arquivos tocados:**

- `branding/Backgrounds/bg-leaf-texture-forest.png` + `.webp` (novo)
- `marketing/landing-pages/us-b2b-leads/index.html`, `script.js`,
  `google-apps-script.gs`, `README.md`
- `memory/decisoes.md`, `memory/conhecimento.md`
- `.claude/commands/gerar-lp.md` (nova fase de rastreamento + gotchas)

**Pendências que mudaram de status:**

- ✅ Resolvido: colunas de atribuição no Sheets (confirmado com lead de
  teste real).
- ✅ Resolvido: tags GTM configuradas e publicadas, disparando corretamente.
- 🟡 Aberto, não bloqueante: confirmar se a correção do gatilho por
  hostname realmente impediu contaminação cross-site na propriedade GA4.
- 🟡 Aberto: marcar `generate_lead` como evento-chave assim que aparecer em
  Admin → Eventos → Eventos recentes (aguardando processamento do GA4).
- ⬜ Ainda não iniciado: importar a conversão pro Google Ads (depende do
  item acima).
- ⬜ Segue conhecida e não resolvida: banner de consentimento GDPR para
  tráfego alemão (decisão consciente do Gabriel de adiar).

**Próxima sessão deve:** checar se `generate_lead` já aparece em Admin →
Eventos do GA4; se sim, marcar como evento-chave e seguir pro Passo 4
(importação Google Ads). Se ainda não aparecer ou a contaminação cross-site
persistir, criar um contêiner GTM novo dedicado só à LP (combinado com o
Gabriel como plano B).

---

## 2026-07-02 — Instalação do ArqOS

**Perfil:** 4 — Outro tipo de negócio (Triunfo, erva-mate orgânica B2B)

**Arquivos criados:**

- `core/core.md` — DNA e princípios da operação
- `company/company.md` — estrutura, história e mercados de atuação
- `branding/brand.md` — tom de voz e arquétipos de marca
- `branding/identidade.md` — logo, paleta de cores, tipografia
- `sales/funil.md` — fluxo de leads (formulário social/LP → CRM)
- `sales/icp.md` — perfil de cliente (food, beverage, nutracêuticos)
- `sales/scripts/objecoes.md` — pendente de preenchimento
- `operations/fluxo.md` — pendente de preenchimento
- `marketing/estrategia.md` — canais pagos e orgânicos, cadência de conteúdo
- `marketing/calendario.md` — template de calendário editorial
- `memory/estrategia.md` — foco dos próximos 30 dias
- `memory/decisoes.md` — template de registro de decisões
- `memory/campanhas.md` — template de registro de campanhas
- `memory/conhecimento.md` — contexto do onboarding e observações técnicas
- `roadmap/roadmap.md` — meta de 30 dias e pendências
- `.mcp.json` — configuração do Playwright MCP
- `CLAUDE.md` — atualizado com contexto real da Triunfo

**Ferramentas instaladas durante o onboarding:** Git, Node.js LTS, Poppler (para leitura de PDFs), extensão Excel Viewer (VS Code).

**Campos pendentes:**

- `branding/brand.md` — frases/posturas proibidas na comunicação
- `sales/funil.md` — CRM usado, etapas do funil, SLA, onde o lead mais perde
- `sales/icp.md` — diferencial competitivo mais específico, ticket médio/volume de contrato
- `sales/scripts/objecoes.md` — objeções mais comuns e respostas
- `operations/fluxo.md` — processos semanais recorrentes e dependências de pessoas
- `marketing/estrategia.md` — o que já funcionou/não funcionou em canais anteriores
- `company/company.md` — estrutura interna/organograma

**Observação:** Gabriel (gestor de tráfego) está em fase de conhecimento da operação mais ampla da Triunfo — vários campos ficaram pendentes por esse motivo e devem ser completados conforme o contexto for mapeado.
