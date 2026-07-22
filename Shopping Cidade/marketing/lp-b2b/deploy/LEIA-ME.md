# Como publicar a LP no Netlify (passo a passo)

> LP de Locação B2B do Shopping Cidade. Tudo aqui roda no **plano gratuito**.
> Você não precisa saber programar. Siga na ordem.

## O que tem nesta pasta
- `index.html` — a landing page completa (já com o formulário ligado).
- `netlify.toml` — configuração (não precisa mexer).
- `netlify/functions/submission-created.js` — a "ponte" que manda o lead pro CVCRM.
- `LEIA-ME.md` — este guia.

---

## PARTE 1 — Colocar a LP no ar (5 minutos)

1. Crie uma conta grátis em **https://app.netlify.com** (pode entrar com o Google).
2. Com a conta aberta, vá em **https://app.netlify.com/drop**.
3. **Arraste a pasta `deploy` inteira** para a área indicada na tela.
4. Pronto: o Netlify sobe a página e te dá um endereço tipo
   `https://nome-aleatorio-123.netlify.app`. Já está no ar e no HTTPS.
5. (Opcional) Para trocar o nome do endereço: **Site configuration > Change site name**.
6. (Opcional) Para usar um domínio de vocês (ex: `locacao.shoppingcidade.net`):
   **Domain management > Add a domain**. Dá pra fazer depois.

> A partir daqui o formulário **já funciona** e os leads já são capturados
> pelo Netlify, mesmo antes de ligar o CVCRM.

---

## PARTE 2 — Receber os leads por e-mail (2 minutos)

1. No painel do site, vá em **Forms** (ou **Project configuration > Forms**).
2. Você verá o formulário **lead-locacao-b2b** listado.
3. Clique em **Form notifications > Add notification > Email notification**.
4. Coloque o **seu e-mail**. Salve.
5. Pronto: cada lead novo cai na aba **Forms** e chega no seu e-mail, com
   todos os campos (nome, WhatsApp, segmento, momento do negócio, tempo de
   mercado, site/redes).

> Só isso já resolve o essencial: você recebe os leads e repassa ao comercial.
> A Parte 3 automatiza a entrada direto no CRM.

---

## PARTE 3 — Ligar no CV CRM (quando o comercial passar os dados)

Você vai precisar de 3 coisas do CVCRM (peça ao comercial / admin):
- **subdomínio** — o pedaço antes de `.cvcrm.com.br` (ex: em
  `shoppingcidade.cvcrm.com.br`, o subdomínio é `shoppingcidade`).
- **token de API + e-mail** — gerado no CVCRM em Cadastro de usuário (admin) > botão "Token".
- **código de origem** — de 2 letras (ex: `SI`), pra marcar que o lead veio da LP.

Com isso em mãos, no painel do Netlify:

1. Vá em **Site configuration > Environment variables > Add a variable**.
2. Cadastre estas quatro (uma por vez):

   | Nome (Key)         | Valor (Value)                          |
   |--------------------|----------------------------------------|
   | `CVCRM_SUBDOMINIO` | o subdomínio (ex: `shoppingcidade`)    |
   | `CVCRM_EMAIL`      | o e-mail do usuário do token           |
   | `CVCRM_TOKEN`      | o token gerado no CVCRM                 |
   | `CVCRM_ORIGEM`     | o código de origem (ex: `SI`)          |

   > O **token fica guardado aqui, escondido no servidor** — nunca aparece na
   > página nem no código. É o lugar certo e seguro pra ele.

3. Vá em **Deploys > Trigger deploy > Deploy site** (pra aplicar as variáveis).
4. Faça um teste: preencha o formulário na LP e confira se o lead apareceu no CVCRM.

Se algo não entrar no CVCRM, o lead **não se perde** — ele continua salvo na aba
Forms do Netlify e no seu e-mail. Aí a gente ajusta a configuração.

---

## Observações
- **Limites grátis:** Netlify Forms até 100 leads/mês; funções até 125 mil
  execuções/mês. Muito acima do volume da conta.
- **Anti-spam:** a página já tem um campo-armadilha invisível (honeypot). Sem
  captcha chato.
- **Rastreamento (pixel/GTM):** ainda NÃO está na página. Quando for rodar
  anúncio pra essa LP, a gente adiciona o rastreamento (é um passo à parte).
- **Campos de qualificação no CRM:** por ora o CVCRM recebe nome + telefone +
  origem. Segmento, momento, tempo e site chegam completos no Netlify/e-mail.
  Quando testarmos com as credenciais reais, dá pra mapear esses campos extras
  nos campos personalizados do CVCRM.
