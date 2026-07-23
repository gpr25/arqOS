# PLANO MACRO DE MÍDIA PAGA — AUTOSHOPPING LINHA VERDE
### ago/2026 → fev/2027 · Documento-base do fechamento de ano
**Versão 1.0 · 21/07/2026 · Gabriel Pauletto**

> **O que este documento é:** a base da qual saem os planos bimestral (ago–set), trimestral
> (out–dez) e os mensais. Define arquitetura de conta, calendário de datas com régua D-60, divisão
> de verba e metas. **Não substitui** a fonte de verdade (`memory/estado-da-conta-autoshopping.md`).
>
> **Por que vai até fev/2027 e não até dez/2026:** a régua D-60 faz de novembro e dezembro **meses
> de briefing**, não de campanha. Um plano que termina em 31/12 obriga a planejar jan e fev às
> cegas — exatamente o que este documento existe para evitar.

---

## 1. PREMISSAS TRAVADAS (não reabrir)

| Item | Valor | Origem |
|---|---|---|
| Verba Meta | **R$16.000/mês, fixa ago→dez** | Gabriel, 21/07/2026 |
| Verba Google | **R$22.000/mês + reserva disponível** | Gabriel, 21/07/2026 |
| Régua de briefing | **D0 = 60 dias antes da SUBIDA** | `Geral/plano-operacional-e-calendario.md` |
| Trava do semestre | **01/09/2026** — briefing da Black November | idem |
| Meta formal | 100 leads/mês (provisória, ajuste gradual) | decisão política 21/07 |
| PMax Google | **Será desativada. Sem negociação.** | Gabriel, 21/07/2026 |
| Duração de campanha | Caso a caso, prática de mercado + feeling | decisão 21/07 |
| Fora do ciclo | Dia dos Pais · Semana do Brasil · Dia das Crianças | ver §4.3 |

---

## 2. O QUE A SÉRIE SUSTENTA — E O QUE NÃO SUSTENTA

`[RIGOR]` Esta seção existe para impedir que conclusão frágil vire premissa de plano.

### 2.1 NÃO sustenta (não usar em apresentação)

- ❌ **Série de CPL jan→jul.** Antes de 29/06 as campanhas de lojista otimizavam para clique/tráfego
  com link `wa.me`; desde 29/06 é **CTWA nativo**, que só conta quando a mensagem sai.
  **R$9,13 de fevereiro e R$17,82 de julho não são a mesma unidade.** Qualquer leitura de
  "CPL subiu/caiu" cruzando essa fronteira está errada.
- ❌ **Comparação de CPM entre regimes.** Otimizar para evento profundo compra usuário mais caro por
  natureza. Parte da alta é mecânica, não degradação.
- ❌ **Somar a coluna `Resultados` entre meses.** Mistura conversas, cliques, LPV, alcance e visitas.
- ❌ **Superlativo histórico.** A série limpa começa em **29/06/2026**. São ~3 semanas.

### 2.2 SUSTENTA (medido dentro de julho, sem comparação histórica)

| Fato | Número | Fonte |
|---|---|---|
| Conversas iniciadas (01–21/07) | **336** | export Conjuntos |
| Cliques no link únicos | **1.373** | idem |
| **Taxa clique → conversa** | **24,5%** | idem |
| Benchmark de mercado CTWA | **35–55%** | ver §9 (ressalva de método) |
| Melhor ad set da conta | SOUTH MOTORS **51,5%** | idem |
| Pior ad set da conta | MASSA MOTORS **6,7%** | idem |
| Sobreposição de público | **~2,1 ad sets por pessoa** (97.205 alcances somados ÷ ~46.400 únicos) | idem |
| Gasto em feirão, média jan–mai | **~28% da verba Meta** | export Campanhas |

**Diagnóstico do Massa Motors (corrigido 21/07):** CPM **R$21,80** — o mais baixo da conta (demais:
R$26–40), CTR normal (0,92%), clique mais barato (R$2,87), pior conversão (6,7%). **Não é
configuração pós-clique** — a mensagem padrão é idêntica em todos os lojistas. É **fome de sinal**:
com 11 conversas em 21 dias a Meta não tem evento suficiente para otimizar, a entrega escorrega para
inventário barato, que traz público barato, que não converte, que reduz mais o sinal. Espiral.
**O que quebra a espiral é oferta direta + público amplo** — a decisão de §3.

---

## 3. ARQUITETURA-ALVO DA CONTA

### 3.1 A decisão estruturante: escada de criativo

**Todas as ofertas nascem nos ad sets de lojista.** Os vencedores da quinzena sobem para MOF/BOF na
quinzena seguinte, com destino no site.

```
QUINZENA N          [LOJISTAS CTWA]  ← 10 criativos de oferta + 1 institucional
                     público amplo · destino: WhatsApp do lojista
                              │
                              ▼ (vencedores da quinzena)
QUINZENA N+1        [SITE MOF / BOF] ← recebe só os vencedores
                     destino: páginas filtradas /multipla/...
```

**Resolve quatro problemas com uma decisão:**
1. **Sobreposição de público** — público amplo substitui LAL 15 km do mesmo seed (os 2,1 ad sets/pessoa).
2. **Fila de designer** — uma produção alimenta duas campanhas. É o gargalo real de Gabriel.
3. **Fome de sinal** — oferta direta qualifica o clique e quebra a espiral do Massa Motors.
4. **Colisão de leilão** — MOF/BOF rodam os criativos da quinzena **anterior**; nunca os mesmos ao mesmo tempo.

**Ritmo:** rotação quinzenal sincronizada. **A oferta sempre entra na terça-feira.**

**Criativo institucional (1 por ad set):** a gestão pede, Gabriel não vê lógica. **Aceitar.** Com
6 ad sets × ~11 criativos, é ~9% do inventário — moeda de troca barata para ganhar a decisão maior
(trocar todo o resto para oferta). **Condição:** medir em separado, para encerrar o assunto por dado
no ciclo seguinte.

**Aprovação:** Kauane, Maicon e Geyssica. Levar **como solução, não como consulta** — a autonomia
ampliada da gestão (07/2026) cobre isso. Só não acontece se houver veto explícito.

### 3.2 Meta — divisão de verba (R$16.000)

**Verba fixa em R$16.000, todo mês, ago→fev.** Não há cenário alternativo. Se mudar, Gabriel avisa.

| Linha | Verba/mês |
|---|---|
| Lojistas CTWA + ofertas | **R$ 7.020 a R$ 8.190** — varia com o grupo da rotação (ver nota) |
| Site MOF | R$ 3.200 |
| Site BOF | R$ 1.740 |
| Reconhecimento | **~R$ 465** — ✅ aprovado 22/07: só Curitiba, o resto virou reserva |
| Turbinar | **R$ 2.000** — ✅ aprovado 22/07 (compensação política da reunião) |
| Reserva | **~R$ 405 a R$ 1.195** — o que a rotação do mês deixar |
| **Total** | **R$ 16.000** |

⚠️ `[22/07]` Com Turbinar a R$2.000, **os meses de grupos 1+2 (set, nov, jan) fecham com reserva de
só ~R$405** — pouco espaço para feirão e para absorver imprevisto. Se um feirão grande cair num mês
desses, a conta não fecha sem realocar. Tratar no planejamento do trimestral (fim de agosto).

`[FATO 21/07]` **A rotação de lojista é fixa e não escolhida: 4 grupos numerados (7/7/6/6 ad sets),
um grupo por quinzena, R$39/dia por ad set.** Meses com grupos 1+2 (jul, set, nov, jan) gastam
~R$8.190 na linha; meses com grupos 3+4 (ago, out, dez, fev) gastam ~R$7.020–7.400. **A reserva
existe para absorver essa oscilação e os feirões** — não é verba livre.

`[NOTA]` O encerramento da campanha IG da Copa (~R$1.678/mês) é o que faz agosto caber nos R$16.000
sem cortar frente nenhuma — julho projetava ~R$18.500.

**Reconhecimento:** Interior PR, Oeste PR e SC/MS pausados em 20/07; Curitiba e SP ativos. **Manter
ou retomar região é decisão da gestão, não do Gabriel** — levado em 22/07. Não é bloqueio do plano.

**🔓 Gatilho de realocação (outubro):** quando o `lead_gen` do site estiver **validado**, **MOF+BOF
sobem para ~R$7.000 combinados**, tirando do lojista. Motivo: hoje as duas frentes são igualmente
não-medidas — mover verba antes da validação é trocar de escuridão. Depois, MOF/BOF passam a ser a
única frente com lead comprovado e o aumento se justifica sozinho.

### 3.3 Google — R$22.000/mês + reserva

**23/07 — Search sobe** (Institucional + Aquisição). **A PMax morre junto.** Não é assunto aberto.
A campanha Institucional (defesa de marca + conquesting) cobre as buscas de marca a partir do dia 1.

**Rampa de verba** — 10–20% de aumento semanal é a prática para campanha always-on:

| Janela | Diário | Mês | Grupos |
|---|---|---|---|
| 23–31/07 | ~R$350 | ~R$3.000 | Genérico Local, SUV, Financiamento |
| Ago sem 1–2 | R$400 → R$480 | | + Sedan, Hatch |
| Ago sem 3–4 | R$580 → R$700 | **~R$17.000** | + Picape, Eletrificados/BYD |
| Set | R$730 | **R$22.000** | todos + Premium (onda 2) |
| Out–Dez | R$730 + reserva em nov | **R$22.000+** | — |

`[RESSALVA]` **R$700/dia pode exceder o volume de busca real de Curitiba+RMC.** Se a campanha não
gastar o teto sem afrouxar correspondência, **isso é informação, não fracasso** — significa que o
gargalo é demanda, e a reserva vai para Q4, onde há volume e o CPC sobe.

---

## 4. CALENDÁRIO DE DATAS-CHAVE

### 4.1 O calendário

| Data-chave | Duração | Subida | 🔔 Briefing (D-60) | Verba estimada |
|---|---|---|---|---|
| **Feirão mensal** (recorrente) | quinzena | terça de cada quinzena | **contínuo via template** | dentro dos R$16k |
| **BLACK NOVEMBER** | **30 dias** | **01/11** | **🎯 01/09** | R$16k Meta + R$22k Google + reserva |
| **Natal** | 15 dias | **15/12** | **01/09** (junto da BF) | dentro do mês |
| **Virada + pré-IPVA** | 30 dias | **20/01** | **20/11** | a definir |
| **Feirão IPVA** | 30 dias | **01/02** | **01/12** | a definir |

### 4.2 Justificativa de cada duração

**Black November — 30 dias.** No automotivo brasileiro Black Friday não é um dia: virou
**Black November**, com campanhas de rede rodando **até 30/11** (Hyundai, Grupo Prime e outros). A
subida em 01/11 já era a decisão; agora tem lastro de mercado, não feeling.

**Natal — 15 dias, mesmo briefing da BF.** O setor trata nov–dez como **uma temporada contínua**, o
melhor período de compra do ano. Natal é desdobramento de arte do mesmo key visual, não conceito
novo. **Consequência prática: o briefing de 15/10 sai do calendário** — uma rodada a menos na fila de
designer, que é o recurso mais escasso do ano.

**Virada — 20/01, não 02/01.** Dados Fenauto/Fenabrave: **janeiro retrai 24,5% contra dezembro**
(IPVA, IPTU, matrícula). Subir em 02/01 é queimar verba no fundo do vale. Subir em 20/01 pega a
virada para o IPVA.

**Feirão IPVA — 01/02.** É o gancho **provado na própria conta** (`CA [Feirão IPVA]` rodou em
fev/2026). E **março foi o mês mais forte do 1º tri/2026 no Brasil** (513 mil, +35,3% a/a) — subir em
fevereiro constrói para o pico de março.

### 4.3 O que fica FORA, e por quê

- **Dia dos Pais (09/08)** e **Semana do Brasil (07/09)** — briefing vencido, decisão já registrada.
- **Dia das Crianças (12/10)** — **excluída aqui**: briefing vencido **e** não é data de compra de
  veículo de ticket R$80k. Nenhum esforço de planejamento.

### 4.4 Feirões: como planejar sem depender da gestão

O calendário de feirões foi pedido por e-mail e **não voltou**. Não é bloqueio: **o histórico da
conta já responde.**

Gasto em feirão/ação sazonal: jan 33% · fev 18% · mar 24% · abr 36% · mai 28% · jun 1%
(reestruturação). **Média jan–mai ≈ 28% da verba Meta, praticamente todo mês.**

Campanhas legadas na conta entregam o ano inteiro: `[FEIRÃO SANTANDER][AGOSTO]` ·
`Feirão Setembro 20,21e22` · `Feirão Outubro` · `FEIRÃO - BLACK` · `Feirão Dezembro` ·
`Feirão Itaú Janeiro`. Parceiros rotativos: **BV, Safra, Itaú, Santander, C6, Bradesco, Carbank**.

**➡️ Regra adotada: o feirão NÃO é campanha nova nem linha de verba.** É o **criativo de oferta da
quinzena carregando a marca do parceiro**. O slot já existe e roda de qualquer forma; quando o nome
do banco chegar, entra na arte. Se não houver feirão no mês, o slot roda como oferta normal.
**Dependência de terceiro eliminada.**

### 4.5 O briefing de 01/09 — escopo fechado

> **Escopo:** este briefing pede **criativo de CAMPANHA** — peça que existe para vender. As ofertas
> quinzenais **já têm fluxo próprio** e **não entram aqui**. Post turbinado, que só entrega alcance,
> também não. **Quem produz é sempre o designer.**

**O que cada campanha precisa para performar:**

| Campanha | O que a peça precisa entregar | Peças BF |
|---|---|---|
| **Lojistas CTWA** (público amplo, oferta direta) | **Qualificar o clique antes dele acontecer**: veículo + preço + condição visíveis na arte. Quem clica já sabe o que vai perguntar. É o que ataca os 24,5% de clique→conversa. | **6** (3 ângulos × feed 4:5 + story 9:16) |
| **Site MOF** (frio, Advantage+, LPV) | **Variedade de estoque, nunca veículo único** — a rotação de 300–500 carros/mês quebra qualquer peça presa a um carro. Carrossel por categoria, card levando à página filtrada. | **2** (carrossel 5 cards, 2 formatos) |
| **Site BOF** (remarketing) | **Urgência e condição.** Público já visitou; a peça fecha, não apresenta. | **2** |
| **Reconhecimento** | Alcance institucional — **não é onde se pede peça de venda.** | 0 |
| **Natal** | Desdobramento de arte do mesmo key visual, não conceito novo. | **2** |
| | | **Total: 12 peças · 3 ângulos** |

**Os 3 ângulos** (o que a rede automotiva brasileira efetivamente usa em Black November — não é
invenção): **(1) desconto no preço · (2) taxa zero no financiamento · (3) bônus na troca do usado.**

**Por que 3 ângulos e não 8:** é o mínimo para teste com leitura e o teto do que uma fila de data
grande entrega, quando os mesmos designers atendem orgânico, adesivo, folder e outdoor ao mesmo
tempo. Pedir 20+ peças em data grande é o caminho garantido para receber zero.

---

## 5. METAS POR PERÍODO

### 5.1 Bimestre ago–set — ESTRUTURA

*Objetivo: chegar em 31/08 com a conta de pé, para o briefing de 01/09 sair com estratégia.*

| Entrega | Critério de conclusão | Prazo |
|---|---|---|
| Search Google no ar e estável | 7 dias sem termo lixo relevante na revisão diária | 31/08 |
| PMax desativada | Feito junto com a subida do Search | 23/07 |
| Ofertas rodando dentro dos ad sets de lojista | 1ª rotação completa medida | 31/08 |
| Público amplo substituindo LAL 15 km | Sobreposição < 1,4 ad set/pessoa | 30/09 |
| **`lead_gen` do site validado** | Lead real rastreado ponta a ponta. **Depende só do Gabriel** | 30/09 |

**Indicador-número do bimestre: taxa clique → conversa de 24,5% → ≥ 32%.**
Metade do caminho até o piso do benchmark (35%), com a régua provada dentro da própria conta
(South Motors já faz 51,5%). **Não custa verba adicional** — é dinheiro na mesa.

### 5.2 Trimestre out–dez — SAZONALIDADE COM VERBA FIXA

🔴 **A conta que precisa ser combinada AGORA, não em dezembro:**

CPMs sobem **~40% de meados de novembro a meados de dezembro**; 30–60% em verticais competitivas.
**A verba de nov/dez é a mesma de agosto (confirmado).** Logo:

> **Com verba fixa e CPM +40%, novembro entrega ~25–30% menos conversas que outubro.
> Isso é aritmética de leilão, não performance.**

**Meta honesta de Q4: manter o volume de conversas apesar da inflação de leilão** — o que já exige
ganho real de eficiência. Prometer crescimento em novembro com verba fixa é prometer o que o leilão
não deixa entregar.

**➡️ Ação política:** registrar essa expectativa **em agosto**, por escrito, junto do briefing da
Black November. Combinar antes é gestão; explicar depois é desculpa.

### 5.3 A meta de 100 leads/mês

Decisão travada: **manter e ajustar gradualmente.** No reporte, apresentar **três camadas medidas**,
nunca um desconto arbitrário:

| Camada | Jul (21d) | Status |
|---|---|---|
| Cliques no link | 1.373 | medido |
| **Conversas iniciadas** | **336** | medido — 24,5% |
| Leads que chegaram ao lojista | **?** | **não medido — é o pedido** |

**Por que não aplicar "−20% de margem":** "conversa iniciada" já é o evento **depois** do clique — a
pessoa clicou, o WhatsApp abriu e **enviou**. Os 75,5% de perda no clique já estão fora do número.
Descontar 20% seria descontar duas vezes, e um desconto arbitrário não se defende quando perguntarem
*"por que 20%?"*. Três camadas medidas se defendem sempre.

**Alavanca com os lojistas (Gabriel, 21/07):** *"geramos 336 conversas. Se vocês não receberam,
provem preenchendo o formulário."* Inverte o ônus da prova e é hoje a melhor ferramenta para
destravar a adesão ao forms (5/23 lojistas, 0 vendas registradas).

---

## 6. DEPENDÊNCIAS DE TERCEIROS

| # | Item | Responsável | Data | Se não vier |
|---|---|---|---|---|
| 1 | **Pagamento Meta de agosto** (risco de reincidência) | Financeiro / diretoria | ~25/07/2026 | 🔴 **Para a operação. Nenhuma linha deste plano acontece.** |
| 2 | **Briefing Black November + Natal (12 peças, 3 ângulos)** | Criativo / design | **pedido 01/09** · entrega 15/10 | 🔴 Data crítica do ano |
| 3 | Aprovação da troca de criativo de lojista → oferta | Kauane · Maicon · Geyssica | 31/07/2026 | Levar como solução; só para se vetarem |
| 4 | Decisão sobre regiões do Reconhecimento | Geyssica / gestão | 22/07/2026 | Segue como está — não bloqueia |
| 5 | Nome do parceiro de cada feirão | Gestão | rolling | Slot roda como oferta normal (§4.4) |
| 6 | Retorno do comercial: lead → contrato | Comercial / lojistas | adiado por decisão política | Camada 3 segue vazia |

**Rastreamento não está nesta lista.** `[21/07]` Não depende de terceiro — **depende só do Gabriel.**
A auditoria via Revenda Mais saiu do plano como dependência.

---

## 7. RISCOS ABERTOS

| Risco | Severidade | Mitigação |
|---|---|---|
| Pagamento Meta bloqueia de novo em agosto | 🔴 Alta | Plano B (conta nova como teste de isolamento) **nunca foi executado**. Reclame Aqui **nunca foi aberto**. Executar antes de 25/07. |
| Briefing de 01/09 escorrega | 🔴 Alta | É a trava do semestre. Sem ele, a BF entra sem material ou disputa fila em novembro. |
| Volume de busca não sustenta R$22k/mês no Google | 🟡 Média | Rampa de §3.3; se capar, reserva vai para Q4. Não é fracasso. |
| Veto à troca de criativo de lojista | 🟡 Média | Levar como solução, com o dado do Massa Motors como evidência. |
| Camada 3 (lead no lojista) segue não medida em dez | 🟡 Média | Alavanca do forms (§5.3) + auditoria Revenda Mais. |

---

## 8. CASCATA DE PLANEJAMENTO

```
[ESTE DOCUMENTO] Macro ago/26 → fev/27
        │
        ├── Plano BIMESTRAL ago–set  → foco: estrutura + trava de 01/09
        │        └── Plano MENSAL agosto · Plano MENSAL setembro
        │
        └── Plano TRIMESTRAL out–dez → foco: sazonalidade com verba fixa
                 └── Mensais outubro · novembro · dezembro
```

**Revisão trimestral:** é onde se fazem mudanças grandes (graduar teste, matar frente, mexer no nível
de verba). **Revisão mensal:** remaneja 5–15% entre frentes. Não inverter — mudança estrutural em
revisão mensal é o que produz a operação reativa que este plano existe para acabar.

---

## 9. FONTES E RESSALVAS DE MÉTODO

**Dados da própria conta (fonte primária):** exports Meta Campanhas/Conjuntos/Anúncios jan–jun e
01–21/jul/2026; export Google jan–jun e julho. Em `marketing/campanhas/`.

**Referências externas:**
- CTWA, taxa clique→conversa **35–55%** e faixas de custo — [Kanal](https://getkanal.com/blog/click-to-whatsapp-ads-benchmarks-2026), [AsisteClick](https://asisteclick.com/en/blog/click-to-whatsapp-ads-ctwa-conversion-2026/)
- CPM médio Meta Brasil 2026 (Feed R$15–35) — [Trafius](https://trafius.com.br/blog/cpm-medio-facebook-ads-brasil-2026)
- Inflação de CPM em Q4 (~+40% nov→dez; 30–60% em verticais competitivas) — [AdSeleto](https://adseleto.com/sazonalidade-cpm-publishers-guia-completo-2025/), [Stackmatix](https://www.stackmatix.com/blog/paid-media-budget-planning-2026)
- Rampa de verba 10–20%/semana; cadência trimestral × mensal — [Search Engine Land](https://searchengineland.com/ppc-budgeting-adjust-scale-optimize-data-452493)
- Sazonalidade de seminovos no Brasil (jan −24,5% vs dez; mar +35,3% a/a) — [Infocar/Fenauto/Fenabrave](https://infocar.com.br/blog/mercado-de-seminovos-no-1-trimestre-de-2026/)
- Black November automotivo, campanhas até 30/11 — [AutoPapo](https://autopapo.com.br/noticia/carros-black-friday-2024/), [Capital Econômico](https://revistacapitaleconomico.com.br/noticias/autos/hyundai-lanca-campanha-black-november-com-descontos-de-ate-r-15-mil-em-toda-linha-hb20-e-creta/)

⚠️ **RESSALVA sobre o benchmark de 35–55%:** vem de agregação de parceiros Meta e cases de agência,
**sem metodologia auditada e sem recorte automotivo ou de ticket alto**. Usar como **ordem de
grandeza e alvo interno** — **nunca** como meta acordada com a gestão. Regra da conta:
*benchmark falso é pior que benchmark nenhum.*

⚠️ **RESSALVA sobre a base:** a série limpa de CTWA tem **~3 semanas** (desde 29/06/2026). Todas as
metas deste plano são **calibráveis** e devem ser revistas no fechamento de agosto, com o primeiro
mês inteiro de dado comparável.

---

## 10. CHANGELOG

| Versão | Data | Mudança |
|---|---|---|
| 1.0 | 21/07/2026 | Criação. Macro ago/26–fev/27 com arquitetura de escada de criativo, calendário D-60 até fev/27, divisão de verba em 2 cenários, gatilho de realocação por tracking, e correção do diagnóstico do Massa Motors (fome de sinal, não pós-clique). |
