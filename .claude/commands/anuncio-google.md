---
name: "anuncio-google"
description: "Criar estrutura completa de campanha Google Ads (Search) pronta para importar no Google Ads Editor via CSV. Acionar para criar campanhas novas ou reestruturar campanhas existentes."
---

# /anuncio-google — Estrutura de campanha Google Ads

Cria estrutura completa de campanha Google Ads pronta para importar no Google Ads Editor.

Leia antes de começar:
- `products/` — produto anunciado, diferenciais e objeções
- `sales/icp.md` — público-alvo e região
- `branding/brand.md` — tom de voz para copy dos anúncios

Briefing: $ARGUMENTS

Se nenhum briefing for fornecido, pergunte — uma por vez:

1. Qual é o objetivo? (leads, ligações, tráfego para site, outro)
2. Qual produto ou serviço será anunciado?
3. Qual é o público-alvo? (perfil, região, cidades)
4. Qual é o orçamento diário estimado?
5. Tem palavras-chave em mente ou quer sugestões baseadas no produto?
6. Tem landing page definida? Qual a URL?

---

## O que gerar

### 1. Estrutura da campanha
- **Nome:** `[Produto] | [Objetivo] | [Mês/Ano]`
- **Tipo:** Rede de Pesquisa
- **Orçamento diário:** conforme briefing
- **Estratégia de lances recomendada:**
  - Início (sem histórico): Manual CPC
  - Com histórico de conversão: Maximize Conversions → Target CPA
- **Segmentação geográfica:** cidades/regiões do ICP
- **Idioma:** Português
- **Programação:** dias e horários de maior intent (geralmente seg-sex, 8h-20h)

---

### 2. Grupos de anúncios (mínimo 3)

**Grupo 1 — Intenção direta (quem busca pelo produto)**
Exemplos de keywords: "[produto] [cidade]", "comprar [produto]", "[tipo de produto] [bairro]"

**Grupo 2 — Dor/problema (quem busca solução)**
Exemplos: "como [resolver o problema que o produto resolve]", "[situação que o produto resolve]"

**Grupo 3 — Comparação/alternativa**
Exemplos: "melhor [produto] em [cidade]", "[produto] vs [alternativa]"

Para cada grupo:
- Nome
- 10-15 palavras-chave (mix de correspondência exata, frase e ampla)
- Palavras-chave negativas sugeridas

**Negativos obrigatórios (imobiliário):** "grátis", "aluguel", "locação", "curso", "emprego"

---

### 3. Anúncios RSA — 2 por grupo

Para cada anúncio:

**15 headlines (máx. 30 caracteres):**
- Keyword principal do grupo
- Benefício concreto do produto
- Dado específico (número, preço, prazo)
- Prova social
- CTA ("Ver Preços", "Fale Conosco", "Ver Opções")
- Urgência real (se houver)

**4 descriptions (máx. 90 caracteres):**
- Benefício + CTA direto
- Prova social + diferencial
- Qualificação do público + proposta
- CTA com canal (WhatsApp, formulário)

---

### 4. Extensões

**Sitelinks (4-6):**
| Título | Descrição | URL |
|---|---|---|
| [título] | [descrição] | [url] |

**Callouts (6):**
Frases curtas de destaque: diferenciais, certificações, promessas (ex: "Atendimento em 2h", "Entrega 2026")

**Snippet estruturado:**
Tipo: Amenidades / Tipos / Serviços (conforme o produto)

---

### 5. CSV para Google Ads Editor

Gerar tabela no formato de importação:

```csv
Campaign,Ad Group,Type,Status,Headline 1,Headline 2,Headline 3,Description 1,Description 2,Final URL,Path 1,Path 2
```

---

## Regras de copy para anúncios

- Especificidade > generalidade: "Apartamentos 3 suítes no Batel" > "Imóveis de qualidade"
- Proposta de valor clara no Headline 1
- Nunca usar frases proibidas de `branding/brand.md`
- CTAs específicos: "Ver plantas e preços", "Falar com especialista" > "Saiba mais"
- Dados reais quando disponíveis: metragens, preços, número de unidades

Ao final, perguntar se quer ajustar algum grupo ou exportar o CSV final.
