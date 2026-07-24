# CLAUDE.md — Autoshopping Linha Verde

> Contexto mínimo (pré-onboarding). Onboarding completo do ArqOS ainda não realizado.

## O que é

Marketplace de 23 concessionárias independentes de veículos (ticket alto), em Curitiba. Operação de mídia paga conduzida por Gabriel; coordenação da conta: Geyssica (valida entregas antes de subir).

- **Verba:** Meta ~R$16k + Google ~R$22k/mês
- **Objetivo provisório:** 100 leads/mês
- **Desafio central:** sem time de vendas central — rastreio a nível de lojista é o nó
- **Tracking:**
  - **Google — RESOLVIDO 23/07/2026.** Conversão nova construída do zero via GTM próprio (`GTM-KVLGK4D`, v169): `Lead - Formulário Site` = **primária**, `Contato - WhatsApp` = secundária. **Não depende mais da Revenda Mais.** IDs na Seção 10 de `memory/estado-da-conta-autoshopping.md`.
  - **Meta — ainda pendente.** CAPI ativo, mas com dados de domínio incorretos e eventos duplicados. Depende da Revenda Mais (agência que administra o site).
  - **Legado sujo:** ~50 ações de conversão velhas no Ads e ~71 tags no GTM. Limpeza pendente — ⚠️ não apagar às cegas as tags `WhatsApp Loja - X` (é o rastreio por lojista).

## Leia primeiro

1. `memory/estado-da-conta-autoshopping.md` — estado atual da conta
2. `memory/instrucoes-projeto-autoshopping.md` — instruções de trabalho
3. `../Geral/estado-geral-gadens.md` — estado geral do grupo

## Onde está cada coisa

| Pasta | Conteúdo |
|---|---|
| `branding/` | Logos e rebranding (.ai/.pdf) |
| `marketing/criativos/` | Peças de anúncio por lote + editáveis + `analises/`. Convenção no `README.md` de lá. |
| `marketing/campanhas/` | Exports de campanhas Meta/Google |
| `marketing/scripts/` | Scripts de anúncio Google/Meta e textos wa.me |
| `marketing/relatorios/` | Relatórios mensais de performance |
| `sales/leads/` | Google Forms de lojistas e respostas |
| `financeiro/` | NFs de Google e Meta |
| `operations/reunioes/` | Apresentações de alinhamento |
| `memory/` | Estado da conta e instruções (documentos vivos) |
