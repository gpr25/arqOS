---
description: Procura, avalia (com verificação de segurança), explica e — só se autorizado — instala agent skills
---

# Buscar, avaliar e instalar Agent Skills

O usuário quer que você **encontre, avalie criticamente, verifique a segurança, explique e — SOMENTE se ele autorizar — instale** agent skills (skills de Claude Code / skills.sh).

Tópicos ou nomes de skills que ele passou: **$ARGUMENTS**

Se `$ARGUMENTS` estiver vazio, pergunte primeiro: (1) para que ele quer as skills (ex.: landing pages, SEO, 3D, análise de dados) e (2) se já tem nomes específicos em mente. Não prossiga sem isso.

Regra de ouro: **NUNCA instale nada sem o "ok" explícito do usuário, item por item.** Estrelas no GitHub não são prova de segurança. Skill instalada roda com as permissões totais do agente.

---

## Fase 1 — Descobrir

Para cada tópico/nome:
- Se ele deu um **nome específico** (ex.: "GSAP Skill", "Genjutsu"), faça web search para achar o **repositório GitHub oficial** (`owner/repo`) e a página em `skills.sh`.
- Se ele deu só um **tópico**, procure candidatos:
  - `npx --yes skills find "<tópico>"` (CLI oficial; pode listar por relevância)
  - Confira o leaderboard em https://skills.sh/ (ordenado por instalações)
  - Web search: `"<tópico>" Claude agent skill site:github.com`
- Prefira fontes oficiais/reputadas (`anthropics`, `greensock`, `vercel-labs`, `microsoft`, orgs da própria ferramenta) a autores desconhecidos.
- Sempre que houver mais de um candidato para o mesmo tópico, **sugira o melhor/mais completo**, não só o primeiro que aparecer.

## Fase 2 — Reputação

Para cada candidato, colete via API do GitHub (sem precisar de auth):
```bash
curl -s "https://api.github.com/repos/<owner>/<repo>" \
  | grep -E '"full_name"|"stargazers_count"|"pushed_at"|"default_branch"|"license"'
```
Sinais: estrelas (prefira 1k+; desconfie de <100), org oficial vs pessoa, data do último push (abandonado?), nº de instalações no skills.sh. Anote — não decida ainda.

## Fase 3 — SEGURANÇA (o passo que não pode ser pulado)

Liste **todos** os arquivos do repo e separe markdown (baixo risco) de código executável:
```bash
b=$(curl -s "https://api.github.com/repos/<owner>/<repo>" | grep '"default_branch"' | sed -E 's/.*: "([^"]+)".*/\1/')
curl -s "https://api.github.com/repos/<owner>/<repo>/git/trees/$b?recursive=1" \
  | grep '"path"' | sed -E 's/.*"path": "([^"]+)".*/\1/'
```

1. **Skill só de markdown** (`SKILL.md` + `references/*.md` + exemplos) = risco baixo. Ainda assim, faça o grep do passo 3.
2. **Tem scripts** (`.sh`, `.py`, `.js`, `.ts`, binários, `install.sh`, workflows que rodam local)? **Leia cada script inteiro** (via `raw.githubusercontent.com/<owner>/<repo>/<branch>/<caminho>`) e sinalize:
   - rede: `curl`, `wget`, `fetch`, `requests`, `urllib`, `http`, `socket`, `websocket`
   - execução: `subprocess`, `os.system`, `os.popen`, `eval(`, `exec(`, `new Function`, `child_process`, `__import__`
   - ofuscação/roubo: `base64`, `atob`/`btoa`, leitura de `.env`, `api_key`, `token`, `secret`, `password`, `document.cookie`, `localStorage`
   - escrita/exfiltração de arquivos fora da própria pasta da skill
3. **Grep de red flags em cada `SKILL.md`** (prompt-injection / exfiltração nas instruções que a IA vai ler):
```bash
curl -s "<raw_url_do_SKILL.md>" \
  | grep -niE "curl |wget |http://|fetch\(|eval\(|os\.system|subprocess|base64|\.env|api[_-]?key|token|secret|password|ignore (previous|above)|exfil|npx .*add"
```
   Ignore ocorrências óbvias de documentação legítima (ex.: link para `docs`/`github`/CDN da própria lib). O que importa é instrução para **executar** ou **mandar dados pra fora**.
4. Se algo ficar ambíguo, marque como **"revisar manualmente"** e não recomende até esclarecer. O CLI de instalação também mostra scanners (Socket/Snyk/Gen) — use como sinal adicional, mas **um "Critical" isoladamente costuma ser falso-positivo de heurística**; confirme lendo o arquivo antes de descartar OU de assustar o usuário.

## Fase 4 — Explicar

Apresente uma tabela, uma linha por skill:

| Skill | Fonte (owner) | ⭐ | Segurança | O que é / fit pro uso dele |
|---|---|---|---|---|

Além da tabela:
- Aponte **sobreposição/redundância** (ex.: um bundle "tudo-em-um" que já cobre skills standalone — instalar os dois é redundante).
- Seja honesto sobre **onde a skill NÃO serve** (ex.: skills de animação web servem para LP/site, não geram o estático/vídeo do anúncio direto).
- Dê sua **recomendação** clara (não uma lista neutra): qual conjunto vale a pena e por quê.

## Fase 5 — Autorização

Pergunte qual conjunto instalar (ofereça opções: recomendado / mínimo / tudo). **Espere o "ok".** Nada de instalar por conta própria.

## Fase 6 — Instalar e verificar

Antes: confirme que Node/npx existem (`node --version`; `npx` disponível). Sem Node, pare e avise.

Instale cada pacote aprovado (repo inteiro puxa todas as sub-skills):
```bash
npx --yes skills add <owner>/<repo> -g -y
```
- `-g` = global (fica em `~/.agents/skills`, com junction/symlink em `~/.claude/skills`; vale em todos os projetos, **fora** de qualquer repositório Git). Omita `-g` para instalar só no projeto atual (aí entra no `.claude/skills` da pasta — pode ir pro Git).
- No Windows o CLI cria **junctions** (não precisa de admin). Pode aparecer a mensagem `Failed to install → PromptScript does not support global skill installation`: **é benigna** — "PromptScript" é outro formato de agente que o CLI tenta em paralelo, não o Claude Code. O que vale é a seção `✓ ... symlinked: Claude Code`.

Verifique de verdade (não confie só no log):
```bash
ls "$HOME/.claude/skills"    # devem aparecer as skills instaladas (como junction/symlink)
```
E confirme que o harness passou a listar as novas skills como disponíveis. Só então reporte "instalado".

## Notas
- Algumas skills têm scripts Python opcionais (busca, geração) — exigem Python instalado, mas o conteúdo markdown funciona sem ele.
- Descobrir/atualizar depois: `npx skills check` (updates) e `npx skills update`.
- Manter este comando **genérico** — não calibrar para uma empresa/nicho específico.
