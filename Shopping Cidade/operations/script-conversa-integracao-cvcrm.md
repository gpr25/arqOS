# Script de Conversa — Execução da Integração CVCRM (Shopping Cidade B2B)

> **O que é:** prompt para colar no início de uma conversa NOVA do Claude Code, focada em
> concluir a integração dos leads B2B no CVCRM (formulário instantâneo do Meta + LP) e o
> rastreamento. Criado 2026-07-21.
>
> **Como usar:** abrir conversa nova na raiz do workspace e colar TODO o bloco entre as
> linhas `====`. Recomendado: Opus, esforço alto.

---

```
============================ COLE A PARTIR DAQUI ============================

Foco desta conversa: CONCLUIR a integração de leads B2B do Shopping Cidade no CVCRM,
ligando o formulário instantâneo do Meta e, depois, a Landing Page. Quero sair daqui com
lead caindo no CRM do comercial e o rastreamento correto.

## Quem eu sou (não confunda nunca)
Eu faço APENAS TRÁFEGO PAGO / PERFORMANCE. Sou responsável pelos ANÚNCIOS. Não sou dono de
comercial, financeiro, orgânico ou conteúdo. Mexo no CRM só porque é onde o lead do meu
anúncio precisa chegar. Todo o eixo é mídia paga.

## Leia ANTES de me responder qualquer coisa
1. `CLAUDE.md` (raiz) e `Shopping Cidade/CLAUDE.md`
2. `Shopping Cidade/operations/integracao-leads-b2b-cvcrm.md`  ← GUIA PRINCIPAL, tem toda a
   arquitetura, o passo a passo e as pendências
3. `Shopping Cidade/memory/estado-da-conta-shopping-cidade.md` (seções 4, 7, 8 e 13)
4. `Shopping Cidade/logs/changelog.md` (entradas de 2026-07-20)
5. `Shopping Cidade/marketing/campanhas/copy-anuncio-b2b-meta-forms.md` (copy pronta)
6. `Shopping Cidade/marketing/lp-b2b/lp-shopping-cidade-b2b.html` (a LP, ainda não publicada)

Depois de ler, me diga em 3 linhas o que entendeu do estado atual, e só então comece.

## Objetivo final (estado que quero atingir)
- Lead do FORMULÁRIO INSTANTÂNEO do Meta caindo automático no CVCRM, com origem "Meta Ads B2B".
- Lead da LP caindo no CVCRM via API, com origem "Site LP B2B".
- RD Station FORA do fluxo B2B (o próprio CVCRM avisa que Facebook + RD não devem rodar juntos).
- Rastreamento correto no Meta e evento de Lead disparando na LP.
- Tudo registrado no changelog e no guia de operações.

## ONDE PAREI (contexto crítico, não me faça repetir)
Consegui acesso ao CVCRM. Estou em `shoppingcidade.cvcrm.com.br` →
Configurações › Integrações › Facebook. O que já sabemos:

- A integração é feita DENTRO do CVCRM, não na tela do Meta (o CVCRM não aparece na lista de
  CRMs do Meta, e isso é normal).
- Há DUAS contas conectadas no CVCRM: "Gabriel P. Santos" (conectada 20/07/2026, com 0
  formulários sincronizados) e "Profile não retornado" (de 24/06/2024, provavelmente
  quebrada). Ambas mostram "Dados de acesso: Geane Albertoni". Limite: 2 de 10 contas usadas.
- No wizard "Sincronizar novo formulário", o passo "Página" tem o DROPDOWN VAZIO. É esse o
  bloqueio.
- Tentei o caminho "Adicionar portfólio" (Business ID 930809866953669), que pede um
  **System User Token**. Travou duas vezes: (a) não deixa criar usuário do sistema com função
  Admin (limite de 1 por empresa, já usado) — a saída seria criar como Funcionário; (b) ao
  gerar o token, os únicos apps disponíveis são de terceiros ("Gadens -aiSofia- ct shoppi
  cid", "Gadens-MakeIt-Dashboard", "Make it - aiSofia - ct Shopp"). Não quero amarrar meu
  fluxo de leads ao app de outro fornecedor.
- No Meta Business Settings eu tenho ACESSO TOTAL ao portfólio "Shopping Cidade Curitiba" e à
  Página "Shopping Cidade" (sou admin do BM).
- Hipótese principal para o dropdown vazio: a conta conectada no CVCRM ("Gabriel P. Santos")
  pode não ser o meu perfil (Gabriel Pauletto), ou a autorização antiga do app CV CRM ficou
  em cache no Facebook e pulou a tela de seleção de páginas.

## DUAS PERGUNTAS ABERTAS (resolva estas ANTES de qualquer ação)
1. A conexão velha ("Profile não retornado", 2024) está recebendo lead hoje? Preciso abrir e
   ver se tem formulários/leads. Se estiver viva, NÃO se toca nela.
2. A conta "Gabriel P. Santos" conectada no CVCRM sou eu ou é outra pessoa? Se não for eu, a
   solução é conectar o MEU perfil (que tem a página).

## Regras de condução (siga à risca, já erramos nisso)
1. NUNCA me mande desconectar, remover ou excluir nada antes de VERIFICAR o que aquilo faz.
   Quase derrubei o fluxo de leads atual seguindo instrução assim. Verificar primeiro, sempre.
2. Sempre diga EXPLICITAMENTE em qual dos três lugares eu devo estar:
   - CVCRM = shoppingcidade.cvcrm.com.br (painel do CRM)
   - Business Settings = business.facebook.com/settings (configurações do Business Manager)
   - Facebook pessoal = facebook.com logado como Gabriel Pauletto (meu perfil)
   Essa confusão foi o que mais me travou. Nomeie o lugar em todo passo.
3. UM PASSO POR VEZ. Me dê um passo curto, espere eu responder, depois o próximo. Não me
   despeje um muro de 4 fases.
4. Não afirme que um botão/menu existe sem ter certeza. Os nomes mudam. Se não tiver certeza,
   me peça um print e me oriente a partir dele.
5. NUNCA me peça pra colar token, senha ou credencial no chat. Credencial não entra em
   arquivo versionado deste workspace.
6. Datas sempre absolutas (AAAA-MM-DD).
7. Se algo depender de acesso que eu não tenho, diga na hora e me dê o texto do pedido.

## Fases do trabalho (nesta ordem)
FASE 1 — Destravar o formulário instantâneo do Meta → CVCRM
  Resolver as duas perguntas abertas, depois fazer a Página aparecer no wizard e concluir:
  Página → Formulário → Campos (Nome→nome, WhatsApp→telefone, Segmento→campo custom) →
  Empreendimento → Termo → Concluído. Origem "Meta Ads B2B". Testar com lead-fantasma e
  confirmar que caiu no CVCRM.

FASE 2 — Desligar o RD Station desse fluxo
  Garantir que os leads sincronizados pelo Facebook não sejam também enviados ao RD (o painel
  do CVCRM avisa que não se deve usar os dois juntos). Confirmar que nada mais quebra.

FASE 3 — Rastreamento no Meta
  Na publicação do anúncio: desmarcar "Eventos de CRM" (puxa o dataset "Pixel Morá - gas
  rocket" 185598782144030, que é de outra conta) e manter só "Eventos do site" = Pixel de
  Shopping Cidade Curitiba (234559080256415). Lembrar que o evento de Lead do formulário
  instantâneo é nativo do Meta. Verificar também a "New Google Sheets Integration" que estava
  ativa num formulário de lead — checar se é intencional e se duplica.

FASE 4 — Publicar a LP e ligar na API do CVCRM
  Publicar `marketing/lp-b2b/lp-shopping-cidade-b2b.html` no Netlify + Netlify Function que
  guarda o token e faz POST em `https://{subdominio}.cvcrm.com.br/api/v1/...` (auth
  e-mail+token), origem "Site LP B2B". Disparar evento de Lead no pixel do Shopping no envio.
  Preciso obter com o comercial/TI: subdomínio, e-mail + token de API, e o código de origem.

FASE 5 — Registrar tudo
  Atualizar `operations/integracao-leads-b2b-cvcrm.md` com o que funcionou de fato,
  `logs/changelog.md` com linha datada, e a seção 15 da fonte de verdade. Registre conforme
  avança, não só no fim.

## Skills e agentes
- Skill `analytics` — útil na FASE 3 (validar eventos, pixel, conversões) e no evento de Lead
  da LP na FASE 4.
- Skill `playwright` — só se precisarmos inspecionar a LP publicada. Não usar para entrar em
  painel autenticado.
- Skills `gws-drive` / `gws-sheets` — se eu compartilhar planilha/export relacionado.
- Subagentes: NÃO são necessários aqui. Isso é configuração guiada passo a passo, faça você
  mesmo na conversa principal.

Comece lendo os arquivos listados, me resuma o estado em 3 linhas, e depois me dê o PRIMEIRO
passo da FASE 1 (que é resolver as duas perguntas abertas). Um passo por vez.

============================ FIM DO QUE COLAR ============================
```

---

## Notas

- Se a FASE 1 destravar rápido, dá pra fechar Meta + rastreamento na mesma sessão e deixar a
  LP (FASE 4) para outra, já que ela depende de credenciais do comercial.
- O guia técnico de referência é `integracao-leads-b2b-cvcrm.md`, neste mesmo diretório —
  este arquivo é só o roteiro de condução da conversa.
