---
name: playwright
type: mcp
version: 1.0.0
status: pronto para configurar
---

# Skill: playwright — Análise de Sites e Redes Sociais

Renderiza sites e redes sociais como um navegador real — capturando conteúdo dinâmico que ferramentas de fetch simples não conseguem.

**Por que Playwright e não WebFetch:**
A maioria dos sites modernos (Instagram, LinkedIn, sites em React/Next.js) carrega o conteúdo via JavaScript após o HTML inicial. O WebFetch só captura o HTML estático — frequentemente vazio ou incompleto. O Playwright executa o JavaScript, espera o conteúdo carregar e captura a página como o usuário a vê.

**Quando é essencial:**
- Analisar perfis do Instagram
- Analisar perfis do LinkedIn
- Sites com carregamento dinâmico (React, Next.js, Vue)
- Capturar screenshots para comparação visual

**Quando WebFetch é suficiente:**
- Sites simples em HTML estático
- Blogs e sites de conteúdo básico
- Quando Playwright não estiver configurado (fallback)

---

## Configuração

### Pré-requisito

Node.js instalado. Verificar com:
```bash
node --version
```

### 1. Instalar o servidor MCP do Playwright

```bash
npx @playwright/mcp@latest --help
```

Isso instala o pacote automaticamente na primeira execução.

### 2. Configurar no Claude Code

Criar ou editar o arquivo `.mcp.json` na raiz do projeto:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {}
    }
  }
}
```

### 3. Reiniciar o Claude Code

Fechar e reabrir o terminal com `claude` para o servidor MCP ser carregado.

### 4. Verificar se está ativo

Na sessão do Claude Code, o Playwright MCP estará disponível como ferramenta quando configurado corretamente. O Claude vai indicar automaticamente quando usar.

---

## Como o ArqOS usa o Playwright

Durante o onboarding (`/instalar-self`), quando o usuário fornece links de site ou redes sociais:

**Com Playwright ativo:**
```
browser_navigate(url)           → navega para o link
browser_snapshot()              → captura estrutura e conteúdo da página
browser_take_screenshot()       → captura visual (opcional)
```

O sistema analisa:
- Posicionamento e copy principal
- Produtos/empreendimentos listados
- Tom de voz percebido
- Público-alvo aparente
- Diferenciais comunicados

**Sem Playwright (fallback WebFetch):**
- Usa WebFetch para capturar o HTML disponível
- Funciona para sites simples
- Pode perder conteúdo de redes sociais e SPAs
- O sistema sinaliza a limitação ao usuário

---

## Ferramentas disponíveis via MCP

Após configurar, as seguintes ferramentas ficam disponíveis:

| Ferramenta | Função |
|---|---|
| `browser_navigate` | Navegar para uma URL |
| `browser_snapshot` | Capturar estrutura acessível da página (texto, elementos) |
| `browser_take_screenshot` | Capturar imagem da página |
| `browser_get_console_messages` | Ver logs do console (debug) |
| `browser_click` | Clicar em elementos |
| `browser_type` | Digitar em campos |
| `browser_wait_for` | Aguardar elemento carregar |

---

## Limitações

- Instagram pode exigir login para perfis privados ou conteúdo completo do feed
- LinkedIn limita acesso sem autenticação em alguns contextos
- Playwright requer Node.js — não funciona sem ele
- Primeira execução instala os navegadores (~100MB) automaticamente

---

## Alternativa sem Node.js

Se Node.js não estiver instalado, o ArqOS usa WebFetch como fallback automático. A análise será feita com o HTML disponível — menos precisa para redes sociais, mas funcional para a maioria dos sites.
