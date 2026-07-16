# skills/ — Skills do ArqOS

---

## O que é uma skill

Uma skill é uma integração com um serviço externo — publicação em redes sociais, geração de imagem, envio de email — encapsulada em um arquivo `SKILL.md` com instruções de configuração e uso.

Cada skill vive em sua própria pasta: `skills/[nome]/SKILL.md`

Skills são opcionais. O ArqOS funciona sem elas — elas ampliam o que é possível fazer.

---

## Skills disponíveis

| Skill | Tipo | Função | Status |
|---|---|---|---|
| **playwright** | MCP | Renderizar sites e redes sociais como navegador real — análise completa incluindo JavaScript | Pronto para configurar |
| **blotato** | MCP | Publicar e agendar posts em Instagram + LinkedIn + outras plataformas | Pronto para configurar |
| **instagram-publisher** | Script Node.js | Publicar carrosséis diretamente no Instagram via Graph API | Pronto para configurar |
| **gpt-image-2** | Codex CLI | Gerar imagens via gpt-image-2 sem custo extra (requer ChatGPT) | ✅ Ativo via `/gpt-image-2` |

---

## Como ativar uma skill

1. Ler o `SKILL.md` da skill correspondente
2. Seguir as instruções de configuração (credenciais, variáveis de ambiente)
3. A skill passa a estar disponível nos comandos que a referenciam

---

## Skills planejadas (próximas versões)

| Skill | Função |
|---|---|
| `whatsapp` | Envio de mensagens e sequências via Evolution API |
| `canva` | Criação e exportação de designs via MCP |
| `google-sheets` | Leitura e escrita em planilhas via MCP |
| `gmail` | Rascunho e envio de emails via Gmail MCP |
| `n8n-recipes` | Fluxos de automação prontos para importar |

---

## Como criar uma nova skill

1. Criar pasta `skills/[nome]/`
2. Criar `skills/[nome]/SKILL.md` com: descrição, pré-requisitos, variáveis de ambiente, passos de configuração e como usar
3. Registrar na tabela acima e no `CLAUDE.md`
