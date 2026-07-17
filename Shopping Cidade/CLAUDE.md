# CLAUDE.md — ArqOS do Shopping Cidade Curitiba

## O que é este sistema

Sistema operacional do **Shopping Cidade Curitiba** (Grupo Gadens) — shopping popular no
bairro Hauer, 24 anos, ~212 lojas. O negócio vive de **duas frentes que nunca se misturam
na mesma análise**: locação de espaço (B2B, crítica) e fluxo de consumidores (B2C, principal
por verba). O sistema calibra agentes, memória e processos para operar a mídia paga e o
comercial dessas duas frentes com o contexto real da conta.

## Leia no início de cada sessão

1. `memory/estrategia.md` — foco atual e prioridades
2. `core/core.md` — DNA e as regras das duas frentes
3. `company/company.md` — estrutura, propriedades e equipe
4. `memory/estado-da-conta-shopping-cidade.md` — **fonte de verdade** (estado, decisões, histórico)

> Ao trabalhar numa frente, **confirme B2C ou B2B antes de analisar.** As réguas não se comparam.

## Tom de voz

Quente, direto, confiante, de igual para igual — sem corporativês, sem promessa vazia.
Detalhe e nuance por público em `branding/brand.md`.

## Preferências de mensagem (não são regras travadas)

- **B2C:** preço/desconto é a língua do público C/D/E — pode usar (idealmente não só preço).
- **B2B:** preferir liderar com **fluxo e crescimento**, não preço. Iscas financeiras
  ("aluguel grátis / sem fiador / começou aqui") **evitadas por ora** — preferência
  reavaliável com dado do comercial, **não proibição**.
- Evitar posicionar o shopping como "barateiro" — preferência, não veto.

## Estrutura do sistema

| Pasta | Conteúdo |
|---|---|
| `/core` | DNA e princípios das duas frentes |
| `/company` | Estrutura, propriedades, equipe, endereço |
| `/branding` | Marca, tom, preferências de mensagem, brandbook e enxoval |
| `/products` | (reservado) as duas ofertas: locação B2B e ativo de fluxo B2C |
| `/sales` | ICP, funil, objeções, análise de segmentos, checklist comercial |
| `/marketing` | Estratégia de canais, calendário, briefings, campanhas, relatórios, scripts |
| `/memory` | Memória operacional — fonte de verdade, estratégia, decisões, campanhas, conhecimento |
| `/operations` | Processos recorrentes, dependências, reuniões |
| `/playbooks` | Processos passo a passo (refresh de ofertas, reestruturação B2B) |
| `/roadmap` | Prioridades e próximos passos |
| `/logs` | **Diário vivo — registrar TUDO que fizermos, sempre** |

## Regras de comportamento

1. Nunca gerar conteúdo genérico. Tudo baseado nos arquivos desta pasta.
2. Se faltar informação, sinalizar com `[PREENCHER]` — não inventar, não presumir.
3. **Confirmar a frente (B2C/B2B) antes de qualquer análise.** Nunca tratar conversões
   como iguais; identificar o que está sendo contado.
4. **Rastreamento não auditado:** todo dado de conversão é direcional — ressalva explícita.
5. **Registrar em `logs/changelog.md` toda ação relevante** (diário vivo — pedido do Gabriel).
   Decisões datadas em `memory/decisoes.md`; campanhas em `memory/campanhas.md`; mudanças de
   estado na fonte de verdade (`memory/estado-da-conta-shopping-cidade.md`, seção 15).
6. Cada sessão deve deixar o sistema mais inteligente.

## Agentes disponíveis (compartilhados no Grupo Gadens)

**Estratégico:** `agente-estrategico`, `agente-marketing`, `agente-comercial`
**Execução:** `copywriter`, `analisador-criativos` (e demais especialistas de `.claude/`)
