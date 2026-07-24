# ANÁLISE E VALIDAÇÃO — GOOGLE SEARCH · AUTOSHOPPING LINHA VERDE

> **Contexto:** Gabriel puxou o freio antes de executar (23/07), pedindo validação da estrutura
> contra os planos existentes + inteligência de mercado real. "Pensar 2×, executar 1×."
> Este documento revisa o [BUILD-search-google-onda1-2026-07.md](BUILD-search-google-onda1-2026-07.md)
> e responde os 4 pontos levantados. **Onde ele diverge do BUILD, este documento vale.**

---

## 0. CORREÇÃO DO MEU ERRO (antes de tudo)

O BUILD colocou **7 grupos a R$608/dia de largada**. Isso **contradiz a rampa aprovada** por Gabriel
no [[plano-macro-ago26-fev27]] §3.3 e [[plano-agosto-2026]] §5, que manda subir em **rampa gateada**:

| Janela | Diário | Grupos que abrem | Gate p/ subir |
|---|---|---|---|
| Lançamento (jul) | **~R$350** | 3 grupos | — |
| Ago sem 1–2 | R$400→480 | +2 | CPC Genérico ≤ R$1,50 **e** zero termo lixo no top-20 de gasto |
| Ago sem 3–4 | R$580→700 | +2 | mesmo gate |
| Set | R$730 | + Premium (onda 2) | mesmo gate |

**Rampa furada vira desperdício em escala.** O BUILD será refeito nesse formato. Gabriel estava certo.

---

## 1. OS 4 PONTOS — RESPOSTA CUIDADOSA

### Ponto D (o mais importante) — meta no nível da CONTA, não da campanha

**Gabriel tem razão. Eu concedo.** O detalhamento honesto:

- No **lançamento usamos Maximizar Cliques**, que **ignora conversão para o lance**. Então, no início,
  nem meta-de-conta nem meta-de-campanha afetam "aprendizado" — porque não há aprendizado por
  conversão ainda.
- O aprendizado que Gabriel se preocupa (com razão) só entra quando migrarmos para **Smart Bidding
  (Maximizar Conversões / tCPA)** — adiado nos planos até rastreamento validado + volume (set/out).
- Para essa fase, o **jeito durável e correto é configurar a conversão certa no nível da CONTA**
  (meta primária = o lead real; rebaixar o lixo), e as campanhas herdam. Minha proposta anterior
  (override por campanha) era **um contorno para uma conta bagunçada** — e como vamos **arrumar** a
  conta, o contorno não se justifica. **Meta no nível da conta, feita certa, é o caminho.**
- **O nó real (honesto):** para setar a meta primária da conta corretamente, precisamos de **pelo
  menos UMA ação de conversão de lead limpa e verificada**. Hoje as ações de site aparecem como
  **"Configuração incorreta"** (print de 23/07). Então a tarefa-mãe do "fazer certo" é:
  **estabelecer uma conversão de lead confiável e marcá-la como primária da conta.** É isso que
  também destrava o Smart Bidding depois. Não é bloqueio do lançamento em Maximizar Cliques — mas é
  **a coisa mais importante a acertar**, e é onde o esforço deve ir (não em remendo por campanha).

### Ponto B — configurar a conta primeiro, depois criar as campanhas

**Concordo**, com **uma trava vinda dos próprios planos**: a **regra de transição** —
*estrutura nova roda 7 dias em paralelo à antiga antes de qualquer desativação; desativação
definitiva exige aprovação da gestão* ([[estado-da-conta-autoshopping]] §5).

Consequência prática (diferente do onboarding greenfield da Triunfo, porque aqui há conta legada com
gasto ativo):

1. **"Configurar a conta" = ajustes de nível de conta + conversão certa.** Isso vem primeiro, porque
   é o que as campanhas novas herdam.
2. **NÃO deletar as 45 campanhas legadas agora.** A conta é um cemitério do gestor anterior
   (PMax_Institucional, vários `[L3FT]`, `[Display]`…). Só a **PMax_Institucional gasta**. O resto
   provavelmente já está parado. A limpeza definitiva é **depois** do paralelo de 7 dias + aval da
   gestão.
3. A **PMax** morre logo após a Institucional entrar no ar (cobre a defesa de marca) — planos dizem
   "morre em 23/07"; recomendo confirmar a Institucional servindo por 2–3 dias antes de pausar, pra
   não deixar a busca de marca descoberta.

### Ponto A — criar do zero / não reaproveitar a meta personalizada antiga

**Concordo.** A "Conversões do Site" (3 ações) é herança do gestor anterior e está no meio da
bagunça. Não reaproveitar às cegas. **Mas** "criar do zero" a conversão significa reimplementar
rastreamento (GTM/site) — que é justamente o ponto historicamente travado com a **Revenda Mais**.
Então o caminho enxuto é:

- **Testar antes de reconstruir:** a ação `GAds - Site - WhatsApp` já registrou **437 conversões** —
  ela **fira** de algum lugar. Fazer um teste ponta a ponta (clicar no WhatsApp numa página de carro
  → ver se conta) resolve se é **salvável** (promover a primária) ou **lixo** (reconstruir limpa).
- Não confiar cegamente **nem** reconstruir cegamente. **Um teste decide.**

### Ponto C — grupo Financiamento

**Concordo em cortar.** Argumentos que pesam a favor do corte:
- **Não existe página de financiamento no site** → destino cairia no estoque genérico → baixa
  relevância/Quality Score → clique caro.
- O diferencial do Autoshopping **não é financiamento** (é estoque + presença + 23 lojas). Buscas de
  financiamento tendem a trazer público mais restrito a crédito.
- A intenção de financiamento é melhor capturada como **mensagem** (callout/título "financiamento
  facilitado", "entrada facilitada", "sua troca vale mais") do que como grupo próprio.

**➡️ Corta Financiamento. A intenção vira asset/RSA.** E o slot livre vai para um grupo de **retorno
muito maior** — ver §3.

---

## 2. INTELIGÊNCIA DE MERCADO (pesquisa 23/07)

### O que o mercado faz

- **Marketplaces dominam a busca genérica.** ~50% das transações de usados no Brasil são P2P via
  portais (Webmotors, OLX, Mercado Livre, iCarros, Kavak). Orçamento gigante; **donos dos termos
  genéricos nacionais** ("carros usados", "seminovos"). Competir de igual pra igual em cabeça de
  cauda genérica é queimar dinheiro.
- **A jogada padrão dos EUA (VLA + feed de inventário + PMax) NÃO existe no Brasil** — Google Vehicle
  Ads indisponível. Todo esse playbook está **fora da mesa**. O que sobra como alavanca durável é
  **Search bem estruturado + cauda longa de modelo/local + marca**.
- Concorrentes locais/condomínios (Auto Shopping Curitiba, Rotta 8, Roggia…) rodam Search + PMax com
  sofisticação variável.

### Onde fazer igual (obrigatório — table stakes)
- **Defesa de marca** (não ceder "autoshopping linha verde" a marketplace/concorrente).
- **Geo local** casada com a praça real de venda (Curitiba+RMC, presença).
- **Grupos por categoria** (SUV/Sedan/Hatch/Picape).

### Onde estão as BRECHAS (o retorno de verdade)
1. **🎯 Cauda longa MODELO + LOCAL** — "onix usado curitiba", "hilux seminova curitiba". Os
   marketplaces licitam esses termos de forma **ampla e nacional**, com landing genérica. **Um
   condomínio físico em Curitiba, com o carro real e uma página filtrada por marca/modelo, ganha
   Quality Score** → clique mais barato e posição melhor. **É a maior brecha explorável.**
2. **O ângulo "23 lojas · ~1.000 carros · um endereço · presencial hoje"** — diferencial físico que
   nenhum marketplace online (ou Kavak em SP) consegue reivindicar. Marketplace vende "online/entrega";
   Autoshopping vende "veja 1.000 carros num lugar hoje". **Público diferente, leilão menos disputado.**
3. **Conquesting de concorrente local** — barato, alta intenção, marketplace não defende nome de
   revenda local.
4. **Páginas filtradas** (`/multipla/carroceria/…`, `/marca/…`) — a maioria das revendas locais joga
   pra home; **vocês têm filtro real** = vantagem de relevância. (Ironia: o legado da conta caía em
   home; corrigir isso **é** a vantagem.)

### Onde temos capacidade de execução
- **Verba Google com folga** (assimetria da conta: apertado no Meta, folga no Google).
- **Operador único (Gabriel)** → estrutura tem que ser **enxuta e sustentável** (favorece poucas
  campanhas bem organizadas, não sprawl).
- **Filtros de site já existem** (carroceria, combustível, **marca/modelo confirmado 23/07**).
- **Não** temos capacidade de VLA/feed (não existe no BR) — **não perseguir**.

### Maior potencial de retorno (priorização)
1. **Defesa de marca** (mais barato, protege demanda existente).
2. **Modelo + local** (maior intenção, brecha explorável).
3. **Categorias** (volume).
4. *Menor:* cabeça genérica nacional (dominada por marketplace, cara, pouca relevância) — licitar
   **apertado e local**, nunca amplo.

---

## 3. ESTRUTURA REVISADA

### Demanda de modelo (Fenauto, 1º sem/2026) — insumo do grupo novo
Usados mais vendidos BR: **Gol, Onix, HB20** (top 3, todos hatch), **Corolla** (sedan líder),
**Strada** (picape líder). ⚠️ O ranking nacional inclui muito modelo de ticket baixo (Uno, Palio,
Celta, Ka, Fiesta) que **não casa com o ticket ~R$80k do condomínio** — por isso a lista de modelos
tem que sair do **estoque real**, não do ranking nacional. (É o item que peço a Gabriel — §5.)

### Campanhas

**`[Search] Institucional`** — ~R$800/mês (desde o dia 1; habilita matar a PMax)
- Grupo Marca (defesa) · Grupo Conquesting (concorrentes/marketplaces locais)

**`[Search] Aquisição`** — motor, em rampa gateada
- **6 grupos de categoria** (Financiamento REMOVIDO): Genérico Local · SUV · Sedan · Hatch · Picape ·
  Eletrificados/BYD
- **🆕 Grupo(s) MODELO** (recomendação forte, entra assim que confirmarmos URL de marca + lista de
  estoque): ad groups por modelo-topo (ex.: Onix, HB20, Creta, Compass, Corolla, Hilux, Tracker,
  Strada…), keyword "modelo + usado/seminovo + curitiba", **destino = página filtrada da marca/modelo**.
  É o grupo de maior retorno potencial.

**`[Search] Premium`** — ~R$700 — **onda 2 (setembro)**, junto do Isca de Modelo. Não antecipar.

### Rampa revisada (substitui a lista de grupos do plano, mantendo os gates)
| Janela | Abre | Obs |
|---|---|---|
| Lançamento | **Genérico Local · SUV · Hatch** | Hatch entra no lugar de Financiamento — Gol/Onix/HB20 são hatch = maior volume de busca |
| +1 | + Sedan · **Modelo** (se URL confirmada) | Modelo é prioridade de subida |
| +2 | + Picape | |
| +3 | + Eletrificados/BYD | |
| Set | + Premium | onda 2 |

*Gate a cada subida: CPC Genérico ≤ R$1,50 e nenhum termo lixo no top-20 de gasto (mantido dos planos).*

---

## 4. BENCHMARKS — RESSALVA HONESTA (regra da conta)

- **Não existe CPL/CPC público confiável para seminovos em Curitiba.** Não vou inventar âncora —
  *benchmark falso é pior que benchmark nenhum* (princípio já validado na conta).
- Referências de **estrutura** (separar por intenção, grupos apertados por modelo, geo casada com
  praça, tracking pré-Smart-Bidding) transferem e foram usadas aqui. Os **custos** dos artigos são
  contexto EUA — **não transferem**.
- **A meta CPC Genérico ≤ R$1,50** é alvo interno de trabalho do próprio Gabriel (plano de agosto),
  não benchmark de mercado.
- **O benchmark real é o dado da própria conta depois de rodar.** Ler pela série interna, não por
  âncora externa.

---

## 5. O QUE PRECISO DE VOCÊ (antes de refazer o BUILD e executar)

1. **URL de marca/modelo:** no site, clique numa marca (ex.: Chevrolet) e depois num modelo (ex.:
   Onix) e me cole as **2 URLs**. Preciso travar o padrão (provável `/multipla/marca/...`) pra o
   grupo Modelo ter landing forte.
2. **Modelos reais de estoque:** quais **~8–12 modelos** o condomínio tem mais / que **casam com o
   ticket** (não os Uno/Celta do ranking nacional). Ou me diga onde ver os mais anunciados no site.
3. **Teste da conversão:** a ação `GAds - Site - WhatsApp` (437 conv) **fira de verdade**? Faça o
   teste ponta a ponta (clicar no WhatsApp numa página de carro → ver se registra) ou confirme com a
   Revenda Mais. Isso decide se **promovemos ela a primária da conta** (rápido) ou se **reconstruímos
   limpa** (depende de GTM/site).

**Decisão de direção a confirmar:** (a) sequência conta-primeiro com regra dos 7 dias; (b) cortar
Financiamento; (c) adicionar grupo Modelo. Minha recomendação é sim para os três.

---

## 6. FONTES
- Usados mais vendidos BR 1º sem/2026 (Fenauto) — [NewsMotor](https://newsmotor.com.br/10-carros-usados-mais-vendidos-do-brasil-no-1o-semestre-de-2026-veja-o-ranking-completo/), [Grupo Sentinela](https://www.gruposentinela.com.br/os-10-carros-usados-mais-vendidos-do-brasil-no-primeiro-semestre-de-2026/)
- Estrutura Google Ads p/ concessionárias 2026 (separar por intenção, grupos por modelo, geo, tracking) — [AutoCorp](https://autocorp.ai/blog/optimizing-google-ads-for-car-dealers-in-2026), [DealersUnited](https://www.dealersunited.com/blog/different-types-google-ad-campaigns/)
- Mercado de usados online BR / marketplaces (50% P2P via portais; Kavak no BR) — [Bloomberg Línea](https://www.bloomberglinea.com/english/mexicos-kavak-wants-to-accelerate-brazils-used-cars-market-with-a-new-yard-in-rio/), [TraceData Research](https://www.tracedataresearch.com/industry-report/brazil-used-car-market)
- Filtros do site (marca, modelo, carroceria, combustível, ano, preço, loja) — inspeção de `autoshoplinhaverde.com.br/multipla`, 23/07/2026
```
