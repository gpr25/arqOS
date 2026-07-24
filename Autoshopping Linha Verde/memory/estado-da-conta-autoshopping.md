# ALV — ARQUIVO MESTRE DE REGISTRO
**Autoshopping Linha Verde · Grupo Gadens · Mídia Paga (Meta + Google)**

- **Versão:** 1.1
- **Última atualização:** 21/07/2026
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

🛑 **CONVERSA ≠ LEAD (regra travada 2026-07-21).** As "337 conversas iniciadas no WhatsApp" de
julho **não são 337 leads**. Existe uma taxa de perda antes de o contato chegar ao lojista, e ela
**não está medida**. O rastreamento de site/GA4/GTM está em construção justamente para **provar
quais cliques de anúncio viram lead real**. Enquanto isso não fechar:
- **Nunca reportar conversa como lead.** Usar sempre o termo "conversas iniciadas".
- **Não comparar conversas com a meta de leads** — são unidades diferentes.
- Qualquer conclusão sobre "superamos a meta" está **proibida** até existir o dado de conversão.

**Meta atual:** 100 leads/mês (Meta + Google combinados). Balizador **provisório** para calibrar nos próximos meses.
**Decisão 2026-07-21:** **manter a meta como está por ora.** Gabriel vai apresentar à gestão
mostrando que os números foram subestimados e ajustar **gradualmente** — abordagem política mais
eficaz que uma recalibração de choque. CPL de referência ~R$109, teto implícito a recalcular conforme divisão de verba. **Não há CPL acordado formalmente com a gestão.**

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
- **[21/07/2026] Google:** junk conversion rebaixada para Secundária; `lead_gen` da conversa gerada no **site do Autoshopping** (página de estoque/carro exato) cadastrado como evento de conversão. Ver Seção 5.

**✅ [23/07/2026] GOOGLE — MEDIÇÃO NOVA NO AR (marco):** duas ações de conversão **construídas do zero**, sem nada da gestão antiga, e publicadas no GTM (`GTM-KVLGK4D`, **Versão 169**, 16:54). Validadas disparando no GTM Preview.

| Ação | Papel | ID de conversão | Rótulo |
|---|---|---|---|
| `Lead - Formulário Site` | **PRIMÁRIA** (lead quente) | `988689617` | `w2iFCMbErdUcENHpuNcD` |
| `Contato - WhatsApp` | Secundária (observação) | `988689617` | `kELSCMnErdUcENHpuNcD` |

- **Hierarquia (correção de Gabriel, 23/07):** no Google a primária é o **formulário do site**, não o WhatsApp. Quem preenche form tem intenção declarada; clique de WhatsApp é intenção mais rasa. As duas contam, **medidas separadas** — só a primária otimiza.
- **Método do formulário:** o site **não tem página de obrigado** — o sucesso é um `alert()` nativo. A tag `HTML - alert lead ok` sobrescreve `window.alert` e empurra `lead_form_ok` pro dataLayer. Dispara **só no sucesso real** (não em erro de validação) → sem over-count.
- 🔑 **Feito 100% no GTM, SEM a Revenda Mais** — o container já estava no site. Isso **quebra a dependência histórica** que travava a medição. Não usar mais "depende da Revenda Mais" como justificativa para conversão de Google.
- Publicação foi **puramente aditiva** (8 itens, nada existente alterado/excluído). Limpeza do legado ficou como passada separada — ver Seção 9.

**Dependência crítica:** Fase 2 do Meta (otimização por conversão, catálogo AIA, retargeting granular) e a auditoria de conversão **do Meta** dependem de cooperação da Revenda Mais em CAPI e feed. Historicamente pouco cooperativa. ⚠️ **O lado Google saiu dessa dependência em 23/07** (ver acima).

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

**Atualização 21/07/2026 (backfill):**
- **Suporte Meta:** crise **NÃO resolvida**. Casos `1002215365623050`/`1556667192628603` seguem em aberto (15+ dias). Backend Meta ainda com #2061015/#3858103 e bloqueio de faturamento.
- **Contorno aplicado:** pagamento de julho **feito via PIX em 17/07/2026**, custoso e difícil de destravar com **financeiro/diretoria**. Resolvido "por hora"; saldo segurou, **operação não parou**.
- **Plano B (conta nova):** **NÃO executado.** A pergunta-chave (conta nova gera boleto/Pix?) segue sem teste.
- **Reclame Aqui:** **NÃO registrado** (despriorizado por sobrecarga).
- **Risco aberto:** pagamento de **agosto/2026** (a ser gerado poucos dias após 20/07) deve **reabrir o mesmo bloqueio** e nova negociação com diretoria. Problema recorrente mês a mês enquanto backend não for corrigido.

---

## 5. GOOGLE ADS — ESTRUTURA

**Verba R$22.000/mês.**

**Estado herdado (a corrigir antes de qualquer lançamento):**
- PMax herdada rodando sem direção.
- ~194.000 "conversões" acumuladas na conta a ~R$6 cada. Confirmadas como junk: micro-eventos de página importados do GA4 como conversão primária. Toda estratégia de lance automático estava otimizando para sinal sem valor.
- **Passo pré-lançamento obrigatório:** rebaixar essa junk conversion para Secundária antes de subir qualquer campanha nova. A queda no número de conversões pós-limpeza é confirmação de que a medição passou a funcionar, e está pré-explicada no deck de gestão.

**✅ ATUALIZAÇÃO 21/07/2026 (backfill):**
- **Junk conversion (194k) REBAIXADA para Secundária — CONCLUÍDO** (data exata `[PREENCHER]`). O passo pré-lançamento obrigatório está feito.
- **Novo evento de conversão cadastrado:** `lead_gen` da conversa gerada a partir do **site do Autoshopping** (não é LP — correção 20/07). Destino primário do tráfego = página de **estoque** ou do **carro exato**; o `lead_gen` marca a conversa originada aí.
- **Search continua NÃO lançado** — motivo: agenda. Houve alinhamento com a gestão pra **lançar tudo ainda em julho** (meta ~31/07/2026). Enquanto não lança, budget Google roda subutilizado (~R$9k de R$22k, ver junho).

**✅ ATUALIZAÇÃO 23/07/2026 — SEARCH MONTADO + CONVERSÃO NO AR:**

- **Campanhas montadas** (ainda PAUSADAS): Institucional (2 grupos) e Aquisição (6 grupos), com keywords, negativas e RSAs. Build completo em [[../marketing/campanhas/BUILD-search-google-onda1-2026-07]] (v3).
- **Conversão nova publicada** — `Lead - Formulário Site` (**primária**) e `Contato - WhatsApp` (secundária). GTM Versão 169. Detalhe na Seção 3.
- 🔴 **DESTINO BLOQUEADO — ANÚNCIOS REPROVADOS. Trava o lançamento.** São **dois problemas independentes**:
  - **A) `robots.txt` bloqueia `/multipla`** — bloco próprio de `AdsBot-Google` com `Disallow: /busca` e `Disallow: /multipla` (intencional). Revenda Mais **não libera** (crawlers disparavam URLs facetadas falsas, +80% da infra) e ofereceu a rota alias **`/m`**. Validado: alias real, 200 sem redirect, conteúdo idêntico, GTM/dataLayer ativos, não bloqueado (robots casa por prefixo). **URLs do BUILD trocadas para `/m` — necessário, mas NÃO suficiente.**
  - **B) 🔴 WAF/CloudFront devolve 403 por VOLUME de requisições** — esta é a causa da reprovação. Site atrás de **AWS CloudFront** (`X-Amz-Cf-Pop: GRU3-P1`). Teste 23/07: após algumas dezenas de requisições, **o IP inteiro passou a receber 403** — em `/m`, `/multipla`, na **home** e **no próprio `/robots.txt`**. É bloqueio **por taxa/IP, não por caminho** → **trocar URL não resolve**. É a mitigação anti-crawler da Revenda Mais pegando o rastreador de anúncios do Google junto.
- 🔴 **403 no `/robots.txt` é o sintoma mais grave:** sem conseguir ler o robots, o Google trata o **site inteiro** como bloqueado — por isso "Destino não rastreável" aparece **junto** com "Destino que não funciona".
- **Pedido correto à Revenda Mais:** (1) isentar do rate limit os rastreadores verificados do Google (`AdsBot-Google` e `AdsBot-Google-Mobile`); (2) faixas oficiais em `https://developers.google.com/static/crawling/ipranges/special-crawlers.json` (270 prefixos) → IP set + regra Allow **acima** do rate limit no AWS WAF, ou Bot Control com categoria de bot verificado; (3) **`/robots.txt` nunca pode retornar 403**.
- 🔑 **Páginas de carro** (`/carros/Marca/Modelo/....html`) não precisam de troca de URL — mas **também caem no 403**, porque o bloqueio é por IP.
- ⚠️ **Lição de método (erro cometido e corrigido no mesmo dia):** a primeira validação deu "resolvido" porque testou com user-agent de desktop e pegou **cache do CloudFront**. Cache hit **não prova** que o rastreador passa. Ao validar destino de anúncio: testar **volume**, checar `X-Cache`, e conferir se `/robots.txt` responde 200 sob carga.
- **PMax: pausar sem período de paralelo** — decisão de Gabriel em 23/07 (ver ressalva na regra de transição abaixo).

**Estrutura aprovada (montada, pendente de ativação — 23/07/2026):**

| Campanha | Verba/mês | Grupos |
|---|---|---|
| Institucional | ~R$800 | Defesa de marca + conquesting de concorrente, como ad groups separados. |
| Aquisição (motor principal) | ~R$18.500 | 7 grupos: Genérico Local, SUV, Sedan, Hatch, Picape, Eletrificados/BYD (combinado), Financiamento. |
| Premium | ~R$700 | Lançamento na onda 2, junto com grupo rotativo Isca de Modelo. |

- Eletrificados/BYD: um grupo combinado apontando para o filtro combustível. Keywords de híbrido usam URL a nível de keyword para o filtro híbrido.
- **Lance:** Maximizar Cliques sem teto no lançamento (verba diária é o teto natural). Smart Bidding adiado até rastreamento auditado e volume real estabelecido. Sem tetos de CPC/CPA nesta fase (Gabriel rejeitou como chute prematuro).
- **Landing pages:** páginas filtradas de estoque. ⚠️ **Usar sempre o prefixo `/m`** (`/m/carroceria/sedan`, `/m/combustivel/El%C3%A9trico`) — **nunca `/multipla`**, que é bloqueado pro AdsBot-Google. Resolvem a volatilidade de inventário por ficarem sempre populadas, sem depender de veículo específico em estoque. Páginas de carro individual (`/carros/...`) são liberadas normalmente.
- **Geografia:** campanha única Curitiba + RMC, com ajuste de lance **+25% em Curitiba** para forçar peso ~60/40.
- **Conversão primária:** ~~WhatsApp~~ → **CORRIGIDO 23/07: a primária é o FORMULÁRIO do site**; WhatsApp é secundária/observação. Ver Seção 3. *(O registro anterior estava errado — no Google, form = lead quente.)*
- **Negativação rigorosa desde o início:** peças, conserto, aluguel, locação, concurso, OLX, consulta tabela FIPE e similares.

**Fases:** Fase 1 Search (prioridade imediata). Fase 2 PMax só depois do Search estabilizado e rastreamento auditado, com feed de inventário se houver. Não antecipar.

**Regra de transição:** estrutura nova roda 7 dias em paralelo à antiga antes de qualquer desativação. Desativação definitiva exige aprovação da gestão.
⚠️ **Ressalva 23/07/2026:** essa regra vale pro legado **que está performando**. **Não se aplica à PMax herdada** — campanha órfã, sem resultado e sem dono na gestão; Gabriel decidiu pausar direto. Aplicar cerimônia de transição a algo que não entrega é ritual, não gestão de risco.

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

**01 a 21/07/2026 — Meta, números REAIS (export `Autoshopping-Linha-Verde-*-1-de-jul-a-21-de-jul-2026`):**

- **Gasto total no período: R$ 13.027,10** em 21 dias (média R$620/dia).
- **Lojistas (CTWA): 337 conversas, CPL médio R$17,82, gasto R$6.005,70.** Ritmo ~16 conversas/dia, mantido em relação aos primeiros 13 dias (200 conversas).
- Site MOF+BOF: **13.808 LPV**, R$3.799,22 (R$0,275/LPV). MOF R$2.401,23 (8.445 LPV) · BOF R$1.388,00 (5.346 LPV).
- Reconhecimento: **576.941 de alcance**, R$1.143,65 (R$1,98/mil).
- Tráfego IG: 7.326 visitas ao perfil, R$1.174,38 (R$0,16/visita).
- Turbinar (7 posts): ~R$664 no período.

**Ranking de lojistas por CPL (21 dias) — base para o teste do próximo ciclo:**

| 1ª quinzena (01-13/07) | Conversas | CPL | | 2ª quinzena (13-21/07) | Conversas | CPL |
|---|---|---|---|---|---|---|
| SCHAFAS | 46 | **R$10,55** | | TOYOTO | 32 | **R$9,93** |
| GS MOTORS | 37 | R$12,84 | | VIA MAIS | 20 | R$19,35 |
| SOUTH MOTORS | 35 | R$14,14 | | GRANTORINO | 18 | R$20,92 |
| OZ | 32 | R$14,84 | | SITIMA | 18 | R$21,19 |
| CWB CAR | 28 | R$17,66 | | DGONGORA | 17 | R$22,81 |
| SPEED | 13 | R$37,02 | | WAY | 15 | R$25,68 |
| MASSA MOTORS | 11 | **R$42,53** | | ATUAL | 14 | **R$28,31** |

- **Alvos do teste de público+criativo:** MASSA MOTORS (R$42,53), SPEED (R$37,02), ATUAL (R$28,31), WAY (R$25,68).
- **Massa Motors é um caso estrutural, não circunstancial:** estava em R$42,49 em 01-13/07 e ficou em R$42,53 em 01-21/07. Repetiu o pior resultado com precisão — não é ruído, é o público/criativo.
- **Toyoto entrou em 13/07 e já é o melhor CPL da conta.** Vale investigar o que está diferente nele antes de replicar.
- `[RESSALVA]` 2ª quinzena ainda em voo (8 dias contra 13 da 1ª); CPL tende a melhorar. Não concluir superioridade da 1ª quinzena.

**Split regional do Reconhecimento (01-21/07) — munição para a reunião de 22/07:**

| Região | Gasto 21d | Alcance | Custo/mil | Projeção mês |
|---|---|---|---|---|
| **Curitiba** | R$ 315,22 | 153.309 | R$ 2,06 | ~R$465 |
| Interior PR | R$ 214,35 | 78.248 | R$ 2,74 | — |
| Oeste PR | R$ 214,26 | 109.669 | R$ 1,95 | — |
| SC/MS | R$ 195,86 | 99.401 | R$ 1,97 | — |
| SP | R$ 203,96 | 147.321 | R$ 1,38 | — |
| **Total fora de Curitiba** | **R$ 828,43** | 434.639 | — | **~R$1.223/mês** |

✅ **Confirma o número que Gabriel levaria à gestão:** ~R$1.200/mês fora de Curitiba. Proporção real: **72% fora × 28% dentro**.
⚠️ **Contra-argumento a antecipar:** SP tem o alcance **mais barato** (R$1,38/mil vs R$2,06 de Curitiba). A resposta não é negar — é que **alcance fora da praça não converte**: a venda é 100% presencial em Curitiba/RMC, então alcance barato em SP é barato porque **não vale aqui**.
📌 **Mudança já feita em 20/07:** Interior PR, Oeste PR e SC/MS foram **pausados**. Curitiba e **SP seguem ativos** — `[PREENCHER]` SP foi mantido de propósito?

⚠️ **Projeção de gasto Meta de julho:** ~R$18.500 contra verba de R$16.000 (~15% acima).
✅ **Esclarecido 2026-07-21:** o estouro é **conhecido e absorvido**. Por causa dos meses de
bloqueio/subgasto, existe **"gordura" acumulada para queimar**, e Gabriel **não identifica mais
nenhum lugar para cortar**. Registrar como decisão consciente, não como descontrole.

✅ **Motivo real das pausas regionais (20/07):** Interior PR, Oeste PR e SC/MS foram pausados
**porque a verba ia estourar**, com critério de **custo e resultado**. Não foi realocação
estratégica. Gabriel reconhece que está longe do ideal e que não havia alternativa. `[RESSALVA]`
isso muda o enquadramento na reunião: o argumento não é "otimizei a geografia", é "tive que cortar
e escolhi pelo dado" — que é mais honesto e igualmente defensável.

### GOOGLE ADS — números reais 01/07 a 21/07 (export)

| Campanha | Custo | Impressões | Cliques | CPC | Conversões |
|---|---|---|---|---|---|
| **PMax_Institucional** (única com gasto) | **R$ 1.505,39** | 44.576 | 9.827 | R$ 0,15 | 470,39 |

🔴 **Confirma que o Search aprovado NÃO foi lançado** — só a PMax herdada roda.
✅ **Subgasto EXPLICADO (esclarecido 2026-07-21) — e é boa notícia.** R$1.505,39 em 21 dias
(~R$2.222/mês contra R$22.000) **não é descontrole nem teto fictício**: Gabriel **pausou os gastos
incorretos** (a estrutura herdada que queimava verba em sinal errado) e **ainda não conseguiu subir
as campanhas corretas**. A queda contra junho (NF R$8.988,81) é **consequência direta e desejada**
dessa limpeza.

💰 **A verba do Google é real e está disponível.** Ao contrário do Meta — onde Gabriel opera
apertado contra o teto — **no Google há folga de orçamento e espaço para testes**. Essa é a
assimetria central da conta hoje: **restrição no Meta, liberdade no Google.**

**Consequência prática:** o dia dedicado de **2026-07-23** é o que converte essa folga em operação.
Enquanto o Search não sobe, a verba não é perdida — mas também não trabalha.
`[RESSALVA]` as 470,39 conversões precisam ser verificadas — com a junk conversion rebaixada e o
`lead_gen` recém-criado, ainda não dá para afirmar que esse número é sinal limpo.

**Início jul/2026 — Crise técnica Meta aberta:** erros #2061015 e #3858103, pixel desmarcando, faturamento bloqueado (boleto+Pix). Ver Seção 4.1.

**14/07/2026 — Alinhamento semanal + deck de gestão:**
- Distribuição Meta R$16k fechada na versão vigente (Seção 4).
- Mlabs abandonado para análise após confirmar dado de período misturado.
- Plano B da conta Meta detalhado (teste de isolamento). Escalação a humano com casos referenciados. ~12 dias de saldo usados como alavanca no chamado.
- **Deck de gestão produzido:** 11 slides, PPTX, identidade visual do Shopping Cidade como referência, assinatura de logo invertida "LINHA VERDE / AUTOSHOPPING", verde primário `#21AA61`, verde escuro `#094825`. Cobre: comparação jun (219) × jul 1-13 (200); breakdown por lojista; narrativa de evolução estrutural como crescimento natural; bloqueio de pagamento + sugestão de cartão de crédito; panorama de criativos; slide explicando por que as campanhas da gestão anterior "todas rodavam" (otimizadas para clique em link a ~R$0,15, não conversa no WhatsApp a ~R$17, diferença de 100×); alocação com R$1.200/mês de reconhecimento fora de Curitiba destacado em vermelho; forms enquadrado como problema de registro, não de resultado; prioridades dos próximos 30 dias.
- **Forms de qualidade de lead dos lojistas:** adoção baixíssima, 5 de 23 lojistas, 7 respostas, zero vendas registradas (um lojista confirmou verbalmente uma venda fechada que nunca foi registrada).
- **Copa do Mundo:** 23 vídeos institucionais por lojista mantidos na campanha de tráfego IG existente até **19/07/2026**. Transição/sunset a planejar.

**21/07/2026 — Backfill de logs (mídia paga) + cruzamento com Drive:**
- Criado `logs/changelog.md` (não existia; padrão exigia). Registro datado detalhado segue aqui na Seção 7; changelog é o resumo cronológico.
- **Crise Meta (atualização):** suporte NÃO resolveu; pagamento de julho feito via **PIX** (contorno custoso via financeiro/diretoria); Plano B (conta nova) NÃO executado; Reclame Aqui NÃO registrado; **risco de recorrência no pagamento de agosto**. Detalhe na Seção 4.1.
- **NFs de mídia confirmadas (Drive → `NFs/Autoshopping`):**
  - Meta Junho/2026: NF **140581744**, base serviço **R$ 16.738,92**, total c/ tributos R$ 19.053,98, venc. ISS 10/07. Bate com gasto do relatório.
  - Google Junho/2026: NF **37887706**, **R$ 8.988,81** (pagamento já recebido, cliente Google 2154267136).
- **Insight de budget Google:** gasto real de junho (~R$9k) está **muito abaixo do budget de R$22k** — consequência direta da estrutura Search aprovada ainda NÃO ter sido lançada. ~R$13k/mês de verba Google subutilizada. `[PREENCHER: confirmar se houve gasto/lançamento entre 14/07 e 20/07]`.
- **CONTRADIÇÃO detectada (Drive × log):** o PDF `Relatórios/.../Relatório Mensal Autoshopping Linha Verde Junho-26.pdf` reporta **267 conversas** no Meta (fonte Mlabs), enquanto o número validado é **219**. O relatório publicado no Drive usa a fonte descartada. **Ação:** corrigir o número antes de reaproveitar esse relatório em apresentação. Números Google do mesmo PDF (1.097,85 "conversões" a R$8,20) são a junk conversion — não usar como resultado.

**21/07/2026 (cont.) — Estrutura, budget e tracking (Lote 2 do backfill):**
- **[Google]** Search **não lançado** (agenda). Alinhamento com gestão pra lançar tudo **ainda em julho** (~31/07). Junk conversion **rebaixada p/ Secundária (feito)** + evento `lead_gen` da LP cadastrado. Ver Seções 3 e 5.
- **[Meta][budget]** Precisou ajustar **praticamente todas as campanhas** pra caber nos R$16k. Distribuição vigente da Seção 4 pode ter sofrido micro-ajustes `[PREENCHER: detalhar valores por campanha]`.
- **[Meta][rotação]** Ciclo na **2ª quinzena** (de 4); **nenhum ad set de lojista entrou/saiu**; "otimizações constantes" `[PREENCHER: quais — criativo, verba fina, público]` (atenção à restrição #6, não mexer no aprendizado).
- **[Meta][Copa] Correção de data:** os 23 vídeos **NÃO saíram em 19/07** (como o deck de 14/07 dizia); seguem **até fim de julho** `[PREENCHER: confirmar por email]`. Quando saírem, a campanha de tráfego IG desses vídeos **encerra em definitivo**.
- **[Decisão/prazo] 22/07/2026 (quarta):** reunião com a gestão do Autoshopping pra expor os dados — foco em **realocar os R$1.200/mês de Reconhecimento que estão indo pra fora de Curitiba** enquanto falta verba dentro.

**21/07/2026 (cont.) — Otimizações reais e interface comercial (Lote 3):**
- **[Meta] "Otimizações constantes" = manutenção, não reestruturação.** No período: **sem troca de criativo** (exceto **1 vídeo que estava errado**, corrigido) e **sem mudança de verba** (verba por lojista é fixa/estabelecida). Ação concreta: revisar anúncios e **desativar estáticos/vídeos** só em casos de **muita disparidade de resultado**. Restrição #6 respeitada — mudanças maiores só com **10+ dias**.
- **[Meta][aprendizado — nota importante]** Nenhum ad set de lojista parece estar em aprendizado, **porém nenhum atinge 50 conversões/semana** (limiar formal da Meta). Na prática, ficam em "semi-aprendizado" permanente → régua operacional de segurança = **não fazer mudança grande antes de 10 dias**.
- **[Meta][plano próximos ciclos]** Coletando dados por grupo de lojistas pra ajustar nos **próximos ciclos**. **1º teste planejado:** trocar **público + criativos** dos lojistas de **pouco resultado / custo muito elevado**.
- **[Comercial/forms] Sem novidade — segue travado.** Nenhuma venda nova atribuível à mídia, nenhum feedback novo de qualidade de lead. Forms de qualidade continua com adesão baixíssima; Gabriel + gestora pressionando, mas lojistas **resistentes** ("nunca têm tempo", apesar do form levar ~30s). Elo comercial→mídia segue como a maior lacuna de medição.
- **[Performance julho] Números parciais existem mas não consolidados aqui** — Gabriel traz os dados completos via **exports/Drive**. `[PREENCHER: CPL, conversas e gasto Meta de 14/07→31/07 a partir do export]`.

**23/07/2026 — GOOGLE: Search montado + medição nova no ar (dia de execução):**

- **[Google][build]** Campanhas **Institucional** (2 grupos) e **Aquisição** (6 grupos) montadas com keywords, lista de negativas compartilhada e RSAs. **Ainda pausadas.** Lance: Maximizar Cliques sem teto.
- **[Google][conversão] 🔑 Duas ações novas criadas do zero** — `Lead - Formulário Site` (**PRIMÁRIA**, ID `988689617` / rótulo `w2iFCMbErdUcENHpuNcD`) e `Contato - WhatsApp` (**secundária**, rótulo `kELSCMnErdUcENHpuNcD`). Nada reaproveitado da gestão antiga.
- **[Google][correção de registro]** Estava anotado que a primária do Google seria **WhatsApp** — **errado, corrigido por Gabriel**. No Google a primária é o **formulário do site** (intenção declarada); WhatsApp conta como observação.
- **[Google][GTM] Versão 169 publicada às 16:54** no container `GTM-KVLGK4D`. 8 itens adicionados (Conversion Linker, tag HTML de override do alert, 2 tags de conversão, 3 acionadores, 2 variáveis). **Nada existente foi alterado ou excluído.**
- **[Google][GTM][descoberta técnica]** O site **não tem página de obrigado** — o sucesso do formulário é um **`alert()` nativo**. Solução: sobrescrever `window.alert` e disparar `lead_form_ok` no dataLayer. Dispara só no sucesso real → sem over-count. Fonte versionada: `marketing/campanhas/gtm-import-conversoes-KVLGK4D.json`.
- **[Google][GTM][marco]** Feito **100% no GTM, sem a Revenda Mais** — o container já estava instalado no site. **A medição do Google deixou de depender da agência.**
- **[Google][validação]** GTM Preview: as duas tags dispararam corretamente (form via `lead_form_ok`, WhatsApp via clique em link `api.whatsapp.com`). No Ads, ambas em "Conversões pendentes" — normal, aguardando 1º tráfego real.
- **[Google][bloqueio → resolvido] robots.txt:** páginas de listagem marcadas como **"Destino não rastreável"** — `AdsBot-Google` bloqueado em `/multipla` e `/busca` por bloco próprio no `robots.txt` (bloqueio intencional). Revenda Mais **recusou liberar** (crawlers gerando requisições em massa de URLs facetadas falsas, +80% da infra) e ofereceu rota alias **`/m`**. **Testado e aprovado no mesmo dia:** alias real, 200 sem redirect, conteúdo idêntico, GTM/dataLayer presentes, não bloqueado (robots casa por prefixo). **URLs do BUILD trocadas para `/m`.**
- **[Google][descoberta importante]** As **páginas de carro específico nunca estiveram bloqueadas** — ficam em `/carros/Marca/Modelo/Versao/....html`, fora de `/multipla` e sem regra no robots. Só as **listagens** precisavam de troca. A preocupação inicial ("vou ter que trocar todos os links específicos") não se confirmou.
- **[Google][risco]** `/m` é rota não documentada e **não protegida no robots.txt**. Se for descoberta pelos crawlers e bloqueada pelo mesmo motivo, os anúncios quebram sem aviso. Vigiar "Destino não rastreável" no Ads.
- **[Google][decisão] PMax: pausar sem paralelo de 7 dias.** Ver ressalva na Seção 5.
- **[Google][adiado] Limpeza do legado** (tags UA mortas, Conversion Linker duplicado, ~50 ações de conversão velhas) — passada separada. ⚠️ Não apagar às cegas as tags `WhatsApp Loja - X`: é rastreio por lojista.

---

## 8. APRENDIZADOS E PRINCÍPIOS VALIDADOS

- **Consolidação de verba destrava o algoritmo.** 26 campanhas a ~R$10/dia = falha crônica de aprendizado e instabilidade. Poucos ad sets bem financiados é pré-requisito.
- **Medição antes de otimização.** As duas plataformas tinham sinal de conversão corrompido (Meta: pixel/dataset instável; Google: 194k junk). Limpar medição antes de otimizar lance é inegociável, mesmo causando queda visível no número reportado.
- **Volatilidade de inventário é restrição estrutural.** Com 300-500 vendas/mês, qualquer campanha ou LP presa a veículo específico quebra. Páginas filtradas são a solução durável.
- **Benchmark falso é pior que benchmark nenhum.** CPL alvo retido de propósito até existir dado real da estrutura auditada.
- **Rotação é operacional, não estrutural.** Pausar/ativar ad sets de lojista, nunca recriar.
- **Lookalike é prospecção, não o seed.** Reconhecimento usa geo broad sem lookalike de propósito: função é alcance frio, não retargeting.
- **Criativo direciona entrega (Andromeda).** Profundidade criativa importa mais que segmentação fina.
- **"Sair do aprendizado" é inatingível no formato lojista.** Com verba fina por lojista, nenhum ad set chega a 50 conversões/semana. Logo o critério formal da Meta não serve de gate — a régua prática é **não mexer grande antes de 10 dias** e otimizar por disparidade evidente de resultado (desativar estático/vídeo destoante), não por micro-ajuste de verba (que é fixa).

---

## 9. PENDÊNCIAS E HORIZONTE (backlog priorizado)

| Prioridade | Item | Estado |
|---|---|---|
| Corrigir agora | Resolver falha de backend da conta Meta (escalação + Plano B como teste de isolamento) | Aberto |
| ✅ Concluído (20/07) | Rebaixar junk conversion (194k) do Google para Secundária | FEITO. `lead_gen` da LP cadastrado. |
| ✅ Concluído (23/07) | **Conversão nova do Google** — form primária + WhatsApp secundária, GTM v169 | FEITO e validado no Preview. Ver Seção 3. |
| 🔴 **BLOQUEIA O LANÇAMENTO** | **WAF/CloudFront devolve 403 ao rastreador do Google** → anúncios REPROVADOS | Pedir à Revenda Mais isenção de rate limit p/ AdsBot-Google + `/robots.txt` sempre 200. Ver Seção 5. |
| ✅ Parcial (23/07) | Trocar `/multipla` por `/m` nas URLs de destino (resolve o bloqueio de `robots.txt`) | Feito. Necessário, mas **não suficiente** sozinho. |
| Contínuo | **Vigiar "Destino não rastreável" / "Destino que não funciona"** no Ads | Alerta permanente — a mitigação anti-crawler da Revenda Mais pode voltar a pegar o Google |
| Corrigir agora | **Ativar** Institucional → pausar PMax → ativar Aquisição | Campanhas montadas e pausadas desde 23/07 |
| Fazer | Confirmar "gravando conversões" no Ads após 1º tráfego real | Aguardando volume |
| Fazer | Espelhar os 2 eventos no **GA4** (`G-GFJJMBLKH4`) como eventos-chave | Trilha paralela, não bloqueia |
| Fazer (passada calma) | **Limpeza do legado**: tags UA mortas, Conversion Linker duplicado, ~50 ações de conversão velhas no Ads | ⚠️ NÃO apagar às cegas as tags `WhatsApp Loja - X` (rastreio por lojista) |
| Depois (com volume) | Migrar pra **Smart Bidding** + reavaliar modelo de **duas primárias com valores diferentes** | Só com conversão validada + volume |
| Investigar antes de mexer | Auditoria de conversão **do Meta** (CAPI/feed, via Revenda Mais) antes de habilitar lance automático lá | Pendente. *(Lado Google resolvido em 23/07.)* |
| Medir 7-14 dias | Estrutura consolidada de lojistas Meta saindo do aprendizado | Em curso (nenhum chega a 50 conv/sem; régua = 10+ dias p/ mudança grande) |
| Próximos ciclos | Testar troca de **público + criativos** nos ad sets de lojista de pouco resultado / custo elevado | Planejado, coletando dados por grupo |
| Corrigir agora | Lançar Search Google (Fase 1) | **Montado e pausado em 23/07.** Falta robots.txt + revisão final + ativar. Meta ~31/07/2026. |
| Fazer | Dedup de público dos ad sets de lojista (raio 15km, seed compartilhado) | Só após sair do aprendizado |
| Fazer | Transição/sunset dos vídeos Copa (23 vídeos) da campanha IG | Ativos até 19/07 |
| Onda 2 | Premium Google + grupo rotativo Isca de Modelo | Depois do Search estável |
| Contínuo | Coleta de inteligência competitiva na Ads Library, alimenta Fábrica de Copy | Protocolo estabelecido |
| Fase 2 | PMax Google (só após Search estável + tracking auditado, feed se houver) | Não antecipar |

---

## 10. FERRAMENTAS, IDS E ACESSOS

- **Meta:** Conta `529042313814912` · BM `439491940159846`. Casos de suporte `1002215365623050`, `1556667192628603`. Reclame Aqui aberto.
- **Google:** Google Ads + GA4 (10 anos de histórico, acesso obtido).
  - **ID de conversão do Google Ads:** `988689617`
  - Rótulos: `Lead - Formulário Site` = `w2iFCMbErdUcENHpuNcD` (primária) · `Contato - WhatsApp` = `kELSCMnErdUcENHpuNcD` (secundária)
  - **GTM:** container `GTM-KVLGK4D` (já instalado no site, acesso próprio — **não depende da Revenda Mais**). Versão atual: **169** (23/07/2026).
  - **GA4:** `G-GFJJMBLKH4` · **Pixel Meta no GTM:** `2558888570858508`
  - Setup de conversão versionado em `marketing/campanhas/gtm-import-conversoes-KVLGK4D.json` (importável em Admin → Importar contêiner).
- **Site / tracking:** Revenda Mais (parceiro técnico, administra a infra do site). ⚠️ Ainda necessária para **CAPI/Meta, feed e robots.txt** — mas **não mais para conversão do Google** (resolvido via GTM próprio em 23/07).
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
| 1.1 | 21/07/2026 | Backfill: atualização da crise Meta (Seção 4.1 — PIX/julho, Plano B não feito, Reclame Aqui não feito, risco agosto); entrada datada 20/07 na Seção 7 com NFs de mídia (Meta R$16.738,92 / Google R$8.988,81 jun), insight de subutilização do budget Google, e contradição 267×219 do relatório de junho. Criado `logs/changelog.md`. |
| 1.2 | 23/07/2026 | **Marco de medição do Google.** Seção 3: conversão nova (form primária / WhatsApp secundária), IDs e rótulos, método do `alert()`, fim da dependência da Revenda Mais no lado Google. Seção 5: Search montado e pausado, bloqueio do robots.txt, correção da conversão primária (era WhatsApp — errado), ressalva na regra dos 7 dias (não vale pra PMax órfã). Seção 7: entrada datada 23/07. Seção 9: backlog reordenado. Seção 10: IDs de conversão, GTM, GA4 e Pixel registrados. **+ robots.txt resolvido via rota alias `/m`** (testado); páginas de carro (`/carros/...`) nunca estiveram bloqueadas; risco de `/m` ser bloqueado no futuro registrado como alerta contínuo. |
