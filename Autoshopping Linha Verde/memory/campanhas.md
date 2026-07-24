# campanhas.md — Registro de Campanhas · Autoshopping Linha Verde

> Estado e decisões na fonte de verdade: [[estado-da-conta-autoshopping]].
> Este arquivo guarda **números por campanha e a série histórica**.
> `[RESSALVA]` métrica-norte da conta = **conversas qualificadas iniciadas no WhatsApp**.

---

## SÉRIE HISTÓRICA — GASTO META POR MÊS (fonte: export jan–jun/2026 com quebra mensal)

| Mês | Gasto Meta | vs. verba R$16.000 |
|---|---|---|
| Jan/2026 | R$ 19.862,88 | +24% |
| Fev/2026 | **R$ 21.041,52** | +32% (pico do semestre) |
| Mar/2026 | **R$ 10.282,41** | −36% (vale do semestre) |
| Abr/2026 | R$ 15.085,56 | −6% |
| Mai/2026 | R$ 13.433,29 | −16% |
| Jun/2026 | R$ 16.738,74 | +5% |
| Jul/2026 (1–21) | R$ 13.027,10 | projeta ~R$18.500 |

**Amplitude do semestre: R$10.282 a R$21.042 — variação de 2×.** A verba de R$16.000 funcionou
mais como referência do que como teto real até aqui. Contexto útil ao discutir o estouro projetado
de julho: não seria o primeiro mês acima.

`[RESSALVA IMPORTANTE]` **Não somar a coluna "Resultados" entre meses** — ela mistura indicadores
diferentes (conversas de WhatsApp, cliques no link, visualizações de página, alcance, visitas ao
perfil). Só o **gasto** é comparável direto entre meses. Para comparar resultado, isolar o mesmo
indicador.

### 🔗 Reconciliação gasto × nota fiscal (validada 2026-07-21)

O **"Valor usado" do export = base de serviço da NF**. O **total cobrado da NF ≈ base × 1,138**
(PIS/COFINS 9,25% + ISS 2,9%).

| Mês | Export (base) | NF total cobrado |
|---|---|---|
| Jan/2026 | R$ 19.862,88 | R$ 22.608,47 |
| Jun/2026 | R$ 16.738,74 | R$ 19.053,98 |

**Uso prático:** para converter gasto de mídia em custo faturado, multiplicar por **~1,138**.
NFs em `financeiro/` e no Drive (`NFs/Autoshopping/Meta`).

---

## Campanhas ativas (jul/2026)

**`[Engajamento][Lojistas][wpp]`** `[EM EXECUÇÃO]` — CTWA nativo, desde 29/06.
Rotação por quinzena, ~7 ad sets ativos. **Nunca recriar ad set — pausar/ativar** (preserva histórico).

**`[Tráfego][Site][ofertas][MOF][rmkt][BOF]`** `[EM EXECUÇÃO]` — MOF frio Advantage+ / BOF remarketing.

**`[Reconhecimento][Institucional]`** `[EM EXECUÇÃO]` — geo broad, sem lookalike.
Regionais **Interior PR, Oeste PR e SC/MS pausados em 20/07** (verba ia estourar; critério custo e
resultado). **Curitiba e SP seguem ativos.**

**Turbinar** — posts com tração orgânica comprovada.

**Google: `PMax_Institucional`** — única com gasto. **A pausar** (decisão 23/07 — órfã, sem resultado;
a regra dos 7 dias em paralelo não se aplica).

**Google: `[Search] Institucional` + `[Search] Aquisição`** `[MONTADAS · PAUSADAS 23/07]` — 2 + 6
grupos, Maximizar Cliques sem teto, Curitiba +25% / RMC. Conversão nova já no ar (form primária,
WhatsApp secundária — GTM v169). Destinos usam o prefixo **`/m`** (nunca `/multipla`, bloqueado pro
AdsBot-Google no robots.txt). 🔴 **ATIVAÇÃO BLOQUEADA:** anúncios **reprovados** — o WAF/CloudFront
devolve **403 por volume** ao rastreador do Google, em qualquer URL (inclusive `/robots.txt`).
Depende da Revenda Mais isentar o AdsBot do rate limit.
Build: [[../marketing/campanhas/BUILD-search-google-onda1-2026-07]].

---

## Julho/2026 (01 a 21) — detalhe

**Gasto total R$ 13.027,10.** Lojistas: **337 conversas, CPL R$17,82**, R$6.005,70.
Site MOF+BOF: 13.808 LPV a R$0,275. Reconhecimento: 576.941 alcance. IG: 7.326 visitas ao perfil.
Google PMax: R$1.505,39, 9.827 cliques, CPC R$0,15.

**Ranking de lojistas por CPL** — ver tabela completa na Seção 7 de [[estado-da-conta-autoshopping]].
Melhores: TOYOTO R$9,93 · SCHAFAS R$10,55. Piores: MASSA MOTORS R$42,53 · SPEED R$37,02.

**Split regional do Reconhecimento:** R$828,43 fora de Curitiba (72%) × R$315,22 em Curitiba (28%)
em 21 dias → ~R$1.223/mês fora da praça.

---

## Junho/2026 (mês fechado)

Meta: **219 conversas reais** no WhatsApp, custo médio **R$14,02**, R$3.071 nas campanhas de
WhatsApp. Gasto total R$16.738,74.
⚠️ **Mlabs reportou 267 conversas — número inflado, descartado.** O relatório mensal no Drive ainda
carrega o 267: **corrigir antes de reaproveitar**.
Google: R$8.988,81 (NF).

---

## Padrões identificados

- **Consolidação de verba destrava o algoritmo.** 26 campanhas a ~R$10/dia = falha crônica de aprendizado.
- **Nenhum ad set de lojista atinge 50 conversões/semana**, então nunca "sai do aprendizado" pelo
  critério formal da Meta. Régua prática: **não mexer grande antes de 10 dias**.
- **Massa Motors repete o pior CPL com precisão** (R$42,49 em 01-13/07 → R$42,53 em 01-21/07):
  é público/criativo, não ruído.
- Volatilidade de inventário (300-500 vendas/mês) inviabiliza campanha presa a veículo específico.
  **Páginas filtradas são a solução durável.**

---

## Cobertura de exports

✅ **jan a jun/2026 com quebra mensal** (Campanhas, Conjuntos, Anúncios) + **jul 1-21** +
**Google jan-jun e julho**. Base suficiente para análise histórica de 7 meses.
