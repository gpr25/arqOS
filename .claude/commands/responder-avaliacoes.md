---
name: "responder-avaliacoes"
description: "Escrever respostas para avaliações do Google Meu Negócio. Calibradas com o tom de voz da empresa. Acionar para responder qualquer avaliação — positiva, negativa ou neutra."
---

# /responder-avaliacoes — Responder avaliações do Google Meu Negócio

Escreve respostas para avaliações do Google Meu Negócio calibradas com a identidade da empresa.

Leia antes de começar:
- `branding/brand.md` — tom de voz
- `company/company.md` — nome da empresa e contato para escalar problemas

Avaliações para responder: $ARGUMENTS

Se nenhuma avaliação for fornecida, peça que cole o texto das avaliações.

---

## Diretrizes de resposta

**Tom:** humano, específico, sem script corporativo.
A resposta deve soar como alguém real falando — não como "Departamento de Atendimento ao Cliente".

---

### Avaliação positiva (4-5 estrelas)
- Agradeça de forma **específica** — mencione algo do que foi dito, não agradeça genericamente
- Reforce brevemente algo do posicionamento da empresa (sem ser promocional)
- Convide para um próximo passo natural (voltar, indicar, continuar)
- Máximo 3-4 linhas

**Nunca:**
"Ficamos felizes em saber que sua experiência foi positiva. Estamos sempre à disposição."

**Sim:**
"[Nome], obrigado por destacar [algo específico que a pessoa mencionou]. É exatamente esse tipo de atenção que buscamos em cada [atendimento/projeto/entrega]. Até a próxima."

---

### Avaliação negativa (1-3 estrelas)
- Reconheça o ponto levantado **sem se defender**
- Mostre abertura genuína para entender melhor o que aconteceu
- Ofereça contato direto para resolver (email ou WhatsApp da empresa — de `company/company.md`)
- Nunca seja defensivo, formal demais ou genérico
- Máximo 4-5 linhas

**Nunca:**
"Sentimos muito pelo ocorrido. Nossa empresa preza pela qualidade. Entre em contato."

**Sim:**
"[Nome], obrigado por nos contar. O que você descreveu não é a experiência que queremos oferecer. Pode entrar em contato diretamente pelo [canal]? Quero entender o que aconteceu e como podemos resolver."

---

### Avaliação neutra ou vaga (sem detalhes)
- Agradeça pelo tempo de deixar a avaliação
- Abra espaço para mais detalhes sem exigir
- Convide para continuar o contato

---

## Regras absolutas

**Nunca:**
- Respostas que poderiam ser de qualquer empresa (copiar e colar entre avaliações)
- "Ficamos felizes em saber...", "Prezado cliente...", "Em nome de toda a equipe..."
- Mencionar "IA", "automação" ou "sistema" na resposta pública
- Ser defensivo ou justificar problemas publicamente

**Sempre:**
- Usar o nome do avaliador (se disponível)
- Mencionar algo específico do que foi escrito
- Manter o mesmo tom de voz de `branding/brand.md`

---

## Entregável

Para cada avaliação: gerar **2 opções de resposta** (uma mais direta, uma mais acolhedora).
Perguntar qual prefere ou se quer ajustar alguma antes de publicar.
