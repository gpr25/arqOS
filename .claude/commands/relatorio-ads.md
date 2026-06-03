---
name: "relatorio-ads"
description: "Gerar relatório semanal consolidado de performance de mídia paga (Google Ads + Meta Ads) a partir de CSVs exportados das plataformas. Acionar toda semana para revisar performance e definir próximas ações."
---

# /relatorio-ads — Relatório semanal de Google Ads + Meta Ads

Gere um relatório semanal consolidado de performance de mídia paga a partir de CSVs exportados das plataformas.

Arquivos ou dados: $ARGUMENTS

Se nenhum arquivo for fornecido, peça que cole os dados ou informe o caminho dos CSVs (Google Ads Editor export ou Meta Ads Manager export).

## Estrutura do relatório

### 1. Resumo executivo
- Período analisado
- Investimento total (Google + Meta)
- Leads gerados / conversões
- CPL médio (Custo por Lead)
- Variação vs. semana anterior (se houver dados)

### 2. Google Ads
- Campanhas ativas e status
- Impressões, cliques, CTR
- CPC médio, custo total
- Conversões e taxa de conversão
- Palavras-chave com melhor e pior performance
- Termos de pesquisa relevantes ou negativos a adicionar

### 3. Meta Ads (Facebook + Instagram)
- Campanhas e conjuntos ativos
- Alcance, impressões, frequência
- Cliques, CTR, CPM, CPC
- Leads gerados e CPL
- Criativos com melhor performance
- Público com melhor resultado

### 4. Análise e recomendações
Para cada plataforma:
- O que está funcionando (manter ou escalar)
- O que está fraco (pausar, ajustar ou testar alternativa)
- 2-3 ações concretas para a próxima semana

### 5. Próximos passos
Lista priorizada de ações com prazo sugerido.

## Formato de saída

- Tabelas para métricas comparativas
- Variações positivas e negativas com sinal (+/-)
- Linguagem direta — relatório para decisão, não para arquivo
- Se faltar dado: indicar `[dado não disponível]` e seguir

Após gerar, perguntar se quer salvar em `memory/campanhas.md`.
