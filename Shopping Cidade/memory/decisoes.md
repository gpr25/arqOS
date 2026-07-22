# decisoes.md — Registro de Decisões e Aprendizados · Shopping Cidade

> Registrar aqui: decisões tomadas, argumentos que funcionaram, objeções novas,
> o que não funcionou e por quê. Inteligência acumulada da operação.
> Aprendizados de método vão para [[conhecimento]]; estado/histórico na fonte de verdade.

---

## Como registrar

**[Data] — [Frente/Área]**
**Decisão/Aprendizado:**
**Contexto:**
**Por quê:**
**Impacto:**

---

## Decisões

**2026-07-22 — Google B2B / Estrutura** `[REVISADA no mesmo dia — ver "Método" abaixo]`
**Decisão:** os R$15.000 do Google B2B rodam em **duas frentes**, com **orçamento como instrumento
de medição, não como freio**:
- **Search — R$400/dia (~R$12.000), orçamento deliberadamente NÃO restritivo.** Freio real =
  **teto de CPC R$4,50 + negativação diária na semana 1**. Lance nasce em **Maximizar Cliques**,
  migra para Conversões só após ~30 conversões reais.
- **Demand Gen — R$100/dia de piso**, absorve o que o Search não comer. Retargeting da LP nova
  entra como **grupo interno**, não como campanha separada.
- **YouTube fora** (exigiria criativo próprio ou avaliar o canal — bloco de tempo que não há;
  Demand Gen já entrega YouTube, Discover e Gmail com os 2-3 criativos de fluxo existentes).
- **PMax fora com portão** (decisão separada abaixo).

**Contexto:** `CA [Pesquisa] [Lojas]` pausada em 22/07, conta a reconstruir. Gabriel pediu limitar
a 2-3 frentes.
**Por quê duas frentes:** metade da configuração. **Hora de execução é o recurso escasso, não verba.**
**Por quê orçamento não restritivo:** com a perda-por-orçamento zerada, **o que o Search gastar É o
teto real, medido** — em vez de suposto. Orçamento como freio é o controle preguiçoso e ainda
deixa a pergunta sem resposta no fim do mês; teto de CPC + negativação é o controle preciso.
**Impacto:** se o Search comer R$12k, os R$15k cabem e a hipótese de teto morre. Se parar em ~R$5k
**com perda-por-orçamento em ~0**, aí sim é teto medido e a sobra migra para o Demand Gen no mesmo
mês. Risco: orçamento solto com lance em cliques queima verba em termo lixo — mitigado por
negativação **diária** na semana 1 e teto de CPC.

**2026-07-22 — Método / Rigor analítico (todas as frentes)** ⚠️
**Aprendizado:** **não usar parcela de impressões (nem qualquer métrica derivada da estratégia de
lance) como prova de teto de mercado numa conta com conversão contaminada.**
**Contexto:** a primeira versão do plano de agosto afirmou que "R$15k não cabem num Search só",
apoiada na parcela de impressões travada em 31–42%. **Gabriel contestou:** como afirmar teto usando
dado da conta, se o próprio diagnóstico diz que o dado da conta é lixo?
**Por quê ele está certo:** (1) a campanha rodava em "Maximizar o valor da conversão" **treinado em
Store Visits** — a estratégia de lance decide em quais leilões entrar e quanto pagar, então os
31–42% são a parcela **de uma campanha lanceando por sinal errado**, não a parcela do mercado;
(2) parcela de impressões se mede **contra as palavras-chave que estão na campanha** — conjunto
estreito, denominador pequeno; **o mercado total nunca foi medido**.
**Segunda contestação do Gabriel (mesmo dia), e ela derruba o resto:** *"já entendi que CPC não está
contaminado, mas estava medindo OUTRA COISA — por isso não é base de definição do Search."*
**Ele está certo, e é a regra nº 10 dele mesmo.** CPC, cliques e CTR são números **confiáveis**, mas
de uma campanha que perseguia **Store Visits** (métrica B2C). CPC de campanha que persegue visita à
loja ≠ CPC de campanha que persegue lead B2B — keywords, intenção, sinal de lance e leilão são
outros. **Confiável não é o mesmo que aplicável.** A segunda afirmação ("R$15k ≈ 3.093 cliques =
1,8x o melhor mês") foi retirada junto com a primeira.
**Conclusão final:** **não existe baseline histórico para dimensionar o Google B2B novo.** Os R$15k
não estão confirmados nem refutados por nada na conta. Setembro mede do zero, sem âncora. Corolário
que também caiu: o **teto de CPC de R$4,50** vinha do histórico contaminado — passa a sair do
**Keyword Planner sobre o keyword set novo**, recalibrado após ~2 semanas de lead real.
**Impacto — duas regras novas, válidas para todo o grupo enquanto o rastreamento não for auditado:**
1. Ao afirmar limite, **declarar se a métrica que sustenta a afirmação depende da conversão
   contaminada**. Se depender, a saída é **desenhar a medição**, não estimar o teto.
2. **Métrica limpa produzida sob outro objetivo de otimização não é baseline** para uma campanha com
   objetivo diferente. Limpa ≠ aplicável. (Extensão explícita da regra de rigor nº 10.)

**2026-07-22 — Google B2B / PMax**
**Decisão:** **PMax NÃO entra** na reconstrução do B2B em agosto nem em setembro. Reabre em
**outubro/2026** se (a) a conversão nova acumular **≥30 leads reais** E (b) o Demand Gen tiver
**30 dias** rodando.
**Contexto:** Gabriel cogitou PMax como uma das frentes dos R$15k. Divergência registrada.
**Por quê:** PMax aprende com volume de conversão, e a conversão nova nasce com histórico **zero**
numa frente que gera poucas dezenas de leads/mês. Sem sinal confiável, PMax busca o evento mais
barato disponível — **é exatamente assim que esta conta acumulou 100% das conversões em Store
Visits**. Reconstruir a conta e devolvê-la à mesma caixa preta que a quebrou anula o trabalho, e
quando der errado não há como provar o porquê numa campanha opaca.
**Impacto:** não é recusa, é gatilho datado. Se os portões forem atingidos em outubro, PMax entra
com o que aprender. Até lá, Demand Gen cobre os mesmos inventários com controle total.

**2026-07-22 — Google B2B / Pausa**
**Decisão:** `CA [Pesquisa] [Lojas]` **pausada em 2026-07-22**.
**Contexto:** o destino da campanha **já é a LP nova** (hipótese anterior da "LP antiga em
WordPress" está `[SUPERADA]`), mas a LP ainda não está totalmente configurada.
**Por quê:** cada dia rodando jogava tráfego e dado de conversão lixo na LP nova, contaminando a
linha de base dela antes de existir. Posição do Gabriel: **melhor verba parada do que gasta sem
objetivo ou retorno.**
**Impacto:** Google B2B gasta ~R$2.100 em agosto (rampa a partir de 25/08) contra R$15.000
nominais. ~R$13k não gastos no mês, somados a ~R$12,4k de julho — enquadrados como reserva de
teste (decisão abaixo), não como buraco.

**2026-07-22 — Grupo / Verba parada = reserva de teste**
**Decisão:** toda verba "sobrando" ou "parada" passa a ser tratada como **reserva de teste** —
orçamento de experimentação (testes novos, orçamentos diários maiores, frentes novas). Gabriel
reporta à gestão **por e-mail (Shopping, Autoshopping e Triunfo) assim que a validação começar**.
**Contexto:** Google B2B do Shopping com ~R$13k/mês parados por dois meses seguidos, por decisão
técnica correta.
**Por quê:** muda o enquadramento de "verba não gasta" (buraco, cobrança) para "orçamento de
experimentação sob decisão técnica" (ativo). É o Gabriel definindo a moldura antes de alguém
perguntar, e cumpre a diretriz da gestão de abrir pelo resultado e pelo pedido, não pelo
diagnóstico.
**Impacto:** vale para as três contas citadas, não só o Shopping. Registrado também em `/Geral`.

**2026-07-22 — B2B / Calendário de fim de ano**
**Decisão:** o B2B **não faz Black Friday**. A campanha de fim de ano é **"Loja pronta pro Natal"**,
duração **45 dias**, subida **15/10/2026**, briefing (D0) em **14/08/2026**.
**Contexto:** planejamento agosto–dezembro. Ninguém informou ação comercial de fim de ano que já
ocupe esse espaço (confirmado pelo Gabriel em 22/07).
**Por quê:** locação de loja não tem Black Friday. Quem quer vender no Natal precisa **assinar em
outubro** — em novembro não dá tempo de montar loja, contratar e comprar estoque. A duração de 45
dias vem do ciclo B2B ser de semanas a meses (registrado na conta); 15 ou 30 dias não deixam o lead
maturar até a assinatura. Ângulo é **urgência com data real**, não desconto nem isca financeira —
mantém a preferência de falar com o lojista estabelecido.
**Impacto:** agosto tem **um pedido D-60 a disparar** (14/08), numa fila de criação já ~21 dias
atrasada. Escalar à gerência no mesmo dia do pedido.

**2026-07-21 — B2B / Política com o comercial**
**Decisão:** **construir toda a infra primeiro (LP, formulário, integração CVCRM), e só depois
cobrar do comercial o retorno de lead→contrato.**
**Contexto:** no período 06-21→07-21 não houve nenhum retorno nem conversa do comercial sobre
os leads B2B. A relação é politicamente delicada.
**Por quê:** cobrar retorno sem ter entregue a infra enfraquece a posição; com a cadeia pronta e
os leads chegando etiquetados no CVCRM, a cobrança passa a ser sobre um fluxo que já funciona,
não sobre uma promessa. Chegar com entrega feita muda quem está devendo.
**Impacto:** a ressalva permanente do gap de CRM (seção 2) segue ativa e o CPL continua sem
validação de qualidade até essa cobrança acontecer. Reabrir assim que a integração estiver no ar.

**2026-07-21 — Método / Registro (todas as frentes)**
**Decisão:** não estimar retroativamente números e datas que não foram registrados. Registrar o
**fato qualitativo** com ressalva explícita, e adotar **2026-07-21 como marco zero** do registro
contínuo com data e valor.
**Contexto:** backfill de ~30 dias. Na frente B2B, a depuração do CBO foi feita por pausas quase
diárias sem log; o resultado direcional (leads ↑, custo ↓) é lembrado, os números não.
**Por quê:** número inventado contamina a fonte de verdade e vira base de decisão errada depois.
Fato sem número é honesto; número sem fonte é dívida. Alinha com a ressalva permanente de
rastreamento não auditado.
**Impacto:** o histórico pré-21/07 fica qualitativo e assumidamente incompleto; daqui pra frente
toda mudança de campanha entra no changelog com data e valor. Números reais entram só via export.

**2026-07-17 — Marca / B2B**
**Decisão:** "Primeiro mês grátis / sem fiador" rebaixado de regra proibida para **preferência
atual reavaliável**.
**Contexto:** onboarding ArqOS. A fonte de verdade e o teardown tratavam como `[TRAVADO]`.
**Por quê:** preço vende e a isca financeira pode trazer lojista; é decisão de dados, não dogma.
**Impacto:** por ora seguimos evitando (hipótese: atrai perfil errado), mas destrava se um
teste mostrar lojista qualificado. LP atual segue urgente de trocar pelos demais defeitos.

**2026-07-17 — B2C / Fluxo**
**Decisão:** número público de fluxo = ~200 mil/mês · ~6 mil/dia · ~10 mil fim de semana.
**Contexto:** média medida da amostra 01/05–15/07 é ~170 mil/mês; amostra curta, eventos
elevam o fluxo, ferramenta não é verdade absoluta.
**Por quê:** número é gancho de atenção na LP; comercial contextualiza no atendimento.
**Impacto:** baseline medido guardado como uso interno; nunca publicar acima do que uma
amostra maior sustentar.
