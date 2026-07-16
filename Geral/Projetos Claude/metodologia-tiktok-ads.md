# METODOLOGIA DE ANÁLISE — TIKTOK ADS

---

## PRINCÍPIO CENTRAL

TikTok Ads é uma plataforma de interrupção. O usuário não está procurando nada — está consumindo conteúdo. Isso muda tudo: o criativo não é um elemento da campanha, é **a** campanha. Nenhuma estratégia de segmentação, lance ou estrutura compensa um criativo que não para o scroll nos primeiros 3 segundos.

Antes de avaliar qualquer número, entenda duas coisas:
1. O criativo está gerando parada no scroll? (Hook rate)
2. O que está sendo contado como conversão tem valor real para o negócio?

Se o criativo é fraco, qualquer análise de lance, público ou estrutura é secundária. Comece sempre pelo criativo.

---

## CONTEXTO DA PLATAFORMA — O QUE DIFERE DO META E DO GOOGLE

| Dimensão | TikTok Ads | Meta Ads | Google Ads |
|---|---|---|---|
| Intenção do usuário | Passiva — consumindo conteúdo | Passiva — consumindo conteúdo | Ativa — buscando algo |
| Papel do criativo | Central — define tudo | Muito importante | Secundário (texto/copy é mais relevante) |
| Público principal | 18-35 anos (mas ampliando) | Amplo, 18-65+ | Depende do nicho |
| Formato obrigatório | Vídeo vertical nativo | Variado | Texto, imagem, vídeo |
| Algoritmo | Baseado em conteúdo (não só em dados do usuário) | Baseado em dados do usuário + comportamento | Baseado em intenção de busca |
| Maturidade da plataforma | Menor — menos dados históricos, menos concorrência em alguns nichos | Alta — leilão competitivo | Alta — leilão muito competitivo |
| Pixel e rastreamento | Pixel + Events API (menos maduro que Meta) | Pixel + CAPI (mais maduro) | Tag Google + GA4 |

**Consequência prática:** TikTok ainda tem CPMs mais baixos em vários nichos brasileiros comparado ao Meta. Isso pode ser vantagem competitiva — especialmente para nichos com público 20-40 anos que ainda não têm concorrência forte na plataforma.

---

## DADOS INICIAIS — SOLICITAR SEMPRE

### Bloco 1 — Contexto do negócio
1. Tipo de negócio e modelo de receita
2. Região atendida
3. Objetivo real da campanha
4. Onde acontece a conversão: formulário nativo (Lead Generation), página de destino, WhatsApp, DM no TikTok?
5. Perfil do público-alvo: faixa etária, comportamento — eles usam TikTok ativamente?

### Bloco 2 — Dados da conta (últimos 30 dias + 30 dias anteriores, **separados**)

> **Por que separar os períodos:** tendência, sazonalidade e fadiga criativa ficam invisíveis em períodos únicos.

**Nível de Campanha — colunas solicitadas:**
- Nome da campanha
- Objetivo
- Status
- Orçamento (diário ou total)
- Estratégia de lance
- Valor gasto
- Impressões
- Alcance
- Frequência
- Cliques
- CTR
- CPC médio
- Conversões (resultado principal)
- Custo por conversão
- CPM

**Nível de Grupo de Anúncios — mesmas colunas, mais:**
- Tipo de segmentação (Broad, Interest, Custom Audience, Lookalike)
- Faixa etária e gênero (se restrito)
- Placement (TikTok only ou Pangle/outros)

**Nível de Anúncio (criativo) — mesmas colunas, mais:**
- Nome do anúncio
- Formato
- Taxa de visualização a 6 segundos (6s view rate)
- Taxa de visualização completa
- Taxa de interação (likes, comentários, compartilhamentos)
- Hook rate (se disponível no dashboard)

**Configuração de eventos:**
- Pixel instalado e disparando?
- Events API configurada?
- Qual evento está sendo usado como otimização?
- Há deduplicação entre pixel e Events API?

---

## HIERARQUIA DE VALOR DE CONVERSÃO NO TIKTOK ADS

| Conversão | Valor |
|---|---|
| Venda offline importada via Events API | Máximo |
| Lead qualificado validado pelo CRM | Muito alto |
| Formulário de lead completo (com telefone) | Alto |
| Mensagem iniciada no WhatsApp | Médio-alto |
| Formulário nativo (Instant Form) | Médio — depende da qualificação |
| Clique no link para LP | Médio-baixo |
| Visualização de perfil | Baixo para captação |
| Engajamento (curtida, comentário) | Baixo para captação |
| Visualização de vídeo | Base de funil — não é conversão |

**Nota sobre formulários nativos no TikTok:**
O comportamento é similar ao Lead Ad do Meta — fricção baixa, volume alto, qualidade variável. A diferença é que o TikTok ainda tem base menor de usuários com dados históricos, o que pode significar leads com perfil menos previsível. Sempre validar com o comercial antes de concluir sobre qualidade.

---

## O CRIATIVO É A ESTRATÉGIA — ANÁLISE OBRIGATÓRIA

### Métricas de criativo por prioridade

| Métrica | O que indica | Referência geral |
|---|---|---|
| Hook Rate (visualizações 3s / impressões) | Se o início para o scroll | Acima de 30-35% é bom |
| 6s View Rate | Se o usuário continua após o hook | Acima de 25% |
| Completion Rate | Assistiu o vídeo completo | Varia por duração — vídeos curtos têm taxa maior |
| CTR (clique no link) | Interesse após assistir | Acima de 1% é razoável; acima de 2% é bom |
| Engagement Rate | Curtidas + comentários + shares / impressões | Depende do nicho e do tom |
| CPM | Custo por mil impressões | Indicador de competitividade do leilão |

### O que faz um bom criativo no TikTok

**Os primeiros 3 segundos são tudo:**
- Deve haver um elemento de captura imediata: pergunta direta, afirmação provocativa, situação reconhecível ou visual de alto impacto
- Texto na tela nos primeiros 2 segundos aumenta retenção (muitos usuários assistem sem som)
- O criativo deve parecer conteúdo orgânico, não publicidade — quanto mais "ad look", maior a taxa de skip

**Formatos que funcionam por objetivo:**

| Objetivo | Formatos que tendem a performar |
|---|---|
| Lead generation | Depoimento real, problema + solução, "você sabia que...", vídeo do fundador ou vendedor |
| Tráfego para LP | Demo de produto, antes/depois, conteúdo educativo com CTA |
| Awareness local | Mostrar o local real, equipe, bastidores, prova social visual |
| Conversão direta | Oferta clara + urgência + prova social + CTA direto |

**Sinais de criativo fraco:**
- Hook rate abaixo de 15% — o usuário não para
- 6s view rate acima de hook rate em muito — o início engaja mas o meio perde
- CPM alto com CTR baixo — o algoritmo está entregando mas o criativo não gera ação
- Completion rate muito alto mas sem conversão — entretenimento sem intenção comercial

---

## ANÁLISE POR OBJETIVO DE CAMPANHA

---

### Lead Generation — Formulário Nativo (Instant Form)

**O que verificar:**
- O formulário tem perguntas de qualificação ou só nome/telefone?
- Qual é a taxa de preenchimento (leads / cliques no formulário)?
- Os leads estão sendo integrados com CRM ou baixados manualmente?
- Com que frequência os leads são contactados após o preenchimento? (Velocidade de resposta impacta taxa de aproveitamento)
- O CPL atual é coerente com o histórico ou está acima?

**Cuidado com volume vs qualidade:**
Formulário nativo no TikTok tende a gerar volume alto com qualidade variável. Se o comercial está reclamando dos leads, o problema provavelmente não é de segmentação — é de qualificação dentro do formulário. Solução: adicionar 1-2 perguntas que forcem o usuário a demonstrar intenção real.

---

### Lead Generation — Página de Destino

**O que verificar:**
- O pixel está instalado e disparando o evento correto na LP?
- A LP carrega rápido no mobile? (TikTok tem tráfego quase 100% mobile — uma LP lenta é crítica)
- A LP tem coerência com o criativo? O usuário que clicou está recebendo a mesma promessa que o vídeo fez?
- A taxa de conversão da LP está coerente? (Cliques no link → conversões)
- Há discrepância entre conversões reportadas pelo TikTok e pelo GA4 / pixel? Quanto?

**Nota sobre velocidade de LP:**
No TikTok, o usuário que clicou estava em modo de consumo de conteúdo. Se a LP demora mais de 2-3 segundos para carregar, a taxa de rejeição é alta. Verificar sempre via PageSpeed Insights antes de concluir sobre qualidade do criativo.

---

### Tráfego e Consideração

**Quando usar:** Para construção de audiência de retargeting ou para nichos onde o ciclo de compra longo exige múltiplos pontos de contato.

**O que verificar:**
- O tráfego gerado está sendo capturado para retargeting? (Pixel instalado na LP?)
- O CTR e o CPC estão coerentes com o nicho?
- Há uma campanha de conversão consumindo essa audiência depois?

**Alerta:** Campanhas de tráfego no TikTok tendem a atrair cliques curiosos de usuários fora do perfil de compra. Sem retargeting bem estruturado, o dinheiro gasto em tráfego não gera retorno mensurável.

---

## ESTRUTURA DE CONTA — O QUE VERIFICAR

### Estrutura recomendada para início

```
Campanha (objetivo + orçamento)
└── Grupo de Anúncios 1 — Público Broad (sem segmentação manual)
    ├── Criativo A
    ├── Criativo B
    └── Criativo C
└── Grupo de Anúncios 2 — Interesse específico (se relevante)
    ├── Criativo A
    └── Criativo B
```

**Por que começar com Broad:**
O algoritmo do TikTok é orientado a conteúdo, não só a dados de usuário. Um criativo forte com público Broad frequentemente supera segmentação manual detalhada porque o algoritmo encontra o público certo pelo próprio conteúdo do vídeo. Segmentação muito restrita limita o aprendizado.

### Orçamento: diário vs total

- Orçamento diário: mais controle, entrega previsível. Recomendado para início
- Orçamento total (life budget): o algoritmo distribui. Útil para campanhas com data de fim definida (lançamentos, eventos)

**Mínimo recomendado por grupo de anúncios:**
R$ 50-80/dia para que o algoritmo tenha dados suficientes para otimizar. Abaixo disso, o aprendizado é lento e a entrega é instável.

### Estratégias de lance

| Estratégia | Quando usar |
|---|---|
| Menor custo (sem meta) | Início — maximiza volume de dados |
| Meta de custo (Cost Cap) | Quando há histórico suficiente e CPL alvo definido |
| Lance máximo (Bid Cap) | Controle máximo de custo — pode limitar entrega |
| Valor mais alto | Para otimizar ROAS — requer dados de valor de conversão |

**Regra:** Não começar com meta de custo em conta nova ou campanha nova. O algoritmo precisa de dados antes de ser restringido por um teto de custo.

---

## DIAGNÓSTICO DE PIXEL E RASTREAMENTO

**O que verificar no TikTok Events Manager:**
- O pixel está instalado em todas as páginas relevantes?
- O evento de conversão está disparando no momento certo?
- A Events API está configurada? (Reduz perda de dados por bloqueadores e iOS)
- Há deduplicação entre pixel e Events API ativa?
- Qual é o volume de eventos nos últimos 7 dias? (Menos de 50 eventos/semana dificulta otimização)

**Ferramenta de verificação:**
TikTok Pixel Helper (extensão Chrome) — mesma lógica do Meta Pixel Helper. Acessar a LP com a extensão ativa e verificar se o evento dispara no momento correto.

**Discrepância entre TikTok e GA4:**
É normal e esperada — atribuição é diferente. TikTok usa janela padrão de 7 dias clique + 1 dia visualização. GA4 usa last click por padrão. O que importa é a tendência e a consistência, não o número absoluto igual.

---

## DIAGNÓSTICO DE FASE DA CAMPANHA

| Fase | Sinal | O que fazer |
|---|---|---|
| Aprendizado | Entrega instável, custo oscilando, menos de 50 eventos de otimização/semana | Não mexer. Aguardar |
| Estável | Entrega regular, custo consistente | Analisar e otimizar com cautela |
| Fadiga criativa | CTR caindo, hook rate caindo, CPM subindo, frequência crescendo | Renovar criativos — prioridade máxima |
| Saturação de público | Volume caindo, alcance estagnado, frequência alta | Expandir público ou testar novo criativo para novo segmento |

**Regra do aprendizado no TikTok:**
Assim como no Meta, alterações durante o aprendizado reiniciam o processo. Não troque criativo, público, orçamento (acima de 50%) ou evento de otimização enquanto a campanha não saiu do aprendizado.

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

- Nunca avaliar performance sem ver os criativos — número sem contexto criativo é cego no TikTok
- Nunca mexer em campanha no aprendizado
- Nunca aumentar orçamento mais de 50% de uma vez — reinicia aprendizado
- Não concluir sobre qualidade de público sem validar o criativo primeiro
- Não comparar CPL com Meta Ads diretamente — plataformas diferentes, usuários em momentos diferentes, intenções diferentes
- Não recomendar escalar campanha com criativo fatigado — escalar fadiga só aumenta gasto sem resultado
- Separar sempre: o que é fato, o que é hipótese, o que é recomendação

---

## REFERÊNCIAS RÁPIDAS

### Checklist de conta nova ou assumida

- [ ] Pixel instalado e disparando corretamente?
- [ ] Events API configurada com deduplicação?
- [ ] Evento de conversão correto selecionado como otimização?
- [ ] Criativos em formato vertical nativo (9:16)?
- [ ] Vídeos com duração entre 15-60 segundos?
- [ ] Hook nos primeiros 3 segundos?
- [ ] Texto na tela presente (para usuários sem som)?
- [ ] Orçamento mínimo adequado por grupo (R$ 50-80/dia)?
- [ ] Campanha iniciando com Broad antes de segmentação restrita?
- [ ] Há histórico de performance anterior para comparação?

### Sinais de alerta que pedem investigação imediata

| Sinal | Hipótese mais provável |
|---|---|
| Hook rate abaixo de 15% | Criativo fraco — o início não para o scroll |
| Alto volume de leads, zero aproveitamento no comercial | Formulário sem qualificação ou público fora do perfil |
| CPM muito alto sem explicação | Criativo com "ad feel" sendo penalizado pelo algoritmo |
| CTR acima de 3% mas sem conversão | LP lenta, sem coerência com o criativo ou evento errado |
| Gasto zerado sem motivo | Problema de conta, pixel suspeito ou criativo reprovado |
| Performance boa nos primeiros 3 dias, queda brusca depois | Saturação rápida de público pequeno — expandir segmentação |

### Diferenças práticas entre TikTok e Meta para lead gen

| Dimensão | TikTok | Meta |
|---|---|---|
| Custo de entrada | Geralmente menor CPM em nichos menos disputados | Mais caro em nichos competitivos |
| Qualidade de dado do usuário | Menor — plataforma mais jovem | Maior — histórico mais longo |
| Criativo que funciona | Vídeo nativo, orgânico, UGC | Variado — imagem, vídeo, carrossel |
| Velocidade de aprendizado | Mais lento — precisa de mais dados | Mais rápido com pixel maduro |
| Público disponível | Melhor para 18-35 anos em nichos de consumo | Mais amplo em faixa etária e nicho |
| Momento de usar | Teste e diversificação de canal, nichos com público jovem | Canal principal em maioria dos nichos |
