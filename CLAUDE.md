# CLAUDE.md — ArqOS da Triunfo

## O que é este sistema

A Triunfo é uma produtora brasileira de erva-mate orgânica com mais de 50 anos de história, exportando B2B para os cinco continentes (setores food, beverage e nutracêuticos). Este ArqOS foi calibrado com o contexto real da operação de marketing e mídia paga da Triunfo, conduzida por Gabriel.

## Leia no início de cada sessão

1. `memory/estrategia.md` — foco atual e prioridades
2. `core/core.md` — DNA e princípios da operação
3. `company/company.md` — estrutura da empresa

## Tom de voz

Arquétipos de marca: **Criador** (inovação, visionária, transforma conceitos) + **Prestativo** (confiável, amigável, centrada no cliente). Valores: confiança, tradição familiar, sustentabilidade. Ver `branding/brand.md` para detalhes — frases proibidas ainda `[PREENCHER]`.

## Frases proibidas

`[PREENCHER]` — ainda não mapeado com o time.

## Estrutura do sistema

| Pasta | Conteúdo |
|---|---|
| `/core` | DNA e princípios da operação |
| `/company` | Estrutura e história da empresa |
| `/branding` | Identidade e comunicação |
| `/products` | Produtos e serviços |
| `/sales` | Processo comercial, funil, scripts, ICP |
| `/marketing` | Estratégia de canais e calendário |
| `/memory` | Memória operacional — cresce com o uso |
| `/operations` | Processos e fluxos |
| `/playbooks` | Processos documentados |
| `/roadmap` | Metas e próximos passos |
| `/logs` | Histórico e changelog |

## Agentes disponíveis

**Estratégico:** `agente-estrategico`, `agente-marketing`, `agente-comercial`

**Execução:** `copywriter`, `designer`, `gestor-trafego`, `seo-especialista`, `ux-ui-especialista`, `agente-atendimento`, `agente-conteudo`, `agente-dados`

**Global (todas as empresas de Gabriel, não específico da Triunfo):** `analisador-criativos` — configurado em `~/.claude/agents/`, disponível em qualquer projeto.

**Especializado imobiliário** (não aplicável ao negócio da Triunfo, mantidos por padrão do ArqOS): `agente-lancamento`, `agente-documentos`, `agente-financeiro`

**Prioritários para o foco atual (30 dias — geração de leads via mídia paga):** `gestor-trafego` e `agente-marketing`.

## Comandos disponíveis

Ver lista completa em `README.md` do ArqOS — destaque para `/gerar-copy`, `/anuncio-google`, `/gerar-campanha`, `/relatorio-ads` e `/analisar-dados`, mais relevantes para a operação de mídia paga da Triunfo. `/analisar-criativo` também está disponível (comando global, não específico da Triunfo — ver `~/.claude/commands/`).

## Regras de comportamento

1. Nunca gerar conteúdo genérico. Tudo baseado nos arquivos desta pasta.
2. Se faltar informação, sinalizar com `[PREENCHER]`.
3. Não inventar, não presumir. Se o contexto não estiver nos arquivos, perguntar.
4. Cada sessão deve deixar o sistema mais inteligente.
5. Registrar decisões em `memory/decisoes.md` e campanhas em `memory/campanhas.md`.
