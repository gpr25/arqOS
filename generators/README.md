# generators/ — Geradores do ArqOS

Geradores operacionais calibrados com o contexto real do seu negócio.
Cada gerador usa os arquivos do seu ArqOS para produzir output específico — nunca genérico.

> Os geradores funcionam depois que o onboarding foi feito.
> Eles leem os arquivos criados durante o `/instalar-self` para operar com o contexto real da sua empresa.

---

## Como usar

Em qualquer sessão, chame o gerador pelo nome:

```
/gerar-proposta
/gerar-copy
/gerar-campanha
/gerar-follow-up
/gerar-briefing
/gerar-diagnostico
/gerar-conteudo
/gerar-email
/gerar-script
```

---

## Geradores disponíveis

### `/gerar-proposta`
**Gera:** proposta comercial personalizada para um prospect
**Alimentado por:** `products/`, `sales/funil.md`, `sales/icp.md`, `company/company.md`, `branding/brand.md`
**Input necessário:** nome do prospect, produto ou serviço proposto, dores identificadas, valor

---

### `/gerar-copy`
**Gera:** copy de anúncio (Meta Ads, Google Ads) ou landing page
**Alimentado por:** `branding/brand.md`, `products/`, `sales/icp.md`
**Input necessário:** canal, objetivo, produto, público

---

### `/gerar-campanha`
**Gera:** estrutura completa de campanha com canais, formatos, copy e cronograma
**Alimentado por:** `marketing/estrategia.md`, `branding/brand.md`, `memory/campanhas.md`
**Input necessário:** objetivo, produto, público, orçamento, prazo

---

### `/gerar-follow-up`
**Gera:** mensagem de follow-up por etapa do funil (pós-contato, pós-proposta, lead inativo)
**Alimentado por:** `sales/funil.md`, `sales/scripts/`, `branding/brand.md`
**Input necessário:** etapa do funil, contexto do último contato, canal (WhatsApp / email)

---

### `/gerar-briefing`
**Gera:** briefing estruturado para agência, fornecedor ou equipe interna
**Alimentado por:** `company/company.md`, `branding/brand.md`, `products/`
**Input necessário:** tipo de projeto, objetivo, para quem, restrições

---

### `/gerar-diagnostico`
**Gera:** diagnóstico operacional de prospect (para construir proposta) ou da própria operação
**Alimentado por:** `sales/icp.md`, `products/`, `company/company.md`
**Input necessário:** contexto do prospect ou área a diagnosticar

---

### `/gerar-conteudo`
**Gera:** post, Reel ou carrossel para Instagram ou LinkedIn
**Alimentado por:** `branding/brand.md`, `marketing/estrategia.md`
**Input necessário:** tema ou ângulo, canal, formato (Reel / carrossel / post)

---

### `/gerar-email`
**Gera:** email de atendimento, nurturing ou follow-up
**Alimentado por:** `sales/funil.md`, `branding/brand.md`
**Input necessário:** objetivo (atendimento / nurturing / follow-up), contexto, etapa do funil

---

### `/gerar-script`
**Gera:** script de atendimento ou follow-up para WhatsApp, telefone ou presencial
**Alimentado por:** `sales/scripts/`, `sales/funil.md`
**Input necessário:** etapa do funil, perfil do lead, objetivo da abordagem

---

## Comandos relacionados

- `/carrossel` — post ou carrossel com identidade visual da empresa
- `/publicar-tema` — artigo + carrossel + legendas a partir de um tema
- `/email-profissional` — email profissional calibrado ao destinatário
- `/gpt-image-2` — geração de imagem para posts, criativos e materiais
