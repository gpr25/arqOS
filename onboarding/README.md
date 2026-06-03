# onboarding/ — Guia de Distribuição
# ArqOS Self System — m2 Intelligence

---

## O que o cliente recebe

Ao adquirir o ArqOS Self System, o cliente recebe uma pasta completa que contém:

**Sistema pronto para uso:**
- **14 agentes especializados** com conhecimento de nível sênior — comercial, marketing, atendimento, conteúdo, dados, lançamento, documentos, financeiro e mais
- **22+ comandos operacionais** — do script de atendimento à proposta comercial, do carrossel ao relatório
- **Skills de publicação** — Instagram, LinkedIn e integrações externas
- **Onboarding adaptativo** que constrói o sistema com o contexto real da empresa

**Pré-requisitos do cliente:**
- Claude Code instalado (claude.ai/code ou `npm install -g @anthropic-ai/claude-code`)
- Conta Claude com plano Pro ou acima

---

## O que o onboarding cria

Ao final do onboarding, os seguintes arquivos são criados com o contexto real do negócio:

**Estrutura base (todos os perfis):**
```
CLAUDE.md                       ← ponto de entrada do sistema
core/core.md                    ← DNA e princípios da operação
company/company.md              ← estrutura e história da empresa
branding/brand.md               ← tom de voz, identidade, frases proibidas
memory/estrategia.md            ← foco atual e prioridades
memory/decisoes.md              ← decisões registradas (template vazio)
memory/campanhas.md             ← campanhas executadas (template vazio)
roadmap/roadmap.md              ← marcos e próximos passos
logs/changelog.md               ← histórico do sistema
```

**Arquivos adicionais por perfil:**

| Arquivo | Incorporadora | Imobiliária | Corretor | Outro |
|---|---|---|---|---|
| `branding/identidade.md` | Se tiver identidade visual | Se tiver | Se tiver | Se tiver |
| `products/[produto].md` | Um por empreendimento | `products/carteira.md` | — | Depende |
| `sales/funil.md` | ✓ | ✓ | ✓ | ✓ |
| `sales/icp.md` | ✓ | ✓ | ✓ | ✓ |
| `sales/scripts/objecoes.md` | ✓ | ✓ | ✓ | ✓ |
| `sales/scripts/atendimento.md` | ✓ | ✓ | ✓ | ✓ |
| `sales/scripts/follow-up.md` | — | — | ✓ | Depende |
| `marketing/estrategia.md` | ✓ | ✓ | ✓ | ✓ |
| `operations/fluxo.md` | ✓ | ✓ | — | Depende |
| `playbooks/` | Um por processo mapeado | Um por processo | — | Depende |
| `memory/conhecimento.md` | ✓ | ✓ | — | Depende |

---

## Perfis e estimativa de tempo

| Perfil | Blocos | Perguntas estimadas | Tempo |
|---|---|---|---|
| Incorporadora / Construtora | 4 blocos | ~14 perguntas | 25-35 min |
| Imobiliária | 4 blocos | ~12 perguntas | 20-30 min |
| Corretor Autônomo | 3 blocos | ~9 perguntas | 15-25 min |
| Outro tipo de negócio | 4 blocos | ~11 perguntas | 20-30 min |

*Tempo reduzido significativamente quando o cliente traz materiais (apresentação, manual de marca) e links de site/redes sociais.*

---

## Como o onboarding funciona (v3.1)

O processo tem 5 etapas antes dos blocos de perguntas:

1. **Identificação** — nome da pessoa e da empresa (primeiro — o sistema personaliza tudo a seguir)
2. **Ferramentas** — verifica Playwright MCP; instrui como configurar se necessário; permite seguir sem ele (com aviso)
3. **Materiais** — lê apresentações, manuais, portfólios e pula perguntas já respondidas
4. **Site e redes sociais** — acessa com Playwright (fallback: WebFetch); mapeia posicionamento e confirma
5. **Seleção de perfil** — 4 opções

**Por que Playwright:** sites modernos e redes sociais carregam conteúdo via JavaScript. WebFetch só captura HTML estático — incompleto para Instagram e sites React/Next.js. O Playwright renderiza como navegador real.

Depois, perguntas por bloco — uma de cada vez — com checkpoint de síntese ao final de cada bloco. Arquivos criados progressivamente (ao final de cada bloco, não tudo no final).

Arquivos são criados **progressivamente** (ao final de cada bloco), não todos de uma vez no final.

---

## Suporte pós-onboarding

- Documentação: cada agente tem seção "Como instalar e calibrar"
- Suporte: m2int.com.br
- Contato: contato@m2int.com.br

---

## Notas para quem distribui

- O onboarding é guiado mas exige participação ativa do cliente — não é automático
- Quanto mais materiais o cliente trouxer, mais preciso o resultado e menos perguntas ele responde
- Skills externas têm pré-requisitos próprios: blotato requer conta paga; gpt-image-2 requer ChatGPT
- Nunca prometer integrações nativas com CRMs imobiliários — fora do escopo atual
- O sistema funciona para qualquer tipo de empresa, não apenas imobiliário

---

*ArqOS Self System v3.0 — m2 Intelligence*
*m2int.com.br*
