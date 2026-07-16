---
name: blotato
type: mcp
version: 1.0.0
status: pronto para configurar
---

# Skill: blotato — Publicação em Redes Sociais

Publica e agenda posts em múltiplas plataformas simultaneamente: **Instagram, LinkedIn, Twitter/X, TikTok, YouTube**.

Fecha o ciclo de criação de conteúdo publicando no Instagram e LinkedIn com um único comando — sem sair do sistema.

---

## Quando usar blotato vs instagram-publisher

| Critério | blotato | instagram-publisher |
|---|---|---|
| Canais | Instagram + LinkedIn + outros | Instagram apenas |
| Setup | Simples (API key) | Mais complexo (Facebook Developer App) |
| Custo | Requer assinatura (~$19/mês) | Gratuito |
| Melhor para | Publicação multi-canal simultânea | Posts exclusivamente no Instagram |

---

## Configuração

### 1. Criar conta no Blotato

Acessar: blotato.com
Criar conta e obter a API Key no dashboard.

### 2. Adicionar o MCP server ao Claude Code

No arquivo `.mcp.json` na raiz do projeto (criar se não existir):

```json
{
  "mcpServers": {
    "blotato": {
      "type": "http",
      "url": "https://mcp.blotato.com/mcp",
      "headers": {
        "blotato-api-key": "${BLOTATO_API_KEY}"
      }
    }
  }
}
```

### 3. Configurar variável de ambiente

No arquivo `.env` na raiz do projeto:

```
BLOTATO_API_KEY=sua_chave_aqui
```

Ou diretamente nas configurações do Claude Code (`settings.local.json`):

```json
{
  "env": {
    "BLOTATO_API_KEY": "sua_chave_aqui"
  }
}
```

### 4. Conectar contas de redes sociais

No dashboard do Blotato: conectar conta do Instagram Business e perfil do LinkedIn.

---

## Como usar

Após configurar, chame diretamente as ferramentas MCP:

**Listar contas conectadas:**
```
blotato_list_accounts
```

**Fazer upload de imagem:**
```
blotato_upload_media
  file: [caminho da imagem]
```

**Publicar post imediato:**
```
blotato_create_post
  account_ids: [id_instagram, id_linkedin]
  content: [legenda]
  media_ids: [ids das imagens carregadas]
```

**Agendar post:**
```
blotato_create_post
  account_ids: [id_instagram, id_linkedin]
  content: [legenda]
  media_ids: [ids das imagens]
  scheduled_at: "2026-06-05T14:00:00Z"
```

**Verificar status:**
```
blotato_get_post_status
  post_id: [id retornado no create]
```

---

## Workflow de publicação

```
1. blotato_list_accounts → confirmar contas conectadas
2. blotato_upload_media → fazer upload da imagem
3. blotato_create_post → publicar com a legenda aprovada
4. blotato_get_post_status → confirmar publicação bem-sucedida
5. Registrar URL em memory/campanhas.md
```

---

## Limitações

- Requer conta paga no Blotato (planos a partir de ~$19/mês)
- Instagram: requer conta Business (não Personal nem Creator)
- Carrossel Instagram: requer múltiplas imagens (2–10)

---

## Se blotato não estiver configurado

Ao publicar conteúdo sem blotato ativo, o sistema entrega:
- Copy completa dos slides
- Legenda formatada para Instagram e LinkedIn
- Imagem gerada pelo gpt-image-2

E registra em `memory/campanhas.md` com status "pendente publicação manual".
