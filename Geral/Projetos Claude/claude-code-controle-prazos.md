# PROJETO DE APRENDIZADO — AUTOMAÇÃO DE CONTROLE DE PRAZOS DE CAMPANHA
## Para colar na sua conversa de aprendizado de Claude Code
### Conceito explicado + script comentado + caminho honesto de implementação

> **Leia esta ressalva primeiro.** Este é um ótimo primeiro projeto real de Claude Code porque resolve uma dor sua de verdade (controlar manualmente o fim das campanhas). Mas seja realista sobre o caminho: a versão que lê automaticamente as campanhas direto do Meta exige acesso à Marketing API, que tem etapas de configuração (app, token, permissões) que levam tempo e não são triviais para quem está começando. Por isso, este material te dá DOIS níveis: o nível 1, que você consegue rodar nos próximos dias com o que já sabe, e o nível 2, que é o objetivo final com API, para quando você evoluir. Comece pelo nível 1. Ele já resolve 80% da dor.

---

## O CONCEITO — O QUE ESTAMOS AUTOMATIZANDO E POR QUÊ

Hoje você anota manualmente, caso a caso, quando cada campanha deve encerrar. Isso é trabalho repetitivo e arriscado: se você esquecer, uma campanha de evento continua gastando depois do evento, ou uma que devia parar segue queimando verba.

A lógica da automação é simples: existe uma lista de campanhas com data de início e fim; um programa lê essa lista, compara com a data de hoje, e avisa o que está perto de vencer ou já venceu. O computador nunca esquece e nunca dorme. É o candidato perfeito para automação porque é uma regra clara aplicada a dados estruturados, exatamente o que código faz bem.

Há dois jeitos de o programa saber das campanhas:
- **Nível 1 (começar agora):** você mantém as datas numa planilha simples (que você já sabe fazer), e o script lê essa planilha. O trabalho de anotar continua, mas o de LEMBRAR e VIGIAR vira automático.
- **Nível 2 (objetivo final):** o script puxa as campanhas direto do Meta via API, sem você anotar nada. Mais poderoso, mais complexo de configurar.

---

## NÍVEL 1 — SCRIPT QUE LÊ UMA PLANILHA E ALERTA (comece aqui)

A ideia: uma planilha (CSV ou Excel) com colunas `cliente`, `campanha`, `data_inicio`, `data_fim`. O script lê, compara com hoje, e lista o que vence em breve ou já venceu.

```python
# controle_prazos.py
# Script nível 1: le uma planilha de campanhas e avisa o que esta vencendo.
# Pre-requisito: ter o Python instalado e a biblioteca pandas (pip install pandas openpyxl)

import pandas as pd                      # biblioteca para ler planilhas
from datetime import datetime, timedelta # para trabalhar com datas

# --- CONFIGURACAO ---
ARQUIVO = "campanhas.xlsx"   # nome da sua planilha de controle
DIAS_DE_AVISO = 3            # avisar quando faltar 3 dias ou menos para o fim

# --- LEITURA ---
# le a planilha para dentro do programa (vira uma "tabela" chamada df)
df = pd.read_excel(ARQUIVO)

# converte a coluna de data_fim para o formato de data que o Python entende
df["data_fim"] = pd.to_datetime(df["data_fim"])

hoje = datetime.now()                      # pega a data de hoje
limite = hoje + timedelta(days=DIAS_DE_AVISO)  # daqui a 3 dias

# --- ANALISE ---
# campanhas que ja passaram do fim e talvez ainda estejam no ar
vencidas = df[df["data_fim"] < hoje]

# campanhas que vencem nos proximos 3 dias
vencendo = df[(df["data_fim"] >= hoje) & (df["data_fim"] <= limite)]

# --- RELATORIO ---
print("=" * 50)
print("CONTROLE DE PRAZOS DE CAMPANHA -", hoje.strftime("%d/%m/%Y"))
print("=" * 50)

if len(vencidas) > 0:
    print("\n[JA VENCERAM - verificar se ainda estao gastando]")
    for _, linha in vencidas.iterrows():
        print(f"  - {linha['cliente']} | {linha['campanha']} | fim: {linha['data_fim'].strftime('%d/%m')}")
else:
    print("\n[Nenhuma campanha vencida]")

if len(vencendo) > 0:
    print("\n[VENCEM EM BREVE - preparar encerramento]")
    for _, linha in vencendo.iterrows():
        dias = (linha["data_fim"] - hoje).days
        print(f"  - {linha['cliente']} | {linha['campanha']} | vence em {dias} dia(s)")
else:
    print("\n[Nada vencendo nos proximos dias]")

print("\n" + "=" * 50)
```

**O que cada parte faz, em linguagem simples:**
- A seção CONFIGURACAO é onde você muda o nome do arquivo e quantos dias de antecedência quer ser avisado.
- A LEITURA abre a planilha e arruma as datas.
- A ANALISE separa em dois grupos: o que já venceu (risco de gasto indevido) e o que vence em breve (preparar encerramento).
- O RELATORIO imprime tudo organizado na tela.

**Como rodar nos próximos dias:**
1. Crie a planilha `campanhas.xlsx` com as colunas `cliente`, `campanha`, `data_inicio`, `data_fim`.
2. Instale o Python e as bibliotecas (`pip install pandas openpyxl`).
3. Rode `python controle_prazos.py` no terminal.
4. Ele imprime o que precisa de atenção.

Isso já tira da sua cabeça a tarefa de vigiar. Você ainda anota, mas não precisa mais lembrar.

---

## O PROMPT PARA O CLAUDE CODE CONSTRUIR ISSO COM VOCÊ

Cole isto na sua conversa de Claude Code para desenvolver passo a passo:

```
Sou gestor de tráfego e estou aprendendo Claude Code do zero. Quero construir, comigo entendendo cada passo, um script Python simples que:

1. Lê uma planilha Excel (campanhas.xlsx) com as colunas: cliente, campanha, data_inicio, data_fim.
2. Compara as datas de fim com a data de hoje.
3. Me mostra na tela: (a) campanhas que já passaram da data de fim e podem estar gastando indevidamente, e (b) campanhas que vencem nos próximos 3 dias.

Quero aprender, não só receber pronto. Então:
- Me explique cada bloco antes de escrever.
- Use comentários simples no código.
- Me diga exatamente o que instalar e como rodar no meu computador (sou iniciante em terminal).
- Depois que funcionar, me proponha uma melhoria de cada vez (ex: salvar o relatório num arquivo, ou me avisar por outro meio), sem complicar tudo de uma vez.

Comece confirmando o que eu preciso ter instalado antes de começarmos.
```

---

## NÍVEL 2 — O OBJETIVO FINAL (para quando evoluir)

Quando você dominar o nível 1 e estiver mais confortável, o próximo passo é o script ler as campanhas direto do Meta, sem planilha manual. Isso exige a Meta Marketing API: criar um app no Meta for Developers, gerar um token de acesso, configurar permissões da conta de anúncios. É mais poderoso (zero trabalho manual de anotação) e é exatamente o tipo de coisa que está no seu roadmap de aprendizado.

Não comece por aqui. A configuração de API tem várias etapas que frustram quem está aprendendo, e o nível 1 já resolve a dor imediata. Quando chegar lá, abrimos um projeto específico para a integração com a API, porque é assunto que merece seu próprio espaço.

---

## POR QUE ESTE É UM BOM PRIMEIRO PROJETO

Ele tem todos os ingredientes de um bom aprendizado: resolve uma dor real sua, é pequeno o suficiente para você terminar e ver funcionando (motivação), ensina conceitos que você vai reusar (ler dados, comparar datas, gerar relatório), e tem um caminho de evolução natural (planilha hoje, API amanhã). Construa o nível 1 inteiro antes de pensar no nível 2.

*Grupo Gadens · Gabriel Pauletto · Projeto de Aprendizado Claude Code v1.0*
