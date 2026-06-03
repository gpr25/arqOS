# CLAUDE.md — ArqOS
# Sistema Operacional do Seu Negócio

> **Se o onboarding ainda não foi feito:** execute `/instalar-self` agora.
> O sistema vai guiar todo o processo — materiais, site, redes sociais, perguntas por perfil.
> Este arquivo será atualizado com o contexto real do seu negócio ao final.

---

## Se o onboarding já foi feito

Leia no início de cada sessão:
1. `memory/estrategia.md` — foco atual e prioridades
2. `core/core.md` — DNA e princípios da operação
3. `company/company.md` — estrutura da empresa

---

## Estrutura do sistema

O ArqOS organiza o conhecimento do negócio em pastas temáticas.
Cada pasta tem um propósito claro — nunca misture conteúdo entre elas.

```
ArqOS/
│
├── core/                       ← DNA e princípios da operação
│   └── core.md
│
├── company/                    ← estrutura, história e equipe
│   └── company.md
│
├── branding/                   ← identidade e comunicação
│   ├── brand.md                ← tom de voz, frases proibidas, personalidade
│   └── identidade.md           ← logo, paleta, tipografia (se tiver)
│
├── products/                   ← produtos e serviços
│   └── [produto].md            ← um arquivo por produto ou empreendimento
│
├── sales/                      ← processo comercial
│   ├── funil.md                ← etapas, conversão, gargalos
│   ├── icp.md                  ← perfil do cliente ideal
│   └── scripts/
│       ├── atendimento.md
│       ├── follow-up.md
│       └── objecoes.md
│
├── marketing/                  ← estratégia e calendário
│   ├── estrategia.md           ← canais, pilares, posicionamento
│   └── calendario.md           ← calendário editorial
│
├── memory/                     ← memória operacional (cresce com o uso)
│   ├── estrategia.md           ← foco atual e prioridades ← LER SEMPRE
│   ├── decisoes.md             ← decisões registradas
│   ├── campanhas.md            ← campanhas executadas
│   └── conhecimento.md         ← aprendizados acumulados
│
├── operations/                 ← processos operacionais
│   └── fluxo.md
│
├── playbooks/                  ← processos documentados
│   └── [processo].md
│
├── roadmap/                    ← metas e próximos passos
│   └── roadmap.md
│
└── logs/                       ← histórico do sistema
    └── changelog.md
```

**Regra de manutenção:** quando algo novo acontecer na operação, registre no arquivo correspondente. O sistema é tão inteligente quanto o contexto que recebe.

---

## Agentes disponíveis — 14 agentes especializados

### Camada estratégica
- `agente-estrategico` — análise de prioridades, decisões, roadmap, gargalos operacionais
- `agente-marketing` — estratégia de canais, budget, planejamento de campanhas, calendário editorial. Não cria copy — delega ao copywriter.
- `agente-comercial` — funil, qualificação de leads, scripts, objeções, follow-up

### Camada de execução
- `copywriter` — toda tarefa de escrita persuasiva: anúncios, headlines, landing pages, emails, scripts, WhatsApp, legendas, posts
- `designer` — prompts de imagem, direção visual, identidade, avaliação de peças
- `gestor-trafego` — Meta Ads, Google Ads, performance, segmentação, relatórios
- `seo-especialista` — auditoria técnica, keywords, on-page, SEO local, Google Search Console
- `ux-ui-especialista` — landing pages, formulários, wireframes, CRO, testes A/B
- `agente-atendimento` — scripts de WhatsApp, sequências de follow-up, superação de objeções, qualificação de leads
- `agente-conteudo` — Reels, carrosséis, posts, calendário editorial, algoritmos de plataforma
- `agente-dados` — métricas, KPIs, análise de funil, cohort, VSO, CPL, storytelling com dados

### Camada especializada imobiliária
- `agente-lancamento` — estratégia de lançamento: VGV, TIR, fases, lista VIP, distribuição e corretagem
- `agente-documentos` — propostas que fecham, apresentações, memoriais descritivos, contratos básicos
- `agente-financeiro` — precificação, margens, break-even, viabilidade de empreendimento, fluxo de caixa

---

## Comandos disponíveis

**Operação do sistema:**
- `/instalar-self` — onboarding adaptativo completo
- `/resumo` — estado atual do negócio em 3 blocos
- `/atualizar` — escaneia arquivos e sinaliza o que está incompleto
- `/mapear-rotinas` — mapeia tarefas repetitivas e gera fichas de automação

**Conteúdo:**
- `/gerar-conteudo` — post, Reel ou carrossel calibrado com a identidade
- `/carrossel` — carrossel com identidade visual da empresa
- `/publicar-tema` — artigo + carrossel + legendas a partir de um tema
- `/gerar-email` — email de atendimento, prospecção, nurturing ou follow-up
- `/gerar-script` — script de atendimento ou follow-up por canal e etapa
- `/email-profissional` — email profissional calibrado ao destinatário
- `/gpt-image-2` — geração de imagens (requer Codex CLI + ChatGPT)

**Comercial:**
- `/gerar-proposta` — proposta comercial personalizada para prospect
- `/gerar-follow-up` — mensagem de follow-up por etapa do funil
- `/gerar-diagnostico` — diagnóstico operacional de prospect ou da própria operação
- `/gerar-briefing` — briefing estruturado para agência, fornecedor ou equipe

**Marketing:**
- `/gerar-campanha` — estrutura completa de campanha com canais, copy e cronograma
- `/gerar-copy` — copy de anúncio Meta Ads, Google Ads ou landing page
- `/anuncio-google` — estrutura de campanha Google Ads com CSV para importação
- `/responder-avaliacoes` — respostas para avaliações do Google Meu Negócio

**Dados e performance:**
- `/analisar-dados` — resumo executivo de CSV/Excel/JSON com insights acionáveis
- `/relatorio-ads` — relatório semanal Google Ads + Meta Ads a partir de CSVs

---

## Skills disponíveis

Ver `skills/README.md` para configuração.

- `skills/blotato/` — publicar e agendar posts em Instagram + LinkedIn (requer conta Blotato)
- `skills/instagram-publisher/` — publicar carrosséis no Instagram via Graph API
- `gpt-image-2` — geração de imagens via `/gpt-image-2` (requer Codex CLI + ChatGPT)

---

## Regras de comportamento do sistema

1. **Nunca gerar conteúdo genérico.** Tudo baseado nos arquivos desta pasta.
2. **Se faltar informação, sinalizar.** Usar `[PREENCHER]` e indicar o que precisa ser completado.
3. **Não inventar, não presumir.** Se o contexto não estiver nos arquivos, perguntar.
4. **Cada sessão deve deixar o sistema mais inteligente.** Registrar aprendizados e decisões.
5. **Prioridades estão em `memory/estrategia.md`.** Ler antes de qualquer tarefa estratégica.

---

*ArqOS — m2 Intelligence · m2int.com.br*
