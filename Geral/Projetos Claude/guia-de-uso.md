# GUIA DE USO — SISTEMA DE GESTÃO DE TRÁFEGO PAGO
## Grupo Gadens · Gabriel Pauletto
### Como configurar, usar e evoluir este sistema

---

## O QUE É ESTE SISTEMA

Um conjunto de arquivos que transforma o Claude em um parceiro especializado de tráfego pago — diferente por conversa, por cliente e por plataforma. Cada arquivo tem um papel específico. Este guia explica como tudo se conecta e como usar de forma que você obtenha o melhor resultado possível.

---

## ARQUIVOS DO SISTEMA

| Arquivo | Função | Onde vai |
|---|---|---|
| `agente-meta-ads-gadens.md` | Instruções + prompt para sessões de Meta Ads | Projeto de cada cliente no Claude.ai |
| `agente-google-ads-gadens.md` | Instruções + prompt para sessões de Google Ads | Projeto de cada cliente no Claude.ai |
| `metodologia-meta-ads.md` | Referência técnica detalhada de Meta Ads | Documento anexo no projeto |
| `metodologia-google-ads.md` | Referência técnica detalhada de Google Ads | Documento anexo no projeto |
| `metodologia-tiktok-ads.md` | Referência técnica detalhada de TikTok Ads | Documento anexo no projeto |
| `guia-de-uso.md` | Este arquivo — como usar o sistema | Seu acervo pessoal |

---

## COMO CONFIGURAR NO CLAUDE.AI — PASSO A PASSO

### 1. Crie um projeto por cliente

No Claude.ai, crie um projeto separado para cada empresa do Grupo Gadens.
Nome sugerido: `[Nome da empresa] — Gadens`
Exemplo: `Shopping Desconto — Gadens`, `Construtora X — Gadens`

---

### 2. Configure as instruções do projeto

Dentro de cada projeto, acesse **Configurações > Instruções do Projeto**.

Cole o conteúdo do **Bloco 1** do arquivo de agente correspondente à plataforma principal do cliente.

Se o cliente usa Meta Ads e Google Ads com intensidade similar, cole o agente de Meta Ads nas instruções (é o mais abrangente em produção criativa) e adicione o Google como documento anexo.

> **Regra:** Instruções do projeto = comportamento e identidade do agente. Devem ser enxutas e focadas. Não cole os dois blocos juntos nas instruções — o Bloco 2 é para a conversa, não para as configurações.

---

### 3. Anexe os arquivos de metodologia como documentos do projeto

Ainda dentro do projeto, anexe os arquivos de metodologia relevantes:
- `metodologia-meta-ads.md` — para todos os clientes com Meta Ads ativo
- `metodologia-google-ads.md` — para todos os clientes com Google Ads ativo
- `metodologia-tiktok-ads.md` — quando TikTok Ads for relevante

Esses documentos ficam disponíveis em todas as conversas do projeto. O agente os consulta quando precisar de referência técnica mais detalhada.

---

### 4. Crie conversas separadas por plataforma

Dentro de cada projeto de cliente, crie conversas distintas:
- `Meta Ads — [Nome do cliente]`
- `Google Ads — [Nome do cliente]`
- `Alinhamentos gerais — [Nome do cliente]` (estratégia, relatórios, decisões que cruzam plataformas)

Isso evita que análises de plataformas diferentes se misturem e preserva o histórico de cada uma.

---

### 5. Abra cada sessão com o Prompt de Abertura

Ao iniciar uma nova conversa (ou retomar uma existente após um intervalo relevante), cole o **Bloco 2** do arquivo de agente correspondente, preenchido com os dados do cliente e o foco da sessão.

Isso garante que o agente não precise adivinhar contexto e entre direto no que você precisa.

---

## COMO ABRIR UMA SESSÃO — CHECKLIST

Antes de colar o Bloco 2 e enviar, verifique:

- [ ] O contexto do cliente está preenchido (empresa, nicho, objetivo, budget, metas)?
- [ ] O foco da sessão está marcado (diagnóstico, produção, estratégia)?
- [ ] Os dados que vou enviar estão organizados (prints, tabelas, exportações)?
- [ ] Estou abrindo na conversa certa (Meta ou Google)?
- [ ] Se for diagnóstico: tenho os dois períodos separados (últimos 30 dias + 30 dias anteriores)?

Se algum desses pontos estiver faltando, preencha antes de começar. Contexto incompleto gera análise genérica.

---

## CADÊNCIA DE VERIFICAÇÃO — SEM REUNIÕES, SEM BUROCRACIA

O objetivo é verificar o que precisa ser verificado, na frequência que faz sentido para cada tipo de dado. Não é reunião, não é ritual — é olhar o que importa no momento certo.

---

### Verificação rápida de anomalia — toda vez que abrir o computador

**Pergunta única: alguma coisa está quebrada?**

O que procurar:
- Campanha ativa com gasto zerado
- Gasto muito acima ou muito abaixo do ritmo esperado
- Conversão zerada em campanha que estava entregando
- Alerta de política, pagamento ou pixel no painel

**Quanto tempo:** 5 a 10 minutos por conta, máximo.
**Decisão:** só aja se houver anomalia real. Caso contrário, feche e siga.

> Configure alertas automáticos nas plataformas para anomalias de gasto e entrega. O que não disparar alerta, você não precisa abrir.

---

### Revisão de performance — a cada 7 dias por conta

**Pergunta central: a campanha está indo na direção certa em relação à semana anterior?**

O que verificar:
- CPL e volume vs semana anterior — subiu, estabilizou ou caiu?
- Termos de pesquisa novos no Google que precisam de ação (negativar ou promover)
- Palavra-chave com gasto alto e zero conversão nos últimos 14 dias
- Frequência dos conjuntos no Meta — está subindo?
- Criativo com CTR caindo progressivamente — sinal de fadiga

**Decisões que cabem aqui:**
- Negativar termos no Google
- Pausar criativo com fadiga confirmada por dado
- Ajustar orçamento em até 20–30%
- Acionar time para novo criativo com briefing pronto

**Decisões que não cabem aqui:**
- Trocar estratégia de lance
- Pausar campanha inteira
- Mudar evento de otimização
- Reestruturar conjuntos de anúncios

---

### Revisão de médio prazo — a cada 15 dias por conta

**Pergunta central: a estrutura está servindo ao objetivo, ou precisa de ajuste?**

O que verificar:
- Últimos 30 dias vs 30 anteriores: tendência geral por cliente
- Criativos rodando há mais de 30–45 dias sem renovação: planejar substituição
- Públicos: há sobreposição? Algum conjunto parou de entregar resultado?
- Budget: a distribuição de verba ainda reflete a prioridade do cliente?
- Rastreamento: algo mudou na LP que pode ter quebrado o pixel?

---

### Revisão estratégica — a cada 30 dias por conta

**Pergunta central: o que estamos fazendo ainda faz sentido para o objetivo de negócio?**

O que avaliar:
- Resultado real (leads, qualidade reportada pelo comercial) vs resultado de plataforma
- O CPL está coerente com o ticket e o ciclo de compra?
- Alguma campanha deve ser pausada, reformulada ou escalada?
- Há sazonalidade, novo produto ou mudança comercial que deve alterar a estratégia?
- O budget atual é suficiente para o objetivo?

---

## MATRIZ DE PRIORIZAÇÃO — ONDE COLOCAR ATENÇÃO PRIMEIRO

Com muitos clientes e muitas campanhas, use essa lógica para decidir onde focar:

```
                      PERFORMANCE
                   Boa          Ruim
               ┌──────────┬────────────┐
         Alto  │ Proteger │  URGENTE   │
BUDGET         │ monitorar│  agir logo │
               ├──────────┼────────────┤
         Baixo │  Deixar  │ Investigar │
               │  rodando │ sem pressa │
               └──────────┴────────────┘
```

- **Alto budget + boa performance:** não mexa sem razão clara. O erro mais comum é otimizar o que já está funcionando
- **Alto budget + performance ruim:** prioridade máxima. Dinheiro sendo queimado agora
- **Baixo budget + boa performance:** deixe rodar, olhe quinzenalmente
- **Baixo budget + performance ruim:** investigue, mas sem urgência — o impacto financeiro é baixo

---

## O QUE FAZER — E O QUE NUNCA FAZER

### Fazer sempre
- Preencher o contexto do cliente antes de abrir a sessão
- Separar os períodos de análise (últimos 30 dias vs 30 anteriores — nunca os 60 juntos)
- Classificar o estado da campanha antes de recomendar ação (aprendizado, estável, fadiga, degradação)
- Perguntar ao agente quando não souber onde encontrar um dado no painel
- Terminar cada sessão com uma lista clara do que fazer a seguir

### Nunca fazer
- Mexer em campanha em aprendizado — qualquer alteração reinicia o processo
- Pausar palavra-chave com volume sem ter substituta rodando
- Trocar estratégia de lance antes de corrigir as conversões configuradas
- Avaliar CPL sem saber o que está sendo contado como conversão
- Aumentar orçamento em mais de 20–30% de uma vez (Meta e Google)
- Comparar CPL entre campanhas com conversões de valor diferente
- Abrir sessão sem contexto do cliente preenchido — a resposta será genérica

---

## PAPEL DO ANALYTICS NO MONITORAMENTO

O analytics não analisa — ele monitora e reporta. Análise e decisão ficam com você.

**O que o analytics pode fazer com um checklist bem construído:**
- Abrir os painéis nas frequências definidas e registrar os números em template fixo
- Identificar anomalias óbvias (gasto zerado, entrega parada, alerta visível no painel)
- Exportar relatórios comparativos (últimos 30 dias vs 30 anteriores) nas colunas certas
- Registrar o que mudou desde a última revisão (novos criativos no ar, ajustes feitos)

**O que você constrói para isso funcionar:**
1. Um checklist por plataforma com as colunas exatas a exportar e o que considerar anormal
2. Um template de reporte fixo — o analytics preenche, você lê e decide
3. Critérios de alerta objetivos: o que é normal, o que é suspeito, o que é urgente (ex: "CPL acima de 2x a média dos últimos 14 dias = reportar imediatamente")

**Automatização futura com Claude Code:**
O monitoramento que hoje depende de uma pessoa olhando manualmente pode ser automatizado via Google Ads API, Meta Marketing API e TikTok Ads API. Um script que roda automaticamente, compara com a média histórica e te manda alerta só quando algo sai do padrão. Isso elimina a dependência de verificação manual e garante cobertura mesmo quando o analytics está em outra demanda. Quando quiser avançar nisso, o Claude Code é a ferramenta para construir — requer acesso às APIs e algumas semanas de desenvolvimento.

---

## COMO EVOLUIR ESTE SISTEMA

Este sistema foi construído como ponto de partida, não como versão final. Ele deve ser atualizado conforme você aprende o que funciona e o que não funciona.

**Quando atualizar os arquivos de agente:**
- Quando um modo de operação não estiver gerando o resultado esperado
- Quando você descobrir uma regra de análise que sempre se repete e ainda não está documentada
- Quando uma plataforma lançar mudança relevante que afete a metodologia

**Quando atualizar as metodologias:**
- Quando um framework de análise evoluir com base em experiência real
- Quando novos tipos de campanha ou objetivos forem relevantes
- Quando benchmarks de mercado mudarem significativamente

**Como registrar aprendizados:**
Ao final de sessões com insights relevantes, abra a conversa de "Alinhamentos gerais" do cliente e documente:
- O que foi testado
- O que funcionou ou não
- O raciocínio por trás da decisão
- O resultado após X dias

Isso cria um histórico que você pode consultar em sessões futuras e que alimenta briefings mais precisos com o tempo.

---

## ESTRUTURA COMPLETA DO SISTEMA — VISÃO GERAL

```
CLAUDE.AI
│
├── PROJETO: [Cliente A] — Gadens
│   ├── Instruções do projeto → Bloco 1 do agente (Meta ou Google)
│   ├── Documentos anexos
│   │   ├── metodologia-meta-ads.md
│   │   ├── metodologia-google-ads.md
│   │   └── metodologia-tiktok-ads.md
│   ├── Conversa: Meta Ads — [Cliente A]
│   ├── Conversa: Google Ads — [Cliente A]
│   └── Conversa: Alinhamentos gerais — [Cliente A]
│
├── PROJETO: [Cliente B] — Gadens
│   └── (mesma estrutura)
│
└── PROJETO: [Cliente C] — Gadens
    └── (mesma estrutura)

SEU ACERVO (fora do Claude.ai)
├── agente-meta-ads-gadens.md     ← fonte para configurar projetos
├── agente-google-ads-gadens.md   ← fonte para configurar projetos
└── guia-de-uso.md                ← este arquivo
```

---

*Grupo Gadens · Gabriel Pauletto*
*Sistema de Gestão de Tráfego Pago — Versão 1.0*
