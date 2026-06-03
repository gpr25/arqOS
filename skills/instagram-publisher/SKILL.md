---
name: instagram-publisher
type: script
version: 1.0.0
status: pronto para configurar
---

# Skill: instagram-publisher — Publicação de Carrosséis no Instagram

Publica carrosséis diretamente no Instagram Business via Graph API.

Alternativa gratuita ao blotato para quem quer controle direto sobre o Instagram sem depender de plataforma intermediária. Melhor para posts **exclusivamente no Instagram**.

> Para publicação simultânea Instagram + LinkedIn, usar `skills/blotato/SKILL.md`.

---

## Quando usar instagram-publisher vs blotato

| Critério | instagram-publisher | blotato |
|---|---|---|
| Canal | Instagram apenas | Instagram + LinkedIn + outros |
| Custo | Gratuito (usa Graph API) | Requer assinatura Blotato |
| Setup | Mais complexo (Facebook Developer App) | Mais simples (API key) |
| Carrossel | ✅ Suporte nativo | ✅ Suporte nativo |

---

## Configuração

### Pré-requisitos

1. Conta Instagram Business conectada a uma Página do Facebook
2. App no Facebook Developers (tipo: Company)
3. Conta no imgBB para hosting temporário das imagens

### Variáveis de ambiente necessárias

```
INSTAGRAM_ACCESS_TOKEN=seu_token_aqui   # Token de longa duração (60 dias)
INSTAGRAM_USER_ID=seu_user_id_aqui      # ID da conta Business
IMGBB_API_KEY=sua_chave_imgbb           # Chave do imgBB
```

No arquivo `.env` na raiz do projeto.

### Como obter o INSTAGRAM_ACCESS_TOKEN

1. Acessar: developers.facebook.com → criar App (tipo Company)
2. Adicionar produto: Instagram Graph API
3. No Graph API Explorer: gerar token de curta duração com permissões:
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_read_engagement`
4. Converter para token de longa duração (60 dias):

```
GET https://graph.facebook.com/v18.0/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id={app-id}
  &client_secret={app-secret}
  &fb_exchange_token={short-lived-token}
```

### Como obter o INSTAGRAM_USER_ID

```
GET https://graph.facebook.com/v18.0/me/accounts
  ?access_token={seu_token}
```
Retorna as Pages conectadas → pegar o `instagram_business_account.id`

---

## Como usar

**Estrutura de arquivos de imagem esperada:**

Coloque as imagens em uma pasta local (ex: `assets/posts/nome-do-post/`):
```
01-slide-capa.jpg
02-slide-conteudo.jpg
03-slide-cta.jpg
```

As imagens devem ser **JPEG** e ordenadas alfabeticamente (prefixo numérico).

**Workflow de publicação:**

```
1. Preparar imagens JPEG na pasta local
2. Confirmar a ordem dos slides
3. Usar a legenda aprovada (máximo 2.200 caracteres)
4. Executar o script de publicação
5. Salvar URL e ID do post em memory/campanhas.md
```

**Flag de teste (sem publicar de fato):**

```bash
node skills/instagram-publisher/publish.js --dry-run
```

---

## Instalação do script

Clonar manualmente de:
```
github.com/renatoasse/opensquad/tree/master/skills/instagram-publisher
```

Copiar os arquivos para `skills/instagram-publisher/` nesta pasta.

---

## Limitações

- Formato JPEG apenas (PNG não é aceito pelo Graph API desta forma)
- Máximo 10 imagens por carrossel
- Máximo 25 posts publicados via API por dia
- Token expira em 60 dias — precisa ser renovado manualmente
- Vídeos não suportados nesta versão
