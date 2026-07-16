# METODOLOGIA DE ANÁLISE — META ADS

---

## PRINCÍPIO CENTRAL

Antes de avaliar qualquer número, entenda três coisas:
1. O que está sendo chamado de conversão — e qual é o valor real dela para o negócio
2. Em que fase a campanha está — aprendizado, estabilidade, fadiga ou declínio
3. Qual é a origem do tráfego dentro do Meta — feed, stories, reels, audience network — porque CPL varia muito por placement e o dado agregado esconde isso

Uma campanha com CPL "bom" pode estar gerando leads sem qualidade. Uma campanha com CPL "ruim" pode estar no começo do aprendizado. Não tire conclusão antes de entender o contexto.

---

## DADOS INICIAIS — SOLICITAR SEMPRE

### Bloco 1 — Contexto do negócio
1. Tipo de negócio e modelo de receita
2. Região atendida
3. Objetivo real da campanha (não o objetivo técnico configurado)
4. O que seria um lead de alto valor para o comercial
5. Onde acontece a conversão: formulário instantâneo (Lead Ad), página de destino, WhatsApp, Messenger ou ligação?

### Bloco 2 — Dados da conta (últimos 30 dias + 30 dias anteriores, **separados**)

> **Por que separar os períodos:** 60 dias em bloco único esconde tendência, queda, melhora e sazonalidade. Comparar os dois períodos revela se a campanha está evoluindo, estabilizando ou degradando.

**Nível de Campanha — colunas solicitadas:**
- Nome da campanha
- Objetivo
- Status
- Estratégia de lance / meta de custo
- Orçamento (CBO ou ABO — especificar)
- Valor gasto
- Impressões
- Alcance
- Frequência
- Cliques no link
- CTR (clique no link)
- CPC médio (custo por clique no link)
- Resultados (conversão principal configurada)
- Custo por resultado
- CPM

**Nível de Conjunto de Anúncios — mesmas colunas acima, mais:**
- Tipo de público (Advantage+, Custom Audience, Lookalike, Interesses)
- Faixa etária e gênero (se restrito)
- Placement (se manual ou Advantage+)

**Nível de Anúncio (criativo) — mesmas colunas acima, mais:**
- Nome do anúncio
- Formato (imagem, vídeo, carrossel, coleção)
- Thumb stop rate / hook rate (se disponível)
- Reproduções de vídeo a 25%, 50%, 75%, 100% (para vídeos)

**Configuração de eventos (via Events Manager ou coluna de conversões):**
- Eventos configurados no pixel
- Eventos da API de Conversões (CAPI)
- Qual evento está sendo usado como otimização em cada campanha
- Qualidade do evento (score de correspondência — EMQ)
- Janela de atribuição configurada

---

## HIERARQUIA DE VALOR DE CONVERSÃO NO META

| Conversão | Valor |
|---|---|
| Venda offline importada via CAPI | Máximo |
| Lead qualificado validado pelo CRM | Muito alto |
| Lead form completo (com telefone/email válido) | Alto |
| Mensagem iniciada no WhatsApp (com intenção real) | Médio-alto |
| Formulário instantâneo (Lead Ad básico) | Médio — depende da qualidade |
| Clique no link para página de destino | Médio-baixo — depende da conversão na LP |
| Visualização de vídeo (ThruPlay) | Baixo para captação |
| Engajamento com publicação | Baixo para captação |
| Alcance / impressão | Base de funil — não é conversão |

**Regra sobre Lead Ads (formulários instantâneos):**
Lead Ads têm fricção baixa — o usuário converte sem sair do Meta. Isso aumenta volume e reduz CPL, mas frequentemente reduz qualidade. Um CPL de R$ 18 via Lead Ad pode ser pior que R$ 90 via landing page se o formulário não qualifica. Sempre perguntar ao comercial a taxa de aproveitamento dos leads antes de concluir sobre eficiência.

---

## DIAGNÓSTICO POR FASE DA CAMPANHA

Antes de recomendar qualquer mudança, identifique em que fase a campanha está.

| Fase | Sinal | O que fazer |
|---|---|---|
| Aprendizado | < 50 eventos de otimização, entrega instável, custo oscilando | Não mexer. Aguardar saída do aprendizado |
| Aprendizado limitado | Meta não atinge 50 eventos/semana, aviso no painel | Investigar causa: orçamento baixo, público pequeno, evento raro |
| Estável | Entrega regular, custo consistente, volume previsível | Analisar performance e considerar otimizações graduais |
| Fadiga criativa | CTR caindo, CPL subindo, frequência > 3-4 em 7 dias | Renovar criativos antes de qualquer ajuste de lance |
| Declínio estrutural | Queda de volume + queda de qualidade + aumento de CPL | Diagnóstico completo — pode ser saturação de público, pixel degradado ou sazonalidade |

**Regra do aprendizado:**
Nunca altere orçamento em mais de 20-30% de uma vez, troque criativos em massa, modifique públicos ou altere evento de otimização enquanto a campanha estiver em aprendizado. Cada uma dessas ações reinicia o aprendizado.

---

## ANÁLISE POR OBJETIVO DE CAMPANHA

---

### Lead Generation — Formulário Instantâneo (Lead Ad)

**O que verificar:**
- O formulário é do tipo "Mais volume" ou "Maior intenção"? (Maior intenção = tela de confirmação extra, reduz volume mas aumenta qualidade)
- Quais campos estão sendo coletados? Nome e email apenas, ou telefone + pergunta qualificadora?
- Há perguntas de qualificação no formulário? Estão coerentes com o que o comercial precisa saber?
- A taxa de preenchimento do formulário (leads / cliques no formulário) é coerente — acima de 60% é normal para Lead Ad
- Os leads estão sendo integrados com CRM ou baixados manualmente? Se manual, com qual frequência?
- Qual é o CPL dos últimos 30 dias versus os 30 dias anteriores?

**Telas a solicitar quando necessário:**
1. Biblioteca de formulários com visualização dos campos
2. Desempenho por formulário (se houver mais de um)
3. Desempenho por anúncio segmentado por formulário

**Sinal de problema:**
CPL baixo mas comercial reclama de qualidade → investigar formulário. Provavelmente sem qualificação ou com tipo "Mais volume". Testar versão "Maior intenção" com 1-2 perguntas qualificadoras.

---

### Lead Generation — Página de Destino (Landing Page)

**O que verificar:**
- O pixel está instalado corretamente na LP? O evento de conversão está disparando no momento certo (após envio do formulário, não ao carregar a página)?
- A API de Conversões (CAPI) está configurada? Qual é o score de correspondência (EMQ)?
- A LP carrega em menos de 3 segundos no mobile? (Usar PageSpeed Insights para verificar)
- A LP tem coerência de mensagem com o anúncio? (Message match — o que o anúncio promete, a LP entrega?)
- Qual é a taxa de conversão da LP? (Leads / cliques no link)
- O evento de otimização da campanha é o evento de conversão real, ou é um evento intermediário como "visualização de página" ou "clique no botão"?

**Referência de taxa de conversão por nicho:**
Não existe um número universal. O que importa é a tendência — se a taxa está caindo com o mesmo tráfego, o problema pode ser fadiga criativa gerando tráfego menos qualificado, ou mudança na LP.

**Telas a solicitar quando necessário:**
1. Events Manager → qualidade dos eventos e EMQ
2. Insights da LP via Google Analytics ou Clarity (fora do Meta)
3. Relatório de placement para ver de onde vem o clique que converte

---

### Conversão de Vendas (e-commerce ou produto online)

**O que verificar:**
- O pixel está capturando todos os eventos do funil? (ViewContent → AddToCart → InitiateCheckout → Purchase)
- A janela de atribuição configurada condiz com o ciclo de compra do produto?
- O ROAS reportado pelo Meta está próximo do ROAS real do negócio? (Discrepância acima de 30% indica problema de atribuição)
- Há campanhas de topo, meio e fundo configuradas? Ou tudo em conversão direta?
- Há campanhas de retargeting ativas? Com qual janela de público?
- Advantage+ Shopping Campaign está sendo usada? Se sim, há dados suficientes para ela otimizar bem? (Recomendado: mínimo 50 compras/semana)

> **Nota:** Este objetivo é menos comum no contexto do Grupo Gadens (foco em leads com conversão offline), mas pode aparecer em empresas da holding com produto digital ou venda direta. Adaptar análise conforme o caso.

---

### Tráfego e Consideração

**Quando usar:** Apenas para negócios com ciclo de compra longo onde construção de audiência é estratégica, ou para alimentar retargeting com volume de visitas qualificadas.

**O que verificar:**
- Para que serve esse tráfego dentro do funil? Há uma campanha de conversão consumindo essa audiência depois?
- O CTR do link está coerente com o nicho? (Referência geral: acima de 1% é aceitável, acima de 2% é bom para campanhas de tráfego)
- O CPM está coerente? CPM alto com CTR baixo = anúncio ruim ou público errado
- A página de destino tem pixel instalado para capturar a audiência?

**Alerta:** Campanhas de tráfego otimizadas para clique tendem a atrair cliques de baixa qualidade. Sempre preferir otimização para "Aterrissagem na página de destino" quando disponível.

---

## ESTRUTURA DE CONTA — O QUE VERIFICAR

### Arquitetura geral

**CBO vs ABO:**
- CBO (orçamento no nível de campanha): o algoritmo distribui entre conjuntos. Funciona melhor com conjuntos testados e públicos distintos (sem sobreposição)
- ABO (orçamento por conjunto): mais controle, mais útil em fase de teste ou quando um conjunto específico precisa de volume garantido

Não existe "melhor". O que existe é coerência entre a fase e a estratégia.

**Sobreposição de público:**
Se dois ou mais conjuntos de anúncios dentro da mesma campanha atingem públicos parecidos, eles competem entre si no leilão. Resultado: CPM sobe sem razão aparente. Verificar via Ferramenta de Sobreposição de Públicos no Gerenciador de Anúncios.

**Advantage+ Audience:**
O Meta tem expandido o Advantage+ Audience como padrão. Ele ignora segmentações manuais e deixa o algoritmo decidir para quem entregar. Pode funcionar bem com volume de dados suficiente. Em contas novas ou com pixel fraco, pode gastar em públicos irrelevantes.

Quando suspeitar: leads com perfil completamente fora do ICP do cliente, ou gasto concentrado em faixa etária/localização que não faz sentido para o negócio.

---

## DIAGNÓSTICO DE PIXEL E EVENTOS

Esta é a etapa mais ignorada em contas intermediárias e uma das que mais causa distorção na análise.

**O que verificar no Events Manager:**
- Todos os eventos necessários estão disparando?
- O evento de otimização principal tem EMQ (Event Match Quality) acima de 6? Abaixo disso, o algoritmo tem dificuldade de encontrar o público certo
- Há deduplicação configurada entre pixel e CAPI? (Sem deduplicação, conversões são contadas em duplicidade)
- O evento está disparando no momento certo? (Problema comum: evento de "lead" disparando ao carregar a página ao invés de após o envio do formulário — inflaciona conversões sem valor real)
- Há eventos de teste ativos? (Podem inflar dados se esquecidos ligados)

**Como verificar se o evento está disparando corretamente:**
1. Extensão Meta Pixel Helper no Chrome
2. Events Manager → Testar eventos → inserir URL da LP e verificar disparos em tempo real

**Janela de atribuição — impacto direto nos números:**

| Janela | O que conta |
|---|---|
| 1 dia após clique | Só conversões no mesmo dia do clique |
| 7 dias após clique | Conversões até 7 dias depois do clique |
| 1 dia após visualização | Conversões de quem viu o anúncio mas não clicou |
| 7 dias clique + 1 dia visualização | Padrão atual do Meta — mais abrangente |

Para negócios com ciclo longo (imóveis, serviços B2B, consórcios), a janela de 7 dias clique subestima o impacto real das campanhas. Para produtos de decisão imediata, a janela de 1 dia é mais precisa.

---

## ANÁLISE DE CRIATIVOS

### Métricas prioritárias por formato

**Para vídeos:**

| Métrica | O que indica | Referência geral |
|---|---|---|
| Hook Rate (visualizações 3s / impressões) | Se o início prende atenção | Acima de 30% é bom |
| Thumb Stop Rate (idem, às vezes calculado diferente) | Parada no scroll | Acima de 25-30% |
| Retenção a 50% | Se o meio do vídeo ainda engaja | Queda brusca = problema no roteiro |
| Retenção a 100% (ThruPlay) | Assistiu completo | Varia muito por duração |
| CTR após assistir | Intenção gerada | Comparar entre criativos |

**Para imagens e carrosséis:**

| Métrica | O que indica |
|---|---|
| CTR (clique no link) | Relevância da imagem + copy para o público |
| CPM | Custo por mil impressões — indica qualidade do sinal para o algoritmo |
| Frequência | Quantas vezes o mesmo usuário viu — acima de 3-4 em 7 dias pode indicar fadiga |
| CPC médio (clique no link) | Eficiência do criativo para gerar clique qualificado |

### Sinais de fadiga criativa
- CTR caindo progressivamente sem mudança de público
- CPM subindo sem explicação sazonal
- Frequência acima de 3 em audiências pequenas (< 500k)
- Volume de resultados caindo mesmo com orçamento igual

**Regra:** fadiga criativa é resolvida com novo criativo, não com aumento de orçamento. Aumentar orçamento em criativo fatigado acelera o gasto sem melhorar resultado.

### O que pedir para análise de criativos
1. Relatório por anúncio com as métricas listadas acima
2. Print ou link dos 3 criativos que mais gastaram
3. Comparativo entre criativos ativos: qual gera mais resultado, qual tem menor CPL, qual tem maior CTR

---

## FORMATO DE RESPOSTA PADRÃO

1. **O que já entendemos** — fatos confirmados pelos dados
2. **O que parece funcionar** — o que não deve ser mexido sem razão clara
3. **O que parece problemático** — com hipótese da causa, não só o sintoma
4. **O que está inconclusivo** — precisa de mais dados, mais tempo ou informação do comercial
5. **O que falta para análise completa** — especificado exatamente e onde encontrar

**Plano de ação — classificado por urgência:**

| Prioridade | Ação | Razão | Métrica de validação |
|---|---|---|---|
| Corrigir agora | | | |
| Investigar antes de mexer | | | |
| Medir por 7-14 dias | | | |
| Não mexer ainda | | | |

---

## REGRAS DE ANÁLISE — INEGOCIÁVEIS

- Nunca recomendar mudança em campanha no aprendizado
- Nunca trocar evento de otimização sem entender o impacto no histórico da campanha
- Nunca avaliar CPL sem saber o tipo de conversão e a qualidade dos leads
- Nunca aumentar orçamento acima de 20-30% de uma vez — reinicia aprendizado
- Não pausar conjunto de anúncios que está fora do aprendizado sem investigar se ele carrega audiência exclusiva
- Não concluir sobre qualidade de público sem ver dados de pelo menos 7 dias com volume relevante
- Separar sempre: o que é fato, o que é hipótese, o que é recomendação
- Nunca comparar CPL entre campanhas com eventos de otimização diferentes

---

## REFERÊNCIAS RÁPIDAS

### Checklist de conta nova ou assumida

- [ ] Pixel instalado e disparando corretamente?
- [ ] CAPI configurado com deduplicação?
- [ ] EMQ dos eventos principais acima de 6?
- [ ] Eventos de teste desativados?
- [ ] Janela de atribuição coerente com ciclo de compra?
- [ ] Conversões principais marcadas como primárias?
- [ ] Há campanhas ativas em aprendizado?
- [ ] Há sobreposição de público entre conjuntos?
- [ ] Orçamento é CBO ou ABO? Faz sentido para a fase?
- [ ] Criativos ativos têm menos de 60 dias rodando sem renovação?
- [ ] A conta tem histórico de pagamento regular (sem interrupções recentes)?

### Sinais de alerta que pedem investigação imediata

| Sinal | Hipótese mais provável |
|---|---|
| Muitas conversões, nenhum lead no CRM | Evento disparando errado (page load, não form submit) |
| CPL caindo mas qualidade também | Formulário sem qualificação ou público muito amplo |
| CPM alto sem explicação | Sobreposição de públicos ou criativo irrelevante |
| Volume zerado do dia para a noite | Política violada, limite de gasto atingido ou problema no pixel |
| Gasto concentrado em uma faixa etária inesperada | Advantage+ Audience sem restrição — verificar se faz sentido |
| ROAS do Meta muito acima do real | Problema de atribuição — janela larga + visão de conversão inflacionada |
