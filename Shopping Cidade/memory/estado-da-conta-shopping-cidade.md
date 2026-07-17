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
3. `[RESSALVA]` **Budget Google.** Split **confirmado pelo Gabriel em 2026-07-16: B2C ~R$5.000/mês (PMax), B2B ~R$15.000/mês (Search).** Conflito anterior resolvido (uma fonte antiga tinha os valores invertidos, agora `[SUPERADO]`). A ressalva que permanece não é de valor, é de rastreamento: com a tag de conversão B2B ainda quebrada (seção 6), o dado de retorno do Google B2B não é confiável mesmo com o budget correto.
4. `[PENDENTE]` **AIV (Ações de Intenção de Visita).** Framework de métrica de fluxo B2C aceito, mas engavetado. Reabrir em meses futuros, não é o objetivo de trabalho atual. Cinema e eventos são a fonte natural de sinais de intenção de visita quando reabrir.

---

## 3. ESTADO ATUAL — META B2C

**Estrutura antiga** `[SUPERADO]` (a desativar, mantida em paralelo até aprovação de desativação): uma campanha com tudo dentro, conjuntos duplicados, 48-50 criativos por conjunto, pulverização que mata aprendizado por criativo, turbinamento orgânico avulso sem critério.

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

**Protocolo do carrossel de ofertas:** subir os novos carrosséis (até 8 cards: capa + ofertas + encerramento) **antes** de desativar os da semana anterior, para evitar gaps de entrega durante a revisão do Meta. Cadência de refresh: **quarta / sexta / segunda**. Social media entrega os criativos de oferta toda quarta.

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

- **Search "CA [Pesquisa] [Lojas]"** `[EM EXECUÇÃO]`: único ativo B2B real. Sinais de demanda saudáveis (CTR ~7,8%).
- `[URGENTE]` **Falha crítica de rastreamento:** todas as "conversões" dos últimos meses foram **100% Store Visits** (métrica B2C), não leads.
- **Ação de conversão correta** ("Formulário Otimizado Comercial"): **zero conversões desde a criação.** A tag nunca disparou, provavelmente porque o componente de formulário do RD Station é um elemento fechado que o GTM não captura no modo padrão.
- **Sequência travada** `[TRAVADO]`:
  1. Desbloquear acesso ao RD Station.
  2. Corrigir a tag (preferência: **integração nativa RD Station → Google Ads**, não gambiarra via GTM).
  3. Tornar o Formulário a **única conversão primária**.
  4. Acumular 7-14 dias de dado real de lead.
  5. Só então reestruturar.
- **Contingência:** mudar para Maximizar Cliques com teto de CPC **só se** o acesso ao RD Station atrasar semanas (trade-off: reseta o aprendizado).
- **Naming convention Google Ads:** `[Cliente | Frente | Tipo | Tema]`.
- Budget: **~R$15.000/mês** (confirmado 2026-07-16, ver seção 2).

---

## 7. RD STATION E GAP DE CRM

- Leads Meta B2B **chegam no RD Station** e completam o fluxo de automação "Comercial", mas **não chegam ao time de vendas**.
- O gap está entre o RD Station e um CRM downstream desconhecido. `[PENDENTE]` **Identidade do CRM não resolvida.**

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
| Resolver gap RD Station → CRM (identidade do CRM desconhecida) | `[PENDENTE]` | Comercial / TI Gadens |
| Corrigir tag de conversão Google B2B (integração nativa RD Station preferida) | `[PENDENTE]` | Gabriel + acesso RD Station |
| Confirmar split de budget Google B2C vs B2B | `[RESOLVIDO 2026-07-16]` B2C R$5k / B2B R$15k | Gabriel |
| Construir infra B2B do zero: LP, forms, captura | `[PENDENTE]` | Gabriel + design/dev |
| Introduzir Google Ads no B2B (Search) e confirmar Search B2C paralelo antes de keywords/negativas/briefings | `[PENDENTE]` | Gabriel |
| Feedback do comercial ligando lead a contrato assinado (validação crítica) | `[PENDENTE]` | Comercial |
| Levar AIV à gestão quando o objetivo alcance amadurecer | `[PENDENTE]` | Gabriel / gestão |
| Documentar performance das 30 ofertas simultâneas para decisão da gestão | `[PENDENTE]` | Gabriel coleta |
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

---

*Fim do arquivo. Manter a seção 15 sempre atualizada. Estado sem registro no changelog é estado que se perde.*
