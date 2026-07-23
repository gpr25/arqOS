# Estrutura Padrão — Pastas de Empresa (Grupo Gadens)

Padrão único de organização para todas as empresas do grupo. Criado em 16/07/2026.

## Estrutura

```
<Empresa>/
├── CLAUDE.md          → contexto da empresa (mínimo antes do onboarding, completo depois)
├── branding/          → identidade visual: logos, manuais de marca, editáveis (.ai/.psd)
├── marketing/
│   ├── briefings/     → briefings de criativos, direção estratégica de campanhas
│   ├── criativos/     → peças de anúncio por lote (AAAA-MM_<lote>/<formato>/) + editáveis + analises/
│   ├── campanhas/     → exports de campanhas (CSV/XLSX de Meta e Google)
│   ├── relatorios/    → relatórios mensais de performance
│   └── scripts/       → scripts de anúncio (Google/Meta), textos de WhatsApp
├── sales/             → leads, funil, análises de segmento/ICP, checklists comerciais
├── financeiro/        → NFs, boletos, faturamento de mídia
├── operations/
│   └── reunioes/      → apresentações, apoios e atas de reunião
└── memory/            → estado da conta, instruções de projeto, decisões (documentos vivos)
```

## Regras de arquivamento

1. **Todo arquivo novo de uma empresa entra na pasta dela**, na subpasta correspondente acima — nunca na raiz do workspace nem em `/Geral`.
2. **`memory/` é o coração operacional**: `estado-da-conta-*.md` e `instrucoes-projeto-*.md` vivem aqui e são a primeira leitura em qualquer sessão sobre a empresa.
3. **`branding/` preserva a estrutura do designer** — não reorganizar subpastas internas de identidade visual (REBRANDING, ENXOVAL etc.).
4. **Exports de plataforma** (Meta/Google) sempre em `marketing/campanhas/`, com o nome original do export (contém o período).
5. **Criativos entram em `marketing/criativos/`**, agrupados por lote de entrega e depois por formato, com os editáveis (`.psd`/`.ai`) no mesmo lote. `branding/` é identidade de marca, não peça de anúncio — não misturar. A convenção de nomenclatura de cada empresa vive no `README.md` da própria pasta `criativos/` (referência: Autoshopping Linha Verde).
6. **O que serve a todas as empresas** (metodologias, templates, planilhas do grupo) vive em `/Geral` — nunca dentro de uma empresa.
7. Camadas adicionais do ArqOS (`core/`, `company/`, `products/`, `roadmap/`, `playbooks/`, `logs/`) são criadas **no onboarding** de cada empresa — a Triunfo do Brasil já as possui.

## Estado das empresas (21/07/2026)

| Empresa | Estrutura | Onboarding |
|---|---|---|
| Triunfo do Brasil | ArqOS completo | ✅ Feito |
| Shopping Cidade | ArqOS completo (Perfil 4) + `logs/changelog.md` vivo | ✅ Feito 17/07/2026 |
| Autoshopping Linha Verde | Padrão aplicado, material rico, `logs/changelog.md` criado 21/07 | Pendente |
| Útil | Padrão aplicado, branding + relatórios | Pendente |
| ULTJ | Padrão aplicado, apenas logo | Pendente |
