---
name: "gerar-campanha"
description: "Gerar estrutura completa de campanha de marketing — objetivo, canais, formatos, copies, cronograma e métricas. Acionar para planejar uma campanha do zero ou estruturar uma ação de marketing."
---

# /gerar-campanha — Gerar estrutura completa de campanha

Gera uma estrutura completa de campanha calibrada com o contexto real da empresa.

Leia antes de começar:
- `marketing/estrategia.md` — canais ativos e o que já funciona
- `branding/brand.md` — tom de voz e identidade
- `products/` — produto que será promovido
- `sales/icp.md` — público-alvo
- `memory/campanhas.md` — o que já foi testado (para não repetir o que não funcionou)

Briefing: $ARGUMENTS

Se nenhum briefing for fornecido, pergunte — em uma mensagem só:

```
Para estruturar a campanha, preciso confirmar:

1. Objetivo: gerar leads, aumentar vendas, lançar produto, reconhecimento de marca?
2. Produto ou serviço que será promovido:
3. Público-alvo principal:
4. Orçamento disponível (aproximado):
5. Prazo da campanha (datas de início e fim):
6. Canais disponíveis (redes sociais, Google, email, WhatsApp, outro):
```

---

## Estrutura da campanha

### 1. Resumo estratégico
- **Objetivo principal:** (métrica clara — número de leads, vendas, acessos)
- **KPI de sucesso:** como vamos saber se funcionou?
- **Público primário:** (de `sales/icp.md`)
- **Mensagem central:** uma frase que resume o que a campanha comunica

### 2. Canais e formatos por fase

**Fase 1 — Atenção (dias 1-7):**
Objetivo: criar consciência sobre o produto/oferta
- Canal prioritário + formato recomendado
- Volume sugerido
- Tom: mais educativo ou provocador — não de venda direta

**Fase 2 — Consideração (dias 7-21):**
Objetivo: qualificar interesse e gerar leads
- Canal + formato
- Volume sugerido
- Tom: diferencial + prova social + CTA

**Fase 3 — Conversão (dias 21-30 ou até fim):**
Objetivo: fechar leads qualificados
- Canal + formato
- Tom: urgência real + proposta + facilidade de contato

### 3. Copy central (headline e gancho)
Baseado em `branding/brand.md` e `products/`:
- Headline principal da campanha
- 3 variações de gancho para testar
- CTA padrão (consistente em todos os canais)

### 4. Cronograma semanal
```
Semana 1: [ações de lançamento]
Semana 2: [ações de amplificação]
Semana 3: [ações de conversão]
Semana 4: [ações de encerramento e retargeting]
```

### 5. Métricas de acompanhamento
| Métrica | Meta | Frequência de revisão |
|---|---|---|
| [KPI 1] | [valor] | Semanal |
| [KPI 2] | [valor] | Semanal |
| CPL (se ads) | [R$] | Diário |

### 6. Próximos passos
- [ ] Aprovar headline e copy central
- [ ] Produzir criativos visuais
- [ ] Subir campanhas nas plataformas
- [ ] Configurar rastreamento (UTM, pixel)
- [ ] Definir responsável por atender os leads

---

## Regras

- Cronograma realista — não propor o que não tem equipe para executar
- Cada fase com objetivo claro e mensagem adequada ao momento do funil
- Nunca propor todos os canais ao mesmo tempo — priorizar os que já funcionam
- Se `memory/campanhas.md` indicar algo que não funcionou, não repetir

Ao final, perguntar: quer detalhar alguma fase específica ou gerar o copy completo de um canal?
