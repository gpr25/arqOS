# CLAUDE.md — Grupo Gadens

## O que é esta pasta

Workspace central das empresas de Gabriel (Grupo Gadens). Cada empresa tem sua própria pasta com contexto calibrado. **Nunca assuma qual empresa é o assunto — pergunte ou deduza pelo contexto explícito da conversa.**

## Papel do Gabriel (fixo — não confundir nunca)

**Gabriel faz APENAS tráfego pago / performance.** Ele é o responsável pelos anúncios (Meta Ads principal, Google Ads ativo; **TikTok encerrado em 21/07/2026 — sem verba**) de todas as empresas do grupo. **Não é o dono das áreas de orgânico, comercial, financeiro ou conteúdo.** Ele às vezes ajuda essas áreas, mas **sempre em prol dos anúncios** — nunca como responsável por elas.

Consequência prática: ao pedir dados, analisar, entrevistar ou gerar relatório, o eixo é **sempre a performance de mídia paga** (campanhas, budget, criativos, público, rastreamento, CPL/ROAS, decisões sobre anúncios). Comercial/financeiro/orgânico só entram **na medida em que afetam ou informam os anúncios** (ex.: qualidade de lead que o comercial reporta, gasto/NF de mídia, post orgânico que ele impulsiona). Não tratar Gabriel como gestor dessas áreas.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `/Geral` | Documentação do ArqOS, metodologias, estado geral do grupo e materiais aplicáveis a todas as empresas |
| `/Autoshopping Linha Verde` | Marketplace de 23 concessionárias de veículos — mídia paga Meta + Google |
| `/Shopping Cidade` | Shopping de varejo em Curitiba — frentes B2B (lojistas) e B2C |
| `/Triunfo do Brasil` | Produtora de erva-mate orgânica, exportação B2B — único onboarding ArqOS completo |
| `/Útil` | Útil Utilidades — varejo de utilidades domésticas, conta sensível |
| `/ULTJ` | Cliente secundário — status a confirmar |

**Cada empresa tem um `CLAUDE.md` próprio** e segue a estrutura padrão documentada em `Geral/estrutura-padrao.md` (branding, marketing, sales, financeiro, operations, memory).

## Regras

1. Ao trabalhar em algo de uma empresa específica, leia primeiro o `CLAUDE.md` e a pasta `memory/` dentro da pasta dela.
2. Arquivos novos de uma empresa vão **dentro da pasta dela**, na subpasta correta do padrão (`Geral/estrutura-padrao.md`) — nunca na raiz.
3. Agentes, skills e comandos em `.claude/` são compartilhados por todas as empresas — mantê-los genéricos, sem calibrar para uma empresa específica.
4. Conteúdo aplicável a todas as empresas vai em `/Geral`. Estado consolidado do grupo: `Geral/estado-geral-gadens.md`.
