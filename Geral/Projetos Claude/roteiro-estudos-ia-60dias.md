# ROTEIRO DE ESTUDOS — CLAUDE CODE E IA APLICADA
## 60 dias até operar de verdade. Aprender fazendo, não estudando antes de fazer.
### Meta de sucesso: automatizar relatórios e apresentações até o fim do prazo.

> Nota sobre atualidade: este roteiro usa a terminologia atual do Claude Code em 2026 (CLAUDE.md, Plan Mode, Subagents, Skills, Hooks, MCP), confirmada por busca recente. Esse ecossistema muda rápido; revalide com a documentação oficial (docs.claude.com) a cada poucas semanas.

---

## PRINCÍPIO DO ROTEIRO

Você não vai separar "estudar" de "construir". Cada fase entrega um pedaço funcional do seu objetivo final (automatizar relatório e apresentação). Sintaxe e conceito se aprendem dentro do projeto real, não antes dele.

---

## FASE 1 (Dias 1-15) — Fundação mínima + primeiro script rodando

**Objetivo:** o script de controle de prazos (que já desenhamos) funcionando no seu computador, lendo uma planilha e te avisando vencimentos.

**O que aprender, só o suficiente para isso:**
- Terminal: navegar pastas, rodar um script Python (cd, ls, python nome.py)
- Python básico: o que já está no material que te dei (ler planilha, comparar datas, imprimir relatório)
- Git básico: salvar versão do seu script (apenas init, add, commit). Não precisa de GitHub ainda.

**Como:**
- Use o material "claude-code-controle-prazos.md" que já te entreguei como ponto de partida.
- Abra o Claude Code, cole o prompt de lá, construa junto, peça para ele te explicar cada parte.
- Quando travar, pergunte ao próprio Claude Code "por que isso deu erro", não pare para ler manual.

**Critério de conclusão da fase:** o script roda, lê sua planilha de campanhas, avisa o que está vencendo.

---

## FASE 2 (Dias 16-30) — Conectar a dados reais (rumo ao relatório automático)

**Objetivo:** dar o primeiro passo do seu objetivo final: puxar dados de campanha sem exportar manualmente.

**O que aprender:**
- O que é uma API e como ela devolve dados em JSON (conceito simples: você pede, ela responde uma "ficha" de dados)
- Autenticação básica (token de acesso, o que é e como usar)
- Configurar acesso de teste à Meta Marketing API ou Google Ads API (comece por uma só, a que for mais fácil de configurar)

**Como:**
- Use o Claude Code para te guiar na configuração passo a passo (ele lê a documentação da API e te orienta).
- Primeira meta pequena: um script que puxa o gasto e os leads de UMA campanha do mês, automaticamente, sem você exportar nada.
- Use CLAUDE.md (arquivo de memória do projeto) para guardar o contexto do que você está construindo, do jeito que já fazemos com as Instruções de Projeto aqui no cérebro central. É o mesmo princípio, dentro do Claude Code.

**Critério de conclusão:** um script que busca dados reais de uma plataforma sem export manual.

---

## FASE 3 (Dias 31-45) — Domar o Claude Code de verdade (eficiência e MCP)

**Objetivo:** parar de usar o Claude Code no escuro e começar a operar com controle de custo e contexto.

**O que aprender:**
- Plan Mode: pedir para o Claude Code planejar antes de executar, para você revisar antes de rodar
- Subagents: agentes especializados para tarefas específicas (ex: um para puxar dado, outro para montar o texto do relatório), em vez de um agente genérico fazendo tudo
- Gestão de contexto e token: como o histórico do projeto consome "memória" da IA, e como limpar/resumir para não desperdiçar
- MCP (Model Context Protocol): o conceito de conectar o Claude a uma ferramenta externa (ex: Google Sheets, Google Drive) sem você copiar e colar dado manualmente

**Como:**
- Documentação oficial da Anthropic sobre Claude Code e MCP (docs.claude.com) é a fonte primária, escrita por quem construiu a ferramenta.
- Busque "Claude Code best practices 2026" para encontrar compilações atualizadas de boas práticas (esse tipo de conteúdo muda rápido, prefira o que tiver poucos meses).
- Conecte um MCP simples (Google Sheets ou Google Drive) ao seu projeto de automação.

**Critério de conclusão:** você entende a diferença entre Subagent, Skill e MCP, e tem pelo menos um MCP conectado funcionando.

---

## FASE 4 (Dias 46-60) — O agente de relatório e apresentação (sua meta de sucesso)

**Objetivo:** o primeiro fluxo completo, automático, do dado bruto ao documento pronto.

**O que construir:**
- Um fluxo: puxa dado da API (Fase 2) → processa e calcula (CPL, CAC, ROI, usando a lógica da calculadora que já existe) → gera um documento (Word) ou apresentação (PowerPoint) formatado → te entrega pronto.
- Use Subagents se fizer sentido dividir (um agente busca dado, outro escreve o relatório).

**Como:**
- Você já tem o padrão de documento (o Diagnóstico que construímos) e a calculadora. O objetivo aqui é o Claude Code gerar essa peça automaticamente a partir do dado puxado, não você copiar e colar.
- Use o Claude Code para isso especificamente, pedindo para ele usar as bibliotecas de geração de documento (mesma lógica do que já fazemos aqui no chat, mas rodando localmente, sem você pedir toda vez).

**Critério de sucesso do roteiro inteiro:** você roda um comando, e sai um relatório (ou apresentação) de um cliente, pronto, sem você exportar nada manualmente nem montar nada à mão.

---

## QUEM ACOMPANHAR (e por quê)

- **Documentação oficial da Anthropic (docs.claude.com):** fonte primária, escrita pela equipe que constrói a ferramenta. Sempre que um conceito mudar de nome ou comportamento, é aqui que confirma.
- **Blog de engenharia da Anthropic:** padrões de como construir agentes bem, direto de quem desenha o produto.
- Para professores didáticos no estilo Pedro Sobral (ensinam o "como fazer" passo a passo): busque por cursos e tutoriais de Claude Code atualizados nos últimos 2-3 meses, porque o ecossistema muda rápido e conteúdo de mais de 6 meses já fica defasado em detalhe de interface. Não tenho confiança em apontar um nome específico de canal como "o melhor" sem verificar a atualidade no momento em que você for estudar; faça essa busca quando chegar na Fase 3.
- Para quem define rumo e tendência (engenheiros e fundadores que decidem para onde a ferramenta vai): acompanhe os comunicados oficiais de lançamento da Anthropic e, quando quiser opinião de prática real de mercado, busque por relatos recentes de quem usa Claude Code em produção (esse tipo de relato muda de autor com frequência; prefira o conteúdo mais recente ao nome mais famoso).

---

## REGRA DE ECONOMIA DE TOKEN (resposta rápida à sua dúvida de otimização)

Três hábitos que já valem desde a Fase 1:
- Resuma ou limpe o histórico do projeto periodicamente (contexto velho consome token sem ajudar).
- Use Plan Mode para revisar o plano antes de deixar o agente executar uma tarefa grande, evita retrabalho caro.
- Use o modelo certo para a tarefa: Haiku para tarefa mecânica, Sonnet para construção com raciocínio, Opus só quando a decisão for complexa de verdade (mesma régua que já vale para nossas conversas aqui).

---

*Grupo Gadens · Gabriel Pauletto · Roteiro de 60 dias v1.0*
