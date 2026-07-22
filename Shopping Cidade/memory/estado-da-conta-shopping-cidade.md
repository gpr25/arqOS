# ESTADO DA CONTA — SHOPPING CIDADE CURITIBA (Grupo Gadens)
### Fonte de verdade: estado atual, decisões travadas, histórico e pendências
**Gestor:** Gabriel Pauletto · **Criado:** 2026-07-16 · **Versão:** v2 (atualizado 2026-07-16)

---

## COMO USAR ESTE ARQUIVO

Este é o registro de **estado, decisão e histórico** da conta. Não é metodologia. O "como analisar" mora nos arquivos de metodologia do projeto (ver seção 11); este arquivo diz **o que é verdade hoje, o que foi decidido e travado, o que está pendente**, e mantém um log datado.

**Regra de atualização:** toda mudança significativa entra em duas partes: (a) atualiza a seção de estado correspondente e (b) registra uma linha no CHANGELOG (seção 12) com data. Não sobrescrever histórico: o que muda vira linha nova no changelog, o estado antigo migra para "superado" quando relevante.

**Para consulta automática:** este arquivo só é lido sozinho se estiver anexado ao conhecimento/instruções do projeto. Quem anexa é o Gabriel.

**Legenda de status:**
`[TRAVADO]` decidido, não reabrir · `[EM EXECUÇÃO]` rodando · `[PENDENTE]` aguarda ação · `[URGENTE]` risco ativo · `[CONFLITO]` dado divergente não resolvido · `[RESSALVA]` usar com ressalva explícita · `[SUPERADO]` histórico, não vale mais

---

## 1. NEGÓCIO E AS DUAS FRENTES

Shopping center popular do Grupo Gadens, Curitiba, bairro Hauer. Condomínio de lojistas multissegmento (moda, calçados, bijuterias, suplementos e outros). Posicionamento: acessibilidade com valor percebido, **nunca "barateiro"**. Receita de duas origens: locação de espaço (B2B, principal) e fluxo de consumidores (B2C, indireta).

**Diferenciais do ativo:** avenida de alto movimento, tubo de ônibus em frente, marketing coletivo que gera fluxo para todas as lojas.

**Público B2C:** classes C, D, E. Apelo de pertencimento, oportunidade e experiência de consumo acessível.

**Regra central das duas frentes:** nunca misturar B2C e B2B na mesma análise sem deixar explícito. CPL de B2B e custo por visita/engajamento de B2C não se comparam. Confirmar a frente antes de qualquer análise.

| Dimensão | B2C | B2B |
|---|---|---|
| Objetivo | Fluxo físico + engajamento IG | Leads qualificados para locação |
| Métrica-norte | Alcance (gestão, jun/2026) | CPL |
| Baseline | Sem meta numérica; alcance não é conversão | CPL ~R$58 `[RESSALVA]`; ~140-150 leads/mês |
| Ciclo | Imediato | Longo (semanas a meses) |
| Budget Meta | ~R$20.000/mês | ~R$10.000/mês |
| Budget Google | ~R$5.000/mês (PMax) | ~R$15.000/mês (Search) |

**Lead ideal B2B:** lojista já estabelecido (operação ativa, bom giro) querendo expandir ou trocar de ponto. **Não** quem começa do zero. **Sem food service.** Perfil e direção de mensagem detalhados em `direcao-estrategica-b2b-meta-ads.md`.

**Raio em uso:** 40km. `[PENDENTE]` confirmar se é o ideal para fluxo físico (Kinder Park usou 10-15km).

**Tensão de prioridade (não resolver sozinho, trazer à gestão em decisão de budget/foco):** por verba, a frente principal é B2C; por criticidade de resultado, é B2B.

---

## 2. RESSALVAS PERMANENTES (sempre ativas)

1. `[RESSALVA]` **Rastreamento não auditado.** Sem CAPI no Meta, EMQ não verificado, GTM não revisado. Todo número de conversão é estimativa direcional. Ressalva explícita sempre que uma decisão depender de dado de conversão.
2. `[RESSALVA]` **Gap de CRM.** O comercial não liga lead a contrato assinado. CPL é a única métrica B2B disponível, mas **não é indicador de qualidade**.
3. `[RESSALVA]` **Budget Google.** Split **vigente desde o alinhamento de julho/2026: B2C ~R$5.000/mês, B2B ~R$15.000/mês.**

   ✅ **CORREÇÃO 2026-07-22 — o split antigo NÃO era erro de fonte, era o regime real.** Até
   **maio/2026** a verba era **B2C Google R$15.000 / B2B Google R$5.000** (Meta sempre B2C R$20k /
   B2B R$10k). A inversão foi **decisão do alinhamento de julho/2026**. O registro anterior tratava
   os valores invertidos como "fonte antiga errada, `[SUPERADO]`" — isso fazia a série mensal de
   exports não fechar com o número documentado (PMax B2C gastando R$12–19k/mês e Search B2B R$4,5–10k
   até junho estão **corretos para o regime da época**). Ao ler export de jan–jun, usar a régua
   antiga; de julho em diante, a nova.

   `[PENDENTE]` **Os R$15k do B2B nunca rodaram**, por decisão: o B2B estava com **PMax** (formato
   errado para a frente) e todas as conversões contaminadas. Posição do Gabriel: **melhor verba
   parada do que gasta sem objetivo ou retorno.** Não é abandono nem verba fictícia. Plano de
   reconstrução em `../marketing/briefings/plano-agosto-2026.md`.

   A ressalva que permanece não é de valor, é de rastreamento: com a conversão B2B ainda quebrada
   (seção 6), o dado de retorno do Google B2B não é confiável mesmo com o budget correto.
4. `[PENDENTE]` **AIV (Ações de Intenção de Visita).** Framework de métrica de fluxo B2C aceito, mas engavetado. Reabrir em meses futuros, não é o objetivo de trabalho atual. Cinema e eventos são a fonte natural de sinais de intenção de visita quando reabrir.

---

## 3. ESTADO ATUAL — META B2C

**Estrutura antiga** `[SUPERADO]` — ✅ **COMPLETAMENTE DESATIVADA (confirmado 2026-07-21)**. Era: uma campanha com tudo dentro, conjuntos duplicados, 48-50 criativos por conjunto, pulverização que matava o aprendizado por criativo, turbinamento orgânico avulso sem critério. **Única exceção remanescente: os turbinar**, que seguem fora de controle (ver abaixo).

**Estrutura aprovada (jun/2026)** `[TRAVADO]` `[EM EXECUÇÃO]`, três campanhas permanentes:

**Alinhamento 06/07** (valores exatos em execução):

| Campanha | R$/dia | R$/mês | % nominal | Conjuntos | Objetivo / função |
|---|---|---|---|---|---|
| Engajamento (entretenimento) | R$266 | R$7.980 | 40% | 2 conjuntos | Visita ao perfil; crescimento de perfil. Guarda-chuva: eventos, dark posts, cinema |
| Ofertas Semanais | R$180 | R$5.400 | 30% | 2 conjuntos | Carrossel, objetivo **Tráfego**, destino = URL do perfil IG |
| Reconhecimento/Institucional | R$50 | R$1.500 | 10% | n/d | Gera público quente para retargeting |
| Turbinar (entrega do orgânico) | n/d | R$2.200 | 10% | n/d | Alerta em R$1.800 |
| Reserva (testes) | n/d | R$2.200 | 10% | n/d | Testes |

- Fixo das 3 campanhas = R$496/dia = **R$14.880/mês**. Com turbinar + reserva (R$4.400), total = **R$19.280/mês** (nominal ~R$20k).
- Os `%` são **rótulos nominais de planejamento, não frações exatas** do total: 10% aparece tanto no institucional (R$1.500) quanto em turbinar/reserva (R$2.200). Para execução vale o **valor em R$**, não o %.
- `[SUPERADO]` Registros anteriores de valores redondos (Institucional R$2.000, Engajamento R$8.000, Ofertas R$6.000, fixo R$534/dia) e o briefing que citava Institucional R$4.000/20%. Substituídos por este alinhamento 06/07.
- Todas iniciam em **ABO**. Conjuntos são permanentes; só os anúncios rotacionam.

**Protocolo do carrossel de ofertas:** subir os novos carrosséis (até 8 cards: capa + ofertas + encerramento) **antes** de desativar os da semana anterior, para evitar gaps de entrega durante a revisão do Meta. Social media entrega os criativos de oferta toda quarta.

**Cadência real (atualizado 2026-07-21)** `[EM EXECUÇÃO]`: a subida **roda toda quarta sem falha**; as **desativações de sexta e segunda não estão sendo executadas**. Funciona mesmo assim porque o volume caiu para **2 a 4 carrosséis** apenas. Cadência efetiva = **refresh na quarta**. A cadência quarta/sexta/segunda fica como ideal, não como prática vigente.

### ✅ NÚMEROS REAIS B2C 01/07 a 21/07/2026 (export Meta, 21 dias)

| Campanha | Resultado | Custo/resultado | Gasto |
|---|---|---|---|
| `[B2C][Engajamento][IG]` (desde 03/07) | 22.394 visitas ao perfil | R$ 0,21 | R$ 4.770,19 |
| `CA [TRÁFEGO REDES SOCIAIS]` (até 07/07) | 8.869 visitas ao perfil | R$ 0,23 | R$ 2.037,63 |
| `[B2C][Reconhecimento][Institucional]` | 286.426 de alcance | R$ 1,26/mil | R$ 360,71 |
| **Turbinar (posts impulsionados)** | vários | — | **R$ 1.654,31** |
| **Total B2C** | — | — | **R$ 12.323,71** |

**Total da conta no período (B2B + B2C): R$ 16.366,11.**

✅ **CORREÇÃO 2026-07-21 — o turbinar NÃO está estourando a verba.** Número correto validado pelo
Gabriel no gerenciador: **13 posts, R$1.592,34** (01 a 22/07). A soma anterior de R$1.654,31/14
posts estava errada — incluía uma versão **arquivada** e duplicada de "Férias com criatividade"
(R$66,76) que não aparece na visão do gerenciador.

**Contra a cota:** R$1.592,34 no **dia 22 de 31** = **72% da verba mensal em 71% do mês**.
Está **dentro do ritmo**, não acima. A projeção anterior de R$2.442/mês e a afirmação de "estouro
confirmado" ficam **`[SUPERADO]`** — eram extrapolação linear sobre uma base inflada.

`[RESSALVA DE MÉTODO]` o problema relatado do turbinar é de **controle e processo** (quantidade de
impulsionamentos e quem decide), **não de estouro de verba**. Não confundir os dois na conversa com
a gestão — o dado não sustenta argumento de estouro.

**B2C no total projeta ~R$18.190/mês**, dentro do envelope planejado (~R$19.280). O problema do
turbinar é de **composição e controle**, não de estouro do total — a verba do turbinar está saindo
de algum outro lugar do B2C.

🔴 **Turbinar fora de controle** `[URGENTE]` (2026-07-21): houve **mais turbinar do que o acordado** no período, estourando o previsto. Para não ultrapassar a verba máxima, **os valores das campanhas foram alterados** — logo a tabela do Alinhamento 06/07 abaixo **não reflete mais os valores exatos em execução**. `[PREENCHER]` valores vigentes (virão no export de campanhas). Escalado em **2026-07-20** em reunião com a **gerente e o coordenador**; encaminhamento: atuação mais incisiva. Turbinar está **"em reconstrução"**.

**Restrição estrutural resolvida** `[TRAVADO]`: carrossel é incompatível com a otimização "visita ao perfil" do objetivo Engajamento (exige URL de destino por card). Por isso Ofertas usa **Tráfego**, não Engajamento. Não recomendar otimização que a estrutura atual não permite (carrosséis de oferta são imagem pura, sem link de saída).

**Princípios de execução B2C:** ABO primeiro, CBO só o que amadurecer. Públicos amplos, localização por presença real, exclusões B2B nas campanhas B2C. Nunca recriar campanha ou conjunto: só desativar, **nunca excluir** (preserva histórico). Estrutura nova roda em paralelo à antiga antes de qualquer desativação. Desativação definitiva exige aprovação da gestão.

---

## 4. ESTADO ATUAL — META B2B

**Campanha CBO existente** `[EM EXECUÇÃO]`: mantida, **não clonar nem migrar**.

**Sequência de reestruturação acordada** `[TRAVADO]` (ordem exata):
1. Exportar o estado "antes".
2. Pausar criativos fracos.
3. Reduzir para 3-5 criativos por conjunto.
4. Eliminar os dois conjuntos mais fracos numa **única ação** (CJ 03 LAL 1% Forms e CJ 02 LAL 3% Commercial).
5. Redução pequena de budget (≤20-30%).
6. Após 7 dias de estabilidade, iniciar campanhas de teste em **ABO**.

**Baseline histórico:** ~140-150 leads/mês, CPL estável ~R$58 `[RESSALVA]`. Top performers: **CJ 0** (público Video View 10s) e **CJ 01** (Local Business Interests).

### 📊 SÉRIE MENSAL META B2B (export jan–jul/2026) — série LIMPA

Só a campanha `[B2B]CA [Comercial] [Formulário]` (indicador `leadgen.other`, instant form) é
comparável entre meses. As demais usavam `actions:lead` e `onsite_conversion.lead_grouped` —
**regimes de otimização diferentes, não se comparam.**

| Mês | Gasto | Leads | CPL |
|---|---|---|---|
| Jan | R$ 1.084,74 | 28 | R$ 38,74 |
| Fev | R$ 349,56 | 11 | R$ 31,78 |
| Mar | R$ 1.564,84 | 33 | R$ 47,42 |
| Abr | R$ 207,70 | 2 | *(ruído — ignorar)* |
| Mai | R$ 4.519,25 | 77 | R$ 58,69 |
| Jun | R$ 7.712,66 | 161 | R$ 47,90 |
| **Jul 1–21** | **R$ 4.042,40** | **121** | **R$ 33,41** |

✅ **CORREÇÃO 2026-07-22 ao baseline documentado:** o "CPL estável ~R$58" era **só maio**, o pior
mês da série. A leitura correta é **58,69 → 47,90 → 33,41** em três meses consecutivos, com volume
subindo junto. **Melhora sustentada, não evento único.**
`[RESSALVA]` **não é "melhor da história"** — jan/fev tiveram CPL parecido com volume baixíssimo.

**Gasto Meta B2B total (todas as campanhas):** R$11.482 (jan) · R$9.532 (fev) · R$14.640 (mar) ·
R$13.333 (abr) · R$12.044 (mai) · R$7.713 (jun) · **~R$5.967 projetado (jul)**. As campanhas que
morreram na depuração (`[COMERCIAL][CADASTROS]`, `Lógica Condicional`) queimavam R$6–10k/mês a
**CPL R$77–221** em mar/abr/mai. **A depuração matou gasto genuinamente ruim** — e agora tem número.

### ✅ NÚMEROS REAIS 01/07 a 21/07/2026 (export Meta, 21 dias)

| Métrica | Valor |
|---|---|
| **Leads (leadgen)** | **121** |
| **CPL** | **R$ 33,41** |
| Gasto | R$ 4.042,40 |
| Alcance / Impressões | 65.744 / 199.036 |
| Frequência | 3,03 |
| Cliques no link únicos | 1.439 (CTR 0,72% · CPC R$2,81 · CPM R$20,31) |

🎯 **A depuração por pausas funcionou, e agora tem número.** Contra o baseline histórico
(~140-150 leads/mês a **CPL ~R$58**): CPL caiu **~42%** e o volume projeta **~178 leads/mês**
(121 em 21 dias). **Melhorou nas duas pontas simultaneamente** — confirma numericamente o
"leads cresceram, custo diminuiu" que estava registrado só de memória. `[RESSALVA]` segue valendo
que CPL mede custo, não qualidade — o gap de validação com o comercial continua aberto.

`[RESSALVA DE MÉTODO]` **"Melhor que o baseline registrado", não "melhor da história".** Não existe
série histórica mensal nestes arquivos — só o baseline (~140-150 leads/mês a CPL ~R$58) e este
export. Qualquer superlativo histórico é extrapolação e não deve ir para apresentação.

✅ **Verba B2B reduzida de propósito (esclarecido 2026-07-21):** os ~R$4.000/mês de diferença entre
o gasto (~R$5.967 projetado) e o budget (R$10.000) **não são sobra esquecida** — a verba foi
**reduzida para abrir espaço à campanha nova** (instant form + CVCRM). A campanha nova **não
andou** porque dependia dos acessos e criativos; por isso Gabriel está acelerando a integração.
**Consequência:** a verba volta a ser consumida assim que a campanha nova subir. Não tratar como
oportunidade ociosa nem cobrar como desperdício.

**Execução real da reestruturação** `[EM EXECUÇÃO]` (registrado no backfill 2026-07-21, período 06-21→07-21): não houve evento único de reestruturação. A depuração foi feita por **pausas quase diárias** de conjuntos e anúncios ao longo do período, até restar **apenas o que performa a baixo custo**. Compatível com os passos 2 e 3 da sequência travada. **Resultado direcional: leads cresceram, custo caiu.** `[RESSALVA]` sem número auditado e **sem datas por ação** — decisão explícita do Gabriel de **não estimar retroativamente**. **Novas campanhas (passo 6, testes ABO) NÃO lançadas: dependem da integração do CVCRM.**

**Criativos B2B** `[PENDENTE]`: briefing pedido com **criativos específicos por segmento B2B**. Em produção com **~21 dias de atraso** (prazo original ≈2026-06-30). **Escalado à gerência; Gabriel sem mais ação — só aguardar.** Os **primeiros já começaram a chegar** (2026-07-21). Plano: rodar os **testes do novo formulário** com os primeiros que chegarem + **1-2 criativos já validados**. A copy aprovada ("Você tem a melhor loja da rua errada") entra quando houver criativo + integração.

**Budget Meta B2B:** ~R$10.000/mês **mantido** em todo o período 06-21→07-21, sem corte nem realocação (confirmado no backfill 2026-07-21).

**Estrutura futura de teste:** ABO só para campanhas novas, uma variável por teste (temperatura de público), checar sobreposição antes de lançar.

**Infra:** B2B minimamente desenvolvido. Nova LP, formulários e captura de lead sendo construídos do zero.

**Qualidade de lead (Instant Forms):** aceitável, ~8-9 de 10 dentro do perfil ideal. Preocupação com qualidade espera dado real do comercial. Aquisição é escopo do Gabriel, não performance do comercial.

**Preferência de mensagem de LP** `[RESSALVA]` (rebaixado de `[TRAVADO]`/proibido para preferência em 2026-07-17, decisão do Gabriel no onboarding): a hipótese é que "primeiro mês grátis, sem fiador" atrai perfil **oposto** ao ICP ideal, então **por ora evitamos** e alinhamos a mensagem ao lojista estabelecido. **Não é regra travada:** se um teste mostrar que a isca financeira traz lojista **qualificado**, reabrimos e usamos. Reavaliar com dado real do comercial (lead→contrato).

`[URGENTE]` **A LP B2B atual em produção segue como pendência de substituição** — não mais por "violação de regra", e sim pelo conjunto de defeitos do teardown de 2026-07-17 (`../marketing/briefings/teardown-lp-b2b-atual.md`): formulário **não qualifica** (falta "já tem loja em operação?"), captcha amador "1+1=?", e o posicionamento atual ("Primeiro aluguel gratuito, sem fiador" 2x + "Grandes marcas começaram aqui") está **desalinhado da preferência atual** de falar com o lojista estabelecido. LP v2 será gerada no Stitch após o onboarding (briefing em `../marketing/briefings/briefing-lp-b2b-locacao.md`).

---

## 5. ESTADO ATUAL — GOOGLE B2C

- **PMax** rodando para o objetivo alcance. `[RESSALVA]` GTM (GTM-M3J6T7) e Meta Pixel instalados em shoppingcidade.net, nenhum auditado.
- **Search paralelo proposto** `[PENDENTE]`: `Shopping Cidade | B2C | Search | Marca-Cinema-Eventos-Local`, quatro grupos: Marca, Cinema, Eventos, Como Chegar. Status: aguarda confirmação antes do build.
- `[URGENTE]` **Site com injeção de spam** (links de gambling/apostas no footer), consistente com WordPress comprometido. Risco de violação de política do Google Ads (destino malicioso). Escalar a quem gerencia o WordPress do Grupo Gadens.
- `[PENDENTE]` **Aba Cinema com problema não resolvido.** Corrigir antes de usar cinema como sinal de conversão.
- Budget: **~R$5.000/mês** (confirmado 2026-07-16, ver seção 2).

---

## 6. ESTADO ATUAL — GOOGLE B2B

🔴 **PAUSADA EM 2026-07-22** — `CA [Pesquisa] [Lojas]` foi pausada pelo Gabriel. Motivo: o destino
**já é a LP nova** (ver abaixo), que ainda não está totalmente configurada; cada dia rodando jogava
tráfego e conversão lixo na linha de base dela. Reconstrução da conta em
`../marketing/briefings/plano-agosto-2026.md`. **Não religar "só para não deixar a verba parada".**

✅ **HIPÓTESE DA "LP ANTIGA" `[SUPERADA]` em 2026-07-22.** O destino das campanhas Google B2B **é a
LP nova** — confirmado pelo Gabriel. O risco composto de destino registrado em 21/07 (WordPress com
spam, form que não qualifica, posicionamento invertido) **não se aplica ao Google**. O que falta na
LP nova é **tempo de configuração**, não decisão.

### 📊 SÉRIE MENSAL GOOGLE B2B (export jan–jul/2026) — `CA [Pesquisa] [Lojas]`

| Mês | Custo | Cliques | CPC | Parcela de impr. | Perdida por **orçamento** |
|---|---|---|---|---|---|
| Jan | R$ 9.349,98 | 1.628 | R$ 5,74 | 36,65% | 23,30% |
| Fev | R$ 9.261,15 | 1.729 | R$ 5,36 | 33,28% | 20,27% |
| Mar | R$ 5.615,56 | 941 | R$ 5,97 | 31,70% | 29,97% |
| Abr | R$ 10.232,35 | 1.641 | R$ 6,24 | 41,98% | 27,19% |
| Mai | R$ 5.761,74 | 1.515 | R$ 3,80 | 34,71% | 20,33% |
| Jun | R$ 4.571,27 | 1.112 | R$ 4,11 | 35,46% | 16,94% |
| **Jul 1–21** | **R$ 1.746,16** | 469 | **R$ 3,72** | 32,44% | 18,79% |

⚠️ **LEITURA — o que este dado prova e o que NÃO prova** (corrigido 2026-07-22 após contestação
do Gabriel; a versão anterior afirmava teto de mercado e estava errada):

🚫 **NENHUMA linha desta tabela serve para dimensionar o Search NOVO — nem as métricas limpas.**

**Por quê (regra de rigor nº 10 — mesmo regime de otimização):** esta campanha rodava em
**"Maximizar o valor da conversão" treinado em Store Visits**, métrica **B2C**. Logo:

- A **parcela de impressões** (31–42%) é a parcela de uma campanha **lanceando por sinal errado**,
  não a parcela do mercado. E se mede **contra as keywords que estavam na campanha** — denominador
  estreito e arbitrário. **O mercado total nunca foi medido.**
- **CPC, cliques e CTR são confiáveis, mas mediram OUTRA COISA.** CPC de campanha que persegue
  visita à loja ≠ CPC de campanha que persegue lead B2B: keywords diferentes, intenção diferente,
  sinal de lance diferente, leilão diferente. **Confiável não é o mesmo que aplicável.**

🎯 **Conclusão:** **não existe baseline histórico para dimensionar o Google B2B novo.** Os R$15k não
estão confirmados nem refutados por nada nesta conta. **Setembro mede do zero, sem âncora.**

**Desenho decorrente:** orçamento deliberadamente **NÃO restritivo** (R$400/dia); freio em **teto de
CPC + negativação diária** em vez de no orçamento — com a perda-por-orçamento em ~0, o que ele
gastar é **teto medido**. **O teto de CPC sai do Keyword Planner sobre o keyword set novo** (não do
histórico, que tem o mesmo vício) e é recalibrado após ~2 semanas de lead real.

`[ERRO REGISTRADO 2026-07-22]` a v1 do plano usou a parcela de impressões, e depois o CPC, para
afirmar que "R$15k não cabem num Search só". **As duas afirmações foram retiradas.** Ver
`decisoes.md`, entrada "Método / Rigor analítico".

`[RESSALVA]` até junho a régua era R$5k/mês (ver seção 2) — o Search já rodava **acima** do teto
nominal dele. E as conversões da tabela seguem contaminadas por Store Visits: **nenhum
"custo/conversão" acima é CPL.**

- **Search "CA [Pesquisa] [Lojas]"** `[PAUSADA 2026-07-22]`: era o único ativo B2B real. Sinais de demanda saudáveis (CTR ~7,8%).
- `[URGENTE]` **Falha crítica de rastreamento:** todas as "conversões" dos últimos meses foram **100% Store Visits** (métrica B2C), não leads.
- **Ação de conversão correta** ("Formulário Otimizado Comercial"): **zero conversões desde a criação.** A tag nunca disparou, provavelmente porque o componente de formulário do RD Station é um elemento fechado que o GTM não captura no modo padrão.
- **Sequência travada** `[TRAVADO]`:
  1. Desbloquear acesso ao RD Station.
  2. Corrigir a tag (preferência: **integração nativa RD Station → Google Ads**, não gambiarra via GTM).
  3. Tornar o Formulário a **única conversão primária**.
  4. Acumular 7-14 dias de dado real de lead.
  5. Só então reestruturar.
- **Contingência:** mudar para Maximizar Cliques com teto de CPC **só se** o acesso ao RD Station atrasar semanas (trade-off: reseta o aprendizado).
### ✅ NÚMEROS REAIS GOOGLE B2B 01/07 a 21/07 (export)

| Campanha | Custo | Impressões | Cliques | CPC | Conversões |
|---|---|---|---|---|---|
| `CA [Pesquisa] [Lojas]` (única com gasto) | **R$ 1.746,16** | 6.812 | 469 | R$ 3,72 | 19 |

✅ **Subgasto EXPLICADO (esclarecido 2026-07-21).** R$1.746,16 em 21 dias (~R$2.578/mês contra
R$15.000) e o **PMax B2C pausado com gasto zero** são resultado de **pausa deliberada dos gastos
incorretos**, enquanto as campanhas corretas ainda não subiram. Não é abandono nem verba fictícia.

💰 **Há verba real e espaço de teste no Google, nas DUAS frentes (B2B e B2C).** Isso contrasta com
o Meta, onde a operação está apertada contra o teto. **Restrição no Meta, liberdade no Google** —
usar essa assimetria ao planejar.
`[RESSALVA]` as 19 "conversões" seguem contaminadas por Store Visits (seção acima) — o custo/conv.
aparente de ~R$92 **não é CPL** e não deve ser usado como tal.

- 🔴 `[URGENTE 2026-07-21]` **Risco composto de destino:** hipótese do Gabriel é que a **LP B2B antiga era usada só pelo Google** e, portanto, **segue recebendo o tráfego pago enquanto a campanha roda**. Se confirmado, os ~R$15k/mês do Google B2B alimentam uma página que (a) recruta o **perfil oposto ao ICP** ("aluguel grátis, sem fiador"), (b) tem formulário que **não qualifica** + captcha amador, (c) roda no **WordPress com injeção de spam de apostas** (risco de política do Google Ads) e (d) tem a **tag de conversão que nunca disparou**. Quatro defeitos empilhados na maior linha de budget B2B. `[PREENCHER]` **confirmar o destino real das campanhas Google B2B — é a primeira coisa a checar no dia dedicado a Google.**
- **Prazo assumido — 2026-07-23 (quinta):** único dia de agenda travado só para Google (estrutura de Autoshopping + Shopping B2B + B2C). Escopo realista: corrigir primeiro o mais urgente; resto segue em paralelo. `[RESSALVA]` capacidade real limitada — rotina atual é apagar incêndio o dia todo, com pouca margem para planejar.
- `[PENDENTE]` **Status 2026-07-21 (backfill): NENHUMA alteração no período 06-21→07-21.** Gabriel não tocou no Google B2B ("nem encostei"), por sobrecarga de demandas nos últimos ~15 dias (≈06/07→21/07). Logo a falha de rastreamento, a tag sem disparo e o desbloqueio do RD Station **seguem exatamente como estavam** — o custo diário continua rodando sobre sinal errado (ver aprendizado da seção 12).
- **Naming convention Google Ads:** `[Cliente | Frente | Tipo | Tema]`.
- Budget: **~R$15.000/mês** (confirmado 2026-07-16, ver seção 2).

---

## 7. RD STATION E GAP DE CRM

- Leads Meta B2B **chegam no RD Station** e completam o fluxo de automação "Comercial", mas **não chegam ao time de vendas**.
- O gap está entre o RD Station e um CRM downstream. `[RESOLVIDO 2026-07-17]` **O CRM do comercial é o CVCRM (Construtor de Vendas)** — CRM imobiliário. O RD Station não o alimenta bem; a integração RD→CVCRM é o elo furado.
- 🔓 `[RESOLVIDO 2026-07-20]` **Acesso ao CVCRM concedido ao Gabriel** (fim do dia 20/07), após pedido formal. Destrava a execução das integrações — prevista para iniciar **2026-07-21**.
- **Status dos 4 acessos (2026-07-21):** ✅ CVCRM · ✅ **Admin da Página Meta** (Gabriel já é) · ⏳ subdomínio + token de API **em andamento** · 🔧 código de origem dos leads **Gabriel configura por conta própria**.
- **Ordem de teste de captura** `[TRAVADO 2026-07-21]`: **1º formulário instantâneo do Meta**, **2º LP**, comparando qual converte melhor. O instant form vem antes por não depender de deploy nem de credenciais de API.
- **CVCRM tem API nativa de cadastro de lead para site próprio** (`POST https://{subdominio}.cvcrm.com.br/api/v1/...`, auth e-mail+token, campos nome/email/telefone/origem, 200 req/min). Isso permite a nova LP B2B enviar lead direto ao CVCRM **sem RD Station e sem Zapier**. Plano de deploy da LP: Netlify (estático) + Netlify Function (guarda o token) → API CVCRM. Tudo no plano gratuito. `[PENDENTE]` Gabriel buscar com o comercial: subdomínio CVCRM, token+e-mail de API, código de origem para os leads da LP.

---

## 8. RASTREAMENTO CONSOLIDADO (duas frentes)

- Pixel e tag instalados em shoppingcidade.net, **não auditados**. Sem CAPI. EMQ não verificado. GTM-M3J6T7 não revisado.
- Site WordPress do Grupo Gadens com injeção de spam ativa (ver seção 5).
- **Nenhum número de conversão é confiável hoje.** Ressalva explícita sempre que uma decisão depender de dado de conversão.
- `[PENDENTE]` **A auditar:** GTM, CAPI, EMQ e todos os eventos de conversão nas duas plataformas.

---

## 9. REPORTING E IDENTIDADE

- Relatório de performance jun/2026 (mLabs) analisado; **PPTX de 6 slides** produzido para reunião de gestão com a identidade Shopping Cidade.
- **Marca:** `#E01C4C` (rosa/magenta, primária), `#093652` (petróleo), `#157DBF` (azul). Tipografia **Poppins**. Tom quente e direto.
- **Princípio de apresentação à gestão:** mostrar os resultados que a gestão quer ver, na **voz de apresentador do Gabriel** (não defensiva, não voz de mentor).
- **Contexto permanente obrigatório em todo report:** comparar com a gestão anterior sempre parecerá pior, porque métricas de vaidade infladas estão sendo trocadas por métricas reais.

---

## 10. EVENTOS DE TERCEIROS

**Kinder Park:** card de proposta produzido em PNG e PPTX, três níveis de investimento (R$1.000 / R$1.500 / R$2.000 por mês), campanha de 30 dias, raio 10-15km.

**Impostos Meta Ads (vigente jan/2026):** PIS/Cofins 9,25% + ISS 2,9% = **12,15%** efetivo.

**Parceria de branded content com influenciador:** guia passo a passo já fornecido. Nota: os labels da interface do Meta mudam com frequência.

---

## 11. DECISÕES TRAVADAS (não reabrir)

- Objetivo B2C = **alcance** (gestão, jun/2026).
- Estrutura Meta B2C de **3 campanhas permanentes** aprovada.
- Ofertas Semanais usa objetivo **Tráfego** (não Engajamento).
- **30 ofertas simultâneas** = diretriz de gestão. Papel do Gabriel: **coletar dado de performance** para a gestão decidir, não decidir.
- **Alocação top-level de budget** = aprovada pela gestão.
- Meta B2B: **não clonar/migrar** o CBO; eliminar conjuntos fracos numa **única ação**; reduções de budget ≤20-30%.
- Nunca recriar campanha ou conjunto; só desativar, **nunca excluir**.
- Filosofia de trabalho: **"melhor feito que perfeito".** Decisões travadas não se reabrem.

---

## 12. APRENDIZADOS E PRINCÍPIOS

- Qualidade de lead no Meta B2B Instant Forms é **aceitável**; preocupação com qualidade espera dado real do comercial.
- **Nunca replicar o mesmo criativo em vários conjuntos** (cria competição interna de leilão).
- Renomear conjunto **não afeta** o histórico no Meta, mas o Gabriel prefere não renomear conjunto rodando (preserva referência histórica).
- **Restart de aprendizado em CBO é caro:** eliminar conjuntos fracos numa única ação, não escalonado; reduções de budget ≤20-30%.
- **Carrossel + otimização "visita ao perfil" do Engajamento são incompatíveis;** usar Tráfego.
- **Comparar com a gestão anterior sempre mostra pior** (vaidade vs. real); esse contexto é obrigatório no report.
- **Rastreamento tem que ser corrigido antes de escalar budget.** Triplicar o budget de Google B2B **aumenta** a urgência, não diminui: a campanha segue otimizando para o sinal errado a um custo diário maior.
- **Alinhamento de mensagem da LP importa para a qualidade do lead B2B** (ver alerta "primeiro mês grátis, sem fiador").

---

## 13. PENDÊNCIAS E NO HORIZONTE

| Item | Status | Dono / onde resolver |
|---|---|---|
| Auditar rastreamento (GTM, CAPI, EMQ, eventos) nas duas plataformas | `[PENDENTE]` | Gabriel + quem mantém GTM |
| Resolver gap RD Station → CRM | `[EM EXECUÇÃO]` CRM = CVCRM; **acesso concedido 2026-07-20**; integrações a executar a partir de 21/07 | Gabriel |
| Criativos B2B por segmento (briefing) | `[PENDENTE]` ~21 dias de atraso, escalado à gerência, primeiros chegando | Gestão / produção |
| Corrigir tag de conversão Google B2B (integração nativa RD Station preferida) | `[PENDENTE]` | Gabriel + acesso RD Station |
| Confirmar split de budget Google B2C vs B2B | `[RESOLVIDO 2026-07-16]` B2C R$5k / B2B R$15k | Gabriel |
| Construir infra B2B do zero: LP, forms, captura | `[PENDENTE]` | Gabriel + design/dev |
| Introduzir Google Ads no B2B (Search) e confirmar Search B2C paralelo antes de keywords/negativas/briefings | `[PENDENTE]` | Gabriel |
| Feedback do comercial ligando lead a contrato assinado (validação crítica) | `[PENDENTE]` | Comercial |
| Levar AIV à gestão quando o objetivo alcance amadurecer | `[PENDENTE]` | Gabriel / gestão |
| Documentar performance das 30 ofertas simultâneas para decisão da gestão | `[PENDENTE]` só operação, sem análise até 2026-07-21; entra depois das estruturas graves | Gabriel coleta |
| Reconstruir controle do turbinar B2C (estouro de verba) | `[URGENTE]` escalado 2026-07-20 à gerente + coordenador; "em reconstrução" | Gabriel + gestão |
| Recuperar valores vigentes das campanhas B2C (Alinhamento 06/07 desatualizado) | `[PENDENTE]` via export de campanhas | Gabriel |
| Corrigir aba Cinema antes de usar como sinal de conversão | `[PENDENTE]` | Gabriel + dev |
| Confirmar se raio de 40km é ideal para fluxo físico | `[PENDENTE]` | Gabriel |
| Confirmar quem mantém WordPress e GTM do Grupo Gadens | `[PENDENTE]` | Gabriel |
| Escalar remoção do spam de apostas no site | `[URGENTE]` | Quem mantém WordPress |
| Substituir LP B2B atual — está no ar violando a regra travada (recruta lead errado) | `[URGENTE]` | Gabriel (v2 no Stitch pós-onboarding) |

---

## 14. FERRAMENTAS E RECURSOS

- **Plataformas:** Meta Ads Manager, Google Ads, RD Station (automação de lead), mLabs (social/reporting), GTM (GTM-M3J6T7 em shoppingcidade.net).
- **Propriedades:** shoppingcidade.net, lojas.shoppingcidade.net (LP hospedada no RD Station), Instagram Shopping Cidade.
- **Apoio operacional:** social media (define o que turbinar, entrega os criativos de oferta toda quarta), design, copy, comercial, analytics. Único usuário/gestor: Gabriel.
- **Separação de workstreams (escopo estrito):** estratégia e análise (conversa principal) · produção de copy (Fábrica de Copy) · inteligência de mercado (conversa dedicada).
- **Arquivos de metodologia no projeto (o "como", não duplicar aqui):**
  - `metodologia-meta-ads.md`
  - `metodologia-google-ads.md`
  - `metodologia-tiktok-ads.md`
  - `metodologia-copywriting.md`
  - `direcao-estrategica-b2b-meta-ads.md`

---

## 15. CHANGELOG

> Formato: `AAAA-MM-DD` · frente/plataforma · o que mudou. Registrar toda mudança significativa aqui.

- **2026-06 (mês)** · B2C · Gestão define **alcance** como métrica-norte do B2C.
- **2026-06 (mês)** · Meta B2C · Estrutura de **3 campanhas permanentes** aprovada e posta em execução (Institucional R$2.000, Engajamento IG R$8.000, Ofertas R$6.000, turbinar R$2.000, reserva R$2.000).
- **2026-06 (mês)** · Meta B2C · Resolvido: Ofertas usa objetivo **Tráfego** por incompatibilidade do carrossel com a otimização "visita ao perfil".
- **2026-06 (mês)** · Meta B2B · Criada a direção estratégica de criativos B2B (`direcao-estrategica-b2b-meta-ads.md`). Definida a sequência de reestruturação do CBO.
- **2026-06 (mês)** · Reporting · Relatório mLabs de junho analisado; PPTX de 6 slides produzido para a gestão.
- **2026-06 (mês)** · Google B2B · Identificada a falha de rastreamento (conversões 100% Store Visits; tag do "Formulário Otimizado Comercial" nunca disparou). Sequência de correção travada.
- **2026-06 (mês)** · Terceiros · Proposta Kinder Park (3 níveis) e impostos Meta 12,15% registrados.
- **2026-07-16** · Geral · **Criação da v1 deste arquivo de estado.** Consolidado a partir da memória e do briefing do projeto. Conflitos de budget de Google e de valor do Institucional registrados como itens abertos, não resolvidos silenciosamente.
- **2026-07-16** · Google · **Split de budget confirmado** pelo Gabriel: B2C ~R$5.000/mês (PMax), B2B ~R$15.000/mês (Search). Conflito da ressalva 3 resolvido; fonte antiga com valores invertidos vira `[SUPERADO]`.
- **2026-07-17** · B2B/LP · **Teardown da LP B2B atual** (`marketing/briefings/teardown-lp-b2b-atual.md`): a página em produção viola a regra travada (lidera com "aluguel grátis, sem fiador"; prova social "começaram aqui"), formulário não qualifica, captcha amador. Marcada como pendência `[URGENTE]`. Briefing da LP v2 criado (`marketing/briefings/briefing-lp-b2b-locacao.md`); v2 será gerada no Stitch após o onboarding. Integração Stitch (design→código) configurada via MCP. Arquivo de fluxo do período cheio (01/05–15/07) arquivado em `marketing/relatorios/`.
- **2026-07-16** · Meta B2C · Registrado o **Alinhamento 06/07** com valores exatos em execução: Engajamento/entretenimento R$266/dia (2 conjuntos), Ofertas R$180/dia (2 conjuntos), Institucional R$50/dia, turbinar R$2.200/mês, reserva R$2.200/mês. Fixo R$496/dia, total R$19.280/mês. Substitui os valores redondos anteriores (fixo R$534/dia) e o briefing de Institucional R$4.000/20%, ambos `[SUPERADO]`. Nota: os `%` são rótulos nominais, não frações exatas.

---

- **2026-07-17** · Onboarding/B2B · **"Primeiro mês grátis / sem fiador" rebaixado de `[TRAVADO]`/proibido para preferência atual reavaliável** (decisão do Gabriel no onboarding ArqOS). Segue evitado por ora (hipótese: atrai perfil oposto ao ICP), mas destrava se um teste mostrar que traz lojista qualificado. LP atual permanece `[URGENTE]` de substituir, agora pelo conjunto de defeitos (form não qualifica, captcha amador, posicionamento desalinhado), não por "violação de regra".
- **2026-07-17** · Onboarding · **Instalação do ArqOS (Perfil 4).** Criadas as pastas núcleo (core, company, products, playbooks, roadmap, logs) preservando branding/marketing/sales/operations/memory. Fluxo público travado pela gestão: ~200 mil/mês · ~6 mil/dia · ~10 mil fim de semana (gancho de atenção; comercial contextualiza). Baseline medido da amostra 01/05–15/07 (uso interno): ~170 mil/mês · ~5,6 mil/dia · sábado ~8,7 mil (máx 12,4 mil). Spam de apostas no site confirmado ao vivo em produção.
- **2026-07-20** · B2B/Copy · Copy do anúncio de lead (formulário instantâneo Meta) pronta em `marketing/campanhas/copy-anuncio-b2b-meta-forms.md`. Hook âncora aprovado: "Você tem a melhor loja da rua errada." Botão `Saiba mais`.
- **2026-07-21** · B2C · **Backfill de mídia paga (06-21→07-21).** ✅ **Estrutura antiga completamente desativada** (pendência resolvida), exceto os turbinar. Protocolo do carrossel: subida **roda toda quarta sem falha**, mas **desativações de sexta/segunda não são executadas** — funciona porque o volume caiu para 2-4 carrosséis; cadência real = refresh na quarta. 🔴 **Turbinar fora de controle**: mais turbinar que o acordado, obrigando a **alterar os valores das campanhas** para não estourar a verba máxima — **a tabela do Alinhamento 06/07 não é mais exata** `[PREENCHER]` valores vigentes via export. Escalado em 2026-07-20 à gerente e ao coordenador; turbinar "em reconstrução". **30 ofertas simultâneas: só operação, sem análise** — Gabriel prioriza terminar as estruturas graves antes de analisar.
- **2026-07-21** · B2B · **Backfill de mídia paga (06-21→07-21).** Meta B2B: campanha segue rodando só com conjuntos/anúncios de baixo custo; depuração feita por **pausas quase diárias**, não por evento único. Direcional: **leads cresceram, custo caiu** `[RESSALVA]` sem número auditado, sem datas por ação — **decisão de não estimar retroativamente**. Novas campanhas (testes ABO) **não lançadas**, dependem da integração CVCRM. Criativos B2B **aguardando produção da gestão** (recobrados), logo a copy "melhor loja da rua errada" **não está no ar**. Google B2B: **zero alteração no período** (sobrecarga de demandas nos ~15 dias anteriores) — rastreamento quebrado e acesso RD Station intocados. **MARCO ZERO:** a partir de 2026-07-21, toda mudança B2B registrada com data e valor. Budget Meta B2B **manteve** ~R$10k. Criativos por segmento **~21 dias atrasados** (escalado à gerência, primeiros chegando). Comercial **sem retorno no período** — decisão política registrada em `decisoes.md`: construir tudo antes de cobrar. Números de julho vêm nos exports.
- **2026-07-20** · B2B/Integração · 🔓 **Acesso ao CVCRM concedido** (fim do dia), após pedido formal. Destrava integração → campanha → LP. Execução prevista para 21/07. `[PREENCHER]` confirmar os outros 3 acessos.
- **2026-07-22** · B2B/Planejamento · **PLANO DE AGOSTO CRIADO** (`../marketing/briefings/plano-agosto-2026.md`). Agosto = **fechar a cadeia de captura e reconstruir o Google**; setembro = mês do R$15k. Decisões novas em `decisoes.md`: (a) Google B2B em **2 frentes** — Search R$8k + Demand Gen R$7k, YouTube fora; (b) **PMax fora com portão de outubro** (≥30 leads reais + 30 dias de Demand Gen) — divergência registrada, motivo é o histórico de Store Visits da própria conta; (c) `CA [Pesquisa] [Lojas]` **PAUSADA em 22/07**; (d) **verba parada = reserva de teste** (vale p/ Shopping, Autoshopping e Triunfo); (e) B2B **não faz Black Friday** — campanha **"Loja pronta pro Natal"**, 45 dias, sobe **15/10**, 🔔 **briefing em 14/08**. Correções de fonte: split antigo do Google era **regime real até maio** (não erro de fonte); baseline "CPL ~R$58" era **só maio**; hipótese da "LP antiga" no Google **`[SUPERADA]`** — o destino já é a LP nova. **Gargalo declarado: TEMPO**, não verba/acesso/aprovação (todos os acessos resolvidos, formulário criado e aprovado).
- **2026-07-20** · B2B/Integração · Arquitetura de entrega dos leads das duas fontes ao **CVCRM** definida (RD Station fora do fluxo B2B). Meta Instant Form usa **integração NATIVA do CVCRM** — a conexão parte de DENTRO do CVCRM (login no Facebook, Admin da Página), **não** da tela do Meta (onde o CVCRM não aparece; isso é normal). LP → Netlify Function → API CVCRM. Rastreamento: desmarcar "Eventos de CRM" (dataset "Pixel Morá - gas rocket" 185598782144030 é de outra conta); manter só o Pixel de Shopping Cidade Curitiba (234559080256415); evento de Lead do instant form é nativo. Alerta: "New Google Sheets Integration" ativa num formulário — checar/remover. **BLOQUEADO** aguardando liberação de acesso/usuário. Guia operacional completo: `operations/integracao-leads-b2b-cvcrm.md`.

---

*Fim do arquivo. Manter a seção 15 sempre atualizada. Estado sem registro no changelog é estado que se perde.*
