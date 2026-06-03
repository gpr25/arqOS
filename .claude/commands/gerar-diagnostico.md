---
name: "gerar-diagnostico"
description: "Conduzir diagnóstico operacional de um prospect ou da própria operação. Mapeia gargalos, oportunidades e o que precisa ser resolvido primeiro. Acionar antes de uma proposta ou para revisar a própria operação."
---

# /gerar-diagnostico — Diagnóstico operacional

Conduz um diagnóstico estruturado em 3 camadas — operacional, produto e dor — e entrega um mapa claro de prioridades.

Leia antes de começar:
- `sales/icp.md` — sinais de fit e descarte
- `products/` — o que a empresa oferece como solução
- `company/company.md` — contexto da empresa que faz o diagnóstico

Contexto: $ARGUMENTS

Se nenhum contexto for fornecido, pergunte:
- O diagnóstico é de um **prospect** (para construir uma proposta) ou da **própria operação** (para identificar melhorias internas)?

---

## DIAGNÓSTICO DE PROSPECT

### Camada 1 — Operacional
*Entender como a operação funciona hoje*

Perguntas para conduzir:
- Como está estruturada a operação hoje? (equipe, ferramentas, processos principais)
- Onde o conhecimento da empresa vive? (pessoas, documentos, sistema)
- Quais processos se repetem toda semana?
- Qual processo, se parasse, travaria tudo?

**O que mapear:** fragmentação, dependência de pessoas, falta de documentação

---

### Camada 2 — Produto/Serviço
*Entender o que vendem e como vendem*

Perguntas para conduzir:
- Quais produtos ou empreendimentos estão ativos?
- Qual tem mais pressão de venda agora?
- Quais são as principais objeções que aparecem?
- O que mais fecha — quais gatilhos funcionam?
- Como os leads chegam e como são atendidos?

**O que mapear:** onde o conhecimento de produto está (na cabeça de quem?), consistência do atendimento

---

### Camada 3 — Dor
*Identificar o que realmente trava*

Perguntas para conduzir:
- Qual é o maior gargalo operacional que você enfrenta hoje?
- O que acontece quando um profissional chave sai de férias ou sai da empresa?
- Se você tivesse que dobrar o volume de leads amanhã, o que travaria primeiro?
- O que você faz hoje no improviso que deveria estar estruturado?

**O que mapear:** gargalos reais, onde a operação é frágil, o que depende de pessoas específicas

---

### Entregável do diagnóstico de prospect

```
DIAGNÓSTICO — [Nome da Empresa]
Data: [data]

SITUAÇÃO ATUAL:
[Resumo em 3-4 linhas do que foi identificado nas 3 camadas]

GARGALOS IDENTIFICADOS:
1. [Gargalo principal — mais impactante]
2. [Gargalo 2]
3. [Gargalo 3]

OPORTUNIDADE DE IMPLEMENTAÇÃO:
[O que o ArqOS / produto resolve especificamente para este prospect]
[Por que faz sentido agora — urgência real identificada]

FIT:
[Alta / Média / Baixa] — [justificativa baseada nos sinais de fit de sales/icp.md]

PRÓXIMO PASSO RECOMENDADO:
[Proposta / Demonstração / Segunda reunião / Não avançar]
```

---

## DIAGNÓSTICO DA PRÓPRIA OPERAÇÃO

Usar quando quiser revisar os gargalos internos do negócio.

### Perguntas por área

**Comercial:**
- Onde os leads estão morrendo no funil?
- Qual etapa toma mais tempo sem resultado proporcional?
- Tem follow-up estruturado ou vai no improviso?

**Marketing:**
- Qual canal gera o lead mais qualificado? O mais barato?
- O que foi testado e não funcionou?
- Conteúdo é produzido com que frequência? Por quem?

**Operação:**
- O que depende de você para funcionar (e não deveria)?
- Quais processos foram documentados?
- Onde a equipe (ou você) perde mais tempo?

**Produto/Serviço:**
- O que os clientes mais elogiam?
- O que mais gera retrabalho ou reclamação?
- O que poderia melhorar sem aumentar custo?

### Entregável do diagnóstico interno

```
DIAGNÓSTICO OPERACIONAL — [Nome da Empresa]
Data: [data]

PONTOS FORTES (manter e potencializar):
—
—

GARGALOS PRIORITÁRIOS (resolver primeiro):
1.
2.
3.

OPORTUNIDADES IDENTIFICADAS:
—

PRÓXIMAS AÇÕES RECOMENDADAS:
[ ] [Ação 1 — responsável — prazo]
[ ] [Ação 2]
[ ] [Ação 3]
```

Registrar em `memory/decisoes.md` os principais aprendizados do diagnóstico.
