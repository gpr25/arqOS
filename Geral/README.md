# ArqOS

**O sistema operacional contextual para o seu negócio.**

ArqOS não é um chatbot. Não é um template. É um sistema construído com o contexto real da sua empresa — que fica mais inteligente a cada uso.

Em 30 minutos de onboarding, o ArqOS mapeia como o seu negócio funciona, o que ele sabe, como ele vende e onde mais perde. A partir daí, opera com 14 agentes especializados, memória que acumula a cada sessão e inteligência calibrada para a sua realidade.

---

## O que você terá ao final

- **14 agentes especializados** — comercial, marketing, atendimento, conteúdo, dados, lançamento, documentos, financeiro e mais
- **21 comandos operacionais** — do script de atendimento à proposta comercial, do carrossel ao relatório de performance
- **Memória operacional** — decisões, campanhas e aprendizados que ficam disponíveis em qualquer sessão futura
- **Skills de publicação** — Instagram, LinkedIn, geração de imagens e integrações externas

---

## Instalação passo a passo

### Passo 1 — Instale o VS Code

O VS Code é o editor onde o ArqOS vai rodar. Gratuito.

**Acesse:** [code.visualstudio.com](https://code.visualstudio.com) → baixe e instale para o seu sistema operacional.

---

### Passo 2 — Instale o Node.js

O Node.js é necessário para rodar o Claude Code e as ferramentas do ArqOS.

**Acesse:** [nodejs.org](https://nodejs.org) → baixe a versão **LTS** (a recomendada) e instale.

Para confirmar que funcionou, abra um terminal e digite:
```
node --version
```
Deve aparecer algo como `v20.x.x`.

---

### Passo 3 — Instale o Claude Code

O Claude Code é o terminal inteligente da Anthropic — é por onde o ArqOS opera.

Com o Node.js instalado, abra o terminal e execute:

```bash
npm install -g @anthropic-ai/claude-code
```

> **Como abrir o terminal:**
> - Windows: tecla `Windows` → digite "Terminal" → abra o Windows Terminal ou PowerShell
> - Mac: `Cmd + Espaço` → digite "Terminal" → abra

---

### Passo 4 — Crie uma conta Claude Pro

O ArqOS funciona com o modelo Claude da Anthropic. Você precisa de uma conta com plano **Pro** ou acima.

**Acesse:** [claude.ai](https://claude.ai) → crie uma conta → faça upgrade para o plano Pro.

---

### Passo 5 — Clone o ArqOS

No terminal, navegue até onde quer instalar o sistema (Documentos, Área de Trabalho, etc.) e execute:

```bash
git clone https://github.com/m2intelligence/arqOS.git
```

A pasta `arqOS/` será criada. Ela vai crescer aqui conforme você usa o sistema.

> **Não tem o Git instalado?**
> - Windows: [git-scm.com/download/win](https://git-scm.com/download/win)
> - Mac: [git-scm.com/download/mac](https://git-scm.com/download/mac)
> Instale e repita o comando acima.

---

### Passo 6 — Abra a pasta no VS Code

Abra o VS Code → **File → Open Folder** → selecione a pasta `arqOS`.

---

### Passo 7 — Inicie o ArqOS

Dentro do VS Code, abra o terminal integrado:
- Windows/Linux: `Ctrl + '` (acento grave)
- Mac: `Cmd + '`

No terminal, execute:

```bash
claude
```

Quando o Claude Code abrir, digite:

```
/instalar-self
```

**O onboarding começa.**

---

## Como o onboarding funciona

**Tempo estimado:** 20 a 35 minutos.

O sistema passa por cinco etapas antes das perguntas:

1. Pede seu nome e o da empresa
2. Verifica as ferramentas instaladas no seu computador
3. Lê os materiais que você mandar (apresentações, manuais, portfólios)
4. Analisa seu site e redes sociais
5. Seleciona o perfil do seu negócio

Depois, 3 a 4 blocos de perguntas adaptadas ao seu perfil. Uma pergunta de cada vez. Ao final de cada bloco, os arquivos são criados — e o sistema sintetiza o que capturou antes de avançar.

**Tenha à mão antes de começar:**
- Apresentação da empresa (se tiver)
- Manual de marca ou guia de identidade visual
- Portfólio ou tabela de produtos
- Scripts de atendimento ou processos documentados

Quanto mais contexto, menos perguntas — e o resultado fica mais preciso.

---

## Atualizações

Para receber novos agentes, comandos e melhorias, abra o terminal na pasta `arqOS/` e execute:

```bash
git pull
```

Os arquivos do seu negócio (criados pelo onboarding) não são afetados.

---

## Para quem é

- Incorporadoras e construtoras
- Imobiliárias
- Corretores autônomos de alta performance
- Qualquer empresa de serviços que precisa de inteligência operacional estruturada

O ArqOS foi construído com foco no mercado imobiliário, mas funciona para qualquer tipo de negócio. Ao selecionar "Outro tipo de negócio" no onboarding, o sistema adapta toda a estrutura.

---

## Construído por

**m2 Intelligence** — Inteligência Operacional Imobiliária

[m2int.com.br](https://m2int.com.br)
