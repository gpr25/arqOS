# ESTADO DA CONTA — TRIUNFO DO BRASIL (Grupo Gadens)
### Fonte de verdade: estado atual, decisões travadas, números e pendências
**Gestor de mídia:** Gabriel Pauletto · **Criado:** 2026-07-21 · **Versão:** 1.0

> Criado na padronização de 2026-07-21. Antes disso o estado da Triunfo estava espalhado em
> `campanhas.md`, `decisoes.md`, `conhecimento.md` e `estrategia.md`. **Este arquivo passa a ser o
> ponto único de consulta de ESTADO**; o detalhe operacional continua nos arquivos irmãos.

**Legenda:** `[TRAVADO]` decidido · `[EM EXECUÇÃO]` rodando · `[PENDENTE]` aguarda ação ·
`[URGENTE]` risco ativo · `[RESSALVA]` usar com ressalva · `[SUPERADO]` histórico

---

## 1. NEGÓCIO

Produtora brasileira de **erva-mate orgânica**, +50 anos, **exportação B2B** para os cinco
continentes. Setores-alvo: **food, beverage e nutracêuticos**.

- **Mercados em mídia paga:** **EUA** (principal) e **Alemanha** (pausada, ver seção 4).
- **Jornada:** anúncio → LP em inglês (`us-b2b-leads`) → formulário → planilha/CRM → contato comercial.
- **Ciclo:** longo, B2B internacional. Lead é início de conversa, não venda.
- **Único onboarding ArqOS completo do grupo** (instalado 2026-07-02, Perfil 4).

---

## 2. OBJETIVO E VERBA

| Item | Estado |
|---|---|
| Objetivo | Geração de lead B2B internacional qualificado |
| Google — verba planejada | EUA ~R$2.800/mês + Alemanha ~R$1.200/mês (cenário B) |
| Meta — verba em execução | EUA R$55/dia · Alemanha R$15/dia (pausada) |
| Status da verba | 🔴 **Reduzida em 15/07/2026** para não estourar orçamento |

🔴 **PROBLEMA Nº1 DA CONTA `[URGENTE]`:** após o corte de 15/07, o patamar ficou **abaixo do limiar
operacional**. Enquanto isso não for decisão de gestão, criativo e copy não mudam o resultado.
**Restrição travada até o fim de julho** — Gabriel não pode remanejar antes disso sem estourar.

💡 **Alavanca disponível sem verba nova:** a Alemanha pausada libera ~R$15/dia para os EUA.

---

## 3. ESTRUTURA — GOOGLE ADS `[EM EXECUÇÃO]`

- **Campanhas:** `[SEARCH] [US] Ingredient Sourcing` e `[SEARCH] [DE] Ingredient Sourcing`.
- **Publicadas em 2026-07-03**, rodando desde então.
- **No período 21/06→21/07 não foi alterado NADA além de verba.**
- **Leads são lentos e caros desde o início** — é característica da frente, não degradação recente.
- **Entrega estável:** 11,4 cliques/dia (01–14/07) → 12,6 cliques/dia (15–21/07).

**Datas de controle (ancoradas em 03/07) — TODAS VENCIDAS SEM REVISÃO:**

| O que | Data | Status |
|---|---|---|
| Revisar termos de pesquisa e CPC por país | 2026-07-10 | Vencida `[PENDENTE]` |
| Revisar leads por país (setor, cargo, volume) | 2026-07-10 a 13 | Vencida `[PENDENTE]` |
| Avaliar/pausar campanha da Alemanha | 2026-07-17 | Vencida — decisão em aberto |

---

## 4. ESTRUTURA — META ADS `[EM EXECUÇÃO]`

Campanha `[Leads][forms]` (desde 03/07), objetivo lead.

| Conjunto | Status | Orçamento | Gasto 01-21/07 | Leads | CPL |
|---|---|---|---|---|---|
| `[ADV][EUA][frio][interesses][amplo][25+]` | **ativo** | R$55/dia | R$ 1.844,73 | **37** | **R$ 49,86** |
| `[ADV][GER][frio][interesses][amplo][25+]` | **pausado** | R$15/dia | R$ 1.307,25 | **6** | **R$ 217,88** |
| `CJ 02 [Interesses] [25+]` (legado) | não entrega | — | R$ 274,46 | 0 | — |

🔴 **Alemanha custava 4,4× os EUA** — 38% da verba Meta para 14% dos leads. Pausa justificada
pelo dado.

⚠️ **Em 15/07 foram alterados formatos e formulários NO META**, e desde então entrou apenas
**1 lead**. **Investigar isolado no Meta** — checar se o formulário novo quebrou ou ficou mais
atritado. É a hipótese mais barata de testar e não depende de verba.

---

## 5. RASTREAMENTO `[EM EXECUÇÃO]` — o mais maduro do grupo

**Google/GA4 — FUNCIONANDO ponta a ponta:**
- `generate_lead` marcado como **evento-chave** no GA4.
- Vínculo GA4 ↔ Google Ads criado (conta Ads `538-768-3164`).
- Conversão **"Triunfo — LP US B2B (web) generate_lead"** importada como **Principal**, janela 90 dias.
- **Auto-tagging LIGADO.** Aplicação automática de recomendações **TODAS DESLIGADAS** (evita que o
  Google troque a estratégia de lance sozinho).
- Conversões antigas (`Formulário`, `Lead form - Submit`) **rebaixadas a Secundário**.
- Lance em **Maximizar cliques** por decisão do Gabriel; migrar para Maximizar conversões só após
  ~15-30 conversões acumuladas.

**Meta:**
- **GTM novo e dedicado criado**, LP rastreada.
- Pixel `903988453820396` **não 100% configurado** — `[RESSALVA]` sem impacto por ora, porque o
  Meta roda **formulário instantâneo** (evento nativo).
- CAPI montado no Apps Script, **não validado**.

**Conhecido e não resolvido:** banner de consentimento **GDPR** para tráfego alemão (adiamento
consciente). Menos urgente com a Alemanha pausada.

---

## 6. RESULTADO — PERÍODO 21/06 a 21/07/2026

- **~40 a 43 leads no total** (Meta 43 no export; Google ~6 atribuídos via clique de anúncio).
- **Leads do Meta mais frios e curiosos** — **intencional**, ver decisão "primeiro gira, depois
  qualifica" em `decisoes.md`.
- **Desde 15/07: apenas 1 lead.**
- Meta: gasto **R$3.426,44**, alcance 8.079, impressões 17.034, freq 2,11, CPC R$9,30, CPM
  R$185,04 (alto é normal em B2B internacional).

`[RESSALVA]` Custo e conversões do **Google** de julho seguem `[PENDENTE]` — o export disponível é
série temporal só com impressões e cliques.

---

## 7. REGRAS DESTA CONTA (não violar)

1. **Analisar Google e Meta SEPARADOS.** Cruzar os dois já produziu conclusão errada em 21/07.
2. **Uma variável por vez** quando o objetivo for entender causa. Em 15/07 mudaram verba **e**
   formulário no mesmo dia, e a queda ficou não atribuível.
3. **Nada é criado no Asana** sem validação do Gabriel item por item (Asana é da empresa).
4. Números de conversão carregam ressalva enquanto houver etapa não auditada.

---

## 8. PENDÊNCIAS

| Item | Status |
|---|---|
| Decisão de verba com a gestão (problema nº1) | `[URGENTE]` travado até fim de julho |
| Investigar o formulário novo do Meta (queda pós-15/07) | `[URGENTE]` barato, sem depender de verba |
| Revisões de termos e leads por país (venceram 10 e 13/07) | `[PENDENTE]` |
| Decisão formal sobre a campanha DE (venceu 17/07) | Pausada na prática, formalizar |
| Validar Pixel/CAPI do Meta | `[PENDENTE]` sem impacto enquanto for instant form |
| Banner GDPR (tráfego alemão) | `[PENDENTE]` adiado |
| Feedback da diretoria sobre `triunfo-resultados-julho.pptx` | `[PENDENTE]` enviado, ninguém retornou |
| Popular o projeto Asana "Triunfo — Controle de Campanhas" (criado 06/07, **vazio**) | `[PENDENTE]` |
| Migrar lance para Maximizar conversões | Só após ~15-30 conversões |

---

## 9. ARQUIVOS IRMÃOS

- `logs/changelog.md` — diário cronológico
- `memory/campanhas.md` — números e datas de controle por campanha
- `memory/decisoes.md` — decisões com contexto e porquê
- `memory/conhecimento.md` — inteligência acumulada
- `marketing/landing-pages/us-b2b-leads/` — LP + Apps Script + README
- `marketing/campanhas/` — exports de plataforma

---

## 10. CHANGELOG DO ARQUIVO

| Versão | Data | Mudança |
|---|---|---|
| 1.0 | 2026-07-21 | Criação na padronização. Consolidado negócio, verba, estruturas Google e Meta, rastreamento, resultado de julho, regras da conta e pendências. |
