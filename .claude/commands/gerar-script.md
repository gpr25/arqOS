# /gerar-script — Criar script de atendimento ou follow-up

Você vai criar um script de atendimento ou follow-up calibrado com o processo comercial desta empresa.

Leia antes de começar:
- `sales/funil.md` — etapas do processo comercial
- `sales/scripts/` — scripts existentes (para manter consistência de tom)
- `branding/brand.md` — tom de voz
- `products/` — o que esta empresa vende

Se $ARGUMENTS for fornecido, use como etapa, canal ou objetivo inicial.

## Como executar

**1. Confirmar o contexto**

Pergunte (em uma mensagem só):

```
Para criar o script, preciso entender:

1. Etapa do funil: primeiro contato, qualificação, diagnóstico, follow-up, fechamento?
2. Canal: WhatsApp (texto), telefone, presencial ou email?
3. Perfil do lead: o que você sabe sobre quem vai receber?
4. Objetivo desta abordagem: o que você quer que aconteça ao final?
5. Contexto anterior: já houve algum contato antes?
```

Se $ARGUMENTS já trouxer essas informações, não pergunte o que já está claro.

**2. Criar o script**

Estrutura por canal:

**WhatsApp (texto):**
```
[Abertura — identificação + gancho em 1 linha]
[Motivo do contato — específico, não genérico]
[Pergunta ou CTA — uma ação clara]
```
*Máximo 5 linhas. No WhatsApp, bloco de texto longo não é lido.*

**Telefone / presencial:**
```
ABERTURA (30s):
[identificação + motivo do contato em 1 frase]

QUALIFICAÇÃO (2–5min):
Pergunta 1: [investigar o contexto]
Pergunta 2: [identificar o problema]
Pergunta 3: [entender a urgência]

TRANSIÇÃO (30s):
[como passar para o próximo passo com naturalidade]

ENCERRAMENTO:
[próximo passo definido + confirmação]
```

**Regras do script:**
- Script é estrutura, não roteiro fixo — o atendente deve adaptar
- Nunca começar com pitch — começar com diagnóstico
- Uma pergunta por vez no diagnóstico — não sobrecarregar
- Incluir nota de objeções mais prováveis nesta etapa (com base em `sales/funil.md`)

**3. Incluir tratamento de objeções**

Ao final do script, listar:

```
OBJEÇÕES PROVÁVEIS NESTA ETAPA:
- "[objeção 1]" → [como responder]
- "[objeção 2]" → [como responder]
```

**4. Oferecer variação**

Após criar, perguntar:
"Quer uma versão mais [direta/consultiva/informal]?"
