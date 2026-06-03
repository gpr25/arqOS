---
name: "gpt-image-2"
description: "Gerar imagens via Codex CLI (gpt-image-2) sem custo extra — usa assinatura ChatGPT. Acionar SEMPRE que houver pedido de imagem, visual, post, banner, render ou mockup. Requer Codex CLI instalado e autenticado com conta ChatGPT."
---

# /gpt-image-2 — Gerador de Imagens

Gera imagens usando gpt-image-2 via Codex CLI, autenticado com assinatura ChatGPT (Go, Plus, Pro).
Não requer API key separada.

Leia antes de gerar:
- `branding/identidade.md` — paleta de cores, tipografia e identidade visual da empresa
- `branding/brand.md` — tom visual, restrições e o que nunca fazer

Pedido: $ARGUMENTS

## Pré-requisitos

- Codex CLI instalado: `npm install -g @openai/codex`
- Autenticado: `codex login` com conta ChatGPT
- Dentro de repositório git (`git init` se necessário)

## Como executar

```bash
codex exec "generate an image of [prompt detalhado em inglês]"
```

**Regras:**
1. Sempre usar `codex exec` — nunca abrir sessão interativa
2. Prompt sempre em inglês
3. Traduzir e enriquecer o pedido antes de executar
4. Imagem salva automaticamente em `C:\Users\[usuário]\.codex\generated_images\`

## Estrutura de prompt

```
[tipo de ativo], [sujeito principal], [contexto/cenário], [estilo visual], [paleta de cores], [composição], [restrições]
```

## Como usar a identidade visual da empresa

Antes de gerar, ler `branding/identidade.md` e aplicar:
- Paleta de cores definida (fundo, texto, destaque)
- Tom visual (minimalista, premium, popular, etc.)
- Referências estéticas da marca
- O que nunca fazer visualmente (de `branding/brand.md`)

Se `branding/identidade.md` não estiver preenchido, usar como padrão:
- Fundo escuro (`#0F1115`), texto off-white (`#F5F5F2`), accent azul profundo (`#3E5F73`)
- Estética enterprise minimalista — sem gradientes chamativos, sem cores neon

## Exemplos por tipo de pedido

**Post de posicionamento:**
```bash
codex exec "generate a professional B2B social media post image, 1080x1080px square, dark enterprise aesthetic, background #0F1115, large bold sans-serif headline in two lines in off-white, accent color for second line, contemporary commercial building on right side, minimal composition, no watermark, no logos"
```

**Imagem de fundo para carrossel:**
```bash
codex exec "generate a dark minimal background for social media carousel slide, 1080x1080px, deep charcoal #0F1115, very subtle architectural grid pattern at 4% opacity, premium enterprise software aesthetic, no text, no people, no logos"
```

**Visual arquitetônico para post imobiliário:**
```bash
codex exec "generate a photorealistic architectural visualization, contemporary residential building, ascending perspective from street level, golden hour lighting, premium real estate aesthetic, sharp details, 1080x1080px, no people, no text, no logos"
```

## Onde a imagem é salva

```
C:\Users\[usuário]\.codex\generated_images\
```

## Troubleshooting

**"Not inside a trusted directory":** `git init`
**Codex não encontrado:** `npm install -g @openai/codex`
**Não autenticado:** `codex login`

**Limitações:**
- Consome créditos 3-5x mais rápido que texto
- Transparência nativa não suportada
- Suporte Windows requer repositório git ativo
