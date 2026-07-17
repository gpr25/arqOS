# Teardown — LP B2B Atual (Locação de Lojistas)
## Shopping Cidade Curitiba · Grupo Gadens
**Data:** 2026-07-17 · **Analista:** Gabriel Pauletto · **URL analisada:** https://lojas.shoppingcidade.net/comercial-01d5272a121d74879811

> Insumo para o script v2 da LP (a ser gerado após o onboarding). Referência cruzada: `briefing-lp-b2b-locacao.md` e `../memory/estado-da-conta-shopping-cidade.md`.

---

## VEREDITO EM UMA LINHA

A LP atual **recruta ativamente o perfil errado de lojista** e enfraquece o ativo mais forte do shopping (o fluxo). O problema não é estético — é estratégico: ela lidera com a mensagem que o estado da conta marca como PROIBIDA.

---

## O QUE FUNCIONA (manter)

1. **CTAs alinhados.** "Quero conhecer os espaços disponíveis" e "Agendar visita com um consultor" falam a língua certa (ponto/espaço, não preço). Manter.
2. **WhatsApp direto** (wa.me/41988851148) como via de contato — bom para B2B de ciclo longo, onde o lead quer conversar. Manter.
3. **Existe seção de fluxo e de prova social** — a espinha está lá; o problema é o conteúdo dela (ver abaixo).

---

## O QUE ESTÁ QUEBRADO (classificado por gravidade)

### 🔴 CORRIGIR AGORA — erro estratégico crítico

**1. A headline e a subheadline violam a regra nº 1 travada.**
- Headline atual: *"Sua loja no Shopping Cidade com condições exclusivas"*
- Subheadline: *"Primeiro aluguel gratuito, sem precisar de fiador e com apoio de marketing"*
- Isto é **exatamente** o "primeiro mês grátis, sem fiador" que o estado da conta (seção 4) marca como atraindo o perfil **oposto** ao ICP. E aparece **duas vezes** na página, reforçado.
- **Efeito real:** recruta o lojista descapitalizado, começando do zero, sem estrutura — e afasta o lojista estabelecido com bom giro (o ICP), que lê "aluguel grátis / sem fiador" como sinal de shopping desesperado, não de oportunidade.
- **Correção:** liderar com **fluxo e oportunidade de crescimento**, não com alívio financeiro. O ICP não compra desconto — compra cliente na porta.

**2. Posicionamento invertido (socorro em vez de oportunidade).**
- A página inteira vende alívio de custo (aluguel grátis, sem fiador). Isso é enquadramento de "socorro".
- O lojista estabelecido decide por **fluxo, ponto e retorno**, não por economia no primeiro mês.
- Fere também a regra 7 do projeto (nunca posicionar como "barateiro"): a oferta de gratuidade + captcha amador dão à página um ar barato.

**3. "Grandes marcas começaram aqui" reforça a mensagem errada.**
- "Começaram aqui" diz: *este é o lugar onde você INICIA* (enquadramento de iniciante).
- O ICP não quer começar — quer **crescer/expandir** o que já funciona.
- **Correção:** "marcas que crescem aqui" / lojistas estabelecidos que operam com sucesso há anos.

### 🟠 CORRIGIR — o formulário (o que o Gabriel já sentia)

**4. O formulário coleta volume, mas não QUALIFICA.**
- Campos atuais: Nome, E-mail (obrig.), Telefone (obrig.), Modelo de negócio (dropdown), Descrição da empresa (texto aberto), captcha "1 + 1 = ?".
- **Falta a pergunta mais importante de todas:** *"Você já tem loja em operação?"* (sim / ainda não). Sem ela, o form não separa o ICP na origem — e a dor da conta é **qualidade** de lead, não volume (gap de CRM, comercial não linka lead→contrato).
- **E-mail obrigatório + telefone obrigatório + descrição em texto aberto** = atrito alto sem retorno de qualificação. Descrição aberta é trabalhosa de preencher e difícil de padronizar.
- **Captcha "1 + 1 = ?"** = amador, adiciona atrito e passa imagem barata numa página que fala com dono de negócio. Trocar por proteção invisível (honeypot/reCAPTCHA v3).
- **Correção de campos:** Nome · WhatsApp · Segmento (dropdown) · **"Já tem loja em operação?" (sim/não)** · (opcional) há quanto tempo atua. Menos atrito onde não qualifica, uma pergunta a mais onde qualifica.

**5. Formulário no topo, antes de construir valor.**
- O form aparece já na primeira seção, junto da oferta errada — pede o lead antes de provar o fluxo.
- Para decisão B2B considerada, o padrão que converte melhor é: **provar o ativo (fluxo/ponto) primeiro, capturar depois** — ou manter um CTA âncora no topo que rola até o form no fim. (Para tráfego quente de anúncio um form no topo pode funcionar, mas não emparelhado com a oferta errada.)

### 🟡 MELHORAR — o ativo subaproveitado

**6. O argumento de fluxo está genérico e enterrado.**
- Atual: *"O Shopping que atrai milhares de consumidores todos os dias"* — "milhares" é vago.
- Esta é a **arma mais forte** e está sem número concreto. Substituir por dados (arredondados, defensáveis): +180–200 mil visitantes/mês, +6 mil/dia, picos acima de 8 mil nos fins de semana, +200 lojas, 24 anos. (Número final de fluxo sai do onboarding com o período cheio.)
- Subir esse bloco para logo abaixo do hero — é o que converte o ICP.

**7. Faltam seções que qualificam e orientam.**
- Não há um "**Para quem é**" explícito (filtra o perfil) nem um "**Como funciona**" (reduz fricção do próximo passo). Ambos previstos no briefing v2.

---

## RESUMO: DA LP ATUAL PARA A v2

| Dimensão | LP atual (erro) | LP v2 (alvo) |
|---|---|---|
| Mensagem-líder | Aluguel grátis, sem fiador | Fluxo garantido + oportunidade de crescer |
| Público que atrai | Iniciante, descapitalizado | Lojista estabelecido querendo expandir |
| Prova social | "Começaram aqui" (iniciante) | "Crescem aqui" (estabelecido) |
| Fluxo | "milhares/dia" (vago) | Números concretos, no topo |
| Formulário | Volume, sem qualificar, captcha amador | Enxuto + "já tem loja?" qualifica |
| Percepção | Barata / socorro | Acessível com valor / oportunidade |

---

## PRÓXIMOS PASSOS

1. Levar este teardown para o **onboarding** (calibra voz, prova real, posicionamento).
2. Fechar o número de fluxo com o arquivo do período cheio (`marketing/relatorios/visitors-por-hora-01-05-2026-15-07-2026.xlsx`).
3. Gerar o **script/prompt v2** da LP corrigindo os 7 pontos acima.
4. Aplicar no Stitch e importar para refino de copy.
