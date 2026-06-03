---
name: "analisar-dados"
description: "Analisar arquivo de dados (CSV, Excel, JSON ou tabela) e devolver resumo executivo com insights acionáveis. Acionar para: relatórios de leads, performance de campanhas, dados de vendas, métricas de marketing, qualquer planilha ou exportação de dados."
---

# /analisar-dados — Analisar arquivo de dados

Analise um arquivo de dados (CSV, Excel, JSON ou tabela colada) e devolva um resumo executivo com insights acionáveis.

Arquivo ou dados: $ARGUMENTS

Se nenhum dado for fornecido, peça que cole a tabela ou informe o caminho do arquivo.

## Processo de análise

### 1. Entendimento inicial
Antes de analisar, confirme:
- O que esses dados representam? (leads, vendas, campanhas, clientes, outro)
- Qual é a pergunta que quer responder?
- Há algum período de referência ou meta para comparar?

### 2. Inspeção dos dados
- Quantas linhas e colunas
- Tipos de dados em cada coluna
- Valores nulos, duplicados ou inconsistências
- Período coberto (se houver datas)

### 3. Análise estatística básica
Para cada coluna numérica relevante:
- Mínimo, máximo, média, mediana
- Distribuição (concentrado, disperso, outliers)
- Tendência ao longo do tempo (se aplicável)

### 4. Insights principais
Liste 3-5 achados mais importantes no formato:
```
Insight: [o que foi encontrado]
Evidência: [dado específico que suporta]
Ação sugerida: [o que fazer com isso]
```

### 5. Anomalias e alertas
- Valores fora do padrão
- Quedas ou picos que merecem atenção
- Dados que parecem incorretos ou que precisam ser verificados

### 6. Resumo executivo
Parágrafo curto (5-7 linhas) com a leitura geral — o que está bem, o que precisa de atenção e o próximo passo mais importante.

## Regras

- Falar em números absolutos E percentuais quando relevante
- Comparar sempre que houver base de comparação
- Se um dado for ambíguo, perguntar antes de interpretar
- Não inventar tendências que os dados não mostram

Após a análise, perguntar se quer tabelas formatadas, exportar o resumo ou aprofundar algum ponto específico.
