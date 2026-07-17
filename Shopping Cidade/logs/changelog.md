# changelog.md — Diário Vivo do Sistema · Shopping Cidade

> **Registrar TUDO aqui, sempre** (pedido do Gabriel). Toda ação relevante — análise,
> criação, mudança de campanha, decisão, correção — vira uma linha datada.
> Formato: `AAAA-MM-DD` · frente/área · o que foi feito.
> Mudanças de ESTADO também entram na fonte de verdade (`../memory/estado-da-conta-shopping-cidade.md`, seção 15).

---

## 2026-07-17 — Instalação do ArqOS (Perfil 4 — Outro negócio)

**Onboarding conduzido via `Geral/onboarding/INSTALAR.md`.** Materiais pré-existentes lidos
e tratados como Etapa 3; estrutura padrão preservada, núcleo ArqOS complementado.

**Pastas criadas:** `core/`, `company/`, `products/`, `playbooks/`, `roadmap/`, `logs/`
(preservadas: `branding/`, `marketing/`, `sales/`, `operations/`, `memory/`).

**Arquivos criados:**
- `core/core.md` — DNA das duas frentes, regra central, posicionamento por público, princípios
- `company/company.md` — estrutura, endereço, números real vs público, equipe, propriedades
- `branding/brand.md` — cores, Poppins, tom, preferências de mensagem (B2C preço ok / B2B evita por ora)
- `sales/icp.md` — ICP B2B (lojista estabelecido) + segmentos aprovados + público B2C
- `sales/funil.md` — funil B2B, gap RD Station→CRM, geração de lead, hierarquia de métricas
- `sales/scripts/objecoes.md` — objeção-mãe ("por que aqui?") e objeções por segmento
- `operations/fluxo.md` — rotinas semanais, dependências críticas (Gabriel = ponto único de falha)
- `playbooks/refresh-ofertas-b2c.md` — protocolo carrossel quarta/sexta/segunda
- `playbooks/reestruturacao-b2b-meta.md` — sequência travada do CBO
- `marketing/estrategia.md` — alocação e estrutura de canais das duas frentes
- `marketing/calendario.md` — cadência fixa + template 30 dias
- `memory/estrategia.md` — foco atual, definição de sucesso 30 dias, o que não pode dar errado
- `memory/conhecimento.md` — inteligência acumulada e princípios provados
- `memory/decisoes.md` — registro de decisões (com as 2 decisões de hoje)
- `memory/campanhas.md` — campanhas ativas e referência jun/2026
- `roadmap/roadmap.md` — pendências priorizadas (urgente/30d/horizonte)
- `CLAUDE.md` — reescrito para o sistema ArqOS completo

**Decisões registradas hoje:**
1. "Primeiro mês grátis / sem fiador" rebaixado de regra travada → **preferência reavaliável**.
   Fonte de verdade e teardown reconciliados (seção 4 + changelog).
2. Número público de fluxo travado pela gestão: **~200k/mês · ~6k/dia · ~10k fim de semana**
   (baseline medido da amostra 01/05–15/07: ~170k/mês, guardado como uso interno).

**Análises feitas:**
- Fluxo real extraído do `.xlsx` (76 dias, 428.283 visitantes, média ~5.635/dia).
- Relatório de junho (PDF) lido: Meta 1,08 mi alcance / Google conversões contaminadas por Store Visits.
- Site e IG analisados ao vivo (Playwright): spam de apostas **confirmado em produção**;
  IG 129 mil seguidores, orgânico bom.

**Campos `[PREENCHER]` pendentes:** objeções reais do comercial (`sales/scripts/objecoes.md`);
calendário editorial 30 dias (`marketing/calendario.md`).

---

## 2026-07-17 — LP B2B · prompt v2 para o Stitch

- Gerado `marketing/briefings/prompt-lp-b2b-stitch-v2.md`, calibrado com ICP, segmentos e
  objeções do onboarding. Substitui o prompt v1 (marcado como superado em `briefing-lp-b2b-locacao.md`).
- v2 lidera com fluxo/crescimento (não preço), usa os ângulos por segmento e a objeção-mãe
  ("você não está comprando um espaço, está comprando fluxo pronto"), prova social "marcas que
  crescem aqui", formulário qualificador ("já tem loja em operação?") e remove o captcha de continha.
- Números do prompt = decisão pública de gestão (~200k/mês · +6k/dia · ~10k fim de semana).
  Ressalva registrada: mensal ~200k é extrapolação acima da amostra real (~170k); o diário
  (~6k) é o número mais defensável. Próximo passo: Gabriel gera no Stitch e importamos.

- **2026-07-17** · B2B/LP · **LP v2 construída à mão** (`marketing/lp-b2b/lp-shopping-cidade-b2b.html`),
  assumindo após o Stitch gerar 3 versões incompletas/quebradas (sem form, 3D quebrado, genéricas).
  Página completa: hero petróleo com gradiente animado + canvas de "fluxo", ticker, big-numbers com
  contador, blocos fluxo/para-quem-é/segmentos (ganchos do onboarding)/prova-social/como-funciona/
  formulário qualificador ("já tem loja?")/CTA band. Direção: clara e arejada, popular-vibrante (pedido
  do Gabriel), várias animações, sem foto genérica. Publicada como Artifact de preview. Pendências:
  trocar fonte p/ Poppins em produção, ligar form ao RD Station, links reais WhatsApp/Instagram,
  depoimento real, hospedagem (⚠ não subir no WordPress com spam de apostas).

---

_Próximas entradas abaixo, sempre datadas._
