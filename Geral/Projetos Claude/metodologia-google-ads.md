# METODOLOGIA DE ANÁLISE — GOOGLE ADS

---

## PRINCÍPIO CENTRAL

Antes de avaliar performance, entenda o que está sendo chamado de conversão. Uma campanha com 200 conversões pode ser excelente ou completamente inútil dependendo do que está sendo contado.

A segunda coisa a entender é o momento da conta: está em aprendizado, estável, saturada ou degradando? Essa leitura muda completamente o que deve ou não ser mexido.

---

## DADOS INICIAIS — SOLICITAR SEMPRE

### Bloco 1 — Contexto do negócio
1. Tipo de negócio e modelo de receita
2. Região atendida
3. Objetivo real da campanha (não o objetivo técnico configurado)
4. O que seria uma conversão de alto valor para o comercial
5. Ciclo de compra estimado (dias entre primeiro contato e fechamento)

### Bloco 2 — Dados da conta (últimos 30 dias + 30 dias anteriores, **separados**)

> **Por que separar os períodos:** 60 dias em bloco único esconde tendência, queda, melhora e sazonalidade. Sempre comparar.

**Aba Campanhas — colunas solicitadas:**
- Campanha / Tipo / Status / Orçamento / Estratégia de lances
- Custo / Impressões / Cliques / CTR / CPC médio
- Conversões / Taxa de conversão / Custo por conversão
- Todas as conversões / Valor de conversão (se houver)

**Aba Conversões — colunas solicitadas:**
- Nome da ação / Categoria / Origem / Status
- Primária ou secundária / Incluída em "Conversões"
- Janela de conversão / Modelo de atribuição / Contagem

---

## HIERARQUIA DE VALOR DE CONVERSÃO

| Conversão | Valor |
|---|---|
| Venda offline importada | Máximo |
| Lead qualificado (validado pelo comercial) | Muito alto |
| Formulário enviado | Alto |
| Ligação comercial (duração relevante) | Alto |
| WhatsApp iniciado | Médio-alto |
| Ver rota / visita à loja | Alto para negócio físico |
| Clique em botão genérico | Médio-baixo |
| Visualização de página | Baixo |
| Engajamento genérico | Baixo |

**Regra:** nunca compare CPL entre campanhas com conversões de valor diferente. Um CPL de R$ 8 em "clique no botão" é pior que R$ 80 em "formulário enviado com dados completos".

---

## DIAGNÓSTICO POR FASE DA CAMPANHA

Antes de recomendar qualquer mudança, identifique em que fase a campanha está.

| Fase | Sinal | O que fazer |
|---|---|---|
| Aprendizado | Entrega instável, custo oscilando, < 30-50 conversões/mês | Não mexer. Verificar se conversão configurada é a correta |
| Estável | Entrega regular, custo consistente, volume previsível | Analisar e otimizar com cautela |
| Saturação | Volume caindo, CPL subindo, sem mudança de contexto | Investigar termos, criativos, lances e sazonalidade |
| Degradação | Conversões caindo + qualidade caindo + CPL subindo | Diagnóstico completo antes de qualquer ação |

**Nota sobre conversion delay:**
Para negócios com ciclo de compra longo (imóveis, serviços B2B, consórcios), uma conversão que acontece hoje pode ter sido gerada por clique de 15, 30 ou 45 dias atrás. Campanhas recentes podem parecer fracas mas ainda estão gerando conversões dentro da janela de atribuição. Sempre considerar o ciclo de compra ao avaliar campanhas com menos de 30-45 dias rodando.

---

## ANÁLISE POR TIPO DE CAMPANHA

---

### Performance Max com objetivo físico (visitas, rota, presença local)

**O que verificar:**
- Conversões reais: são visita à loja, ver rota, ligação? Ou page views e eventos fracos?
- Está limitado pelo orçamento?
- Quantos grupos de recursos existem? Estão completos?
- Há vídeos nos formatos adequados (16:9, 9:16, 1:1)?
- Há temas de pesquisa configurados?
- Localização: "Presença" ou "Presença ou interesse"? (Para objetivo físico, preferir "Presença")
- Qual canal concentra o gasto? (Maps, Search, YouTube, Display, TV) O canal que mais gasta tem relação com o objetivo?
- Audience signals: há listas de clientes, visitantes do site, segmentos de interesse coerentes com o ICP?

**Sobre audience signals no PMax:**
O PMax usa audience signals como ponto de partida — não como restrição. Sinais melhores = aprendizado mais rápido. Prioridade de sinal: lista de clientes ativos > visitantes do site com ação > segmentos de interesse coerentes > segmentos sem relação. Se a conta não tem lista de clientes nem pixel com histórico, o PMax começa "cego" e demora mais para otimizar.

**Telas a solicitar quando necessário:**
1. PMax segmentado por ação de conversão:
   Segmentar > Conversões > Ação de conversão
2. Performance do canal:
   Insights e relatórios > Performance do canal
3. Relatório por localização:
   Quando e onde > Locais
4. Relatório por dispositivo:
   Quando e onde > Dispositivos
5. Grupos de recursos com força do anúncio e assets listados

**Regra para PMax físico:** não pausar enquanto estiver entregando visita/rota com custo eficiente. Diagnosticar antes de mexer.

---

### Performance Max com objetivo de conversão (leads ou vendas online)

**O que verificar — além dos itens do PMax físico:**
- O evento de conversão principal é primário e tem volume suficiente (mínimo 30-50/mês para otimizar bem)?
- Há eventos secundários configurados que poderiam estar inflando o número de "conversões"?
- A campanha está competindo com campanhas Search ativas pelos mesmos termos? (Conflito interno de leilão)
- O gasto está concentrado em qual canal? Para objetivo de lead, Search e Maps tendem a performar melhor que YouTube e Display dentro do PMax

**Nota sobre PMax vs Search:**
PMax tem prioridade sobre Search no leilão quando ambas estão ativas para os mesmos termos. Se há uma campanha Search bem estruturada e uma PMax nova rodando junto, a PMax pode estar "roubando" tráfego qualificado da Search sem necessariamente converter melhor. Sempre verificar se há sobreposição.

---

### Search com objetivo de captação comercial (leads B2B ou alto ticket)

**O que verificar:**
- As conversões configuradas são formulário, WhatsApp, ligação? Ou está contando visita à loja ou page view como lead?
- Estratégia de lance: manual CPC, tCPA, tROAS, Maximizar conversões? É coerente com o volume atual de dados?
  - Manual CPC: faz sentido com menos de 30 conversões/mês ou quando há controle fino necessário
  - Maximizar conversões (sem meta): faz sentido para acumular dados antes de definir tCPA
  - tCPA: requer mínimo 30-50 conversões/mês de qualidade para funcionar bem
  - Maximizar conversões com meta de CPA: mais restritivo — pode limitar volume em conta com pouco histórico
- Rede de Display está ligada dentro da campanha Search?
- Parceiros de pesquisa estão ativos? Qual % do tráfego vem de lá?
- Expansão de URL final está ativa? Para onde está mandando?
- Broad match está sendo usado? Quais palavras? O que está gerando?
- Há palavras-chave negativas configuradas? Em lista compartilhada ou só na campanha?

**Telas a solicitar:**
1. Termos de pesquisa (filtrar pela campanha):
   - Termo / Tipo de correspondência / Adicionado ou excluído
   - Cliques / Impressões / CTR / CPC / Custo
   - Conversões / Taxa de conversão / Custo por conversão
2. Palavras-chave com mesmas colunas acima
3. Conversões segmentadas por ação de conversão
4. Configurações da campanha (rede, localização, idioma, rotação)
5. Anúncios responsivos — força do anúncio e combinações
6. Página de destino (via Insights > Páginas de destino ou via anúncio)

**Classificação de termos de pesquisa:**

| Categoria | Ação |
|---|---|
| Alta intenção, produto correto | Manter, avaliar criar exata |
| Média intenção, produto adjacente | Investigar taxa de conversão |
| Baixa intenção ou genérico | Investigar antes de negativar |
| Irrelevante / sem relação | Negativar |
| Concorrente (intenção de comparação) | Decidir por estratégia |
| Navegacional (marca do cliente) | Excluir ou proteger |
| Termos que inflariam volume sem qualidade | Negativar |

**Cuidado com broad match:**
Broad match + Smart Bidding pode funcionar bem com volume suficiente de dados de conversão (mínimo 30-50 conversões/mês de qualidade). Abaixo disso, tende a gastar em termos irrelevantes. A combinação broad + tCPA com histórico sólido é uma das mais eficientes do Search atual — mas exige que a conversão configurada seja de valor real. Sempre verificar termos de pesquisa antes de concluir qualquer coisa sobre broad.

---

### Demand Gen (substituto do Discovery)

**Contexto:**
Demand Gen é o formato de campanhas de consideração e descoberta do Google — aparece no YouTube feed, Shorts, Gmail e Discover. Não é Search (sem intenção ativa) e não é Display tradicional. É o equivalente mais próximo de campanhas de topo/meio de funil do Meta dentro do Google.

**Quando faz sentido:**
- Negócios com ciclo de compra longo onde construção de demanda é relevante
- Retargeting com criativo visual para quem visitou a LP mas não converteu
- Produtos ou serviços com apelo visual forte
- Como complemento à Search em contas com orçamento para mais de um canal

**O que verificar:**
- Qual é o objetivo configurado? Tráfego, conversão, awareness?
- Os criativos estão adaptados ao formato? (Imagem e vídeo nativo, não banner de display)
- O público é de retargeting ou prospecting? Para qual finalidade está sendo usado?
- Há sobreposição com campanhas Search ativas? O Demand Gen não rouba tráfego de intenção ativa (diferente do PMax), mas pode gerar confusão de atribuição

**Alerta:** Demand Gen com objetivo de conversão em conta com pixel fraco ou público frio tende a performar mal. Funciona melhor com retargeting de audiência quente (visitantes de LP, lista de clientes) ou com lookalike de clientes de qualidade.

---

## DIAGNÓSTICO DE TAG E RASTREAMENTO

**O que verificar:**
- A tag do Google está instalada corretamente em todas as páginas?
- Os eventos de conversão estão disparando no momento certo? (Erro clássico: evento de "lead" disparando ao carregar a página de obrigado, não ao enviar o formulário — se a LP recarrega a mesma URL, pode estar contando toda visita como conversão)
- Há conversões importadas do GA4? Se sim, qual evento está sendo importado e ele representa o que parece representar?
- A janela de conversão é coerente com o ciclo de compra?
- O modelo de atribuição está configurado? (Padrão atual do Google: baseado em dados — data-driven. Para contas com pouco volume, pode distorcer)
- Há deduplicação quando a mesma conversão é rastreada por múltiplas fontes?

**Customer Match e first-party data:**
Se o cliente tem lista de clientes ou leads anteriores, Customer Match permite usar esse dado como audience signal no PMax, como lista de exclusão (não anunciar para quem já é cliente) ou como base para Similar Segments. Em contas onde o pixel tem pouco histórico, uma boa lista de Customer Match é o ativo mais valioso que existe.

---

## ESTRUTURA DE CONTA — O QUE VERIFICAR

### Conflitos internos de leilão

Situação problemática mais comum: PMax e Search ativas para os mesmos termos. O Google prioriza PMax no leilão. Resultado: a Search perde impressões, o PMax ganha tráfego que poderia ter sido mais controlado via Search.

Verificar sempre: há campanhas competindo pelos mesmos termos? Se sim, a divisão é intencional?

### Listas de palavras-chave negativas

- Negativas em lista compartilhada se aplicam a todas as campanhas vinculadas — cuidado ao criar listas amplas
- Negativas de campanha se aplicam só àquela campanha
- Negativas de grupo se aplicam só àquele grupo
- Hierarquia: mais específica prevalece. Uma palavra liberada no grupo prevalece sobre negativa da campanha

---

## FORMATO DE RESPOSTA PADRÃO

1. **O que já entendemos** — fatos confirmados pelos dados
2. **O que parece funcionar** — o que não deve ser mexido sem razão clara
3. **O que parece problemático** — com hipótese da causa, não só o sintoma
4. **O que está inconclusivo** — precisa de mais dados ou mais tempo
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

- Nunca pausar palavra-chave que carrega volume antes de ter substituta mais específica rodando
- Nunca trocar estratégia de lance antes de ajustar conversões
- Nunca avaliar CPL sem saber o que está sendo contado como conversão
- Não recomendar aumento de orçamento em campanha com conversão fraca configurada
- Não trocar para tCPA em campanha com menos de 30 conversões/mês de qualidade
- Considerar sempre o conversion delay antes de concluir que campanha nova "não está funcionando"
- Separar sempre: o que é fato, o que é hipótese, o que é recomendação

---

## REFERÊNCIAS RÁPIDAS

### Checklist de conta nova ou assumida

- [ ] Quais campanhas estão ativas e com qual objetivo?
- [ ] Quais conversões estão configuradas? São primárias ou secundárias?
- [ ] Os eventos estão disparando no momento certo?
- [ ] Há PMax e Search competindo pelos mesmos termos?
- [ ] Há listas de palavras-chave negativas configuradas?
- [ ] Rede de Display está ligada dentro de alguma campanha Search?
- [ ] Parceiros de pesquisa estão ligados? Qual % do tráfego?
- [ ] Há Customer Match ou audience signals configurados?
- [ ] A janela de atribuição é coerente com o ciclo de compra?
- [ ] Há histórico de pelo menos 30 dias para comparação?

### Sinais de alerta que pedem investigação imediata

| Sinal | Hipótese mais provável |
|---|---|
| Muitas conversões, zero leads no CRM | Evento errado — page load ou clique em botão, não envio de formulário |
| CPL muito baixo para o nicho | Conversão de baixo valor sendo contada como lead |
| Volume caindo sem mudança na conta | Sazonalidade, concorrência nova ou degradação de lance |
| Custo disparando sem aumento de conversões | Broad match gerando tráfego irrelevante ou PMax mudando mix de canal |
| Taxa de conversão caindo com tráfego igual | Problema na LP, mudança de público ou criativo/anúncio degradado |
| tCPA muito acima da meta configurada | Volume insuficiente de conversões para o algoritmo otimizar bem |
