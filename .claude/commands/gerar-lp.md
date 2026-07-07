---
name: "gerar-lp"
description: "Criar uma landing page completa do zero — pesquisa de concorrentes, arquitetura de conversão, copy, design, animações, SEO, build e roteamento de leads. Acionar para criar uma nova LP de captura de leads, nacional ou internacional."
---

# /gerar-lp — Criar landing page do zero

Processo completo pra construir uma LP nova, do briefing ao deploy testado. Baseado no que funcionou na LP de leads B2B dos EUA (`marketing/landing-pages/us-b2b-leads/`) — use essa pasta como referência de estrutura sempre que tiver dúvida de como algo foi resolvido antes.

**Não pule as perguntas de calibragem.** Cada LP muda em pelo menos um desses eixos (mercado, idioma, público, destino do lead, hospedagem) — não presumir que vai ser igual à última.

---

## 0. Ler antes de perguntar qualquer coisa

- `core/core.md`, `company/company.md` — o que é a empresa, como ganha dinheiro
- `branding/brand.md`, `branding/identidade.md` — arquétipo, tom de voz, paleta, tipografia, referências visuais, e **onde estão os arquivos reais de logo/fonte** (hoje em `branding/Logos/` e `branding/FONTES/`)
- `sales/icp.md`, `products/` (se existir) — público e produto
- `company/certificacoes.md` (se existir) — selos/certificações reais utilizáveis como trust signal
- `memory/decisoes.md` — decisões e gotchas técnicos já registrados (ver seção de lições abaixo antes de repetir erro já resolvido)

Se algum desses arquivos não existir ou estiver com `[PREENCHER]` em algo que a LP precisa, isso vira pergunta pro usuário — nunca inventar.

---

## 1. Perguntas de calibragem

Fazer em uma mensagem só, pulando o que já estiver respondido nos arquivos acima:

```
Para montar a LP, preciso confirmar:

1. Objetivo: captar lead B2B, venda direta, waitlist/cadastro, outro?
2. Mercado e idioma: nacional (PT-BR) ou internacional — qual país/idioma?
3. Produto ou linha específica que a LP vai promover:
4. Diferenciais/provas de confiança REAIS que posso usar (certificações, anos de
   mercado, clientes, prêmios) — não vou inventar isso, preciso de fonte real
   (arquivo do projeto ou você me passando agora).
5. Campos do formulário: quais dados precisa capturar do lead?
6. Destino do lead: só e-mail? Google Sheets? CRM específico? Isso muda a
   arquitetura de roteamento (ver Fase 8).
7. Hospedagem: Netlify de novo, ou outra plataforma?
8. Tem fotografia/vídeo real disponível, ou a LP deve ser 100% tipografia/cor/
   forma (nunca gerar foto falsa de produto/instalação/pessoas)?
```

Se o usuário responder rápido/incompleto, seguir com o que der e sinalizar `[PREENCHER]` no que faltar — não travar o processo esperando resposta perfeita.

---

## 2. Fase 1 — Pesquisa

Usar WebSearch/WebFetch para levantar, na língua/mercado de destino:
- 2-3 concorrentes diretos ou adjacentes (estrutura de página, prova social, CTA, campos de formulário)
- Boas práticas de UX/CRO pro tipo de LP (B2B ingredient/serviço ≠ e-commerce ≠ imobiliário — adaptar, não copiar framework genérico dos agentes do ArqOS sem checar se é aplicável)
- Palavras-chave de intenção comercial (o que o comprador de fundo de funil digita) pra já embutir na copy e no SEO
- Referências de animação/motion adequadas ao tom da marca (ver princípios na Fase 5 — não pesquisar "o que está na moda", pesquisar "o que combina com este arquétipo")

Resumir os achados em 3-4 frases antes de seguir pra arquitetura — não precisa de aprovação formal, mas mostra o raciocínio.

---

## 3. Fase 2 — Arquitetura de conversão

Estrutura testada que funcionou bem (adaptar ordem/seções ao caso, mas este é um bom ponto de partida pra B2B/serviço):

1. Hero — headline com intenção comercial clara (não só storytelling de marca) + 1 CTA único + subheadline com dado concreto
2. Trust bar — certificações/selos reais, logo abaixo do hero
3. Por que [empresa] — 3-4 stats de credibilidade (anos, alcance, certificações, volume)
4. Produto(s)/serviço(s) — sem duplicar o site institucional; se for B2B, framing de "peça specs/amostra", não catálogo completo
5. Origem/diferencial — a história que só essa empresa pode contar
6. Certificações detalhadas — grid com descrição de cada uma
7. FAQ — objeções reais de quem já está pesquisando fornecedor/produto (não FAQ genérico)
8. Formulário final — campos qualificadores, não só nome/e-mail se o lead for B2B

**Regra de formulário:** número de campos proporcional ao nível de consciência do lead. Topo de funil (Meta Ads frio) = 3 campos. Fundo de funil / B2B pesquisando ativamente = pode pedir mais (empresa, país, interesse específico, volume) sem matar conversão.

---

## 4. Fase 3 — Copy

Acionar o agente `copywriter` (disponível via Agent tool) — mas dar o contexto de que os frameworks dele foram calibrados pra imobiliário, então adaptar princípios gerais (PAS/AIDA/BAB, especificidade, 4 U's de headline, um CTA por peça) e ignorar o que for específico de imóvel.

**Regras não-negociáveis:**
- Nunca inventar número (MOQ, prazo, preço, data) que não está documentado. Se a informação não existe, escrever a pergunta como CTA de qualificação ("compartilhe seu volume estimado e nosso time confirma") em vez de chutar um valor.
- Toda certificação/selo citado precisa existir em arquivo real do projeto — se não existir, marcar `[PREENCHER]` e não usar o nome/logo da certificadora até confirmação.

---

## 5. Fase 4 — Design visual

- Usar os arquivos de marca REAIS (`branding/Logos/`, `branding/FONTES/` ou equivalente) — nunca placeholder quando o asset real existe.
- Se o logo disponível for um lockup "quadrado" (wordmark + tagline empilhados) e o uso for em header/footer horizontal, considerar recortar uma versão só do wordmark (via PowerShell + `System.Drawing`, como feito antes) em vez de espremer o lockup inteiro num espaço baixo.
- **Contraste:** toda cor de marca usada em texto de corpo sobre fundo claro precisa ser conferida contra WCAG AA (4.5:1 pra texto normal). Se a cor "de marca" não passar (comum em tons pastel/sage), criar uma variante mais escura como token CSS separado (ex. `--sage-text`) documentando que é derivada — não decidir "meio termo" no olho.
- Nunca gerar fotografia falsa de produto, instalação, ou pessoas pra simular realidade que não existe. Preencher esses espaços com tipografia/cor/forma/ícones SVG (não emoji — emoji não é ícone de marca) até haver asset real.
- Se o manual de marca tiver um elemento gráfico específico (textura, ícone, padrão) que ainda não aparece em nenhuma peça digital, essa é uma boa oportunidade de aplicá-lo aqui.

---

## 6. Fase 5 — Animações

Princípios (válidos pra qualquer LP B2B/institucional, resumo do estudo já feito):

- Toda animação precisa ter propósito (feedback, orientação, redução de incerteza) — decoração pura é ruído.
- Duração: 100-300ms micro-interações, até 500ms transições maiores. Nunca > 1s.
- Easing ease-out em entradas.
- B2B pede contenção — nada de parallax agressivo, cursor mágnetico ou texto "explodindo". O comprador de procurement não quer ver a marca se exibindo.
- Sempre respeitar `prefers-reduced-motion` (WCAG 2.3.3) — nunca decorativo without fallback.
- Animar só `transform`/`opacity` (performance).
- Padrões que funcionaram bem: scroll-reveal com fade+slide sutil, contador animado em estatísticas de credibilidade, loading state no botão de submit, validação em tempo real no formulário, micro-nudge em setas de CTA no hover.
- **Nunca deixar conteúdo permanentemente invisível se a animação falhar** — sempre ter uma rede de segurança (timeout que força `opacity:1` depois de alguns segundos, e progressive enhancement via classe `.js-enabled` só adicionada se o JS rodar).

---

## 7. Fase 6 — SEO

- Title ≤ 60 caracteres, keyword comercial primeiro, nome da empresa no fim.
- Meta description com CTA e diferencial.
- Schema JSON-LD: `Organization` (com `hasCredential` pras certificações) + `FAQPage` (se tiver seção de FAQ).
- `robots.txt` + `sitemap.xml` — se o domínio final ainda não estiver decidido, usar placeholder claro (ex. `REPLACE-WITH-FINAL-DOMAIN`) e documentar como pendência, nunca deixar em branco.
- Fontes customizadas: preferir WOFF2 sobre OTF/TTF (menor, ataca LCP). Se só tiver OTF, converter:
  ```powershell
  python -m pip install fonttools brotli
  python -m fontTools.ttLib.woff2 compress -o saida.woff2 entrada.otf
  ```
  Preload só as 1-2 fontes críticas acima da dobra (ex. a do H1 + a do corpo), não todas.

---

## 8. Fase 7 — Build

**Pasta autocontida.** Se existe qualquer chance de deploy via drag-and-drop (Netlify ou similar), a pasta da LP não pode depender de caminhos fora dela (`../../../branding/...`). Copiar os assets necessários (logos, fontes, ícones) pra dentro de `assets/` na própria pasta da LP.

Estrutura de referência (a mesma usada em `us-b2b-leads/`):
```
marketing/landing-pages/<nome-da-lp>/
  index.html
  style.css
  script.js
  robots.txt
  sitemap.xml
  README.md              — deploy, pendências, estrutura
  assets/fonts/           — WOFF2 apenas
  assets/img/             — logos/ícones recortados/otimizados
```

Form no HTML sempre com `data-netlify="true"`, `name` único, honeypot (`netlify-honeypot`), e submit via AJAX (fetch) com estado de loading + sucesso + erro tratado — nunca só um `<form>` puro sem feedback visual.

---

## 9. Fase 8 — Roteamento de leads

Perguntar (já coberto na Fase 1, pergunta 6) qual o destino. Dois padrões prontos:

**E-mail simples:** Netlify Forms nativo basta — configurar notificação em Site settings → Forms → Notifications depois do primeiro deploy.

**Google Sheets:** Google Apps Script Web App (`doPost`) bound à planilha do usuário, chamado via `fetch(..., {mode:"no-cors"})` em paralelo ao submit do Netlify (que continua como backup silencioso, já que `no-cors` não deixa ler a resposta). Template de código e passo a passo completo: copiar de `marketing/landing-pages/us-b2b-leads/google-apps-script.gs` e do README da mesma pasta, adaptando nomes de coluna ao que o usuário mostrar da planilha dele.

**Gotchas já mapeados (checar primeiro se algo não funcionar):**
- Apps Script: "Quem tem acesso" precisa estar em **"Qualquer pessoa"**, não "Qualquer pessoa com Conta do Google" (essa exige login interativo, que a LP não consegue fazer via fetch anônimo) nem "Somente eu". Política de Google Workspace às vezes reverte isso sozinha — se o webhook parar, é o primeiro lugar a checar.
- Netlify Forms: a **detecção de formulários precisa estar ativada** (Site settings → Forms) *antes* do deploy que contém o form, ou pelo menos precisa de um **novo deploy depois** de ativar — ativar a opção não re-escaneia deploys antigos retroativamente. Sintoma: POST no form retorna 404 mesmo com o HTML correto.
- Eu (Claude Code) não tenho conector funcional de Google Drive nem de Netlify nesta configuração — essas duas etapas (deploy no Drive/Apps Script e deploy no Netlify) sempre vão precisar do usuário logado na própria conta. Meu papel é preparar o código e instruções exatas, não executar o clique final.

---

## 10. Fase 9 — Testar antes de considerar pronto

Nunca reportar como concluído sem testar de verdade no navegador (Playwright). Rotina mínima:

1. Servidor estático local (`python -m http.server <porta>`) — cuidar do diretório de trabalho (usar caminho absoluto no `Set-Location`, o cwd do PowerShell nem sempre persiste entre chamadas como esperado).
2. Navegar, checar console (`browser_console_messages`) — zero erros esperado.
3. Testar scroll-reveal **usando `page.mouse.wheel()`**, não `page.evaluate(() => window.scrollTo(...))` — scroll programático via `scrollTo`/`scrollTop` não dispara IntersectionObserver de forma confiável no Chromium headless deste setup; `mouse.wheel` simula scroll real e funciona.
4. Se uma animação parecer "travada" no teste (contador não anima, elemento não aparece), suspeitar primeiro de **throttling de `requestAnimationFrame` em aba de fundo no headless** antes de assumir bug — esperar mais alguns segundos e reconferir via `evaluate()` antes de mexer no código.
5. Se um screenshot vier completamente em branco logo após um scroll, é provável artefato de timing (screenshot tirado antes do repaint) — tirar de novo antes de investigar como bug.
6. Testar formulário de ponta a ponta: preencher campos, validação (campo inválido deve mostrar feedback), submit (loading state → sucesso), e o caminho de erro (checar que existe fallback visível, não só um console.error mudo).
7. Testar mobile (viewport ~390×844) — nav, formulário, grids que colapsam.
8. Depois de publicar de verdade (Netlify), testar o POST do formulário em produção também — antes de declarar pronto, mandar um envio de teste real e confirmar que caiu no destino (Netlify Forms dashboard e/ou planilha).
9. Limpar screenshots e arquivos de teste da raiz do projeto ao final (não deixar lixo de sessão no repo).

---

## 11. Fase 10 — Revisão multiagente (opcional, mas recomendado antes de considerar "pronto pra tráfego")

Se o usuário topar, soltar em paralelo (background) agentes especializados só pra trazer achados — não editar nada nessa passada:

- `copywriter` — disponível direto como `subagent_type`.
- SEO / UX-UI / designer — **não estão disponíveis como `subagent_type` direto neste projeto** (só copywriter, agente-comercial, agente-estrategico, agente-marketing, claude, claude-code-guide, Explore, general-purpose, Plan, statusline-setup — conferir lista atual antes de assumir, pode mudar). Pra esses, usar `general-purpose` e instruir explicitamente o agente a **ler o arquivo de persona correspondente primeiro** (`.claude/agents/seo-especialista.md`, `.claude/agents/ux-ui-especialista.md`, `.claude/agents/designer.md`) e ignorar o que for específico de imobiliário nesses arquivos.
- Dar contexto completo em cada prompt (o agente não vê esta conversa) — negócio, o que a LP faz, arquivos já criados, e pedir lista priorizada de achados, nunca edição de arquivo.
- Depois, implementar o que fizer sentido e testar de novo (Fase 9) — mudança em volume assim quase sempre introduz pelo menos um bug pequeno (ex.: grid desbalanceado, contraste, ícone quebrado).

---

## Checklist final antes de dizer que está pronto

- [ ] Nenhum dado/número/certificação inventado — tudo rastreável a um arquivo do projeto ou confirmação do usuário
- [ ] Contraste de texto conferido (4.5:1 mínimo)
- [ ] Zero foto fabricada — só tipografia/cor/forma/ícone real até haver asset de verdade
- [ ] Pasta autocontida (sem path pra fora dela)
- [ ] Formulário testado de ponta a ponta, incluindo estado de erro
- [ ] `prefers-reduced-motion` respeitado em toda animação
- [ ] Testado em mobile
- [ ] Testado em produção (não só localhost) depois do deploy
- [ ] README da LP documentando pendências reais (domínio, selo específico, fotografia, prova social) — nunca esconder o que falta
- [ ] `memory/decisoes.md` atualizado com o que foi decidido e qualquer gotcha novo encontrado

Perguntar ao final: quer que eu já solte a revisão multiagente (Fase 10), ou prefere revisar você mesmo antes?
