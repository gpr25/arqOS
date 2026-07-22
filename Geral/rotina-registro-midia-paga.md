# Rotina de Registro Contínuo — Mídia Paga (Grupo Gadens)

> Criada em 2026-07-21, ao fim do backfill de ~30 dias. Objetivo: **nunca mais acumular dívida
> de log**, com esforço próximo de zero.
> Complementa `entrevista-backfill-logs.md` (aquele é o resgate; este é a manutenção).

---

## Princípio de design

O gargalo do Gabriel é **tempo**, não disciplina. A rotina anterior falhou porque exigia que ele
parasse para escrever. Esta inverte: **ele despeja bruto, o Claude estrutura e grava.**

**Regra de ouro:** registrar leva menos de 60 segundos ou não vai acontecer. Se uma etapa custa
mais que isso, ela está mal desenhada.

**O que NÃO fazer:** formulário para preencher, planilha para atualizar à mão, "reservar um tempo
para documentar". Nada disso sobrevive a uma semana de incêndio.

---

## Nível 1 — O despejo (diário, ~30 segundos, só quando mexeu em algo)

Ao final de uma mexida em conta, mandar **uma linha bruta** ao Claude. Sem formatar, sem data,
sem capricho:

```
log: pausei 3 ad sets do lojista X no autoshopping, custo tava alto
log: subi carrossel novo shopping b2c
log: verba triunfo US cortada pra 40/dia
```

O Claude resolve o resto: converte para data absoluta, identifica empresa e frente, classifica o
bloco (estrutura/budget/criativo/público/rastreamento/decisão/prazo), grava no `logs/changelog.md`
certo e propaga para a fonte de verdade quando for mudança de **estado**.

**Se não mexeu em nada, não registra nada.** Dia sem log é informação válida, não falha.

---

## Nível 2 — O fechamento semanal (~5 minutos, sexta)

Uma mensagem só:

```
fechamento semanal
```

O Claude então:

1. Lê os changelogs das 5 contas e mostra o que entrou na semana.
2. Pergunta **só o que ficou buraco** (não repergunta o que já está registrado).
3. Pede os **exports** da semana, se houver.
4. Atualiza as fontes de verdade e o `estado-geral-gadens.md`.
5. Devolve **o que venceu, o que está travado e em quem**.

O item 5 é o que alimenta o **mandato de cobrança** dado pela gestão: sai pronto quem precisa ser
cobrado e desde quando.

---

## Nível 3 — O fechamento mensal (~15 minutos)

```
fechamento mensal <mês>
```

Com os exports do mês em mãos, o Claude consolida números por conta e frente, compara com o mês
anterior, atualiza `memory/campanhas.md`, e **gera o relatório/apresentação** já no formato certo
de cada conta.

**Regras de formato herdadas do backfill (aplicar sempre):**

- **Ressalva de rastreamento** explícita sempre que o número depender de conversão não auditada.
- **Nunca misturar frentes** (Shopping B2B × B2C) na mesma análise.
- **Métrica do objetivo em primeiro lugar** — Útil abre com **seguidores**, não com ROAS; B2C do
  Shopping abre com **alcance**; Autoshopping com **conversas no WhatsApp**; Triunfo e Shopping
  B2B com **leads/CPL**.
- **Interrupções de veiculação sempre datadas e com causa** (ex.: Útil, 05–13/06, boleto atrasado).
  É a defesa contra comparativo injusto.
- **Tom:** abrir pelo resultado e pelo pedido, não pelo diagnóstico (diretriz da gestão, 07/2026).
  O diagnóstico duro fica no log como lastro.

---

## Como os logs se comunicam (arquitetura, não mudar sem motivo)

```
[ação do dia]
      ↓
<empresa>/logs/changelog.md          ← diário vivo, granular, append
      ↓  (só quando muda ESTADO ou trava uma DECISÃO)
<empresa>/memory/estado-da-conta-*.md ← fonte de verdade da conta
<empresa>/memory/decisoes.md          ← o porquê, quando houver
      ↓  (só o que a gestão precisa ver)
Geral/estado-geral-gadens.md          ← estado consolidado do grupo + log cronológico
      ↓
relatório / apresentação / resposta a pergunta
```

**Regra de busca:** pergunta sobre *"o que aconteceu"* → changelog da empresa. Pergunta sobre
*"como está / o que foi decidido"* → fonte de verdade. Pergunta sobre *"como está o grupo"* →
`estado-geral-gadens.md`. Nunca duplicar conteúdo entre níveis — os de cima **referenciam** os
de baixo.

**Estado das fontes de verdade (2026-07-21):**

| Empresa | changelog | fonte de verdade |
|---|---|---|
| Autoshopping Linha Verde | ✅ criado 21/07 | ✅ `estado-da-conta-autoshopping.md` |
| Shopping Cidade | ✅ | ✅ `estado-da-conta-shopping-cidade.md` + `decisoes.md` |
| Triunfo do Brasil | ✅ | ✅ `campanhas.md` + `decisoes.md` |
| Útil Utilidades | ✅ criado 21/07 | ✅ `estado-da-conta-util.md` criado 21/07 |
| ULTJ | — | conta inativa por combinação; criar só se reativar |

---

## Caminho de automação (em ordem de custo/benefício)

O erro anterior foi começar pela automação mais difícil (webhook do Apps Script), que travou e
levou tudo junto. A ordem abaixo entrega valor **antes** de exigir infraestrutura.

**Etapa 0 — já funcionando (custo zero).** O registro conversacional dos Níveis 1 e 2. Não depende
de nenhuma tecnologia nova. **É o que sustenta tudo; sem ele, automação só automatiza o vazio.**

**Etapa 1 — Relatório gerado a partir do log + export (próximo passo real).**
Com changelog datado + export do mês, o relatório mensal já pode ser **gerado por comando** em vez
de montado à mão. Não exige API nem integração: só o export e os logs que agora existem.
*Pré-requisito: os exports que ficaram pendentes neste backfill.*

**Etapa 2 — Coleta automática dos números.**
Substituir o export manual por leitura direta (Supermetrics já aparece como conector disponível,
mas **precisa ser autorizado** nas configurações de conectores do claude.ai; hoje não está).
Alternativa sem custo: API do Meta/Google Ads. Isso elimina o passo manual do fechamento mensal.

**Etapa 3 — A planilha semanal (a que travou).**
Retomar o webhook do Apps Script **só depois** das etapas 1 e 2 entregarem valor. Ela é
conveniência de consolidação, não pré-requisito — foi tratada como base e por isso bloqueou tudo.

**Etapa 4 — Registro proativo.**
Rotina agendada que lê as contas, detecta mudanças (campanha pausada, budget alterado, queda de
entrega) e **pergunta ao Gabriel se quer registrar**, em vez de esperar ele lembrar. É o fim
natural da dívida de log — mas só faz sentido com as etapas anteriores de pé.

---

## Gatilhos que obrigam registro imediato (não esperar o fechamento)

Estes têm histórico de virar problema quando não registrados na hora:

1. **Interrupção de veiculação** (qualquer causa) — data de início, causa e responsável.
2. **Mudança de verba** — valor antes, valor depois, quem pediu.
3. **Bloqueio por terceiro** (acesso, criativo, credencial, pagamento) — o que, quem, desde quando.
4. **Decisão da gestão** sobre objetivo, verba ou público.
5. **Mudança de mais de uma variável ao mesmo tempo** — registrar que foram duas, para não tentar
   atribuir causa depois (lição da Triunfo, 15/07).
