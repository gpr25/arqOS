# ALV — ARQUIVO MESTRE DE REGISTRO
**Autoshopping Linha Verde · Grupo Gadens · Mídia Paga (Meta + Google)**

- **Versão:** 1.0
- **Última atualização:** 16/07/2026
- **Responsável:** Gabriel Pauletto
- **Função:** fonte única de estado da conta, decisões datadas, números históricos e aprendizados. Base de consulta para não arrastar conversas inteiras para o contexto.

---

## 0. COMO USAR E COMO ATUALIZAR

**O que este arquivo é:** registro de estado + decisões + números + aprendizados. Não é transcrição de conversa.

**Consulta:** para recuperar um dado histórico (ex: "número de junho", "decisão de tal data"), ir direto à Seção 7 (Registro Datado) ou à seção temática correspondente.

**Regra de atualização (aplicar a cada mudança significativa):**
1. Registrar o fato na Seção 7 com data no formato `DD/MM/AAAA`.
2. Atualizar a seção temática afetada (2 a 6) para refletir o estado novo.
3. Se a mudança substitui um estado anterior, marcar o antigo como superado com a data, nunca apagar sem rastro.
4. Incrementar a versão e a data no cabeçalho, registrar a linha no Changelog (Seção 11).

**Convenção de confiança:** todo número de conversão/CPL carrega ressalva enquanto o rastreamento estiver em auditoria. Ver Seção 3.

**Lacunas conhecidas:** marcadas com `[LACUNA]`. Não preencher com estimativa. Só substituir por dado real quando existir.

---

## 1. NEGÓCIO (base fixa, muda pouco)

| Item | Detalhe |
|---|---|
| Modelo | Condomínio de ~23 lojas independentes de seminovos. Cada loja com WhatsApp próprio. |
| Grupo | Grupo Gadens |
| Praça principal | Curitiba + Região Metropolitana (RMC) |
| Praças secundárias | Interior PR, Oeste PR, SP, SC/MS |
| Estoque | ~1.000 veículos, rotação altíssima |
| Volume de venda | 300 a 500 carros/mês (todos os lojistas somados) |
| Ticket médio | ~R$80.000. Vários veículos entre R$200k e R$300k. |
| Público | Classe B / C-alta, renda familiar R$10k a R$40k. Referências C/D/E de docs genéricos do Grupo Gadens NÃO se aplicam aqui por causa do ticket. |
| Fechamento | 100% offline, presencial na loja ou negociação humana. Tráfego gera o lead, não fecha a venda. |

**Objetivo:** gerar contato comercial qualificado que as lojas convertem em venda presencial.

**Jornada:** anúncio → clique em página de veículo ou landing por categoria (nunca home ou perfil) → contato via WhatsApp da loja ou formulário → atendimento comercial → visita à loja → venda offline.

**Hierarquia de conversão (nunca tratar como iguais):**

| Valor | Conversão |
|---|---|
| Alto | Mensagem no WhatsApp com intenção real (pergunta sobre veículo específico, financiamento, disponibilidade) |
| Médio | Visita a página de veículo com comportamento ativo |
| Baixo | Clique genérico, alcance, impressão |

**Meta atual:** 100 leads/mês (Meta + Google combinados). Balizador **provisório** para calibrar nos próximos meses. CPL de referência ~R$109, teto implícito a recalcular conforme divisão de verba. **Não há CPL acordado formalmente com a gestão.**

**North-star provisório (enquanto tracking em auditoria):** custo por conversa qualificada iniciada no WhatsApp.

**Concorrentes mapeados (jun/2026):**
- Formato (mesmo modelo de shopping/condomínio): Auto Shopping Curitiba, Rotta 8 Veículos.
- Produto (revendas diretas): Roggia Automóveis, Máximo Veículos, Autoban, Prime Veículos CWB, BellosCar.
- Benchmark indireto: Localiza Seminovos.

---

## 2. BUDGET (estado atual + lógica)

| Plataforma | Verba/mês | Papel |
|---|---|---|
| Google Ads | R$22.000 | Frente principal. A intenção de compra de carro se manifesta mais aqui, via busca ativa. |
| Meta Ads | R$16.000 | Frente complementar. Descoberta e marca. |

Detalhamento por campanha em Seção 4 (Meta) e Seção 5 (Google).

---

## 3. RASTREAMENTO E MEDIÇÃO (estado)

**Estado geral:** pixel e tag instalados, **em auditoria**. Acesso ao Google Analytics obtido (10 anos de histórico na conta). CAPI e eventos sendo tratados com a **Revenda Mais** (empresa que administra o site). **Nenhum número de conversão é confiável até a auditoria terminar.**

**Fontes de verdade:**
- Meta: exports diretos do Gerenciador de Anúncios.
- **Mlabs excluído da análise de performance.** Motivo: reportou dados de período misturado que não corresponde a janela real de campanha (ver Seção 7, 14/07). Só serve para publicação/agendamento, não para número.
- Google: GA4 + Ads, pós-limpeza da junk conversion.

**Elo ausente:** o comercial não devolve quais leads viraram visita e venda. Enquanto isso não existir, CPL é a melhor métrica disponível, mas é incompleta (mede custo, não qualidade). **Sinalizar essa ressalva sempre que uma conclusão de performance for tirada.**

**Atribuição sem CAPI (interino):**
- Tráfego de site: UTMs no GA4.
- Contato direto de lojista: código de texto pré-preenchido no WhatsApp. Formato `[MET][NOMELOJA]` para Meta lojistas; `[GAD]` reservado para Google Ads.

**Dependência crítica:** Fase 2 do Meta (otimização por conversão, catálogo AIA, retargeting granular) e a auditoria de conversão dependem de cooperação da Revenda Mais em CAPI, GTM e feed. Historicamente pouco cooperativa nesses pontos.

---

## 4. META ADS — ESTRUTURA ATUAL

**IDs:** Conta de anúncios `529042313814912` · Business Manager `439491940159846`.

**Verba R$16.000/mês travada. Distribuição vigente (fechada em 14/07/2026):**

| Campanha | Detalhe | Verba |
|---|---|---|
| Lojistas (Engajamento/CTWA) | R$39/dia × 6 ativos por quinzena. 26 ad sets construídos, rotação por pausar/ativar (nunca recriar, preserva aprendizado). 7 lojistas é exceção que consome reserva. | R$7.020 |
| Ofertas Site BOF | Remarketing: visitantes do site 180d + engajadores/video viewers IG/FB 365d. Segmentação manual/Original travada, sem expansão Advantage+. | R$75/dia (R$2.250) |
| Ofertas Site MOF | Tráfego frio: Advantage+ com interesses automotivos, otimização LPV, carrossel com link por card para páginas filtradas de estoque. | R$145/dia (R$4.350) |
| Institucional (Reconhecimento) | 5 ad sets regionais: Curitiba R$12/dia, SP/SC/Oeste PR/Interior PR R$10/dia cada. Geo broad apenas, sem lookalikes. Destino /multipla, display autoshoplinhaverde.com.br. | R$1.560 |
| Turbinar fim de semana | R$20/dia × 3 dias/semana, só para posts com tração orgânica comprovada. | R$260 |
| Reserva | R$500 fixo + R$60 para turbinar esporádico. | R$560 |

**Superado, não usar:** pool flex de R$4.000 (descontinuado). Campanha institucional antiga (a pausar). Distribuição antiga do Site em R$5.000 (MOF R$3.000 + BOF R$2.000) foi substituída pela vigente acima.

**Nomenclatura:** `[LOJISTAS][NOMELOJA]`, `[SITE][MOF]`, `[SITE][BOF]`, `[RECON][CURITIBA]` para ad sets. Criativos `AAAA-MMQ_tipo_modelo`.

**Roteamento de criativo (regra dos três destinos):**
- Conteúdo institucional de lojista → ad sets de Lojistas.
- Oferta de veículo → Site (MOF primário, BOF com mensagem enquadrada como quente).
- Marca/institucional Autoshopping → Reconhecimento.

**Princípio Andromeda (mudança de algoritmo Meta concluída out/2025):** o criativo direciona a entrega mais que a seleção de público. Alavanca principal de performance daqui pra frente é profundidade criativa no ad set Site MOF.

**Flag de otimização (aberta):** os 6-7 ad sets ativos de lojista compartilham lookalikes Advantage+ sobrepostos num raio de 15km do mesmo seed, elevando frequência e CPM acima da média de junho. Principal alavanca de dedup quando a estrutura sair do aprendizado. **Não mexer durante aprendizado.**

### 4.1 Crise técnica da conta Meta (aberta desde início de jul/2026)

Múltiplas falhas simultâneas de backend, persistentes por 10+ dias:
- Erro `#2061015` nos campos de link.
- Erro `#3858103` que bloqueia URLs de WhatsApp no campo de destino do objetivo Site (forçou a virada para CTWA nativo via Engajamento).
- Remoção automática da associação Pixel/Dataset ao editar.
- Campos de criativo perdendo configuração após publicar.
- Faturamento bloqueado por completo, boleto **e** Pix.

Limpeza de cache confirmada NÃO ser a causa. Problema no backend da Meta.

**Casos de suporte:** `1002215365623050` e `1556667192628603`. Escalado para atendente humano com mensagem técnica referenciando os dois casos, o código de erro e o bloqueio de ambos os métodos de pagamento. **Reclame Aqui** aberto como canal paralelo.

**Plano B (teste de isolamento, não migração):** criar conta de anúncios nova no mesmo BM, com os mesmos ativos (pixel, página, domínio), e testar em ordem: (1) sobe anúncio sem #2061015? (2) pixel permanece associado ao salvar/reabrir? (3) **a pergunta que importa:** a conta nova gera boleto/Pix? Interpretação: se tudo funciona, defeito isolado na conta velha; se pagamento ainda falha, o bloqueio é do BM ou do método, e trocar de conta não resolve. **Não migrar verba nem campanhas** (perde aprendizado, decisão grande, sem necessidade enquanto houver saldo).

---

## 5. GOOGLE ADS — ESTRUTURA

**Verba R$22.000/mês.**

**Estado herdado (a corrigir antes de qualquer lançamento):**
- PMax herdada rodando sem direção.
- ~194.000 "conversões" acumuladas na conta a ~R$6 cada. Confirmadas como junk: micro-eventos de página importados do GA4 como conversão primária. Toda estratégia de lance automático estava otimizando para sinal sem valor.
- **Passo pré-lançamento obrigatório:** rebaixar essa junk conversion para Secundária antes de subir qualquer campanha nova. A queda no número de conversões pós-limpeza é confirmação de que a medição passou a funcionar, e está pré-explicada no deck de gestão.

**Estrutura aprovada (não lançada ainda em jul/2026):**

| Campanha | Verba/mês | Grupos |
|---|---|---|
| Institucional | ~R$800 | Defesa de marca + conquesting de concorrente, como ad groups separados. |
| Aquisição (motor principal) | ~R$18.500 | 7 grupos: Genérico Local, SUV, Sedan, Hatch, Picape, Eletrificados/BYD (combinado), Financiamento. |
| Premium | ~R$700 | Lançamento na onda 2, junto com grupo rotativo Isca de Modelo. |

- Eletrificados/BYD: um grupo combinado apontando para o filtro combustível. Keywords de híbrido usam URL a nível de keyword para o filtro híbrido.
- **Lance:** Maximizar Cliques sem teto no lançamento (verba diária é o teto natural). Smart Bidding adiado até rastreamento auditado e volume real estabelecido. Sem tetos de CPC/CPA nesta fase (Gabriel rejeitou como chute prematuro).
- **Landing pages:** páginas filtradas de estoque (`/multipla/carroceria/sedan`, `/multipla/combustivel/eletrico`, etc). Resolvem a volatilidade de inventário por ficarem sempre populadas, sem depender de veículo específico em estoque.
- **Geografia:** campanha única Curitiba + RMC, com ajuste de lance **+25% em Curitiba** para forçar peso ~60/40.
- **Conversão primária:** WhatsApp (depende da auditoria Revenda Mais). Ligações como secundária/observação.
- **Negativação rigorosa desde o início:** peças, conserto, aluguel, locação, concurso, OLX, consulta tabela FIPE e similares.

**Fases:** Fase 1 Search (prioridade imediata). Fase 2 PMax só depois do Search estabilizado e rastreamento auditado, com feed de inventário se houver. Não antecipar.

**Regra de transição:** estrutura nova roda 7 dias em paralelo à antiga antes de qualquer desativação. Desativação definitiva exige aprovação da gestão.

---

## 6. RESTRIÇÕES CONFIRMADAS (inegociáveis)

1. **Google Vehicle Ads não existe no Brasil.** Nunca sugerir, em nenhum cenário.
2. **Destino nunca é home ou perfil de lojista.** Sempre página de veículo específico ou landing por categoria. Cada clique a mais é atrito e perda de lead. (Estado herdado ainda caía em home/perfil, correção obrigatória.)
3. **Mlabs fora da análise de performance.** Só exports diretos.
4. **CPL e conversões com ressalva explícita** enquanto rastreamento em auditoria.
5. **Nunca recriar ad sets de lojista** na rotação. Pausar/ativar para preservar histórico de aprendizado.
6. **Não mexer em campanha no aprendizado** (orçamento >20-30% no Meta, troca de criativo em massa, mudança de público ou de evento reinicia o aprendizado).

---

## 7. REGISTRO DATADO (log cronológico) — NÚCLEO DE CONSULTA

> Ordem cronológica. Cada entrada: o que aconteceu, número/decisão, status. Datas de sessão baseadas na atividade das conversas do projeto.

**[LACUNA] Maio/2026:** dados de desempenho de maio foram citados como material a ser cruzado na sessão de Inteligência de Mercado, mas **não há número de maio consolidado registrado** nas conversas. Não estimar.

**15/06/2026 — Inteligência de mercado (sessão de imersão):**
- Mapa de concorrentes definido (ver Seção 1).
- Protocolo de coleta da Biblioteca de Anúncios estabelecido (campos: volume/longevidade, ângulo dominante por categoria, formato/gancho, especificidade da oferta, destino de conversão). Alimenta a Fábrica de Copy.
- North-star definido: custo por conversa qualificada no WhatsApp.
- Claude recusou dar faixa de CPL benchmark para o nicho/região: sem dado brasileiro confiável nesse nível, âncora falsa é pior que âncora nenhuma.

**25/06/2026 — Google Ads, estratégia fechada:**
- Estrutura Search aprovada (Institucional / Aquisição / Premium). Ver Seção 5.
- Descoberta da junk conversion: ~194k conversões a ~R$6, micro-eventos GA4. Rebaixar para Secundária virou passo pré-lançamento obrigatório.
- Gabriel corrigiu abordagem: rejeitou build prematuro antes de validação arquitetural; rejeitou tetos CPC/CPA como chute; exigiu rollout enxuto e progressivo.
- Estrutura de URL filtrada (`/multipla/...`) validada como solução de landing.

**29/06/2026 — Meta:** campanha nova `[Engajamento][Lojistas][wpp]` iniciada (CTWA nativo).

**Junho/2026 (mês fechado) — Meta, números reais:**
- **219 conversas iniciadas no WhatsApp** em 30 dias. Custo médio **R$14,02**. R$3.071 gastos nas campanhas de WhatsApp.
- Gasto total de junho: **R$16.738**.
- Mlabs reportou 267 conversas (número inflado, período misturado). Real = 219.

**01 a 13/07/2026 — Meta, números reais:**
- **200 conversas iniciadas no WhatsApp** em 13 dias. Custo médio **R$16,85**. R$3.369 gastos. Ritmo >15 contatos/dia.
- CPL maior que junho é esperado: campanha consolidada em fase de aprendizado do algoritmo. Pré-explicado no deck.
- Melhor lojista: **Schafas, 44 contatos a R$11,02**. Pior: **Massa Motors, 11 contatos a R$42,49**.

**Início jul/2026 — Crise técnica Meta aberta:** erros #2061015 e #3858103, pixel desmarcando, faturamento bloqueado (boleto+Pix). Ver Seção 4.1.

**14/07/2026 — Alinhamento semanal + deck de gestão:**
- Distribuição Meta R$16k fechada na versão vigente (Seção 4).
- Mlabs abandonado para análise após confirmar dado de período misturado.
- Plano B da conta Meta detalhado (teste de isolamento). Escalação a humano com casos referenciados. ~12 dias de saldo usados como alavanca no chamado.
- **Deck de gestão produzido:** 11 slides, PPTX, identidade visual do Shopping Cidade como referência, assinatura de logo invertida "LINHA VERDE / AUTOSHOPPING", verde primário `#21AA61`, verde escuro `#094825`. Cobre: comparação jun (219) × jul 1-13 (200); breakdown por lojista; narrativa de evolução estrutural como crescimento natural; bloqueio de pagamento + sugestão de cartão de crédito; panorama de criativos; slide explicando por que as campanhas da gestão anterior "todas rodavam" (otimizadas para clique em link a ~R$0,15, não conversa no WhatsApp a ~R$17, diferença de 100×); alocação com R$1.200/mês de reconhecimento fora de Curitiba destacado em vermelho; forms enquadrado como problema de registro, não de resultado; prioridades dos próximos 30 dias.
- **Forms de qualidade de lead dos lojistas:** adoção baixíssima, 5 de 23 lojistas, 7 respostas, zero vendas registradas (um lojista confirmou verbalmente uma venda fechada que nunca foi registrada).
- **Copa do Mundo:** 23 vídeos institucionais por lojista mantidos na campanha de tráfego IG existente até **19/07/2026**. Transição/sunset a planejar.

---

## 8. APRENDIZADOS E PRINCÍPIOS VALIDADOS

- **Consolidação de verba destrava o algoritmo.** 26 campanhas a ~R$10/dia = falha crônica de aprendizado e instabilidade. Poucos ad sets bem financiados é pré-requisito.
- **Medição antes de otimização.** As duas plataformas tinham sinal de conversão corrompido (Meta: pixel/dataset instável; Google: 194k junk). Limpar medição antes de otimizar lance é inegociável, mesmo causando queda visível no número reportado.
- **Volatilidade de inventário é restrição estrutural.** Com 300-500 vendas/mês, qualquer campanha ou LP presa a veículo específico quebra. Páginas filtradas são a solução durável.
- **Benchmark falso é pior que benchmark nenhum.** CPL alvo retido de propósito até existir dado real da estrutura auditada.
- **Rotação é operacional, não estrutural.** Pausar/ativar ad sets de lojista, nunca recriar.
- **Lookalike é prospecção, não o seed.** Reconhecimento usa geo broad sem lookalike de propósito: função é alcance frio, não retargeting.
- **Criativo direciona entrega (Andromeda).** Profundidade criativa importa mais que segmentação fina.

---

## 9. PENDÊNCIAS E HORIZONTE (backlog priorizado)

| Prioridade | Item | Estado |
|---|---|---|
| Corrigir agora | Resolver falha de backend da conta Meta (escalação + Plano B como teste de isolamento) | Aberto |
| Corrigir agora | Rebaixar junk conversion (194k) do Google para Secundária | Pré-lançamento, pendente |
| Investigar antes de mexer | Auditoria completa de conversão nas duas plataformas (via Revenda Mais) antes de habilitar qualquer lance automático | Pendente |
| Medir 7-14 dias | Estrutura consolidada de lojistas Meta saindo do aprendizado | Em curso |
| Fazer | Lançar Search Google (Fase 1) após auditoria de tracking | Aprovado, não lançado |
| Fazer | Dedup de público dos ad sets de lojista (raio 15km, seed compartilhado) | Só após sair do aprendizado |
| Fazer | Transição/sunset dos vídeos Copa (23 vídeos) da campanha IG | Ativos até 19/07 |
| Onda 2 | Premium Google + grupo rotativo Isca de Modelo | Depois do Search estável |
| Contínuo | Coleta de inteligência competitiva na Ads Library, alimenta Fábrica de Copy | Protocolo estabelecido |
| Fase 2 | PMax Google (só após Search estável + tracking auditado, feed se houver) | Não antecipar |

---

## 10. FERRAMENTAS, IDS E ACESSOS

- **Meta:** Conta `529042313814912` · BM `439491940159846`. Casos de suporte `1002215365623050`, `1556667192628603`. Reclame Aqui aberto.
- **Google:** Google Ads + GA4 (10 anos de histórico, acesso obtido).
- **Site / tracking:** Revenda Mais (parceiro técnico, administra pixel e infra do site; auditoria de conversão pendente).
- **Relatório:** exports diretos do Meta Ads Manager (fonte de verdade). Mlabs excluído da análise.
- **Pipeline criativo:** Fábrica de Copy (conversa separada). Inteligência de Mercado (conversa separada) alimenta a Fábrica.
- **Landing:** páginas filtradas do site `/multipla/[filtro]`.
- **Forms lojistas:** Google Forms com coluna de timestamp, segmentação semanal via FILTER/filtros em Sheets.
- **Equipe de apoio:** criativo, copy, design, atendimento comercial, analytics. Coordenadora auxilia comunicação com lojistas. Gestão aprova verbas e manda cobertura regional. Único operador das contas: Gabriel.

---

## 11. CHANGELOG DO ARQUIVO

| Versão | Data | Mudança |
|---|---|---|
| 1.0 | 16/07/2026 | Criação. Consolidado estado de negócio, budget, tracking, estruturas Meta e Google, crise técnica Meta, registro datado de jun e jul/2026, aprendizados e backlog. |
