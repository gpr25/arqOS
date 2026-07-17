# roadmap.md — Metas e Próximos Passos · Shopping Cidade

> Prioridades vivas. Fonte das pendências: `../memory/estado-da-conta-shopping-cidade.md`
> (seção 13). Atualizar aqui conforme itens forem resolvidos; registrar em [[../logs/changelog]].

---

## 🔴 Urgente (risco ativo)

| # | Item | Dono / onde resolver |
|---|---|---|
| 1 | Remover spam de apostas no site (WordPress comprometido; risco de política Google Ads) | Quem mantém WordPress do Grupo Gadens |
| 2 | Substituir a LP B2B atual (não qualifica, captcha amador, posicionamento desalinhado) — gerar v2 no Stitch | Gabriel |

## 🟠 Próximos 30 dias (destravar o B2B)

| # | Item | Dono |
|---|---|---|
| 3 | Corrigir tag de conversão Google B2B (integração nativa RD Station preferida); formulário = conversão primária; 7–14 dias de dado real | Gabriel + acesso RD Station |
| 4 | Resolver gap RD Station → CRM (identificar o CRM downstream) | Comercial / TI Gadens |
| 5 | Reunião comercial de sexta: valores, capacidade, conversão histórica, combinar retorno lead→contrato | Gabriel + Comercial |
| 6 | Construir infra B2B do zero: LP + forms + captura (conectar ao RD Station) | Gabriel + design/dev |

## 🟡 No horizonte (quando a base estiver estável)

| # | Item | Dono |
|---|---|---|
| 7 | Auditar rastreamento completo (GTM, CAPI, EMQ, eventos) nas duas plataformas | Gabriel + quem mantém GTM |
| 8 | Confirmar Search B2C paralelo (Marca/Cinema/Eventos/Como Chegar) antes do build | Gabriel |
| 9 | Reestruturar CBO B2B após 7 dias de dado real (seguir playbook) | Gabriel |
| 10 | Documentar performance das 30 ofertas simultâneas para a gestão | Gabriel coleta |
| 11 | Confirmar se raio de 40km é ideal para fluxo físico | Gabriel |
| 12 | Corrigir aba Cinema antes de usar como sinal de conversão | Gabriel + dev |
| 13 | Levar AIV (Ações de Intenção de Visita) à gestão quando o objetivo alcance amadurecer | Gabriel / gestão |

---

## Regra de ouro do roadmap
**Consertar o rastreamento e a captura antes de escalar budget B2B.** Todo o resto do B2B
depende de ter dado confiável de lead — sem isso, escalar só amplifica o erro.
