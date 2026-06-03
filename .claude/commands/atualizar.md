# /atualizar — Escanear e atualizar o contexto do sistema

Você vai escanear os arquivos do ArqOS desta empresa e identificar o que está desatualizado, incompleto ou ausente.

Se $ARGUMENTS for fornecido, use como área específica para atualizar (ex: "memória", "comercial", "marketing").

## Como executar

**1. Escanear os arquivos principais**

Verifique a existência e o conteúdo de:

| Arquivo | O que verificar |
|---|---|
| `core/core.md` | Existe? Tem essência, princípios e categorias preenchidos? |
| `company/company.md` | Existe? Estrutura, equipe e momento estão atualizados? |
| `memory/estrategia.md` | Existe? Foco dos próximos 30 dias está atual? |
| `memory/campanhas.md` | Existe? Campanhas recentes estão registradas? |
| `memory/decisoes.md` | Existe? Decisões importantes estão documentadas? |
| `branding/brand.md` | Existe? Tom de voz e frases proibidas definidos? |
| `sales/funil.md` | Existe? Etapas e gargalos documentados? |
| `roadmap/roadmap.md` | Existe? Itens estão atualizados com o momento atual? |

**2. Identificar campos [PREENCHER]**

Procure por `[PREENCHER]` em todos os arquivos e liste:
- Qual arquivo
- Qual campo
- Por que é importante preencher

**3. Sinalizar arquivos desatualizados**

Identifique arquivos que podem estar desatualizados com base no conteúdo:
- Estratégia com datas passadas
- Campanhas sem registro recente
- Roadmap com itens "em construção" há muito tempo

**4. Apresentar o relatório**

Formato do relatório:

```
ESTADO DO SISTEMA
─────────────────────────────────────────
ATUALIZADO:
✓ [arquivo] — [status em uma linha]

INCOMPLETO (campos [PREENCHER]):
⚠ [arquivo] → [campo] — [por que importa]

AUSENTE (arquivos que deveriam existir):
✗ [arquivo] — [o que deveria conter]

POSSIVELMENTE DESATUALIZADO:
~ [arquivo] — [o que parece estar velho]

─────────────────────────────────────────
SUGESTÃO DE PRÓXIMOS PASSOS:
1. [ação mais urgente]
2. [segunda ação]
3. [terceira ação]
```

**5. Oferecer atualização imediata**

Ao final, perguntar:
"Quer que eu atualize algum desses arquivos agora? Me diga qual e traga o contexto novo."
