# changelog.md — Diário Vivo do Sistema · Shopping Cidade

> **Registrar TUDO aqui, sempre** (pedido do Gabriel). Toda ação relevante — análise,
> criação, mudança de campanha, decisão, correção — vira uma linha datada.
> Formato: `AAAA-MM-DD` · frente/área · o que foi feito.
> Mudanças de ESTADO também entram na fonte de verdade (`../memory/estado-da-conta-shopping-cidade.md`, seção 15).

---

## 2026-07-21 — B2C · Backfill de mídia paga (período 2026-06-21 → 2026-07-21)

**✅ Estrutura antiga B2C COMPLETAMENTE DESATIVADA.** Resolve a pendência que estava como
`[SUPERADO]` "a desativar, mantida em paralelo até aprovação". **Exceção: os turbinar**, que
seguem fora de controle (abaixo).

**Protocolo do carrossel — rodou, mas com desvio:** a subida **rodou toda semana na quarta**,
sem falha, e a social media entregou. **Não foi possível executar as desativações de sexta e
segunda.** Mitigante real: a **quantidade de anúncios caiu** — hoje são só **2 a 4 carrosséis**,
o que faz tudo rodar mesmo sem o ciclo completo. Ou seja: a cadência efetiva virou
**refresh na quarta**, não quarta/sexta/segunda. Registrar como protocolo real, não como falha.

**🔴 Turbinar fora de controle — estouro de verba.** Houve **mais turbinar do que o acordado**
no período. Consequência direta: **os valores das campanhas foram alterados** para garantir que a
verba máxima não fosse ultrapassada. Portanto **os valores do Alinhamento 06/07 (Engajamento
R$266/dia · Ofertas R$180/dia · Institucional R$50/dia) NÃO são mais exatos.**
`[PREENCHER]` valores vigentes — virão no export de campanhas.

**2026-07-20 — Escalada do problema do turbinar.** Gabriel expôs o problema em **reunião com a
gerente e o coordenador**. Encaminhamento: atuação **mais incisiva** sobre o turbinar, que está
**"em reconstrução"**. `[PREENCHER]` nomes exatos dos participantes e o que ficou combinado.

**30 ofertas simultâneas (diretriz de gestão):** segue **só operação, sem análise**. Gabriel não
analisou praticamente nada ainda. Plano declarado: **terminar primeiro as estruturas mais graves**
e só então começar a analisar de fato e levar os pontos fundamentais à gestão.

**`[PREENCHER]`:** números de alcance/gasto B2C de julho (virão nos exports).

---

## 2026-07-21 — B2B · Backfill de mídia paga (período 2026-06-21 → 2026-07-21)

Recuperação do que aconteceu na frente **B2B** e não estava registrado. Eixo: performance de mídia paga.

**Meta B2B (CBO existente) — o que de fato aconteceu:**
- Campanha **segue rodando**, agora **apenas com os conjuntos e anúncios que performam a baixo custo**.
- A "reestruturação" não foi feita como evento único: foi executada na prática por **pausas quase diárias** ao longo do período, até restar só o que performa. Coerente com a sequência travada (pausar fracos, enxugar criativos), porém **sem registro de datas por ação**.
- **Resultado direcional:** número de leads **cresceu**, custo **diminuiu**. `[RESSALVA]` Sem número auditado e sem datas exatas — **decisão explícita do Gabriel (2026-07-21) de NÃO estimar retroativamente**. Não preencher com chute.
- **Novas campanhas NÃO lançadas** — dependem da **integração do CRM (CVCRM)**, que é o próximo passo da sequência.

**Criativos B2B:** aguardando **produção pela gestão**; Gabriel **cobrou novamente** no período. Por isso a copy aprovada ("Você tem a melhor loja da rua errada") **ainda NÃO está rodando** como anúncio — segue no arquivo esperando criativo + integração.

**Google B2B:** **nenhuma alteração no período** ("nem encostei"). Motivo declarado: sobrecarga de demandas nos **últimos ~15 dias** (≈2026-07-06 → 2026-07-21). Logo seguem intocados: falha de rastreamento (conversões 100% Store Visits), tag "Formulário Otimizado Comercial" sem disparo, e o desbloqueio de acesso ao RD Station.

**Budget Meta B2B:** **manteve** ~R$10k/mês no período, sem corte nem realocação.

**Criativos B2B (gargalo):** briefing pedido com **criativos específicos por segmento**. Estão **em produção, com ~21 dias de atraso** (deveriam estar prontos por volta de **2026-06-30**). Gabriel **já escalou para a gerência** e **não tem mais ação a tomar** — só aguardar. **Os primeiros começaram a chegar.** Plano de uso: iniciar os **testes do novo formulário** com esses primeiros + **1 ou 2 criativos já validados**.

**Comercial (interface com a mídia):** **sem retorno e sem conversa** no período. Situação **política e delicada**. Estratégia deliberada do Gabriel: **primeiro construir tudo (LP, forms, integração), depois cobrar o retorno** de lead→contrato. Nenhuma objeção nova chegou até ele que mudasse ângulo de criativo.

**🔓 DESBLOQUEIO — acesso ao CVCRM concedido em 2026-07-20 (fim do dia).** Os acessos foram pedidos formalmente e o do CVCRM saiu. Gabriel pretende **executar as integrações imediatamente, a princípio ainda em 2026-07-21**. Isso destrava a cadeia que estava parada (integração → campanha → LP).

**Status dos 4 acessos (2026-07-21):**

- ✅ Acesso ao **CVCRM** — concedido 2026-07-20 (fim do dia)
- ✅ **Admin da Página Meta** — Gabriel já é admin (pré-requisito da integração nativa cumprido)
- ⏳ **Subdomínio + token de API CVCRM** — ainda em andamento
- 🔧 **Código de origem dos leads** — Gabriel vai tentar **configurar ele mesmo**, sem depender de terceiros

**Ordem de teste de captura definida:** primeiro o **formulário instantâneo do Meta** (desenvolvido pelo Gabriel), depois **testes com a LP** para comparar **qual converte melhor**. O instant form entra antes por não depender de deploy nem de credenciais de API.

**🔴 RISCO ABERTO — LP antiga ainda em produção recebendo tráfego pago.** Gabriel não sabe confirmar qual campanha aponta pra ela; **hipótese dele: era usada só pelo Google**, e portanto **segue recebendo tráfego enquanto a campanha roda**. Se confirmado, o Google B2B (~R$15k/mês) está mandando tráfego para uma página que: (a) tem posicionamento **desalinhado** ("aluguel grátis, sem fiador" → recruta o perfil oposto ao ICP), (b) tem formulário que **não qualifica** + captcha amador, (c) está no **WordPress com injeção de spam de apostas**, e (d) cuja tag de conversão **nunca disparou**. `[PREENCHER]` confirmar o destino real das campanhas Google B2B.

**Prazo assumido — 2026-07-23 (quinta):** Gabriel travou **um único dia de agenda** só para Google, com objetivo de criar/finalizar a estrutura de **Autoshopping + Shopping B2B + B2C**. Escopo realista assumido por ele: **corrigir primeiro o que for mais absurdo e urgente**; o que não couber segue em paralelo nos dias seguintes. (Prioridade sugerida no registro: confirmar o destino das campanhas Google B2B — verificação de minutos que decide se há incêndio.)

**Restrição operacional declarada (contexto, não queixa):** enquanto a estrutura não estiver organizada, a rotina é **apagar incêndio e executar o dia inteiro**, com pouca margem para **pensar, planejar e antecipar**. Isso explica boa parte da dívida de log e do Google intocado por 30 dias. Registrar como condição real de capacidade ao definir prazos — não prometer o que essa rotina não comporta.

**Spam de apostas no site:** Gabriel **já repassou a informação** e considera encerrada a sua parte — **não é função dele** e a decisão consciente é **não abraçar o problema**. Mitigação adotada: **construir a LP nova "por fora"** (Netlify), sem depender do WordPress comprometido. `[RESSALVA]` a mitigação protege a LP nova, mas **não** as campanhas que hoje ainda apontam para o domínio comprometido.

**Governança do B2B:** nada foi demandado externamente no período — **o B2B só anda porque o Gabriel puxa as rédeas**. Sem input de gestão, sem cobrança, sem reunião. Registrar como característica da conta, não como queixa.

**✅ EXPORTS PROCESSADOS (01-21/07):** **121 leads B2B a CPL R$33,41**, gasto R$4.042,40. Contra o baseline (~140-150 leads/mês a **R$58**), o CPL caiu **~42%** e o volume projeta **~178 leads/mês** — **melhorou nas duas pontas**, confirmando com número o que estava registrado só de memória. ⚠️ B2B projeta **~R$5.967/mês contra budget de R$10.000** — ~R$4.000/mês parados na frente de melhor CPL da conta.

**MARCO ZERO:** a partir de **2026-07-21**, toda mudança na frente B2B passa a ser registrada com **data e valor**, sem retroatividade estimada.

---

## 2026-07-20 — B2B/Integração · Roteamento de leads e rastreamento (BLOQUEADO por acesso)

Definida a arquitetura de entrega dos leads das duas fontes B2B ao comercial e o rastreamento.

**Modelo:** separar (A) entrega do lead ao comercial [roteamento] de (B) rastreamento de
conversão [otimização de mídia] — estavam sendo confundidos. Destino único: **CVCRM**.
Cada fonte etiquetada por origem. **RD Station sai do fluxo B2B** (é o elo furado atual).

**Confirmado por pesquisa:** o CVCRM tem **integração NATIVA com Meta/Facebook Lead Ads**
(cvcrm.com.br/integracao/facebook). Logo, o formulário instantâneo não precisa de RD Station
nem Zapier.

**Formato 1 — Formulário instantâneo Meta → CVCRM (nativo):** CVCRM › Integrações › Meta/
Facebook Lead Ads › conectar a Página (exige ser Admin da Página) › mapear campos
(Nome→nome, WhatsApp→telefone, Segmento→campo custom) › origem "Meta Ads B2B" › testar.

**Formato 2 — Formulário da LP → CVCRM (API):** LP no Netlify + Netlify Function (guarda o
token) › `POST` API CVCRM (`https://{subdominio}.cvcrm.com.br/api/v1/...`, auth e-mail+token)
› origem "Site LP B2B" › dispara evento Lead no pixel do Shopping. LP ainda não publicada.

**Rastreamento (tela de publicação do anúncio Meta):** DESMARCAR "Eventos de CRM" — puxava o
dataset "Pixel Morá - gas rocket" (185598782144030), que **não é do Shopping Cidade** (é de
outra conta/agência no Business Manager). Manter só "Eventos do site" = Pixel de Shopping
Cidade Curitiba (234559080256415). O evento de Lead do formulário instantâneo é **nativo do
Meta** — rastreamento já garantido, independente do pixel. "Eventos de CRM" (devolver status
down-funnel ao Meta) fica para fase 2, após o CVCRM ligado.

**BLOQUEIO:** aguardando **liberação de um usuário/acesso** para concluir as integrações e
publicar a campanha. Pendências a cobrar do comercial/TI Gadens:

- Acesso admin ao CVCRM (configurar integrações)
- Gabriel ser Administrador da Página do Meta (autorizar integração nativa)
- Subdomínio CVCRM + e-mail + token de API (para a LP)
- Código de origem usado pelos leads (etiquetar as duas fontes)

**CORREÇÃO CHAVE (a conexão parte do CVCRM, não do Meta):** na tela do Meta
(`Ferramentas › Formulários de anúncios de lead › Lead Integration › Conectar CRM`) o
dropdown só lista parceiros diretos do Meta (Google Sheets, Zapier, HubSpot, Salesforce...).
**O CVCRM NÃO aparece aí e nunca vai aparecer — isso é normal, não é erro.** A integração
nativa é iniciada DENTRO do CVCRM (Integrações › Meta/Facebook Lead Ads › login no Facebook
com conta Admin da Página › autorizar › escolher formulário › mapear campos). O papel do
Gabriel na tela do Meta é zero configuração: só ser Admin da Página e autorizar o popup.
Plano B (só se o nativo falhar): Zapier na própria tela "Conectar CRM".

**ALERTA (print 2026-07-20):** havia uma **"New Google Sheets Integration"** ATIVA num
formulário de lead — checar se é intencional; pode haver lead caindo numa planilha esquecida.
Ao ligar o CVCRM, remover a do Sheets pra não duplicar.

**Guia operacional completo criado:** `operations/integracao-leads-b2b-cvcrm.md` (feito para
uma sessão futura retomar do zero — a conversa atual será excluída). Copy do anúncio já pronta
(ver entrada abaixo). Nada publica até a liberação do acesso.

---

## 2026-07-20 — B2B/Copy · Anúncio de lead (formulário instantâneo Meta)

Produzida a copy do anúncio B2B com formulário instantâneo do Meta (novo forms já
desenvolvido pelo Gabriel). Salva em `marketing/campanhas/copy-anuncio-b2b-meta-forms.md`.
Duas versões (V1 recomendada, V2 mais seca) sobre o hook âncora aprovado
**"Você tem a melhor loja da rua errada."** Corpo curto, tom quente, sem travessão,
sem número de fluxo (veto legal), foco no lojista estabelecido. Banco de 3 ganchos
alternativos para teste posterior de 1ª linha. Botão do formulário: `Saiba mais`.

---

## 2026-07-17 — Instalação do ArqOS (Perfil 4 — Outro negócio)

**Onboarding conduzido via `Geral/onboarding/INSTALAR.md`.** Materiais pré-existentes lidos
e tratados como Etapa 3; estrutura padrão preservada, núcleo ArqOS complementado.

**Pastas criadas:** `core/`, `company/`, `products/`, `playbooks/`, `roadmap/`, `logs/`
(preservadas: `branding/`, `marketing/`, `sales/`, `operations/`, `memory/`).

**Arquivos criados:**
- `core/core.md` — DNA das duas frentes, regra central, posicionamento por público, princípios
- `company/company.md` — estrutura, endereço, números real vs público, equipe, propriedades
- `branding/brand.md` — cores, Poppins, tom, preferências de mensagem (B2C preço ok / B2B evita por ora)
- `sales/icp.md` — ICP B2B (lojista estabelecido) + segmentos aprovados + público B2C
- `sales/funil.md` — funil B2B, gap RD Station→CRM, geração de lead, hierarquia de métricas
- `sales/scripts/objecoes.md` — objeção-mãe ("por que aqui?") e objeções por segmento
- `operations/fluxo.md` — rotinas semanais, dependências críticas (Gabriel = ponto único de falha)
- `playbooks/refresh-ofertas-b2c.md` — protocolo carrossel quarta/sexta/segunda
- `playbooks/reestruturacao-b2b-meta.md` — sequência travada do CBO
- `marketing/estrategia.md` — alocação e estrutura de canais das duas frentes
- `marketing/calendario.md` — cadência fixa + template 30 dias
- `memory/estrategia.md` — foco atual, definição de sucesso 30 dias, o que não pode dar errado
- `memory/conhecimento.md` — inteligência acumulada e princípios provados
- `memory/decisoes.md` — registro de decisões (com as 2 decisões de hoje)
- `memory/campanhas.md` — campanhas ativas e referência jun/2026
- `roadmap/roadmap.md` — pendências priorizadas (urgente/30d/horizonte)
- `CLAUDE.md` — reescrito para o sistema ArqOS completo

**Decisões registradas hoje:**
1. "Primeiro mês grátis / sem fiador" rebaixado de regra travada → **preferência reavaliável**.
   Fonte de verdade e teardown reconciliados (seção 4 + changelog).
2. Número público de fluxo travado pela gestão: **~200k/mês · ~6k/dia · ~10k fim de semana**
   (baseline medido da amostra 01/05–15/07: ~170k/mês, guardado como uso interno).

**Análises feitas:**
- Fluxo real extraído do `.xlsx` (76 dias, 428.283 visitantes, média ~5.635/dia).
- Relatório de junho (PDF) lido: Meta 1,08 mi alcance / Google conversões contaminadas por Store Visits.
- Site e IG analisados ao vivo (Playwright): spam de apostas **confirmado em produção**;
  IG 129 mil seguidores, orgânico bom.

**Campos `[PREENCHER]` pendentes:** objeções reais do comercial (`sales/scripts/objecoes.md`);
calendário editorial 30 dias (`marketing/calendario.md`).

---

## 2026-07-17 — LP B2B · prompt v2 para o Stitch

- Gerado `marketing/briefings/prompt-lp-b2b-stitch-v2.md`, calibrado com ICP, segmentos e
  objeções do onboarding. Substitui o prompt v1 (marcado como superado em `briefing-lp-b2b-locacao.md`).
- v2 lidera com fluxo/crescimento (não preço), usa os ângulos por segmento e a objeção-mãe
  ("você não está comprando um espaço, está comprando fluxo pronto"), prova social "marcas que
  crescem aqui", formulário qualificador ("já tem loja em operação?") e remove o captcha de continha.
- Números do prompt = decisão pública de gestão (~200k/mês · +6k/dia · ~10k fim de semana).
  Ressalva registrada: mensal ~200k é extrapolação acima da amostra real (~170k); o diário
  (~6k) é o número mais defensável. Próximo passo: Gabriel gera no Stitch e importamos.

- **2026-07-17** · B2B/LP · **LP v2 construída à mão** (`marketing/lp-b2b/lp-shopping-cidade-b2b.html`),
  assumindo após o Stitch gerar 3 versões incompletas/quebradas (sem form, 3D quebrado, genéricas).
  Página completa: hero petróleo com gradiente animado + canvas de "fluxo", ticker, big-numbers com
  contador, blocos fluxo/para-quem-é/segmentos (ganchos do onboarding)/prova-social/como-funciona/
  formulário qualificador ("já tem loja?")/CTA band. Direção: clara e arejada, popular-vibrante (pedido
  do Gabriel), várias animações, sem foto genérica. Publicada como Artifact de preview. Pendências:
  trocar fonte p/ Poppins em produção, ligar form ao RD Station, links reais WhatsApp/Instagram,
  depoimento real, hospedagem (⚠ não subir no WordPress com spam de apostas).

- **2026-07-17** · B2B/LP · **Refactor completo da LP v2** após feedback do Gabriel (hero vazio,
  boxes vazios, tudo parecido). Mudanças: (1) hero com animação 3D "corredor vivo" em Canvas puro,
  multidão fluindo ao ponto de fuga, vitrines deslizando, parallax de mouse; (2) depoimento removido,
  substituído por card de localização com mapa SVG estilizado + botão Google Maps, SEM menção a
  ônibus (pedido do Gabriel, tubo removido de toda a página); (3) "Pet" removido do formulário (não
  autorizado pela gestão); (4) fim de semana promovido a tile hot magenta (10 mil+/dia); (5) fluxo do
  hero em chip "6 a 10 mil pessoas/dia"; (6) pillars refeitos sem ônibus: marketing coletivo, mix de
  +200 lojas (fluxo cruzado), eventos e cinema; (7) TODOS os travessões removidos da copy (marcador
  de IA, pedido do Gabriel); (8) cards mais densos (tags, micro-CTAs, subtextos); (9) faixa CTA
  oculta no mobile p/ compactar; (10) barra de progresso de scroll (padrão da LP Triunfo, usada como
  régua de qualidade). Copy fina fica para um segundo momento (pedido explícito). Republicada no
  mesmo Artifact.

- **2026-07-17** · B2B/LP · **v3 da LP com decisões de gestão.** (1) 🔴 VETO LEGAL: gestão proibiu
  divulgar números de fluxo de visitantes na LP; removidos de tiles, chips, ticker (ficam +200 lojas,
  24 anos e o dado externo PwC/Locomotiva); substituídos por claims qualitativos ("região estratégica",
  "movimento todos os dias"). Registrado na memória como soberano sobre a decisão anterior do ~200k.
  (2) Seção de segmentos REMOVIDA (pedido da gestora); animação da barra degradê transferida para os
  cards de "Três passos". (3) Hero: corredor 3D centralizado (pedido do designer), botão WhatsApp
  removido (form é o único caminho), frase de qualificação removida. (4) Mapa REAL do Google (iframe
  embed keyless) no lugar do SVG + botão; no preview aparece vazio (CSP), na produção carrega.
  (5) Formulário refeito: nome, WhatsApp, segmento, "momento do negócio" (4 opções), "tempo de
  mercado" (5 faixas), site/redes opcional; radio "já tem loja?" substituído pelo momento.
  (6) Respiro entre seções reduzido (92px → 60px; mobile 40px). Republicada no mesmo Artifact.

- **2026-07-17** · B2B/LP · **v4 com ajustes de contraste e marca.** (1) Frase de anti-persona
  ("não é para quem está começando do zero / sem praça de alimentação") REMOVIDA da seção "Para quem é"
  a pedido do Gabriel; a qualificação fica por conta do formulário. (2) Seção "O que você está
  comprando" virou banda ESCURA (petróleo) para alternar com o branco e dar contraste. (3) Tile
  "R$ 0 custo extra" removido; stats agora com 3 tiles (+200 lojas hot, 24 anos, Hauer).
  (4) Chips do hero trocados para não duplicar os tiles: eventos todos os meses, ações constantes,
  movimento seg a dom; ticker também reformulado sem números. (5) Fonte "PwC+Locomotiva 2023"
  substituída por dado atual: classe C líder do consumo em 2026, R$ 2,6 tri (IPC Maps 2026).
  (6) LOGO oficial magenta no topo: processada de `branding/LOGO CIDADE-01.jpg` (8000px JPG →
  452px PNG transparente recolorido em #E01C4C via System.Drawing), embutida em base64 no nav.
  Republicada no mesmo Artifact.

- **2026-07-17** · B2B/LP · **LP sincronizada com o Claude Design** (claude.ai/design) para validação
  visual manual pelo Gabriel. Projeto criado: "Shopping Cidade — LP B2B" (id 13d02dc4-80b9-4000-b6ff-8ca6b9f23dfe).
  12 cartões: página completa + 8 seções (hero, ticker+números, fluxo, para quem é, faixa CTA,
  localização, como funciona, formulário) + 3 fundamentos (cores, tipografia, botões/chips).
  Cada cartão é autossuficiente (CSS+JS completos). Fluxo de volta: mudanças feitas lá são lidas
  via DesignSync (get_file) e reintegradas no arquivo de produção
  `marketing/lp-b2b/lp-shopping-cidade-b2b.html`, componente a componente.

- **2026-07-17** · B2B/LP · **Sincronização de volta do Claude Design.** Comparado o remoto com o
  enviado: conteúdo dos componentes inalterado (hero byte a byte igual); a mudança real foi o Gabriel
  ter subido arquivos de logo ao projeto (logo branca fundo transparente + variações JPG). Ação:
  trocada a logo magenta pela **logo branca oficial** (de `branding/LOGO BRANCA - FUNDO TRANSPARENTE.png`,
  redimensionada/cropada, base64) no **nav e no rodapé** — melhor contraste sobre o petróleo escuro.
  Rodapé passou a exibir a logo no lugar do texto "SHOPPING CIDADE". Preview republicado; 9 cartões
  (8 seções + página) re-sincronizados no Design (CSS compartilhado também mudou: brandlogo 40→38px
  + regra brandlogo-footer).

- **2026-07-17** · B2B/LP · **Sistema de fundos alternados (v6).** Corrigido o excesso de peso no
  início: seção "Fluxo/O que você está comprando" voltou de escura para CLARA. Definido padrão de
  ritmo: âncoras escuras/coloridas fixas (Hero petróleo, Faixa CTA magenta, Localização petróleo,
  Rodapé petróleo) e demais seções todas claras alternando branco ↔ tom suave (novo token
  `--tone-tint`, gradiente leve, theme-aware). Ordem: stats(branco) · fluxo(tom) · para-quem(branco)
  · [magenta] · [petróleo] · como-funciona(tom) · formulário(branco). Republicado + 9 cartões
  re-sincronizados no Design.

- **2026-07-17** · B2B/LP · **Deploy e integração definidos (pesquisa).** CRM do comercial confirmado:
  **CVCRM (Construtor de Vendas)** — resolve o "CRM downstream desconhecido" da seção 7. CVCRM tem API
  nativa de cadastro de lead p/ site próprio (POST `/api/v1/`, auth e-mail+token). Plano de deploy da
  LP fechado: **Netlify estático + Netlify Function (guarda token) → API CVCRM**, sem RD Station e sem
  Zapier, tudo no plano gratuito (Gabriel não banca do bolso). Aguardando Gabriel trazer do comercial:
  subdomínio CVCRM, token+e-mail de API, código de origem. Construção da Function/form NÃO iniciada
  (pedido do Gabriel: só após confirmar credenciais).

- **2026-07-17** · B2B/LP · **Copy aprovada (v7) + pacote de deploy Netlify pronto.**
  Copy: headline "Para quem é" → "Feito para quem quer o próximo ponto" (exclusão sutil); chip do hero
  → "Ações o ano todo para atrair público"; 3º tile "Hauer" → "Custo zero / Marketing do shopping todos
  os dias"; "responsabilidade" → "trabalho"; frase da classe C ancorada ao PDV ("passa na frente da sua
  loja"); TODOS os travessões removidos (regra do Gabriel, inclusive no <title>); link do Instagram
  ligado (@shoppingcidadecuritiba). Republicado + 9 cartões re-sincronizados no Design.
  Deploy: criada pasta `marketing/lp-b2b/deploy/` com `index.html` (documento completo, form ligado ao
  Netlify Forms via AJAX + honeypot), `netlify/functions/submission-created.js` (encaminha lead p/ API
  CVCRM `POST /api/v1/comercial/leads` via env vars; no-op seguro sem credenciais), `netlify.toml` e
  `LEIA-ME.md` (guia passo a passo). Arquitetura: Netlify Forms captura imediata (grátis ≤100/mês) +
  função encaminha ao CVCRM quando Gabriel configurar as env vars. Rastreamento (pixel/GTM) fica p/
  quando rodar anúncio. Pendente: Gabriel criar conta Netlify e trazer credenciais CVCRM do comercial.

---

## 2026-07-22 · B2B · Planejamento de agosto + reconstrução do Google

**Ação na conta:** `CA [Pesquisa] [Lojas]` (Google B2B) **PAUSADA**. Motivo: o destino já é a LP
nova, ainda meio configurada — cada dia rodando sujava a linha de base dela com tráfego e conversão
lixo. Posição: melhor verba parada do que gasta sem objetivo ou retorno.

**Criado:** `marketing/briefings/plano-agosto-2026.md` (frente B2B).

**Análise de export jan–jul/2026 (7 meses), separando B2B de B2C e Meta de Google:**
- Meta B2B, série limpa (`[B2B]CA [Comercial] [Formulário]`, `leadgen.other`): CPL
  **58,69 (mai) → 47,90 (jun) → 33,41 (jul 1-21)**, com volume subindo (77 → 161 → 121 em 21 dias).
  Corrige o baseline "CPL ~R$58", que era **só maio**.
- Google B2B: parcela de impressões **travada em 31–42% em todos os patamares de gasto**
  (R$4,5k a R$10,2k), perda maior por classificação (~40%) que por orçamento (17–30%).
  **R$15k não cabem num Search só.**

**Correções de premissa (fonte de verdade atualizada):**
- Split antigo do Google (B2C R$15k / B2B R$5k) **não era erro de fonte — era o regime real até
  maio**. Inversão veio no alinhamento de julho. Export de jan–jun lê-se com a régua antiga.
- Hipótese da "LP antiga em WordPress" como destino do Google B2B: **`[SUPERADA]`**. É a LP nova.
- Gargalo real declarado pelo Gabriel: **TEMPO**. Acessos, formulário e aprovações já resolvidos.
- Regime de rotina vigente: **segunda a sexta são execução** até as estruturas estarem de pé. O
  ritual "ter/qui protegidos" é estado-alvo, não prática atual — por isso o plano é semanal.

**Decisões registradas em `memory/decisoes.md` (6):** duas frentes no Google (Search R$8k +
Demand Gen R$7k) · PMax fora com portão de outubro · pausa da campanha · verba parada = reserva de
teste · B2B não faz Black Friday, faz "Loja pronta pro Natal" (45 dias, sobe 15/10, briefing 14/08).

**Divergência registrada:** Gabriel cogitou PMax como frente dos R$15k; recomendação contrária
aceita como decisão com gatilho datado, não como recusa.

### ⚠️ CORREÇÃO NO MESMO DIA — duas afirmações retiradas do plano

Gabriel contestou, em duas rodadas, a base do dimensionamento do Search. **As duas contestações
procedem e as duas afirmações foram retiradas:**

1. *"Você diz que o dado da conta não é confiável e usa o dado da conta pra afirmar teto."* →
   a **parcela de impressões** (31–42%) é de uma campanha lanceando em "Maximizar valor da
   conversão" **treinado em Store Visits**, medida contra um keyword set estreito. Não é parcela de
   mercado. **O mercado nunca foi medido.**
2. *"Já entendi que o CPC não está contaminado, mas estava medindo OUTRA COISA."* → CPC, cliques e
   CTR são **confiáveis mas de outro objetivo de otimização**. CPC de campanha que persegue visita
   à loja ≠ CPC de campanha que persegue lead B2B. **Confiável ≠ aplicável.** É a regra de rigor
   nº 10 do próprio Gabriel, aplicada a CPC em vez de CPL.

**Conclusão que substitui as duas:** **não existe baseline histórico para dimensionar o Google B2B
novo.** Os R$15k não estão confirmados nem refutados por nada na conta.

**Mudança de desenho decorrente:** o orçamento do Search deixa de ser R$8k fixo e passa a
**R$400/dia deliberadamente NÃO restritivo**, com o freio no **teto de CPC + negativação diária**.
Com a perda-por-orçamento em ~0, o gasto resultante vira **teto medido**. Demand Gen fica com
**R$100/dia de piso** e absorve o que sobrar. O **teto de CPC passa a sair do Keyword Planner sobre
o keyword set novo** — o de R$4,50 vinha do histórico contaminado e caiu junto.

**Duas regras novas de método** (em `memory/decisoes.md`, valem para todo o grupo enquanto o
rastreamento não for auditado): declarar se a métrica que sustenta uma afirmação de limite depende
da conversão contaminada; e **métrica limpa produzida sob outro objetivo de otimização não é
baseline**.

---

_Próximas entradas abaixo, sempre datadas._
