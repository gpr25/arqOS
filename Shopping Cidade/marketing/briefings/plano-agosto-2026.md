# PLANO DE AGOSTO/2026 — SHOPPING CIDADE · FRENTE B2B
### v1.0 · 2026-07-22 · Gabriel Pauletto
### Frente: **B2B (locação de loja)**. B2C não entra neste documento.

> **Agosto fecha a cadeia de captura e reconstrói o Google do zero.**
> **Setembro é o mês do R$15k.** Agosto não tem meta de gasto no Google — tem meta de estrutura.
> Nada que não sirva a essas duas coisas entra.

---

## 1. O QUE MUDOU NA PREMISSA (ler antes do resto)

**1.1 — Correção do histórico de verba do Google.** Até maio/2026 o split era **B2C R$15k /
B2B R$5k**. Foi **invertido no alinhamento de julho/2026** para **B2C R$5k / B2B R$15k**. A fonte de
verdade marcava o split antigo como `[SUPERADO]` sem registrar que ele foi o **regime real até
junho** — por isso a série mensal de exports "não fechava" com o número documentado. Corrigido em
`memory/estado-da-conta-shopping-cidade.md`.

**1.2 — Os R$15k do Google B2B nunca rodaram, por decisão.** O B2B estava com PMax (formato errado
para a frente) e todas as conversões estão contaminadas. Posição do Gabriel, registrada:
**melhor verba parada do que gasta sem objetivo ou retorno.** Não é abandono.

**1.3 — O Meta B2B está pela metade pelo mesmo motivo:** a verba foi reduzida para abrir espaço à
campanha nova, que não subiu por criativos atrasados e volume de configuração sem apoio.

**1.4 — O gargalo é TEMPO, não verba, acesso ou aprovação.** Todos os bloqueios de acesso foram
resolvidos (CVCRM 20/07, Admin da Página Meta, formulário criado e aprovado). O que falta é hora
de execução.

**1.5 — Regime de rotina vigente:** enquanto as estruturas não estiverem de pé, **segunda a sexta
são dias de execução**. O ritual "ter/qui protegidos" de `Geral/plano-operacional-e-calendario.md`
é o **estado-alvo**, não a prática atual. Por isso este plano é organizado **por semana com um
entregável dominante**, não por blocos — assim uma interrupção de terça não mata a semana.

**1.6 — `CA [Pesquisa] [Lojas]` PAUSADA em 2026-07-22.** Motivo: estava mandando tráfego para a LP
nova ainda meio configurada e sujando o dado dela com histórico de conversão lixo.

---

## 2. OBJETIVO E NÚMEROS

| # | Indicador | Tipo | Alvo agosto |
|---|---|---|---|
| ⭐ 1 | **Lead do instant form chegando etiquetado no CVCRM** | 🎯 binário | **funcionando até 14/08** |
| ⭐ 2 | **Onde os leads do formulário ATUAL estão caindo hoje** | 🎯 binário | **respondido até 07/08** |
| 3 | Gasto Meta B2B | 🎯 | ~R$ 10.000 |
| 4 | CPL Meta B2B (frente toda) | 🎯 | **≤ R$ 40** |
| 5 | Volume de leads Meta B2B | 🎯 | **≥ 180** |
| 6 | Estrutura Google B2B nova de pé e rodando | 🎯 binário | **até 31/08** |
| 7 | Gasto Google B2B | 👁️ **observação** | **sem alvo** — ver §5 |

**O nº 2 é o mais barato e o que protege todo o resto.** "O formulário atual não parece vinculado a
nada, mas o comercial diz que recebe" é a única frase do diagnóstico capaz de invalidar o trabalho
seguinte: se ele já entrega em algum lugar, a integração nova precisa saber onde, ou o CVCRM recebe
lead duplicado por dois caminhos concorrentes. Meia hora de investigação protege o mês.

**O nº 4 admite piora contra os R$33,41 de julho de propósito.** A campanha nova nasce fria e vai
puxar a média para cima. Cobrar R$33 em agosto seria cobrar que ela não suba.

---

## 3. A SÉRIE QUE SUSTENTA O PLANO (export jan–jul/2026)

### 3.1 Meta B2B — série limpa, campanha `[B2B]CA [Comercial] [Formulário]`

Só esta campanha é comparável entre meses (indicador `leadgen.other`, instant form). As demais
usavam `actions:lead` e `onsite_conversion.lead_grouped` — **regimes de otimização diferentes, não
se comparam** (regra de rigor nº 10).

| Mês | Gasto | Leads | CPL |
|---|---|---|---|
| Jan | R$ 1.084,74 | 28 | R$ 38,74 |
| Fev | R$ 349,56 | 11 | R$ 31,78 |
| Mar | R$ 1.564,84 | 33 | R$ 47,42 |
| Abr | R$ 207,70 | 2 | *(ruído — ignorar)* |
| Mai | R$ 4.519,25 | 77 | R$ 58,69 |
| Jun | R$ 7.712,66 | 161 | R$ 47,90 |
| **Jul 1–21** | **R$ 4.042,40** | **121** | **R$ 33,41** |

**Correção ao baseline documentado:** o "CPL ~R$58" era **só maio**, o pior mês da série. A leitura
correta é **58,69 → 47,90 → 33,41** em três meses consecutivos, com volume subindo junto. Melhora
sustentada, não evento único. `[RESSALVA]` **não é "melhor da história"** — jan/fev tiveram CPL
parecido com volume baixíssimo.

**Gasto Meta B2B total (todas as campanhas):** R$11.482 (jan) · R$9.532 (fev) · R$14.640 (mar) ·
R$13.333 (abr) · R$12.044 (mai) · R$7.713 (jun) · **~R$5.967 projetado (jul)**. As campanhas que
morreram queimavam R$6–10k/mês a CPL R$77–221 em mar/abr/mai. **A depuração matou gasto genuinamente
ruim.**

### 3.2 Google B2B — `CA [Pesquisa] [Lojas]`

| Mês | Custo | Cliques | CPC | Parcela de impr. | Perdida por **orçamento** |
|---|---|---|---|---|---|
| Jan | R$ 9.349,98 | 1.628 | R$ 5,74 | 36,65% | 23,30% |
| Fev | R$ 9.261,15 | 1.729 | R$ 5,36 | 33,28% | 20,27% |
| Mar | R$ 5.615,56 | 941 | R$ 5,97 | 31,70% | 29,97% |
| Abr | R$ 10.232,35 | 1.641 | R$ 6,24 | 41,98% | 27,19% |
| Mai | R$ 5.761,74 | 1.515 | R$ 3,80 | 34,71% | 20,33% |
| Jun | R$ 4.571,27 | 1.112 | R$ 4,11 | 35,46% | 16,94% |
| **Jul 1–21** | **R$ 1.746,16** | 469 | **R$ 3,72** | 32,44% | 18,79% |

🚫 **ESTA TABELA NÃO DIMENSIONA O SEARCH NOVO. Nem as métricas limpas.**

A campanha rodava em **"Maximizar o valor da conversão" treinado em Store Visits** — métrica **B2C**.
Pela regra de rigor nº 10 (mesmo regime de otimização):

- **Parcela de impressões (31–42%)** = parcela de uma campanha **lanceando por sinal errado**, medida
  **contra as keywords que estavam nela**. Não é a parcela do mercado. **O mercado nunca foi medido.**
- **CPC, cliques e CTR são confiáveis, mas mediram OUTRA COISA.** CPC de campanha que persegue visita
  à loja ≠ CPC de campanha que persegue lead B2B. **Confiável ≠ aplicável.**
- As conversões seguem contaminadas por Store Visits: **nenhum "custo/conversão" acima é CPL.**

🎯 **Não existe baseline histórico para dimensionar o Google B2B novo.** Os R$15k não estão
confirmados nem refutados por nada nesta conta. **Setembro mede do zero, sem âncora.** É disso que
decorre o desenho da §5 — orçamento como instrumento de medição, não como palpite.

`[ERRO REGISTRADO]` a v1 deste plano afirmou "R$15k não cabem num Search só", primeiro via parcela de
impressões, depois via CPC. **Ambas retiradas** após contestação do Gabriel em 22/07. Ver
`memory/decisoes.md`, entrada "Método / Rigor analítico".

---

## 4. META B2B — R$ 10.000

| Campanha | R$/dia | R$/mês | O que muda em agosto |
|---|---|---|---|
| `[B2B]CA [Comercial] [Formulário]` (CBO) | R$ 200 | **R$ 6.200** | **NADA.** Melhor CPL de 7 meses |
| **NOVA — ABO, formulário novo + CVCRM** | R$ 120 | **~R$ 2.400** | Sobe na semana 2 |
| Reserva | — | R$ 1.400 | Criativos de segmento que chegarem |

**Por que não subir o CBO.** Ele está a R$33,41 com ~R$192/dia, no melhor regime da série. Subir
verba num CBO nesse ponto é o jeito mais barato de perder o único ativo B2B que funciona — e a regra
travada da conta limita mexidas a ≤20-30% de qualquer forma. Os ~R$4k de folga foram reduzidos
**para financiar a campanha nova**; é para lá que voltam, não para dentro do CBO.

**A campanha nova (passo 6 da sequência travada — testes ABO):**
- **Formulário instantâneo:** já criado e aprovado. Falta **só concluir a integração nativa com o
  CVCRM** (feita de DENTRO do CVCRM: login Facebook + Admin da Página; não depende de subdomínio
  nem de token de API).
- **Copy:** "Você tem a melhor loja da rua errada" (aprovada 2026-07-20, nunca veiculada).
- **Criativo:** os **2-3 de fluxo** que já chegaram. **Não espera criativo de segmento.**
- **Uma variável por teste:** temperatura de público. **Checar sobreposição com o CBO antes de subir.**

⚠️ **O que está sendo testado em agosto é a CADEIA DE CAPTURA, não o criativo.** Segurar a campanha
esperando peça de segmento é trocar o teste que destrava tudo por um que não destrava nada. E
criativo de fluxo é justamente o argumento B2B mais forte que existe hoje.

---

## 5. GOOGLE B2B — R$ 15.000, DUAS FRENTES

### 5.1 Agosto tem estrutura, setembro tem gasto

Com a campanha antiga pausada em **22/07** e a estrutura nova subindo na **semana 4**, o Google B2B
vai gastar **~R$2.100 em agosto** contra R$15.000 nominais.

🔴 **Isso precisa estar escrito antes de alguém perguntar.** São **~R$13 mil não gastos em agosto**,
somados aos ~R$12,4k de julho. É **decisão deliberada e correta**, mas é a segunda maior linha de
budget do grupo parada por dois meses. Ver §8 (enquadramento de reserva de teste).

### 5.2 As duas frentes

> **Princípio: o orçamento é INSTRUMENTO DE MEDIÇÃO, não freio.** Como não existe baseline (§3.2),
> pré-dividir 8/7 seria chutar. O orçamento do Search entra **deliberadamente não restritivo**, para
> que a *parcela de impressões perdida por orçamento* caia a ~0 — e o que ele gastar seja **teto
> medido**, não suposto.

| Frente | Orçamento | Papel | Estratégia de lance | Criativo |
|---|---|---|---|---|
| **Search** — alta intenção + concorrência (outros shoppings e centros comerciais de Curitiba) | **R$400/dia (~R$12k)** — **NÃO restritivo** | Mede o teto real | **Maximizar Cliques com teto de CPC**; migra para Conversões só após **~30 conversões reais** | Só RSA (do Gabriel) |
| **Demand Gen** — donos de pequeno negócio/varejo + **retargeting da LP nova como grupo interno** | **R$100/dia de piso** | Absorve o que o Search não comer | Maximizar Cliques | **os 2-3 criativos de fluxo já existentes** |

**O freio real não é o orçamento — é o teto de CPC + negativação diária na semana 1.** Orçamento
como freio é o controle preguiçoso e ainda deixa a pergunta sem resposta no fim do mês.

🚩 **O teto de CPC sai do Keyword Planner sobre o keyword set NOVO** — não do histórico. O CPC
histórico (R$3,72–6,24) veio de campanha perseguindo Store Visits e **não serve de referência**
(§3.2). Recalibrar após ~2 semanas de lead real.

**Por que duas frentes e não cinco:** metade da configuração. **O recurso escasso é hora, não verba.**
O retargeting entra como **grupo dentro do Demand Gen**, não como campanha separada.

**Por que Maximizar Cliques na largada:** a conversão nova nasce com histórico **zero**. Smart
bidding sem sinal vai atrás do evento mais barato disponível — exatamente como esta conta terminou
com 100% das conversões em Store Visits. Só migra quando houver o que aprender.

**Por que YouTube saiu:** exige criativo próprio ou avaliar o canal — bloco de tempo que não há.
**Demand Gen já entrega YouTube, Discover e Gmail** com o estático que existe, e com controle total.

⚠️ **Risco do desenho:** orçamento solto + lance em cliques queima verba em termo lixo. Mitigação:
**negativação diária na semana 1** (não semanal) e o teto de CPC. Se a negativação não for feita,
este desenho é pior que o orçamento travado — a disciplina é a condição de validade.

### 5.3 ❌ PMax fica FORA de agosto — decisão com portão, não recusa

| | |
|---|---|
| **Decisão** | PMax **não entra** na reconstrução do B2B em agosto nem em setembro |
| **Por quê** | PMax aprende com volume de conversão. A conversão nova nasce zerada e o B2B de locação gera poucas dezenas de leads/mês. PMax sem sinal confiável busca o evento mais barato — **é literalmente assim que esta conta acumulou 100% de conversões em Store Visits**. Reconstruir a conta inteira e devolvê-la à mesma caixa preta que a quebrou anula o trabalho, e quando der errado não haverá como provar o porquê |
| **🚦 Portão de reabertura** | **Outubro/2026**, se: (a) a conversão nova acumular **≥30 leads reais** E (b) o Demand Gen tiver **30 dias** rodando |
| **Status** | Registrado com data. **Não é "não" — é "ainda não, e este é o gatilho".** |

### 5.4 O que agosto/setembro têm que RESPONDER

Não há hipótese a defender — há uma pergunta a responder, e ela nunca foi respondida nesta conta:

> **Quanto o Google B2B de locação consegue gastar por mês, com lance correto, keyword set
> deliberadamente amplo e conversão real?**

**Como se lê a resposta (fim de setembro):**

| Leitura | Significa | Ação |
|---|---|---|
| Search comeu ~R$12k, perda-por-orçamento > 0 | O teto é **maior** que R$12k | Sobe orçamento em outubro |
| Search comeu ~R$12k, perda-por-orçamento ~0 | **R$15k cabem** | Fecha o split 12/3 |
| Search parou em ~R$6k, perda-por-orçamento ~0 | **Teto medido** em ~R$6k | Diferença migra p/ Demand Gen e reserva de teste (§8) |
| Search parou baixo, perda-por-orçamento > 0 | Freio é o **teto de CPC**, não o mercado | Recalibra o teto de CPC, repete |

`[RESSALVA]` a leitura só vale se a **negativação diária da semana 1** tiver sido feita. Sem ela,
gasto alto não é teto de mercado — é desperdício, e não responde nada.

---

## 6. CALENDÁRIO DE AGOSTO — um entregável dominante por semana

| Semana | Dias | 🎯 Entregável dominante | Também acontece |
|---|---|---|---|
| **1** | 03–07/08 | ⭐ **Investigar onde o formulário atual entrega** + **concluir integração Meta ↔ CVCRM** | Fechar julho: exports, NF (gasto × 1,138), relatório |
| **2** | 10–14/08 | ⭐ **Subir a campanha nova do Meta (ABO)** + terminar a configuração da **LP nova** | Apresentar julho à gestão · 🔔 **BRIEFING NATAL B2B — sexta 14/08** |
| **3** | 17–21/08 | **Google: reconfigurar conversões** — rebaixar Store Visits, criar a conversão da LP nova, importar no Ads | Montar Search e Demand Gen |
| **4** | 24–28/08 | **Subir Google (Search + Demand Gen) na segunda 25/08** e rodar 7 dias | Transbordo do que atrasou |
| **5** | 31/08 | 🎯 **Checkpoint da trava** — tudo de pé antes de setembro começar | Fechar decisões de setembro |

**Rampa do Google (25–31/08) — semana de validação, não de medição:** Search R$200/dia + Demand Gen
R$100/dia = **R$300/dia** → ~R$2.100 no mês. Esses 7 dias servem para **confirmar que a conversão
dispara e que a negativação está limpando** — não para medir teto.
**Setembro abre o Search em R$400/dia (não restritivo)** e aí começa a medição de verdade (§5.4).

**Ordem de dependência (não inverter):**
`form atual investigado` → `integração CVCRM` → `campanha Meta nova` · `LP nova configurada` →
`conversão Google nova` → `campanhas Google novas`

---

## 7. 🔔 BRIEFING DO NATAL B2B — sexta 14/08

| Item | Definição |
|---|---|
| **Campanha** | **"Loja pronta pro Natal"** — locação B2B |
| **Ângulo** | Urgência com data real: **quem quer vender no Natal assina em outubro**. Não é desconto e não é isca financeira — mantém a preferência de falar com o lojista já estabelecido |
| **Duração** | **45 dias** — o ciclo B2B é de semanas a meses (registrado na conta); 15 ou 30 dias não deixam o lead maturar até a assinatura |
| **Subida** | **15/10/2026** |
| 🔔 **Briefing (D0)** | **14/08/2026** (15/08 cai num sábado — antecipa) |
| **Formatos a pedir** | 4 estáticos por segmento · 2 vídeos curtos (fluxo + fachada/tubo de ônibus) · 1 carrossel de 5 cards para Demand Gen |
| **Verba** | Dentro dos R$10k Meta + R$15k Google. **Não pede verba extra** |

**Por que B2B não faz Black Friday:** locação de loja não tem Black Friday. A data forte do ano no
B2B é **outubro**, não novembro — em novembro já não dá tempo de montar loja, contratar e comprar
estoque para vender no Natal. Enquanto o B2C corre para a Black Friday, o B2B tem que estar dizendo
*"sua loja pode estar aberta no Natal, mas a decisão é agora"*.

🔴 **Este briefing entra numa fila que já está ~21 dias atrasada.** Disparar em **14/08 mesmo
assim**, e **escalar à gerência no mesmo dia** — não em setembro, quando não tiver chegado. O
mandato de cobrança já foi concedido pela gestão; esta é a primeira aplicação real dele.

---

## 8. VERBA PARADA = RESERVA DE TESTE (decisão de 2026-07-22)

Toda verba "sobrando" ou "parada" passa a ser tratada como **reserva de teste** — orçamento de
experimentação (testes novos, orçamentos diários maiores, frentes novas), **não como buraco**.

**Comunicação:** o Gabriel reporta à gestão **por e-mail (Shopping, Autoshopping e Triunfo)
assim que a validação começar**, para que compartilhem do conhecimento e do problema.

**Por que importa:** muda o enquadramento de "R$13 mil não gastos" para "R$13 mil de orçamento de
experimentação sob decisão técnica". É o Gabriel definindo a moldura antes de alguém perguntar,
e cumpre a diretriz de abrir pelo resultado e pelo pedido, não pelo diagnóstico.

---

## 9. RISCOS DO MÊS

| Risco | Gatilho | O que fazer |
|---|---|---|
| 🔴 **O tempo não aparece** | qualquer semana perdida para incêndio | A ordem de dependência da §6 é a ordem de sacrifício. O que cai, cai **do fim para o começo** — nunca pular a integração para adiantar o Google |
| 🔴 **O formulário atual já entrega em algum lugar** | achado da semana 1 | Mapear **antes** de ligar a integração nova. Dois caminhos = lead duplicado no CVCRM |
| 🔴 **Verba parada vira cobrança** | reunião de agosto | Enquadramento de reserva de teste (§8) levado **antes** de perguntarem |
| 🟡 Criativos de Natal não chegam para 15/10 | fila atrasada | Campanha sobe com criativo de fluxo + RSA. **A data não escorrega** |
| 🟡 Campanha nova canibaliza o CBO | sobreposição de público | Checar sobreposição **antes** de subir |
| 🟡 Search trava em ~R$6k | fim de agosto | Não é falha: é teto de demanda. Diferença vai para a reserva de teste |

---

## 10. CHECKLIST DE 31/08

- [ ] Destino atual dos leads do formulário antigo **mapeado e registrado**
- [ ] Integração Meta instant form → CVCRM **funcionando, com ≥1 lead real etiquetado**
- [ ] Campanha nova do Meta (ABO) **no ar desde a semana 2**
- [ ] Meta B2B fechou o mês em **~R$10.000**, CPL ≤ R$40, ≥180 leads
- [ ] LP nova **totalmente configurada**
- [ ] Conversão nova do Google **criada, validada e importada como primária**; Store Visits rebaixada
- [ ] Search + Demand Gen **no ar desde 25/08**
- [ ] **Briefing do Natal B2B disparado em 14/08** e escalado à gerência no mesmo dia
- [ ] Enquadramento de reserva de teste comunicado à gestão

---

## 11. O QUE NÃO FAZER EM AGOSTO

- ❌ Mexer no CBO do Meta
- ❌ Subir qualquer campanha do Google antes da conversão nova estar validada
- ❌ Esperar criativo de segmento para subir a campanha nova do Meta
- ❌ **Reabrir PMax no B2B** (portão em outubro, §5.3)
- ❌ Montar YouTube como campanha separada
- ❌ Religar `CA [Pesquisa] [Lojas]` "só para não deixar a verba parada"
- ❌ Tratar CPL do Meta e custo/conversão do Google como a mesma régua
