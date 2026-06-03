---
name: "gerar-proposta"
description: "Gerar proposta comercial personalizada para um prospect. Alimentada pelo contexto real da empresa — produto, ICP, preços, diferenciais. Acionar sempre que precisar enviar uma proposta formal."
---

# /gerar-proposta — Gerar proposta comercial

Gera uma proposta comercial personalizada usando o contexto real da operação.

Leia antes de começar:
- `products/` — o que está sendo proposto, com objeções e gatilhos
- `sales/precificacao.md` — faixas de preço e lógica de valor (se existir)
- `sales/icp.md` — perfil do cliente ideal
- `company/company.md` — credenciais e histórico da empresa
- `branding/brand.md` — tom de voz

Contexto do prospect: $ARGUMENTS

Se nenhum contexto for fornecido, pergunte — uma por vez:

1. Qual o nome da empresa e do decisor?
2. Qual produto ou serviço está sendo proposto?
3. Quais foram as dores ou objetivos identificados no diagnóstico?
4. Qual o valor (implementação + recorrência, se houver)?
5. Tem prazo de entrega ou condição especial a incluir?

---

## Estrutura da proposta

### 1. Cabeçalho
- Nome da empresa proponente + dados de contato (de `company/company.md`)
- Nome do prospect + empresa
- Data

### 2. Contexto do cliente (personalizado)
Parágrafo curto mostrando que você entendeu o problema do prospect.
Use as dores identificadas no diagnóstico — nunca texto genérico.
> "Baseado na nossa conversa, entendemos que [empresa do prospect] enfrenta [dor específica]."

### 3. O que está sendo proposto
- Descrição clara do produto ou serviço
- O que inclui (escopo de entrega)
- O que **não** inclui (evitar mal-entendidos)
- Prazo de entrega

### 4. Por que funciona para este cliente
3 pontos específicos ligando os diferenciais do produto às dores identificadas.
Nunca listar features genéricas — ligar cada ponto ao problema real do prospect.

### 5. Investimento
- Valor de implementação (se houver)
- Valor de recorrência / mensalidade (se houver)
- Forma de pagamento
- Validade da proposta (sugestão: 7-10 dias)

### 6. Próximos passos
Sequência clara e simples:
```
1. Aprovação da proposta
2. [Assinatura / PIX / NF — conforme o processo]
3. [Primeira ação após pagamento]
4. [Marco de entrega]
```

### 7. Assinatura
Nome, cargo, empresa, contato (de `company/company.md`)

---

## Regras de escrita

- Tom consultivo — proposta é continuação de uma conversa, não um documento frio
- Nomes reais do prospect em todo o documento (não "Prezado cliente")
- Nenhuma frase que poderia ser de qualquer empresa — cada parágrafo deve soar específico
- Sem jargão corporativo: "No intuito de", "Venho por meio desta", "Oportunidade única"
- Extensão ideal: 1-2 páginas — proposta longa não lida

---

## Entregável

Gerar a proposta completa formatada em Markdown.
Perguntar ao final: quer ajustar algum ponto ou exportar como PDF/Word?
