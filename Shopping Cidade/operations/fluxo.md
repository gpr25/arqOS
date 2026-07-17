# fluxo.md — Processos Recorrentes e Dependências · Shopping Cidade

> O que se repete toda semana, quem depende de quem, e o que quebraria se alguém saísse.
> Processos passo a passo ficam em [[../playbooks/refresh-ofertas-b2c]] e afins.

---

## Rotina semanal — B2C (ofertas)

| Quando | O quê | Quem |
|---|---|---|
| **Quarta** | Social media entrega os criativos de oferta da semana | Social media |
| **Quarta / Sexta / Segunda** | Refresh do carrossel de ofertas (subir novos ANTES de desativar os antigos — evita gap de entrega na revisão do Meta) | Gabriel |
| Semanal | Definir o que turbinar (social media decide O QUÊ; tráfego define QUANTO e POR QUANTO TEMPO) | Social media + Gabriel |

Detalhe do protocolo em [[../playbooks/refresh-ofertas-b2c]].

## Rotina — B2B (comercial)

| Quando | O quê | Quem |
|---|---|---|
| **Sexta (a combinar fixo)** | Reunião comercial: valores, capacidade, conversão histórica, retorno lead→contrato | Gabriel + Comercial |
| Mensal/quinzenal | Comercial devolve: de X leads, quantos viraram contrato | Comercial |

Checklist da reunião em [[../sales/checklist-reuniao-b2b-e-metricas]].

## Rotina — Reporting

- Relatório mensal de performance (mLabs + Google/Meta) → PPTX para a gestão, na voz de
  apresentador do Gabriel. **Contexto obrigatório em todo report:** comparar com a gestão
  anterior sempre parecerá pior (métricas de vaidade infladas sendo trocadas por métricas reais).

---

## Dependências críticas (o que quebra se a pessoa sair)

- **Gabriel** — é o **único operador de mídia**. Toda a operação de Meta + Google depende dele.
  Sem ele: campanhas sem gestão, sem refresh de ofertas, sem reporting. **Maior ponto único de falha.**
- **Social media** — entrega dos criativos de oferta (quarta) e decisão do que turbinar.
  Sem entrega na quarta: sem carrossel novo, quebra a cadência quarta/sexta/segunda.
- **Comercial** — único elo que poderia fechar o dado lead→contrato. Enquanto não devolve,
  o funil B2B fica cego em qualidade.
- **Acesso ao RD Station** — trava a correção da tag Google B2B e a resolução do gap de CRM.

## Princípios de execução (não quebrar)
- Nunca recriar campanha/conjunto; só desativar, nunca excluir (preserva histórico).
- Estrutura nova roda em paralelo à antiga antes de qualquer desativação.
- Rastreamento tem que ser corrigido **antes** de escalar budget.
