# decisoes.md — Registro de Decisões e Aprendizados · Autoshopping Linha Verde

> Decisões tomadas, argumentos que funcionaram, o que não funcionou e por quê.
> Estado atual na fonte de verdade: [[estado-da-conta-autoshopping]]. Números em [[campanhas]].

---

## Como registrar

**[Data] — [Área]**
**Decisão/Aprendizado:**
**Contexto:**
**Por quê:**
**Impacto:**

---

## Decisões

**2026-07-23 — Google / Landing — ACEITAR a rota alias `/m` da Revenda Mais**
**Decisão:** trocar `/multipla` por **`/m`** em todas as URLs de destino dos anúncios, em vez de
insistir na liberação do `robots.txt`.
**Contexto:** o `robots.txt` bloqueia `AdsBot-Google` em `/multipla` e `/busca` por **bloco próprio**
— era intencional, não descuido. A Revenda Mais **recusou liberar**: crawlers estavam disparando
requisições em massa de URLs facetadas inexistentes (`/multipla/98sd98sjds98dsAAAAA8888`) e comendo
+80% da infra deles. Ofereceram `/m` e `/b` como rotas alternativas.
**Por quê:** a justificativa deles é **tecnicamente plausível** (explosão de navegação facetada é
problema clássico), e o alias foi **testado antes de aceitar**: `/m` retorna 200 sem redirect,
conteúdo idêntico, `GTM-KVLGK4D` e `dataLayer` presentes, e **não é bloqueado** porque robots casa
por **prefixo** — `/m` não começa com `/multipla`. Brigar pela liberação custaria dias e perderia:
o problema de infra é real e o custo é deles.
**Impacto:** 🔑 **A preocupação de "ter que trocar todos os links específicos" não se confirmou** —
páginas de carro ficam em `/carros/Marca/Modelo/...html`, **fora** de `/multipla` e sem regra no
robots. A troca vale **só para listagens**.
🔴 **RESSALVA CRÍTICA (mesma data, após o Google reprovar os anúncios):** a troca para `/m`
**resolve só metade do problema**. Existe um **segundo bloqueio, independente**: o WAF/CloudFront
devolve **403 por volume de requisições**, por IP — pega `/m`, `/multipla`, a home e o próprio
`/robots.txt`. **Trocar URL não resolve isso.** Ver a decisão seguinte.

**2026-07-23 — Google / Infra — 🔴 ERRO MEU: dei "resolvido" cedo demais**
**Decisão:** reabrir o item de destino bloqueado como **bloqueio de lançamento**, e mudar o pedido à
Revenda Mais de "liberar `/multipla` no robots" para **"isentar o AdsBot-Google do rate limit"**.
**Contexto:** eu declarei o robots.txt resolvido depois de testar `/m` e ver 200. **Gabriel
contestou** com a tela do Google Ads: **HTTP 403, plataforma Android, anúncios REPROVADOS**.
Ele estava certo.
**Por quê eu errei:** meu teste (a) usou **user-agent de desktop** e (b) pegou **cache do
CloudFront** (`X-Cache: Hit from cloudfront`). **Cache hit não prova que o rastreador passa** — eu
validei a camada de `robots.txt` e tratei como se fosse a única. Ao testar por **volume**, o IP
inteiro passou a receber **403 em tudo**, inclusive no `/robots.txt`.
**Impacto:** causa raiz é a **mitigação anti-crawler da Revenda Mais** (rate limit cego no AWS
CloudFront/WAF) pegando o rastreador de anúncios do Google junto. 🔴 403 no `/robots.txt` é o pior
sintoma: sem ler o robots, o Google trata o **site inteiro** como bloqueado — daí os dois erros
aparecerem juntos. Pedido correto: isentar `AdsBot-Google` e `AdsBot-Google-Mobile` do rate limit
(faixas oficiais em `developers.google.com/static/crawling/ipranges/special-crawlers.json`, 270
prefixos → IP set + Allow **acima** do rate limit) e garantir `/robots.txt` sempre 200.
**Aprendizado de método (registrar e aplicar sempre):** validar destino de anúncio exige testar
**volume**, checar o header **`X-Cache`** e confirmar que **`/robots.txt` responde 200 sob carga** —
não basta uma requisição de navegador dando 200. E: **verificar resposta de fornecedor é certo, mas
verificar a camada errada dá falso positivo.** Quando o Gabriel contesta com print da plataforma, a
plataforma tem mais autoridade que o meu teste.

**2026-07-23 — Google / Medição — 🔑 CONVERSÃO NOVA NO AR (marco)**
**Decisão:** **formulário do site = conversão PRIMÁRIA** (`Lead - Formulário Site`); **WhatsApp =
SECUNDÁRIA** (`Contato - WhatsApp`). As duas contam, medidas **separadas**; só a primária otimiza.
**Contexto:** ficou registrado por engano que a primária do Google seria WhatsApp — **Gabriel
corrigiu em 23/07**. Construção do zero, sem reusar nada da gestão antiga. GTM `GTM-KVLGK4D`
(já instalado no site) — **Versão 169 publicada 23/07 16:54**, 8 itens adicionados, nada existente
alterado. Ambas as tags validadas disparando no GTM Preview. Detalhe técnico em
[[../marketing/campanhas/BUILD-search-google-onda1-2026-07]] §6.
**Por quê:** no Google o comportamento é diferente do Meta — quem entra no **site** e preenche
**formulário** é lead quente com intenção declarada; clique de WhatsApp é intenção mais rasa e
mensurada como observação. **Feito 100% no GTM, sem depender da Revenda Mais** — quebra a
dependência histórica que travava a medição. Como o site **não tem página de obrigado** (sucesso é
um `alert()` nativo), a solução foi sobrescrever `window.alert` e empurrar `lead_form_ok` pro
dataLayer: dispara só no sucesso real, sem over-count.
**Impacto:** primeira medição **confiável** da conta no Google. Não muda nada agora — campanhas
rodam em **Maximizar Cliques**, que ignora conversão pra dar lance — mas é o pré-requisito do Smart
Bidding. ⚠️ Na migração, reavaliar o modelo de **duas primárias com valores diferentes** (form vale
mais) + Maximizar Valor de Conversão: é a forma tecnicamente correta de pesar as duas, e o
primária/secundária de hoje é só o arranjo interino.

**2026-07-23 — Google / PMax — regra dos 7 dias NÃO se aplica**
**Decisão:** **pausar a PMax herdada sem período de paralelo.**
**Contexto:** Gabriel foi enfático — a PMax não entrega nada, ninguém na gestão sabe dela nem a
reivindica. Eu havia levantado a regra de transição de 7 dias; ele derrubou e está certo.
**Por quê:** a regra de 7 dias em paralelo existe pra proteger a troca de uma campanha **que
funciona**. Aplicá-la a uma campanha órfã e sem resultado é cerimônia, não gestão de risco.
A defesa de marca fica coberta pela campanha **Institucional**.
**Impacto:** corrige a regra registrada em [[estado-da-conta-autoshopping]] §5 — ela vale pro que
está performando, não pra todo legado por padrão. Libera verba e reduz ruído de conversão.

**2026-07-23 — Google / Limpeza — legado fica pra passada separada**
**Decisão:** **publicar o setup limpo primeiro; limpar o legado depois**, com lista na mão.
**Contexto:** o GTM tem ~71 tags e a conta ~50 ações de conversão, quase tudo da gestão antiga.
Gabriel quis limpar antes de publicar.
**Por quê:** publicar é **aditivo** — o legado já estava no ar, não entra nada de novo por causa do
publish. Então limpar antes ou depois dá no mesmo pro que fica live, e **deletar é a operação
arriscada**, não adicionar. ⚠️ Trava específica: as tags `WhatsApp Loja - X` são **rastreio por
lojista** — o nó central da conta. Não apagar às cegas; decidir *manter vs. reconstruir limpo*.
**Impacto:** backlog de limpeza: tags de Universal Analytics (morta, Google desligou — seguro
deletar), Conversion Linker duplicado, ações de conversão velhas no Ads. Alertas do Ads ("meta
Contato: configuração incorreta" — 0 primárias, porque WhatsApp é secundário **de propósito**) são
ruído do legado e **não bloqueiam** o lançamento.

**2026-07-22 — Gestão / Reunião de alinhamento — 5 DECISÕES**
**Decisão:** (1) Reconhecimento fora de Curitiba **aprovado virar reserva** (linha cai a ~R$465);
(2) volume de criativos **diminui bastante**, com lógica de funil; (3) **Turbinar sobe a
R$2.000/mês** como compensação; (4) **transformação lojistas → ofertas AUTORIZADA**, com prazo real
de **2–3 ciclos** (produção de material + resistência dos lojistas); (5) **cartão de crédito** para
o pagamento Meta volta à diretoria — validar com Gabriel na próxima oportunidade.
**Contexto:** reunião de 22/07 com a gestão do Autoshopping, pauta preparada em 21/07.
**Por quê:** o Turbinar a R$2.000 é **moeda de troca política** — a gestão cedeu na realocação e no
corte de volume de criativo; o aumento do Turbinar é o preço disso. Registrar como troca consciente:
Turbinar entrega alcance, não funil, mas comprou as duas decisões que entregam funil.
**Impacto:** verba Meta rebalanceada (reserva ~R$1.195 em ago, **~R$405 em set** — meses de grupos
1+2 ficam apertados). A/B desliza de 04/08 para a primeira quinzena com material (alvo 18/08,
limite 01/09). **Ganho maior da reunião: a gestão passou a operar com a lógica topo/meio/fundo** —
toda campanha, criativo e ação com objetivo de funil declarado. É o novo critério comum para
aprovar ou recusar pedidos de criativo.

**2026-07-21 — Estrutura / Criativo — 🔑 DECISÃO ESTRUTURANTE DO SEMESTRE**
**Decisão:** **centralizar todas as ofertas nos ad sets de lojista** (CTWA, público amplo), trocando
em definitivo os criativos de lojista de institucional para **oferta direta**. Rotação quinzenal
sincronizada com a das ofertas — **a oferta sempre entra na terça-feira**. Os criativos **vencedores**
de cada quinzena sobem para **MOF/BOF** na quinzena seguinte, com destino no site (escada de criativo).
**+1 criativo institucional por ad set**, que a gestão pede — aceito, medido em separado.
**Contexto:** proposta de Gabriel em 21/07. Aprovação: Kauane, Maicon e Geyssica — **levar como
solução, não como consulta** (autonomia ampliada de 07/2026). Só não acontece se houver veto.
**Por quê:** resolve quatro problemas com uma decisão — (1) sobreposição de público (medida:
**~2,1 ad sets por pessoa**, 97.205 alcances somados ÷ ~46.400 únicos); (2) fila de designer, o
gargalo real (uma produção alimenta duas campanhas); (3) fome de sinal dos ad sets fracos; (4) sem
colisão de leilão, porque MOF/BOF rodam os criativos da quinzena **anterior**.
**Impacto:** vira a arquitetura-alvo da conta. Detalhe em
[[plano-macro-ago26-fev27]] §3.1. `[EXCEÇÃO]` não aplicar a troca ao Massa Motors sem antes ler a
correção de diagnóstico abaixo.

**2026-07-21 — Diagnóstico / Correção — MASSA MOTORS**
**Decisão:** substituir o diagnóstico anterior ("é público/criativo" genérico) por **fome de sinal**.
**Contexto:** export de conjuntos 01–21/07. Massa Motors tem o **CPM mais baixo da conta**
(R$21,80 contra R$26–40 dos demais), **CTR normal** (0,92%), **clique mais barato** (R$2,87) e o
**maior volume de cliques** (163, o maior de todos) — mas **6,7% de clique→conversa** contra 51,5%
do South Motors.
**Por quê:** **não é falha pós-clique** — a mensagem pré-preenchida é idêntica em todos os lojistas
(confirmado por Gabriel, 21/07). É espiral de sinal: com 11 conversas em 21 dias a Meta não tem
evento suficiente para otimizar → entrega escorrega para inventário barato → público barato →
não converte → menos sinal ainda.
**Impacto:** o que quebra a espiral é **oferta direta + público amplo** — exatamente a decisão acima.
Trocar só o público, mantendo criativo institucional, tenderia a piorar o único indicador em que o
Massa é bom (custo de clique).

**2026-07-21 — Feirões / Independência de terceiro**
**Decisão:** **o feirão não é campanha nova nem linha de verba** — é o **criativo de oferta da
quinzena carregando a marca do parceiro**. Quando o nome do banco chegar, entra na arte. Sem feirão
no mês, o slot roda como oferta normal.
**Contexto:** o e-mail pedindo o calendário de feirões à gestão está **sem resposta**, e travaria
set–dez inteiro. O histórico da própria conta resolveu: gasto em feirão foi **jan 33% · fev 18% ·
mar 24% · abr 36% · mai 28%** da verba Meta (**média ~28%, praticamente todo mês**). Campanhas
legadas entregam o ano: `[FEIRÃO SANTANDER][AGOSTO]`, `Feirão Setembro 20,21e22`, `Feirão Outubro`,
`FEIRÃO - BLACK`, `Feirão Dezembro`, `Feirão Itaú Janeiro`. Parceiros rotativos: BV, Safra, Itaú,
Santander, C6, Bradesco, Carbank.
**Por quê:** *"não vamos depender dos outros pra montar isso"* (Gabriel, 21/07).
**Impacto:** dependência de terceiro **eliminada** do planejamento sazonal.

**2026-07-21 — Google / PMax**
**Decisão:** **PMax será desativada. Sem negociação.** Mas **só depois** de a campanha Institucional
(defesa de marca + conquesting) rodar **7 dias em paralelo**.
**Contexto:** PMax não faz sentido para revenda de seminovos — **Google Vehicle Ads não existe no
Brasil**, então não há feed de inventário para a PMax trabalhar; ela vira máquina de display e
canibalização de marca. O subgasto do Google em mar–jul **não foi gestão do Gabriel**.
**Por quê:** matar a PMax antes de a defesa de marca estar no ar deixa as buscas de marca descobertas
para o concorrente. É uma janela de poucos dias, mas evitável de graça.
**Impacto:** verba Google volta a R$22.000/mês (com reserva disponível), via rampa de 10–20%/semana.

**2026-07-21 — Criativo / Escopo do briefing**
**Decisão:** o briefing de campanha pede **criativo que vende**. **Fora dele:** ofertas quinzenais
(já têm fluxo próprio) e post turbinado (só entrega alcance). **Quem produz é sempre o designer** —
não é discussão nem tarefa do Gabriel.
**Contexto:** correção de duas propostas erradas de 21/07 ("template editável" e "Canva travado"),
que empurravam produção de peça para quem faz **só tráfego pago**.
**Por quê:** o briefing existe para as campanhas performarem, não para cobrir produção recorrente.
**Impacto:** briefing de 01/09 fechado em **12 peças e 3 ângulos**, distribuídas **por campanha**:
Lojistas CTWA 6 (qualificam o clique — veículo, preço e condição na arte, atacando os 24,5%) ·
Site MOF 2 (carrossel por categoria, **nunca veículo único** — 300–500 vendas/mês quebram peça presa
a um carro) · Site BOF 2 (urgência/condição) · Natal 2 (desdobramento) · Reconhecimento 0.
**3 ângulos:** desconto no preço · taxa zero no financiamento · bônus na troca do usado — o que a
rede automotiva brasileira efetivamente usa em Black November.

**2026-07-21 — Rastreamento / Dependência**
**Decisão:** **rastreamento não é dependência de terceiro.** A auditoria via **Revenda Mais sai do
plano** como bloqueio; o `lead_gen` do site **depende só do Gabriel**, alvo 30/09.
**Por quê:** a relação com a Revenda Mais está em disputa; manter o plano refém dela trava o gatilho
de realocação de verba de outubro por algo fora de controle.
**Impacto:** o gatilho de §3.2 do [[plano-macro-ago26-fev27]] passa a depender só de execução própria.

**2026-07-21 — Reporte / Meta de leads**
**Decisão:** **não aplicar desconto arbitrário** (os "−20%") sobre as conversas. Reportar em **três
camadas medidas**: cliques no link (1.373) → conversas iniciadas (336, 24,5%) → **leads que chegaram
ao lojista (não medido — é o pedido)**.
**Contexto:** hipótese inicial era descontar ~20% como "cliques falsos".
**Por quê:** "conversa iniciada" já é o evento **depois** do clique — a perda de 75,5% no clique já
está fora do número. Descontar 20% seria descontar duas vezes, e desconto arbitrário não se defende
quando perguntarem *"por que 20%?"*.
**Impacto:** a camada 3 vira o pedido naturalmente. **Alavanca com os lojistas:** *"geramos 336
conversas; se vocês não receberam, provem preenchendo o formulário"* — inverte o ônus da prova e é
hoje a melhor ferramenta para destravar a adesão ao forms (5/23, 0 vendas registradas).

**2026-07-21 — Budget / Regional**
**Decisão:** pausar os ad sets de Reconhecimento de **Interior PR, Oeste PR e SC/MS** (feito em
20/07), mantendo **Curitiba e SP**.
**Contexto:** a verba de julho ia estourar. Critério de escolha: **custo e resultado**.
**Por quê:** era corte forçado, não otimização planejada. Gabriel reconhece que está longe do ideal
e que não havia alternativa dentro do teto.
**Impacto:** ⚠️ **enquadrar corretamente na gestão** — o argumento é *"tive que cortar e escolhi
pelo dado"*, **não** *"otimizei a geografia"*. O segundo é mais bonito e menos verdadeiro; se
questionado, o primeiro se sustenta. `[PREENCHER]` por que SP foi mantido enquanto as outras três
saíram (SP tem o alcance mais barato, R$1,38/mil, mas está fora da praça de venda).

**2026-07-21 — Budget / Estouro**
**Decisão:** **aceitar conscientemente** o estouro projetado de julho (~R$18.500 contra R$16.000).
**Contexto:** meses anteriores de bloqueio e subgasto geraram **"gordura" acumulada**, e Gabriel
não identifica mais nenhum lugar para cortar.
**Por quê:** cortar mais comprometeria entrega das frentes que estão funcionando.
**Impacto:** decisão consciente, não descontrole. Contexto de apoio: o semestre variou de
R$10.282 (mar) a R$21.042 (fev) — **julho acima de R$16k não seria inédito**.

**2026-07-21 — Financeiro / Contorno**
**Decisão:** pagar a fatura de julho da Meta **via PIX** (17/07), contornando o bloqueio de
boleto e Pix automático.
**Contexto:** crise técnica da conta Meta aberta desde o início de julho; suporte não resolveu.
Operação custosa de destravar com financeiro e diretoria.
**Por quê:** era isso ou parar a veiculação.
**Impacto:** resolvido "por hora". 🔴 **Risco de reincidência no pagamento de agosto.** O Plano B
(conta nova como teste de isolamento) **não foi executado** e o Reclame Aqui **não foi aberto**.

**2026-07-21 — Otimização / Ritmo**
**Decisão:** nos ad sets de lojista, **não fazer mudança grande antes de 10 dias**; otimizar apenas
por disparidade evidente (desativar estático/vídeo destoante), sem mexer em verba (que é fixa por
lojista).
**Contexto:** nenhum ad set de lojista atinge **50 conversões/semana**, então nenhum "sai do
aprendizado" pelo critério formal da Meta.
**Por quê:** o gate formal da Meta é inatingível neste formato — precisa de uma régua prática que
proteja o aprendizado sem paralisar a operação.
**Impacto:** vira a regra operacional da rotação. Próximo ciclo: testar **público + criativo** nos
lojistas de pior CPL (MASSA MOTORS R$42,53, SPEED R$37,02, ATUAL R$28,31).

---

## Aprendizados

- 🛑 **A série de CPL de jan a jun NÃO é comparável com julho.** Antes de 29/06 as campanhas de
  lojista otimizavam para **clique/tráfego** com link `wa.me`; desde 29/06 é **CTWA nativo**, que só
  conta quando a mensagem sai. **R$9,13 de fevereiro e R$17,82 de julho não são a mesma unidade** —
  é o erro "conversa ≠ lead" uma camada acima. **A série limpa começa em 29/06/2026.** Não afirmar
  tendência de CPL nem de CPM cruzando essa fronteira. *(Erro cometido e corrigido em 21/07.)*
- **Massa Motors é problema estrutural, não ruído.** CPL de R$42,49 (01-13/07) e R$42,53 (01-21/07)
  — repetiu o pior resultado com precisão. **Diagnóstico corrigido em 21/07: é fome de sinal, não
  falha pós-clique.** Ver a decisão datada acima antes de agir sobre esse ad set.
- **Nem toda perda está no lugar óbvio.** A taxa **clique → conversa** da conta é **24,5%** (1.373
  cliques → 336 conversas), contra benchmark de mercado de **35–55%** para CTWA. Dentro da própria
  conta, South Motors já faz **51,5%**. A régua é atingível com o que existe — e **fechar essa
  lacuna não custa verba adicional**. `[RESSALVA]` benchmark sem metodologia auditada e sem recorte
  automotivo: alvo interno, nunca meta acordada com a gestão.
- **Verba fixa + CPM de Q4 = menos volume, por aritmética.** CPMs sobem ~40% de meados de nov a
  meados de dez. Com R$16k fixos, novembro entrega ~25–30% menos conversas que outubro **sem que
  nada tenha piorado**. Combinar isso em agosto, por escrito. Combinar antes é gestão; explicar
  depois é desculpa.
- **Consolidação de verba destrava o algoritmo.** 26 campanhas a ~R$10/dia produziam falha crônica
  de aprendizado. Poucos ad sets bem financiados é pré-requisito, não preferência.
- **Rotação é operacional, não estrutural.** Pausar/ativar ad set de lojista, **nunca recriar** —
  recriar zera o histórico de aprendizado.
- **Medição antes de otimização.** As duas plataformas tinham sinal corrompido (Meta: pixel/dataset
  instável; Google: 194k junk conversions). Limpar medição antes de otimizar lance é inegociável,
  **mesmo causando queda visível no número reportado** — e essa queda precisa ser pré-explicada à
  gestão, senão parece piora.
- **Benchmark falso é pior que benchmark nenhum.** CPL alvo foi retido de propósito até existir dado
  real da estrutura auditada.
- **Assimetria de verba:** apertado no Meta, **com folga no Google** (pausou o gasto errado, ainda
  não subiu o certo). Planejar usando essa diferença.
