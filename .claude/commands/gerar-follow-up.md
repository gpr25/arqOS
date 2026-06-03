---
name: "gerar-follow-up"
description: "Gerar mensagem de follow-up pós-atendimento, pós-proposta ou para lead inativo. Calibrada com o histórico real do contato e etapa do funil. Acionar para não deixar nenhum lead esfriar sem uma abordagem inteligente."
---

# /gerar-follow-up — Gerar mensagem de follow-up

Gera mensagens de follow-up calibradas com o contexto real do contato.

Leia antes de começar:
- `sales/funil.md` — etapas do processo comercial
- `sales/scripts/follow-up.md` — padrões de follow-up da empresa (se existir)
- `branding/brand.md` — tom de voz

Contexto do contato: $ARGUMENTS

Se nenhum contexto for fornecido, pergunte — em uma mensagem só:

```
Para gerar o follow-up, preciso entender:

1. Etapa do funil: primeiro contato, pós-diagnóstico, pós-proposta ou lead inativo?
2. Quando foi o último contato e o que foi discutido?
3. Qual foi a última ação do lead (pediu prazo, ficou de pensar, sumiu)?
4. Canal de envio: WhatsApp, email ou outro?
5. Qual o próximo passo que você quer que o lead tome?
```

---

## Follow-up por etapa

### Pós-primeiro contato (24-48h após)
**Objetivo:** retomar o problema que o lead descreveu — não o produto
**Tom:** demonstrar que você ouviu e pensou no caso dele
```
[Nome],

Fiquei pensando no que você mencionou sobre [problema específico].

[Uma observação ou dado que reforça que o problema é real e solucionável]

Faz sentido aprofundarmos isso? Tenho [X] disponível [dia/horário sugerido].
```

### Pós-diagnóstico (48-72h após)
**Objetivo:** resumir os gargalos identificados e propor o próximo passo
**Tom:** consultivo — você está oferecendo clareza, não vendendo
```
[Nome],

Com base no que mapeamos, os três pontos que mais chamaram atenção foram:
— [gargalo 1]
— [gargalo 2]
— [gargalo 3]

Preparei uma proposta considerando exatamente esses pontos. Posso enviar hoje?
```

### Pós-proposta (5-7 dias após envio)
**Objetivo:** pergunta direta sobre dúvidas — não sobre a decisão
**Tom:** direto e respeitoso — sem pressão, sem "só para saber"
```
[Nome],

Enviei a proposta [X dias]. Tem alguma dúvida ou ponto que queira ajustar?

Se preferir, posso agendar 15 minutos para passar pelos detalhes juntos.
```

### Lead inativo (+15 dias sem resposta)
**Objetivo:** reabrir a conversa com valor — não cobrar
**Tom:** mensagem de valor, não de cobrança
```
[Nome],

Não quero pressionar, mas vi [dado/notícia/situação relevante para o negócio dele].

Pensei em você imediatamente. Caso ainda faça sentido conversar, estou disponível.
```

### Pós-silêncio total (+30 dias)
**Objetivo:** encerrar o ciclo com elegância ou reabrir para futuro
```
[Nome],

Vou deixar o espaço aberto. Se em algum momento [problema que ele descreveu] voltar à pauta, pode contar comigo.

[Deixa um recurso de valor: artigo, dado, insight — não um pitch]
```

---

## Regras

- **Nunca:** "Passando para saber se viu minha proposta", "Só para lembrar", "Você ficou de retornar"
- **Sempre:** mencionar algo específico do que foi discutido — nunca follow-up genérico
- **Uma ação por mensagem:** não misturar "tenho uma dúvida + veja essa novidade + podemos agendar"
- **WhatsApp:** mais curto e conversacional; **Email:** pode ter mais contexto, mas manter objetivo único
- Registrar resultado em `memory/decisoes.md` se o argumento funcionou ou se a objeção for nova

---

## Entregável

Gerar 2 versões do follow-up (uma mais direta, uma mais contextualizada).
Perguntar qual prefere ou se quer ajustar o tom.
Registrar em `memory/campanhas.md` se for parte de uma sequência estruturada.
