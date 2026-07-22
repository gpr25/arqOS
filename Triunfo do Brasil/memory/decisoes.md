# decisoes.md — Registro de Decisões e Aprendizados

> Registrar aqui: decisões tomadas, argumentos que funcionaram,
> objeções novas identificadas, o que não funcionou e por quê.
> Este arquivo é a inteligência acumulada da operação.

---

## Como registrar

**[Data] — [Área]**
**Decisão/Aprendizado:**
**Contexto:**
**Por quê:**
**Impacto:**

---

## Aprendizados

**2026-07-21 — Mídia paga / Estratégia de qualificação**
**Decisão/Aprendizado:** estratégia declarada **"primeiro gira, depois qualifica"** — aceitar
volume com lead mais frio no início (especialmente no Meta) para dar giro ao funil, e só depois
apertar a qualificação.
**Contexto:** dos ~40 leads do período (21/06→21/07), os do Meta vieram **claramente mais frios e
curiosos**. Isso **não foi falha**, foi escolha.
**Por quê:** com funil novo e conversão recém-instalada, volume gera sinal e aprendizado; filtrar
cedo demais mata o dado antes de existir.
**Impacto:** não tratar lead frio do Meta como erro de segmentação neste período. A virada para
qualificação passa a ser um passo consciente, com data, não um ajuste silencioso.

**2026-07-21 — Mídia paga / Verba (ALERTA)**
**Decisão/Aprendizado:** em **2026-07-15** a verba foi reduzida para não estourar o orçamento, e o
patamar atual ficou **abaixo do limiar operacional — nem Google nem Meta conseguem rodar**.
Resultado: de ~40 leads no período para **1 lead desde 15/07**.
**Contexto:** no mesmo 15/07 também foram alterados **formatos e formulários**.
**Por quê:** restrição orçamentária, não escolha de performance.
**Impacto:** (a) este é o **problema nº1 da conta** — sem decisão de verba (ou concentrar tudo em
uma frente em vez de duas), criativo e copy não mudam nada; (b) **limitação de diagnóstico**: com
verba e formato alterados no mesmo dia, **não dá para atribuir** a queda a uma causa isolada.
Aprendizado de método: mudar **uma variável por vez** quando o objetivo for entender causa.

**2026-07-02 — Marketing / LP internacional**
**Decisão/Aprendizado:** Iniciado projeto de LP de captura de leads B2B para o mercado dos EUA (inglês), com pesquisa de concorrentes, UX/UI, SEO e animação antes da execução. Levantadas certificações reais da Triunfo (ver `company/certificacoes.md`) via triunfodobrasil.com/certificacoes — FSSC 22000, Rainforest Alliance, Fair for Life, Kosher, Selo ESG, IG-Mathe, orgânico (selo específico ainda a confirmar).
**Contexto:** Assets de marca reais (logos e fontes) foram localizados em `branding/Logos/` e `branding/FONTES/` — já versionados no repo, não são mais placeholder/pendência externa.
**Por quê:** Gabriel está construindo a frente de geração de leads internacionais como parte do foco de mídia paga dos 30 dias.
**Impacto:** LP será entregue como HTML/CSS/JS estático; leads vão para e-mail simples por enquanto (sem CRM definido); linhas de produto (folhas + extratos) ambas incluídas mas com abordagem B2B (RFQ/amostra), não catálogo.

**2026-07-02 — Marketing / LP internacional (hospedagem)**
**Decisão/Aprendizado:** Hospedagem final será no Netlify. Formulário de captura vai usar Netlify Forms nativo (atributo `data-netlify="true"`, sem necessidade de backend externo tipo Formspree) — destino de e-mail das notificações é configurado depois direto no painel do Netlify, não precisa estar definido no código agora.
**Contexto:** Gabriel ainda não tem o e-mail de destino do lead definido; selos de certificação a usar são os já listados em `company/certificacoes.md` (direto do site oficial).
**Por quê:** Netlify Forms é a opção mais simples para site estático nesse host, sem servidor ou serviço terceiro adicional.
**Impacto:** build da LP deve usar o padrão de formulário compatível com Netlify (form com `name`, `data-netlify="true"`, campo hidden `form-name`, página de fallback estático se necessário).

**2026-07-02 — Marketing / LP internacional (entrega)**
**Decisão/Aprendizado:** Primeira versão da LP construída e testada (`marketing/landing-pages/us-b2b-leads/`) — HTML/CSS/JS estático, sem fotografia real (só tipografia/cor/forma, pra não usar imagem falsa de plantação), formulário Netlify Forms com fallback AJAX, scroll-reveal com fallback de segurança (força conteúdo visível após 2.5s mesmo se a animação falhar). Testado com Playwright: desktop, mobile, FAQ accordion, envio de formulário — sem erros de console.
**Contexto:** Pesquisa de concorrentes (Nutrada, Organic Partners) e boas práticas de B2B ingredient LP mostrou padrão: hero de posicionamento + trust bar de certificação + linhas de produto (sem virar catálogo) + origem/sustentabilidade + certificações detalhadas + FAQ de procurement + form RFQ com campos qualificadores (não só 3 campos).
**Por quê:** Gabriel pediu LP conversiva seguindo o manual de marca à risca para captar leads B2B nos EUA.
**Impacto:** Pendências documentadas em `marketing/landing-pages/us-b2b-leads/README.md` — e-mail de destino do lead (configurar em Netlify após deploy), selo orgânico específico a confirmar, fotografia real opcional, prova social opcional, domínio a decidir.

**2026-07-02 — Marketing / LP internacional (animações de UX)**
**Decisão/Aprendizado:** Estudo de animação de UX aplicado à LP — princípios seguidos: só animação com propósito (NN/g), 100–300ms micro/até 500ms complexo, easing ease-out, contenção total (B2B de procurement não reage bem a motion "de agência"). Adicionado: contadores animados nos números de credibilidade, estado de loading/erro no botão de envio, validação em tempo real nos campos (borda verde/vermelha + shake), traço da folha (SVG line-draw) na seção Origin, seta com micro-nudge nos CTAs de produto, barra de progresso de leitura no topo. Tudo com fallback para `prefers-reduced-motion` e sem quebrar conteúdo se JS falhar.
**Contexto:** Testado no Playwright — contadores, validação de campo, loading/erro do botão e fluxo de sucesso todos confirmados funcionando (alguns falsos-negativos do ambiente headless: rAF é limitado em aba em 2º plano, e scroll programático via `scrollTo` não dispara igual a um scroll real — usar `mouse.wheel` pra testes futuros).
**Por quê:** Pedido explícito de estudo aprofundado de animação + "o que podemos adicionar para agregar" à LP já existente.
**Impacto:** Nenhuma pendência nova — pendências seguem as mesmas do build anterior (e-mail de destino do lead, selo orgânico específico, fotografia real opcional).

**2026-07-02 — Marketing / LP internacional (folha corrigida + revisão multiagente)**
**Decisão/Aprendizado:** Folha da seção "Our Origin" reconstruída — antes era um círculo dividido em dois (não lia como folha, sem relação com folha de erva-mate); agora é um contorno obovado com nervura central + 5 pares de nervuras laterais, animação em loop contínuo de 6s (desenha ~2,1s, mantém, recolhe, repete), com fallback de `prefers-reduced-motion`. Também rodados os agentes de SEO, UX/UI, designer e copywriter em paralelo só para levantar ideias de melhoria (sem aplicar nada) — achados completos na resposta ao Gabriel, não duplicados aqui. Resumo dos temas mais recorrentes entre os 4 agentes: falta de prova social nomeada, "Certified Organic" sem selo específico, ícones de produto em emoji (placeholder), contraste do `--sage` abaixo de WCAG AA, e a pendência de domínio final (afeta SEO/canonical).
**Contexto:** Pedido explícito do Gabriel — "solte os agentes... mas não execute mudanças, apenas traga ideias" + correção pontual da folha.
**Por quê:** Validar a LP já construída sob múltiplas lentes antes de decidir o que priorizar na próxima rodada de execução.
**Impacto:** Nenhuma mudança de conteúdo/design foi aplicada a partir dos relatórios dos agentes — aguardando Gabriel priorizar o que implementar. Ver próxima decisão quando isso for definido.

**2026-07-02 — Marketing / LP internacional (implementação pós-revisão)**
**Decisão/Aprendizado:** Implementados os achados priorizados dos 4 agentes + pedidos diretos do Gabriel: contraste WCAG AA corrigido (`--sage-text` novo token, ~5.8:1), SEO (JSON-LD Organization+FAQPage, title encurtado, robots.txt/sitemap.xml com placeholder de domínio, fontes convertidas OTF→WOFF2 via fonttools), campo País virou select fechado (EUA/Alemanha em destaque + Canadá/Reino Unido/Holanda/França/Japão + "Other" com campo condicional), pontos de designer (ícones SVG reais, letter-spacing Panton, Brittanian usado como flourish em "Our Origin", textura de folha no fundo da seção RFQ, logo maior, H3 unificado, 8º card de certificação como mini-CTA fechando o grid), pontos de copywriter (H1 reescrito com intenção comercial, CTA único no hero, copy de produto/FAQ/certificação orgânica mais específica sem inventar dado, microcopy do formulário).
**Contexto:** Leads agora também vão para Google Sheets via Google Apps Script Web App (webhook `doPost`), em paralelo ao Netlify Forms (que continua como backup silencioso). Código do Apps Script em `google-apps-script.gs`, passo a passo completo no README — depende do Gabriel fazer o deploy no Google Drive dele (sem acesso do ArqOS ao Drive) e colar a URL gerada em `SHEETS_WEBHOOK_URL` (script.js).
**Por quê:** Pedido explícito do Gabriel pra implementar os achados de contraste/SEO/país/designer/copywriter e trocar o destino do lead pra uma planilha já usada pelo time.
**Impacto:** Pendências que restam: colar a URL do Apps Script depois do deploy, confirmar selo orgânico específico, domínio final (destrava robots.txt/sitemap.xml/canonical), fotografia real (opcional), prova social (opcional), social card dedicado 1200×630 (opcional).

**2026-07-02 — Marketing / LP internacional (Google Sheets webhook — resolvido)**
**Decisão/Aprendizado:** Webhook do Apps Script testado e funcionando — leads da LP caem na aba `Leads` da planilha `triunfo-leads-lp-entrada` (Sheet ID `1uYFTcIebysblhoTlV9TvxsGx15nBbceO1YFOfOc_6TI`). Na primeira tentativa de deploy, a opção "Quem tem acesso" reverteu sozinha pra "Somente eu" e depois só permitia "Qualquer pessoa com Conta do Google" (provável política de Google Workspace da Triunfo bloqueando deploy público) — isso quebra o fluxo porque o fetch da LP é anônimo/silencioso, não consegue completar login interativo do Google. Resolvido depois que Gabriel conseguiu deixar em "Qualquer pessoa" (não sabemos exatamente como ele contornou — só sabemos que funcionou no reteste).
**Contexto:** Testado com chamada direta à API (PowerShell) e com envio real pelo formulário no navegador — os dois gravaram linha corretamente.
**Por quê:** Fechar o pipeline de lead da LP internacional antes de publicar no Netlify.
**Impacto:** Se o webhook parar de gravar no futuro, o primeiro lugar a checar é essa configuração de acesso do deployment (Apps Script → Deploy → Manage deployments → editar → "Who has access" deve estar em "Anyone"). Netlify Forms continua como rede de segurança em paralelo. Próximo passo: publicar no Netlify via drag-and-drop (escolha do Gabriel) da pasta `marketing/landing-pages/us-b2b-leads/`.

**2026-07-02 — Marketing / LP internacional (publicada em produção)**
**Decisão/Aprendizado:** LP publicada em https://triunfodobrasil.netlify.app/ via drag-and-drop. Pipeline de leads validado de ponta a ponta em produção: Netlify Forms (200) + Google Sheets (aba Leads) ambos recebendo o envio real do formulário. Um obstáculo no meio do caminho: o primeiro deploy não registrou o formulário no Netlify (POST retornava 404) porque a detecção de formulários do site estava desativada nas configurações — Gabriel ativou em Site → Forms → "Enable forms" e refez o deploy (arrastou a pasta de novo), o que resolveu. Ativar a detecção não re-escaneia deploys antigos automaticamente, precisa de um deploy novo depois de ativar.
**Contexto:** Testado com POST direto (PowerShell) e envio real pela página (Playwright) — screenshot de sucesso confirmado, sem erros de console.
**Por quê:** Fechar a publicação da LP internacional (mídia paga EUA) com o pipeline de captura de lead 100% funcional antes de direcionar tráfego pago pra ela.
**Impacto:** Site pronto pra receber tráfego. Restam as pendências não-bloqueantes já registradas no README (selo orgânico específico, domínio próprio em vez do `.netlify.app`, fotografia real, prova social, social card dedicado) e limpar as ~5 linhas de teste acumuladas no Netlify Forms e na aba Leads do Sheets (todas identificadas com "TESTE" no nome).

**2026-07-02 — Marketing / LPs (playbook criado)**
**Decisão/Aprendizado:** Criado o comando `/gerar-lp` (`.claude/commands/gerar-lp.md`) consolidando todo o processo usado na LP dos EUA — perguntas de calibragem, pesquisa, arquitetura, copy, design, animações, SEO, build autocontido, roteamento de leads (Netlify Forms + Google Sheets via Apps Script) e testes com Playwright, incluindo os gotchas técnicos descobertos na prática (contraste WCAG, detecção de formulário do Netlify precisando de redeploy, permissão "Anyone" do Apps Script revertendo sozinha, scroll programático não confiável em teste headless).
**Contexto:** Gabriel pediu um modelo padrão pra reusar em conversas futuras do Claude Code ao montar novas LPs, já que o caminho muda por projeto (mercado, idioma, destino do lead, hospedagem).
**Por quê:** Evitar redescobrir os mesmos gotchas e refazer as mesmas perguntas em cada LP nova.
**Impacto:** Próxima LP deve começar com `/gerar-lp` em vez de do zero.

**2026-07-10 — Marketing / Registro semanal de mídia paga (multi-empresa)**
**Decisão/Aprendizado:** Desenhada automação de registro semanal de Meta Ads + Google Ads na planilha mestre "GADENS — Hub de Performance Semanal" (compartilhada por 5 empresas: Triunfo do Brasil, Autoshopping Linha Verde, Shopping Cidade, ULTJ, Útil Utilidades — Sheet ID `1bu_FXc779xE0Uu100Fclzs9uudqIe2I55Z4xojFobz4`). Como é cross-business, todo o processo (skill/comando, config, estado) ficou em `~/.claude` (global) — `~/.claude/commands/registrar-midia-paga.md` + `~/.claude/loops/midia-paga/` (README, apps-script.gs, config.json, state.json) — não dentro da pasta Triunfo. Mecanismo: mesmo padrão do webhook Apps Script já validado no pipeline de leads da LP internacional (`doPost`), pois as ferramentas de Drive disponíveis só leem/criam arquivos, não escrevem células numa planilha existente; automação via navegador (Playwright) foi testada e descartada por falta de sessão autenticada. Mapeada a estrutura real de todas as abas (cada empresa tem colunas ligeiramente diferentes — ex.: Shopping Cidade Google não tem "Alcance" mas tem "Parcela de Impressões de Pesquisa"; colunas CTR/CPC/CPM/CPL/Taxa Conv. já são fórmula e nunca devem ser sobrescritas). Caminho de longo prazo: Supermetrics (autorização pendente do Gabriel via claude.ai) escrevendo direto na mesma planilha; enquanto isso, fase manual (Gabriel exporta CSV, Claude registra via `/registrar-midia-paga`).
**Contexto:** Levantamento em 2026-07-10 mostrou Shopping Cidade 2 semanas atrasada (faltam 29/06 e 06/07) e Triunfo do Brasil 1-2 semanas atrasada; Gabriel confirmou fazer backfill dessas semanas junto com o próximo envio.
**Por quê:** Gabriel quer parar de registrar essas métricas manualmente toda semana, para as 5 empresas que gerencia, não só a Triunfo.
**Impacto:** Pendência bloqueante: Gabriel ainda precisa implantar o Apps Script (passo a passo em `~/.claude/loops/midia-paga/README.md`) e informar a URL do webhook + token gerado — sem isso, `webhook_url`/`webhook_token` ficam vazios em `config.json` e o comando se recusa a gravar. Depois do deploy, primeiro uso deve incluir o backfill combinado acima.

**2026-07-10 — Marketing / Registro semanal de mídia paga (pivô para API real)**
**Decisão/Aprendizado:** Gabriel recusou o caminho Apps Script/export manual (registrado acima) por ainda depender dele exportar CSV toda semana — quer automação real ponta a ponta. Vai configurar o Google Cloud Console (Google Ads API para puxar dados automaticamente + Google Sheets API via service account para escrever direto na planilha, sem Apps Script). Ficou bloqueado por não ter o cartão de crédito à mão para concluir o cadastro/billing do Console. Documentado como pausado em `~/.claude/loops/midia-paga/README.md` — o mapeamento de abas/colunas em `config.json` continua válido, só muda o mecanismo de escrita.
**Contexto:** Sinalizado a Gabriel que o Google Cloud Console resolve só o lado Google (Ads API + Sheets API) — Meta Ads precisa de configuração separada no Meta for Developers / Facebook Business (Marketing API + token de acesso ao Business Manager), ainda pendente.
**Por quê:** Preferência explícita por automação 100%, sem intervenção manual semanal.
**Impacto:** Aguardando Gabriel voltar com o Google Cloud Console configurado para retomar. Falta ainda resolver a credencial do lado Meta antes de fechar os dois lados do pipeline.

**2026-07-15 — Marketing / LP internacional (rastreamento GTM + GA4 + UTM)**
**Decisão/Aprendizado:** Instalado rastreamento na LP (`marketing/landing-pages/us-b2b-leads/`): snippet do GTM `GTM-WGZ488V` (arquitetura GTM-first — GA4 e Ads configurados dentro do GTM, não hardcoded), captura de UTM/gclid/fbclid/referrer no carregamento (first-touch por sessão, em sessionStorage), evento `generate_lead` no dataLayer no sucesso do form, e envio dos dados de atribuição junto pro Google Sheets (colunas novas H–O: UTM Source/Medium/Campaign/Term/Content, GCLID, FBCLID, Referrer). GA4 = propriedade NOVA "Triunfo — LP US B2B", Measurement ID `G-8V3RQYZ2G8`. Testado localmente com Playwright: com UTM (captura completa + payload + generate_lead), sem UTM (não quebra), GTM carrega de verdade, zero erros de console.
**Contexto:** Diagnóstico dos prints do Gabriel: as conversões "Configuração incorreta" no Google Ads ("Formulário" e "Lead form - Submit") são do SITE `triunfodobrasil.com` e do lead form do próprio Ads — NÃO da LP; problema separado, do site, que exige acesso ao código do .com (não temos). A LP estava zerada de rastreamento (Tag Assistant = 0 tags), o que era esperado. Já existia contêiner GTM (34358939 interno / público GTM-WGZ488V) monitorando o domínio da LP, e propriedades GA4 "LP Exterior" e "Triunfo do Brasil – GA4" — Gabriel optou por criar propriedade GA4 nova e limpa.
**Por quê:** Medir tráfego/conversão da LP e atribuir cada lead à origem (campanha/anúncio), já que roda Google Ads + Meta Ads.
**Impacto:** 3 passos manuais pendentes do lado do Gabriel (documentados no README da LP): (1) adicionar colunas de atribuição na aba Leads + reimplantar o Apps Script; (2) configurar tag GA4 + gatilho generate_lead no GTM e PUBLICAR o container; (3) criar conversão nova dedicada no Google Ads (não reaproveitar as antigas do site). Rastreamento instalado SEM banner de consentimento por decisão do Gabriel — exposição GDPR pro tráfego alemão a resolver depois (Consent Mode v2 + banner). Nada foi para produção ainda — deploy no Netlify continua manual (drag-and-drop) e depende do OK do Gabriel.

**2026-07-15 — Marketing / LP internacional (imagem de fundo, textura de folha)**
**Decisão/Aprendizado:** Gerada imagem estática standalone de textura de fundo (folha de erva-mate, paleta da marca, verde escuro) para uso em formulários e materiais relacionados — 1920×1080, PNG + WebP, 26 folhas espalhadas em opacidade baixa (0.018–0.032), layout pseudo-aleatório com seed fixa (mulberry32, grid 6 colunas com jitter) pra não empilhar visualmente. Renderizada via Playwright (screenshot de HTML/SVG). Entregue em `branding/Backgrounds/bg-leaf-texture-forest.png` e `.webp`.
**Contexto:** Pedido inicial era só a imagem — Gabriel foi explícito que a LP já estava pronta e NÃO era pra integrar a imagem nela ("Desconsidere o restante"). Uma cópia inicial que eu tinha colocado em `assets/img/` da própria LP foi removida assim que ele avisou.
**Por quê:** Uso futuro em formulários/materiais fora da LP atual (não especificado qual peça exatamente).
**Impacto:** Nenhuma mudança na LP publicada. Arquivo fica disponível em `branding/Backgrounds/` para quando Gabriel decidir onde aplicar.

**2026-07-15 — Marketing / LP internacional (rastreamento GTM+GA4 — depuração e status real)**
**Decisão/Aprendizado:** Depois da instalação inicial (entrada anterior do mesmo dia), Gabriel configurou e publicou as tags no GTM por conta própria — versão 28 "LP - Rastreamento de Lead (GA4 generate_lead)" e versão 29 "PageView-LPNetflify", ambas publicadas 15/07/2026. Confirmado funcionando de ponta a ponta via GTM Preview (`generate_lead` disparou) e GA4 Tempo Real (`page_view`, `form_start`, `generate_lead`, `scroll`, `user_engagement`, `first_visit` todos aparecendo lá). A tela padrão "Eventos" do Admin GA4 e o status do stream de dados mostraram "coleta não ativa" / zero eventos por um bom tempo mesmo com dado confirmado chegando — isso é atraso normal do pipeline de relatório do GA4 (separado do Tempo Real/DebugView, que são praticamente instantâneos), característico de propriedade recém-criada, não um problema de configuração.
**Contexto:** Identificado um problema real, ainda **não confirmado como resolvido**: o contêiner GTM `GTM-WGZ488V` é compartilhado com o site principal (`triunfodobrasil.com`), e a tag GA4 Configuration pode estar disparando também lá (visto "Home - Triunfo do Brasil" aparecendo no Tempo Real da propriedade nova "Triunfo — LP US B2B"), contaminando a propriedade nova com tráfego do site antigo. Gabriel foi orientado a restringir o gatilho a "Nome do host contém netlify.app" e publicar de novo, mas isso não foi reconfirmado nesta sessão. Também errei uma orientação: falei que existia um botão "Novo evento-chave" pra marcar `generate_lead` como conversão manualmente antes dele aparecer na lista — Gabriel confirmou que **esse botão não existe** na interface atual do GA4 (só "Criar evento", que serve pra outra coisa). Não há como pular a espera do processamento pra marcar evento-chave.
**Por quê:** Fechar o pipeline de atribuição/conversão da LP antes de escalar tráfego pago.
**Impacto:** Gabriel decidiu esperar até 2026-07-16 pra ver se o processamento do GA4 resolve sozinho. Se não resolver, o combinado é criar um **contêiner GTM novo, dedicado só à LP** (sem herdar tags/gatilhos do site principal) — elimina de vez o risco de contaminação cross-site. Pendente pra próxima sessão: (1) confirmar se a correção do gatilho por hostname realmente impediu novos hits do site principal na propriedade da LP; (2) marcar `generate_lead` como evento-chave assim que aparecer em Admin → Eventos → Eventos recentes; (3) importar a conversão pro Google Ads (Passo 4, inalterado — não reaproveitar conversões antigas do site). As colunas de atribuição no Sheets (Passo 1) já estão confirmadas funcionando em produção (lead de teste real trouxe as 15 colunas certas) — pode ser tratado como concluído.

**2026-07-16 — Marketing / LP internacional (rastreamento — evento-chave resolvido)**
**Decisão/Aprendizado:** `generate_lead` finalmente apareceu em Admin → Eventos → Eventos principais do GA4 (era só o atraso de processamento da propriedade nova, como previsto) e Gabriel marcou como evento-chave — confirmado pela estrela preenchida e pelo streaming "LP USA B2B" ativo no print. Novo teste rodado depois disso mostrou o funil todo no Tempo Real (`generate_lead`, `page_view`, `scroll`, `form_start`, `session_start`, `user_engagement`) na propriedade certa, origem `(direct)` na página da própria LP ("Organic Yerba Mate Supplier...") — sem "Home - Triunfo do Brasil" aparecendo neste teste, indício de que a contaminação cross-site não está poluindo (a confirmar com mais volume ao longo dos dias).
**Contexto:** Durante o teste apareceu um aviso do Tag Assistant ("ative o contêiner do Gerenciador de tags para depuração"). Esclarecido ao Gabriel que é só uma sugestão opcional do Tag Assistant pra debug mais rico (abrir a página pelo modo Visualizar/Preview do GTM), **não é erro** — as tags estão comprovadamente funcionando. Os eventos `close_convert_lead`, `purchase` e `qualify_lead` aparecem sem streaming detectado: são eventos de funil pré-definidos que ainda não dispararam, normal.
**Por quê:** Fechar o pipeline de conversão antes de escalar tráfego pago.
**Impacto:** Item "marcar `generate_lead` como evento-chave" está **resolvido**. Segue aberto/próximo: importar a conversão pro Google Ads a partir desse evento-chave (criar conversão NOVA, não reaproveitar as antigas "Formulário"/"Lead form - Submit" do site principal). Contaminação cross-site rebaixada de "problema aberto" para "monitorar com mais volume" — não bloqueia a importação pro Ads. Plano B do contêiner dedicado só à LP fica arquivado como fallback, não mais acionado por ora.

**2026-07-16 — Marketing / LP internacional (conversão no Google Ads — concluída)**
**Decisão/Aprendizado:** Conversão `generate_lead` importada do GA4 pro Google Ads e configurada como Principal (ver detalhes no changelog 2026-07-16). Pontos de decisão que valem registro: (1) **codificação automática (auto-tagging) tem que estar ligada** — é o que amarra a conversão ao clique do anúncio; sem ela, zero conversões no Ads mesmo com leads chegando. (2) A conta tinha **aplicação automática de recomendações ligada com 5 automações de lance** (Maximizar conversões, tCPA, ajustar CPA) — o Google estava trocando a estratégia sozinho ("4 recomendações aplicadas automaticamente" no aviso). Desligamos tudo pra manter controle manual. (3) A meta padrão "Enviar formulário de lead" tinha 2 conversões Principais: a nossa `generate_lead` e a `Formulário` do site principal. Não é problema pra campanha da LP porque o tráfego da LP (netlify.app) só dispara `generate_lead` — a `Formulário` (site principal, outro domínio) é inerte pra ela. Não rebaixar/mexer nas conversões do site antigo (atendem outras campanhas).
**Contexto:** Campanha é de Pesquisa (Search), aponta pra LP. Gabriel decidiu manter o lance em **Maximizar cliques** até acumular ~15–30 conversões, depois migrar pra Maximizar conversões — evita o comportamento instável de Smart Bidding sem histórico. No lance de cliques, a conversão **continua sendo contada**, só não guia o lance ainda.
**Por quê:** Fechar o rastreamento de conversão antes de escalar mídia paga, com controle manual da estratégia.
**Impacto:** Google Ads pronto. Status "Conversões pendentes" é normal e some quando o 1º lead de anúncio fluir (latência de import do GA4 até 24–48h). Não reaproveitar as conversões antigas "Formulário"/"Lead form - Submit".

**2026-07-16 — Marketing / LP internacional (Meta Pixel + CAPI — adiado por conflito no GTM)**
**Decisão/Aprendizado:** Montado Pixel + CAPI do Meta pra permitir campanhas de leads/tráfego no Meta apontando pra LP. Arquitetura: **Pixel hardcoded na LP** (não no GTM), evento `Lead` no sucesso do formulário com `event_id`; **CAPI via Apps Script** (reaproveitando o webhook que já grava o lead), com deduplicação pelo `event_id`, hash SHA256 de e-mail/nome, e token guardado nas **Propriedades do Script** (`META_CAPI_TOKEN`, `META_DATASET_ID`), nunca no repo. Pixel/dataset = `903988453820396` ("Triunfo", no Business "Shopping Cidade Curitiba"). **Bug que travou a ativação:** o GTM compartilhado `GTM-WGZ488V` injeta outros pixels de Meta na LP (`1314668212218720`, `517991158551582`); com eles na página, o nosso pixel **conta o evento mas não envia pela rede** (quem inicializa primeiro no fbevents ganha o ciclo de envio). Diagnosticado via Playwright na LP no ar — ver detalhe técnico em `conhecimento.md`. Correção code-only aplicada (Pixel no topo do `<head>` + `trackSingle`), mas **não verificada ao vivo**: Gabriel cansou e parou antes do redeploy final.
**Contexto:** Gabriel forneceu o token do CAPI no chat e decidiu **não** trocá-lo (fica nas Propriedades do Script). Também decidiu **não** rodar Meta pra LP agora.
**Por quê:** O GTM compartilhado já contaminou o GA4 (propriedade da LP recebendo tráfego do site principal) e agora conflitou o Pixel. Remendar caso a caso está insustentável.
**Impacto:** **Decisão firme:** quando forem ativar o Meta pra LP, criar um **contêiner GTM totalmente novo, dedicado só à LP** (sem herdar tags/pixels do site principal), em vez de continuar corrigindo o compartilhado. O código de Pixel + CAPI já está pronto no repo e é reaproveitável. Ver memória [[project-lp-meta-pixel-capi]].

**2026-07-22 — Mídia paga / Alemanha (DECISÃO VALIDADA, não pendência)**
**Decisão/Aprendizado:** **Alemanha vai a R$0 nos dois canais a partir de 01/08/2026.** Decisão
**antecipada de nov/26 para agora**, porque chegou o dado do Google e ele confirmou, por caminho
independente, o que o Meta já dizia.
**Contexto:** Meta (Regime 1, 03–14/07): **45,7% da verba → 16,2% dos leads**, CPL R$191,34 contra
R$44,06 dos EUA; no Regime 2 (15–21/07) entregou **zero leads por R$159,19**. Google (01–22/07):
**26,0% do gasto → 8,9% dos cliques**, CPC R$24,68 contra R$6,90 dos EUA, e perdendo **56,73% das
impressões por orçamento** — o R$10/dia estava escondendo o tamanho do ralo, não contendo-o.
**Por quê:** dois canais analisados **separadamente** (regra 2 respeitada — não se usou dado de um
para explicar evento do outro) chegando ao mesmo veredito. A liberação para avaliar/pausar já
estava vencida desde 17/07. Novembro só adicionaria custo à mesma conclusão.
**Impacto:** libera ~R$300/mês de Google + os R$15/dia de Meta. Só volta como "2ª praça" pela porta
de jan/27, com dado, **e** se houver razão comercial real (cliente/distribuidor/contato) —
`[PREENCHER]`, nunca confirmado que existe. **Registrar como validada por dado, não como pendência.**

**2026-07-22 — Mídia paga / Verba (CORREÇÃO de leitura anterior)**
**Decisão/Aprendizado:** o **"problema nº1 = verba abaixo do limiar operacional"** está
`[SUPERADO]`. Era problema **de julho** e expirou em 31/07.
**Contexto:** o corte de 15/07 estava **correto** — o Meta projetava ~R$4.900 contra R$4.000 e
precisava fechar o mês. Mas o run-rate resultante (R$4.050/mês) ficou muito abaixo dos **R$7.000
aprovados**, deixando ~R$2.950/mês de verba já aprovada parada a partir de 01/08.
**Por quê:** a restrição orçamentária não atravessa a virada do mês. Ler uma restrição mensal como
condição estrutural travou a conta por semanas em espera de "decisão de gestão" que não era
necessária.
**Impacto:** **o problema nº1 real da conta é OUTRO — quantas praças ela sustenta.** Teto de
R$7.000 confirmado como restrição dura e **fungível** entre canais (era R$4k Google + R$3k Meta até
maio; invertido em julho). Aprendizado de método: **distinguir restrição de mês de restrição
estrutural** antes de escalar como problema de gestão.

**2026-07-22 — Mídia paga / Quebra de regime de 15/07 e congelamento do formulário**
**Decisão/Aprendizado:** em 15/07 mudaram **duas variáveis no mesmo dia** — formulário do Meta
passou a qualificar (e-mail comercial obrigatório + confirmação) **e** verba cortada pela metade em
Meta e Google. **Consequência: o CPL de R$49,86 dos EUA não é baseline de nada.** Números reais
recuperados dos exports: Regime 1 (03–14/07, form fácil) EUA R$120/dia → **31 leads, CPL R$44,06**;
Regime 2 (15–21/07, form qualificado) EUA → **6 leads pelo Meta, CPL R$79,82**.
**Contexto:** é a **segunda vez** que se muda mais de uma variável no mesmo dia nesta conta (a
primeira está registrada em 21/07). O aprendizado de método não pegou.
**Por quê:** restaurando a verba a R$120/dia em 01/08 e **congelando o formulário**, agosto casa o
nível de investimento com o Regime 1 e a única variável diferente passa a ser a qualificação — é
assim que se descobre quanto custa o lead bom.
**Impacto:** 🔒 **o formulário não se toca durante todo o bimestre ago–set.** Agosto **não terá alvo
de CPL**, por decisão e não por omissão. **Divergência aberta:** o Meta conta 6 leads pós-15/07 e
Gabriel relatou 1 — amplitude de 5× no CPL (R$79,82 × R$478,93). `[hip]` a confirmação de e-mail
filtra ~83%. Resolver até 05/08 contando as linhas da planilha de leads. **Nada se dimensiona
antes disso.**

**2026-07-22 — Planejamento / Cascata ago/26–fev/27 concluída**
**Decisão/Aprendizado:** os 3 documentos da Triunfo criados na ordem correta (**macro → bimestral →
mensal**), em `marketing/briefings/`. **Eixo do macro = número de praças, não sazonalidade.**
**Contexto:** a tese de sazonalidade ("out–nov = janela de orçamento do comprador, dez = vale") foi
**descartada** — Gabriel está na empresa há ~40 dias, não tem acesso à sazonalidade real do negócio
e não pode confirmá-la. Sobrevive só o fato de plataforma de que **o CPM sobe em dezembro** em
qualquer leilão.
**Por quê:** construir 7 meses sobre tese não verificável é passivo, não plano `[REGRA 8]`.
**Impacto:** **Triunfo declarada sem nenhuma data-chave até fev/27** — fora da trava de 01/09 e
fora da fila de designers do varejo, o que libera fila para Autoshopping e Shopping B2C. Agosto é
mês de **medição com mão parada**: nenhuma campanha, criativo ou teste novo; reserva de ~R$1.110
deliberadamente não gasta e reportada como reserva de experimentação, não como sobra.

_Continuar registrando conforme decisões forem tomadas._
