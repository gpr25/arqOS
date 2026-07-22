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

## 2026-07-22 — Planejamento ago/26–fev/27 (cascata completa)

**O que foi feito:**
- Criados os **3 documentos da cascata**, na ordem correta (macro → bimestral → mensal).
- **Eixo do macro definido como número de praças**, não sazonalidade. Tese de sazonalidade
  descartada por falta de dado verificável (registro do descarte no próprio macro, §1).
- **Triunfo declarada sem nenhuma data-chave até fev/27** — fora da trava de 01/09 do grupo.
- **Números recuperados dos exports** (antes `[PREENCHER]`): Google jul (R$2.282,32 · 2 conv ·
  R$1.141,16/conv) e a separação dos dois regimes do Meta em torno de 15/07.
- **Verba pré-corte confirmada** via export 01–14/07: EUA R$120/dia · GER R$100/dia.
- Alemanha: decisão de encerrar **antecipada de nov/26 para 01/08/26**.

**Arquivos tocados:**
- `marketing/briefings/plano-macro-ago26-fev27.md` (novo, v1.1)
- `marketing/briefings/plano-bimestral-ago-set-2026.md` (novo)
- `marketing/briefings/plano-agosto-2026.md` (novo)
- `memory/campanhas.md` · `memory/decisoes.md` (4 entradas) · `memory/estado-da-conta-triunfo.md`
- `../Geral/estado-geral-gadens.md`

**Pendências que mudaram de status:**
- ✅ `[RESOLVIDO]` custo/conversão do Google de julho (era `[PREENCHER]` desde 21/07)
- ✅ `[RESOLVIDO]` verba diária pré-15/07 (não havia sido anotada)
- ✅ `[RESOLVIDO]` decisão formal da campanha DE (vencida desde 17/07)
- 🛑 `[SUPERADO]` "problema nº1 = verba abaixo do limiar" — era restrição **de julho**, expirou 31/07
- 🔴 **NOVA e aberta:** divergência **6 × 1** leads pós-15/07 (amplitude de 5× no CPL).
  **Resolver até 05/08** contando linhas da planilha de leads
- 🟡 Continua aberta: revisão de termos de pesquisa do Google (vencida desde 10/07) → semana 3 de ago
- 🟡 Continua aberta: retorno da diretoria sobre o pptx — **não bloqueia mais nada** (default C)

**Próxima sessão deve:** atualizar o `triunfo-resultados-julho.pptx` em `marketing/relatorios/`
com o §2 do macro (tabelas de praça de Meta e Google + os 4 cenários), para envio por e-mail à
diretoria até **14/08**. ⚠️ confirmar qual dos dois arquivos é o bom (`.pptx` × ` (2).pptx`).

---

## 2026-07-21 — Backfill de mídia paga (período 2026-06-21 → 2026-07-21)

**O que foi feito (recuperado por entrevista, eixo mídia paga):**

- **2026-07-03 — Campanhas Google publicadas.** `[SEARCH] [US] Ingredient Sourcing` e
  `[SEARCH] [DE] Ingredient Sourcing` **subiram em 03/07/2026 e seguem rodando.** Isso resolve o
  `[PREENCHER]` de data real de publicação em `memory/campanhas.md` e ancora todas as datas de
  controle (ver abaixo).
- **2026-07-15 — Redução de verba** nas campanhas para **não estourar o orçamento**.
  `[PREENCHER]` valores exatos antes/depois (virão no export).
- **2026-07-15 — Alteração de formatos e formulários** (Meta). Mudança feita **no mesmo dia** da
  redução de verba.
- ✅ **Conversão Google funcionando:** saiu de "Conversões pendentes", **~6 leads** já entraram
  via clique de anúncio. Conversões antigas (`Formulário`, `Lead form - Submit`) **rebaixadas
  para Secundário** (pendência de 16/07 resolvida).
- ✅ **GTM novo dedicado criado; LP rastreada.** Pixel do Meta **ainda não 100% configurado**,
  mas **sem impacto por ora**, porque o Meta roda **formulário instantâneo** (evento nativo).

**Resultado de lead no período:**

- **~40 leads no total.** Os leads do **Meta** eram **claramente mais frios e curiosos** — o que
  era **esperado e intencional**: estratégia declarada de **"primeiro gira, depois qualifica"**.
- **Desde 2026-07-15: apenas 1 lead.** Causa declarada: verba muito reduzida — **com os valores
  atuais nem Google nem Meta conseguem rodar**.

**🔴 ALERTA — verba abaixo do limiar operacional.** Este é hoje o problema nº1 da conta: as duas
plataformas estão subfinanciadas a ponto de não entregarem. Sem correção de verba (ou corte de
uma das frentes para concentrar na outra), o funil segue parado independentemente de criativo,
copy ou rastreamento.

**⚠️ Duas variáveis mudaram no mesmo dia (15/07):** verba **e** formato/formulário. Com as duas
alteradas juntas, **não é possível atribuir** a queda de 40 → 1 lead a uma causa isolada. Registrar
como limitação de diagnóstico, não como conclusão. Aprendizado para os próximos ajustes: mudar
uma variável por vez quando o objetivo for entender causa.

**🟡 Datas de controle VENCIDAS sem revisão** (ancoradas na publicação de 03/07):

| O que fazer | Data calculada | Status |
|---|---|---|
| Revisar termos de pesquisa e CPC real por país (negativar lixo, promover bons termos a exata) | **2026-07-10** | Vencida `[PREENCHER]` se foi feita |
| Revisar leads por país (fit de setor, cargo, volume declarado) | **2026-07-10 a 07-13** | Vencida `[PREENCHER]` |
| Liberado avaliar/pausar a campanha da Alemanha por volume baixo | **2026-07-17** | Vencida — decisão em aberto |

**Reporting:** `triunfo-resultados-julho.pptx` é a **apresentação de resultados**, enviada à
**gestão** para que **eles apresentassem à diretoria**. **Ninguém viu ainda e não houve feedback.**
Arquivo está na **raiz da pasta, fora do padrão** — mover para `marketing/relatorios/`.

**✅ EXPORTS META PROCESSADOS (01-21/07):** gasto Meta **R$3.426,44**, **43 leads**.
**EUA: 37 leads a CPL R$49,86** (R$55/dia, ativo). **Alemanha: 6 leads a CPL R$217,88**
(R$15/dia, **pausada**) — **4,4× mais cara**, consumiu 38% da verba Meta para entregar 14% dos
leads. A decisão sobre a DE que vencia em 17/07 **foi tomada na prática e o dado a justifica**.
💡 O corte da Alemanha **libera ~R$15/dia para os EUA sem pedir verba nova** — é a alavanca
disponível enquanto o orçamento não subir. ⚠️ Export do **Google não veio neste lote**; números
das campanhas `[SEARCH][US]`/`[SEARCH][DE]` seguem `[PREENCHER]`.

**Pendências que mudaram de status:**

- ✅ Resolvido: data de publicação das campanhas (03/07); números Meta de julho; decisão da
  Alemanha validada por dado. conversão Google saiu de pendente;
  conversões antigas rebaixadas; GTM dedicado criado.
- 🔴 Novo e crítico: **verba abaixo do limiar de operação** nas duas plataformas.
- 🟡 Aberto: pixel do Meta não 100% (sem impacto enquanto for instant form); decisão sobre pausar
  a campanha DE (janela venceu 17/07); revisões de termos/leads vencidas; feedback da diretoria
  sobre o PPTX.

**Próxima sessão deve:** tratar a verba como decisão nº1 (com a gestão), decidir sobre a campanha
DE, e rodar as revisões de termos/leads que venceram.

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
