# Triunfo do Brasil — Análise Consolidada de Meta Ads
**Fase:** Diagnóstico e validação | **Conta:** herdada, rastreamento não confiável | **Data:** 30/06/2026
**Status deste documento:** insumo de trabalho para gerar o relatório final à gestão em outra conversa. Todo número entra com ressalva até auditoria de rastreamento e retorno do comercial (CRM).

---

## 0. Veredito em uma linha

O Meta **como está configurado não está validado**. Os leads de qualidade que apareceram vieram **apesar** de formulário ruim, idioma aberto, países empilhados num conjunto só e Advantage+ ignorando o direcionamento. Isso prova que **existe demanda internacional pelo produto** (sinal de mercado), **não** que o canal está performando (sinal de canal). As duas leituras estão separadas abaixo.

---

## 1. Fontes analisadas

- Relatório de campanhas por país: junho/2026, maio/2026 e 12 meses (28/jun/2025 a 27/jun/2026).
- Export de leads do formulário `New_Formulário_2026` (24/02/2026 a 29/06/2026): 34 leads.
- Print da segmentação do conjunto internacional (Imagem 1).
- Print do Events Manager / Conjunto de dados "Triunfo" (Imagem 2).

**Não disponível ainda:** retorno do comercial (quais leads viraram negócio); placement; formato/criativo e hook rate; campos exatos e tipo do formulário (volume vs intenção); janela de atribuição.

---

## 2. Fatos (confirmados pelos dados)

### Estrutura e veiculação
- Uma única campanha internacional: `CA 01/26 [Cadastro] [Internacional]`.
- Orçamento ABO, R$50/dia (~R$1.500/mês). Gasto de junho ~R$1.515 bate com isso.
- **Países empilhados num só conjunto.** Configuração atual (Imagem 1): Canadá, Alemanha, França, Japão, EUA. Em períodos anteriores também rodaram Emirados (AE), Espanha (ES) e **Coreia do Sul (KR)**, esta última fora da lista-alvo.
- Evento de otimização: `leadgen.other`, ou seja **Lead Ad (formulário instantâneo nativo do Meta)**. Não depende do pixel para captar.

### Volume (resultado configurado)
| Período | Leads | Gasto aprox. |
|---|---|---|
| Junho/2026 | 8 | R$1.515 |
| Maio/2026 | 9 | R$1.998 |
| 12 meses | 58 (US 26, AE 14, CA 6, FR 4, ES 3, DE 2, JP 2, KR 1) | ~R$8.341 |

> **Discrepância a verificar:** o relatório de plataforma marca 58 resultados em 12 meses, mas o export deste formulário traz 34 leads (fev a jun). A diferença pode ser formulário anterior, contagem de resultados que não viraram registro baixado, ou duplicidade. Confirmar antes de citar número de leads à gestão.

### Segmentação (Imagem 1)
- **Advantage+ Audience ATIVADO.** Público amplo, estimativa 86.100 a 101.200.
- Idade 25 a 65+, todos os gêneros.
- Direcionamento detalhado marcado como "sua sugestão" (o Advantage+ usa como pista, não como limite): cargos de farmácia (Clinical pharmacy, Pharmacist, Pharmacy Manager, Pharmacy Technician) + CFO, Founder, Director, CEO, Chairman & Managing Director.
- **Idiomas: todos os idiomas.** Não está restrito a inglês.
- Obrigações de anunciante/pagador da UE presentes (Região Europeia incluída).

### Events Manager (Imagem 2)
- Conjunto de dados "Triunfo", ID 903988453820396.
- **Sem nenhuma atividade em 48 dias.** Nenhum site encontrado, nenhuma integração, nenhuma CAPI, nenhum catálogo.
- Como a campanha é Lead Ad nativo, o pixel zerado **não interrompeu a captação** de leads. O impacto está no retargeting (item 5).

---

## 3. Qualidade dos leads (leitura direta do CSV, não validada pelo CRM)

Base: 33 leads pagos (1 dos 34 é teste interno do próprio Gabriel). Classificação por email corporativo + empresa + mensagem. **É leitura de fit, não de fechamento.**

| Categoria | Qtd aprox. | Exemplos |
|---|---|---|
| Lixo / teste | ~2 | costco.com com empresa "test" e mensagem "ho"; vmail "A" / "I need" |
| Fora do setor | ~6 | UCSD (universidade), estúdio de arte, Chicago Soccer Fields, fundação/produtora de vídeo, agências genéricas |
| Idioma/país errado | 2 | dois leads escritos em português (Brasil) |
| Vago / mensagem de uma palavra | ~8 | "Yes", "Info", "Absolutely", "ho" |
| Fit de setor com intenção concreta | ~12 a 15 | Zingidrink (bebida, Alemanha, pediu pricing+catálogo); Green Truth ("bulk order"); Ofarm Canadá ("import prices to Canada"); LURE Drinks; Food & Thought (yerba p/ wellness bar); samples (mg12, Almoayyed); traders de Dubai/África |

**Conclusão honesta:** a proporção de fit é razoável para frio, mas o número absoluto é baixo (33 em 4 meses) e veio com setup ruim. Não dá para creditar isso ao Meta como canal performando. O que está provado é a existência de demanda no ângulo certo (ver item 4). Sem CRM, qualidade real segue não confirmada.

---

## 4. Achado estratégico: o ICP real é food/beverage, não farma

- A segmentação configurada mira **farmácia/farma** (cargos de pharmacy + C-level).
- Quem efetivamente converteu são marcas de **bebida, wellness, food e nutracêutico** querendo yerba mate. O Advantage+ encontrou esse público, não o de farma.
- Isso **converge com o diagnóstico do projeto**: o stack de certificações da Triunfo (FSSC 22000, orgânica, Rainforest, Fair for Life, Kosher) favorece alimento/bebida/nutracêutico; fármaco grau API exigiria GMP farmacêutico não identificado.
- **Implicação:** o ângulo de comunicação e o ICP de mídia devem ser realinhados para food/beverage/nutracêutico. Confiança: média-alta, baseada nos leads reais da conta.

---

## 5. O pixel morto trava justamente o papel que o projeto queria dar ao Meta

- O plano do projeto era "Meta no máximo para retargeting".
- Retargeting exige audiência de visitantes do site sendo construída pelo pixel.
- O pixel está zerado e sem site detectado (Imagem 2). **Logo, retargeting é impossível hoje.**
- Primeiro passo para viabilizar esse papel: instalar/reativar o pixel no site e confirmar disparo de eventos. Antes disso, "Meta para retargeting" é só intenção.

---

## 6. O formulário está ruim (causa de boa parte do ruído)

- Campo de mensagem é texto livre, sem perguntas qualificadoras. Resultado: respostas inúteis ("ho", "Yes", "Info").
- Tipo provável "Mais volume" (não confirmado). Sem tela de intenção, entra qualquer um.
- Sem campos que separem comprador real (volume buscado, setor, papel na decisão, país de operação).
- **Efeito:** infla volume, reduz qualidade média e impede o comercial de priorizar.

---

## 7. Separação fato / hipótese / recomendação

**Fatos**
- Lead Ad nativo, pixel zerado, países empilhados, idioma aberto, Advantage+ ligado, ~8 leads/mês, formulário sem qualificação.
- Leads convertidos são majoritariamente food/beverage/wellness, não farma.

**Hipóteses (a confirmar)**
- A qualidade real dos leads é baixa apesar do fit aparente (só o CRM confirma).
- O bom fit veio mais da demanda latente do produto do que da configuração do Meta.
- Realinhar ângulo e qualificação melhora a proporção de leads úteis.

**Recomendações**
- Não cortar o Meta agora, mas não escalar e não tratá-lo como validado.
- Corrigir idioma, ângulo, formulário e pixel antes de qualquer leitura de performance.
- Decisão de verba Meta vs Google permanece com a gestão; o dado atual não justifica aumentar Meta.

---

## 8. Plano de ação por urgência

| Prioridade | Ação | Razão | Validação |
|---|---|---|---|
| Corrigir agora | Restringir idioma do conjunto para inglês | Vazou lead em português; gasto fora do alvo | Para de entrar lead em outro idioma |
| Corrigir agora | Refazer o formulário com 2 a 3 perguntas qualificadoras (volume buscado, setor, papel na compra, país) e testar tipo "Maior intenção" | Formulário atual gera ruído ("ho", "Yes") | Mensagens dos próximos leads trazem dado útil |
| Corrigir agora | Realinhar copy/criativo para food/beverage/nutracêutico | É quem realmente converte | CTR e fit dos próximos leads |
| Investigar antes de mexer | Reativar pixel no site (Events Manager zerado) | Sem ele não há retargeting nem audiência | Eventos voltando no Events Manager |
| Investigar antes de mexer | Conferir discrepância 58 (plataforma) vs 34 (formulário) | Número de leads à gestão precisa ser confiável | Origem da diferença identificada |
| Investigar antes de mexer | Confirmar se KR/AE/ES ainda rodam em algum período/conjunto | KR está fora do ICP | Segmentação só nos países-alvo |
| Medir 7 a 14 dias | Após realinhar, acompanhar share de leads ICP-fit | Confirmar se o ajuste melhora qualidade | % de leads relevantes sobe |
| Não mexer ainda | Não trocar evento de otimização, não cortar Meta, não aumentar orçamento +30% | Aprendizado limitado (~8 leads/mês); choque reinicia | — |

---

## 9. Respostas diretas às perguntas do diagnóstico

- **O que está sendo otimizado faz sentido?** Evento (Lead Ad) válido. Estrutura não: países empilhados, idioma aberto, targeting de farma atropelado pelo Advantage+ entregando food/beverage.
- **Qualidade do evento / EMQ / CAPI:** sem sinal de site/servidor (pixel zerado). Irrelevante para o Lead Ad nativo; bloqueador para retargeting e para qualquer conversão de site.
- **Idioma e país corretos?** Idioma errado (todos, deveria ser inglês). Países majoritariamente certos, mas pulverizados num conjunto só, e KR apareceu fora do alvo.
- **Sinais de público fora do ICP?** Sim, com duas leituras: ruído real (universidade, soccer fields, arte) e um "desvio útil" (food/beverage no lugar de farma, que é o ICP-real).
- **O gasto em Meta se justifica nesta fase?** Não como está. Há demanda comprovada pelo produto, mas o canal não está validado. Recomendação: manter o Meta apenas após corrigir idioma, ângulo, formulário e pixel; não aumentar verba; concentrar esforço de captação ativa no Google, coerente com o diagnóstico do projeto. Confiança: média-alta.

---

## 10. Pendências que travam conclusão definitiva

- Retorno do comercial sobre os 34 leads (indisponível por ora; mesmo marcação manual de "respondido/não" ajudaria).
- Auditoria de rastreamento do site e reativação do pixel.
- Tipo e campos exatos do formulário atual.
- Placement, formato de criativo e métricas de vídeo (não exportados).
- Origem da diferença 58 vs 34 leads.

---

## 11. Direção inicial de correção (hipóteses de plano)

Não é plano fechado. É a hipótese de por onde começamos a mexer, em sequência, para parar de gastar no escuro e gerar dado limpo. Cada passo a validar na prática.

**Passo 1 — Estancar o gasto sujo (semana 1).**
Restringir idioma para inglês e separar países do conjunto único (ao menos isolar EUA, principal mercado, do resto). Hipótese: já melhora leitura e corta vazamento de lead fora do alvo, sem reiniciar a campanha por completo.

**Passo 2 — Consertar o formulário (semana 1).**
Refazer com 2 a 3 perguntas qualificadoras (volume buscado, setor, papel na compra, país) e testar tipo "Maior intenção". Hipótese: troca volume de ruído por menos leads porém legíveis pelo comercial.

**Passo 3 — Realinhar o ângulo (semana 1 a 2).**
Reescrever copy e criativo para food/beverage/nutracêutico, que é quem converte de fato. Hipótese: melhora o fit médio sem depender da sorte do Advantage+.

**Passo 4 — Reativar o pixel no site (semana 2).**
Instalar/validar disparo de eventos. Hipótese: destrava a única função que o projeto quer dar ao Meta de verdade, o retargeting, e começa a construir audiência de visitantes.

**Passo 5 — Medir e decidir (semana 3 a 4).**
Com idioma, formulário, ângulo e pixel corrigidos, observar 7 a 14 dias o share de leads ICP-fit. Hipótese de decisão: se a proporção de leads úteis subir, o Meta ganha papel de apoio; se não subir, confirma-se a tese de concentrar captação no Google e deixar o Meta só em retargeting quando o pixel estiver maduro.

**Regra durante toda a correção:** mexer em uma variável de cada vez quando possível, para saber o que causou o quê, e não tocar em orçamento nem em evento de otimização enquanto a campanha estiver em aprendizado limitado.

---

*Documento de trabalho. Números com ressalva até auditoria de rastreamento e retorno do CRM. Sem esse retorno, qualidade de lead é leitura de fit, não de fechamento.*
