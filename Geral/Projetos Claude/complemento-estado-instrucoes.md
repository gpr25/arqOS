# COMPLEMENTO DAS INSTRUÇÕES — SEÇÃO "ESTADO ATUAL DA OPERAÇÃO"
## Como resolver a falta de memória entre conversas

> **O problema que isto resolve:** conversas do Claude não compartilham memória. O que você diz na Conversa 4 não chega na Conversa 1. A solução é manter o estado atual da conta nas Instruções do Projeto, que TODA conversa lê. Quando você toma uma decisão estrutural, atualiza esta seção, e todas as conversas passam a saber.

---

## COMO USAR

1. Copie o bloco abaixo para o **topo das Instruções do Projeto** de cada cliente (logo após o título, antes de "IDENTIDADE E PAPEL").
2. **Atualize no momento em que tomar uma decisão que muda o estado** da conta (desativar campanhas, trocar estrutura, mudar budget, pausar cliente). O gatilho é o evento, não o calendário.
3. Mantenha curto: só o que muda como o agente deve raciocinar. Histórico longo vai para o Log, não aqui.
4. Sempre date cada linha, para você e o agente saberem o que é recente.

---

## BLOCO A COLAR (exemplo preenchido — Autoshopping)

```
## ESTADO ATUAL DA OPERAÇÃO — atualizado em 11/06/2026
> Esta seção reflete o estado real da conta HOJE. Tem prioridade sobre qualquer
> suposição. Se o que eu disser numa conversa contradisser isto, isto vale.

**Meta Ads:**
- 26 campanhas de lojista DESATIVADAS em 10/06 (bugs travando a conta: criativos
  sumindo, pixel desmarcando). NÃO considere essas campanhas ativas.
- Estado da conta: [em diagnóstico de bug / operável / aguardando suporte Meta]
- Operação mínima: [1 campanha consolidada de mensagens rodando / nenhuma no ar]
- Boleto/pagamento: [travado desde 30/05, protocolo nº ___ / resolvido]

**Google Ads:**
- Estado: não mapeado, aguardando auditoria do que existe.

**Rastreamento:** pixel/tag instalados, não auditados. Sem CAPI. EMQ não verificado.

**Decisões estruturais recentes:** ver Log de Testes, aba Autoshopping.
```

---

## BLOCO A COLAR (modelo em branco — para qualquer cliente)

```
## ESTADO ATUAL DA OPERAÇÃO — atualizado em __/__/____
> Esta seção reflete o estado real da conta HOJE. Tem prioridade sobre qualquer
> suposição. Se o que eu disser numa conversa contradisser isto, isto vale.

**Meta Ads:**
- Campanhas ativas relevantes: _______________
- Mudanças recentes: _______________
- Pendências/bugs: _______________

**Google Ads:**
- Campanhas ativas relevantes: _______________
- Mudanças recentes: _______________

**Rastreamento:** _______________

**Decisões estruturais recentes:** ver Log de Testes, aba [cliente].
```

---

## REGRA DE OURO

Quando você fizer uma mudança estrutural, faça os dois registros:
1. **Log de Testes** (a história completa: o quê, por quê, resultado depois de X dias) — é a verdade permanente.
2. **Esta seção das instruções** (o estado atual resumido) — é o que o agente lê para não raciocinar com dado velho.

A seção de estado é a "foto de agora". O Log é o "filme completo". Os dois juntos eliminam o problema de memória entre conversas.

*Grupo Gadens · Gabriel Pauletto · Complemento de Estado v1.0*
